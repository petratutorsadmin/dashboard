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
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import { Calendar, User, BookOpen, MessageSquare, PenTool, LogOut, TrendingUp, ExternalLink, Target, LayoutDashboard } from "lucide-react";
import { db } from "@/lib/data";
import { cn, computeSkillLevel, computeGrade, computeOverallGrade, computePhaseProgress, computeNextPlan } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";

const petraPurple = "var(--primary)";
const petraGold = "oklch(0.85 0.12 90)"; 
const softGold = "oklch(0.97 0.01 270)"; // Soft background for icons

const text = {
    en: {
        chartLearningPlan: "Educational Diagnostics & Learning Plan",
        signOut: "Sign Out",
        diagnosis: "Diagnosis",
        overall: "Overall",
        target: "Target",
        priority: "Priority",
        whatIsIssue: "What is the issue?",
        howToImprove: "How to improve",
        coreIssue: "Core Diagnostic Issue",
        focusMonth: "Primary Developmental Focus",
        recentReports: "Petra Learning Records",
        clickExpand: "Click to expand details",
        feedback: "Feedback & Performance",
        content: "Class Content",
        homework: "Homework Assigned",
        nextPlan: "Strategic Focus",
        impacts: "Skills Impacted",
        noLessons: "No recent lessons found.",
        assignedResources: "Assigned Resources",
        noResources: "No resources assigned yet.",
        progressChart: "Progress Over Time",
        score: "Overall Score",
        baseline: "Baseline",
        current: "Current",
        skillBreakdown: "Cognitive Language Profile",
        petraInsight: "Petra Insight",
        currentPriority: "Current Priority",
        interventionStrategy: "Intervention Strategy",
        expectedTrajectory: "Expected Trajectory",
        sessionSummary: "Session Summary",
        observedStrength: "Observed Strength",
        currentFocusArea: "Current Focus Area",
        responseToIntervention: "Response to Intervention",
        skillsImpacted: "Skills Impacted",
        viewFullReport: "View Full Tutor Report"
    },
    ja: {
        chartLearningPlan: "学習状況＆レッスンプラン",
        signOut: "ログアウト",
        diagnosis: "現在の診断状況",
        overall: "総合評価",
        target: "目標",
        priority: "優先",
        whatIsIssue: "課題点",
        howToImprove: "改善方法",
        coreIssue: "主な診断課題",
        focusMonth: "今月の重点強化項目",
        recentReports: "ペトラ学習記録",
        clickExpand: "クリックして詳細を見る",
        feedback: "フィードバックとパフォーマンス",
        content: "レッスン内容",
        homework: "宿題",
        nextPlan: "戦略的フォーカス",
        impacts: "スコアへの影響",
        noLessons: "最近のレッスンはありません。",
        assignedResources: "課題・教材",
        noResources: "現在割り当てられている教材はありません。",
        progressChart: "スコアの推移",
        score: "総合スコア",
        baseline: "初期設定",
        current: "現在",
        skillBreakdown: "認知言語プロファイル",
        petraInsight: "ペトラインサイト",
        currentPriority: "現在の優先課題",
        interventionStrategy: "介入戦略",
        expectedTrajectory: "期待される成長軌道",
        sessionSummary: "セッションの概要",
        observedStrength: "観察された強み",
        currentFocusArea: "現在のフォーカス領域",
        responseToIntervention: "介入への反応",
        skillsImpacted: "影響を受けたスキル",
        viewFullReport: "講師のフルレポートを表示"
    }
};

function clampPercent(value) {
    if (Number.isNaN(Number(value))) return 0;
    return Math.max(0, Math.min(100, Number(value)));
}

function MiniIcon({ children, dark = false }) {
    return (
        <span
            className="inline-flex h-7 w-7 items-center justify-center rounded-xl text-sm font-bold shrink-0 shadow-sm"
            style={{
                backgroundColor: dark ? "var(--primary)" : softGold,
                color: dark ? "var(--primary-foreground)" : petraPurple,
                border: dark ? "none" : "1px solid var(--border)"
            }}
        >
            {children}
        </span>
    );
}

