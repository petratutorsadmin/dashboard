const fs = require('fs');
const path = require('path');

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

async function generate() {
  const filePath = path.join(__dirname, 'new_schedules_data.txt');
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.trim().split('\n');

  let sql = `-- SUPABASE SCHEDULES MIGRATION
-- Copy and run this script in your Supabase SQL Editor to initialize and populate schedules.

-- 1. Create Schedules Table
CREATE TABLE IF NOT EXISTS schedules (
    id TEXT PRIMARY KEY,
    student_name TEXT NOT NULL,
    tutor_name TEXT NOT NULL,
    student_id TEXT REFERENCES students(id) ON DELETE SET NULL,
    tutor_id TEXT REFERENCES tutors(id) ON DELETE SET NULL,
    date_time TIMESTAMP WITH TIME ZONE NOT NULL,
    duration INTEGER NOT NULL,
    status TEXT NOT NULL,
    payment_status TEXT,
    billed_amount TEXT,
    payout_amount TEXT,
    margin TEXT
);

-- 2. Insert Missing Tutors (with secure default credentials)
INSERT INTO tutors (id, name, role, username, password, assigned_students, today_agenda) VALUES
('t6', 'Ashley Norton', 'tutor', 'ashley', 'petra2026', ARRAY[]::TEXT[], ARRAY[]::TEXT[]),
('t7', 'Riku Ishida', 'tutor', 'riku', 'petra2026', ARRAY[]::TEXT[], ARRAY[]::TEXT[]),
('t8', 'Yutaka Takaku', 'tutor', 'yutaka_t', 'petra2026', ARRAY[]::TEXT[], ARRAY[]::TEXT[])
ON CONFLICT (id) DO NOTHING;

-- 3. Insert Missing Students (with safe placeholders)
INSERT INTO students (id, name, course, target, overall_grade) VALUES
('s12', 'Hiroyuki Iwakura', 'EIKEN Grade 2', 'Needs Improvement', 'C'),
('s13', 'Takuma', 'EIKEN Grade Pre-2', 'Needs Improvement', 'C'),
('s14', 'Yuki Takenaka', 'EIKEN Grade 3', 'Needs Improvement', 'C'),
('s15', 'Tomioka', 'EIKEN Grade 2', 'Needs Improvement', 'C')
ON CONFLICT (id) DO NOTHING;

-- 4. Insert Schedule Records
`;

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
    const isRecorded = parts[10].trim();
    const margin = parts[11] ? parts[11].trim() : '0';

    const sId = studentMap[studentName] ? `'${studentMap[studentName]}'` : 'NULL';
    const tId = tutorMap[tutorName] ? `'${tutorMap[tutorName]}'` : 'NULL';

    // Format TIMESTAMP WITH TIME ZONE from '2026-04-10 11:30' format
    const formattedTimestamp = `${dateTimeStr}:00+09:00`; // Assuming JST time zone

    sql += `INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) \nVALUES ('${id}', '${studentName.replace(/'/g, "''")}', '${tutorName.replace(/'/g, "''")}', ${sId}, ${tId}, '${formattedTimestamp}', ${duration}, '${status}', '${paymentStatus}', '${billedAmount}', '${payoutAmount}', '${margin}') \nON CONFLICT (id) DO UPDATE SET \n  student_name = EXCLUDED.student_name, \n  tutor_name = EXCLUDED.tutor_name, \n  student_id = EXCLUDED.student_id, \n  tutor_id = EXCLUDED.tutor_id, \n  date_time = EXCLUDED.date_time, \n  duration = EXCLUDED.duration, \n  status = EXCLUDED.status, \n  payment_status = EXCLUDED.payment_status, \n  billed_amount = EXCLUDED.billed_amount, \n  payout_amount = EXCLUDED.payout_amount, \n  margin = EXCLUDED.margin;\n\n`;
  });

  const outputFilePath = path.join(__dirname, '../../supabase_schedules_migration.sql');
  fs.writeFileSync(outputFilePath, sql, 'utf8');
  console.log(`Generated schedules SQL migration script successfully at ${outputFilePath}!`);
}

generate();
