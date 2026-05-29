// src/modules/parent-dashboard/parent.module.js
import { getState } from '../../core/state.js';

export function getChildProgress() {
    const state = getState();
    const completed = Object.values(state.lessonsProgress || {}).filter(p => p.status === 'done').length;
    const total = 0; // Would be calculated from curriculum in real implementation
    return { completed, total, streak: state.streak?.count || 0, lastActive: state.lessonsProgress ? Object.values(state.lessonsProgress).sort((a, b) => (b.lastViewedAt || '') > (a.lastViewedAt || '') ? 1 : -1)[0]?.lastViewedAt : null };
}