"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db } from "@/lib/data";
import { useRouter } from "next/navigation";

const petraPurple = "#31063d";
const petraGold = "#ddb873";
const softGold = "#f7f1df";

function SectionCard({ children, className = "", style = {} }) {
  return (
    <Card className={`rounded-3xl border-0 shadow-sm ${className}`} style={style}>
      <CardContent className="p-6">{children}</CardContent>
    </Card>
  );
}

function TutorCard({ tutor, allStudents, toggleStudentForTutor }) {
    const [scheduleStudentId, setScheduleStudentId] = useState(tutor.nextLesson?.studentId || (tutor.assignedStudents[0] || ""));
    const [scheduleTime, setScheduleTime] = useState(tutor.nextLesson?.time || "");
    const [refresh, setRefresh] = useState(0);

    const handleSchedule = () => {
        if (!scheduleStudentId || !scheduleTime) return;
        tutor.nextLesson = { studentId: scheduleStudentId, time: scheduleTime };
        setRefresh(r => r + 1);
        // Alert is okay for admin prototype
        alert("Next lesson scheduled successfully.");
    };

    return (
        <SectionCard>
            <div className="mb-4 flex items-start justify-between">
                <div>
                    <h2 className="text-xl font-bold text-zinc-900">{tutor.name}</h2>
                    <p className="text-sm text-zinc-500">{tutor.role}</p>
                </div>
            </div>
            
            <div className="space-y-2 mb-6">
                <p className="text-xs font-bold uppercase tracking-wide text-zinc-400 mb-2">Access Control</p>
                {allStudents.map(student => {
                    const isAssigned = tutor.assignedStudents.includes(student.id);
                    return (
                        <div key={student.id} className="flex items-center justify-between p-3 rounded-xl border border-zinc-100 bg-zinc-50">
                            <div>
                                <p className="font-bold text-sm text-zinc-900">{student.name}</p>
                                <p className="text-xs text-zinc-500">{student.course}</p>
                            </div>
                            <Button 
                                variant={isAssigned ? "default" : "outline"}
                                className={`rounded-full h-8 text-xs font-bold transition-all ${isAssigned ? '' : 'bg-white'}`}
                                style={isAssigned ? { backgroundColor: petraPurple } : {}}
                                onClick={() => toggleStudentForTutor(tutor.id, student.id)}
                            >
                                {isAssigned ? "Assigned" : "Assign"}
                            </Button>
                        </div>
                    );
                })}
            </div>

            <div className="pt-6 border-t border-zinc-100">
                <p className="text-xs font-bold uppercase tracking-wide text-zinc-400 mb-3">Schedule Next Lesson</p>
                <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                            <Label className="text-xs">Student</Label>
                            <select 
                                className="w-full h-9 rounded-xl border border-zinc-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ddb873]"
                                value={scheduleStudentId}
                                onChange={e => setScheduleStudentId(e.target.value)}
                            >
                                <option value="" disabled>Select...</option>
                                {tutor.assignedStudents.map(id => {
                                    const st = db.students[id];
                                    return <option key={id} value={id}>{st?.name}</option>;
                                })}
                            </select>
                        </div>
                        <div className="space-y-1">
                            <Label className="text-xs">Time</Label>
                            <Input 
                                className="h-9 rounded-xl text-sm" 
                                placeholder="Today 6:00 PM" 
                                value={scheduleTime}
                                onChange={e => setScheduleTime(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button 
                        onClick={handleSchedule}
                        className="w-full h-9 rounded-xl font-bold text-xs shadow-sm" 
                        style={{ backgroundColor: petraPurple }}
                    >
                        Save Next Lesson
                    </Button>
                </div>
                {tutor.nextLesson && (
                    <div className="mt-3 rounded-xl bg-zinc-50 p-3 text-center border border-zinc-100">
                        <p className="text-xs text-zinc-500">Currently Scheduled</p>
                        <p className="text-sm font-bold mt-0.5" style={{ color: petraPurple }}>
                            {db.students[tutor.nextLesson.studentId]?.name} @ {tutor.nextLesson.time}
                        </p>
                    </div>
                )}
            </div>
        </SectionCard>
    );
}

export default function PetraAdminDashboard() {
  const [admin, setAdmin] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const savedAdminId = localStorage.getItem("petra_admin_id");
    if (savedAdminId) {
      const found = db.admins.find(a => a.id === savedAdminId);
      if (found) {
          setAdmin(found);
      } else {
          router.push("/");
      }
    } else {
        router.push("/");
    }
    setIsLoaded(true);
  }, [router]);

  const handleLogout = () => {
    setAdmin(null);
    localStorage.removeItem("petra_admin_id");
    router.push("/");
  };

  const toggleStudentForTutor = (tutorId, studentId) => {
    const tutor = db.tutors.find(t => t.id === tutorId);
    if (!tutor) return;
    
    if (tutor.assignedStudents.includes(studentId)) {
        tutor.assignedStudents = tutor.assignedStudents.filter(id => id !== studentId);
    } else {
        tutor.assignedStudents.push(studentId);
    }
    setRefresh(r => r + 1);
  };

  if (!isLoaded || !admin) return <div className="min-h-screen bg-[#faf8f4]" />;

  const allStudents = Object.values(db.students);

  return (
    <div className="min-h-screen bg-[#faf8f4] p-6 text-zinc-900 animate-in fade-in duration-500">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl font-bold text-white" style={{ backgroundColor: petraPurple }}>
                A
              </div>
              <Badge className="rounded-full px-3 py-1" style={{ backgroundColor: petraGold, color: petraPurple }}>
                Admin Dashboard
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight" style={{ color: petraPurple }}>
              Tutor Access Control
            </h1>
            <p className="mt-1 text-zinc-600">Manage which students are assigned to each tutor</p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="rounded-2xl bg-white border-zinc-200" onClick={handleLogout}>Sign Out</Button>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {db.tutors.map(tutor => (
                <TutorCard 
                    key={tutor.id} 
                    tutor={tutor} 
                    allStudents={allStudents} 
                    toggleStudentForTutor={toggleStudentForTutor} 
                />
            ))}
        </div>
      </div>
    </div>
  );
}
