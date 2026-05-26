require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function main() {
    const { data: tutors } = await supabase.from('tutors').select('id, name, assigned_students').in('id', ['t2', 't3', 't6']);
    console.log(tutors);
}
main().catch(console.error);
