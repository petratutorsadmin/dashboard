const fs = require("fs");
const path = require("path");

const rawDataPath = path.join(__dirname, "new_lessons_data.txt");
const content = fs.readFileSync(rawDataPath, "utf-8");

const studentMap = {
  "Tadashi Hashimoto": "s1",
  "Miyako Isobe": "s2",
  "Sarah Sugiyama": "s3",
  "Shinichi Fukui": "s4",
  "Kizuki Ishida": "s5",
  "Lee Akihiro": "s6",
  "Shoji Takanao": "s7",
  "Takeshi Kawana": "s8",
  "Yusuke": "s9",
  "Yuta Sumiya": "s10",
  "Konan Saito": "s11"
};

// Simple TSV parser that handles newlines and quoted fields correctly
function parseTSV(text) {
  const result = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  let i = 0;

  while (i < text.length) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (inQuotes) {
      if (char === '"') {
        if (nextChar === '"') {
          // Double double quotes inside a quote means escaped double quote
          field += '"';
          i += 2;
          continue;
        } else {
          // End of quoted field
          inQuotes = false;
          i++;
          continue;
        }
      }
      field += char;
      i++;
    } else {
      if (char === '"') {
        inQuotes = true;
        i++;
      } else if (char === '\t') {
        row.push(field.trim());
        field = "";
        i++;
      } else if (char === '\r' || char === '\n') {
        row.push(field.trim());
        field = "";
        
        // Skip consecutive newlines (handling CRLF)
        if (char === '\r' && nextChar === '\n') {
          i += 2;
        } else {
          i++;
        }
        
        if (row.some(val => val !== "")) {
          result.push(row);
        }
        row = [];
      } else {
        field += char;
        i++;
      }
    }
  }
  
  if (field !== "" || row.length > 0) {
    row.push(field.trim());
    if (row.some(val => val !== "")) {
      result.push(row);
    }
  }

  return result;
}

const rows = parseTSV(content);

console.log(`Parsed ${rows.length} rows from file.`);

let sql = `-- ==========================================
-- INSERTING NEW STUDENTS AND SEEDING NEW LESSONS
-- ==========================================\n\n`;

// 1. Generate new students inserts
sql += `-- 1. Creating new students to satisfy foreign keys\n`;
const newStudents = [
  { id: 's4', name: 'Shinichi Fukui', course: 'TOEIC & Speaking', target: 'Improve everyday conversations', overall_grade: 'B' },
  { id: 's5', name: 'Kizuki Ishida', course: 'Biology & Science', target: 'School Biology preparation', overall_grade: 'A' },
  { id: 's6', name: 'Lee Akihiro', course: 'British English prep', target: 'Pronunciation and vocabulary', overall_grade: 'A' },
  { id: 's7', name: 'Shoji Takanao', course: 'Business English & AI', target: 'AI and market research terminology', overall_grade: 'A' },
  { id: 's8', name: 'Takeshi Kawana', course: 'Everyday English', target: 'Conversation and speaking flow', overall_grade: 'B' },
  { id: 's9', name: 'Yusuke', course: 'Conversation & speaking', target: 'Pronunciation and natural speech', overall_grade: 'B' },
  { id: 's10', name: 'Yuta Sumiya', course: 'Casual Conversation', target: 'Interpersonal small-talk and communication', overall_grade: 'A' },
  { id: 's11', name: 'Konan Saito', course: 'English communication', target: 'Spoken self-introductions and past tense description', overall_grade: 'B' }
];

for (const student of newStudents) {
  sql += `INSERT INTO students (id, name, course, target, overall_grade) \nVALUES ('${student.id}', '${student.name}', '${student.course}', '${student.target}', '${student.overall_grade}') \nON CONFLICT (id) DO NOTHING;\n`;
}
sql += `\n`;

// 2. Generate lessons inserts
sql += `-- 2. Seeding lessons data\n`;

let skipped = 0;
let added = 0;

for (const row of rows) {
  // Extract columns
  const serialNo = row[0];
  const submitTime = row[1];
  const studentName = row[2];
  const tutorName = row[3];
  const lessonDateTime = row[4];
  const duration = row[5];
  const repeatStudent = row[6];
  const repeatTutor = row[7];
  const type = row[8];
  const topic = row[9];
  const contentField = row[10];
  const rating = row[11];
  const isHomework = row[12];
  const homework = row[13];
  const sessionSummary = row[14];
  const notes = row[15];

  // Skip rows that don't have basic student details (like row 1)
  if (!studentName || studentName === "") {
    skipped++;
    continue;
  }

  const studentId = studentMap[studentName];
  if (!studentId) {
    console.warn(`Warning: No student ID mapping found for name "${studentName}"`);
    skipped++;
    continue;
  }

  // Format lesson ID
  const lessonId = `l_new_${serialNo}`;

  // Safe SQL String Escaper helper
  const esc = (val) => {
    if (val === undefined || val === null || val === "") return "NULL";
    return `'${val.replace(/'/g, "''")}'`;
  };

  // Convert date format "2026-04-21 17:30" or "25/4/2026 23:18" to readable date
  let displayDate = lessonDateTime || submitTime || "";
  if (displayDate.includes(" ")) {
    displayDate = displayDate.split(" ")[0]; // Get the date part
  }
  // Convert 2026-04-21 to April 21, 2026
  if (displayDate.includes("-")) {
    const parts = displayDate.split("-");
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const year = parts[0];
    const month = months[parseInt(parts[1], 10) - 1];
    const day = parts[2];
    displayDate = `${month} ${parseInt(day, 10)}, ${year}`;
  } else if (displayDate.includes("/")) {
    const parts = displayDate.split("/");
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = parts[0];
    const month = months[parseInt(parts[1], 10) - 1];
    const year = parts[2];
    displayDate = `${month} ${parseInt(day, 10)}, ${year}`;
  }

  sql += `INSERT INTO lessons (id, student_id, date, tutor, type, topic, rating, session_summary, content, homework, feedback) \nVALUES (\n  '${lessonId}', \n  '${studentId}', \n  '${displayDate}', \n  ${esc(tutorName)}, \n  ${esc(type)}, \n  ${esc(topic)}, \n  ${esc(rating)}, \n  ${esc(sessionSummary)}, \n  ${esc(contentField)}, \n  ${esc(homework)}, \n  ${esc(notes)}\n)\nON CONFLICT (id) DO UPDATE SET\n  student_id = EXCLUDED.student_id,\n  date = EXCLUDED.date,\n  tutor = EXCLUDED.tutor,\n  type = EXCLUDED.type,\n  topic = EXCLUDED.topic,\n  rating = EXCLUDED.rating,\n  session_summary = EXCLUDED.session_summary,\n  content = EXCLUDED.content,\n  homework = EXCLUDED.homework,\n  feedback = EXCLUDED.feedback;\n\n`;

  added++;
}

const outputPath = path.join(__dirname, "insert_new_lessons.sql");
fs.writeFileSync(outputPath, sql, "utf-8");

console.log(`Success: Generated SQL inserts for ${added} lessons. Skipped ${skipped} rows.`);
console.log(`Saved SQL file to: ${outputPath}`);
