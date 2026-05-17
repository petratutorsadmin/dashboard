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
import { dbService } from "@/lib/db";
import { cn, computeSkillLevel, computeGrade, computeOverallGrade, computePhaseProgress, computeNextPlan } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { LearningRecords, getDynamicImpacts } from "@/components/LearningRecords";

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

function MiniIcon({ children, gold = false, dark = false }) {
    return (
        <span
            className={cn(
                "inline-flex h-6 w-6 items-center justify-center rounded-md text-xs shrink-0 border",
                dark ? "bg-primary text-primary-foreground border-transparent font-bold" :
                gold ? "bg-amber-50 text-amber-700 border-amber-200/50 font-medium" :
                "bg-primary/5 text-primary border-primary/10 font-medium"
            )}
        >
            {children}
        </span>
    );
}

function ProgressBar({ value, gold = false }) {
    const safeValue = clampPercent(value);
    return (
        <div className="h-1.5 w-full overflow-hidden rounded-sm bg-zinc-100 border border-zinc-200/40">
            <div
                className="h-full rounded-sm transition-all duration-1000 ease-out"
                style={{ 
                    width: `${safeValue}%`, 
                    backgroundColor: gold ? "oklch(0.85 0.12 90)" : "var(--primary)" 
                }}
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
        const impacts = getDynamicImpacts(lesson, student);
        if (impacts) {
            impacts.forEach(impact => {
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
            <div className="bg-white p-3 rounded-md shadow-lg border border-border z-50 relative">
                <p className="font-semibold text-xs text-foreground mb-1.5">{payload[0].payload.subject}</p>
                {payload.map((entry, index) => (
                    <p key={`item-${index}`} className="text-xs font-medium mb-0.5" style={{ color: entry.stroke || entry.color || "var(--primary)" }}>
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
            <div className="bg-white p-3 rounded-md shadow-lg border border-border z-50 relative max-w-[220px]">
                <p className="font-semibold text-xs text-foreground mb-1">{label}</p>
                <p className="text-xs font-semibold" style={{ color: "var(--primary)" }}>
                    {payload[0].name}: {payload[0].value}
                </p>
                {payload[0].payload.lesson && (
                    <p className="text-[11px] text-muted-foreground mt-1.5 truncate">
                        {payload[0].payload.lesson}
                    </p>
                )}
                {payload[0].payload.intervention && (
                    <div className="mt-2 bg-primary/5 p-2 rounded-md border border-primary/10">
                        <p className="text-[9px] uppercase tracking-wider font-semibold text-primary">Intervention</p>
                        <p className="text-[11px] text-foreground/80 line-clamp-2 mt-0.5 leading-snug">{payload[0].payload.intervention}</p>
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
                <div className="grid grid-cols-12 items-center gap-3 border-b border-border/40 py-2.5 last:border-0 cursor-pointer hover:bg-zinc-50/50 transition-colors -mx-3 px-3 rounded-md group relative">
                    <div className="col-span-12 sm:col-span-4">
                        <div className="flex items-center gap-2 flex-wrap">
                            <p className="font-medium text-xs text-foreground group-hover:text-primary transition-colors line-clamp-1">{skill.name}</p>
                            {recentChange && (
                                <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/15 font-semibold px-1.5 py-0.5 rounded-md text-[9px] whitespace-nowrap shrink-0">
                                    <TrendingUp className="w-2.5 h-2.5 mr-0.5 inline" />
                                    {recentChange}
                                </Badge>
                            )}
                            {isCritical && (
                                <span className="shrink-0 rounded-md bg-destructive/5 border border-destructive/10 px-1.5 py-0.5 text-[9px] font-semibold text-destructive uppercase tracking-wider">
                                    {t.priority}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="col-span-8 sm:col-span-5 flex items-center gap-2">
                        <ProgressBar value={level} gold={level > 80} />
                    </div>

                    <div className="col-span-2 flex items-center justify-end gap-2 sm:col-span-1">
                        <span className="font-semibold text-xs" style={{ color: isCritical ? "#b45309" : "var(--primary)" }}>
                            {grade}
                        </span>
                    </div>

                    <div className="col-span-12 text-[11px] font-medium sm:col-span-2 sm:text-right line-clamp-1 text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.condition || skill.note}
                    </div>
                </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 shadow-lg rounded-md border border-border bg-white p-4 animate-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2">
                <div className="space-y-3.5">
                    <div>
                        <h4 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> {t.whatIsIssue}
                        </h4>
                        <p className="text-xs text-foreground/80 leading-relaxed">{skill.issue}</p>
                    </div>
                    <div className="h-px w-full bg-border/50"></div>
                    <div>
                        <h4 className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-1.5 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> {t.howToImprove}
                        </h4>
                        <p className="text-xs text-foreground/80 leading-relaxed">{skill.improvement}</p>
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
                "rounded-md border border-border bg-white shadow-[0_1px_2px_rgba(0,0,0,0.02)] relative overflow-hidden group transition-all duration-200",
                glow && "hover:border-primary/30",
                className
            )} 
            style={style}
        >
            <CardContent className="p-5 relative z-10">{children}</CardContent>
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

export function Dashboard({ student: rawStudent, parentName, lang = "en", onLogout, view = "dashboard" }) {
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
        async function fetchResources() {
            let savedAssignments = {};
            const savedStr = localStorage.getItem("petra_library_assignments");
            if (savedStr) {
                try { savedAssignments = JSON.parse(savedStr); } catch(e) {}
            }
            const allResources = await dbService.getResources();
            const filtered = allResources.filter(r => {
                const assignedList = savedAssignments[r.id] || r.assignedTo;
                return assignedList.includes(student.id);
            });
            setAssignedResources(filtered);
        }
        fetchResources();
    }, [student.id]);

    if (view === "records") {
        return <LearningRecords student={student} t={t} sortedLessons={sortedLessons} />;
    }

    return (
        <div className="p-4 sm:p-6 text-foreground animate-in fade-in duration-500 max-w-6xl mx-auto space-y-6">
            <header className="border-b border-border pb-4 mb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                    {t.chartLearningPlan}
                </h1>
                <p className="mt-1 text-xs text-muted-foreground">{student.name} · {student.course}</p>
            </header>

            <main className="space-y-6">
                {student.petraInsight && (
                    <div className="rounded-md bg-primary/5 border border-primary/15 p-6 shadow-sm relative overflow-hidden group">
                        <div className="flex items-center gap-2 mb-2">
                            <MiniIcon><TrendingUp className="w-3.5 h-3.5" /></MiniIcon>
                            <h2 className="text-sm font-semibold text-primary">{t.petraInsight}</h2>
                        </div>
                        <p className="text-sm leading-relaxed text-foreground/90 relative z-10 font-medium">
                            {student.petraInsight}
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <SectionCard className="lg:col-span-2">
                        <div className="mb-5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <MiniIcon>▦</MiniIcon>
                                <h2 className="text-sm font-semibold">{t.diagnosis}</h2>
                            </div>
                            <Badge variant="outline" className="rounded-md font-semibold text-xs border-primary/20 bg-primary/5 text-primary px-2 py-0.5">{t.overall}: {computeOverallGrade(student)}</Badge>
                        </div>

                        <div className="mb-4 rounded-md p-4 border border-primary/10 bg-primary/5">
                            <div className="flex items-start gap-2.5">
                                <MiniIcon gold>◎</MiniIcon>
                                <div>
                                    <p className="font-semibold text-muted-foreground text-[10px] uppercase tracking-wider">{t.target}</p>
                                    <p className="text-xs text-foreground/80 mt-1 leading-relaxed">
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

                    <Card className="rounded-md border border-border shadow-sm overflow-hidden relative bg-white flex flex-col justify-between">
                        <CardContent className="flex h-full flex-col justify-between p-5 text-foreground relative z-10">
                            <div>
                                <div className="mb-4 flex items-center gap-2">
                                    <MiniIcon dark>!</MiniIcon>
                                    <h2 className="text-sm font-semibold">{t.coreIssue}</h2>
                                </div>
                                <p className="text-xl font-semibold leading-snug text-primary">
                                    {student.coreIssue}
                                </p>
                                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                                    {student.coreIssueDetail}
                                </p>
                            </div>
                            <div className="mt-6 rounded-md border border-border bg-zinc-50/50 p-4">
                                <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">{t.focusMonth}</p>
                                <p className="mt-1 font-semibold text-sm text-foreground">{student.focusThisMonth}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <SectionCard className="lg:col-span-2">
                        <div className="mb-4 flex items-center gap-2">
                            <MiniIcon><TrendingUp className="w-3.5 h-3.5" /></MiniIcon>
                            <h2 className="text-sm font-semibold">{t.progressChart}</h2>
                        </div>
                        <div className="h-[280px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={chartData} margin={{ top: 5, right: 10, bottom: 5, left: -20 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f4" />
                                    <XAxis 
                                        dataKey="date" 
                                        axisLine={false} 
                                        tickLine={false} 
                                        tick={{ fontSize: 10, fill: '#71717a', fontWeight: 500 }}
                                        dy={10}
                                    />
                                    <YAxis 
                                        domain={['auto', 'auto']} 
                                        axisLine={false} 
                                        tickLine={false} 
                                        tick={{ fontSize: 10, fill: '#71717a', fontWeight: 500 }}
                                        dx={-10}
                                    />
                                    <RechartsTooltip content={<CustomTooltip />} />
                                    <Line 
                                        type="monotone" 
                                        name={t.score}
                                        dataKey="score" 
                                        stroke="var(--primary)" 
                                        strokeWidth={2}
                                        dot={{ fill: "var(--primary)", strokeWidth: 1, r: 2.5 }}
                                        activeDot={{ r: 4, strokeWidth: 0, fill: "var(--primary)" }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </SectionCard>

                    <SectionCard className="lg:col-span-1">
                        <div className="mb-4 flex items-center gap-2">
                            <MiniIcon><Target className="w-3.5 h-3.5" /></MiniIcon>
                            <h2 className="text-sm font-semibold">{t.skillBreakdown}</h2>
                        </div>
                        <div className="h-[280px] w-full -ml-2">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="65%" data={radarData}>
                                    <PolarGrid stroke="#e4e4e7" />
                                    <PolarAngleAxis 
                                        dataKey="subject" 
                                        tick={{ fill: '#71717a', fontSize: 9, fontWeight: 500 }} 
                                    />
                                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
                                    <Radar 
                                        name={t.baseline} 
                                        dataKey="baseline" 
                                        stroke="#a1a1aa" 
                                        strokeWidth={1.5}
                                        fill="#a1a1aa" 
                                        fillOpacity={0.05} 
                                    />
                                    <Radar 
                                        name={t.current} 
                                        dataKey="current" 
                                        stroke="var(--primary)" 
                                        strokeWidth={1.5}
                                        fill="var(--primary)" 
                                        fillOpacity={0.15} 
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
                                        <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">{phase.title}</p>
                                        <h3 className="text-md font-semibold mt-1">{phase.label}</h3>
                                        <p className="text-[11px] text-muted-foreground mt-0.5">{phase.period}</p>
                                    </div>
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md font-semibold text-xs border border-primary/15 bg-primary/5 text-primary">
                                        {clampPercent(progress)}%
                                    </div>
                                </div>

                                <ProgressBar value={progress} />

                                <div className="mt-4 space-y-2.5">
                                    {phase.items.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2 text-xs text-foreground/80">
                                            <span className="mt-0.5 font-bold shrink-0 text-xs" style={{ color: (typeof item === 'object' ? item.completed : false) ? "var(--primary)" : "var(--muted-foreground)" }}>
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
                                <h2 className="text-sm font-semibold">{t.nextPlan || "Strategic Focus"}</h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 rounded-md bg-zinc-50/50 border border-border">
                                <h3 className="text-[9px] uppercase tracking-widest text-primary font-semibold mb-1">{t.currentPriority}</h3>
                                <p className="font-medium text-xs leading-relaxed text-foreground">{computeNextPlan(student, lang)[0]?.desc || student.focusThisMonth}</p>
                            </div>
                            
                            <div className="p-4 rounded-md bg-zinc-50/50 border border-border">
                                <h3 className="text-[9px] uppercase tracking-widest text-primary font-semibold mb-1">{t.interventionStrategy}</h3>
                                <p className="font-medium text-xs leading-relaxed text-foreground">{computeNextPlan(student, lang)[1]?.desc || "Targeted scenario repetition"}</p>
                            </div>
 
                            <div className="p-4 rounded-md bg-primary/5 text-primary border border-primary/15 shadow-none flex flex-col justify-between">
                                <h3 className="text-[9px] uppercase tracking-widest font-semibold mb-1 opacity-80">{t.expectedTrajectory}</h3>
                                <p className="font-semibold text-xs leading-relaxed">{computeNextPlan(student, lang)[2]?.desc || "Improved consistency within 2-3 lessons"}</p>
                            </div>
                        </div>
                    </SectionCard>

                    <SectionCard className="lg:col-span-2">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <MiniIcon><BookOpen className="w-3.5 h-3.5" /></MiniIcon>
                                <h2 className="text-sm font-semibold">{t.assignedResources}</h2>
                            </div>
                        </div>
                        {assignedResources.length > 0 ? (
                            <div className="space-y-2.5">
                                {assignedResources.map(res => (
                                    <a key={res.id} href={res.link} target="_blank" rel="noopener noreferrer" className="block rounded-md bg-zinc-50/30 p-3.5 border border-border hover:bg-zinc-50 transition-colors group shadow-none">
                                        <div className="flex justify-between items-start gap-4">
                                            <div>
                                                <span className="text-[9px] font-semibold text-primary bg-primary/5 border border-primary/15 px-1.5 py-0.5 rounded-md mb-1.5 inline-block uppercase tracking-wider">{res.category}</span>
                                                <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">{res.display}</p>
                                            </div>
                                            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary shrink-0 mt-0.5" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        ) : (
                            <p className="text-xs text-muted-foreground text-center py-4 bg-zinc-50/50 rounded-md border border-border">{t.noResources}</p>
                        )}
                    </SectionCard>
                </div>
            </main>
        </div>
    );
}

export default function App() {
    const [user, setUser] = useState(null);
    const [student, setStudent] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const router = useRouter();

    const [currentView, setCurrentView] = useState("dashboard");

    React.useEffect(() => {
        async function checkSession() {
            if (localStorage.getItem("petra_admin_id")) {
                router.push("/admin");
            } else if (localStorage.getItem("petra_tutor_id")) {
                router.push("/tutor");
            } else {
                const savedUserId = localStorage.getItem("petra_parent_id");
                if (savedUserId) {
                    const parent = await dbService.getParentById(savedUserId);
                    if (parent) {
                        setUser(parent);
                    }
                }
            }
            setIsLoaded(true);
        }
        checkSession();
    }, [router]);

    // Load student asynchronously when user changes
    React.useEffect(() => {
        async function loadStudent() {
            if (user && user.studentId) {
                const st = await dbService.getStudentById(user.studentId);
                setStudent(st);
            } else {
                setStudent(null);
            }
        }
        loadStudent();
    }, [user]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        const admin = await dbService.authenticateAdmin(username, password);
        if (admin) {
            localStorage.setItem("petra_admin_id", admin.id);
            router.push("/admin");
            return;
        }

        const tutor = await dbService.authenticateTutor(username, password);
        if (tutor) {
            localStorage.setItem("petra_tutor_id", tutor.id);
            router.push("/tutor");
            return;
        }

        const parent = await dbService.authenticateParent(username, password);
        if (parent) {
            setUser(parent);
            localStorage.setItem("petra_parent_id", parent.id);
            return;
        }

        setError("Invalid username or password");
    };

    const handleLogout = () => {
        setUser(null);
        setStudent(null);
        localStorage.removeItem("petra_parent_id");
    };

    if (!isLoaded) {
        return <div className="min-h-screen bg-background" />; // Empty state while checking localStorage
    }

    if (user) {
        if (!student) {
            return (
                <div className="min-h-screen bg-background flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary" />
                </div>
            );
        }
        const navItems = [
            { label: "Dashboard", onClick: () => setCurrentView("dashboard"), isActive: currentView === "dashboard", icon: LayoutDashboard },
            { label: "Learning Records", onClick: () => setCurrentView("records"), isActive: currentView === "records", icon: BookOpen },
        ];
        return (
            <AppShell 
                navItems={navItems} 
                user={{ name: user.name, role: "Parent" }} 
                onLogout={handleLogout}
            >
                <Dashboard student={student} parentName={user.name} lang={user.lang || "en"} onLogout={handleLogout} view={currentView} />
            </AppShell>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-50/50 flex items-center justify-center p-4 relative overflow-hidden selection:bg-primary/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,var(--primary),transparent)] opacity-[0.04]" />
            <Card className="w-full max-w-sm shadow-sm border border-border rounded-md overflow-hidden animate-in fade-in zoom-in-95 duration-500 bg-white relative z-10">
                <CardContent className="p-7">
                    <div className="flex flex-col items-center text-center mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md font-bold text-primary text-xl border border-primary/10 bg-primary/5 mb-3.5">
                            P
                        </div>
                        <h1 className="text-lg font-semibold tracking-tight text-foreground">Petra Portal</h1>
                        <p className="text-muted-foreground mt-1 text-xs">Sign in with your assigned credentials</p>
                    </div>
 
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-1.5">
                            <Label htmlFor="username" className="text-muted-foreground font-semibold text-[9px] uppercase tracking-widest">Username</Label>
                            <Input 
                                id="username" 
                                type="text" 
                                placeholder="e.g. tadashi_parent" 
                                className="rounded-md bg-zinc-50/50 border-border h-9 text-xs text-foreground placeholder:text-muted-foreground/60 focus:ring-primary/20 focus:bg-white transition-all"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="password" className="text-muted-foreground font-semibold text-[9px] uppercase tracking-widest">Password</Label>
                            <Input 
                                id="password" 
                                type="password" 
                                className="rounded-md bg-zinc-50/50 border-border h-9 text-xs text-foreground focus:ring-primary/20 focus:bg-white transition-all"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
 
                        {error && (
                            <div className="p-2.5 bg-destructive/5 text-destructive rounded-md text-[11px] font-bold border border-destructive/20 animate-in fade-in slide-in-from-top-1">
                                {error}
                            </div>
                        )}
 
                        <Button type="submit" className="w-full h-9 rounded-md font-medium text-xs shadow-none mt-1.5 bg-primary text-primary-foreground hover:bg-primary/95 transition-all">
                            Sign In
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
