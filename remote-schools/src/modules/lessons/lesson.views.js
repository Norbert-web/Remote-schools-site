import { ICONS } from '../../ui/icons.js';
import { escapeHtml, secondsToHuman } from '../../utils/helpers.js';
import { CURRICULUM, findTopic, getAllTopics } from '../../data/curriculum.js';
import { getState } from '../../core/state.js';
import { navigateTo } from '../../core/router.js';
import { startTimer } from './lesson.timer.js';
import { markLessonStatus, toggleBookmark } from './lesson.logic.js';

export async function renderLesson(params = {}) {
    const topicId = params.topicId || '';
    const found = findTopic(topicId);
    if (!found) return '<div class="view card"><h2>Topic not found</h2></div>';
    const { topic, subject, level } = found;
    const state = getState();
    const prog = state.lessonsProgress[topicId] || { status: 'not', viewed: 0, timeSpentSec: 0 };
    const statusMap = { not: ['Not Started', 'yellow'], in: ['In Progress', 'blue'], done: ['Completed', 'green'] };
    const [label, cls] = statusMap[prog.status] || statusMap.not;
    const siblings = subject.topics || [];
    setTimeout(() => startTimer(topicId), 100);
    return `
    <div class="view">
        <div class="grid-2">
            <div class="card">
                <div class="card-header">
                    <div><h1>${escapeHtml(topic.title)}</h1><p class="muted">${escapeHtml(subject.title)} • ${topic.grade} • ${level.name}</p></div>
                    <span class="pill ${cls}">${label}</span>
                </div>
                <div class="card" style="background:var(--bg);margin-top:10px;">
                    <h4>Learning Objectives</h4>
                    <ul>${(topic.objectives || []).map(o => `<li>${escapeHtml(o)}</li>`).join('') || '<li class="muted">None listed.</li>'}</ul>
                </div>
                <div class="lesson-content" style="margin-top:12px;line-height:1.7;">${topic.lesson || '<p class="muted">Lesson content coming soon.</p>'}</div>
                <div class="row" style="margin-top:14px;gap:8px;">
                    <button class="btn" onclick="window._markLessonStatus('${topicId}','done')">${ICONS.check} Mark Complete</button>
                    <button class="btn outline" onclick="window._markLessonStatus('${topicId}','in')">Mark In Progress</button>
                    <button class="btn ghost" onclick="window._toggleBookmark('${topicId}')">${ICONS.bookmarks} Bookmark</button>
                </div>
                <div class="muted" style="margin-top:10px;">Viewed: ${prog.viewed || 0} times • Time: <span id="lessonTimeSpent">${secondsToHuman(prog.timeSpentSec || 0)}</span></div>
            </div>
            <div class="card">
                <h3>Topics in ${escapeHtml(subject.title)}</h3>
                ${siblings.map(t => `
                <div class="card" style="margin:4px 0;cursor:pointer;${t.id === topicId ? 'border:2px solid var(--primary);' : ''}" onclick="navigateTo('lesson',{topicId:'${t.id}'})">
                    <strong>${escapeHtml(t.title)}</strong><span class="tag">${t.grade}</span>
                </div>`).join('')}
                <hr class="divider">
                <button class="btn small" onclick="navigateTo('exercises',{topicId:'${topicId}'})">${ICONS.exercises} Practice</button>
            </div>
        </div>
    </div>`;
}

