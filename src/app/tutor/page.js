"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db } from "@/lib/data";
import { Dashboard } from "../page";
import { useRouter } from "next/navigation";

const petraPurple = "#31063d";
const petraGold = "#ddb873";
const softGold = "#f7f1df";

function clampPercent(value) {
  if (Number.isNaN(Number(value))) return 0;
  return Math.max(0, Math.min(100, Number(value)));
}

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

function SectionCard({ children, className = "", style = {} }) {
  return (
    <Card className={`rounded-3xl border-0 shadow-sm ${className}`} style={style}>
      <CardContent className="p-6">{children}</CardContent>
    </Card>
  );
}

function StatusBadge({ status }) {
  // Use overallGrade or create a heuristic for status
  let mappedStatus = "Stable";
  let bgClass = "bg-emerald-100 text-emerald-800 border-emerald-200";

  if (status && (status.includes("C") || status.includes("D"))) {
    mappedStatus = "Priority";
    bgClass = "bg-amber-100 text-amber-800 border-amber-200";
  }

  return (
    <span className={`rounded-full border px-2.5 py-1 text-xs font-bold ${bgClass}`}>
      {mappedStatus}
    </span>
  );
}

function StudentCard({ student, onClick }) {
  const currentPhase = student.phases && student.phases.length > 0 ? student.phases[0] : null;

  return (
    <SectionCard className="cursor-pointer hover:ring-2 hover:ring-[#ddb873] transition-all">
      <div onClick={onClick}>
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <h3 className="text-xl font-bold">{student.name}</h3>
                <StatusBadge status={student.overallGrade} />
              </div>
              <p className="text-sm text-zinc-500">{student.course}</p>
            </div>
            {currentPhase && (
                <div className="text-right">
                <p className="text-xs text-zinc-400">Current phase</p>
                <p className="font-bold" style={{ color: petraPurple }}>{currentPhase.title}</p>
                </div>
            )}
          </div>

          {currentPhase && (
          <div className="mb-5 rounded-2xl p-4" style={{ backgroundColor: softGold }}>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-bold">{currentPhase.label}</p>
              <p className="text-sm font-bold" style={{ color: petraPurple }}>{currentPhase.progress}%</p>
            </div>
            <ProgressBar value={currentPhase.progress} gold />
          </div>
          )}

          <div className="grid gap-3 text-sm md:grid-cols-2">
            <div className="rounded-2xl bg-zinc-50 p-4">
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-zinc-400">Main issue</p>
              <p className="text-zinc-700">{student.coreIssue}</p>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-4">
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-zinc-400">Target</p>
              <p className="text-zinc-700">{student.target}</p>
            </div>
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

  if (!isLoaded || !tutor) return <div className="min-h-screen bg-[#faf8f4]" />;

  if (selectedStudent) {
    const parentName = db.parents.find(p => p.studentId === selectedStudent.id)?.name || "Parent";
    return (
        <div className="relative min-h-screen bg-[#faf8f4] pt-20">
            <div className="absolute top-6 left-6 z-50">
                <Button variant="outline" className="rounded-2xl bg-white shadow-sm font-bold border-zinc-200" onClick={() => setSelectedStudent(null)}>
                    ← Back to My Students
                </Button>
            </div>
            <Dashboard student={selectedStudent} parentName={parentName} lang="en" onLogout={() => {}} />
        </div>
    );
  }

  const assignedStudentsData = tutor.assignedStudents.map(id => db.students[id]).filter(Boolean);

  return (
    <div className="min-h-screen bg-[#faf8f4] p-6 text-zinc-900 animate-in fade-in duration-500">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl font-bold text-white" style={{ backgroundColor: petraPurple }}>
                T
              </div>
              <Badge className="rounded-full px-3 py-1" style={{ backgroundColor: petraGold, color: petraPurple }}>
                Tutor Dashboard
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight" style={{ color: petraPurple }}>
              My Students
            </h1>
            <p className="mt-1 text-zinc-600">{tutor.name}｜{tutor.role}</p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="rounded-2xl bg-white border-zinc-200" onClick={handleLogout}>Sign Out</Button>
          </div>
        </header>

        {tutor.nextLesson && tutor.nextLesson.studentId && (
            <div className="rounded-3xl bg-amber-50 border border-amber-100 p-6 flex flex-col md:flex-row items-center justify-between gap-4 animate-in slide-in-from-top-4 shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 font-bold text-xl shrink-0">
                        🗓
                    </div>
                    <div>
                        <p className="text-sm font-bold text-amber-800/80 uppercase tracking-wide">Next Lesson</p>
                        <p className="text-xl font-bold text-amber-900 mt-1">
                            {db.students[tutor.nextLesson.studentId]?.name} <span className="font-medium opacity-70 ml-2">@ {tutor.nextLesson.time}</span>
                        </p>
                    </div>
                </div>
                <div className="md:text-right w-full md:w-auto">
                    <p className="text-sm text-amber-800 bg-amber-100/50 py-2 px-4 rounded-xl font-semibold inline-block">
                        Please check your email and Google Calendar for the meeting link.
                    </p>
                </div>
            </div>
        )}

        <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <SectionCard>
            <p className="text-sm text-zinc-500">Assigned students</p>
            <p className="mt-2 text-3xl font-bold" style={{ color: petraPurple }}>{assignedStudentsData.length}</p>
          </SectionCard>
        </section>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="rounded-3xl border-0 shadow-sm" style={{ backgroundColor: petraPurple }}>
            <CardContent className="p-6 text-white">
              <div className="mb-4 flex items-center gap-2">
                <MiniIcon dark>◎</MiniIcon>
                <h2 className="text-xl font-bold">Today’s Focus</h2>
              </div>
              <p className="text-sm text-white/70">What the tutor should know before teaching today.</p>
              <div className="mt-5 space-y-3">
                {tutor.todayAgenda && tutor.todayAgenda.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm">
                    {item}
                  </div>
                ))}
                {(!tutor.todayAgenda || tutor.todayAgenda.length === 0) && (
                    <div className="text-white/50 text-sm">No agenda items for today.</div>
                )}
              </div>
            </CardContent>
          </Card>

          <SectionCard className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-2">
              <MiniIcon>▦</MiniIcon>
              <h2 className="text-xl font-bold">Student Overview</h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-100">
              <table className="w-full text-left text-sm">
                <thead className="bg-zinc-50 text-xs uppercase tracking-wide text-zinc-400">
                  <tr>
                    <th className="p-4">Student</th>
                    <th className="p-4">Program</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {assignedStudentsData.map((student) => (
                    <tr key={student.name} className="border-t border-zinc-100 cursor-pointer hover:bg-zinc-50 transition-colors" onClick={() => setSelectedStudent(student)}>
                      <td className="p-4 font-bold">{student.name}</td>
                      <td className="p-4 text-zinc-600">{student.course}</td>
                      <td className="p-4"><StatusBadge status={student.overallGrade} /></td>
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
    </div>
  );
}
