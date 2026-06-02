require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const { db } = require('./src/lib/data.js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function syncLessons() {
  const students = Object.values(db.students);
  let totalLessons = 0;
  
  for (const student of students) {
    if (student.lessons && student.lessons.length > 0) {
      for (const lesson of student.lessons) {
        const payload = {
            id: lesson.id || `l_${student.id}_${Date.now()}_${Math.floor(Math.random()*1000)}`,
            student_id: student.id,
            date: lesson.date,
            tutor: lesson.tutor,
            type: lesson.type,
            topic: lesson.topic,
            rating: lesson.rating,
            session_summary: lesson.sessionSummary || null,
            observed_strength: lesson.observedStrength || null,
            current_focus_area: lesson.currentFocusArea || null,
            intervention_strategy: lesson.interventionStrategy || null,
            response_to_intervention: lesson.responseToIntervention || null,
            impacts: lesson.impacts || [],  // PASS AS ARRAY, NOT STRING
            content: lesson.content || null,
            feedback: lesson.feedback || null,
            homework: lesson.homework || null
        };
        
        const { data, error } = await supabase
          .from('lessons')
          .upsert(payload)
          .select();
          
        if (error) {
            console.error(`Error syncing lesson ${lesson.id} for ${student.name}:`, error.message);
        } else {
            console.log(`✅ Synced lesson for ${student.name} on ${lesson.date}`);
            totalLessons++;
        }
      }
    }
  }
  
  console.log(`Finished syncing ${totalLessons} lessons to Supabase!`);
}

syncLessons();
