import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, User, BookOpen, MessageSquare, PenTool } from "lucide-react";

const petraPurple = "#31063d";
const petraGold = "#ddb873";
const softGold = "#f7f1df";

function clampPercent(value) {
    if (Number.isNaN(Number(value))) return 0;
    return Math.max(0, Math.min(100, Number(value)));
}

// Basic sanity tests
console.assert(clampPercent(40) === 40);
console.assert(clampPercent(-10) === 0);
console.assert(clampPercent(140) === 100);
console.assert(clampPercent("bad") === 0);

const skills = [
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
];

const phases = [
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
];

const lessons = [
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
];

function MiniIcon({ children, dark = false }) {
    return (
        <span
            className="inline-flex h-7 w-7 items-center justify-center rounded-xl text-sm font-bold"
            style={{
                backgroundColor: dark ? "rgba(255,255,255,0.12)" : softGold,
                color: dark ? petraGold : petraPurple,
            }}
        >
            {children}
        </span>
    );
}

function ProgressBar({ value, gold = false }) {
    const safeValue = clampPercent(value);
    return (
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-zinc-100">
            <div
                className="h-full rounded-full"
                style={{ width: `${safeValue}%`, backgroundColor: gold ? petraGold : petraPurple }}
            />
        </div>
    );
}

