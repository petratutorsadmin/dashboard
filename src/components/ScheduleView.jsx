"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, DollarSign, User, Award, CheckCircle2 } from "lucide-react";
import { dbService } from "@/lib/db";

const text = {
  en: {
    title: "Lesson Schedule",
    upcoming: "Upcoming Schedules",
    past: "Past Schedules",
    duration: "Duration",
    payment: "Payment",
    status: "Status",
    student: "Student",
    tutor: "Tutor",
    noSchedules: "No schedule records found.",
    payout: "Payout",
    billed: "Billed",
    margin: "Net Margin",
    completed: "Completed",
    scheduled: "Scheduled",
    paid: "Paid",
    unpaid: "Unpaid",
  },
  ja: {
    title: "受講スケジュール",
    upcoming: "今後のスケジュール",
    past: "過去の履歴",
    duration: "受講時間",
    payment: "お支払い",
    status: "ステータス",
    student: "生徒",
    tutor: "講師",
    noSchedules: "スケジュール履歴が見つかりませんでした。",
    payout: "講師報酬",
    billed: "授業料",
    margin: "利益額",
    completed: "受講済み",
    scheduled: "予約済み",
    paid: "支払い済み",
    unpaid: "未払い",
  }
};

export function ScheduleView({ studentId = null, tutorName = null, lang = "en" }) {
  const [schedules, setSchedules] = useState([]);
  const [activeTab, setActiveTab] = useState("upcoming");
  const [loading, setLoading] = useState(true);
  const t = text[lang] || text.en;

  useEffect(() => {
    async function loadSchedules() {
      setLoading(true);
      try {
        let data = [];
        if (studentId) {
          data = await dbService.getSchedulesByStudentId(studentId);
        } else if (tutorName) {
          data = await dbService.getSchedulesByTutorName(tutorName);
        }
        
        // Sort schedules chronologically by date
        const sorted = data.sort((a, b) => {
          return new Date(a.dateTime) - new Date(b.dateTime);
        });
        
        setSchedules(sorted);
      } catch (err) {
        console.error("Error loading schedules in component:", err);
      } finally {
        setLoading(false);
      }
    }
    loadSchedules();
  }, [studentId, tutorName]);

  const formatDate = (dateStr) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString(lang === 'ja' ? 'ja-JP' : 'en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (e) {
      return dateStr;
    }
  };

  const formatTime = (dateStr) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleTimeString(lang === 'ja' ? 'ja-JP' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    } catch (e) {
      return "";
    }
  };

  const isFuture = (dateStr) => {
    try {
      return new Date(dateStr) >= new Date();
    } catch (e) {
      return true;
    }
  };

  const upcomingSchedules = schedules.filter(s => s.status === 'Scheduled' || isFuture(s.dateTime));
  const pastSchedules = schedules.filter(s => s.status === 'Completed' || (!isFuture(s.dateTime) && s.status !== 'Scheduled')).reverse(); // show latest first

  const activeSchedules = activeTab === "upcoming" ? upcomingSchedules : pastSchedules;

  return (
    <div className="space-y-6 max-w-6xl mx-auto p-4 sm:p-6 text-foreground animate-in fade-in duration-500">
      <header className="border-b border-border pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            {t.title}
          </h1>
          <p className="mt-1 text-xs text-muted-foreground">
            {studentId ? "View all lesson schedules" : "Manage your past and upcoming student sessions"}
          </p>
        </div>

        {/* Premium Segmented Switcher */}
        <div className="inline-flex rounded-lg bg-zinc-100 p-0.5 border border-zinc-200/50 self-start sm:self-auto shadow-none">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`rounded-md px-3.5 py-1.5 text-xs font-semibold tracking-tight transition-all focus:outline-none ${
              activeTab === "upcoming"
                ? "bg-white text-primary shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.upcoming} ({upcomingSchedules.length})
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`rounded-md px-3.5 py-1.5 text-xs font-semibold tracking-tight transition-all focus:outline-none ${
              activeTab === "past"
                ? "bg-white text-primary shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.past} ({pastSchedules.length})
          </button>
        </div>
      </header>

      {loading ? (
        <div className="flex h-48 items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary" />
        </div>
      ) : activeSchedules.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeSchedules.map((schedule) => {
            const isCompleted = schedule.status === 'Completed';
            const isScheduleUpcoming = schedule.status === 'Scheduled';

            return (
              <Card 
                key={schedule.id} 
                className={`rounded-md border border-border shadow-sm bg-white hover:border-primary/20 transition-all overflow-hidden flex flex-col justify-between`}
              >
                <CardContent className="p-5 flex-1 space-y-4">
                  {/* Card Header: Date & Time */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-2.5">
                      <div className="h-9 w-9 rounded-md bg-primary/5 flex items-center justify-center border border-primary/10 shrink-0">
                        <Calendar className="h-4.5 w-4.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground leading-snug">
                          {formatDate(schedule.dateTime)}
                        </p>
                        <p className="text-[11px] text-muted-foreground mt-0.5 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatTime(schedule.dateTime)} ({schedule.duration} min)
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <Badge 
                        variant="outline" 
                        className={`rounded-md text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 shadow-none border ${
                          isScheduleUpcoming 
                            ? "bg-primary/5 text-primary border-primary/20" 
                            : isCompleted 
                              ? "bg-emerald-500/5 text-emerald-600 border-emerald-500/20" 
                              : "bg-zinc-100 text-zinc-500 border-zinc-200"
                        }`}
                      >
                        {isScheduleUpcoming ? t.scheduled : isCompleted ? t.completed : schedule.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Card Body: Names */}
                  <div className="grid grid-cols-2 gap-4 py-2 border-t border-b border-zinc-100 text-xs">
                    <div>
                      <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{t.student}</p>
                      <p className="font-semibold text-foreground mt-0.5 flex items-center gap-1 truncate">
                        <User className="w-3 h-3 text-muted-foreground" />
                        {schedule.studentName}
                      </p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{t.tutor}</p>
                      <p className="font-semibold text-foreground mt-0.5 flex items-center gap-1 truncate">
                        <Award className="w-3 h-3 text-muted-foreground" />
                        {schedule.tutorName}
                      </p>
                    </div>
                  </div>

                  {/* Tutor view only financials - show ONLY payout, NO billing, NO margin! */}
                  {tutorName && (
                    <div className="grid grid-cols-1 pt-1.5 text-center animate-in fade-in duration-300">
                      <div className="rounded-md bg-zinc-50/50 border border-zinc-200/50 p-2.5">
                        <p className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">{t.payout}</p>
                        <p className="text-sm font-semibold text-foreground mt-0.5">{schedule.payoutAmount}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card className="rounded-md border border-border shadow-sm bg-white p-12 text-center">
          <Calendar className="mx-auto h-8 w-8 text-muted-foreground/60 mb-3" />
          <h3 className="text-sm font-semibold text-foreground leading-snug">{t.noSchedules}</h3>
          <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto">
            Any scheduled classes or past completed lessons will automatically populate here once registered in our database system.
          </p>
        </Card>
      )}
    </div>
  );
}
