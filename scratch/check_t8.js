require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function main() {
    const { data: tutor } = await supabase.from('tutors').select('assigned_students').eq('id', 't8').single();
    console.log(tutor);
}
main().catch(console.error);
