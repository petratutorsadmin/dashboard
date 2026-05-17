const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'src/lib/data.js');
let dataContent = fs.readFileSync(dataFile, 'utf-8');

// Load data.js as an object to manipulate it
const dbContext = {};
eval(dataContent.replace('export const db =', 'dbContext.db ='));
const db = dbContext.db;

const studentAnalysis = {
    "s4": {
        coreIssue: "Difficulty with detailed listening and spontaneous speaking",
        coreIssueDetail: "Shinichi has strong foundational reading and grammar skills, but struggles to catch detailed information during listening exercises and needs practice formulating spontaneous responses in everyday conversations.",
        focusThisMonth: "Building conversational confidence and listening for details",
        petraInsight: "Shinichi is motivated to improve everyday English rather than business English. We are utilizing role-play scenarios and textbook dialogues to help him practice active listening and natural response flow.",
        skills: [
            { name: "Structural Accuracy", baseLevel: 75, condition: "Consistent", note: "Strong foundation", issue: "Rarely makes basic grammar mistakes.", improvement: "Focus on complex structures." },
            { name: "Vocabulary Precision", baseLevel: 60, condition: "Developing", note: "Knows basic terms", issue: "Needs broader vocabulary for everyday scenarios.", improvement: "Learn phrasal verbs and idioms." },
            { name: "Listening Adaptability", baseLevel: 45, condition: "Requires Focus", note: "Misses details", issue: "Has trouble catching specific details in fast speech.", improvement: "Targeted listening exercises with comprehension checks." },
            { name: "Conversational Confidence", baseLevel: 55, condition: "Improving", note: "Hesitant", issue: "Takes time to formulate responses.", improvement: "Scenario-based roleplay." }
        ]
    },
    "s5": {
        coreIssue: "Mastering advanced scientific vocabulary and concepts",
        coreIssueDetail: "Kizuki is studying Biology (Evolution, Phylogenetic trees, Cell structure). He has a great attitude and participates actively, but needs to solidify his understanding of complex biological mechanisms.",
        focusThisMonth: "Cellular structures and evolutionary relationships",
        petraInsight: "Kizuki shows excellent engagement and asks great questions. His analytical thinking is strong, and our focus is purely on expanding his scientific knowledge base and technical terminology in Biology.",
        skills: [
            { name: "Scientific Vocabulary", baseLevel: 80, condition: "Rapid Improvement", note: "Learns quickly", issue: "Encountering highly technical terms.", improvement: "Flashcards and terminology review." },
            { name: "Analytical Thinking", baseLevel: 85, condition: "Consistent", note: "Great questions", issue: "None. Very inquisitive.", improvement: "Challenge with complex biological scenarios." },
            { name: "Concept Retention", baseLevel: 75, condition: "Steady", note: "Understands core ideas", issue: "Needs review of intricate cell mechanisms.", improvement: "Diagram labeling and verbal explanations." }
        ]
    },
    "s6": {
        coreIssue: "Fine-tuning advanced pronunciation and British English nuances",
        coreIssueDetail: "Akihiro has a much higher English level than expected. He completes basic tasks effortlessly. His focus is on refining vocabulary, mastering British English pronunciation, and high-level comprehension.",
        focusThisMonth: "Advanced vocabulary and native-level pronunciation",
        petraInsight: "Akihiro is an advanced learner who benefits most from high-level, challenging tasks rather than foundational review. We are focusing on nuanced pronunciation and sophisticated vocabulary expansion.",
        skills: [
            { name: "Comprehension Speed", baseLevel: 95, condition: "Mastery", note: "Extremely fast", issue: "Finds standard material too easy.", improvement: "Introduce advanced authentic materials." },
            { name: "Vocabulary Precision", baseLevel: 85, condition: "Consistent", note: "Broad lexicon", issue: "Wants to learn highly specific/advanced terms.", improvement: "Focus on academic and nuanced synonyms." },
            { name: "Pronunciation Accuracy", baseLevel: 80, condition: "Refining", note: "Clear speech", issue: "Wants to master specific British English sounds.", improvement: "Phonetic drills and shadowing." }
        ]
    },
    "s7": {
        coreIssue: "Navigating complex metaphors and highly advanced business terminology",
        coreIssueDetail: "Shoji is extremely fluent and professional. His pronunciation is excellent. He only struggles with obscure metaphors (e.g., 'scaling the biggest myth') and highly advanced phrasing used in tech/AI discussions.",
        focusThisMonth: "Discussing AI, Finance, and Market Research",
        petraInsight: "Shoji is essentially fluent. Our sessions function more like high-level professional discussions. We dissect complex YouTube videos, articles, and industry-specific jargon to perfect his near-native fluency.",
        skills: [
            { name: "Expression Fluidity", baseLevel: 95, condition: "Near Native", note: "No pauses", issue: "Speaks smoothly and professionally.", improvement: "Maintain fluency." },
            { name: "Idiomatic Mastery", baseLevel: 75, condition: "Developing", note: "Occasional confusion", issue: "Struggles with rare English metaphors/idioms.", improvement: "Analyze authentic media and podcasts." },
            { name: "Business Vocabulary", baseLevel: 90, condition: "Excellent", note: "Knows finance/AI terms", issue: "None.", improvement: "Expand into emerging tech terminology." }
        ]
    },
    "s8": {
        coreIssue: "Reducing pauses and improving speech fluidity",
        coreIssueDetail: "Takeshi has strong foundational skills and great reading comprehension. However, he takes frequent pauses when speaking and needs to improve his conversational flow for travel and everyday interactions.",
        focusThisMonth: "Dialogue practice and reducing hesitation",
        petraInsight: "Takeshi is very motivated to speak English for his hobbies (dance class, travel). By using 'English Grammar in Use' and continuous free-talk, we are working to eliminate his pauses and build his speaking rhythm.",
        skills: [
            { name: "Grammar & Reading", baseLevel: 85, condition: "Consistent", note: "Strong foundation", issue: "Understands rules well.", improvement: "Apply rules automatically in speech." },
            { name: "Expression Fluidity", baseLevel: 50, condition: "Needs Practice", note: "Frequent pauses", issue: "Translates or overthinks before speaking.", improvement: "Shadowing and timed speaking drills." },
            { name: "Conversational Confidence", baseLevel: 65, condition: "Steady", note: "Willing to try", issue: "Hesitant but motivated.", improvement: "Frequent low-pressure free talk." }
        ]
    },
    "s9": {
        coreIssue: "Translating from Japanese internally and pronunciation mechanics",
        coreIssueDetail: "Yusuke has good basic skills and knows his directions well. However, he mentally translates from Japanese before speaking, which slows him down. He also needs targeted help with specific phonetic sounds ('ts' vs 't').",
        focusThisMonth: "Direct English thinking and phonetic drills",
        petraInsight: "Yusuke enjoys structured dialogue practice. Our goal is to train him to respond directly in English without the intermediate Japanese translation step, drastically improving his response time.",
        skills: [
            { name: "Pronunciation Accuracy", baseLevel: 55, condition: "Developing", note: "Specific sound issues", issue: "Struggles with 'ts' vs 't' (e.g., comments).", improvement: "Targeted phonetic repetition." },
            { name: "Response Speed", baseLevel: 45, condition: "Requires Focus", note: "Translates internally", issue: "Slow response due to mental translation.", improvement: "Rapid-fire Q&A drills." },
            { name: "Structural Knowledge", baseLevel: 70, condition: "Consistent", note: "Knows the basics", issue: "Can read and understand basic structures.", improvement: "Apply structures in live conversation." }
        ]
    },
    "s10": {
        coreIssue: "Mastering small talk and casual relationship building",
        coreIssueDetail: "Yuta dislikes lecture-style lessons and textbook drills. He has a strong foundation but wants to exclusively practice casual conversation, small talk, and role-playing scenarios (restaurants, family friends, in-laws).",
        focusThisMonth: "Role-playing everyday social scenarios",
        petraInsight: "Yuta learns best through immersive conversation. We discuss his work in marketing supplements with AI, travel experiences, and practice navigating social etiquette in English-speaking environments.",
        skills: [
            { name: "Social Etiquette", baseLevel: 70, condition: "Improving", note: "Understands basics", issue: "Wants to sound more natural with friends/in-laws.", improvement: "Roleplay nuanced social situations." },
            { name: "Conversational Confidence", baseLevel: 80, condition: "High", note: "Talkative", issue: "Not afraid to speak, just needs refinement.", improvement: "Introduce advanced conversational connectors." },
            { name: "Active Listening", baseLevel: 85, condition: "Consistent", note: "Catches context well", issue: "None.", improvement: "Listen to natural, overlapping native speech." }
        ]
    }
};

