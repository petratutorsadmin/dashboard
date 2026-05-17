import { supabase } from "./supabase";
import { db as mockDb } from "./data";

// Helper: Checks if Supabase client is fully configured
function isSupabaseConfigured() {
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return anonKey && anonKey !== "YOUR_SUPABASE_ANON_KEY_HERE" && anonKey !== "";
}

// Map database column names to JS camelCase properties where needed
function mapStudent(st) {
  if (!st) return null;
  
  // Safe parsing helper for JSONB fields
  const parseJsonField = (field, fallback = []) => {
    if (!field) return fallback;
    if (typeof field === "string") {
      try {
        return JSON.parse(field);
      } catch (e) {
        return fallback;
      }
    }
    return field;
  };

  return {
    ...st,
    overallGrade: st.overall_grade !== undefined ? st.overall_grade : (st.overallGrade || "Needs Assessment"),
    coreIssue: st.core_issue !== undefined ? st.core_issue : (st.coreIssue || "Needs Assessment"),
    coreIssueDetail: st.core_issue_detail !== undefined ? st.core_issue_detail : (st.coreIssueDetail || "The student's developmental needs are currently being evaluated."),
    focusThisMonth: st.focus_this_month !== undefined ? st.focus_this_month : (st.focusThisMonth || "Diagnostic Assessment"),
    petraInsight: st.petra_insight !== undefined ? st.petra_insight : (st.petraInsight || "The student's diagnostic profile is being populated by their instructor."),
    skills: parseJsonField(st.skills || st.skills),
    phases: parseJsonField(st.phases || st.phases),
    nextPlan: parseJsonField(st.next_plan || st.nextPlan || st.next_plan),
    lessons: st.lessons || [],
  };
}

function mapTutor(t) {
  if (!t) return null;
  return {
    ...t,
    assignedStudents: t.assigned_students !== undefined ? t.assigned_students : (t.assignedStudents || []),
    nextLesson: t.next_lesson_student_id !== undefined ? (t.next_lesson_student_id ? {
      studentId: t.next_lesson_student_id,
      time: t.next_lesson_time,
    } : null) : (t.nextLesson || null),
    todayAgenda: t.today_agenda !== undefined ? t.today_agenda : (t.todayAgenda || []),
  };
}

function mapParent(p) {
  if (!p) return null;
  return {
    ...p,
    studentId: p.student_id !== undefined ? p.student_id : p.studentId,
  };
}

function mapLesson(l) {
  if (!l) return null;
  return {
    ...l,
    studentId: l.student_id !== undefined ? l.student_id : l.studentId,
    sessionSummary: l.session_summary !== undefined ? l.session_summary : l.sessionSummary,
    observedStrength: l.observed_strength !== undefined ? l.observed_strength : l.observedStrength,
    currentFocusArea: l.current_focus_area !== undefined ? l.current_focus_area : l.currentFocusArea,
    interventionStrategy: l.intervention_strategy !== undefined ? l.intervention_strategy : l.interventionStrategy,
    responseToIntervention: l.response_to_intervention !== undefined ? l.response_to_intervention : l.responseToIntervention,
  };
}

function mapResource(r) {
  if (!r) return null;
  return {
    ...r,
    assignedTo: r.assigned_to !== undefined ? r.assigned_to : (r.assignedTo || []),
  };
}

function tutorMatchesLesson(tutorName, lessonTutor) {
  if (!tutorName || !lessonTutor) return false;
  const tName = tutorName.toLowerCase().trim();
  const lTutor = lessonTutor.toLowerCase().trim();
  
  if (tName === lTutor || lTutor.includes(tName) || tName.includes(lTutor)) {
    return true;
  }
  
  if (tName.startsWith("day") && lTutor.startsWith("day")) return true;
  if (tName.startsWith("tina") && lTutor.startsWith("tina")) return true;
  
  return false;
}


// Helper: Wraps a promise in a 1-second timeout
function withTimeout(promise, ms = 1000) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Database connection timeout")), ms)
  );
  return Promise.race([promise, timeout]);
}

