require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function main() {
    const rawText = fs.readFileSync('scratch/raw_lessons.txt', 'utf8');
    const lines = rawText.split('\n');
    
    const { data: students } = await supabase.from('students').select('*');
    const { data: tutors } = await supabase.from('tutors').select('*');
    const { data: lessons } = await supabase.from('lessons').select('*');
    
    console.log(`Total students: ${students.length}`);
    console.log(`Total tutors: ${tutors.length}`);
    console.log(`Total lessons: ${lessons.length}`);
    
    const tutorAlias = {
        'dayun suh': 't3',
        'hannah tuffy': 't2',
        'ashley norton': 't6',
        'tina zheng': 't1',
        'alice williams': 't5',
        'hazel': 't4',
        'yutaka takaku': 't8',
        'riku': 't7',
        'riku ishida': 't7',
        'tina': 't1',
        'day': 't3'
    };
    
    // Map names to student IDs
    const studentMap = new Map();
    students.forEach(s => studentMap.set(s.name.toLowerCase().trim(), s.id));
    studentMap.set("isobe miyako", "s2");
    
    let parsedCount = 0;
    const requiredLessons = [];
    const missingLessons = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (!line || line.startsWith('<USER') || line.startsWith('</USER')) continue;
        const cols = line.split('\t');
        if (cols.length < 10) continue;
        
        const idStr = cols[0].trim();
        const idNum = parseInt(idStr, 10);
        if (isNaN(idNum)) continue;
        
        parsedCount++;
        const studentName = cols[2].trim();
        const tutorName = cols[3].trim();
        const lessonDate = cols[4].trim();
        const topic = cols[9].trim();
        
        let studentId = studentMap.get(studentName.toLowerCase());
        if (!studentId) {
            const match = students.find(s => s.name.toLowerCase().includes(studentName.toLowerCase()) || studentName.toLowerCase().includes(s.name.toLowerCase()));
            if (match) studentId = match.id;
        }
        
        let tutorId = tutorAlias[tutorName.toLowerCase()];
        if (!tutorId) {
            const match = tutors.find(t => t.name.toLowerCase().includes(tutorName.toLowerCase()) || tutorName.toLowerCase().includes(t.name.toLowerCase()));
            if (match) tutorId = match.id;
        }

        requiredLessons.push({
            id: `l_new_${idNum}`,
            studentName,
            studentId,
            tutorName,
            tutorId,
            topic
        });
        
        const existingLesson = lessons.find(l => l.id === `l_new_${idNum}` || (l.student_id === studentId && l.topic === topic));
        if (!existingLesson) {
            missingLessons.push(`Missing Lesson: ID ${idNum}, Student: ${studentName}, Topic: ${topic}`);
        }
    }
    
    console.log(`Parsed ${parsedCount} rows from TSV.`);
    console.log(`Missing lessons check: ${missingLessons.length} missing.`);
    missingLessons.forEach(m => console.log(m));
    
    // Check tutor assignments
    const tutorNeededStudents = new Map();
    for (const req of requiredLessons) {
        if (!req.tutorId || !req.studentId) {
            console.log(`Missing ID mapping for row: Tutor: ${req.tutorName}(${req.tutorId}), Student: ${req.studentName}(${req.studentId})`);
            continue;
        }
        if (!tutorNeededStudents.has(req.tutorId)) tutorNeededStudents.set(req.tutorId, new Set());
        tutorNeededStudents.get(req.tutorId).add(req.studentId);
    }
    
    const missingAssignments = [];
    for (const tutor of tutors) {
        const needed = tutorNeededStudents.get(tutor.id) || new Set();
        const assigned = new Set(tutor.assigned_students || []);
        for (const sid of needed) {
            if (!assigned.has(sid)) {
                missingAssignments.push(`Tutor ${tutor.name} (${tutor.id}) is missing student ${sid} in assigned_students.`);
            }
        }
    }
    
    console.log(`Missing tutor assignments: ${missingAssignments.length}`);
    missingAssignments.forEach(m => console.log(m));
}

main().catch(console.error);
