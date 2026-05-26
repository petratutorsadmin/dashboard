require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function main() {
    const lesson = {
        id: 'l_new_27',
        student_id: 's2',
        date: '2026-05-19 17:30',
        tutor: 'Day',
        type: 'Regular',
        topic: 'English Language',
        rating: 'Good',
        content: 'Homework and Vocabulary Review\nR and L pronunciation practice\nGrammar practice from Free English Grammar Ebook (Pg. 10-16)\n4000 Essential English Words reading practice  (Pg. 18)',
        homework: '- Diary Entry\n- R sound practice\n- revise the vocabularies',
        feedback: 'Today’s lesson included homework and vocabulary review, R and L pronunciation practice, grammar practice from the Free English Grammar E-book (Pages 10–16), and reading practice from 4000 Essential English Words (Page 18).'
    };

    const { error } = await supabase.from('lessons').upsert(lesson);
    if (error) {
        console.error("Error inserting lesson 27:", error);
    } else {
        console.log("Successfully inserted lesson 27.");
    }
    
    // update Dayun Suh (t3) to have s2
    const { data: tutors } = await supabase.from('tutors').select('id, assigned_students').eq('id', 't3');
    if (tutors && tutors.length > 0) {
        let assigned = tutors[0].assigned_students || [];
        if (!assigned.includes('s2')) {
            assigned.push('s2');
            await supabase.from('tutors').update({ assigned_students: assigned }).eq('id', 't3');
            console.log("Updated assigned_students for tutor t3.");
        }
    }
}
main().catch(console.error);
