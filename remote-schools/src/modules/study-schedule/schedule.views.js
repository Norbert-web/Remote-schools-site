// src/modules/study-schedule/schedule.views.js
import { getState } from '../../core/state.js';
import { ICONS } from '../../ui/icons.js';
import { escapeHtml } from '../../utils/helpers.js';

export async function render() {
    const state = getState();
    const slots = state.schedule || [];
    return `
    <div class="view">
        <h1>${ICONS.schedule} Study Schedule</h1>
        <button class="btn" style="margin-top:8px;" onclick="alert('Schedule creation coming soon.')">+ Add Slot</button>
        <div class="grid-2" style="margin-top:12px;">
            ${slots.length === 0 ? '<p class="muted">No scheduled study times.</p>' : slots.map(s => `
            <div class="card">
                <strong>${escapeHtml(s.subject)}</strong>
                <span class="tag">${s.dayOfWeek} at ${s.time}</span>
                <p class="muted">${s.durationMin} minutes</p>
            </div>`).join('')}
        </div>
    </div>`;
}