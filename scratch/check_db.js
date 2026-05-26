require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function main() {
    const { data: students } = await supabase.from('students').select('id, name');
    const { data: tutors } = await supabase.from('tutors').select('id, name, assigned_students');
    const { data: lessons } = await supabase.from('lessons').select('id, student_id, date, tutor, topic');
    
    console.log("Students:", JSON.stringify(students, null, 2));
    console.log("Tutors:", JSON.stringify(tutors, null, 2));
    console.log("Lessons count:", lessons ? lessons.length : 0);
    console.log("Lessons:", JSON.stringify(lessons, null, 2));
}

main().catch(console.error);
