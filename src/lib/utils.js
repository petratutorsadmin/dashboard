import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function computeSkillLevel(student, skillName) {
    if (!student || !student.skills) return 0;
    const skill = student.skills.find(s => s.name === skillName);
    if (!skill) return 0;

    let level = skill.baseLevel || 0;
    if (student.lessons) {
        student.lessons.forEach(lesson => {
            if (lesson.impacts) {
                const impact = lesson.impacts.find(i => i.skill === skillName);
                if (impact && impact.change) {
                    const changeVal = parseInt(impact.change.replace('+', ''), 10);
                    if (!isNaN(changeVal)) {
                        level += changeVal;
                    }
                }
            }
        });
    }
    return Math.min(100, Math.max(0, level));
}

export function computeGrade(level) {
    if (level >= 95) return "A+";
    if (level >= 90) return "A";
    if (level >= 85) return "A-";
    if (level >= 80) return "B+";
    if (level >= 75) return "B";
    if (level >= 70) return "B-";
    if (level >= 65) return "C+";
    if (level >= 60) return "C";
    if (level >= 55) return "C-";
    if (level >= 50) return "D";
    return "F";
}

export function computeOverallGrade(student) {
    if (!student || !student.skills || student.skills.length === 0) return "N/A";
    let totalWeight = 0;
    let totalScore = 0;
    student.skills.forEach(skill => {
        const level = computeSkillLevel(student, skill.name);
        const weight = skill.weight || 1.0;
        totalScore += level * weight;
        totalWeight += weight;
    });
    const avg = totalWeight > 0 ? totalScore / totalWeight : 0;
    return computeGrade(avg);
}

export function computePhaseProgress(phase) {
    if (!phase || !phase.items || phase.items.length === 0) return 0;
    const completed = phase.items.filter(item => typeof item === 'object' ? item.completed : false).length;
    return Math.round((completed / phase.items.length) * 100);
}

export function computeNextPlan(student, lang = "en") {
    if (!student) return [];
    
    const plan = [];
    let stepCount = 1;
    
    const isJa = lang === "ja";
    
    // 1. Review Recent Homework
    if (student.lessons && student.lessons.length > 0) {
        const sortedLessons = [...student.lessons].sort((a, b) => {
            const parseDate = (d) => new Date(d.replace(/年|月/g, '/').replace(/日/g, ''));
            return parseDate(b.date) - parseDate(a.date);
        });
        const latestLesson = sortedLessons[0];
        
        if (latestLesson.homework && latestLesson.homework !== "None" && !latestLesson.homework.includes("No specific homework") && !latestLesson.homework.includes("特定の宿題はありません")) {
            plan.push({
                title: `${stepCount++}. ${isJa ? "宿題の確認" : "Homework Review"}`,
                desc: `${isJa ? "前回のレッスンの課題を確認します：" : "Review assignment from last lesson:"} ${latestLesson.homework}`
            });
        }
    }
    
    // 2. Current Phase Objective
    if (student.phases) {
        const activePhase = student.phases.find(p => computePhaseProgress(p) < 100);
        if (activePhase && activePhase.items) {
            const nextItem = activePhase.items.find(i => typeof i === 'object' ? !i.completed : false);
            if (nextItem) {
                plan.push({
                    title: `${stepCount++}. ${isJa ? "フェーズ目標の進行" : "Phase Progression"}`,
                    desc: `${isJa ? "次の目標に焦点を当てます：" : "Focus on next objective:"} ${typeof nextItem === 'object' ? nextItem.title : nextItem}`
                });
            }
        }
    }
    
    // 3. Lowest Skill Focus
    if (student.skills && student.skills.length > 0) {
        let lowestSkill = student.skills[0];
        let lowestLevel = computeSkillLevel(student, lowestSkill.name);
        
        for (const skill of student.skills) {
            const level = computeSkillLevel(student, skill.name);
            if (level < lowestLevel) {
                lowestLevel = level;
                lowestSkill = skill;
            }
        }
        
        plan.push({
            title: `${stepCount++}. ${isJa ? "スキル強化" : "Skill Building Focus"}`,
            desc: `${isJa ? "レベルアップに焦点を当てます：" : "Work on improving"} '${lowestSkill.name}'. ${isJa ? "アプローチ：" : "Approach:"} ${lowestSkill.improvement}`
        });
    }
    
    // Fallback if empty
    if (plan.length === 0) {
        plan.push({
            title: "1. General Review",
            desc: isJa ? "標準カリキュラムと会話練習を続けます。" : "Continue with standard curriculum and conversation practice."
        });
    }
    
    return plan;
}
