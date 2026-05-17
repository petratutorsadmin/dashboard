-- SUPABASE SCHEDULES MIGRATION
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
INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('38', 'Hiroyuki Iwakura', 'Hannah Tuffy', 's12', 't2', '2026-04-10 11:30:00+09:00', 60, 'Completed', 'Paid', '¥4,000.00', '¥1,800.00', '2200') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('24', 'Tadashi Hashimoto', 'Tina Zheng', 's1', 't1', '2026-04-10 18:00:00+09:00', 45, 'Completed', 'Paid', '¥5,894.00', '¥1,650.00', '4244') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('23', 'Tadashi Hashimoto', 'Tina Zheng', 's1', 't1', '2026-04-17 18:00:00+09:00', 45, 'Completed', 'Paid', '¥5,894.00', '¥1,650.00', '4244') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('41', 'Kizuki Ishida', 'Ashley Norton', 's5', 't6', '2026-04-19 19:30:00+09:00', 60, 'Completed', 'Unpaid', '¥3,000.00', '¥2,000.00', '1000') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('25', 'Miyako Isobe', 'Dayun Suh', 's2', 't3', '2026-04-21 17:30:00+09:00', 90, 'Completed', 'Paid', '¥6,000.00', '¥3,000.00', '3000') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('28', 'Tadashi Hashimoto', 'Tina Zheng', 's1', 't1', '2026-04-23 18:15:00+09:00', 45, 'Completed', 'Paid', '¥5,894.00', '¥1,650.00', '4244') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('29', 'Tadashi Hashimoto', 'Riku Ishida', 's1', 't7', '2026-04-24 17:30:00+09:00', 45, 'Completed', 'Paid', '¥5,894.00', '¥0.00', '5894') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('19', 'Sarah Sugiyama', 'Hannah Tuffy', 's3', 't2', '2026-04-26 09:00:00+09:00', 60, 'Completed', 'Paid', '¥4,000.00', '¥2,000.00', '2000') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('27', 'Shinichi Fukui', 'Hannah Tuffy', 's4', 't2', '2026-04-27 10:00:00+09:00', 60, 'Completed', 'Unpaid', '¥4,000.00', '¥2,000.00', '2000') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('48', 'Miyako Isobe', 'Dayun Suh', 's2', 't3', '2026-04-28 17:30:00+09:00', 90, 'Completed', 'Paid', '¥6,000.00', '¥3,000.00', '3000') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('22', 'Kizuki Ishida', 'Ashley Norton', 's5', 't6', '2026-04-29 21:00:00+09:00', 60, 'Completed', 'Unpaid', '¥3,000.00', '¥2,000.00', '1000') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('20', 'Tadashi Hashimoto', 'Tina Zheng', 's1', 't1', '2026-04-30 18:15:00+09:00', 45, 'Completed', 'Unpaid', '¥5,894.00', '¥1,650.00', '4244') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('53', 'Tadashi Hashimoto', 'Alice Williams', 's1', 't5', '2026-05-01 18:00:00+09:00', 45, 'Completed', 'Paid', '¥5,894.00', '¥1,650.00', '4244') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('54', 'Lee Akihiro', 'Alice Williams', 's6', 't5', '2026-05-03 10:00:00+09:00', 60, 'Completed', 'Paid', '¥2,000.00', '¥1,800.00', '200') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('66', 'Shoji Takanao', 'Hannah Tuffy', 's7', 't2', '2026-05-05 15:00:00+09:00', 60, 'Completed', 'Paid', '¥4,000.00', '¥2,000.00', '2000') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('31', 'Takeshi Kawana', 'Hannah Tuffy', 's8', 't2', '2026-05-06 11:10:00+09:00', 60, 'Completed', 'Paid', '¥4,000.00', '¥2,000.00', '2000') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('74', 'Yusuke', 'Hannah Tuffy', 's9', 't2', '2026-05-06 18:30:00+09:00', 30, 'Completed', 'Unpaid', '¥2,000.00', '¥1,000.00', '1000') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('26', 'Yuta Sumiya', 'Hannah Tuffy', 's10', 't2', '2026-05-07 18:00:00+09:00', 60, 'Completed', 'Paid', '¥4,000.00', '¥2,000.00', '2000') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('55', 'Tadashi Hashimoto', 'Alice Williams', 's1', 't5', '2026-05-07 18:15:00+09:00', 60, 'Completed', 'Paid', '¥7,500.00', '¥2,200.00', '5300') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('50', 'Tadashi Hashimoto', 'Hazel', 's1', 't4', '2026-05-08 18:00:00+09:00', 45, 'Completed', 'Paid', '¥5,894.00', '¥1,650.00', '4244') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('58', 'Sarah Sugiyama', 'Hannah Tuffy', 's3', 't2', '2026-05-09 20:00:00+09:00', 60, 'Completed', 'Paid', '¥4,000.00', '¥2,200.00', '1800') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('75', 'Takuma', 'Ashley Norton', 's13', 't6', '2026-05-09 21:00:00+09:00', 60, 'Completed', 'Unpaid', '¥4,000.00', '¥2,000.00', '2000') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('73', 'Yuki Takenaka', 'Ashley Norton', 's14', 't6', '2026-05-10 10:00:00+09:00', 60, 'Completed', 'Paid', '¥4,000.00', '¥2,000.00', '2000') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('67', 'Miyako Isobe', 'Dayun Suh', 's2', 't3', '2026-05-12 17:30:00+09:00', 90, 'Completed', 'Unpaid', '¥4,000.00', '¥2,200.00', '1800') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('76', 'Takeshi Kawana', 'Hannah Tuffy', 's8', 't2', '2026-05-13 13:40:00+09:00', 60, 'Completed', 'Unpaid', '¥4,000.00', '¥2,000.00', '2000') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('84', 'Yuta Sumiya', 'Hannah Tuffy', 's10', 't2', '2026-05-15 12:30:00+09:00', 60, 'Completed', 'Unpaid', '¥4,000.00', '¥2,000.00', '2000') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('56', 'Tadashi Hashimoto', 'Yutaka Takaku', 's1', 't8', '2026-05-15 18:15:00+09:00', 45, 'Completed', 'Paid', '¥5,894.00', '¥0.00', '5894') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('88', 'Sarah Sugiyama', 'Hannah Tuffy', 's3', 't2', '2026-05-17 09:00:00+09:00', 60, 'Completed', 'Unpaid', '¥4,000.00', '¥2,200.00', '1800') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('79', 'Shoji Takanao', 'Hannah Tuffy', 's7', 't2', '2026-05-17 18:00:00+09:00', 60, 'Completed', 'Unpaid', '¥4,000.00', '¥2,000.00', '2000') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('90', 'Tomioka', 'Alice Williams', 's15', 't5', '2026-05-19 08:00:00+09:00', 30, 'Scheduled', 'Unpaid', '¥0.00', '¥900.00', '-900') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('68', 'Miyako Isobe', 'Dayun Suh', 's2', 't3', '2026-05-19 17:30:00+09:00', 90, 'Scheduled', 'Unpaid', '¥6,000.00', '¥2,200.00', '3800') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('83', 'Kizuki Ishida', 'Ashley Norton', 's5', 't6', '2026-05-19 20:30:00+09:00', 45, 'Scheduled', 'Unpaid', '¥3,125.00', '¥1,500.00', '1625') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('91', 'Yuta Sumiya', 'Hannah Tuffy', 's10', 't2', '2026-05-21 16:30:00+09:00', 60, 'Scheduled', 'Unpaid', '¥4,000.00', '¥2,000.00', '2000') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('57', 'Tadashi Hashimoto', 'Alice Williams', 's1', 't5', '2026-05-21 18:15:00+09:00', 60, 'Scheduled', 'Paid', '¥7,500.00', '¥2,200.00', '5300') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('51', 'Tadashi Hashimoto', 'Hazel', 's1', 't4', '2026-05-22 18:00:00+09:00', 60, 'Scheduled', 'Paid', '¥7,500.00', '¥2,200.00', '5300') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('69', 'Miyako Isobe', 'Dayun Suh', 's2', 't3', '2026-05-26 17:30:00+09:00', 90, 'Scheduled', 'Unpaid', '¥6,000.00', '¥2,200.00', '3800') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('89', 'Takeshi Kawana', 'Hannah Tuffy', 's8', 't2', '2026-05-27 11:10:00+09:00', 60, 'Scheduled', 'Unpaid', '¥4,000.00', '¥2,000.00', '2000') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('59', 'Tadashi Hashimoto', 'Hazel', 's1', 't4', '2026-05-28 18:15:00+09:00', 60, 'Scheduled', 'Paid', '¥7,500.00', '¥2,200.00', '5300') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('52', 'Tadashi Hashimoto', 'Hazel', 's1', 't4', '2026-05-29 18:00:00+09:00', 60, 'Scheduled', 'Paid', '¥7,500.00', '¥2,200.00', '5300') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('60', 'Sarah Sugiyama', 'Hannah Tuffy', 's3', 't2', '2026-05-31 11:00:00+09:00', 120, 'Scheduled', 'Unpaid', '¥8,000.00', '¥4,400.00', '3600') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

INSERT INTO schedules (id, student_name, tutor_name, student_id, tutor_id, date_time, duration, status, payment_status, billed_amount, payout_amount, margin) 
VALUES ('92', 'Shoji Takanao', 'Hannah Tuffy', 's7', 't2', '2026-05-31 18:00:00+09:00', 60, 'Scheduled', 'Unpaid', '¥4,000.00', '¥2,000.00', '2000') 
ON CONFLICT (id) DO UPDATE SET 
  student_name = EXCLUDED.student_name, 
  tutor_name = EXCLUDED.tutor_name, 
  student_id = EXCLUDED.student_id, 
  tutor_id = EXCLUDED.tutor_id, 
  date_time = EXCLUDED.date_time, 
  duration = EXCLUDED.duration, 
  status = EXCLUDED.status, 
  payment_status = EXCLUDED.payment_status, 
  billed_amount = EXCLUDED.billed_amount, 
  payout_amount = EXCLUDED.payout_amount, 
  margin = EXCLUDED.margin;

