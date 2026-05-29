// src/modules/personalized-paths/paths.module.js
import { generatePath } from './paths.engine.js';
import { ICONS } from '../../ui/icons.js';
import { escapeHtml } from '../../utils/helpers.js';
import { navigateTo } from '../../core/router.js';

export async function render() {
    const path = generatePath('S1', 'math');
    return `
    <div class="view">
        <h1>${ICONS.analytics} Personalized Learning Path</h1>
        <p class="muted">A customized sequence based on your progress and goals.</p>
        <div class="grid-2" style="margin-top:12px;">
            ${path.slice(0, 6).map(item => `
            <div class="card" style="cursor:pointer;" onclick="navigateTo('lesson',{topicId:'${item.topic.id}'})">
                <strong>${escapeHtml(item.topic.title)}</strong>
                <span class="tag">${item.topic.grade}</span>
                ${item.recommended ? '<span class="badge accent">Recommended next</span>' : ''}
            </div>`).join('')}
        </div>
    </div>`;
}