// src/modules/search/search.views.js
import { fullTextSearch } from './search.engine.js';
import { escapeHtml } from '../../utils/helpers.js';
import { navigateTo } from '../../core/router.js';

export async function renderSearch(params = {}) {
    const q = params.q || '';
    const results = fullTextSearch(q);
    return `
    <div class="view">
        <h1>Search Results</h1>
        <p class="muted">Found ${results.length} result(s) for "<strong>${escapeHtml(q)}</strong>"</p>
        ${results.length === 0 ? '<p>Try a different search term.</p>' : results.map(r => `
        <div class="card" style="cursor:pointer;margin-top:6px;" onclick="navigateTo('lesson',{topicId:'${r.topic.id}'})">
            <strong>${escapeHtml(r.topic.title)}</strong> <span class="tag">${r.topic.grade}</span>
            <p class="muted">${escapeHtml(r.subject.title)} • ${r.level.name} (score: ${r.score})</p>
        </div>`).join('')}
    </div>`;
}