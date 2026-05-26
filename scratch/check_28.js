require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function main() {
    const { data: lesson } = await supabase.from('lessons').select('content, feedback').eq('id', 'l_new_28').single();
    console.log(lesson);
}
main().catch(console.error);
