// src/modules/teacher-tools/teacher.views.js
import { getState } from '../../core/state.js';
import { ICONS } from '../../ui/icons.js';

export async function render() {
    const state = getState();
    const quizCount = (state.attempts || []).filter(a => a.type === 'quiz').length;
    return `
    <div class="view">
        <h1>${ICONS.settings} Teacher Tools</h1>
        <div class="grid-3" style="margin-top:12px;">
            <div class="card"><h3>Student Overview</h3><p>Quizzes taken: ${quizCount}</p><button class="btn small">View Details</button></div>
            <div class="card"><h3>Content Creator</h3><p class="muted">Add custom lessons & exercises.</p><button class="btn small" onclick="alert('Content editor coming soon.')">Open Editor</button></div>
            <div class="card"><h3>Export Reports</h3><p class="muted">Download progress data.</p><button class="btn small">Export CSV</button></div>
        </div>
    </div>`;
}