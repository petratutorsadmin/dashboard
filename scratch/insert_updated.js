require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const lessons = [
  {
    id: 'l_new_23',
    student_id: 's1', // Tadashi Hashimoto
    tutor: 'Yutaka Takaku', // t8
    date: '2026-05-15 18:15',
    type: 'Regular',
    topic: null,
    content: `Worked on Eiken Pre-1 reading questions from p.7 and p.10-11. Tadashi initially needed some prompting, but after guidance he was able to identify many correct answers independently and showed good intuitive understanding of the passages. He also remembered and applied strategies taught in the previous lesson, especially the “one question per paragraph” reading technique.\n\nWe also had short conversation practice about his interests and baseball activities, including Giants Academy, school baseball, and Richard Sunakawa. He was comfortable speaking about familiar topics and responded naturally.\n\nAdditionally, we practiced summary structure training using the “Haymarket Affair” reading passage from an Eiken Pre-1 exam. Although the original task was not a summarisation question, the student practiced compressing each paragraph into short bullet points to build summarisation skills.\n\nExamples included:\n- Workers protested after police killed strikers\n- Laws existed but were not enforced well\n- Newspapers increased public anger\n- Event became symbol for labor rights\n\nThe goal was to strengthen:\n- identifying core ideas\n- concise information compression\n- paragraph-by-paragraph understanding\n\nGood overall performance. Tadashi showed stronger reading comprehension once given structure and prompting, and demonstrated good retention of previous lesson strategies. His summarisation ability was especially promising, as he could identify important information and reduce paragraphs into concise key points effectively. Speaking ability was more natural when discussing familiar interests.`,
    rating: 'Excellent',
    homework: `Review and memorise the following vocabulary words:\n\n- bilingual\n- fashionable\n- participant\n- surprised\n- foreign\n- tense\n\nIn addition, to finish the bullet-point summarisation of the Haymarket Affair Pre-1 Reading.`,
    feedback: `Today we focused on Eiken Pre-1 reading comprehension and summary skills. Tadashi showed good improvement in identifying important information from reading passages, especially after applying strategies learned in previous lessons. A particularly positive point was his ability to summarise long paragraphs into short key ideas using bullet points, which is an important foundation for future summary writing and reading accuracy. He also participated well in conversation practice when discussing familiar topics such as baseball and school activities.`,
    internal_notes: `Student responds very well to structured reading guidance and paragraph-by-paragraph analysis. Summary compression training appears highly effective for him and should continue regularly. Good retention of previous lesson techniques. Speaking becomes noticeably more natural around familiar/personal topics. Continue reinforcing evidence-based reading strategies and concise summarisation.`
  },
  {
    id: 'l_new_25',
    student_id: 's3', // Sarah Sugiyama
    tutor: 'Hannah Tuffy', // t2
    date: '2026-05-17 09:00',
    type: 'Regular',
    topic: 'Vocabulary, Reading, and Grammar (Competitive sports)',
    content: `Game:\n"Who am I?" - animal guessing game, starting with only yes/no questions, and later using open-ended questions.\n\nReviewing Homework:\nSarah might have forgotten to do her homework, but we reviewed it in class and she did great!\n\nReviewing last unit overall:\nShe got all of the answers correct. When I asked her if there was any parts she was confused about, she said it's all good. \n\nRead lesson objective and ask question:\nWhat is a competitive sport?\nWhat are these? (picture of medal and trophy)\n\nTextbook material:\nEnglish Vocabulary in Use, pg. 90-91(Competitive sports)\n\nReading material about different types of competitions, with my own questions (Check for any confusion)\nVocabulary - winning/ losing, and keeping score\nSports report reading (3 different athletes)\nVocab to describe an athlete (and free talk about favorite athlete/team)\nDrills/exercises on pg. 91\nFree talk questions at bottom of pg. 91 (Q.2, Q.4, Q.5)\nHomework review`,
    rating: 'Excellent',
    homework: `Page 91: Crossword exercise 42.4 of English Vocab in Use textbook`,
    feedback: `Sarah did a great job today talking about different types of sports competitions! Our lesson today consisted of a lot of reading, such as reading about different types of competitive sports and reading articles about famous athletes. We were able to learn new vocabulary words and grammar points to properly speak about scores, world records, winning, and more. We also did multiple drills as well as speaking practice about her own thoughts and experiences. Outstanding job today!\n\nSome of the words that were NEW for Sarah today:\n- consecutive: in a row\n- league: \n- 2-0 (two NIL): "nil" instead of zero in UK/Ireland\n- Draw: same score, to be tied \n- Defeated: to beat another team \n- score vs. result: "score" is used to describe points DURING the game, whereas "result" is used at the end\n- Lead/leading: to have the top score DURING the competition (haven't won yet, but might win)\n- Achieved: to have accomplished(done) something that is difficult or impressive\n- Gave up (in sports) :to stop playing for a short amount of time, or forever\n- Superb: Amazing, outstanding, very skilled\n- "e.g.": for example \n\nWe also reviewed some grammar (conjugating, filling in the blanks, etc.). Sarah did very good with the drills from the textbook as well as the questions I asked her. Please have her do the crossword at the bottom of page 91 in the textbook before our next class!`,
    internal_notes: `Note to self- make sure to review this unit using the same strategy (in our next class): check hw, ask questions, fill in the blanks, ask for any questions or confusions.`
  },
  {
    id: 'l_new_26',
    student_id: 's7', // Shoji Takanao
    tutor: 'Hannah Tuffy', // t2
    date: '2026-05-17 18:00',
    type: 'Regular',
    topic: 'Vocabulary and discussion based on Video about AI use',
    content: `Today, me and Shoji looked at the contents of a YouTube video that explained how to efficiently use AI. Shoji prepared a document including an English written script, a Japanese translation of the script, and a chart of words. We focused on the highlighted words, as well as a discussion prompt and the vocab word chart. Shoji highlighted words that were confusing in meaning or use. Many of them were metaphors, such as "scaling the biggest myth", and "turning tiny knobs", some were phrases such as "prompting away", as well as some complex words such as "well-rounded" and "incomprehensible". I explained the meanings of these words, and gave examples as well as instructions on how to properly use those words. Shoji also prepared materials for discussion, regarding AI use in the workforce, everyday life, universities, and more. We were able to conduct a formal discussion which included the subjects/words Shoji wasn't initially sure of. We also looked at a chart of additional vocabulary words that Shoji had heard of, but was not completely confident in using. We were able to clarify those words. Finally, we went over a topic we can further discuss in our upcoming class.`,
    rating: 'Excellent',
    homework: ``,
    feedback: `Thank you so much for attending today's class! I had a really enjoyable time discussing different aspects of AI and its usage in the modern world. As for the words we looked at, I will send you my definitions so you can look back at them as needed. I really appreciate you for preparing materials, and I look forward to speaking with you again!\n\n1. Prompting away - freely giving various prompts to AI \n\nHave you heard of the term, “Ask away!”?\n→ “__(verb)__ away!” is basically saying, “Go ahead an __(verb)__!” \n\nSo, when you add “-ing”, it describes an action that people do continuously/freely.\n\nexamples) \nasking away = to keep asking freely\nchatting away = to continuously talk\n\n2. Let us scale the biggest myth\n\nMyth = a common belief that is actually not true. A common misconception.\n“Let us scale the biggest myth” → let us disprove this misconception about AI.\n\nScale, in this case, means to metaphorically climb over, or overcome. (scaling a mountain)\nOVERCOMING the myth. \n\n3. Pointy ears- 尖った耳\n\n4. Incomprehensible \nTo comprehend is to understand \nComprehensible is something that can be understood.\n→ So INcomprehensible is extremely hard, or impossible to understand.\n\nComparing it to "insane"\nInsane just means crazy, so "incomprehensible" holds more meaning, as something that is extremely difficult to understand or do.\nex) Your actions were insane = What you did is crazy    VS.      Your actions are incomprehensible = I can't even begin to understand why you did that\n\nIncomprehensible scale → an amount SO big that we can’t even comprehend it\nThat's why AI does for us.\n\n5. Turning tiny knobs\n A metaphor. Like turning a knob on a machine, a speaker, a stove system, etc. (control knobs)\n Adjusting carefully until they get it right.\n\n6. Clicks into place - starts to make a lot of sense in your head \nLike a snap or a lightbulb\n\n7. A new one drops every few weeks \n→ “Drops” means for something new to come out, or be announced.  (not literally/physically dropping)\n\nexample) “Uniqlo dropped a new collaboration with Ghibli”\n\nSo, he is explaining that a new AI software is released every few weeks. (such as once in 3 weeks)\n\n8. It did not look it up\n“It” being the AI tool, and “look it up” means to search it up online. \n\nSo, instead of using the internet to find the answer, the AI tool used patterns to predict it (the answer).\n\n9. Well-rounded\nTo be good quality in many different ways, and offers the best performance\n\nPeople can be “well-rounded” as well. For example, jobs will most likely search for well-rounded, dependable people.\n\n10. Constraints make the output sharper\nConstraints - limits\nIn this case, putting limits on your prompts makes the result clear, specific, and of better quality.\n(as in telling the AI, "this is what I DON'T want you to do"/"Please DON'T _____")\n\n11. Watermark\nA logo or graphic that obstructs a digital file so that it cannot be stolen by others or plagiarized.\nex) paparazzi photos, artwork, stock images, etc.`,
    internal_notes: `Shoji asked how much to pay, so please email him regarding this! Also, he said that he would like to meet again on Sunday afternoon, I believe in two weeks? He said he will send an email about this.`
  },
  {
    id: 'l_new_27',
    student_id: 's2', // Miyako Isobe
    tutor: 'Dayun Suh', // t3
    date: '2026-05-19 17:30',
    type: 'Regular',
    topic: 'English Language',
    content: `Homework and Vocabulary Review\nR and L pronunciation practice\nGrammar practice from Free English Grammar Ebook (Pg. 10-16)\n4000 Essential English Words reading practice  (Pg. 18)`,
    rating: 'Good',
    homework: `- Diary Entry\n- R sound practice\n- revise the vocabularies`,
    feedback: `Today’s lesson included homework and vocabulary review, R and L pronunciation practice, grammar practice from the Free English Grammar E-book (Pages 10–16), and reading practice from 4000 Essential English Words (Page 18).`,
    internal_notes: ``
  },
  {
    id: 'l_new_28',
    student_id: 's10', // Yuta Sumiya
    tutor: 'Hannah Tuffy', // t2
    date: '2026-05-21 16:30',
    type: 'Regular',
    topic: 'Free Talk and Important Parts of a Conversation',
    content: `Introduction, greetings\n--> Small talk questions\n- Do you prefer rainy weather or sunny weather\n- How has your product marketing been going as of lately?\n\nSmall-Talk Speaking Practice \n1. REACTION WORDS!\nShow slide\nHave him practice using reaction words\n\n2. FOLLOW UP QUESTIONS!\nGet him used to asking follow up questions like “what about you?”\n\n3. ADDING DETAILS!\nInstead of giving short answers, try to add details and ask back. \n\nSmall talk cont.\nWhen entering a home, speak about pictures/art/other features of the home\n→ then you can bring up questions about travel or food\n\nScenario/Role-play Practice\nSlides\n\nFree talk`,
    rating: 'Good',
    homework: ``,
    feedback: `It was great to speak with you today! Here's a summary of the key points from today's lesson:\n\n1. REACTION WORDS!\n“Really?”\n“That sounds fun.”\n“No way!”\n“I see.”\n“That makes sense.”\n“Interesting.”\n“That must be difficult.”\n“Good to know”\nRemember that the meanings of these can change with TONE.\n\n2. CLARIFYING QUESTIONS!　（聞き取れなかった時）\n"Sorry?"\n"Can you repeat that?"\n"What did you say?"\n"The what ___?" --> EXAMPLE) the bullet train - "the what train?"\n\n3. FOLLOW UP QUESTIONS!\nIt's great to ask follow up questions like “what about you?” or "how about you?"　(同じ意味です。）\n\nInstead of giving short answers, try to add details AND ask back. \nExample）\nQ: Do you like traveling?\nShort Answer: Yes, I do.\n-->Better Version\n“Yes, I do. I especially like traveling within Japan because I enjoy hot springs. How about you?”\n\nSmall talk cont.\nWhen entering a home, speak about pictures/art/other features of the home\n→ then you can bring up questions about travel or food\n\nScenario/Role-play Practice\n1. Catching up\nA: Hi! Long time no see. How have you been?\nB: I’ve been good, just busy with work lately.\nA: What kind of work are you doing now?\nB: I work in sales for a manufacturing company.\n\n2. Casual Friend Conversation\nA: What did you do this weekend?\n B: I stayed home and watched Netflix.\n A: Oh really? What did you watch?\n B: A Japanese drama about cooking.\n- you can say "oh really?" or "oh nice!"\n\nLastly, we looked over metaphors. Metaphors can help you express your feelings in a shorter, more interesting phrase. They often describes things that are not literal.\nEX) Time is money\nEX2) She has a heart of gold`,
    internal_notes: `Next class, he wants to do scenario (dialogue) practice using reaction words, clarification questions, and follow up questions. I will also be teaching a few metaphors and how to use them. Next class, prepare more for free talk (new interesting topics). I also have to speak slower, and more clearly. No rambling!!`
  },
  {
    id: 'l_new_29',
    student_id: 's5', // Kizuki Ishida
    tutor: 'Ashley Norton', // t6
    date: '2026-05-19 20:30',
    type: 'Regular',
    topic: 'chemistry',
    content: `無機化合物／有機化合物　\n放射性同位体`,
    rating: 'Excellent',
    homework: ``,
    feedback: `きずきさんが疑問に思っている分野を中心に解説しました。授業態度はとてもよく、積極的に質問をしてくれていたため、彼女がどこをどれほど理解しているかがわかりやすかったです。`,
    internal_notes: ``
  },
  {
    id: 'l_new_30',
    student_id: 's1', // Tadashi Hashimoto
    tutor: 'Alice Williams', // t5
    date: '2026-05-21 18:15',
    type: 'Regular',
    topic: 'Reading comprehension/ answer writing',
    content: `Today we worked on an Eiken style reading about public parks and cities. We practised reading for the main idea, finding information in the text, and answering comprehension questions with evidence. We also learnt some new vocabulary related to the environment and city life, and practiced giving opinions with reasons using full sentences.`,
    rating: 'Good',
    homework: `Spelling Practice. Learn the correct spelling and definitions for the following words.\n\n- Pollution\n- Housing \n- Consequence \n- Significant\n- Controversial \n- Perspective \n- Emphasize`,
    feedback: `He still needs support with turning bullet points into full sentences and developing his ideas in more detail. We are also continuing to work on organising paragraphs more clearly and improving how he explains and links his points together. At times, he needs extra time to structure his thoughts and express them clearly in writing.`,
    internal_notes: ``
  }
];

