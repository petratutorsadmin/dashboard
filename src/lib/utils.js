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
