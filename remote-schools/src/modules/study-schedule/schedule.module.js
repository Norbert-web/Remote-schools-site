// src/modules/study-schedule/schedule.module.js
import { getState, saveState } from '../../core/state.js';
import { uid } from '../../utils/helpers.js';

export function createScheduleSlot(subject, dayOfWeek, time, durationMin) {
    const state = getState();
    state.schedule = state.schedule || [];
    state.schedule.push({ id: uid('sch'), subject, dayOfWeek, time, durationMin, active: true });
    saveState(state);
}