import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { createClient } from '@supabase/supabase-js';
import { db } from './src/lib/data.js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function reEvaluateAll() {
  console.log("Fetching all lessons from Supabase...");
  const { data: lessons, error } = await supabase.from('lessons').select('*');
  
  if (error) {
    console.error("Failed to fetch lessons:", error);
    return;
  }
  
  console.log(`Found ${lessons.length} total lessons.`);
  
  const studentsArr = Object.values(db.students);
  
  let evaluatedCount = 0;
  let skippedCount = 0;
  
  for (let i = 0; i < lessons.length; i++) {
    const lesson = lessons[i];
    
    // Check if it's empty
    const summary = lesson.session_summary || lesson.content || "";
    const feedback = lesson.feedback || "";
    const strengths = lesson.observed_strength || "";
    
    if (!summary && !feedback && !strengths) {
      console.log(`Skipping lesson ${lesson.id} (empty text)`);
      skippedCount++;
      continue;
    }
    
    // Find student
    const student = studentsArr.find(s => s.id === lesson.student_id);
    if (!student || !student.skills) {
      console.log(`Skipping lesson ${lesson.id} (no student or skills found)`);
      skippedCount++;
      continue;
    }
    
    const studentSkills = student.skills.map(s => s.name);
    
    const prompt = `You are an internal assessment engine for an English tutoring application.

Your task is to analyze one tutor lesson report and identify which tracked student skills improved or regressed during the lesson.

You must output ONLY a valid raw JSON array.

Do not output markdown.
Do not output code fences.
Do not output explanations.
Do not output comments.
Do not output introductory text.
Do not output anything before or after the JSON array.

INPUT VARIABLES:

STUDENT_SKILLS:
${studentSkills.join(", ")}

LESSON_TOPIC:
${lesson.topic || ""}

LESSON_SUMMARY:
${summary}

TUTOR_FEEDBACK:
${feedback}

OBSERVED_STRENGTHS:
${strengths}

STRICT OUTPUT FORMAT:

[
  { "skill": "Exact Skill Name", "change": "+1" }
]

RULES:

1. You may only use skill names that appear exactly in STUDENT_SKILLS.
2. Do not invent, rename, shorten, translate, or paraphrase skill names.
3. The value of "skill" must be an exact string match from STUDENT_SKILLS.
4. The value of "change" must be one of these exact strings:
   "+1", "+2", "+3", "-1"
5. Do not use 0.
6. Do not include a skill unless there is clear evidence in the report that the student improved or struggled in that skill.
7. If there is not enough evidence to judge any skill, return an empty array: []
8. Do not reward a skill just because the tutor used positive words like "good", "excellent", "great", or "amazing".
9. Base your judgment only on concrete evidence from the lesson report.
10. If the lesson content was too easy for the student, use "+1" at most.
11. If the student practiced a skill but no clear improvement was shown, do not include that skill.
12. If the student showed mild improvement, use "+1".
13. If the student showed clear improvement or strong performance with some independence, use "+2".
14. If the student showed exceptional progress, a major breakthrough, or independent mastery, use "+3".
15. If the student struggled, forgot previous material, needed heavy support, showed weak retention, or performed below expectation, use "-1".
16. A normal lesson should usually return 1 to 3 skill changes.
17. Use "+3" rarely.
18. Never include duplicate skills.
19. Return the most important skill changes only.
20. The final output must be valid JSON parseable by JavaScript JSON.parse().

DECISION GUIDE:

Use "Vocabulary Precision" only if the report gives evidence about word choice, definitions, vocabulary recall, spelling of vocabulary, or using new words accurately.

Use "Structural Accuracy" only if the report gives evidence about grammar, sentence structure, articles, tense, word order, question formation, or accurate written/s spoken sentence construction.

Use "Expression Fluidity" only if the report gives evidence about speaking flow, naturalness, confidence, response speed, reduced hesitation, ability to continue conversation, or ability to express ideas smoothly.

Use reading-related skills only if the report gives evidence about comprehension, identifying main ideas, finding evidence, summarizing passages, skimming, scanning, or exam-style reading.

Use writing-related skills only if the report gives evidence about paragraph structure, summaries, essays, academic wording, grammar in writing, or written homework.

Use pronunciation-related skills only if the report gives evidence about specific sounds, accent, clarity, pronunciation drills, or spoken correction.

Use exam-strategy skills only if the report gives evidence about test techniques, EIKEN/IELTS/TOEIC strategies, time management, question analysis, or answer elimination.

Before outputting, internally check:
- Is every skill name copied exactly from STUDENT_SKILLS?
- Is every change one of "+1", "+2", "+3", "-1"?
- Is the output a raw JSON array?
- Is there no markdown?
- Is there no extra text?`;

    console.log(`[${i+1}/${lessons.length}] Evaluating lesson for ${student.name} (${lesson.date})...`);
    
    try {
      const ollamaResponse = await fetch("http://127.0.0.1:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama3",
          prompt: prompt,
          stream: false,
          format: "json",
          options: {
            temperature: 0.1,
            top_p: 0.3
          }
        })
      });

      if (!ollamaResponse.ok) {
        console.error('Ollama error on lesson', lesson.id, ollamaResponse.statusText);
        continue;
      }

      const ollamaData = await ollamaResponse.json();
      let parsed = [];
      try {
        parsed = JSON.parse(ollamaData.response);
        // Fix for Llama sometimes returning an object instead of array
        if (!Array.isArray(parsed)) {
           if (parsed.impacts && Array.isArray(parsed.impacts)) {
              parsed = parsed.impacts;
           } else if (parsed.skills && Array.isArray(parsed.skills)) {
              parsed = parsed.skills;
           } else {
              parsed = [parsed]; // it might be a single object
           }
        }
      } catch (e) {
        console.error('Failed to parse response for lesson', lesson.id, ollamaData.response);
        continue;
      }

      const allowedChanges = new Set(["+1", "+2", "+3", "-1"]);
      const allowedSkills = new Set(studentSkills);

      const impacts = parsed.filter(item =>
        item &&
        allowedSkills.has(item.skill) &&
        allowedChanges.has(item.change)
      );

      // Save to supabase
      const { error: updateErr } = await supabase
        .from('lessons')
        .update({ impacts: impacts })
        .eq('id', lesson.id);

      if (updateErr) {
        console.error("Failed to update lesson", lesson.id, updateErr);
      } else {
        console.log(`  -> Saved impacts:`, impacts.map(i => `${i.skill} (${i.change})`).join(', ') || 'None');
        evaluatedCount++;
      }
    } catch (err) {
      console.error("Exception during evaluation:", err.message);
    }

    // Wait 500ms before next request
    await new Promise(res => setTimeout(res, 500));
  }
  
  console.log(`\nFinished! Evaluated ${evaluatedCount} lessons. Skipped ${skippedCount} empty/invalid lessons.`);
}

reEvaluateAll();
