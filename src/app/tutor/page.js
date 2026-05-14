"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db } from "@/lib/data";
import { Dashboard } from "../page";
import { computeOverallGrade, computePhaseProgress } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { BookOpen, Calendar, LayoutDashboard, ChevronRight } from "lucide-react";
import { AppShell } from "@/components/AppShell";

const petraPurple = "var(--primary)";
const petraGold = "oklch(0.85 0.12 90)";
const softGold = "oklch(0.97 0.01 270)";

function clampPercent(value) {
  if (Number.isNaN(Number(value))) return 0;
  return Math.max(0, Math.min(100, Number(value)));
}

function MiniIcon({ children, dark = false }) {
  return (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-sm font-bold border border-border shadow-sm"
      style={{
        backgroundColor: dark ? "var(--primary)" : softGold,
        color: dark ? "var(--primary-foreground)" : "var(--primary)",
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

function SectionCard({ children, className = "", style = {} }) {
  return (
    <Card className={`rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow bg-white ${className}`} style={style}>
      <CardContent className="p-6">{children}</CardContent>
    </Card>
  );
}

function StatusBadge({ status }) {
  let mappedStatus = "Stable";
  let bgClass = "bg-primary/10 text-primary border-primary/20";
 
  if (status && (status.includes("C") || status.includes("D"))) {
    mappedStatus = "Priority";
    bgClass = "bg-destructive/10 text-destructive border-destructive/20";
  }
 
  return (
    <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${bgClass}`}>
      {mappedStatus}
    </span>
  );
}

function StudentCard({ student, onClick }) {
  const currentPhase = student.phases && student.phases.length > 0 ? student.phases[0] : null;

  return (
    <SectionCard className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/40 active:scale-[0.99] group overflow-hidden relative border-border/60" onClick={onClick}>
      <div onClick={onClick} className="relative z-10">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <h3 className="text-xl font-bold text-foreground">{student.name}</h3>
                <StatusBadge status={computeOverallGrade(student)} />
              </div>
              <p className="text-sm text-muted-foreground">{student.course}</p>
            </div>
            {currentPhase && (
                <div className="text-right">
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Current phase</p>
                <p className="font-bold text-primary">{currentPhase.title}</p>
                </div>
            )}
          </div>
 
          {currentPhase && (
          <div className="mb-5 rounded-xl p-4 border border-primary/20 bg-primary/5">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground/80">{currentPhase.label}</p>
              <p className="text-sm font-bold text-primary">{computePhaseProgress(currentPhase)}%</p>
            </div>
            <ProgressBar value={computePhaseProgress(currentPhase)} gold />
          </div>
          )}
 
          <div className="grid gap-3 text-sm md:grid-cols-2">
            <div className="rounded-xl bg-zinc-50 border border-border p-4">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Main issue</p>
              <p className="text-foreground/80 line-clamp-2 leading-relaxed">{student.coreIssue}</p>
            </div>
            <div className="rounded-xl bg-zinc-50 border border-border p-4">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Target</p>
              <p className="text-foreground/80 line-clamp-2 leading-relaxed">{student.target}</p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center border-t border-border pt-4 transition-all group-hover:bg-primary group-hover:text-primary-foreground -mx-5 -mb-5 py-3 font-bold text-[10px] uppercase tracking-[0.2em]">
            View Full Diagnostic Dashboard
          </div>
      </div>
    </SectionCard>
  );
}

export default function PetraTutorDashboard() {
  const [tutor, setTutor] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const savedTutorId = localStorage.getItem("petra_tutor_id");
    if (savedTutorId) {
      const found = db.tutors.find(t => t.id === savedTutorId);
      if (found) {
          setTutor(found);
      } else {
          router.push("/");
      }
    } else {
        router.push("/");
    }
    setIsLoaded(true);
  }, [router]);

  const handleLogout = () => {
    setTutor(null);
    localStorage.removeItem("petra_tutor_id");
    router.push("/");
  };

  if (!isLoaded || !tutor) return <div className="min-h-screen bg-background" />;

  const assignedStudentsData = tutor.assignedStudents.map(id => db.students[id]).filter(Boolean);

  const navItems = [
    { label: "Dashboard", href: "/tutor", icon: LayoutDashboard },
    { label: "Resource Library", href: "/tutor/library", icon: BookOpen },
    { label: "Schedule", href: "#", icon: Calendar },
  ];

  const dashboardContent = selectedStudent ? (
    <div className="relative min-h-screen bg-background pt-20">
        <div className="absolute top-6 left-6 z-50">
            <Button variant="outline" className="rounded-xl bg-white shadow-xl font-bold border-border text-foreground hover:bg-zinc-50" onClick={() => setSelectedStudent(null)}>
                ← Back to My Students
            </Button>
        </div>
        <Dashboard student={selectedStudent} parentName={db.parents.find(p => p.studentId === selectedStudent.id)?.name || "Parent"} lang="en" onLogout={() => {}} />
    </div>
  ) : (
    <div className="p-6 text-foreground animate-in fade-in duration-500 max-w-7xl mx-auto space-y-6">
        <header>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              My Students
            </h1>
            <p className="mt-1 text-muted-foreground font-medium">Welcome back, {tutor.name}</p>
        </header>

        {tutor.nextLesson && tutor.nextLesson.studentId && (
            <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 flex flex-col md:flex-row items-center justify-between gap-4 animate-in slide-in-from-top-4 shadow-sm relative overflow-hidden group">
                <div className="flex items-center gap-4 relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                        <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Next Lesson</p>
                        <p className="text-xl font-bold text-foreground mt-1">
                            {db.students[tutor.nextLesson.studentId]?.name} <span className="font-medium opacity-50 ml-2">@ {tutor.nextLesson.time}</span>
                        </p>
                    </div>
                </div>
                <div className="md:text-right w-full md:w-auto relative z-10">
                    <p className="text-xs text-muted-foreground bg-zinc-50 py-2 px-4 rounded-lg font-medium border border-border inline-block shadow-sm">
                        Please check your email and Google Calendar for the meeting link.
                    </p>
                </div>
            </div>
        )}

        <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <SectionCard>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Assigned students</p>
            <p className="mt-2 text-3xl font-bold text-primary">{assignedStudentsData.length}</p>
          </SectionCard>
        </section>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="rounded-xl border border-border shadow-sm overflow-hidden relative bg-white">
            <CardContent className="p-6 text-foreground relative z-10">
              <div className="mb-4 flex items-center gap-2">
                <MiniIcon dark>◎</MiniIcon>
                <h2 className="text-xl font-bold">Today’s Focus</h2>
              </div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-5">What the tutor should know today</p>
              <div className="mt-5 space-y-3">
                {tutor.todayAgenda && tutor.todayAgenda.map((item) => (
                  <div key={item} className="rounded-xl border border-border bg-zinc-50 p-4 text-sm text-foreground/80 leading-relaxed shadow-sm">
                    {item}
                  </div>
                ))}
                {(!tutor.todayAgenda || tutor.todayAgenda.length === 0) && (
                    <div className="text-muted-foreground text-sm py-4 italic">No agenda items for today.</div>
                )}
              </div>
            </CardContent>
          </Card>

          <SectionCard className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-2">
              <MiniIcon>▦</MiniIcon>
              <h2 className="text-xl font-bold">Student Overview</h2>
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-zinc-50 text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border">
                  <tr>
                    <th className="p-4 font-bold">Student</th>
                    <th className="p-4 font-bold">Program</th>
                    <th className="p-4 font-bold">Status</th>
                    <th className="p-4 font-bold text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {assignedStudentsData.map((student) => (
                    <tr key={student.name} className="border-t border-border cursor-pointer hover:bg-zinc-50 transition-colors group" onClick={() => setSelectedStudent(student)}>
                      <td className="p-4 font-bold text-foreground">{student.name}</td>
                      <td className="p-4 text-muted-foreground font-medium">{student.course}</td>
                      <td className="p-4"><StatusBadge status={computeOverallGrade(student)} /></td>
                      <td className="p-4 text-right">
                        <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          Open <ChevronRight className="w-3 h-3" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        </div>

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {assignedStudentsData.map((student) => (
            <StudentCard key={student.name} student={student} onClick={() => setSelectedStudent(student)} />
          ))}
        </section>
    </div>
  );

  return (
    <AppShell 
      navItems={navItems} 
      user={{ name: tutor.name, role: tutor.role }} 
      onLogout={handleLogout}
    >
      {dashboardContent}
    </AppShell>
  );
}
