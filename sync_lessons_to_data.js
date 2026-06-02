const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'src/lib/data.js');
let dataContent = fs.readFileSync(dataFile, 'utf-8');

const dbContext = {};
eval(dataContent.replace('export const db =', 'dbContext.db ='));
const db = dbContext.db;

const tsv2 = fs.readFileSync('/Users/yutaka-main/petratutors/scratch/new_lessons.tsv', 'utf-8');

function parseTSV(str) {
    let result = [];
    let row = [];
    let field = '';
    let inQuotes = false;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let nextChar = str[i+1];

        if (inQuotes) {
            if (char === '"') {
                if (nextChar === '"') {
                    field += '"';
                    i++;
                } else {
                    inQuotes = false;
                }
            } else {
                field += char;
            }
        } else {
            if (char === '"') {
                inQuotes = true;
            } else if (char === '\t') {
                row.push(field);
                field = '';
            } else if (char === '\n' || char === '\r') {
                if (char === '\r' && nextChar === '\n') i++;
                row.push(field);
                result.push(row);
                row = [];
                field = '';
            } else {
                field += char;
            }
        }
    }
    if (field || row.length > 0) {
        row.push(field);
        result.push(row);
    }
    return result;
}

const records = parseTSV(tsv2);

const studentsByName = {};
for (const [id, s] of Object.entries(db.students)) {
    studentsByName[s.name.trim()] = id;
}

// Map Tadashi Hashimoto to Tadashi
studentsByName['Tadashi Hashimoto'] = 's1';

let updatedCount = 0;

for (const row of records) {
    if (row.length < 5) continue;
    
    const studentName = row[2].trim();
    const tutorName = row[3];
    const rawDate = row[4]; 
    const type = row[8];
    const topic = row[9];
    const sessionSummary = row[10];
    const rating = row[11];
    
    let studentId = studentsByName[studentName];
    if (!studentId) {
        // If not found, let's create a NEW student!
        studentId = `s_new_${Date.now()}_${Math.floor(Math.random()*1000)}`;
        db.students[studentId] = {
            id: studentId,
            name: studentName,
            course: "General",
            target: "Improve English",
            overallGrade: "B",
            lessons: []
        };
        studentsByName[studentName] = studentId;
        console.log(`Created new student profile for ${studentName}`);
    }
    
    let d = new Date(rawDate);
    const formattedDate = isNaN(d.getTime()) ? rawDate : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    const lessons = db.students[studentId].lessons || [];
    const lessonExists = lessons.some(l => 
        l.date === formattedDate && 
        (l.tutor === tutorName || l.topic === topic)
    );
    
    if (!lessonExists) {
        const newLesson = {
            id: `l_${studentId}_${lessons.length + 1}_${Date.now()}_${Math.floor(Math.random()*1000)}`,
            date: formattedDate,
            tutor: tutorName,
            type: type || "Regular",
            topic: topic || "Lesson",
            rating: rating || "Good",
            sessionSummary: sessionSummary || "",
            observedStrength: row[13] || "",
            currentFocusArea: "",
            interventionStrategy: "",
            responseToIntervention: "",
            impacts: [],
            content: "",
            feedback: row[14] || "",
            homework: row[18] || ""
        };
        db.students[studentId].lessons.push(newLesson);
        updatedCount++;
        console.log(`Added lesson for ${studentName} on ${formattedDate}`);
    } else {
        console.log(`Lesson already exists for ${studentName} on ${formattedDate}`);
    }
}

const dbStudentsJson = JSON.stringify(db.students, null, 4);
const studentsStartStr = '    "students": {\n';
const schedulesStartStr = '    "schedules": [\n';

const startIndex = dataContent.indexOf(studentsStartStr);
const endIndex = dataContent.indexOf(schedulesStartStr);

if (startIndex !== -1 && endIndex !== -1) {
    let replacedStudents = '    "students": ' + dbStudentsJson.replace(/\n/g, '\n    ') + ',\n';
    dataContent = dataContent.substring(0, startIndex) + replacedStudents + dataContent.substring(endIndex);
    fs.writeFileSync(dataFile, dataContent, 'utf-8');
    console.log(`Successfully updated data.js with ${updatedCount} new lessons.`);
} else {
    console.log("Could not find students or schedules section in data.js");
}
