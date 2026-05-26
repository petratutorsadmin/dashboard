require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function main() {
    const { data: lessons } = await supabase.from('lessons').select('id, student_id, tutor, date, topic').in('id', ['l_new_27']);
    console.log(lessons);
}
main().catch(console.error);
