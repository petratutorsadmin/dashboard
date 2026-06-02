const fs = require('fs');
const path = require('path');

const filePath = path.join('/Users/yutaka-main/karute:profile/src/components/LearningRecords.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace component state and handleEvaluate
content = content.replace(
  `    const [isEvaluating, setIsEvaluating] = useState(null);
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
    };`,
  `    const [evaluatingSet, setEvaluatingSet] = useState({});
    const [localImpacts, setLocalImpacts] = useState({});

    const handleEvaluate = async (lesson) => {
        setEvaluatingSet(prev => ({ ...prev, [lesson.id]: true }));
        try {
            const res = await fetch('/api/evaluate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ student, lesson })
            });
            const data = await res.json();
            
            if (data.impacts && Array.isArray(data.impacts)) {
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
            setEvaluatingSet(prev => ({ ...prev, [lesson.id]: 'done' }));
        }
    };

    React.useEffect(() => {
        if (!sortedLessons) return;
        const lessonToEvaluate = sortedLessons.find(lesson => {
            const impacts = localImpacts[lesson.id] || lesson.impacts || [];
            return (!impacts || impacts.length === 0) && !evaluatingSet[lesson.id];
        });
        if (lessonToEvaluate) {
            handleEvaluate(lessonToEvaluate);
        }
    }, [sortedLessons, localImpacts, evaluatingSet]);`
);

// Replace UI button
content = content.replace(
  `{(!impacts || impacts.length === 0) && (
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
                                        )}`,
  `{(!impacts || impacts.length === 0) && evaluatingSet[lesson.id] !== 'done' && (
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-md shadow-sm">
                                                    <Loader2 className="w-3.5 h-3.5 animate-spin text-indigo-500" />
                                                    Auto-evaluating with AI...
                                                </div>
                                                <span className="text-xs text-muted-foreground">Ollama Llama 3</span>
                                            </div>
                                        )}`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated LearningRecords.jsx successfully for auto eval.');
