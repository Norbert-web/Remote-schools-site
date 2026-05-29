// src/modules/note-taking/notes.views.js
import { getState } from '../../core/state.js';
import { ICONS } from '../../ui/icons.js';
import { escapeHtml } from '../../utils/helpers.js';

export async function render() {
    const state = getState();
    const allNotes = state.notes || {};
    const totalNotes = Object.values(allNotes).flat().length;
    return `
    <div class="view">
        <h1>${ICONS.note} My Notes</h1>
        <p class="muted">${totalNotes} notes saved across all topics.</p>
        <div class="grid-2" style="margin-top:12px;">
            ${Object.keys(allNotes).length === 0 ? '<p class="muted">No notes yet. Start taking notes from lessons!</p>' :
            Object.entries(allNotes).map(([topicId, notes]) => `
            <div class="card">
                <strong>Topic: ${escapeHtml(topicId)}</strong>
                ${notes.map(n => `<p style="margin:4px 0;padding:4px;background:var(--bg);border-radius:4px;">${escapeHtml(n.content)}</p>`).join('')}
            </div>`).join('')}
        </div>
    </div>`;
}