let modified = false;

// We will reconstruct the students object by stringifying each one, replacing the targeted ones.
for (const [id, analysis] of Object.entries(studentAnalysis)) {
    if (db.students[id]) {
        db.students[id].coreIssue = analysis.coreIssue;
        db.students[id].coreIssueDetail = analysis.coreIssueDetail;
        db.students[id].focusThisMonth = analysis.focusThisMonth;
        db.students[id].petraInsight = analysis.petraInsight;
        db.students[id].skills = analysis.skills;
        
        // Setup realistic phases based on the analysis
        db.students[id].phases = [
            { id: "ph1", title: "Assessment & Baseline", description: "Evaluating current proficiency and setting goals.", status: "Completed", weeks: "Week 1", progress: 100 },
            { id: "ph2", title: "Targeted Skill Building", description: analysis.focusThisMonth, status: "In Progress", weeks: "Weeks 2-6", progress: 35 },
            { id: "ph3", title: "Fluency & Application", description: "Applying learned skills to complex, unguided scenarios.", status: "Upcoming", weeks: "Weeks 7-10", progress: 0 }
        ];
        modified = true;
    }
}

// Add Konan Saito (s11) if missing
if (!db.students["s11"]) {
    db.students["s11"] = {
        id: "s11",
        name: "Konan Saito",
        course: "Conversational English",
        target: "Improve daily communication",
        overallGrade: "B",
        coreIssue: "Translating Japanese concepts into natural English",
        coreIssueDetail: "Konan is focusing on daily conversations and expanding from self-introductions to discussing past experiences. He relies heavily on direct translation from Japanese.",
        focusThisMonth: "Expressing personal history naturally",
        petraInsight: "Konan actively engages in self-introductions. Our next step is to help him describe past events using correct tenses without sounding translated.",
        skills: [
            { name: "Grammar Tenses", baseLevel: 60, condition: "Developing", note: "Past tense issues", issue: "Mixes up past and present when telling stories.", improvement: "Narrative storytelling practice." },
            { name: "Vocabulary Breadth", baseLevel: 65, condition: "Steady", note: "Knows daily words", issue: "Needs more descriptive adjectives.", improvement: "Read short stories." },
            { name: "Conversational Confidence", baseLevel: 75, condition: "Improving", note: "Willing to share", issue: "None, very engaged.", improvement: "Maintain positive environment." }
        ],
        phases: [
            { id: "ph1", title: "Self-Introductions", description: "Mastering basic personal background sharing.", status: "Completed", weeks: "Week 1-2", progress: 100 },
            { id: "ph2", title: "Narrative Storytelling", description: "Talking about past experiences and memories.", status: "In Progress", weeks: "Weeks 3-6", progress: 20 },
            { id: "ph3", title: "Opinion Sharing", description: "Expressing thoughts on abstract topics.", status: "Upcoming", weeks: "Weeks 7-10", progress: 0 }
        ],
        lessons: [
            {
                id: "l_s11_0",
                date: "May 11, 2026",
                tutor: "Ashley Norton",
                type: "Trial",
                topic: "English Communication & Introductions",
                rating: "Good",
                sessionSummary: "Daily conversations and translating some Japanese sentences to English.",
                observedStrength: "Very willing to speak and elaborate on self-introductions.",
                currentFocusArea: "Using correct past tense when describing history.",
                interventionStrategy: "Guided translation and narrative framing.",
                responseToIntervention: "Successfully expanded on his self-introduction and talked about his past.",
                impacts: [{ skill: "Conversational Confidence", change: "+2" }],
                content: "自己紹介を中心に話を広げ、自身の過去に関連する事柄を英語で表現した。",
                feedback: "Great job today, Konan! You did very well talking about your past experiences.",
                homework: "Write a short paragraph about your favorite childhood memory."
            }
        ],
        nextPlan: [
            { title: "1. Narrative Practice", desc: "Focus on recounting past weekend activities." },
            { title: "2. Adjective Expansion", desc: "Learn new words to describe feelings." }
        ]
    };
    modified = true;
}

if (modified) {
    // Stringify the entire students object and replace it in the file
    // To be safe, we will just rewrite the file by generating the exported db object.
    // Wait, the file has a specific format and also contains `resources` array.
    // It's safer to just replace the students object part.
    
    const newStudentsJson = JSON.stringify(db.students, null, 8);
    // Find where "parents": is, because students is right before it, or parents is first?
    // Let's check: in data.js, it's `export const db = { "parents": [...], "students": { ... }, "resources": [...] }`
    
    // Actually, we can just rewrite the whole data.js to be clean!
    const fullJson = JSON.stringify(db, null, 4);
    const newFileContent = `export const db = ${fullJson};`;
    
    fs.writeFileSync(dataFile, newFileContent, 'utf-8');
    console.log("Successfully analyzed reports and updated student graphs/profiles!");
} else {
    console.log("No students updated.");
}
