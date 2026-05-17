"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db } from "@/lib/data";
import { dbService } from "@/lib/db";
import { Dashboard } from "../page";
import { ScheduleView } from "@/components/ScheduleView";
import { computeOverallGrade, computePhaseProgress } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { BookOpen, Calendar, LayoutDashboard, ChevronRight } from "lucide-react";
import { AppShell } from "@/components/AppShell";

const petraPurple = "var(--primary)";
const petraGold = "oklch(0.85 0.12 90)";

function clampPercent(value) {
  if (Number.isNaN(Number(value))) return 0;
  return Math.max(0, Math.min(100, Number(value)));
}

function MiniIcon({ children, dark = false }) {
  return (
    <span
      className={`inline-flex h-6 w-6 items-center justify-center rounded-md text-xs font-semibold border border-border ${
        dark ? "bg-primary/5 text-primary border-primary/10 font-bold" : "bg-zinc-50 text-muted-foreground"
      }`}
    >
      {children}
    </span>
  );
}

function ProgressBar({ value, gold = false }) {
  const safeValue = clampPercent(value);
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-md bg-zinc-100 border border-zinc-200/50">
      <div
        className="h-full rounded-md transition-all duration-1000 ease-out"
        style={{ width: `${safeValue}%`, backgroundColor: gold ? "var(--primary)" : "var(--foreground)" }}
      />
    </div>
  );
}

function SectionCard({ children, className = "", style = {} }) {
  return (
    <Card className={`rounded-md border border-border shadow-sm bg-white ${className}`} style={style}>
      <CardContent className="p-5">{children}</CardContent>
    </Card>
  );
}

function StatusBadge({ status }) {
  let mappedStatus = "Stable";
  let bgClass = "bg-primary/5 text-primary border-primary/10";
 
  if (status && (status.includes("C") || status.includes("D"))) {
    mappedStatus = "Priority";
    bgClass = "bg-destructive/5 text-destructive border-destructive/10";
  }
 
  return (
    <span className={`rounded-sm border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${bgClass}`}>
      {mappedStatus}
    </span>
  );
}

function StudentCard({ student, onClick }) {
  const currentPhase = student.phases && student.phases.length > 0 ? student.phases[0] : null;

  return (
    <Card className="rounded-md border border-border bg-white shadow-sm hover:border-primary/30 transition-all cursor-pointer group flex flex-col justify-between overflow-hidden" onClick={onClick}>
      <CardContent className="p-5 flex-1 pb-4">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">{student.name}</h3>
              <StatusBadge status={computeOverallGrade(student)} />
            </div>
            <p className="text-xs text-muted-foreground">{student.course}</p>
          </div>
          {currentPhase && (
            <div className="text-right">
              <p className="text-[9px] uppercase font-bold text-muted-foreground tracking-wider">Current phase</p>
              <p className="font-semibold text-xs text-primary">{currentPhase.title}</p>
            </div>
          )}
        </div>

        {currentPhase && (
          <div className="mb-4 rounded-md p-3.5 border border-primary/10 bg-primary/5">
            <div className="mb-1.5 flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-wider text-foreground/80">{currentPhase.label}</p>
              <p className="text-xs font-semibold text-primary">{computePhaseProgress(currentPhase)}%</p>
            </div>
            <ProgressBar value={computePhaseProgress(currentPhase)} gold />
          </div>
        )}

        <div className="grid gap-3 text-xs md:grid-cols-2">
          <div className="rounded-md bg-zinc-50/50 border border-border/80 p-3.5">
            <p className="mb-1 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Main issue</p>
            <p className="text-foreground/80 leading-relaxed text-xs">{student.coreIssue}</p>
          </div>
          <div className="rounded-md bg-zinc-50/50 border border-border/80 p-3.5">
            <p className="mb-1 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Target</p>
            <p className="text-foreground/80 leading-relaxed text-xs">{student.target}</p>
          </div>
        </div>
      </CardContent>

      <div className="border-t border-border bg-zinc-50/50 group-hover:bg-primary/5 group-hover:text-primary transition-all text-center py-2.5 font-bold text-[9px] uppercase tracking-widest text-muted-foreground">
        View Full Diagnostic Dashboard
      </div>
    </Card>
  );
}

