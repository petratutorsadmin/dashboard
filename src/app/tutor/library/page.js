"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/lib/data";

const views = ["Library", "My Picks", "Assigned"];
const categories = ["All", "IELTS", "IB", "Kids English", "Eiken", "Academic", "Business", "Basic English", "A1 English", "Vocabulary"];
const levels = ["All", "LV1", "LV2", "LV3", "LV4", "LV5"];
const quickTags = ["CORE", "ACTIVE", "HW", "WORD", "TEST", "JP", "READ", "SPEAK", "WRITE", "LISTEN", "COLOR"];

function parseTags(name) {
  const parts = name.split("_");
  return parts[parts.length - 1].split(".");
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

  let style = "bg-purple-50 text-[#31063d] border-purple-100";
  if (isLevel) style = "bg-[#31063d] text-white border-[#31063d]";
  if (isCore) style = "bg-[#ddb873]/20 text-[#6b4d12] border-[#ddb873]/40";
  if (isHomework) style = "bg-blue-50 text-blue-700 border-blue-100";
  if (isTest) style = "bg-red-50 text-red-700 border-red-100";
  if (isColor) style = "bg-pink-50 text-pink-700 border-pink-100";

  return <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${style}`}>{text}</span>;
}

function FilterChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
        active
          ? "border-[#31063d] bg-[#31063d] text-white shadow-sm"
          : "border-purple-100 bg-white text-slate-500 hover:bg-purple-50 hover:text-[#31063d]"
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
    <div className="group rounded-[28px] border border-purple-100 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-[#fbf8f2] px-2.5 py-1 text-xs font-semibold text-[#31063d] shrink-0">{item.category}</span>
            <span className="text-xs text-slate-400 truncate" title={item.name}>{item.name.split('_LV')[0].replace(/_/g, ' ')}</span>
          </div>
          <h3 className="text-lg font-bold leading-snug text-[#31063d] line-clamp-2" title={item.display}>{item.display}</h3>
        </div>
        <button
          onClick={() => onToggleFav(item.id)}
          className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg transition ${
            isFav
              ? "border-[#ddb873]/50 bg-[#ddb873]/20 text-[#ddb873]"
              : "border-slate-100 bg-white text-slate-300 hover:bg-slate-50"
          }`}
        >
          ★
        </button>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {tags.map((t) => <Tag key={t} text={t} />)}
      </div>

      <div className="mb-4 rounded-2xl bg-slate-50 p-3 text-xs text-slate-600">
        {item.assignedTo.length > 0 ? (
          <span><b className="text-slate-800">Used by:</b> {item.assignedTo.map(id => db.students[id]?.name || id).join(", ")}</span>
        ) : (
          <span className="text-slate-400">Not assigned yet</span>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => onAssign(item.id, selectedStudentId)}
          disabled={isAssignedToSelectedStudent || !selectedStudentId}
          className={`rounded-2xl py-2.5 text-sm font-semibold transition ${
            isAssignedToSelectedStudent
              ? "bg-purple-50 text-[#31063d] cursor-not-allowed"
              : "bg-[#31063d] text-white hover:bg-[#4a0d5a] disabled:opacity-50 disabled:cursor-not-allowed"
          }`}
        >
          {isAssignedToSelectedStudent ? "Assigned" : "Assign"}
        </button>

        <button
          onClick={() => onUnassign(item.id, selectedStudentId)}
          disabled={!isAssignedToSelectedStudent || !selectedStudentId}
          className={`rounded-2xl border py-2.5 text-sm font-semibold transition ${
            isAssignedToSelectedStudent
              ? "border-red-100 text-red-600 hover:bg-red-50"
              : "border-slate-100 text-slate-300 cursor-not-allowed"
          }`}
        >
          Unassign
        </button>

        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-purple-100 px-3 py-2.5 text-center text-sm font-semibold text-[#31063d] hover:bg-purple-50"
        >
          Drive
        </a>
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
      } else {
          router.push("/");
      }
    } else {
        router.push("/");
    }
    setIsLoaded(true);
  }, [router]);

  function toggleFav(id) {
    setFavs((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));
  }

  function assign(id, studentId) {
    setResources((r) =>
      r.map((item) => {
        if (item.id === id && !item.assignedTo.includes(studentId)) {
          const updated = { ...item, assignedTo: [...item.assignedTo, studentId] };
          // Persist to db mock
          const dbItem = db.resources.find(res => res.id === id);
          if (dbItem && !dbItem.assignedTo.includes(studentId)) {
              dbItem.assignedTo.push(studentId);
          }
          return updated;
        }
        return item;
      })
    );
  }

  function unassign(id, studentId) {
    setResources((r) =>
      r.map((item) => {
        if (item.id === id) {
          const updated = { ...item, assignedTo: item.assignedTo.filter((s) => s !== studentId) };
          // Persist to db mock
          const dbItem = db.resources.find(res => res.id === id);
          if (dbItem) {
              dbItem.assignedTo = dbItem.assignedTo.filter(s => s !== studentId);
          }
          return updated;
        }
        return item;
      })
    );
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
  }, [view, resources, favs, search, categoryFilter, levelFilter, tagFilter]);

  if (!isLoaded || !tutor) return <div className="min-h-screen bg-[#fbf8f2]" />;

  return (
    <div className="min-h-screen bg-[#fbf8f2] text-slate-950 animate-in fade-in duration-500">
      <div className="flex">
        <aside className="sticky top-0 hidden h-screen w-64 flex-col border-r border-purple-100 bg-white/90 p-6 md:flex">
          <div className="mb-8">
            <button 
                onClick={() => router.push('/tutor')} 
                className="mb-6 flex items-center text-sm font-semibold text-slate-500 hover:text-[#31063d] transition-colors"
            >
                ← Back to Dashboard
            </button>
            <h2 className="text-xl font-bold text-[#31063d]">Petra Library</h2>
            <p className="mt-1 text-xs text-slate-400">Tutor materials hub</p>
          </div>

          <div className="space-y-2 flex-grow">
            {views.map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                  view === v ? "bg-purple-50 text-[#31063d]" : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-[#31063d] p-4 text-white">
            <p className="text-sm font-bold text-[#ddb873]">Simple flow</p>
            <p className="mt-2 text-sm leading-6 text-purple-50">Search, filter, assign to student, then open the Drive file.</p>
          </div>
        </aside>

        <main className="flex-1 p-5 md:p-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <button 
                    onClick={() => router.push('/tutor')} 
                    className="mb-4 inline-flex md:hidden items-center text-sm font-semibold text-slate-500 hover:text-[#31063d]"
                >
                    ← Back to Dashboard
                </button>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#ddb873]">Petra Tutors</p>
                <h1 className="text-3xl font-black tracking-tight text-[#31063d] md:text-5xl">Resource Library</h1>
                <p className="mt-2 text-sm text-slate-500">Pick → Assign → Open Drive → Teach</p>
              </div>

              <div className="rounded-3xl border border-purple-100 bg-white p-3 shadow-sm min-w-[200px]">
                <p className="mb-1 px-1 text-xs font-semibold text-slate-400">Current student</p>
                <select
                  value={selectedStudentId}
                  onChange={(e) => setSelectedStudentId(e.target.value)}
                  className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-4 py-2.5 text-sm font-bold text-[#31063d] outline-none"
                >
                  {students.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                  {students.length === 0 && <option value="" disabled>No students assigned</option>}
                </select>
              </div>
            </div>

            <div className="mb-6 rounded-[32px] border border-purple-100 bg-white p-5 shadow-sm">
              <div className="mb-5 flex flex-col gap-3 md:flex-row">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by title, tag, category, student..."
                  className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-purple-300 focus:bg-white"
                />
                <button onClick={clearFilters} className="rounded-2xl border border-purple-100 px-4 py-3 text-sm font-semibold text-[#31063d] hover:bg-purple-50">
                  Clear
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((c) => <FilterChip key={c} label={c} active={categoryFilter === c} onClick={() => setCategoryFilter(c)} />)}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">Level</p>
                  <div className="flex flex-wrap gap-2">
                    {levels.map((l) => <FilterChip key={l} label={l} active={levelFilter === l} onClick={() => setLevelFilter(l)} />)}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">Use / Skill Tags</p>
                  <div className="flex flex-wrap gap-2">
                    <FilterChip label="All" active={tagFilter === "All"} onClick={() => setTagFilter("All")} />
                    {quickTags.map((t) => <FilterChip key={t} label={t} active={tagFilter === t} onClick={() => setTagFilter(t)} />)}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">{view}</h2>
                <p className="text-sm text-slate-500">Showing {filtered.length} resource{filtered.length === 1 ? "" : "s"}</p>
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
              <div className="rounded-[32px] border border-dashed border-purple-200 bg-white p-12 text-center">
                <p className="text-lg font-bold text-[#31063d]">No matching resources</p>
                <p className="mt-2 text-sm text-slate-500">Try clearing filters or searching a broader term.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
