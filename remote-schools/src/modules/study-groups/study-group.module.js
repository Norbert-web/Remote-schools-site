// src/modules/study-groups/study-group.module.js
import { getState, saveState } from '../../core/state.js';
import { uid } from '../../utils/helpers.js';

export function createGroup(name, subject, maxMembers = 10) {
    const state = getState();
    state.studyGroups = state.studyGroups || [];
    const group = { id: uid('sg'), name, subject, members: [state.profile?.name || 'You'], maxMembers, createdAt: new Date().toISOString() };
    state.studyGroups.push(group);
    saveState(state);
    return group;
}

export function joinGroup(groupId) {
    const state = getState();
    state.studyGroups = state.studyGroups || [];
    const group = state.studyGroups.find(g => g.id === groupId);
    if (group && group.members.length < group.maxMembers) {
        group.members.push(state.profile?.name || 'Guest');
        saveState(state);
    }
}