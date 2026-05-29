// src/modules/study-schedule/schedule.reminder.js
import { getState } from '../../core/state.js';

export function checkSchedule() {
    const state = getState();
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const time = now.toTimeString().slice(0, 5);
    const slots = (state.schedule || []).filter(s => s.active && s.dayOfWeek === day && s.time === time);
    slots.forEach(s => {
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Study Time!', { body: `Time to study ${s.subject} for ${s.durationMin} minutes.` });
        }
    });
}