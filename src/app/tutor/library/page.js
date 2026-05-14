"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/lib/data";
import { AppShell } from "@/components/AppShell";
import { LayoutDashboard, BookOpen, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const views = ["Library", "My Picks", "Assigned"];
const categories = ["All", "IELTS", "IB", "Kids English", "Eiken", "Academic", "Business", "Basic English", "A1 English", "Vocabulary"];
const levels = ["All", "LV1", "LV2", "LV3", "LV4", "LV5"];
const quickTags = ["CORE", "ACTIVE", "HW", "WORD", "TEST", "JP", "READ", "SPEAK", "WRITE", "LISTEN", "COLOR"];

function parseTags(name) {
  const parts = name.split("_");
  const rawTags = parts[parts.length - 1].split(".");
  // Deduplicate tags and filter out common extensions or empty strings
  const filteredTags = [...new Set(rawTags)].filter(tag => 
    tag && !["pdf", "docx", "doc", "pptx", "xlsx"].includes(tag.toLowerCase())
  );
  return filteredTags;
}

function getLevel(name) {
  return parseTags(name).find((tag) => tag.startsWith("LV")) || "";
}

function Tag({ text }) {
  const isLevel = text.startsWith("LV");
  const isCore = text === "CORE";
  const isHomework = text === "HW";
  const isTest = text === "TEST";
  const isColor = text === "COLOR";
 
  let style = "bg-primary/10 text-primary border-primary/20";
  if (isLevel) style = "bg-primary text-primary-foreground border-transparent font-black";
  if (isCore) style = "bg-zinc-100 text-foreground border-zinc-200";
  if (isHomework) style = "bg-blue-50 text-blue-600 border-blue-200";
  if (isTest) style = "bg-red-50 text-red-600 border-red-200";
  if (isColor) style = "bg-pink-50 text-pink-600 border-pink-200";
 
  return <span className={`text-[10px] px-2 py-0.5 rounded uppercase tracking-widest border font-bold ${style}`}>{text}</span>;
}

function FilterChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest transition shadow-sm ${
        active
          ? "border-primary bg-primary text-primary-foreground shadow-md"
          : "border-border bg-white text-muted-foreground hover:bg-zinc-50 hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}

function ResourceCard({ item, selectedStudentId, onAssign, onUnassign, onToggleFav, isFav }) {
  const tags = parseTags(item.name);
  const isAssignedToSelectedStudent = item.assignedTo.includes(selectedStudentId);
 
  return (
    <div className="group rounded-xl border border-border/60 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40 relative overflow-hidden">
      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded px-2 py-0.5 text-[10px] font-black uppercase tracking-widest border border-primary/20 bg-primary/10 text-primary shrink-0">{item.category}</span>
              <span className="text-[10px] text-muted-foreground truncate uppercase tracking-widest font-bold" title={item.name}>{item.name.split('_LV')[0].replace(/_/g, ' ')}</span>
            </div>
            <h3 className="text-base font-bold leading-snug text-foreground line-clamp-2" title={item.display}>{item.display}</h3>
          </div>
          <button
            onClick={() => onToggleFav(item.id)}
            className={`flex h-9 w-9 items-center justify-center rounded-lg border text-sm transition-all ${
              isFav
                ? "border-primary/50 bg-primary/10 text-primary shadow-sm"
                : "border-border bg-zinc-50 text-muted-foreground hover:bg-zinc-100 hover:text-foreground"
            }`}
          >
            ★
          </button>
        </div>
 
        <div className="mb-5 flex flex-wrap gap-2">
          {tags.map((t) => <Tag key={t} text={t} />)}
        </div>
 
        <div className="mb-4 rounded-lg bg-zinc-50 border border-border p-3 text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
          {item.assignedTo.length > 0 ? (
            <span className="line-clamp-1"><b className="text-foreground">Used by:</b> {item.assignedTo.map(id => db.students[id]?.name || id).join(", ")}</span>
          ) : (
            <span className="opacity-50 italic">Not assigned yet</span>
          )}
        </div>
 
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => onAssign(item.id, selectedStudentId)}
            disabled={isAssignedToSelectedStudent || !selectedStudentId}
            className={`rounded-lg py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
              isAssignedToSelectedStudent
                ? "bg-primary/10 text-primary cursor-not-allowed border border-primary/20"
                : "bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed shadow-md border border-transparent"
            }`}
          >
            {isAssignedToSelectedStudent ? "Assigned" : "Assign"}
          </button>
 
          <button
            onClick={() => onUnassign(item.id, selectedStudentId)}
            disabled={!isAssignedToSelectedStudent || !selectedStudentId}
            className={`rounded-lg border py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
              isAssignedToSelectedStudent
                ? "border-destructive/30 text-destructive hover:bg-destructive/10"
                : "border-border text-muted-foreground opacity-30 cursor-not-allowed"
            }`}
          >
            Unassign
          </button>
 
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border bg-white px-3 py-2 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-foreground hover:bg-zinc-50 transition-all shadow-sm"
          >
            Drive
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PetraLibraryPremium() {
  const router = useRouter();
  const [tutor, setTutor] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [students, setStudents] = useState([]);
  
  const [resources, setResources] = useState(db.resources || []);
  const [view, setView] = useState("Library");
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [favs, setFavs] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [levelFilter, setLevelFilter] = useState("All");
  const [tagFilter, setTagFilter] = useState("All");

  useEffect(() => {
    const savedTutorId = localStorage.getItem("petra_tutor_id");
    if (savedTutorId) {
      const found = db.tutors.find(t => t.id === savedTutorId);
      if (found) {
          setTutor(found);
          const assigned = found.assignedStudents.map(id => db.students[id]).filter(Boolean);
          setStudents(assigned);
          if (assigned.length > 0) {
              setSelectedStudentId(assigned[0].id);
          }

          const savedFavs = localStorage.getItem(`petra_favs_${savedTutorId}`);
          if (savedFavs) {
              try { setFavs(JSON.parse(savedFavs)); } catch(e){}
          }
      } else {
          router.push("/");
      }
    } else {
        router.push("/");
    }

    const savedAssignmentsStr = localStorage.getItem("petra_library_assignments");
    if (savedAssignmentsStr) {
        try {
            const savedAssignments = JSON.parse(savedAssignmentsStr);
            setResources(prev => prev.map(r => {
                const updatedAssigned = savedAssignments[r.id] || r.assignedTo;
                // Keep db in sync for runtime
                const dbItem = db.resources.find(res => res.id === r.id);
                if (dbItem) dbItem.assignedTo = updatedAssigned;
                return { ...r, assignedTo: updatedAssigned };
            }));
        } catch(e) {}
    }

    setIsLoaded(true);
  }, [router]);

  const handleLogout = () => {
    setTutor(null);
    localStorage.removeItem("petra_tutor_id");
    router.push("/");
  };

  function saveAssignments(currentResources) {
      const assignments = {};
      currentResources.forEach(r => { assignments[r.id] = r.assignedTo; });
      localStorage.setItem("petra_library_assignments", JSON.stringify(assignments));
  }

  function toggleFav(id) {
    setFavs((f) => {
        const newFavs = f.includes(id) ? f.filter((x) => x !== id) : [...f, id];
        if (tutor) localStorage.setItem(`petra_favs_${tutor.id}`, JSON.stringify(newFavs));
        return newFavs;
    });
  }

  function assign(id, studentId) {
    setResources((r) => {
      const newR = r.map((item) => {
        if (item.id === id && !item.assignedTo.includes(studentId)) {
          const updated = { ...item, assignedTo: [...item.assignedTo, studentId] };
          const dbItem = db.resources.find(res => res.id === id);
          if (dbItem && !dbItem.assignedTo.includes(studentId)) {
              dbItem.assignedTo.push(studentId);
          }
          return updated;
        }
        return item;
      });
      saveAssignments(newR);
      return newR;
    });
  }

  function unassign(id, studentId) {
    setResources((r) => {
      const newR = r.map((item) => {
        if (item.id === id) {
          const updated = { ...item, assignedTo: item.assignedTo.filter((s) => s !== studentId) };
          const dbItem = db.resources.find(res => res.id === id);
          if (dbItem) {
              dbItem.assignedTo = dbItem.assignedTo.filter(s => s !== studentId);
          }
          return updated;
        }
        return item;
      });
      saveAssignments(newR);
      return newR;
    });
  }

  function clearFilters() {
    setSearch("");
    setCategoryFilter("All");
    setLevelFilter("All");
    setTagFilter("All");
  }

  const filtered = useMemo(() => {
    let result = resources;

    if (view === "My Picks") result = result.filter((r) => favs.includes(r.id));
    if (view === "Assigned") result = result.filter((r) => r.assignedTo.length > 0);

    if (categoryFilter !== "All") result = result.filter((r) => r.category === categoryFilter);
    if (levelFilter !== "All") result = result.filter((r) => getLevel(r.name) === levelFilter);
    if (tagFilter !== "All") result = result.filter((r) => parseTags(r.name).includes(tagFilter));

    if (search.trim() !== "") {
      const s = search.toLowerCase();
      result = result.filter((r) => {
        const studentNames = r.assignedTo.map(id => db.students[id]?.name || "").join(" ");
        return `${r.name} ${r.display} ${r.category} ${studentNames}`.toLowerCase().includes(s);
      });
    }

    return result;
  }, [view, resources, favs, search, categoryFilter, levelFilter, tagFilter]);  if (!isLoaded || !tutor) return <div className="min-h-screen bg-background" />;

  const navItems = [
    { label: "Dashboard", href: "/tutor", icon: LayoutDashboard },
    { label: "Resource Library", href: "/tutor/library", icon: BookOpen },
    { label: "Schedule", href: "#", icon: Calendar },
  ];

  const libraryContent = (
    <div className="flex-1 p-5 md:p-8 animate-in fade-in duration-500">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-1 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Petra Tutors</p>
            <h1 className="text-4xl font-black tracking-tight text-foreground md:text-6xl">Resource Library</h1>
            <p className="mt-3 text-sm text-muted-foreground font-medium">Pick → Assign → Open Drive → Teach</p>
          </div>

          <div className="rounded-xl border border-border bg-white p-4 shadow-sm min-w-[240px]">
            <p className="mb-2 px-1 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Current student</p>
            <select
              value={selectedStudentId}
              onChange={(e) => setSelectedStudentId(e.target.value)}
              className="w-full rounded-lg border border-border bg-zinc-50 px-4 py-2 text-sm font-bold text-primary outline-none focus:ring-1 focus:ring-primary/30 transition-all"
            >
              {students.map((s) => <option key={s.id} value={s.id} className="bg-background">{s.name}</option>)}
              {students.length === 0 && <option value="" disabled className="bg-background">No students assigned</option>}
            </select>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2 pb-4 border-b border-border">
          {views.map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={cn(
                "rounded-lg px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all",
                view === v ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-zinc-50"
              )}
            >
              {v}
            </button>
          ))}
        </div>

        <div className="mb-8 rounded-xl border border-border bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-col gap-3 md:flex-row">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, tag, category, student..."
              className="flex-1 rounded-xl border border-border bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:ring-1 focus:ring-primary/50 placeholder:text-muted-foreground/50 text-foreground"
            />
            <button onClick={clearFilters} className="rounded-xl border border-border px-6 py-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-foreground hover:bg-zinc-50 transition-all">
              Clear
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Category</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => <FilterChip key={c} label={c} active={categoryFilter === c} onClick={() => setCategoryFilter(c)} />)}
              </div>
            </div>

            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Level</p>
              <div className="flex flex-wrap gap-2">
                {levels.map((l) => <FilterChip key={l} label={l} active={levelFilter === l} onClick={() => setLevelFilter(l)} />)}
              </div>
            </div>

            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Use / Skill Tags</p>
              <div className="flex flex-wrap gap-2">
                <FilterChip label="All" active={tagFilter === "All"} onClick={() => setTagFilter("All")} />
                {quickTags.map((t) => <FilterChip key={t} label={t} active={tagFilter === t} onClick={() => setTagFilter(t)} />)}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-foreground">{view}</h2>
            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-1">Showing {filtered.length} resource{filtered.length === 1 ? "" : "s"}</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <ResourceCard
              key={item.id}
              item={item}
              selectedStudentId={selectedStudentId}
              onAssign={assign}
              onUnassign={unassign}
              onToggleFav={toggleFav}
              isFav={favs.includes(item.id)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-border bg-zinc-50 p-12 text-center">
            <p className="text-lg font-bold text-foreground">No matching resources</p>
            <p className="mt-2 text-xs text-muted-foreground font-medium uppercase tracking-widest">Try clearing filters or searching a broader term.</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <AppShell 
      navItems={navItems} 
      user={{ name: tutor.name, role: tutor.role }} 
      onLogout={handleLogout}
    >
      {libraryContent}
    </AppShell>
  );
}
