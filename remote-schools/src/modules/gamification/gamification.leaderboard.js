// src/modules/gamification/gamification.leaderboard.js
import { getState } from '../../core/state.js';

export function getLocalLeaderboard() {
    const state = getState();
    const entries = [{ name: state.profile?.name || 'You', points: state.points || 0 }];
    // Simulated peers for offline demo
    entries.push({ name: 'Alice', points: 1250 }, { name: 'Bob', points: 980 }, { name: 'Carol', points: 750 });
    entries.sort((a, b) => b.points - a.points);
    return entries;
}