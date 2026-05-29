// src/modules/adaptive-learning/adaptive.engine.js
import { getState } from '../../core/state.js';
import { getAllTopics } from '../../data/curriculum.js';

export function getRecommendedTopics(count = 5) {
    const state = getState();
    const progress = state.lessonsProgress || {};
    const all = getAllTopics();
    const scored = all.map(item => {
        const p = progress[item.topic.id];
        let score = 50; // Default
        if (p) {
            if (p.status === 'done') score = 0;
            else if (p.status === 'in') score = 30;
            if (p.timeSpentSec > 300) score += 10;
            const exercises = getState().exercises || [];
            const exForTopic = exercises.filter(ex => item.topic.exercises?.some(te => te.id === ex.id));
            if (exForTopic.length > 0) {
                const avgCorrect = exForTopic.reduce((s, ex) => s + (ex.correct / ex.attempts), 0) / exForTopic.length;
                score += (1 - avgCorrect) * 40;
            }
        }
        return { ...item, score };
    });
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, count);
}