export async function renderSubjects(params = {}) {
    const levelFilter = params.level || '';
    let html = '<div class="view"><div class="card-header"><h1>Browse Subjects</h1><div class="row">';
    html += `<select id="filterLevel" class="search-input" style="width:140px" onchange="navigateTo('subjects',{level:this.value})"><option value="">All Levels</option><option value="primary" ${levelFilter === 'primary' ? 'selected' : ''}>Primary</option><option value="secondary" ${levelFilter === 'secondary' ? 'selected' : ''}>Secondary</option></select>`;
    html += '<input id="filterQuery" class="search-input" style="width:200px" placeholder="Filter topics..." oninput="window._renderSubjectsFiltered()">';
    html += '</div></div><div class="grid-2" style="margin-top:12px"><div id="subjectsList"></div><div id="topicsPreview" class="card"><p class="muted">Select a subject to see its topics.</p></div></div></div>';
    setTimeout(() => {
        const listEl = document.getElementById('subjectsList');
        if (!listEl) return;
        const levels = [];
        if (!levelFilter || levelFilter === 'primary') levels.push({ level: CURRICULUM.primary, label: 'Primary (P1–P7)' });
        if (!levelFilter || levelFilter === 'secondary') levels.push({ level: CURRICULUM.secondary, label: 'Secondary (S1–S6)' });
        listEl.innerHTML = levels.map(l => `
        <div class="card" style="margin-bottom:10px;"><h3>${l.label}</h3>
            ${l.level.subjects.map(s => `
            <div class="card" style="margin:6px 0;cursor:pointer;border:1px solid var(--border);" onclick="window._showSubjectTopics('${s.id}')">
                <strong>${escapeHtml(s.title)}</strong><span class="muted" style="float:right">${s.topics.length} topics</span>
                <div class="muted">${escapeHtml(s.short)}</div>
            </div>`).join('')}
        </div>`).join('');
    }, 50);
    return html;
}

export async function renderBookmarks() {
    const state = getState();
    const bookmarks = state.bookmarks || [];
    const items = bookmarks.map(b => findTopic(b)).filter(Boolean);
    return `
    <div class="view">
        <h1>Your Bookmarks</h1>
        ${items.length === 0 ? '<p class="muted">No bookmarks yet.</p>' : items.map(f => `
        <div class="card" style="cursor:pointer;margin-top:6px;" onclick="navigateTo('lesson',{topicId:'${f.topic.id}'})">
            <strong>${escapeHtml(f.topic.title)}</strong> <span class="tag">${f.topic.grade}</span>
            <p class="muted">${escapeHtml(f.subject.title)} • ${f.level.name}</p>
        </div>`).join('')}
    </div>`;
}

// Register global helpers
window._markLessonStatus = (topicId, status) => {
    markLessonStatus(topicId, status);
    navigateTo('lesson', { topicId });
};
window._toggleBookmark = (topicId) => {
    const result = toggleBookmark(topicId);
    alert(result === 'removed' ? 'Bookmark removed.' : 'Bookmarked!');
};
window._showSubjectTopics = (subjectId) => {
    const preview = document.getElementById('topicsPreview');
    if (!preview) return;
    let sub = null;
    for (const level of [CURRICULUM.primary, CURRICULUM.secondary]) {
        sub = level.subjects.find(s => s.id === subjectId);
        if (sub) break;
    }
    if (!sub) { preview.innerHTML = '<p class="muted">Subject not found.</p>'; return; }
    preview.innerHTML = `
    <h3>${escapeHtml(sub.title)}</h3><p class="muted">${escapeHtml(sub.short)}</p><hr class="divider">
    ${sub.topics.map(t => `
    <div class="card" style="margin:4px 0;cursor:pointer;display:flex;justify-content:space-between;align-items:center;" onclick="navigateTo('lesson',{topicId:'${t.id}'})">
        <div><strong>${escapeHtml(t.title)}</strong><span class="tag">${t.grade}</span></div>
        <button class="btn small">Open</button>
    </div>`).join('')}`;
};
window._renderSubjectsFiltered = function() {
    const q = (document.getElementById('filterQuery')?.value || '').toLowerCase();
    const listEl = document.getElementById('subjectsList');
    if (!listEl) return;
    const allTopics = getAllTopics({ query: q });
    const grouped = {};
    allTopics.forEach(({ topic, subject }) => {
        if (!grouped[subject.id]) grouped[subject.id] = { subject, topics: [] };
        grouped[subject.id].topics.push(topic);
    });
    listEl.innerHTML = Object.values(grouped).map(g => `
    <div class="card" style="margin-bottom:8px;"><h4>${escapeHtml(g.subject.title)}</h4>
        ${g.topics.map(t => `<div class="card" style="margin:4px 0;cursor:pointer;" onclick="navigateTo('lesson',{topicId:'${t.id}'})"><strong>${escapeHtml(t.title)}</strong> <span class="tag">${t.grade}</span></div>`).join('')}
    </div>`).join('') || '<p class="muted">No topics match your search.</p>';
};