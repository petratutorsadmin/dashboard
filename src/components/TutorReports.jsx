"use client";

import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Calendar, User, BookOpen, TrendingUp, Target,
  ChevronDown, ChevronRight, FileText, CheckCircle2,
  PenTool, Clock, Users, LayoutGrid,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { dbService } from "@/lib/db";
import { getDynamicImpacts } from "@/components/LearningRecords";

// ─── Helpers ────────────────────────────────────────────────────────────────

function parseDate(dateStr) {
  if (!dateStr) return new Date(0);
  try {
    return new Date(dateStr);
  } catch {
    return new Date(0);
  }
}

function getMonthLabel(dateStr) {
  const d = parseDate(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

function formatLessonDuration(lesson, schedules) {
  // Try to find a matching schedule by tutor + student + approximate date
  if (!schedules || schedules.length === 0) return null;
  const lessonDate = parseDate(lesson.date).toDateString();
  const match = schedules.find((s) => {
    const schDate = parseDate(s.dateTime).toDateString();
    const tutorMatch =
      s.tutorName &&
      lesson.tutor &&
      (s.tutorName.toLowerCase().includes(lesson.tutor.toLowerCase()) ||
        lesson.tutor.toLowerCase().includes(s.tutorName.toLowerCase().split(" ")[0]));
    return schDate === lessonDate && tutorMatch;
  });
  return match ? match.duration : null;
}

// ─── Single Lesson Report Card ───────────────────────────────────────────────

function LessonReportCard({ lesson, studentName, schedules }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const duration = formatLessonDuration(lesson, schedules);

  return (
    <div
      className={cn(
        "border border-border rounded-md bg-white transition-all shadow-sm",
        isExpanded ? "border-primary/20" : "hover:border-zinc-300"
      )}
    >
      {/* Header row */}
      <button
        onClick={() => setIsExpanded((v) => !v)}
        className="w-full flex items-start sm:items-center gap-3 text-left px-4 py-4 focus:outline-none group"
      >
        <div className="text-muted-foreground group-hover:text-foreground transition-colors mt-0.5 sm:mt-0 flex-shrink-0">
          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2 min-w-0">
          <div className="flex-grow min-w-0 space-y-0.5">
            <h3 className="font-medium text-sm text-foreground flex items-center gap-2 truncate">
              <Calendar className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
              <span className="truncate">
                {lesson.date}
                <span className="text-muted-foreground mx-1">·</span>
                <span className="font-normal text-muted-foreground">{lesson.topic}</span>
              </span>
            </h3>
            {studentName && (
              <p className="text-xs text-muted-foreground flex items-center gap-1 pl-5">
                <User className="w-3 h-3" />
                {studentName}
                {duration && (
                  <>
                    <span className="mx-1">·</span>
                    <Clock className="w-3 h-3" />
                    {duration} min
                  </>
                )}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
            <Badge
              variant="outline"
              className="rounded-md font-medium text-[10px] uppercase tracking-wider bg-zinc-100/50 border-border text-muted-foreground"
            >
              {lesson.type}
            </Badge>
            <Badge
              variant="outline"
              className={cn(
                "rounded-md font-medium text-[10px] uppercase tracking-wider",
                lesson.rating === "Excellent" || lesson.rating === "Outstanding"
                  ? "bg-primary/5 text-primary border-primary/20"
                  : "bg-amber-50 text-amber-700 border-amber-200"
              )}
            >
              {lesson.rating}
            </Badge>
          </div>
        </div>
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div className="px-4 pb-5 pl-[44px] animate-in slide-in-from-top-1 space-y-5 border-t border-border/60 pt-4">
          {/* Duration pill if available */}
          {duration && (
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/5 border border-primary/10 px-2.5 py-1 rounded-md">
              <Clock className="w-3 h-3" />
              Lesson Duration: {duration} minutes
            </div>
          )}

          {/* Skill impact pills */}
          {(() => {
            const impacts = lesson.impacts && lesson.impacts.length > 0 ? lesson.impacts : null;
            if (!impacts) return null;
            return (
              <div className="flex flex-wrap items-center gap-2">
                {impacts.map((impact) => (
                  <div
                    key={impact.skill}
                    className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/5 border border-primary/10 px-2 py-1 rounded-md"
                  >
                    <TrendingUp className="w-3 h-3 shrink-0" />
                    {impact.skill} <span className="font-bold">{impact.change}</span>
                  </div>
                ))}
              </div>
            );
          })()}

          {/* Content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {/* Col 1 */}
            <div className="space-y-5">
              {(lesson.sessionSummary || lesson.content) && (
                <div>
                  <h4 className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    Session Summary
                  </h4>
                  <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap">
                    {lesson.sessionSummary || lesson.content}
                  </p>
                </div>
              )}
              {lesson.observedStrength && (
                <div>
                  <h4 className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    Observed Strength
                  </h4>
                  <p className="text-sm font-medium text-foreground leading-relaxed">
                    {lesson.observedStrength}
                  </p>
                </div>
              )}
            </div>

            {/* Col 2 */}
            <div className="space-y-5">
              {(lesson.currentFocusArea || lesson.feedback) && (
                <div>
                  <h4 className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    <Target className="w-3.5 h-3.5" />
                    Developmental Focus
                  </h4>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {lesson.currentFocusArea || lesson.feedback}
                  </p>
                </div>
              )}
              {lesson.interventionStrategy && (
                <div>
                  <h4 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    Intervention Strategy
                  </h4>
                  <p className="text-sm font-medium text-primary leading-relaxed">
                    {lesson.interventionStrategy}
                  </p>
                </div>
              )}
              {lesson.responseToIntervention && (
                <div>
                  <h4 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    Response to Intervention
                  </h4>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {lesson.responseToIntervention}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Full raw report toggle */}
          {(lesson.content || lesson.feedback || lesson.homework) && (
            <div className="pt-3 border-t border-border">
              <details className="group">
                <summary className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer outline-none list-none flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-open:rotate-90" />
                  View Full Report
                </summary>
                <div className="mt-4 pl-5 space-y-5 border-l-2 border-border/50">
                  {lesson.content && (
                    <div>
                      <h4 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">Lesson Content</h4>
                      <p className="text-sm text-foreground/80 whitespace-pre-wrap leading-relaxed">{lesson.content}</p>
                    </div>
                  )}
                  {lesson.feedback && (
                    <div>
                      <h4 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">Tutor Feedback</h4>
                      <p className="text-sm text-foreground/80 whitespace-pre-wrap leading-relaxed">{lesson.feedback}</p>
                    </div>
                  )}
                  {lesson.homework && (
                    <div>
                      <h4 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">
                        <PenTool className="inline w-3.5 h-3.5 mr-1" />
                        Homework
                      </h4>
                      <p className="text-sm text-foreground/80 whitespace-pre-wrap leading-relaxed">{lesson.homework}</p>
                    </div>
                  )}
                </div>
              </details>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main TutorReports Component ─────────────────────────────────────────────

export function TutorReports({ tutorName }) {
  const [lessons, setLessons] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [groupBy, setGroupBy] = useState("month"); // "month" | "student"
  const [studentMap, setStudentMap] = useState({});

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const [lessonData, scheduleData] = await Promise.all([
          dbService.getLessonsByTutorName(tutorName),
          dbService.getSchedulesByTutorName(tutorName),
        ]);

        // Build studentId -> studentName map from schedules
        const sMap = {};
        scheduleData.forEach((s) => {
          if (s.studentId && s.studentName) sMap[s.studentId] = s.studentName;
        });

        // Enrich lessons with studentName via studentId where possible
        const enriched = lessonData.map((l) => ({
          ...l,
          resolvedStudentName: sMap[l.studentId] || l.studentName || null,
        }));

        // Sort newest first
        enriched.sort((a, b) => parseDate(b.date) - parseDate(a.date));

        setLessons(enriched);
        setSchedules(scheduleData);
        setStudentMap(sMap);
      } catch (err) {
        console.error("TutorReports load error:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [tutorName]);

  // ── Group by Month ────────────────────────────────────────────────
  const byMonth = React.useMemo(() => {
    const map = new Map();
    lessons.forEach((l) => {
      const key = getMonthLabel(l.date);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(l);
    });
    return map;
  }, [lessons]);

  // ── Group by Student ──────────────────────────────────────────────
  const byStudent = React.useMemo(() => {
    const map = new Map();
    lessons.forEach((l) => {
      const key = l.resolvedStudentName || l.studentId || "Unknown Student";
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(l);
    });
    return map;
  }, [lessons]);

  const activeGroups = groupBy === "month" ? byMonth : byStudent;

  return (
    <div className="space-y-6 max-w-5xl mx-auto p-4 sm:p-6 text-foreground animate-in fade-in duration-500">
      {/* Header */}
      <header className="border-b border-border pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            My Lesson Reports
          </h1>
          <p className="mt-1 text-xs text-muted-foreground">
            {lessons.length} report{lessons.length !== 1 ? "s" : ""} · {tutorName}
          </p>
        </div>

        {/* Group-by segmented switcher */}
        <div className="inline-flex rounded-lg bg-zinc-100 p-0.5 border border-zinc-200/50 self-start sm:self-auto shadow-none">
          <button
            onClick={() => setGroupBy("month")}
            className={cn(
              "flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-xs font-semibold tracking-tight transition-all focus:outline-none",
              groupBy === "month"
                ? "bg-white text-primary shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Calendar className="w-3.5 h-3.5" />
            By Month
          </button>
          <button
            onClick={() => setGroupBy("student")}
            className={cn(
              "flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-xs font-semibold tracking-tight transition-all focus:outline-none",
              groupBy === "student"
                ? "bg-white text-primary shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Users className="w-3.5 h-3.5" />
            By Student
          </button>
        </div>
      </header>

      {/* Body */}
      {loading ? (
        <div className="flex h-48 items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary" />
        </div>
      ) : lessons.length === 0 ? (
        <div className="p-12 text-center border border-border rounded-md bg-white shadow-sm">
          <FileText className="mx-auto h-8 w-8 text-muted-foreground/60 mb-3" />
          <h3 className="text-sm font-semibold text-foreground">No lesson reports found</h3>
          <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto">
            Lesson reports you submit will appear here, grouped by month or by student.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {Array.from(activeGroups.entries()).map(([groupKey, groupLessons]) => (
            <section key={groupKey}>
              {/* Group label */}
              <div className="flex items-center gap-3 mb-3">
                {groupBy === "month" ? (
                  <Calendar className="w-4 h-4 text-primary" />
                ) : (
                  <User className="w-4 h-4 text-primary" />
                )}
                <h2 className="text-sm font-bold text-foreground tracking-tight">
                  {groupKey}
                </h2>
                <span className="text-xs text-muted-foreground font-medium bg-zinc-100 border border-border rounded-full px-2 py-0.5">
                  {groupLessons.length} session{groupLessons.length !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Cards */}
              <div className="space-y-3">
                {groupLessons.map((lesson) => (
                  <LessonReportCard
                    key={lesson.id}
                    lesson={lesson}
                    studentName={
                      groupBy === "month"
                        ? lesson.resolvedStudentName
                        : null // already grouped by student
                    }
                    schedules={schedules}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
