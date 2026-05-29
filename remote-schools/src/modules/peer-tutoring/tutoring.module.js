// src/modules/peer-tutoring/tutoring.module.js
import { getState, saveState } from '../../core/state.js';
import { uid } from '../../utils/helpers.js';

export function requestTutor(subject, topic) {
    const state = getState();
    state.tutoringRequests = state.tutoringRequests || [];
    state.tutoringRequests.push({ id: uid('tut'), subject, topic, status: 'pending', createdAt: new Date().toISOString() });
    saveState(state);
    return state.tutoringRequests;
}

export function getPendingRequests() {
    const state = getState();
    return (state.tutoringRequests || []).filter(r => r.status === 'pending');
}