require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const { db } = require('./src/lib/data.js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function syncStudents() {
  const students = Object.values(db.students);
  console.log(`Preparing to sync ${students.length} students to Supabase...`);

  for (const student of students) {
    const payload = {
      id: student.id,
      name: student.name,
      course: student.course || null,
      target: student.target || null,
      overall_grade: student.overallGrade || null,
      core_issue: student.coreIssue || null,
      core_issue_detail: student.coreIssueDetail || null,
      focus_this_month: student.focusThisMonth || null,
      petra_insight: student.petraInsight || null,
      skills: student.skills ? student.skills : null,
      phases: student.phases ? student.phases : null,
      next_plan: student.nextPlan ? student.nextPlan : null
    };

    const { data, error } = await supabase
      .from('students')
      .upsert(payload)
      .select();

    if (error) {
      console.error(`Error syncing student ${student.id} (${student.name}):`, error.message);
    } else {
      console.log(`✅ Synced student: ${student.id} (${student.name})`);
    }
  }

  console.log('Finished syncing students to Supabase!');
}

syncStudents();
