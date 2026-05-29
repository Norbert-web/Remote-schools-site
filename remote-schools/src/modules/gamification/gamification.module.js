// src/modules/gamification/gamification.module.js
import { getState } from '../../core/state.js';
import { getLevel } from './gamification.points.js';
import { getLocalLeaderboard } from './gamification.leaderboard.js';
import { awardPoints } from './gamification.points.js';
import { escapeHtml } from '../../utils/helpers.js';

export function initializeGamification() {
    document.addEventListener('achievement-check', () => awardPoints('achievement'));
}

export function renderPointsWidget() {
    const state = getState();
    const points = state.points || 0;
    const { level, color } = getLevel(points);
    return `<span style="color:${color};font-weight:700;">${level}</span> • ${points} pts`;
}

export function renderLeaderboard() {
    const leaderboard = getLocalLeaderboard();
    return leaderboard.map((e, i) => `
    <div class="row" style="justify-content:space-between;padding:4px 0;">
        <span>${i + 1}. ${escapeHtml(e.name)}</span>
        <span class="badge">${e.points} pts</span>
    </div>`).join('');
}