function ProgressBar({ value, gold = false }) {
    const safeValue = clampPercent(value);
    return (
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100 border border-zinc-200/50">
            <div
                className="h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(var(--primary-rgb),0.2)]"
                style={{ width: `${safeValue}%`, backgroundColor: gold ? "var(--primary)" : "var(--foreground)" }}
            />
        </div>
    );
}

function computeChartData(student, t, lang) {
    if (!student || !student.skills || !student.lessons) return [];

    let currentLevels = {};
    student.skills.forEach(skill => {
        currentLevels[skill.name] = skill.baseLevel || 0;
    });

    const getOverall = (levels) => {
        let totalWeight = 0;
        let totalScore = 0;
        student.skills.forEach(skill => {
            const level = levels[skill.name] || 0;
            const weight = skill.weight || 1.0;
            totalScore += level * weight;
            totalWeight += weight;
        });
        return totalWeight > 0 ? Math.round((totalScore / totalWeight) * 10) / 10 : 0;
    };

    const data = [];
    data.push({
        date: t.baseline,
        score: getOverall(currentLevels)
    });

    const sortedLessons = [...student.lessons].sort((a, b) => {
        const parseDate = (d) => new Date(d.replace(/年|月/g, '/').replace(/日/g, ''));
        return parseDate(a.date) - parseDate(b.date);
    });

    sortedLessons.forEach(lesson => {
        if (lesson.impacts) {
            lesson.impacts.forEach(impact => {
                if (currentLevels[impact.skill] !== undefined) {
                    const changeVal = parseInt(impact.change.replace('+', ''), 10);
                    if (!isNaN(changeVal)) {
                        currentLevels[impact.skill] += changeVal;
                        currentLevels[impact.skill] = Math.min(100, Math.max(0, currentLevels[impact.skill]));
                    }
                }
            });
        }
        
        let dateStr = lesson.date;
        try {
            const d = new Date(lesson.date.replace(/年|月/g, '/').replace(/日/g, ''));
            dateStr = d.toLocaleDateString(lang === 'ja' ? 'ja-JP' : 'en-US', { month: 'short', day: 'numeric' });
        } catch(e) {}

        data.push({
            date: dateStr,
            score: getOverall(currentLevels),
            lesson: lesson.topic,
            intervention: lesson.interventionStrategy
        });
    });

    return data;
}

const RadarTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-card/95 backdrop-blur-md p-3 rounded-xl shadow-2xl border border-border z-50 relative">
                <p className="font-bold text-sm text-foreground mb-2">{payload[0].payload.subject}</p>
                {payload.map((entry, index) => (
                    <p key={`item-${index}`} className="text-sm font-semibold mb-0.5" style={{ color: entry.stroke || entry.color || "var(--primary)" }}>
                        {entry.name}: {entry.value}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-card/95 backdrop-blur-md p-3 rounded-xl shadow-2xl border border-border z-50 relative">
                <p className="font-bold text-sm text-foreground mb-1">{label}</p>
                <p className="text-sm font-semibold" style={{ color: "var(--primary)" }}>
                    {payload[0].name}: {payload[0].value}
                </p>
                {payload[0].payload.lesson && (
                    <p className="text-xs text-muted-foreground mt-2 max-w-[200px] truncate">
                        {payload[0].payload.lesson}
                    </p>
                )}
                {payload[0].payload.intervention && (
                    <div className="mt-2 bg-primary/5 p-2 rounded-lg border border-primary/20">
                        <p className="text-[10px] uppercase font-bold text-primary">Intervention</p>
                        <p className="text-xs text-foreground/80 line-clamp-2 font-medium">{payload[0].payload.intervention}</p>
                    </div>
                )}
            </div>
        );
    }
    return null;
};

