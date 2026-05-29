// src/modules/personalized-paths/paths.engine.js
import { getState } from '../../core/state.js';
import { getAllTopics } from '../../data/curriculum.js';

export function generatePath(grade, goal) {
    const all = getAllTopics({ grade });
    const state = getState();
    const progress = state.lessonsProgress || {};
    const incomplete = all.filter(item => progress[item.topic.id]?.status !== 'done');
    // Sort by curriculum order (simplified)
    return incomplete.map(item => ({ ...item, recommended: progress[item.topic.id]?.status !== 'in' }));
}