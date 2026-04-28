"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Calendar, User, BookOpen, MessageSquare, PenTool, LogOut } from "lucide-react";
import { db } from "@/lib/data";
import { useRouter } from "next/navigation";

const petraPurple = "#31063d";
const petraGold = "#ddb873";
const softGold = "#f7f1df";

const text = {
    en: {
        chartLearningPlan: "Student Chart & Learning Plan",
        signOut: "Sign Out",
        exportPDF: "Export PDF",
        diagnosis: "Diagnosis",
        overall: "Overall",
        target: "Target",
        priority: "Priority",
        whatIsIssue: "What is the issue?",
        howToImprove: "How to improve",
        coreIssue: "Core Issue",
        focusMonth: "Focus This Month",
        recentReports: "Recent Lesson Reports",
        clickExpand: "Click to expand details",
        feedback: "Feedback & Performance",
        content: "Class Content",
        homework: "Homework Assigned",
        nextPlan: "Next Lesson Plan",
        noLessons: "No recent lessons found."
    },
    ja: {
        chartLearningPlan: "学習状況＆レッスンプラン",
        signOut: "ログアウト",
        exportPDF: "PDFを出力",
        diagnosis: "現在の学習状況",
        overall: "総合評価",
        target: "目標",
        priority: "優先",
        whatIsIssue: "課題点",
        howToImprove: "改善方法",
        coreIssue: "主な課題",
        focusMonth: "今月の重点目標",
        recentReports: "最近のレッスンレポート",
        clickExpand: "クリックして詳細を見る",
        feedback: "フィードバックとパフォーマンス",
        content: "レッスン内容",
        homework: "宿題",
        nextPlan: "次回のレッスンプラン",
        noLessons: "最近のレッスンはありません。"
    }
};

function clampPercent(value) {
    if (Number.isNaN(Number(value))) return 0;
    return Math.max(0, Math.min(100, Number(value)));
}

