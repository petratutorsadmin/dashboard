require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function main() {
    const { data: lessons } = await supabase.from('lessons').select('id, topic, content, feedback').in('id', ['l_new_23', 'l_new_25', 'l_new_26', 'l_new_30']);
    console.log(lessons);
}
main().catch(console.error);
