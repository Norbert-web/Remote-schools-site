// src/modules/study-groups/study-group.views.js
import { getState } from '../../core/state.js';
import { ICONS } from '../../ui/icons.js';
import { escapeHtml } from '../../utils/helpers.js';

export async function render() {
    const state = getState();
    const groups = state.studyGroups || [];
    return `
    <div class="view">
        <h1>${ICONS.group} Study Groups</h1>
        <p class="muted">Create or join study groups to collaborate with peers.</p>
        <button class="btn" style="margin-top:8px;" onclick="alert('Group creation dialog coming soon.')">+ Create Group</button>
        <div class="grid-3" style="margin-top:12px;">
            ${groups.length === 0 ? '<p class="muted">No groups yet.</p>' : groups.map(g => `
            <div class="card">
                <h3>${escapeHtml(g.name)}</h3>
                <span class="badge">${escapeHtml(g.subject)}</span>
                <p class="muted">${g.members.length}/${g.maxMembers} members</p>
            </div>`).join('')}
        </div>
    </div>`;
}