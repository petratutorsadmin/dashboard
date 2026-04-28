import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
    { name: "Vocabulary Understanding", grade: "B+", level: 82, note: "Meaning is strong" },
    { name: "Spelling", grade: "C", level: 42, note: "Needs pattern training", warning: true },
    { name: "Grammar & Punctuation", grade: "C", level: 45, note: "Basic accuracy unstable" },
    { name: "Writing Structure", grade: "B-", level: 62, note: "Understands, not automatic yet" },
    { name: "Reading Comprehension", grade: "C-", level: 35, note: "Main bottleneck", critical: true },
    { name: "Logical Thinking", grade: "A-", level: 88, note: "Strong potential" },
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

const weekly = [
    { label: "Reading", before: 30, now: 35, status: "+1" },
    { label: "Writing", before: 60, now: 62, status: "→" },
    { label: "Spelling", before: 36, now: 42, status: "+1" },
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
        <div className="grid grid-cols-12 items-center gap-3 border-b border-zinc-100 py-3 last:border-0">
            <div className="col-span-12 sm:col-span-4">
                <div className="flex items-center gap-2">
                    <p className="font-medium text-zinc-900">{skill.name}</p>
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
                            <div className="mb-5 flex items-center gap-2">
                                <MiniIcon>↗</MiniIcon>
                                <h2 className="text-xl font-bold">Weekly Progress</h2>
                            </div>

                            <div className="space-y-5">
                                {weekly.map((w) => (
                                    <div key={w.label}>
                                        <div className="mb-2 flex items-center justify-between">
                                            <p className="font-medium">{w.label}</p>
                                            <div className="flex items-center gap-2 text-sm">
                                                <span className="text-zinc-400">{clampPercent(w.before)}%</span>
                                                <span style={{ color: petraGold }}>→</span>
                                                <span className="font-bold" style={{ color: petraPurple }}>{clampPercent(w.now)}%</span>
                                                <Badge variant="outline" className="rounded-full">{w.status}</Badge>
                                            </div>
                                        </div>
                                        <ProgressBar value={w.now} />
                                    </div>
                                ))}
                            </div>
                        </SectionCard>

                        <SectionCard className="lg:col-span-2">
                            <h2 className="mb-4 text-xl font-bold">Next Lesson Plan</h2>

                            <div className="space-y-3">
                                <div className="rounded-2xl bg-zinc-50 p-4">
                                    <p className="text-sm font-bold">1. Homework check</p>
                                    <p className="text-xs text-zinc-500 mt-1">Confirm unfinished writing tasks.</p>
                                </div>

                                <div className="rounded-2xl bg-zinc-50 p-4">
                                    <p className="text-sm font-bold">2. Reading training</p>
                                    <p className="text-xs text-zinc-500 mt-1">Extract main idea and summarize in one sentence.</p>
                                </div>

                                <div className="rounded-2xl bg-zinc-50 p-4">
                                    <p className="text-sm font-bold">3. Writing application</p>
                                    <p className="text-xs text-zinc-500 mt-1">Use reading content to produce improved writing.</p>
                                </div>
                            </div>
                        </SectionCard>
                    </div>
                </main>
            </div>
        </div>
    );
}
