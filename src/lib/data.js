export const db = {
  parents: [
    {
      id: "p1",
      username: "tadashi_parent",
      password: "tad9shi",
      name: "Jessica",
      studentId: "s1"
    },
    {
      id: "p2",
      username: "sakura_parent",
      password: "password123",
      name: "Sakura's Parent",
      studentId: "s2"
    }
  ],
  students: {
    s1: {
      id: "s1",
      name: "Tadashi",
      course: "EIKEN Pre-1 Writing & Reading Support",
      target: "Pass EIKEN Pre-1. Improve reading comprehension and stabilize writing performance.",
      overallGrade: "B-",
      coreIssue: "Weak reading comprehension is limiting overall performance.",
      coreIssueDetail: "The main issue is not knowledge, but processing. Without full understanding of text and prompts, writing becomes unstable.",
      focusThisMonth: "Reading → Summary → Writing connection",
      skills: [
        { 
            name: "Vocabulary Understanding", grade: "B+", level: 82, note: "Strong word meaning",
            issue: "Knows meanings well but needs regular reinforcement rather than rote memorization.",
            improvement: "Regular vocabulary review focusing on context and familiarity."
        },
        { 
            name: "Spelling", grade: "C", level: 42, note: "Needs pattern training", warning: true,
            issue: "Struggles with spelling accuracy on common words ('should', 'because') and specific suffixes ('-ture', '-tion').",
            improvement: "Reinforce spelling patterns and continue 10-word spelling checks weekly."
        },
        { 
            name: "Grammar & Punctuation", grade: "C", level: 45, note: "Basic accuracy unstable",
            issue: "Inconsistent capitalization and comma usage in sentences.",
            improvement: "Practice sentence segmentation and review basic punctuation rules."
        },
        { 
            name: "Writing Structure", grade: "B-", level: 62, note: "Understands basics",
            issue: "Understands basic structure but needs to practice writing introductions with hooks and comprehensive conclusions.",
            improvement: "Practice incorporating a hook/background info in the intro, and restating both opinion and reasons in the conclusion."
        },
        { 
            name: "Reading Comprehension", grade: "C-", level: 35, note: "Main challenge identified", critical: true,
            issue: "Finds it difficult to fully understand the context of passages, which negatively impacts writing tasks.",
            improvement: "Introduce structured reading strategies to help with context understanding before attempting to write."
        },
        { 
            name: "Logical Thinking", grade: "A-", level: 88, note: "Adapts quickly",
            issue: "Strong potential, but needs more practice applying complex structures in independent writing.",
            improvement: "Continue to engage with complex topics and build background knowledge to support arguments."
        },
      ],
      phases: [
        {
            title: "Phase 1",
            label: "Foundation Stabilization",
            period: "Weeks 1–3",
            progress: 40,
            items: [
                "10-word spelling check every lesson",
                "Sentence accuracy training",
                "Capitalization and punctuation correction",
            ],
        },
        {
            title: "Phase 2",
            label: "Reading → Expression",
            period: "Weeks 3–5",
            progress: 20,
            items: [
                "Paragraph-by-paragraph summary",
                "Identify main idea and reasoning",
                "Read first, then write response",
            ],
        },
        {
            title: "Phase 3",
            label: "Exam Performance",
            period: "Weeks 5–8",
            progress: 0,
            items: [
                "Timed EIKEN writing",
                "Full mock test",
                "Score tracking and weak-point review",
            ],
        },
      ],
      lessons: [
        {
            id: "rDOogXN",
            date: "Apr 24, 2026",
            tutor: "Riku",
            type: "Make-up",
            topic: "EIKEN Pre-1 Overall Practice",
            rating: "Good",
            content: "We covered vocabulary (1000 Basic Words) and spelling (allot, deliberate, empathy). We then did EIKEN Pre-1 overall practice, including reading comprehension and two writing tasks.",
            feedback: "Tadashi demonstrated good vocabulary knowledge, but spelling accuracy needs practice. His main challenge is reading comprehension, which affected his ability to respond correctly in writing. We will place greater emphasis on improving reading comprehension strategies.",
            homework: "Review and practice spelling of key vocabulary. Focus on identifying spelling patterns. Complete writing practice."
        },
        {
            id: "Kp5kZq8",
            date: "Apr 23, 2026",
            tutor: "Tina",
            type: "Regular",
            topic: "English Composition Writing",
            rating: "Excellent",
            content: "Briefly revised paragraph structure with sample essays. Introduced more complex structures like hooks and restating reasons in conclusions. Taught flexible body paragraph structure (using results instead of just examples).",
            feedback: "Tadashi remembered key content well and showed good understanding of basic essay structure. He needs more practice applying complex structures like hooks. He forgot his homework from 4/17.",
            homework: "Highlight structural elements in the other two sample essays. Finish homework from last lesson."
        },
        {
            id: "gbeXqNP",
            date: "Apr 17, 2026",
            tutor: "Tina",
            type: "Regular",
            topic: "English Composition Writing",
            rating: "Excellent",
            content: "Reviewed homework, vocabulary, and grammar rules (capitalization, comma usage). Broke down EIKEN writing prompt. Wrote intro and first body paragraph together.",
            feedback: "Tadashi showed strong background knowledge. He was focused and engaged. We will work on improving consistency and accuracy, especially with punctuation and spelling.",
            homework: "Finish writing the second body paragraph. Optional: conclusion and vocabulary review."
        },
        {
            id: "J1qvbQR",
            date: "Apr 10, 2026",
            tutor: "Tina",
            type: "Trial",
            topic: "EIKEN Pre-1 Introduction",
            rating: "Excellent",
            content: "Assessed speaking ability and introduced EIKEN Pre-1 structure, time, and word count. Writing practice on 'Should students use AI to complete their homework?'. Introduced basic essay structure.",
            feedback: "Tadashi shows strong logical thinking and adapts quickly. He needs to improve spelling, punctuation, and capitalization. Vocabulary should be reviewed regularly for familiarity.",
            homework: "1. Go through vocab list. 2. Complete English Summarization section of EIKEN Pre-1."
        }
      ],
      nextPlan: [
        {
          title: "1. Reading Comprehension Focus",
          desc: "Introduce structured reading strategies to help with context understanding."
        },
        {
          title: "2. Spelling & Vocab Reinforcement",
          desc: "Review key EIKEN Pre-1 vocabulary and identify spelling patterns (-ture, -tion)."
        },
        {
          title: "3. Writing Application",
          desc: "Focus on understanding source material first before responding to prompts."
        }
      ]
    },
    s2: {
      id: "s2",
      name: "Sakura",
      course: "TOEFL Primary Support",
      target: "Build basic conversational and listening skills.",
      overallGrade: "B+",
      coreIssue: "Hesitant to speak in extended conversations.",
      coreIssueDetail: "Needs more confidence when speaking. Often afraid of making mistakes, which limits fluency.",
      focusThisMonth: "Speaking confidence & basic vocabulary",
      skills: [
        { 
            name: "Listening Comprehension", grade: "A-", level: 90, note: "Strong understanding",
            issue: "Rarely misunderstands, but sometimes misses very fast native speech.",
            improvement: "Watch short clips of children's shows in English without subtitles."
        },
        { 
            name: "Speaking Fluency", grade: "C+", level: 55, note: "Hesitant", warning: true,
            issue: "Pauses frequently to translate from Japanese to English in her head.",
            improvement: "Practice 1-minute 'free talk' sessions on simple topics (e.g., favorite food, weekend plans)."
        },
        { 
            name: "Vocabulary", grade: "B", level: 75, note: "Good foundation",
            issue: "Knows many nouns but struggles with action verbs and adjectives.",
            improvement: "Focus on describing actions and feelings in complete sentences."
        }
      ],
      phases: [
        {
            title: "Phase 1",
            label: "Building Confidence",
            period: "Weeks 1–4",
            progress: 80,
            items: [
                "Daily greeting practice",
                "Simple Q&A routines",
                "Vocabulary matching games",
            ],
        },
        {
            title: "Phase 2",
            label: "Conversational Flow",
            period: "Weeks 5–8",
            progress: 10,
            items: [
                "1-minute continuous speaking",
                "Describing pictures",
                "Listening to short stories and answering questions",
            ],
        }
      ],
      lessons: [
        {
            id: "s2_l1",
            date: "Apr 25, 2026",
            tutor: "Riku",
            type: "Regular",
            topic: "Describing Daily Routines",
            rating: "Excellent",
            content: "Practiced using action verbs to describe morning routines. Played a matching game with flashcards.",
            feedback: "Sakura was very enthusiastic during the game. She is getting better at using full sentences instead of just one-word answers.",
            homework: "Draw a picture of your morning routine and write 3 sentences about it."
        }
      ],
      nextPlan: [
        {
          title: "1. Picture Description",
          desc: "Practice describing a scene using 'There is/There are' and action verbs."
        },
        {
          title: "2. Listening Practice",
          desc: "Listen to a short audio clip and answer 3 comprehension questions."
        }
      ]
    }
  }
};
