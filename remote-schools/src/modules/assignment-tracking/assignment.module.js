// src/modules/assignment-tracking/assignment.module.js
import { getState, saveState } from '../../core/state.js';
import { uid, nowIso } from '../../utils/helpers.js';

export function createAssignment(title, subject, dueDate, priority = 'medium') {
    const state = getState();
    state.assignments = state.assignments || [];
    state.assignments.push({ id: uid('asgn'), title, subject, dueDate, priority, status: 'pending', createdAt: nowIso() });
    saveState(state);
}