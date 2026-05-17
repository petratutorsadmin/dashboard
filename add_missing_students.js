const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'src/lib/data.js');
let dataContent = fs.readFileSync(dataFile, 'utf-8');

const missingStudents = {
    "s4": "Shinichi Fukui",
    "s5": "Kizuki Ishida",
    "s6": "Lee Akihiro",
    "s7": "Shoji Takanao",
    "s8": "Takeshi Kawana",
    "s9": "Yusuke",
    "s10": "Yuta Sumiya",
    "s12": "Hiroyuki Iwakura",
    "s13": "Takuma",
    "s14": "Yuki Takenaka",
    "s15": "Tomioka"
};

const courses = ["EIKEN Grade Pre-1", "EIKEN Grade 2", "EIKEN Grade Pre-2", "EIKEN Grade 3", "IELTS Prep", "Conversational English"];
const targetPrefixes = ["Pass", "Improve reading and writing for", "Build foundation for", "Boost speaking confidence for"];

const defaultSkills = [
    {
        name: "Vocabulary Precision",
        baseLevel: 65,
        weight: 1,
        condition: "Becoming More Consistent",
        note: "Good foundation",
        issue: "Needs more advanced vocabulary.",
        improvement: "Regular reading practice."
    },
    {
        name: "Structural Accuracy",
        baseLevel: 60,
        weight: 1,
        condition: "Further Practice Recommended",
        note: "Grammar needs work",
        issue: "Occasional errors in complex sentences.",
        improvement: "Grammar drills."
    },
    {
        name: "Expression Fluidity",
        baseLevel: 70,
        weight: 1.2,
        condition: "Rapid Improvement",
        note: "Speaks naturally",
        issue: "Needs to use more transitional phrases.",
        improvement: "Practice linking ideas."
    },
    {
        name: "Listening Adaptability",
        baseLevel: 75,
        weight: 1,
        condition: "Becoming More Consistent",
        note: "Good comprehension",
        issue: "Struggles with fast native speech.",
        improvement: "Listen to podcasts."
    },
    {
        name: "Conversational Confidence",
        baseLevel: 80,
        weight: 1,
        condition: "Rapid Improvement",
        note: "Not afraid to speak",
        issue: "Sometimes lacks vocabulary to express complex ideas.",
        improvement: "Debate practice."
    }
];

const defaultPhases = [
    {
        id: "ph1",
        title: "Phase 1: Foundation Building",
        description: "Focus on core vocabulary and basic grammar structures.",
        status: "Completed",
        weeks: "Weeks 1-4",
        progress: 100
    },
    {
        id: "ph2",
        title: "Phase 2: Skill Application",
        description: "Apply foundational skills to reading and listening exercises.",
        status: "In Progress",
        weeks: "Weeks 5-8",
        progress: 45
    },
    {
        id: "ph3",
        title: "Phase 3: Exam Preparation",
        description: "Mock exams and time management strategies.",
        status: "Upcoming",
        weeks: "Weeks 9-12",
        progress: 0
    }
];

const defaultNextPlan = [
    {
        title: "1. Core Vocabulary Review",
        desc: "Regular review of essential terms."
    },
    {
        title: "2. Speaking Practice",
        desc: "Weekly free-talk sessions to build confidence."
    },
    {
        title: "3. Grammar Consolidation",
        desc: "Focus on sentence structure accuracy."
    }
];

// Extract existing schedules to generate mock lessons
const dbContext = {};
eval(dataContent.replace('export const db =', 'dbContext.db ='));
const schedules = dbContext.db.schedules || [];

let newStudentsStr = "";

for (const [id, name] of Object.entries(missingStudents)) {
    const course = courses[Math.floor(Math.random() * courses.length)];
    const target = `${targetPrefixes[Math.floor(Math.random() * targetPrefixes.length)]} ${course}`;
    
    // Find completed schedules for this student
    const studentSchedules = schedules.filter(s => s.studentId === id && s.status === 'Completed');
    const lessons = studentSchedules.map((s, index) => ({
        id: `l_${id}_${index}`,
        date: new Date(s.dateTime).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        tutor: s.tutorName,
        type: "Regular",
        topic: `${course} Practice Session ${index + 1}`,
        rating: ["Excellent", "Good", "Outstanding"][Math.floor(Math.random() * 3)],
        sessionSummary: `We covered key topics related to ${course} and practiced various exercises.`,
        observedStrength: `${name} showed great enthusiasm and participation during the session.`,
        currentFocusArea: "Continuing to build vocabulary and improve sentence structure.",
        interventionStrategy: "Interactive exercises and targeted feedback.",
        responseToIntervention: `${name} responded well to the exercises and showed improvement.`,
        impacts: [
            { skill: "Vocabulary Precision", change: "+1" },
            { skill: "Conversational Confidence", change: "+2" }
        ],
        content: `Detailed review of ${course} materials, focusing on areas of weakness.`,
        feedback: `Great job today, ${name}! Keep practicing the vocabulary words we discussed.`,
        homework: "Review today's notes and complete the assigned worksheet."
    }));

    const studentObj = {
        id,
        name,
        course,
        target,
        overallGrade: ["A", "B+", "B", "C+", "C"][Math.floor(Math.random() * 5)],
        coreIssue: "Needs consistent practice and vocabulary expansion.",
        coreIssueDetail: "While understanding is generally good, active recall of vocabulary needs improvement.",
        focusThisMonth: "Vocabulary building and active speaking practice.",
        petraInsight: `${name} is making steady progress. Focus should remain on consistency and building confidence in active production.`,
        skills: defaultSkills,
        phases: defaultPhases,
        lessons: lessons,
        nextPlan: defaultNextPlan
    };

    newStudentsStr += `,\n        "${id}": ` + JSON.stringify(studentObj, null, 12).replace(/\n/g, '\n        ');
}

// Insert into data.js before "resources": [
const insertIndex = dataContent.indexOf('    "resources": [');
if (insertIndex !== -1) {
    // Find the end of the students object
    const beforeResources = dataContent.substring(0, insertIndex);
    const lastBraceIndex = beforeResources.lastIndexOf('        }\n    },\n');
    if (lastBraceIndex !== -1) {
        dataContent = dataContent.substring(0, lastBraceIndex + 9) + newStudentsStr + dataContent.substring(lastBraceIndex + 9);
        fs.writeFileSync(dataFile, dataContent, 'utf-8');
        console.log("Successfully injected students.");
    } else {
        console.log("Could not find the end of the students object.");
    }
} else {
    console.log("Could not find resources array.");
}
