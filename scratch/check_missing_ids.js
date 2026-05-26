require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function main() {
    const { data: lessons } = await supabase.from('lessons').select('id');
    const ids = lessons.map(l => l.id).sort();
    console.log(ids);
}
main().catch(console.error);
