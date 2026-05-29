// src/modules/assignment-tracking/assignment.views.js
import { getState } from '../../core/state.js';
import { ICONS } from '../../ui/icons.js';
import { escapeHtml } from '../../utils/helpers.js';

export async function render() {
    const state = getState();
    const assignments = state.assignments || [];
    const pending = assignments.filter(a => a.status === 'pending');
    const done = assignments.filter(a => a.status === 'done');
    return `
    <div class="view">
        <h1>${ICONS.quizzes} Assignment Tracker</h1>
        <button class="btn" style="margin-top:8px;" onclick="alert('Assignment creation form coming soon.')">+ New Assignment</button>
        <div class="grid-2" style="margin-top:12px;">
            <div class="card"><h3>📋 Pending (${pending.length})</h3>
                ${pending.map(a => `<p>${escapeHtml(a.title)} <span class="tag">${a.priority}</span> <span class="muted">Due: ${a.dueDate}</span></p>`).join('') || '<p class="muted">All caught up!</p>'}
            </div>
            <div class="card"><h3>✅ Completed (${done.length})</h3>
                ${done.map(a => `<p>${escapeHtml(a.title)} <span class="pill green">Done</span></p>`).join('') || '<p class="muted">None yet.</p>'}
            </div>
        </div>
    </div>`;
}