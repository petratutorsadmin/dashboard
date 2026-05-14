"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db } from "@/lib/data";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { LayoutDashboard, Users, Settings } from "lucide-react";

const petraPurple = "var(--primary)";
const petraGold = "oklch(0.85 0.12 90)";
const softGold = "oklch(0.97 0.01 270)";

function SectionCard({ children, className = "", style = {} }) {
  return (
    <Card className={`rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow bg-white ${className}`} style={style}>
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
        <SectionCard className="group relative overflow-hidden transition-all hover:border-primary/40">
            <div className="mb-4 flex items-start justify-between relative z-10">
                <div>
                    <h2 className="text-xl font-bold text-foreground">{tutor.name}</h2>
                    <p className="text-sm text-muted-foreground font-medium">{tutor.role}</p>
                </div>
            </div>
            
            <div className="space-y-2 mb-6 relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Access Control</p>
                {allStudents.map(student => {
                    const isAssigned = tutor.assignedStudents.includes(student.id);
                    return (
                        <div key={student.id} className="flex items-center justify-between p-3 rounded-xl border border-border bg-zinc-50 shadow-sm transition-all hover:bg-zinc-100">
                            <div>
                                <p className="font-bold text-sm text-foreground">{student.name}</p>
                                <p className="text-xs text-muted-foreground font-medium">{student.course}</p>
                            </div>
                            <Button 
                                variant={isAssigned ? "default" : "outline"}
                                className={`rounded-lg h-8 text-[10px] font-black uppercase tracking-widest transition-all ${isAssigned ? 'bg-primary text-primary-foreground border-transparent' : 'bg-white border-border text-muted-foreground shadow-sm'}`}
                                onClick={() => toggleStudentForTutor(tutor.id, student.id)}
                            >
                                {isAssigned ? "Assigned" : "Assign"}
                            </Button>
                        </div>
                    );
                })}
            </div>

            <div className="pt-6 border-t border-border relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Schedule Next Lesson</p>
                <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                            <Label className="text-[10px] uppercase font-bold text-muted-foreground">Student</Label>
                            <select 
                                className="w-full h-9 rounded-lg border border-border bg-zinc-50 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 text-foreground"
                                value={scheduleStudentId}
                                onChange={e => setScheduleStudentId(e.target.value)}
                            >
                                <option value="" disabled className="bg-background">Select...</option>
                                {tutor.assignedStudents.map(id => {
                                    const st = db.students[id];
                                    return <option key={id} value={id} className="bg-background">{st?.name}</option>;
                                })}
                            </select>
                        </div>
                        <div className="space-y-1">
                            <Label className="text-[10px] uppercase font-bold text-muted-foreground">Time</Label>
                            <Input 
                                className="h-9 rounded-lg text-sm bg-zinc-50 border-border focus:ring-1 focus:ring-primary/50 text-foreground" 
                                placeholder="Today 6:00 PM" 
                                value={scheduleTime}
                                onChange={e => setScheduleTime(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button 
                        onClick={handleSchedule}
                        className="w-full h-9 rounded-lg font-bold text-[10px] uppercase tracking-widest shadow-md bg-primary text-primary-foreground border border-transparent hover:bg-primary/90" 
                    >
                        Save Next Lesson
                    </Button>
                </div>
                {tutor.nextLesson && (
                    <div className="mt-3 rounded-lg bg-zinc-50 p-3 text-center border border-border shadow-sm">
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Currently Scheduled</p>
                        <p className="text-sm font-bold mt-1 text-primary">
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

  if (!isLoaded || !admin) return <div className="min-h-screen bg-background" />;

  const allStudents = Object.values(db.students);

  const navItems = [
    { label: "Admin Panel", href: "/admin", icon: Users },
    { label: "System Settings", href: "#", icon: Settings },
  ];

  const adminContent = (
    <div className="p-6 text-foreground animate-in fade-in duration-500 max-w-7xl mx-auto space-y-6">
        <header>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Tutor Access Control
            </h1>
            <p className="mt-1 text-muted-foreground font-medium">Manage which students are assigned to each tutor</p>
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
  );

  return (
    <AppShell 
      navItems={navItems} 
      user={{ name: admin.name, role: "Administrator" }} 
      onLogout={handleLogout}
    >
      {adminContent}
    </AppShell>
  );
}