function MiniIcon({ children, dark = false }) {
    return (
        <span
            className="inline-flex h-7 w-7 items-center justify-center rounded-xl text-sm font-bold shrink-0"
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
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${safeValue}%`, backgroundColor: gold ? petraGold : petraPurple }}
            />
        </div>
    );
}

function SkillRow({ skill, lang = "en" }) {
    const isCritical = Boolean(skill.critical || skill.warning);
    const t = text[lang];
    return (
        <HoverCard openDelay={200} closeDelay={150}>
            <HoverCardTrigger asChild>
                <div className="grid grid-cols-12 items-center gap-3 border-b border-zinc-100 py-3 last:border-0 cursor-pointer hover:bg-zinc-50 transition-colors -mx-3 px-3 rounded-xl group relative">
                    <div className="col-span-12 sm:col-span-4">
                        <div className="flex items-center gap-2">
                            <p className="font-medium text-zinc-900 group-hover:text-[#31063d] transition-colors line-clamp-1">{skill.name}</p>
                            {isCritical && (
                                <span className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-700">
                                    {t.priority}
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

                    <div className="col-span-12 text-xs text-zinc-500 sm:col-span-2 sm:text-right line-clamp-1">
                        {skill.note}
                    </div>
                </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 shadow-xl rounded-2xl border border-zinc-100 bg-white p-5 animate-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2">
                <div className="space-y-4">
                    <div>
                        <h4 className="text-sm font-bold flex items-center gap-2 mb-1.5" style={{ color: petraPurple }}>
                            <span className="w-2 h-2 rounded-full bg-red-400"></span> {t.whatIsIssue}
                        </h4>
                        <p className="text-sm text-zinc-600 leading-relaxed">{skill.issue}</p>
                    </div>
                    <div className="h-px w-full bg-zinc-100"></div>
                    <div>
                        <h4 className="text-sm font-bold flex items-center gap-2 mb-1.5" style={{ color: petraGold }}>
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span> {t.howToImprove}
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

function overrideLocalizedData(base, jaData) {
    if (!jaData) return base;
    const merged = { ...base, ...jaData };
    
    // Deep merge array elements by index to preserve base properties like grade/level
    for (const key of ['skills', 'phases', 'lessons', 'nextPlan']) {
        if (base[key] && jaData[key]) {
            merged[key] = base[key].map((item, index) => {
                return { ...item, ...(jaData[key][index] || {}) };
            });
        }
    }
    return merged;
}

export function Dashboard({ student: rawStudent, parentName, lang = "en", onLogout }) {
    const t = text[lang];
    const student = lang === "ja" && rawStudent.ja ? overrideLocalizedData(rawStudent, rawStudent.ja) : rawStudent;

    const sortedLessons = [...(student.lessons || [])].sort((a, b) => {
        const parseDate = (d) => new Date(d.replace(/年|月/g, '/').replace(/日/g, ''));
        return parseDate(b.date) - parseDate(a.date);
    });

    return (
        <div className="min-h-screen bg-[#faf8f4] p-4 sm:p-6 text-zinc-900 animate-in fade-in duration-500">
            <div className="mx-auto max-w-6xl space-y-6">
                <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <div className="mb-2 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl font-bold text-white shadow-sm" style={{ backgroundColor: petraPurple }}>
                                P
                            </div>
                            <Badge className="rounded-full px-3 py-1 border-0" style={{ backgroundColor: petraGold, color: petraPurple }}>
                                {parentName}
                            </Badge>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight" style={{ color: petraPurple }}>
                            {t.chartLearningPlan}
                        </h1>
                        <p className="mt-1 text-zinc-600 font-medium">{student.name}｜{student.course}</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button variant="outline" className="rounded-2xl bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50" onClick={onLogout}>
                            <LogOut className="w-4 h-4 mr-2" /> {t.signOut}
                        </Button>
                        <Button className="rounded-2xl shadow-sm text-white" style={{ backgroundColor: petraPurple }}>
                            {t.exportPDF}
                        </Button>
                    </div>
                </header>

                <main className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <SectionCard className="lg:col-span-2">
                            <div className="mb-5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <MiniIcon>▦</MiniIcon>
                                    <h2 className="text-xl font-bold">{t.diagnosis}</h2>
                                </div>
                                <Badge variant="outline" className="rounded-full font-bold">{t.overall}: {student.overallGrade}</Badge>
                            </div>

                            <div className="mb-5 rounded-3xl p-5" style={{ backgroundColor: softGold }}>
                                <div className="flex items-start gap-3">
                                    <MiniIcon>◎</MiniIcon>
                                    <div>
                                        <p className="font-bold text-zinc-900">{t.target}</p>
                                        <p className="text-sm text-zinc-700 mt-0.5 leading-relaxed">
                                            {student.target}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2">
                                {student.skills.map((skill) => <SkillRow key={skill.name} skill={skill} lang={lang} />)}
                            </div>
                        </SectionCard>

                        <Card className="rounded-3xl border-0 shadow-sm overflow-hidden relative" style={{ backgroundColor: petraPurple }}>
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                            <CardContent className="flex h-full flex-col justify-between p-6 text-white relative z-10">
                                <div>
                                    <div className="mb-4 flex items-center gap-2">
                                        <MiniIcon dark>!</MiniIcon>
                                        <h2 className="text-xl font-bold">{t.coreIssue}</h2>
                                    </div>
                                    <p className="text-2xl font-bold leading-snug">
                                        {student.coreIssue}
                                    </p>
                                    <p className="mt-4 text-sm text-white/80 leading-relaxed">
                                        {student.coreIssueDetail}
                                    </p>
                                </div>

                                <div className="mt-8 rounded-3xl border border-white/10 bg-black/10 backdrop-blur-sm p-4">
                                    <p className="text-sm text-white/70">{t.focusMonth}</p>
                                    <p className="mt-1 font-semibold text-lg">{student.focusThisMonth}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {student.phases.map((phase) => (
                            <SectionCard key={phase.title}>
                                <div className="mb-4 flex items-start justify-between">
                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: petraPurple }}>{phase.title}</p>
                                        <h3 className="text-xl font-bold mt-1">{phase.label}</h3>
                                        <p className="text-xs text-zinc-500 mt-1 font-medium">{phase.period}</p>
                                    </div>
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl font-bold shadow-inner" style={{ backgroundColor: softGold, color: petraPurple }}>
                                        {clampPercent(phase.progress)}%
                                    </div>
                                </div>

                                <ProgressBar value={phase.progress} gold={phase.progress > 0} />

                                <div className="mt-5 space-y-3">
                                    {phase.items.map((item) => (
                                        <div key={item} className="flex items-start gap-2 text-sm text-zinc-700">
                                            <span className="mt-0.5 font-bold shrink-0" style={{ color: petraGold }}>✓</span>
                                            <span className="leading-snug">{item}</span>
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
                                    <h2 className="text-xl font-bold">{t.recentReports}</h2>
                                </div>
                                <span className="text-xs text-zinc-500 hidden sm:inline-block">{t.clickExpand}</span>
                            </div>

                            <Accordion className="w-full space-y-3">
                                {sortedLessons.map((lesson) => (
                                    <AccordionItem key={lesson.id} value={lesson.id} className="border border-zinc-100 rounded-2xl px-4 py-1 bg-white shadow-sm data-[state=open]:border-zinc-200 transition-colors">
                                        <AccordionTrigger className="hover:no-underline py-3">
                                            <div className="flex items-center w-full gap-4 text-left">
                                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-600">
                                                    <Calendar className="w-5 h-5" />
                                                </div>
                                                <div className="flex-grow min-w-0">
                                                    <h3 className="font-bold text-zinc-900 text-sm truncate">{lesson.date} <span className="text-zinc-400 font-normal ml-2 hidden sm:inline-block">| {lesson.topic}</span></h3>
                                                    <div className="flex items-center gap-3 mt-1 text-xs font-medium text-zinc-500">
                                                        <span className="flex items-center gap-1 shrink-0"><User className="w-3 h-3" /> {lesson.tutor}</span>
                                                        <span className="px-2 py-0.5 rounded-full bg-zinc-100 shrink-0">{lesson.type}</span>
                                                    </div>
                                                </div>
                                                <div className="pr-4 shrink-0 hidden sm:block">
                                                    <Badge variant="outline" className={`rounded-full ${lesson.rating === 'Excellent' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>
                                                        {lesson.rating}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-4 pt-2">
                                            <div className="sm:pl-16 sm:pr-4 space-y-4">
                                                <div className="rounded-xl bg-zinc-50 p-4 border border-zinc-100">
                                                    <h4 className="text-xs font-bold text-zinc-900 mb-2 flex items-center gap-1.5"><MessageSquare className="w-3.5 h-3.5" style={{ color: petraPurple }}/> {t.feedback}</h4>
                                                    <p className="text-sm text-zinc-700 leading-relaxed">{lesson.feedback}</p>
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="text-xs font-bold text-zinc-900 mb-1.5 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" style={{ color: petraGold }}/> {t.content}</h4>
                                                        <p className="text-xs text-zinc-600 leading-relaxed">{lesson.content}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xs font-bold text-zinc-900 mb-1.5 flex items-center gap-1.5"><PenTool className="w-3.5 h-3.5" style={{ color: petraPurple }}/> {t.homework}</h4>
                                                        <p className="text-xs text-zinc-600 leading-relaxed">{lesson.homework}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                                {student.lessons.length === 0 && (
                                    <div className="text-center py-8 text-zinc-500 text-sm">{t.noLessons}</div>
                                )}
                            </Accordion>
                        </SectionCard>

                        <SectionCard className="lg:col-span-2">
                            <h2 className="mb-4 text-xl font-bold">{t.nextPlan}</h2>

                            <div className="space-y-3">
                                {student.nextPlan.map((plan, index) => (
                                    <div key={index} className="rounded-2xl bg-zinc-50 p-4 border border-zinc-100">
                                        <p className="text-sm font-bold text-zinc-900">{plan.title}</p>
                                        <p className="text-xs text-zinc-600 mt-1 leading-relaxed">{plan.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </SectionCard>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default function App() {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const router = useRouter();

    React.useEffect(() => {
        if (localStorage.getItem("petra_admin_id")) {
            router.push("/admin");
        } else if (localStorage.getItem("petra_tutor_id")) {
            router.push("/tutor");
        } else {
            const savedUserId = localStorage.getItem("petra_parent_id");
            if (savedUserId) {
                const parent = db.parents.find(p => p.id === savedUserId);
                if (parent) {
                    setUser(parent);
                }
            }
        }
        setIsLoaded(true);
    }, [router]);

    const handleLogin = (e) => {
        e.preventDefault();
        setError("");

        const admin = db.admins.find(a => a.username === username && a.password === password);
        if (admin) {
            localStorage.setItem("petra_admin_id", admin.id);
            router.push("/admin");
            return;
        }

        const tutor = db.tutors.find(t => t.username === username && t.password === password);
        if (tutor) {
            localStorage.setItem("petra_tutor_id", tutor.id);
            router.push("/tutor");
            return;
        }

        const parent = db.parents.find(p => p.username === username && p.password === password);
        if (parent) {
            setUser(parent);
            localStorage.setItem("petra_parent_id", parent.id);
            return;
        }

        setError("Invalid username or password");
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("petra_parent_id");
    };

    if (!isLoaded) {
        return <div className="min-h-screen bg-[#faf8f4]" />; // Empty state while checking localStorage
    }

    if (user) {
        const student = db.students[user.studentId];
        return <Dashboard student={student} parentName={user.name} lang={user.lang || "en"} onLogout={handleLogout} />;
    }

    return (
        <div className="min-h-screen bg-[#faf8f4] flex items-center justify-center p-4">
            <Card className="w-full max-w-md shadow-xl border-0 rounded-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-500">
                <div className="h-2 w-full" style={{ backgroundColor: petraPurple }} />
                <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center mb-8">
                        <div className="flex h-16 w-16 items-center justify-center rounded-3xl font-bold text-white text-3xl shadow-sm mb-4" style={{ backgroundColor: petraPurple }}>
                            P
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Petra Portal</h1>
                        <p className="text-zinc-500 mt-1 text-sm">Sign in with your assigned credentials</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-zinc-700 font-semibold">Username</Label>
                            <Input 
                                id="username" 
                                type="text" 
                                placeholder="e.g. tadashi_parent" 
                                className="rounded-xl bg-zinc-50 border-zinc-200 h-11"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" className="text-zinc-700 font-semibold">Password</Label>
                            </div>
                            <Input 
                                id="password" 
                                type="password" 
                                className="rounded-xl bg-zinc-50 border-zinc-200 h-11"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {error && (
                            <div className="p-3 bg-red-50 text-red-600 rounded-xl text-sm font-medium animate-in fade-in slide-in-from-top-1">
                                {error}
                            </div>
                        )}

                        <Button type="submit" className="w-full h-11 rounded-xl font-bold text-base shadow-sm mt-2" style={{ backgroundColor: petraPurple }}>
                            Sign In
                        </Button>
                    </form>


                </CardContent>
            </Card>
        </div>
    );
}
