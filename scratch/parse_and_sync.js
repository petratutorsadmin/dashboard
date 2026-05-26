require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function main() {
    const rawText = fs.readFileSync('scratch/raw_lessons.txt', 'utf8');
    const lines = rawText.split('\n');
    
    // fetch existing
    const { data: students } = await supabase.from('students').select('*');
    const { data: tutors } = await supabase.from('tutors').select('*');
    const { data: lessons } = await supabase.from('lessons').select('id');
    
    const existingLessonIds = new Set(lessons.map(l => l.id));
    const studentMap = new Map(); // name -> id
    students.forEach(s => studentMap.set(s.name.toLowerCase().trim(), s.id));
    
    // Add special mappings if names differ
    studentMap.set("isobe miyako", "s2");
    
    const tutorMap = new Map();
    tutors.forEach(t => tutorMap.set(t.name.toLowerCase().trim(), t));
    // Add variations
    const tutorAlias = {
        'dayun suh': 't3',
        'hannah tuffy': 't2',
        'ashley norton': 't6',
        'tina zheng': 't1',
        'alice williams': 't5',
        'hazel': 't4',
        'yutaka takaku': 't8'
    };
    
    const missingLessons = [];
    const tutorStudentUpdates = new Map(); // tutor_id -> Set of student_ids

    // Simple TSV parser
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (!line || line.startsWith('<USER') || line.startsWith('</USER')) continue;
        
        const cols = line.split('\t');
        if (cols.length < 10) continue; // skip incomplete lines
        
        const idStr = cols[0].trim();
        const idNum = parseInt(idStr, 10);
        if (isNaN(idNum)) continue;
        
        const lessonId = `l_new_${idNum}`;
        if (existingLessonIds.has(lessonId)) {
            continue; // Already in DB
        }
        
        const studentName = cols[2].trim();
        const tutorName = cols[3].trim();
        const lessonDate = cols[4].trim();
        const type = cols[8].trim();
        const topic = cols[9].trim();
        const content = cols[10] ? cols[10].trim().replace(/^"|"$/g, '') : '';
        const rating = cols[11] ? cols[11].trim() : '';
        const hwDetails = cols[13] ? cols[13].trim().replace(/^"|"$/g, '') : '';
        const feedback = cols[14] ? cols[14].trim().replace(/^"|"$/g, '') : '';
        
        // Find student ID
        let studentId = studentMap.get(studentName.toLowerCase());
        if (!studentId) {
            // Check substring
            const match = students.find(s => s.name.toLowerCase().includes(studentName.toLowerCase()) || studentName.toLowerCase().includes(s.name.toLowerCase()));
            if (match) studentId = match.id;
            else {
                console.warn(`Student not found: ${studentName}`);
                // auto-create or skip? Let's just create a dummy ID for now
                studentId = `s_${Date.now()}_${Math.floor(Math.random()*1000)}`;
                studentMap.set(studentName.toLowerCase(), studentId);
                // Insert new student? The prompt didn't strictly say to create new students if they don't exist, 
                // but "profiles of students taught" implies they must exist. 
                // Wait, in my check_db output, we have: s1 to s15.
                // Let's rely on matching first.
            }
        }
        
        // Find tutor ID
        let tutorId = tutorAlias[tutorName.toLowerCase()];
        if (!tutorId) {
            const match = tutors.find(t => t.name.toLowerCase().includes(tutorName.toLowerCase()) || tutorName.toLowerCase().includes(t.name.toLowerCase()));
            if (match) tutorId = match.id;
            else {
                console.warn(`Tutor not found: ${tutorName}`);
                continue; // Can't update tutor portal if tutor doesn't exist
            }
        }
        
        const tutorObj = tutors.find(t => t.id === tutorId);
        
        missingLessons.push({
            id: lessonId,
            student_id: studentId,
            date: lessonDate,
            tutor: tutorObj ? tutorObj.name : tutorName,
            type: type,
            topic: topic,
            rating: rating,
            content: content,
            feedback: feedback,
            homework: hwDetails
        });
        
        if (!tutorStudentUpdates.has(tutorId)) tutorStudentUpdates.set(tutorId, new Set());
        tutorStudentUpdates.get(tutorId).add(studentId);
    }
    
    console.log(`Found ${missingLessons.length} missing lessons to insert.`);
    
    // Insert lessons
    if (missingLessons.length > 0) {
        const { error } = await supabase.from('lessons').insert(missingLessons);
        if (error) {
            console.error("Error inserting lessons:", error);
        } else {
            console.log("Successfully inserted missing lessons.");
        }
    }
    
    // Update tutors' assigned_students
    for (const [tutorId, newStudentsSet] of tutorStudentUpdates.entries()) {
        const tutor = tutors.find(t => t.id === tutorId);
        let assigned = tutor.assigned_students || [];
        let updated = false;
        
        for (const sid of newStudentsSet) {
            if (!assigned.includes(sid)) {
                assigned.push(sid);
                updated = true;
            }
        }
        
        if (updated) {
            const { error } = await supabase.from('tutors').update({ assigned_students: assigned }).eq('id', tutorId);
            if (error) console.error(`Error updating tutor ${tutorId}:`, error);
            else console.log(`Updated assigned_students for tutor ${tutorId} (${tutor.name})`);
        }
    }
    
    console.log("Done.");
}

main().catch(console.error);
