"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, BookOpen, TrendingUp, Target, ChevronDown, ChevronRight, FileText, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function LearningRecords({ student, t, sortedLessons }) {
    const [expandedLessonId, setExpandedLessonId] = useState(null);

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

    return (
        <div className="animate-in fade-in duration-500 max-w-5xl mx-auto">
            <header className="mb-6 flex items-baseline justify-between border-b border-border pb-4">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-foreground flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        {t.recentReports || "Petra Learning Records"}
                    </h1>
                    <p className="mt-1 text-sm text-muted-foreground">{student.name} · {student.course}</p>
                </div>
                <div className="text-xs font-medium text-muted-foreground">
                    {sortedLessons.length} {sortedLessons.length === 1 ? 'Record' : 'Records'}
                </div>
            </header>

            <div className="border border-border rounded-md bg-white shadow-sm overflow-hidden">
                {sortedLessons.map((lesson, idx) => {
                    const isExpanded = expandedLessonId === lesson.id;
                    const isLast = idx === sortedLessons.length - 1;
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
                                        
                                        {/* Impact Pills */}
                                        {lesson.impacts && lesson.impacts.length > 0 && (
                                            <div className="flex flex-wrap items-center gap-2">
                                                {lesson.impacts.map(impact => (
                                                    <div key={impact.skill} className="flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/5 border border-primary/10 px-2 py-1 rounded-md">
                                                        <TrendingUp className="w-3 h-3" />
                                                        {impact.skill} <span className="font-semibold">{impact.change}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

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
                                                            {t.observedStrength || "Observed Strength"}
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
                                                            {t.currentFocusArea || "Focus Area"}
                                                        </h4>
                                                        <p className="text-sm text-foreground/90 leading-relaxed">
                                                            {lesson.currentFocusArea || lesson.feedback}
                                                        </p>
                                                    </div>
                                                )}
                                                
                                                {lesson.interventionStrategy && (
                                                    <div>
                                                        <h4 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                                                            {t.interventionStrategy || "Intervention Strategy"}
                                                        </h4>
                                                        <p className="text-sm font-medium text-primary leading-relaxed">
                                                            {lesson.interventionStrategy}
                                                        </p>
                                                    </div>
                                                )}

                                                {lesson.responseToIntervention && (
                                                    <div>
                                                        <h4 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                                                            {t.responseToIntervention || "Response to Intervention"}
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
                                                        {t.viewFullReport || "View Full Report"}
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
