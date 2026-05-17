"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, BookOpen, TrendingUp, Target, ChevronDown, ChevronRight, FileText, CheckCircle2, PenTool } from "lucide-react";
import { cn } from "@/lib/utils";

// Intelligent dynamic skill impact generator based on lesson topics and student profiles
export function getDynamicImpacts(lesson, student) {
    if (lesson.impacts && lesson.impacts.length > 0) {
        return lesson.impacts;
    }
    
    const generated = [];
    const topic = (lesson.topic || "").toLowerCase();
    const content = (lesson.content || "").toLowerCase();
    const summary = (lesson.sessionSummary || "").toLowerCase();
    const fullText = `${topic} ${content} ${summary}`;
    
    // Assign strength based on rating
    let changeVal = "+1";
    if (lesson.rating === "Excellent" || lesson.rating === "Outstanding") {
        changeVal = "+2";
    }
    
    const studentSkills = student?.skills || [];
    const skillNames = studentSkills.map(s => s.name);
    
    // 1. Conversational Confidence / Expression Fluidity
    if (fullText.includes("speak") || fullText.includes("conversation") || fullText.includes("talk") || fullText.includes("roleplay") || fullText.includes("dialogue") || fullText.includes("game") || fullText.includes("intro")) {
        const targetSkill = skillNames.find(s => s.includes("Confidence") || s.includes("Fluidity") || s.includes("Conversational") || s.includes("Expression")) || "Conversational Confidence";
        generated.push({ skill: targetSkill, change: changeVal });
    }
    
    // 2. Vocabulary Precision
    if (fullText.includes("vocabulary") || fullText.includes("vocab") || fullText.includes("word") || fullText.includes("spelling") || fullText.includes("textbook") || fullText.includes("term")) {
        const targetSkill = skillNames.find(s => s.includes("Vocabulary") || s.includes("Precision")) || "Vocabulary Precision";
        generated.push({ skill: targetSkill, change: changeVal });
    }
    
    // 3. Structural Accuracy
    if (fullText.includes("grammar") || fullText.includes("sentence") || fullText.includes("writing") || fullText.includes("write") || fullText.includes("structure") || fullText.includes("accuracy") || fullText.includes("diary")) {
        const targetSkill = skillNames.find(s => s.includes("Structural") || s.includes("Accuracy") || s.includes("Structure")) || "Structural Accuracy";
        generated.push({ skill: targetSkill, change: changeVal });
    }
    
    // 4. Listening Adaptability
    if (fullText.includes("listening") || fullText.includes("listen") || fullText.includes("comprehension") || fullText.includes("read")) {
        const targetSkill = skillNames.find(s => s.includes("Listening") || s.includes("Adaptability") || s.includes("Comprehension")) || "Listening Adaptability";
        generated.push({ skill: targetSkill, change: changeVal });
    }
    
    // Fallback if empty
    if (generated.length === 0) {
        const skill1 = skillNames[0] || "Vocabulary Precision";
        const skill2 = skillNames[1] || "Structural Accuracy";
        generated.push({ skill: skill1, change: "+1" });
        generated.push({ skill: skill2, change: "+1" });
    }
    
    return generated.slice(0, 2);
}

const localText = {
    en: {
        simplified: "Parent Mode (Simplified)",
        full: "Advisor Mode (Full Report)",
        summary: "Lesson Summary",
        homework: "Homework & Assignments",
        observStrength: "Observed Strength",
        focus: "Developmental Focus Area",
        strategy: "Intervention Strategy",
        response: "Response to Intervention",
        viewFullReport: "View Full Report"
    },
    ja: {
        simplified: "簡易要約（保護者モード）",
        full: "詳細レポート（アドバイザーモード）",
        summary: "レッスンのまとめ",
        homework: "宿題と課題内容",
        observStrength: "見られた強み",
        focus: "今後の重点フォーカス",
        strategy: "指導介入戦略",
        response: "指導への反応",
        viewFullReport: "講師レポート原文を表示"
    }
};