async function main() {
  for (const lesson of lessons) {
    const { error } = await supabase.from('lessons').upsert(lesson);
    if (error) {
      console.error(`Error upserting lesson ${lesson.id}:`, error);
    } else {
      console.log(`Upserted lesson ${lesson.id}`);
    }
  }

  // Update tutor assignments
  const tutorStudentMap = {
    't8': 's1', // Yutaka Takaku -> Tadashi
    't2': ['s3', 's7', 's10'], // Hannah -> Sarah, Shoji, Yuta
    't3': 's2', // Dayun Suh -> Miyako
    't6': 's5', // Ashley -> Kizuki
    't5': 's1'  // Alice -> Tadashi
  };

  const { data: tutors } = await supabase.from('tutors').select('id, assigned_students');
  for (const t of tutors) {
    const toAdd = tutorStudentMap[t.id];
    if (toAdd) {
      let assigned = t.assigned_students || [];
      let updated = false;
      const addList = Array.isArray(toAdd) ? toAdd : [toAdd];
      for (const sid of addList) {
        if (!assigned.includes(sid)) {
          assigned.push(sid);
          updated = true;
        }
      }
      if (updated) {
        await supabase.from('tutors').update({ assigned_students: assigned }).eq('id', t.id);
        console.log(`Updated tutor ${t.id} with new students`);
      }
    }
  }
}
main().catch(console.error);
