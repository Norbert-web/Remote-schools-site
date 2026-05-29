import { getState, saveState } from '../../core/state.js';
import { nowIso, secondsToHuman } from '../../utils/helpers.js';

let timerHandle = null;
let viewStart = null;
let activeTopicId = null;

export function startTimer(topicId) {
    stopTimer();
    activeTopicId = topicId;
    viewStart = Date.now();
    const state = getState();
    state.lessonsProgress = state.lessonsProgress || {};
    if (!state.lessonsProgress[topicId]) {
        state.lessonsProgress[topicId] = { status: 'not', viewed: 0, timeSpentSec: 0, lastViewedAt: null };
    }
    state.lessonsProgress[topicId].viewed += 1;
    state.lessonsProgress[topicId].lastViewedAt = nowIso();
    saveState(state);

    timerHandle = setInterval(() => {
        const elapsed = Math.floor((Date.now() - viewStart) / 1000);
        const prev = getState().lessonsProgress[topicId]?.timeSpentSec || 0;
        const el = document.getElementById('lessonTimeSpent');
        if (el) el.textContent = secondsToHuman(prev + elapsed);
    }, 1000);
}

export function stopTimer() {
    if (timerHandle) clearInterval(timerHandle);
    if (activeTopicId && viewStart) {
        const delta = Math.floor((Date.now() - viewStart) / 1000);
        const state = getState();
        state.lessonsProgress[activeTopicId] = state.lessonsProgress[activeTopicId] || { viewed: 0, timeSpentSec: 0 };
        state.lessonsProgress[activeTopicId].timeSpentSec = (state.lessonsProgress[activeTopicId].timeSpentSec || 0) + delta;
        state.lessonsProgress[activeTopicId].lastViewedAt = nowIso();
        saveState(state);
    }
    timerHandle = null;
    viewStart = null;
    activeTopicId = null;
}

export function getActiveTopic() { return activeTopicId; }