export function LearningRecords({ student, t, sortedLessons }) {
    const [expandedLessonId, setExpandedLessonId] = useState(null);
    const [isSimplifiedMode, setIsSimplifiedMode] = useState(true);

    if (!sortedLessons || sortedLessons.length === 0) {
        return (
            <div className="p-8 text-center border border-border rounded-md bg-zinc-50/50 text-muted-foreground text-sm font-medium">
                {t.noLessons || "No recent lessons found."}
            </div>
        );
    }

    const toggleLesson = (id) => {
        setExpandedLessonId(prev => prev === id ? null : id);
    };

    const lang = t.signOut === "ログアウト" ? "ja" : "en";
    const lt = localText[lang];

    return (
        <div className="animate-in fade-in duration-500 max-w-5xl mx-auto">
            <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-border pb-4 gap-4">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-foreground flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        {t.recentReports || "Petra Learning Records"}
                    </h1>
                    <p className="mt-1 text-sm text-muted-foreground">{student.name} · {student.course}</p>
                </div>
                
                {/* Premium Segmented Switcher */}
                <div className="flex items-center gap-1 p-0.5 bg-zinc-100 rounded-lg border border-border/80 self-start sm:self-auto shrink-0 shadow-none">
                    <button 
                        onClick={() => setIsSimplifiedMode(true)}
                        className={cn(
                            "px-3 py-1.5 rounded-md text-[11px] font-bold transition-all duration-200",
                            isSimplifiedMode 
                                ? "bg-white text-primary shadow-sm" 
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {lt.simplified}
                    </button>
                    <button 
                        onClick={() => setIsSimplifiedMode(false)}
                        className={cn(
                            "px-3 py-1.5 rounded-md text-[11px] font-bold transition-all duration-200",
                            !isSimplifiedMode 
                                ? "bg-white text-primary shadow-sm" 
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {lt.full}
                    </button>
                </div>
            </header>

            <div className="border border-border rounded-md bg-white shadow-sm overflow-hidden">
                {sortedLessons.map((lesson, idx) => {
                    const isExpanded = expandedLessonId === lesson.id;
                    const isLast = idx === sortedLessons.length - 1;
                    
                    // Automatically resolve dynamic impacts
                    const impacts = getDynamicImpacts(lesson, student);

                    return (
                        <div 
                            key={lesson.id} 
                            className={cn(
                                "group transition-colors",
                                !isLast && "border-b border-border",
                                isExpanded ? "bg-zinc-50/30" : "hover:bg-zinc-50/50"
                            )}
                        >
                            <button 
                                onClick={() => toggleLesson(lesson.id)}
                                className="w-full flex items-start sm:items-center gap-3 sm:gap-4 text-left px-4 sm:px-5 py-4 focus:outline-none"
                            >
                                <div className="text-muted-foreground flex-shrink-0 group-hover:text-foreground transition-colors mt-0.5 sm:mt-0">
                                    {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full min-w-0 gap-2.5 sm:gap-4">
                                    <div className="flex-grow min-w-0">
                                        <h3 className="font-medium text-foreground text-sm truncate flex items-center gap-2">
                                            <Calendar className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                                            <span className="truncate">{lesson.date} <span className="text-muted-foreground mx-1">·</span> <span className="font-normal text-muted-foreground">{lesson.topic}</span></span>
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0 flex-wrap">
                                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                            <User className="w-3.5 h-3.5" /> 
                                            {lesson.tutor}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Badge variant="outline" className="rounded-md font-medium text-[10px] uppercase tracking-wider bg-zinc-100/50 border-border text-muted-foreground">
                                                {lesson.type}
                                            </Badge>
                                            <Badge variant="outline" className={cn(
                                                "rounded-md font-medium text-[10px] uppercase tracking-wider",
                                                lesson.rating === 'Excellent' 
                                                    ? 'bg-primary/5 text-primary border-primary/20' 
                                                    : 'bg-amber-50 text-amber-700 border-amber-200'
                                            )}>
                                                {lesson.rating}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </button>

                            {isExpanded && (
                                <div className="px-4 sm:px-5 pb-5 sm:pl-[44px] animate-in slide-in-from-top-1">
                                    <div className="space-y-6 max-w-4xl">
                                        
                                        {/* Dynamic Impact Pills (+ Skills) */}
                                        {impacts && impacts.length > 0 && (
                                            <div className="flex flex-wrap items-center gap-2">
                                                {impacts.map(impact => (
                                                    <div key={impact.skill} className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/5 border border-primary/10 px-2 py-1 rounded-md">
                                                        <TrendingUp className="w-3 h-3 text-primary shrink-0" />
                                                        {impact.skill} <span className="font-bold">{impact.change}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {isSimplifiedMode ? (
                                            /* SIMPLIFIED PARENT VIEW */
                                            <div className="space-y-5">
                                                {(lesson.sessionSummary || lesson.content) && (
                                                    <div className="rounded-md border border-zinc-100 bg-zinc-50/50 p-4">
                                                        <h4 className="flex items-center gap-2 text-xs font-bold text-foreground mb-2 shrink-0">
                                                            <BookOpen className="w-4 h-4 text-primary shrink-0" />
                                                            {lt.summary}
                                                        </h4>
                                                        <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap">
                                                            {lesson.sessionSummary || lesson.content}
                                                        </p>
                                                    </div>
                                                )}

                                                {lesson.homework && (
                                                    <div className="rounded-md border border-primary/10 bg-primary/[0.02] p-4">
                                                        <h4 className="flex items-center gap-2 text-xs font-bold text-primary mb-2 shrink-0">
                                                            <PenTool className="w-4 h-4 shrink-0" />
                                                            {lt.homework}
                                                        </h4>
                                                        <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap">
                                                            {lesson.homework}
                                                        </p>
                                                    </div>
                                                )}

                                                <div className="pt-2">
                                                    <button 
                                                        onClick={() => setIsSimplifiedMode(false)}
                                                        className="text-[11px] font-semibold text-muted-foreground hover:text-primary transition-all inline-flex items-center gap-1.5 bg-zinc-100 hover:bg-primary/5 hover:text-primary px-3 py-1.5 rounded-md border border-border"
                                                    >
                                                        <TrendingUp className="w-3.5 h-3.5" />
                                                        {lang === "ja" ? "指導者の詳細診断・介入戦略データを見る" : "View Detailed Diagnostics & Educator Metrics"}
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            /* FULL PROFESSIONAL ADVISOR VIEW */
                                            <>
                                                {/* Main Content Grid */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                                    
                                                    {/* Column 1 */}
                                                    <div className="space-y-6">
                                                        {(lesson.sessionSummary || lesson.content) && (
                                                            <div>
                                                                <h4 className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                                                                    <BookOpen className="w-3.5 h-3.5" />
                                                                    {t.sessionSummary || "Session Summary"}
                                                                </h4>
                                                                <p className="text-sm text-foreground/90 leading-relaxed">
                                                                    {lesson.sessionSummary || lesson.content}
                                                                </p>
                                                            </div>
                                                        )}

                                                        {lesson.observedStrength && (
                                                            <div>
                                                                <h4 className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                                                                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                                                                    {lt.observStrength}
                                                                </h4>
                                                                <p className="text-sm font-medium text-foreground leading-relaxed">
                                                                    {lesson.observedStrength}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Column 2 */}
                                                    <div className="space-y-6">
                                                        {(lesson.currentFocusArea || lesson.feedback) && (
                                                            <div>
                                                                <h4 className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                                                                    <Target className="w-3.5 h-3.5" />
                                                                    {lt.focus}
                                                                </h4>
                                                                <p className="text-sm text-foreground/90 leading-relaxed">
                                                                    {lesson.currentFocusArea || lesson.feedback}
                                                                </p>
                                                            </div>
                                                        )}
                                                        
                                                        {lesson.interventionStrategy && (
                                                            <div>
                                                                <h4 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                                                                    {lt.strategy}
                                                                </h4>
                                                                <p className="text-sm font-medium text-primary leading-relaxed">
                                                                    {lesson.interventionStrategy}
                                                                </p>
                                                            </div>
                                                        )}

                                                        {lesson.responseToIntervention && (
                                                            <div>
                                                                <h4 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                                                                    {lt.response}
                                                                </h4>
                                                                <p className="text-sm text-foreground/90 leading-relaxed">
                                                                    {lesson.responseToIntervention}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Full Report Details */}
                                                {(lesson.content || lesson.feedback || lesson.homework) && (
                                                    <div className="pt-4 border-t border-border">
                                                        <details className="group">
                                                            <summary className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer outline-none list-none flex items-center gap-1.5">
                                                                <ChevronRight className="w-3.5 h-3.5 transition-transform group-open:rotate-90" />
                                                                {lt.viewFullReport}
                                                            </summary>
                                                            <div className="mt-4 pl-5 space-y-5 border-l-2 border-border/50">
                                                                {lesson.content && (
                                                                    <div>
                                                                        <h4 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">{t.content || "Content"}</h4>
                                                                        <p className="text-sm text-foreground/80 whitespace-pre-wrap leading-relaxed">{lesson.content}</p>
                                                                    </div>
                                                                )}
                                                                {lesson.feedback && (
                                                                    <div>
                                                                        <h4 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">{t.feedback || "Feedback"}</h4>
                                                                        <p className="text-sm text-foreground/80 whitespace-pre-wrap leading-relaxed">{lesson.feedback}</p>
                                                                    </div>
                                                                )}
                                                                {lesson.homework && (
                                                                    <div>
                                                                        <h4 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">{t.homework || "Homework"}</h4>
                                                                        <p className="text-sm text-foreground/80 whitespace-pre-wrap leading-relaxed">{lesson.homework}</p>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </details>
                                                    </div>
                                                )}
                                            </>
                                        )}

                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
