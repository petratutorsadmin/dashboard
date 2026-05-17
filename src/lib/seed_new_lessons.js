const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

// Manually parse the .env.local file
const envPath = path.join(__dirname, "../../.env.local");
const envContent = fs.readFileSync(envPath, "utf-8");
const env = {};
envContent.split("\n").forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    const key = match[1];
    let value = match[2] || "";
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
    env[key] = value;
  }
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL || "https://ayovausnbakzwiudziar.supabase.co";
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseAnonKey) {
  console.error("Error: NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined in env!");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
          field += '"';
          i += 2;
          continue;
        } else {
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

async function runSeeder() {
  console.log("Connecting to Supabase at:", supabaseUrl);
  
  // 1. Seed Students
  console.log("Upserting new students...");
  const { error: stdErr } = await supabase.from("students").upsert(newStudents);
  if (stdErr) {
    console.error("Error upserting students:", stdErr);
    process.exit(1);
  }
  console.log(`✓ successfully seeded ${newStudents.length} students.`);

  // 2. Parse Lessons Data
  const rawDataPath = path.join(__dirname, "new_lessons_data.txt");
  const content = fs.readFileSync(rawDataPath, "utf-8");
  const rows = parseTSV(content);

  const lessonsToInsert = [];

  for (const row of rows) {
    const serialNo = row[0];
    const submitTime = row[1];
    const studentName = row[2];
    const tutorName = row[3];
    const lessonDateTime = row[4];
    const duration = row[5];
    const type = row[8];
    const topic = row[9];
    const contentField = row[10];
    const rating = row[11];
    const homework = row[13];
    const sessionSummary = row[14];
    const notes = row[15];

    if (!studentName || studentName === "") {
      continue;
    }

    const studentId = studentMap[studentName];
    if (!studentId) {
      console.warn(`Warning: Student ID mapping missing for "${studentName}"`);
      continue;
    }

    const lessonId = `l_new_${serialNo}`;

    // Format display date
    let displayDate = lessonDateTime || submitTime || "";
    if (displayDate.includes(" ")) {
      displayDate = displayDate.split(" ")[0];
    }
    if (displayDate.includes("-")) {
      const parts = displayDate.split("-");
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      displayDate = `${months[parseInt(parts[1], 10) - 1]} ${parseInt(parts[2], 10)}, ${parts[0]}`;
    } else if (displayDate.includes("/")) {
      const parts = displayDate.split("/");
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      displayDate = `${months[parseInt(parts[1], 10) - 1]} ${parseInt(parts[0], 10)}, ${parts[2]}`;
    }

    lessonsToInsert.push({
      id: lessonId,
      student_id: studentId,
      date: displayDate,
      tutor: tutorName,
      type: type || null,
      topic: topic || null,
      rating: rating || null,
      session_summary: sessionSummary || null,
      content: contentField || null,
      homework: homework || null,
      feedback: notes || null
    });
  }

  console.log(`Parsed ${lessonsToInsert.length} lessons. Upserting into live Supabase...`);
  
  const { error: lesErr } = await supabase.from("lessons").upsert(lessonsToInsert);
  if (lesErr) {
    console.error("Error upserting lessons:", lesErr);
    process.exit(1);
  }

  console.log(`✓ successfully upserted ${lessonsToInsert.length} lessons into database!`);
  
  // Print new total counts to verify
  const { data: stCount } = await supabase.from("students").select("id");
  const { data: leCount } = await supabase.from("lessons").select("id");
  console.log(`\n--- Verification Counts ---`);
  console.log(`Total live Students: ${stCount.length}`);
  console.log(`Total live Lessons: ${leCount.length}`);
}

runSeeder().catch(console.error);
