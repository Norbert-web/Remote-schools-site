import { getState, saveState } from '../../core/state.js';
import { nowIso } from '../../utils/helpers.js';

export function markLessonStatus(topicId, status) {
    const state = getState();
    state.lessonsProgress = state.lessonsProgress || {};
    state.lessonsProgress[topicId] = state.lessonsProgress[topicId] || { viewed: 0, timeSpentSec: 0 };
    state.lessonsProgress[topicId].status = status;
    state.lessonsProgress[topicId].lastViewedAt = nowIso();
    if (status === 'done') {
        const today = new Date().toDateString();
        const last = state.streak?.lastStudyDate;
        if (last !== today) {
            state.streak = state.streak || { lastStudyDate: null, count: 0 };
            state.streak.count = (state.streak.count || 0) + 1;
            state.streak.lastStudyDate = today;
        }
    }
    saveState(state);
    document.dispatchEvent(new CustomEvent('achievement-check'));
    return state;
}

export function toggleBookmark(topicId) {
    const state = getState();
    state.bookmarks = state.bookmarks || [];
    const idx = state.bookmarks.indexOf(topicId);
    if (idx > -1) state.bookmarks.splice(idx, 1);
    else state.bookmarks.push(topicId);
    saveState(state);
    return idx > -1 ? 'removed' : 'added';
}