export const dbService = {
  // 1. Authenticate Parent
  async authenticateParent(username, password) {
    if (!isSupabaseConfigured()) {
      const found = mockDb.parents.find(p => p.username === username && p.password === password);
      return found ? mapParent(found) : null;
    }

    try {
      const { data, error } = await withTimeout(
        supabase
          .from("parents")
          .select("*")
          .eq("username", username)
          .eq("password", password)
          .maybeSingle(),
        1000
      );

      if (error) throw error;
      if (!data) {
        const found = mockDb.parents.find(p => p.username === username && p.password === password);
        return found ? mapParent(found) : null;
      }
      return mapParent(data);
    } catch (err) {
      console.error("Supabase Parents auth error:", err);
      // Fallback
      const found = mockDb.parents.find(p => p.username === username && p.password === password);
      return found ? mapParent(found) : null;
    }
  },

  // 2. Authenticate Tutor
  async authenticateTutor(username, password) {
    if (!isSupabaseConfigured()) {
      const found = mockDb.tutors.find(t => t.username === username && t.password === password);
      return found ? mapTutor(found) : null;
    }

    try {
      const { data, error } = await withTimeout(
        supabase
          .from("tutors")
          .select("*")
          .eq("username", username)
          .eq("password", password)
          .maybeSingle(),
        1000
      );

      if (error) throw error;
      if (!data) {
        const found = mockDb.tutors.find(t => t.username === username && t.password === password);
        return found ? mapTutor(found) : null;
      }
      return mapTutor(data);
    } catch (err) {
      console.error("Supabase Tutors auth error:", err);
      // Fallback
      const found = mockDb.tutors.find(t => t.username === username && t.password === password);
      return found ? mapTutor(found) : null;
    }
  },

  // 3. Authenticate Admin
  async authenticateAdmin(username, password) {
    if (!isSupabaseConfigured()) {
      const found = mockDb.admins.find(a => a.username === username && a.password === password);
      return found || null;
    }

    try {
      const { data, error } = await withTimeout(
        supabase
          .from("admins")
          .select("*")
          .eq("username", username)
          .eq("password", password)
          .maybeSingle(),
        1000
      );

      if (error) throw error;
      if (!data) {
        const found = mockDb.admins.find(a => a.username === username && a.password === password);
        return found || null;
      }
      return data;
    } catch (err) {
      console.error("Supabase Admins auth error:", err);
      // Fallback
      const found = mockDb.admins.find(a => a.username === username && a.password === password);
      return found || null;
    }
  },

  // 4. Fetch Student details
  async getStudentById(id) {
    if (!isSupabaseConfigured()) {
      const found = mockDb.students[id];
      return found ? mapStudent(found) : null;
    }

    try {
      const { data, error } = await withTimeout(
        supabase
          .from("students")
          .select("*")
          .eq("id", id)
          .maybeSingle(),
        1000
      );

      if (error) throw error;
      if (!data) {
        const found = mockDb.students[id];
        return found ? mapStudent(found) : null;
      }

      const studentData = mapStudent(data);

      // Fetch and append lessons
      const { data: lessons, error: lessonsError } = await withTimeout(
        supabase
          .from("lessons")
          .select("*")
          .eq("student_id", id),
        1000
      ).catch(() => ({ data: null, error: new Error("Lessons fetch timeout") }));

      if (!lessonsError && lessons && lessons.length > 0) {
        studentData.lessons = lessons.map(mapLesson);
      } else {
        const found = mockDb.students[id];
        studentData.lessons = found && found.lessons ? found.lessons.map(mapLesson) : [];
      }

      return studentData;
    } catch (err) {
      console.error("Supabase Student fetch error:", err);
      const found = mockDb.students[id];
      return found ? mapStudent(found) : null;
    }
  },

  // 5. Fetch Tutor details
  async getTutorById(id) {
    if (!isSupabaseConfigured()) {
      const found = mockDb.tutors.find(t => t.id === id);
      return found ? mapTutor(found) : null;
    }

    try {
      const { data, error } = await withTimeout(
        supabase
          .from("tutors")
          .select("*")
          .eq("id", id)
          .maybeSingle(),
        1000
      );

      if (error) throw error;
      if (!data) {
        const found = mockDb.tutors.find(t => t.id === id);
        return found ? mapTutor(found) : null;
      }
      return mapTutor(data);
    } catch (err) {
      console.error("Supabase Tutor fetch error:", err);
      const found = mockDb.tutors.find(t => t.id === id);
      return found ? mapTutor(found) : null;
    }
  },

  // 6. Fetch Admin details
  async getAdminById(id) {
    if (!isSupabaseConfigured()) {
      const found = mockDb.admins.find(a => a.id === id);
      return found || null;
    }

    try {
      const { data, error } = await withTimeout(
        supabase
          .from("admins")
          .select("*")
          .eq("id", id)
          .maybeSingle(),
        1000
      );

      if (error) throw error;
      if (!data) {
        const found = mockDb.admins.find(a => a.id === id);
        return found || null;
      }
      return data;
    } catch (err) {
      console.error("Supabase Admin fetch error:", err);
      const found = mockDb.admins.find(a => a.id === id);
      return found || null;
    }
  },

  // 7. Get Parent associated with student
  async getParentByStudentId(studentId) {
    if (!isSupabaseConfigured()) {
      const found = mockDb.parents.find(p => p.studentId === studentId);
      return found ? mapParent(found) : null;
    }

    try {
      const { data, error } = await withTimeout(
        supabase
          .from("parents")
          .select("*")
          .eq("student_id", studentId)
          .maybeSingle(),
        1000
      );

      if (error) throw error;
      if (!data) {
        const found = mockDb.parents.find(p => p.studentId === studentId);
        return found ? mapParent(found) : null;
      }
      return mapParent(data);
    } catch (err) {
      console.error("Supabase Parent fetch error:", err);
      const found = mockDb.parents.find(p => p.studentId === studentId);
      return found ? mapParent(found) : null;
    }
  },

  // 7.5 Get Parent by ID
  async getParentById(id) {
    if (!isSupabaseConfigured()) {
      const found = mockDb.parents.find(p => p.id === id);
      return found ? mapParent(found) : null;
    }

    try {
      const { data, error } = await withTimeout(
        supabase
          .from("parents")
          .select("*")
          .eq("id", id)
          .maybeSingle(),
        1000
      );

      if (error) throw error;
      if (!data) {
        const found = mockDb.parents.find(p => p.id === id);
        return found ? mapParent(found) : null;
      }
      return mapParent(data);
    } catch (err) {
      console.error("Supabase Parent fetch by ID error:", err);
      const found = mockDb.parents.find(p => p.id === id);
      return found ? mapParent(found) : null;
    }
  },

  // 8. Fetch Lessons by Student ID
  async getLessonsByStudentId(studentId) {
    if (!isSupabaseConfigured()) {
      const student = mockDb.students[studentId];
      const found = student ? student.lessons : [];
      return found ? found.map(mapLesson) : [];
    }

    try {
      const { data, error } = await withTimeout(
        supabase
          .from("lessons")
          .select("*")
          .eq("student_id", studentId),
        1000
      );

      if (error) throw error;
      if (!data || data.length === 0) {
        const student = mockDb.students[studentId];
        const found = student ? student.lessons : [];
        return found ? found.map(mapLesson) : [];
      }
      return data.map(mapLesson);
    } catch (err) {
      console.error("Supabase Lessons fetch error:", err);
      const student = mockDb.students[studentId];
      const found = student ? student.lessons : [];
      return found ? found.map(mapLesson) : [];
    }
  },

  // 9. Fetch all Resources
  async getResources() {
    if (!isSupabaseConfigured()) {
      return mockDb.resources.map(mapResource);
    }

    try {
      const { data, error } = await withTimeout(
        supabase
          .from("resources")
          .select("*"),
        1000
      );

      if (error) throw error;
      if (!data || data.length === 0) {
        return mockDb.resources.map(mapResource);
      }
      return data.map(mapResource);
    } catch (err) {
      console.error("Supabase Resources fetch error:", err);
      return mockDb.resources.map(mapResource);
    }
  },

  // 10. Update Tutor Agenda
  async updateTutorAgenda(tutorId, agenda) {
    if (!isSupabaseConfigured()) {
      const tutor = mockDb.tutors.find(t => t.id === tutorId);
      if (tutor) {
        tutor.todayAgenda = agenda;
      }
      return true;
    }

    try {
      const { error } = await withTimeout(
        supabase
          .from("tutors")
          .update({ today_agenda: agenda })
          .eq("id", tutorId),
        1000
      );

      if (error) throw error;
      return true;
    } catch (err) {
      console.error("Supabase update agenda error:", err);
      const tutor = mockDb.tutors.find(t => t.id === tutorId);
      if (tutor) {
        tutor.todayAgenda = agenda;
      }
      return true;
    }
  },

  // 11. Schedule Tutor Next Lesson
  async scheduleLesson(tutorId, studentId, time) {
    if (!isSupabaseConfigured()) {
      const tutor = mockDb.tutors.find(t => t.id === tutorId);
      if (tutor) {
        tutor.nextLesson = { studentId, time };
      }
      return true;
    }

    try {
      const { error } = await withTimeout(
        supabase
          .from("tutors")
          .update({
            next_lesson_student_id: studentId,
            next_lesson_time: time,
          })
          .eq("id", tutorId),
        1000
      );

      if (error) throw error;
      return true;
    } catch (err) {
      console.error("Supabase schedule lesson error:", err);
      const tutor = mockDb.tutors.find(t => t.id === tutorId);
      if (tutor) {
        tutor.nextLesson = { studentId, time };
      }
      return true;
    }
  },

  // 12. Assign/Deassign Student for Tutor
  async assignStudentToTutor(tutorId, studentId, isAssigned) {
    // In mock or fallback state, modify local array
    const tutor = mockDb.tutors.find(t => t.id === tutorId);
    let newStudents = [];
    if (tutor) {
      if (isAssigned) {
        if (!tutor.assignedStudents.includes(studentId)) {
          tutor.assignedStudents.push(studentId);
        }
      } else {
        tutor.assignedStudents = tutor.assignedStudents.filter(id => id !== studentId);
      }
      newStudents = tutor.assignedStudents;
    }

    if (!isSupabaseConfigured()) {
      return true;
    }

    try {
      // First fetch current assigned_students from Supabase
      const { data, fetchError } = await withTimeout(
        supabase
          .from("tutors")
          .select("assigned_students")
          .eq("id", tutorId)
          .maybeSingle(),
        1000
      );

      if (fetchError) throw fetchError;
      
      let assigned = data?.assigned_students || [];
      if (isAssigned) {
        if (!assigned.includes(studentId)) {
          assigned.push(studentId);
        }
      } else {
        assigned = assigned.filter(id => id !== studentId);
      }

      const { error: updateError } = await withTimeout(
        supabase
          .from("tutors")
          .update({ assigned_students: assigned })
          .eq("id", tutorId),
        1000
      );

      if (updateError) throw updateError;
      return true;
    } catch (err) {
      console.error("Supabase assign student error:", err);
      return true;
    }
  },

  // Helper lists (Fallbacks or live arrays)
  async getAllTutors() {
    if (!isSupabaseConfigured()) {
      return mockDb.tutors.map(mapTutor);
    }

    try {
      const { data, error } = await withTimeout(
        supabase
          .from("tutors")
          .select("*"),
        1000
      );

      if (error) throw error;
      if (!data || data.length === 0) {
        return mockDb.tutors.map(mapTutor);
      }
      return data.map(mapTutor);
    } catch (err) {
      console.error("Supabase Tutors list fetch error:", err);
      return mockDb.tutors.map(mapTutor);
    }
  },

  async getLessonsByTutorName(tutorName) {
    if (!isSupabaseConfigured()) {
      const lessons = [];
      Object.values(mockDb.students).forEach(student => {
        if (student.lessons) {
          student.lessons.forEach(l => {
            if (l.tutor && tutorMatchesLesson(tutorName, l.tutor)) {
              lessons.push(mapLesson({ ...l, student_id: student.id }));
            }
          });
        }
      });
      return lessons;
    }

    try {
      const { data, error } = await withTimeout(
        supabase
          .from("lessons")
          .select("*"),
        1500
      );

      if (error) throw error;
      if (!data || data.length === 0) {
        const lessons = [];
        Object.values(mockDb.students).forEach(student => {
          if (student.lessons) {
            student.lessons.forEach(l => {
              if (l.tutor && tutorMatchesLesson(tutorName, l.tutor)) {
                lessons.push(mapLesson({ ...l, student_id: student.id }));
              }
            });
          }
        });
        return lessons;
      }
      
      return data
        .map(mapLesson)
        .filter(l => l.tutor && tutorMatchesLesson(tutorName, l.tutor));
    } catch (err) {
      console.error("Supabase lessons fetch by tutor error:", err);
      return [];
    }
  },

  async getAllStudents() {
    if (!isSupabaseConfigured()) {
      return Object.values(mockDb.students).map(mapStudent);
    }

    try {
      const { data, error } = await withTimeout(
        supabase
          .from("students")
          .select("*"),
        1000
      );

      if (error) throw error;
      if (!data || data.length === 0) {
        return Object.values(mockDb.students).map(mapStudent);
      }
      return data.map(mapStudent);
    } catch (err) {
      console.error("Supabase Students list fetch error:", err);
      return Object.values(mockDb.students).map(mapStudent);
    }
  }
};
