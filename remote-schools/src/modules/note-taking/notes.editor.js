// src/modules/note-taking/notes.editor.js
import { getState, saveState } from '../../core/state.js';
import { uid } from '../../utils/helpers.js';

export function saveNote(topicId, content) {
    const state = getState();
    state.notes = state.notes || {};
    if (!state.notes[topicId]) state.notes[topicId] = [];
    state.notes[topicId].push({ id: uid('note'), content, createdAt: new Date().toISOString() });
    saveState(state);
}

export function getNotes(topicId) {
    const state = getState();
    return (state.notes && state.notes[topicId]) || [];
}