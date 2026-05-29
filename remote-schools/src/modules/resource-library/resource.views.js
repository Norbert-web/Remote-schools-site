// src/modules/resource-library/resource.views.js
import { SAMPLE_RESOURCES } from './resource.module.js';
import { ICONS } from '../../ui/icons.js';
import { escapeHtml } from '../../utils/helpers.js';

export async function render() {
    return `
    <div class="view">
        <h1>${ICONS.resource} Resource Library</h1>
        <p class="muted">Downloadable study materials, past papers, and reference sheets.</p>
        <div class="grid-2" style="margin-top:12px;">
            ${SAMPLE_RESOURCES.map(r => `
            <div class="card">
                <h3>${escapeHtml(r.title)}</h3>
                <span class="badge accent">${r.type}</span>
                <span class="tag">${escapeHtml(r.subject)}</span>
                <p class="muted">Size: ${r.size}</p>
                <button class="btn small">Download</button>
            </div>`).join('')}
        </div>
    </div>`;
}