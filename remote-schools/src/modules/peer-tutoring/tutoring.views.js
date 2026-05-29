// src/modules/peer-tutoring/tutoring.views.js
import { getState } from '../../core/state.js';
import { ICONS } from '../../ui/icons.js';
import { escapeHtml } from '../../utils/helpers.js';

export async function render() {
    const state = getState();
    const requests = state.tutoringRequests || [];
    return `
    <div class="view">
        <h1>${ICONS.tutor} Peer Tutoring</h1>
        <button class="btn" style="margin-top:8px;" onclick="alert('Tutoring request form coming soon.')">Request a Tutor</button>
        <div class="grid-2" style="margin-top:12px;">
            ${requests.length === 0 ? '<p class="muted">No tutoring requests.</p>' : requests.map(r => `
            <div class="card">
                <strong>${escapeHtml(r.subject)}</strong> — ${escapeHtml(r.topic)}
                <span class="pill ${r.status === 'pending' ? 'yellow' : 'green'}">${r.status}</span>
            </div>`).join('')}
        </div>
    </div>`;
}