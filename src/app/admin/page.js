"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { dbService } from "@/lib/db";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { LayoutDashboard, Users, Settings } from "lucide-react";

const petraPurple = "var(--primary)";
const petraGold = "oklch(0.85 0.12 90)";

function SectionCard({ children, className = "", style = {} }) {
  return (
    <Card className={`rounded-md border border-border shadow-sm bg-white ${className}`} style={style}>
      <CardContent className="p-5">{children}</CardContent>
    </Card>
  );
}

function TutorCard({ tutor, allStudents, toggleStudentForTutor, onScheduleSave }) {
    const [scheduleStudentId, setScheduleStudentId] = useState(tutor.nextLesson?.studentId || (tutor.assignedStudents[0] || ""));
    const [scheduleTime, setScheduleTime] = useState(tutor.nextLesson?.time || "");

    const handleSchedule = async () => {
        if (!scheduleStudentId || !scheduleTime) return;
        const success = await dbService.scheduleLesson(tutor.id, scheduleStudentId, scheduleTime);
        if (success) {
            alert("Next lesson scheduled successfully.");
            if (onScheduleSave) {
                await onScheduleSave();
            }
        }
    };

    return (
        <SectionCard className="group relative overflow-hidden">
            <div className="mb-4 flex items-start justify-between relative z-10">
                <div>
                    <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{tutor.name}</h2>
                    <p className="text-xs text-muted-foreground font-medium">{tutor.role}</p>
                </div>
            </div>
            
            <div className="space-y-2 mb-5 relative z-10">
                <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-2.5">Access Control</p>
                {allStudents.map(student => {
                    const isAssigned = tutor.assignedStudents.includes(student.id);
                    return (
                        <div key={student.id} className="flex items-center justify-between p-2.5 rounded-md border border-border bg-zinc-50/50 transition-all hover:bg-zinc-50">
                            <div>
                                <p className="font-semibold text-xs text-foreground">{student.name}</p>
                                <p className="text-[11px] text-muted-foreground">{student.course}</p>
                            </div>
                            <Button 
                                variant={isAssigned ? "default" : "outline"}
                                className={`rounded-md h-7 px-2.5 text-[9px] font-semibold uppercase tracking-wider transition-all shadow-none ${isAssigned ? 'bg-primary text-primary-foreground border-transparent hover:bg-primary/95' : 'bg-white border-border text-muted-foreground hover:bg-zinc-50'}`}
                                onClick={() => toggleStudentForTutor(tutor.id, student.id)}
                            >
                                {isAssigned ? "Assigned" : "Assign"}
                            </Button>
                        </div>
                    );
                })}
            </div>

            <div className="pt-4 border-t border-border relative z-10">
                <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Schedule Next Lesson</p>
                <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                            <Label className="text-[9px] uppercase font-bold text-muted-foreground">Student</Label>
                            <select 
                                className="w-full h-8.5 rounded-md border border-border bg-zinc-50/50 px-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary/20 text-foreground transition-all"
                                value={scheduleStudentId}
                                onChange={e => setScheduleStudentId(e.target.value)}
                            >
                                <option value="" disabled className="bg-background">Select...</option>
                                {tutor.assignedStudents.map(id => {
                                    const st = allStudents.find(s => s.id === id);
                                    return <option key={id} value={id} className="bg-background">{st?.name}</option>;
                                })}
                            </select>
                        </div>
                        <div className="space-y-1">
                            <Label className="text-[9px] uppercase font-bold text-muted-foreground">Time</Label>
                            <Input 
                                className="h-8.5 rounded-md text-xs bg-zinc-50/50 border-border focus:ring-1 focus:ring-primary/20 text-foreground transition-all placeholder:text-muted-foreground/60" 
                                placeholder="Today 6:00 PM" 
                                value={scheduleTime}
                                onChange={e => setScheduleTime(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button 
                        onClick={handleSchedule}
                        className="w-full h-8.5 rounded-md font-medium text-[9px] uppercase tracking-widest shadow-none bg-primary text-primary-foreground border border-transparent hover:bg-primary/95 transition-all" 
                    >
                        Save Next Lesson
                    </Button>
                </div>
                {tutor.nextLesson && (
                    <div className="mt-2.5 rounded-md bg-zinc-50/50 p-2.5 text-center border border-border shadow-none">
                        <p className="text-[9px] uppercase font-bold text-muted-foreground tracking-widest">Currently Scheduled</p>
                        <p className="text-xs font-semibold mt-0.5 text-primary">
                            {allStudents.find(s => s.id === tutor.nextLesson.studentId)?.name || "Student"} @ {tutor.nextLesson.time}
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
  const [tutors, setTutors] = useState([]);
  const [students, setStudents] = useState([]);
  const router = useRouter();

  const loadData = async () => {
    const allTutors = await dbService.getAllTutors();
    const allStudents = await dbService.getAllStudents();
    setTutors(allTutors);
    setStudents(allStudents);
  };

  useEffect(() => {
    async function init() {
      const savedAdminId = localStorage.getItem("petra_admin_id");
      if (savedAdminId) {
        const found = await dbService.getAdminById(savedAdminId);
        if (found) {
          setAdmin(found);
          await loadData();
        } else {
          router.push("/");
        }
      } else {
        router.push("/");
      }
      setIsLoaded(true);
    }
    init();
  }, [router]);

  const handleLogout = () => {
    setAdmin(null);
    localStorage.removeItem("petra_admin_id");
    router.push("/");
  };

  const toggleStudentForTutor = async (tutorId, studentId) => {
    const tutor = tutors.find(t => t.id === tutorId);
    if (!tutor) return;
    
    const isAssigned = tutor.assignedStudents.includes(studentId);
    const success = await dbService.assignStudentToTutor(tutorId, studentId, !isAssigned);
    if (success) {
      const updatedTutors = await dbService.getAllTutors();
      setTutors(updatedTutors);
    }
  };

  const handleScheduleSave = async () => {
    const updatedTutors = await dbService.getAllTutors();
    setTutors(updatedTutors);
  };

  if (!isLoaded || !admin) return <div className="min-h-screen bg-background" />;

  const navItems = [
    { label: "Admin Panel", href: "/admin", icon: Users },
    { label: "System Settings", href: "#", icon: Settings },
  ];

  const adminContent = (
    <div className="p-6 text-foreground animate-in fade-in duration-500 max-w-7xl mx-auto space-y-6">
        <header>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              Tutor Access Control
            </h1>
            <p className="mt-1 text-muted-foreground text-xs">Manage which students are assigned to each tutor</p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {tutors.map(tutorItem => (
                <TutorCard 
                    key={tutorItem.id} 
                    tutor={tutorItem} 
                    allStudents={students} 
                    toggleStudentForTutor={toggleStudentForTutor} 
                    onScheduleSave={handleScheduleSave}
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