export default function PetraTutorDashboard() {
  const [tutor, setTutor] = useState(null);
  const [assignedStudents, setAssignedStudents] = useState([]);
  const [parentName, setParentName] = useState("Parent");
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [currentView, setCurrentView] = useState("dashboard");
  const router = useRouter();

  useEffect(() => {
    async function loadData() {
      const savedTutorId = localStorage.getItem("petra_tutor_id");
      if (savedTutorId) {
        const found = await dbService.getTutorById(savedTutorId);
        if (found) {
          setTutor(found);
          
          // Gather both explicitly assigned student IDs AND student IDs from any lessons they have taught
          let studentIds = [...(found.assignedStudents || [])];
          
          try {
            const tutorLessons = await dbService.getLessonsByTutorName(found.name);
            if (tutorLessons && tutorLessons.length > 0) {
              tutorLessons.forEach(l => {
                if (l.studentId && !studentIds.includes(l.studentId)) {
                  studentIds.push(l.studentId);
                }
              });
            }
          } catch (e) {
            console.error("Error gathering dynamic student IDs for tutor:", e);
          }

          if (studentIds.length > 0) {
            const studentProfiles = await Promise.all(
              studentIds.map(id => dbService.getStudentById(id))
            );
            setAssignedStudents(studentProfiles.filter(Boolean));
          } else {
            setAssignedStudents([]);
          }
        } else {
          router.push("/");
        }
      } else {
        router.push("/");
      }
      setIsLoaded(true);
    }
    loadData();
  }, [router]);

  useEffect(() => {
    async function loadParent() {
      if (selectedStudent) {
        const p = await dbService.getParentByStudentId(selectedStudent.id);
        setParentName(p?.name || "Parent");
      } else {
        setParentName("Parent");
      }
    }
    loadParent();
  }, [selectedStudent]);

  const handleLogout = () => {
    setTutor(null);
    localStorage.removeItem("petra_tutor_id");
    router.push("/");
  };

  if (!isLoaded || !tutor) return <div className="min-h-screen bg-background" />;

  const assignedStudentsData = assignedStudents;

  const navItems = selectedStudent ? [
    { label: "← Back to Students", onClick: () => { setSelectedStudent(null); setCurrentView("dashboard"); } },
    { label: "Dashboard", onClick: () => setCurrentView("dashboard"), isActive: currentView === "dashboard", icon: LayoutDashboard },
    { label: "Learning Records", onClick: () => setCurrentView("records"), isActive: currentView === "records", icon: BookOpen },
  ] : [
    { label: "Dashboard", onClick: () => { setSelectedStudent(null); setCurrentView("dashboard"); }, isActive: currentView === "dashboard", icon: LayoutDashboard },
    { label: "Resource Library", href: "/tutor/library", icon: BookOpen },
    { label: "Schedule", onClick: () => { setSelectedStudent(null); setCurrentView("schedule"); }, isActive: currentView === "schedule", icon: Calendar },
  ];

  const dashboardContent = selectedStudent ? (
    <div className="relative min-h-screen bg-background pt-20">
        <div className="absolute top-6 left-6 z-50">
            <Button variant="outline" className="rounded-md bg-white shadow-none font-bold border-border text-foreground hover:bg-zinc-50 h-9 px-4 text-xs" onClick={() => { setSelectedStudent(null); setCurrentView("dashboard"); }}>
                ← Back to My Students
            </Button>
        </div>
        <Dashboard student={selectedStudent} parentName={parentName} lang="en" onLogout={() => {}} view={currentView} />
    </div>
  ) : currentView === "schedule" ? (
    <div className="p-6">
      <ScheduleView tutorName={tutor.name} lang="en" />
    </div>
  ) : (
    <div className="p-6 text-foreground animate-in fade-in duration-500 max-w-7xl mx-auto space-y-6">
        <header>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              My Students
            </h1>
            <p className="mt-1 text-muted-foreground text-xs">Welcome back, {tutor.name}</p>
        </header>

        {tutor.nextLesson && tutor.nextLesson.studentId && (
            <div className="rounded-md bg-primary/5 border border-primary/10 p-5 flex flex-col md:flex-row items-center justify-between gap-4 animate-in slide-in-from-top-4 shadow-none relative overflow-hidden group">
                <div className="flex items-center gap-3.5 relative z-10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary border border-primary/20 shrink-0">
                        <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-[9px] font-bold text-primary uppercase tracking-widest">Next Lesson</p>
                        <p className="text-base font-semibold text-foreground mt-0.5">
                            {assignedStudents.find(s => s.id === tutor.nextLesson.studentId)?.name || "Student"} <span className="font-normal text-muted-foreground ml-1.5 text-xs">@ {tutor.nextLesson.time}</span>
                        </p>
                    </div>
                </div>
                <div className="md:text-right w-full md:w-auto relative z-10">
                    <p className="text-xs text-muted-foreground bg-white/80 backdrop-blur-sm py-1.5 px-3 rounded-md font-medium border border-border inline-block shadow-none">
                        Please check your email and Google Calendar for the meeting link.
                    </p>
                </div>
            </div>
        )}

        <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <SectionCard>
            <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Assigned students</p>
            <p className="mt-2 text-2xl font-bold text-primary">{assignedStudentsData.length}</p>
          </SectionCard>
        </section>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="rounded-md border border-border shadow-sm overflow-hidden relative bg-white">
            <CardContent className="p-5 text-foreground relative z-10">
              <div className="mb-4 flex items-center gap-2">
                <MiniIcon dark>◎</MiniIcon>
                <h2 className="text-base font-semibold text-foreground">Today’s Focus</h2>
              </div>
              <p className="text-[9px] text-muted-foreground font-semibold uppercase tracking-wider mb-4">What the tutor should know today</p>
              <div className="space-y-2.5">
                {tutor.todayAgenda && tutor.todayAgenda.map((item) => (
                  <div key={item} className="rounded-md border border-border bg-zinc-50/50 p-3 text-xs text-foreground/80 leading-relaxed shadow-none">
                    {item}
                  </div>
                ))}
                {(!tutor.todayAgenda || tutor.todayAgenda.length === 0) && (
                    <div className="text-muted-foreground text-xs py-4 italic">No agenda items for today.</div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-md border border-border shadow-sm bg-white lg:col-span-2">
            <CardContent className="p-5">
              <div className="mb-4 flex items-center gap-2">
                <MiniIcon>▦</MiniIcon>
                <h2 className="text-base font-semibold text-foreground">Student Overview</h2>
              </div>
              <div className="overflow-hidden rounded-md border border-border bg-white shadow-none">
                <table className="w-full text-left text-xs">
                  <thead className="bg-zinc-50 text-[9px] uppercase tracking-widest text-muted-foreground border-b border-border">
                    <tr>
                      <th className="p-3 font-semibold">Student</th>
                      <th className="p-3 font-semibold">Program</th>
                      <th className="p-3 font-semibold">Status</th>
                      <th className="p-3 font-semibold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assignedStudentsData.map((student) => (
                      <tr key={student.name} className="border-t border-border cursor-pointer hover:bg-zinc-50/50 transition-colors group" onClick={() => setSelectedStudent(student)}>
                        <td className="p-3 font-semibold text-foreground">{student.name}</td>
                        <td className="p-3 text-muted-foreground">{student.course}</td>
                        <td className="p-3"><StatusBadge status={computeOverallGrade(student)} /></td>
                        <td className="p-3 text-right">
                          <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            Open <ChevronRight className="w-3 h-3" />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
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