function SkillRow({ skill, student, lang = "en", recentChange }) {
    const isCritical = Boolean(skill.critical || skill.warning);
    const t = text[lang];
    const level = computeSkillLevel(student, skill.name);
    const grade = computeGrade(level);
    return (
        <HoverCard openDelay={200} closeDelay={150}>
            <HoverCardTrigger>
                <div className="grid grid-cols-12 items-center gap-3 border-b border-border/50 py-3 last:border-0 cursor-pointer hover:bg-primary/[0.03] transition-all -mx-3 px-3 rounded-xl group relative">
                    <div className="col-span-12 sm:col-span-4">
                        <div className="flex items-center gap-2 flex-wrap">
                            <p className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">{skill.name}</p>
                            {recentChange && (
                                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 font-bold px-1.5 py-0 text-[10px] whitespace-nowrap shrink-0">
                                    <TrendingUp className="w-2.5 h-2.5 mr-0.5 inline" />
                                    {recentChange}
                                </Badge>
                            )}
                            {isCritical && (
                                <span className="shrink-0 rounded-full bg-destructive/20 px-2 py-0.5 text-xs font-bold text-destructive">
                                    {t.priority}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="col-span-8 sm:col-span-5 flex items-center gap-2">
                        <ProgressBar value={level} gold={level > 80} />
                    </div>

                    <div className="col-span-2 flex items-center justify-end gap-2 sm:col-span-1">
                        <span className="font-semibold" style={{ color: isCritical ? "#b45309" : petraPurple }}>
                            {grade}
                        </span>
                    </div>

                    <div className="col-span-12 text-xs font-semibold sm:col-span-2 sm:text-right line-clamp-1" style={{ color: petraPurple }}>
                        {skill.condition || skill.note}
                    </div>
                </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 shadow-2xl rounded-xl border border-border bg-card/95 backdrop-blur-md p-5 animate-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2">
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

function SectionCard({ children, className = "", style = {}, glow = false }) {
    return (
        <Card 
            className={cn(
                "rounded-xl border border-border/60 shadow-sm hover:shadow-md relative overflow-hidden group transition-all duration-300",
                "bg-white",
                glow && "hover:border-primary/30",
                className
            )} 
            style={style}
        >
            <CardContent className="p-6 relative z-10">{children}</CardContent>
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

    const chartData = React.useMemo(() => computeChartData(student, t, lang), [student, t, lang]);
    const radarData = React.useMemo(() => {
        if (!student || !student.skills) return [];
        return student.skills.map(skill => ({
            subject: skill.name,
            current: computeSkillLevel(student, skill.name),
            baseline: skill.baseLevel || 0,
            fullMark: 100
        }));
    }, [student]);
    const [assignedResources, setAssignedResources] = React.useState([]);

    React.useEffect(() => {
        let savedAssignments = {};
        const savedStr = localStorage.getItem("petra_library_assignments");
        if (savedStr) {
            try { savedAssignments = JSON.parse(savedStr); } catch(e) {}
        }
        const filtered = db.resources.filter(r => {
            const assignedList = savedAssignments[r.id] || r.assignedTo;
            return assignedList.includes(student.id);
        });
        setAssignedResources(filtered);
    }, [student.id]);

    return (
        <div className="p-4 sm:p-6 text-foreground animate-in fade-in duration-500 max-w-6xl mx-auto space-y-6">
            <header>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                    {t.chartLearningPlan}
                </h1>
                <p className="mt-1 text-muted-foreground font-medium">{student.name}｜{student.course}</p>
            </header>

                <main className="space-y-6">
                    {student.petraInsight && (
                        <div className="rounded-xl bg-primary/5 border border-primary/20 p-8 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-150" />
                            <div className="flex items-center gap-2 mb-3">
                                <MiniIcon><TrendingUp className="w-4 h-4" /></MiniIcon>
                                <h2 className="text-xl font-bold text-primary">{t.petraInsight}</h2>
                            </div>
                            <p className="text-lg leading-relaxed font-medium text-foreground/90 relative z-10">
                                {student.petraInsight}
                            </p>
                        </div>
                    )}

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <SectionCard className="lg:col-span-2">
                            <div className="mb-5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <MiniIcon>▦</MiniIcon>
                                    <h2 className="text-xl font-bold">{t.diagnosis}</h2>
                                </div>
                                <Badge variant="outline" className="rounded-full font-bold">{t.overall}: {computeOverallGrade(student)}</Badge>
                            </div>

                            <div className="mb-5 rounded-xl p-5 border border-primary/20 bg-primary/5">
                                <div className="flex items-start gap-3">
                                    <MiniIcon>◎</MiniIcon>
                                    <div>
                                        <p className="font-bold text-foreground text-sm uppercase tracking-wider">{t.target}</p>
                                        <p className="text-sm text-foreground/80 mt-1 leading-relaxed">
                                            {student.target}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2">
                                {student.skills.map((skill) => {
                                    const latestLessonWithImpact = sortedLessons.find(l => l.impacts?.some(i => i.skill === skill.name));
                                    const recentChange = latestLessonWithImpact?.impacts.find(i => i.skill === skill.name)?.change;
                                    return <SkillRow key={skill.name} skill={skill} student={student} lang={lang} recentChange={recentChange} />
                                })}
                            </div>
                        </SectionCard>

                        <Card className="rounded-xl border border-border shadow-2xl overflow-hidden relative bg-card/40 backdrop-blur-xl">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_0%,var(--primary),transparent)]" />
                            <CardContent className="flex h-full flex-col justify-between p-6 text-foreground relative z-10">
                                <div>
                                    <div className="mb-4 flex items-center gap-2">
                                        <MiniIcon dark>!</MiniIcon>
                                        <h2 className="text-xl font-bold">{t.coreIssue}</h2>
                                    </div>
                                    <p className="text-2xl font-bold leading-snug text-primary">
                                        {student.coreIssue}
                                    </p>
                                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                                        {student.coreIssueDetail}
                                    </p>
                                </div>
                                <div className="mt-8 rounded-xl border border-white/5 bg-white/5 p-4">
                                    <p className="text-sm text-muted-foreground">{t.focusMonth}</p>
                                    <p className="mt-1 font-semibold text-lg text-foreground">{student.focusThisMonth}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <SectionCard className="lg:col-span-2">
                            <div className="mb-6 flex items-center gap-2">
                                <MiniIcon><TrendingUp className="w-4 h-4" /></MiniIcon>
                                <h2 className="text-xl font-bold">{t.progressChart}</h2>
                            </div>
                            <div className="h-[280px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
                                        <XAxis 
                                            dataKey="date" 
                                            axisLine={false} 
                                            tickLine={false} 
                                            tick={{ fontSize: 12, fill: '#71717a', fontWeight: 500 }}
                                            dy={10}
                                        />
                                        <YAxis 
                                            domain={['auto', 'auto']} 
                                            axisLine={false} 
                                            tickLine={false} 
                                            tick={{ fontSize: 12, fill: '#71717a', fontWeight: 500 }}
                                            dx={-10}
                                        />
                                        <RechartsTooltip content={<CustomTooltip />} />
                                        <Line 
                                            type="monotone" 
                                            name={t.score}
                                            dataKey="score" 
                                            stroke="var(--primary)" 
                                            strokeWidth={3}
                                            dot={{ fill: "var(--foreground)", strokeWidth: 2, r: 4 }}
                                            activeDot={{ r: 6, strokeWidth: 0, fill: "var(--primary)" }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </SectionCard>

                        <SectionCard className="lg:col-span-1">
                            <div className="mb-6 flex items-center gap-2">
                                <MiniIcon><Target className="w-4 h-4" /></MiniIcon>
                                <h2 className="text-xl font-bold">{t.skillBreakdown}</h2>
                            </div>
                            <div className="h-[280px] w-full -ml-2">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="65%" data={radarData}>
                                        <PolarGrid stroke="#e4e4e7" />
                                        <PolarAngleAxis 
                                            dataKey="subject" 
                                            tick={{ fill: '#71717a', fontSize: 10, fontWeight: 600 }} 
                                        />
                                        <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
                                        <Radar 
                                            name={t.baseline} 
                                            dataKey="baseline" 
                                            stroke="#a1a1aa" 
                                            strokeWidth={1.5}
                                            fill="#a1a1aa" 
                                            fillOpacity={0.1} 
                                        />
                                        <Radar 
                                            name={t.current} 
                                            dataKey="current" 
                                            stroke="var(--primary)" 
                                            strokeWidth={2}
                                            fill="var(--primary)" 
                                            fillOpacity={0.2} 
                                        />
                                        <RechartsTooltip content={<RadarTooltip />} />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                        </SectionCard>
                    </div>

                    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {student.phases.map((phase) => {
                            const progress = computePhaseProgress(phase);
                            return (
                            <SectionCard key={phase.title}>
                                <div className="mb-4 flex items-start justify-between">
                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: petraPurple }}>{phase.title}</p>
                                        <h3 className="text-xl font-bold mt-1">{phase.label}</h3>
                                        <p className="text-xs text-zinc-500 mt-1 font-medium">{phase.period}</p>
                                    </div>
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-bold shadow-inner" style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "var(--primary)" }}>
                                        {clampPercent(progress)}%
                                    </div>
                                </div>

                                <ProgressBar value={progress} gold={progress > 0} />

                                <div className="mt-5 space-y-3">
                                    {phase.items.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2 text-sm text-zinc-700">
                                            <span className="mt-0.5 font-bold shrink-0" style={{ color: (typeof item === 'object' ? item.completed : false) ? "var(--primary)" : "var(--muted-foreground)" }}>
                                                {(typeof item === 'object' ? item.completed : false) ? "✓" : "○"}
                                            </span>
                                            <span className="leading-snug">{typeof item === 'object' ? item.title : item}</span>
                                        </div>
                                    ))}
                                </div>
                            </SectionCard>
                        )})}
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
                                    <AccordionItem key={lesson.id} value={lesson.id} className="border border-border rounded-xl px-4 py-1 bg-card/30 backdrop-blur-sm shadow-sm data-[state=open]:border-primary/30 transition-colors overflow-hidden">
                                        <AccordionTrigger className="hover:no-underline py-3">
                                            <div className="flex items-center w-full gap-4 text-left">
                                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-border text-primary">
                                                    <Calendar className="w-5 h-5" />
                                                </div>
                                                <div className="flex-grow min-w-0">
                                                    <h3 className="font-bold text-foreground text-sm truncate">{lesson.date} <span className="text-muted-foreground font-normal ml-2 hidden sm:inline-block">| {lesson.topic}</span></h3>
                                                    <div className="flex items-center gap-3 mt-1 text-xs font-medium text-muted-foreground">
                                                        <span className="flex items-center gap-1 shrink-0"><User className="w-3 h-3" /> {lesson.tutor}</span>
                                                        <span className="px-2 py-0.5 rounded-full bg-white/5 shrink-0">{lesson.type}</span>
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
                                                {lesson.impacts && lesson.impacts.length > 0 && (
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <span className="text-xs font-bold text-zinc-500 mr-1">{t.impacts}:</span>
                                                        {lesson.impacts.map(impact => (
                                                            <Badge key={impact.skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20 font-medium px-2.5 py-0.5">
                                                                <TrendingUp className="w-3 h-3 mr-1.5" />
                                                                {impact.skill} <span className="ml-1.5 font-bold text-foreground">{impact.change}</span>
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                )}

                                                <div className="space-y-4">
                                                    {(lesson.sessionSummary || lesson.content) && (
                                                        <div className="bg-card/50 p-5 rounded-xl shadow-sm border border-border">
                                                            <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                                                <BookOpen className="w-4 h-4 text-primary" />
                                                                {t.sessionSummary}
                                                            </h4>
                                                            <p className="text-sm leading-relaxed text-foreground/80">{lesson.sessionSummary || lesson.content}</p>
                                                        </div>
                                                    )}

                                                    {lesson.observedStrength && (
                                                        <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
                                                            <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                                                <Target className="w-4 h-4 text-primary" />
                                                                {t.observedStrength}
                                                            </h4>
                                                            <p className="text-sm leading-relaxed font-bold text-foreground/90">{lesson.observedStrength}</p>
                                                        </div>
                                                    )}

                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                        {(lesson.currentFocusArea || lesson.feedback) && (
                                                            <div className="bg-card/30 p-4 rounded-xl border border-border shadow-sm flex flex-col">
                                                                <h4 className="font-bold text-muted-foreground text-[10px] uppercase tracking-wider mb-2">{t.currentFocusArea}</h4>
                                                                <p className="text-sm text-foreground mt-auto">{lesson.currentFocusArea || lesson.feedback}</p>
                                                            </div>
                                                        )}
                                                        {lesson.interventionStrategy && (
                                                            <div className="bg-card/30 p-4 rounded-xl border border-border shadow-sm flex flex-col">
                                                                <h4 className="font-bold text-muted-foreground text-[10px] uppercase tracking-wider mb-2">{t.interventionStrategy}</h4>
                                                                <p className="text-sm text-primary font-bold mt-auto">{lesson.interventionStrategy}</p>
                                                            </div>
                                                        )}
                                                        {lesson.responseToIntervention && (
                                                            <div className="bg-card/30 p-4 rounded-xl border border-border shadow-sm flex flex-col">
                                                                <h4 className="font-bold text-muted-foreground text-[10px] uppercase tracking-wider mb-2">{t.responseToIntervention}</h4>
                                                                <p className="text-sm text-foreground mt-auto">{lesson.responseToIntervention}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Full Original Report (Toggled) */}
                                                {(lesson.content || lesson.feedback || lesson.homework) && (
                                                    <div className="mt-6 border-t border-zinc-100 pt-4">
                                                        <details className="group">
                                                            <summary className="text-xs font-bold text-zinc-500 uppercase tracking-wide cursor-pointer hover:text-purple-600 transition-colors outline-none list-none flex items-center gap-2">
                                                                <svg className="w-4 h-4 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                                {t.viewFullReport}
                                                            </summary>
                                                            <div className="mt-4 space-y-4 text-sm text-foreground/80 bg-white/5 rounded-xl p-5 border border-border">
                                                                {lesson.content && (
                                                                    <div>
                                                                        <h4 className="font-bold text-foreground mb-1">{t.content}</h4>
                                                                        <p className="whitespace-pre-wrap">{lesson.content}</p>
                                                                    </div>
                                                                )}
                                                                {lesson.feedback && (
                                                                    <div>
                                                                        <h4 className="font-bold text-foreground mb-1">{t.feedback}</h4>
                                                                        <p className="whitespace-pre-wrap">{lesson.feedback}</p>
                                                                    </div>
                                                                )}
                                                                {lesson.homework && (
                                                                    <div>
                                                                        <h4 className="font-bold text-foreground mb-1">{t.homework}</h4>
                                                                        <p className="whitespace-pre-wrap">{lesson.homework}</p>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </details>
                                                    </div>
                                                )}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                                {student.lessons.length === 0 && (
                                    <div className="text-center py-8 text-zinc-500 text-sm">{t.noLessons}</div>
                                )}
                            </Accordion>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">{t.currentPriority}</h3>
                                <p className="font-medium text-sm leading-relaxed text-foreground">{computeNextPlan(student, lang)[0]?.desc || student.focusThisMonth}</p>
                            </div>
                            
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">{t.interventionStrategy}</h3>
                                <p className="font-medium text-sm leading-relaxed text-foreground">{computeNextPlan(student, lang)[1]?.desc || "Targeted scenario repetition"}</p>
                            </div>
 
                            <div className="p-4 rounded-xl bg-primary text-foreground border border-white/20 shadow-lg">
                                <h3 className="text-[10px] uppercase tracking-widest font-black mb-1 opacity-80">{t.expectedTrajectory}</h3>
                                <p className="font-bold text-sm leading-relaxed">{computeNextPlan(student, lang)[2]?.desc || "Improved consistency within 2-3 lessons"}</p>
                            </div>
                        </SectionCard>

                            <SectionCard>
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <MiniIcon><BookOpen className="w-4 h-4" /></MiniIcon>
                                        <h2 className="text-xl font-bold">{t.assignedResources}</h2>
                                    </div>
                                </div>
                                {assignedResources.length > 0 ? (
                                    <div className="space-y-3">
                                        {assignedResources.map(res => (
                                            <a key={res.id} href={res.link} target="_blank" rel="noopener noreferrer" className="block rounded-xl bg-white/5 p-4 border border-border hover:bg-white/10 transition-all group shadow-sm">
                                                <div className="flex justify-between items-start gap-4">
                                                    <div>
                                                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-1.5 inline-block">{res.category}</span>
                                                        <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">{res.display}</p>
                                                    </div>
                                                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 mt-1" />
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-zinc-500 text-center py-4 bg-zinc-50 rounded-2xl border border-zinc-100">{t.noResources}</p>
                                )}
                            </SectionCard>
                        </div>
                </main>
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
        return <div className="min-h-screen bg-background" />; // Empty state while checking localStorage
    }

    if (user) {
        const student = db.students[user.studentId];
        const navItems = [
            { label: "Dashboard", href: "/", icon: LayoutDashboard },
        ];
        return (
            <AppShell 
                navItems={navItems} 
                user={{ name: user.name, role: "Parent" }} 
                onLogout={handleLogout}
            >
                <Dashboard student={student} parentName={user.name} lang={user.lang || "en"} onLogout={handleLogout} />
            </AppShell>
        );
    }

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden selection:bg-primary/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,var(--primary),transparent)] opacity-10" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] brightness-100 contrast-150" />
            <Card className="w-full max-w-md shadow-xl border border-border/60 rounded-xl overflow-hidden animate-in fade-in zoom-in-95 duration-700 bg-white relative z-10">
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center mb-8">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl font-bold text-primary text-3xl shadow-md mb-4 border border-border bg-zinc-50">
                            P
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight text-foreground">Petra Portal</h1>
                        <p className="text-muted-foreground mt-1 text-sm">Sign in with your assigned credentials</p>
                    </div>
 
                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-foreground/80 font-semibold text-xs uppercase tracking-wider">Username</Label>
                            <Input 
                                id="username" 
                                type="text" 
                                placeholder="e.g. tadashi_parent" 
                                className="rounded-xl bg-zinc-50 border-border h-11 text-foreground placeholder:text-muted-foreground focus:ring-primary/40 focus:bg-white transition-all"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" className="text-foreground/80 font-semibold text-xs uppercase tracking-wider">Password</Label>
                            </div>
                            <Input 
                                id="password" 
                                type="password" 
                                className="rounded-xl bg-zinc-50 border-border h-11 text-foreground focus:ring-primary/40 focus:bg-white transition-all"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
 
                        {error && (
                            <div className="p-3 bg-destructive/10 text-destructive rounded-xl text-xs font-bold border border-destructive/20 animate-in fade-in slide-in-from-top-1">
                                {error}
                            </div>
                        )}
 
                        <Button type="submit" className="w-full h-11 rounded-xl font-bold text-base shadow-lg mt-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                            Sign In
                        </Button>
                    </form>


                </CardContent>
            </Card>
        </div>
    );
}