function SkillRow({ skill }) {
    const isCritical = Boolean(skill.critical);
    return (
        <HoverCard openDelay={200} closeDelay={150}>
            <HoverCardTrigger asChild>
                <div className="grid grid-cols-12 items-center gap-3 border-b border-zinc-100 py-3 last:border-0 cursor-pointer hover:bg-zinc-50 transition-colors -mx-3 px-3 rounded-xl group relative">
                    <div className="col-span-12 sm:col-span-4">
                        <div className="flex items-center gap-2">
                            <p className="font-medium text-zinc-900 group-hover:text-[#31063d] transition-colors">{skill.name}</p>
                            {isCritical && (
                                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-700">
                                    Priority
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="col-span-8 sm:col-span-5">
                        <ProgressBar value={skill.level} gold={skill.level > 80} />
                    </div>

                    <div className="col-span-2 text-right font-semibold sm:col-span-1" style={{ color: isCritical ? "#b45309" : petraPurple }}>
                        {skill.grade}
                    </div>

                    <div className="col-span-12 text-xs text-zinc-500 sm:col-span-2 sm:text-right">
                        {skill.note}
                    </div>
                </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 shadow-xl rounded-2xl border border-zinc-100 bg-white p-5 animate-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2">
                <div className="space-y-4">
                    <div>
                        <h4 className="text-sm font-bold flex items-center gap-2 mb-1.5" style={{ color: petraPurple }}>
                            <span className="w-2 h-2 rounded-full bg-red-400"></span> What is the issue?
                        </h4>
                        <p className="text-sm text-zinc-600 leading-relaxed">{skill.issue}</p>
                    </div>
                    <div className="h-px w-full bg-zinc-100"></div>
                    <div>
                        <h4 className="text-sm font-bold flex items-center gap-2 mb-1.5" style={{ color: petraGold }}>
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span> How to improve
                        </h4>
                        <p className="text-sm text-zinc-600 leading-relaxed">{skill.improvement}</p>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}

function SectionCard({ children, className = "", style = {} }) {
    return (
        <Card className={`rounded-3xl border-0 shadow-sm ${className}`} style={style}>
            <CardContent className="p-6">{children}</CardContent>
        </Card>
    );
}

export default function PetraStudentChartDashboard() {
    return (
        <div className="min-h-screen bg-[#faf8f4] p-6 text-zinc-900">
            <div className="mx-auto max-w-6xl space-y-6">
                <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <div className="mb-2 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl font-bold text-white" style={{ backgroundColor: petraPurple }}>
                                P
                            </div>
                            <Badge className="rounded-full px-3 py-1" style={{ backgroundColor: petraGold, color: petraPurple }}>
                                Parent Dashboard
                            </Badge>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight" style={{ color: petraPurple }}>
                            Student Chart & Learning Plan
                        </h1>
                        <p className="mt-1 text-zinc-600">Tadashi｜EIKEN Pre-1 Writing & Reading Support</p>
                    </div>

                    <Button className="rounded-2xl shadow-sm" style={{ backgroundColor: petraPurple }}>
                        Export PDF
                    </Button>
                </header>

                <main className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <SectionCard className="lg:col-span-2">
                            <div className="mb-5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <MiniIcon>▦</MiniIcon>
                                    <h2 className="text-xl font-bold">Diagnosis</h2>
                                </div>
                                <Badge variant="outline" className="rounded-full">Overall: B-</Badge>
                            </div>

                            <div className="mb-5 rounded-3xl p-5" style={{ backgroundColor: softGold }}>
                                <div className="flex items-start gap-3">
                                    <MiniIcon>◎</MiniIcon>
                                    <div>
                                        <p className="font-bold">Target</p>
                                        <p className="text-sm text-zinc-700">
                                            Pass EIKEN Pre-1. Improve reading comprehension and stabilize writing performance.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>{skills.map((skill) => <SkillRow key={skill.name} skill={skill} />)}</div>
                        </SectionCard>

                        <Card className="rounded-3xl border-0 shadow-sm" style={{ backgroundColor: petraPurple }}>
                            <CardContent className="flex h-full flex-col justify-between p-6 text-white">
                                <div>
                                    <div className="mb-4 flex items-center gap-2">
                                        <MiniIcon dark>!</MiniIcon>
                                        <h2 className="text-xl font-bold">Core Issue</h2>
                                    </div>
                                    <p className="text-2xl font-bold leading-snug">
                                        Weak reading comprehension is limiting overall performance.
                                    </p>
                                    <p className="mt-4 text-sm text-white/75">
                                        The main issue is not knowledge, but processing. Without full understanding of text and prompts, writing becomes unstable.
                                    </p>
                                </div>

                                <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-4">
                                    <p className="text-sm text-white/70">Focus This Month</p>
                                    <p className="mt-1 font-semibold">Reading → Summary → Writing connection</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {phases.map((phase) => (
                            <SectionCard key={phase.title}>
                                <div className="mb-4 flex items-start justify-between">
                                    <div>
                                        <p className="text-sm font-semibold" style={{ color: petraPurple }}>{phase.title}</p>
                                        <h3 className="text-xl font-bold">{phase.label}</h3>
                                        <p className="text-xs text-zinc-500 mt-1">{phase.period}</p>
                                    </div>
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl font-bold" style={{ backgroundColor: softGold, color: petraPurple }}>
                                        {clampPercent(phase.progress)}%
                                    </div>
                                </div>

                                <ProgressBar value={phase.progress} gold={phase.progress > 0} />

                                <div className="mt-5 space-y-3">
                                    {phase.items.map((item) => (
                                        <div key={item} className="flex items-start gap-2 text-sm text-zinc-700">
                                            <span className="mt-0.5 font-bold" style={{ color: petraGold }}>✓</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </SectionCard>
                        ))}
                    </section>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
                        <SectionCard className="lg:col-span-3">
                            <div className="mb-5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <MiniIcon>↗</MiniIcon>
                                    <h2 className="text-xl font-bold">Recent Lesson Reports</h2>
                                </div>
                                <span className="text-xs text-zinc-500">Click to expand details</span>
                            </div>

                            <Accordion type="single" collapsible className="w-full space-y-3">
                                {lessons.map((lesson) => (
                                    <AccordionItem key={lesson.id} value={lesson.id} className="border border-zinc-100 rounded-2xl px-4 py-1 bg-white shadow-sm data-[state=open]:border-zinc-200">
                                        <AccordionTrigger className="hover:no-underline py-3">
                                            <div className="flex items-center w-full gap-4 text-left">
                                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-600">
                                                    <Calendar className="w-5 h-5" />
                                                </div>
                                                <div className="flex-grow">
                                                    <h3 className="font-bold text-zinc-900 text-sm">{lesson.date} <span className="text-zinc-400 font-normal ml-2">| {lesson.topic}</span></h3>
                                                    <div className="flex items-center gap-3 mt-1 text-xs font-medium text-zinc-500">
                                                        <span className="flex items-center gap-1"><User className="w-3 h-3" /> {lesson.tutor}</span>
                                                        <span className="px-2 py-0.5 rounded-full bg-zinc-100">{lesson.type}</span>
                                                    </div>
                                                </div>
                                                <div className="pr-4 hidden sm:block">
                                                    <Badge variant="outline" className={`rounded-full ${lesson.rating === 'Excellent' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>
                                                        {lesson.rating}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-4 pt-2">
                                            <div className="pl-16 pr-4 space-y-4">
                                                <div className="rounded-xl bg-zinc-50 p-4 border border-zinc-100">
                                                    <h4 className="text-xs font-bold text-zinc-900 mb-2 flex items-center gap-1.5"><MessageSquare className="w-3.5 h-3.5" style={{ color: petraPurple }}/> Feedback & Performance</h4>
                                                    <p className="text-sm text-zinc-700 leading-relaxed">{lesson.feedback}</p>
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="text-xs font-bold text-zinc-900 mb-1.5 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" style={{ color: petraGold }}/> Class Content</h4>
                                                        <p className="text-xs text-zinc-600 leading-relaxed">{lesson.content}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xs font-bold text-zinc-900 mb-1.5 flex items-center gap-1.5"><PenTool className="w-3.5 h-3.5" style={{ color: petraPurple }}/> Homework Assigned</h4>
                                                        <p className="text-xs text-zinc-600 leading-relaxed">{lesson.homework}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </SectionCard>

                        <SectionCard className="lg:col-span-2">
                            <h2 className="mb-4 text-xl font-bold">Next Lesson Plan</h2>

                            <div className="space-y-3">
                                <div className="rounded-2xl bg-zinc-50 p-4">
                                    <p className="text-sm font-bold">1. Reading Comprehension Focus</p>
                                    <p className="text-xs text-zinc-500 mt-1">Introduce structured reading strategies to help with context understanding.</p>
                                </div>

                                <div className="rounded-2xl bg-zinc-50 p-4">
                                    <p className="text-sm font-bold">2. Spelling & Vocab Reinforcement</p>
                                    <p className="text-xs text-zinc-500 mt-1">Review key EIKEN Pre-1 vocabulary and identify spelling patterns (-ture, -tion).</p>
                                </div>

                                <div className="rounded-2xl bg-zinc-50 p-4">
                                    <p className="text-sm font-bold">3. Writing Application</p>
                                    <p className="text-xs text-zinc-500 mt-1">Focus on understanding source material first before responding to prompts.</p>
                                </div>
                            </div>
                        </SectionCard>
                    </div>
                </main>
            </div>
        </div>
    );
}
