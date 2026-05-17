const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase environment variables are missing!");
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
  "Konan Saito": "s11",
  "Hiroyuki Iwakura": "s12",
  "Takuma": "s13",
  "Yuki Takenaka": "s14",
  "Tomioka": "s15"
};

const tutorMap = {
  "Tina Zheng": "t1",
  "Hannah Tuffy": "t2",
  "Dayun Suh": "t3",
  "Hazel": "t4",
  "Alice Williams": "t5",
  "Ashley Norton": "t6",
  "Riku Ishida": "t7",
  "Yutaka Takaku": "t8"
};

async function seed() {
  console.log("Starting schedules database seeding...");

  // 1. Insert missing Tutors
  const newTutors = [
    { id: 't6', name: 'Ashley Norton', role: 'tutor', username: 'ashley', password: 'petra2026', assigned_students: [], today_agenda: [] },
    { id: 't7', name: 'Riku Ishida', role: 'tutor', username: 'riku', password: 'petra2026', assigned_students: [], today_agenda: [] },
    { id: 't8', name: 'Yutaka Takaku', role: 'tutor', username: 'yutaka_t', password: 'petra2026', assigned_students: [], today_agenda: [] }
  ];

  for (const t of newTutors) {
    const { error } = await supabase.from('tutors').upsert({
      id: t.id,
      name: t.name,
      role: t.role,
      username: t.username,
      password: t.password,
      assigned_students: t.assigned_students,
      today_agenda: t.today_agenda
    });
    if (error) {
      console.warn(`Warning inserting tutor ${t.name}:`, error.message);
    } else {
      console.log(`Tutor seeded/verified: ${t.name}`);
    }
  }

  // 2. Insert missing Students
  const newStudents = [
    { id: 's12', name: 'Hiroyuki Iwakura', course: 'EIKEN Grade 2', target: 'Needs Improvement', overall_grade: 'C' },
    { id: 's13', name: 'Takuma', course: 'EIKEN Grade Pre-2', target: 'Needs Improvement', overall_grade: 'C' },
    { id: 's14', name: 'Yuki Takenaka', course: 'EIKEN Grade 3', target: 'Needs Improvement', overall_grade: 'C' },
    { id: 's15', name: 'Tomioka', course: 'EIKEN Grade 2', target: 'Needs Improvement', overall_grade: 'C' }
  ];

  for (const s of newStudents) {
    const { error } = await supabase.from('students').upsert({
      id: s.id,
      name: s.name,
      course: s.course,
      target: s.target,
      overall_grade: s.overall_grade
    });
    if (error) {
      console.warn(`Warning inserting student ${s.name}:`, error.message);
    } else {
      console.log(`Student seeded/verified: ${s.name}`);
    }
  }

  // 3. Parse and insert Schedules
  const filePath = path.join(__dirname, 'new_schedules_data.txt');
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.trim().split('\n');

  console.log(`Parsing ${lines.length} schedule rows...`);

  const scheduleRows = [];

  lines.forEach(line => {
    if (!line.trim()) return;
    const parts = line.split('\t');
    if (parts.length < 10) return;

    const id = parts[0].trim();
    const studentName = parts[1].trim();
    const tutorName = parts[2].trim();
    const dateTimeStr = parts[3].trim();
    const paymentStatus = parts[4].trim();
    const duration = parseInt(parts[5].trim(), 10);
    const rate = parts[6].trim();
    const billedAmount = parts[7].trim();
    const payoutAmount = parts[8].trim();
    const status = parts[9].trim();
    const margin = parts[11] ? parts[11].trim() : '0';

    const sId = studentMap[studentName] || null;
    const tId = tutorMap[tutorName] || null;

    // Convert date time JST string format
    const formattedTimestamp = `${dateTimeStr}:00+09:00`; 

    scheduleRows.push({
      id,
      student_name: studentName,
      tutor_name: tutorName,
      student_id: sId,
      tutor_id: tId,
      date_time: formattedTimestamp,
      duration,
      status,
      payment_status: paymentStatus,
      billed_amount: billedAmount,
      payout_amount: payoutAmount,
      margin
    });
  });

  console.log(`Upserting ${scheduleRows.length} schedules to Supabase...`);

  const { error } = await supabase.from('schedules').upsert(scheduleRows);

  if (error) {
    console.error("CRITICAL ERROR: Failed to seed schedules table in Supabase! Make sure you created the 'schedules' table first in your Supabase SQL editor using our SQL script.", error.message);
  } else {
    console.log("SUCCESS! All schedule records have been successfully seeded to your live Supabase database!");
  }
}

seed();
