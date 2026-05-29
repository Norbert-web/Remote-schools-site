// src/modules/gamification/gamification.points.js
import { getState, saveState } from '../../core/state.js';

const POINTS = { lessonComplete: 50, exerciseCorrect: 10, quiz100: 100, streakDay: 20, achievement: 200 };

export function awardPoints(action) {
    const state = getState();
    state.points = state.points || 0;
    state.points += POINTS[action] || 0;
    saveState(state);
    return state.points;
}

export function getLevel(points) {
    if (points >= 5000) return { level: 'Legend', color: 'gold' };
    if (points >= 2000) return { level: 'Expert', color: 'purple' };
    if (points >= 1000) return { level: 'Advanced', color: 'blue' };
    if (points >= 500) return { level: 'Intermediate', color: 'green' };
    if (points >= 100) return { level: 'Beginner', color: 'orange' };
    return { level: 'Novice', color: 'gray' };
}