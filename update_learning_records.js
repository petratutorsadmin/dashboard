const fs = require('fs');
const path = require('path');

const filePath = path.join('/Users/yutaka-main/karute:profile/src/components/LearningRecords.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Imports
content = content.replace(
  'import { Calendar, User, BookOpen, TrendingUp, Target, ChevronDown, ChevronRight, FileText, CheckCircle2, PenTool, Clock } from "lucide-react";',
  'import { Calendar, User, BookOpen, TrendingUp, Target, ChevronDown, ChevronRight, FileText, CheckCircle2, PenTool, Clock, Sparkles, Loader2 } from "lucide-react";\nimport { supabase } from "@/lib/supabase";'
);

// 2. Component State
content = content.replace(
  'const [isSimplifiedMode, setIsSimplifiedMode] = useState(true);',
  `const [isSimplifiedMode, setIsSimplifiedMode] = useState(true);
    const [isEvaluating, setIsEvaluating] = useState(null);
    const [localImpacts, setLocalImpacts] = useState({});

    const handleEvaluate = async (lesson) => {
        setIsEvaluating(lesson.id);
        try {
            const res = await fetch('/api/evaluate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ student, lesson })
            });
            const data = await res.json();
            
            if (data.impacts && Array.isArray(data.impacts)) {
                // Save to supabase
                const { error } = await supabase
                    .from('lessons')
                    .update({ impacts: data.impacts })
                    .eq('id', lesson.id);
                    
                if (!error) {
                    setLocalImpacts(prev => ({ ...prev, [lesson.id]: data.impacts }));
                } else {
                    console.error("Failed to save to Supabase", error);
                }
            }
        } catch (error) {
            console.error("Evaluation error", error);
        } finally {
            setIsEvaluating(null);
        }
    };`
);

// 3. Resolve impacts
content = content.replace(
  'const impacts = getDynamicImpacts(lesson, student);',
  'const impacts = localImpacts[lesson.id] || lesson.impacts || [];'
);

// 4. Render AI Button
content = content.replace(
  '{/* Dynamic Impact Pills (+ Skills) */}',
  `{/* Dynamic Impact Pills (+ Skills) */}
                                        {(!impacts || impacts.length === 0) && (
                                            <div className="flex items-center gap-2 mb-2">
                                                <button
                                                    onClick={() => handleEvaluate(lesson)}
                                                    disabled={isEvaluating === lesson.id}
                                                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition-colors disabled:opacity-50"
                                                >
                                                    {isEvaluating === lesson.id ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                                                    {isEvaluating === lesson.id ? 'Evaluating with AI...' : 'Evaluate with AI'}
                                                </button>
                                                <span className="text-xs text-muted-foreground">Ollama Llama 3</span>
                                            </div>
                                        )}`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated LearningRecords.jsx successfully.');
