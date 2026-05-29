// src/modules/parent-dashboard/parent.views.js
import { getState } from '../../core/state.js';
import { ICONS } from '../../ui/icons.js';
import { secondsToHuman } from '../../utils/helpers.js';

export async function render() {
    const state = getState();
    const completed = Object.values(state.lessonsProgress || {}).filter(p => p.status === 'done').length;
    const totalTime = Object.values(state.lessonsProgress || {}).reduce((s, p) => s + (p.timeSpentSec || 0), 0);
    return `
    <div class="view">
        <h1>${ICONS.profile} Parent Dashboard</h1>
        <div class="grid-3" style="margin-top:12px;">
            <div class="card"><h3>📚 Topics Completed</h3><p style="font-size:2rem;font-weight:800;">${completed}</p></div>
            <div class="card"><h3>⏱️ Total Study Time</h3><p style="font-size:2rem;font-weight:800;">${secondsToHuman(totalTime)}</p></div>
            <div class="card"><h3>🔥 Current Streak</h3><p style="font-size:2rem;font-weight:800;">${state.streak?.count || 0} days</p></div>
        </div>
    </div>`;
}