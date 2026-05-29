// src/modules/notifications/notification.module.js
import { requestPermission, sendNotification, scheduleReminder } from './notification.manager.js';

export async function initializeNotifications() {
    requestPermission();
    // Schedule daily study reminder
    const now = new Date();
    const next = new Date(now);
    next.setHours(18, 0, 0, 0);
    if (next < now) next.setDate(next.getDate() + 1);
    const delay = next - now;
    scheduleReminder('Study Time! 📚', 'Don\'t forget to complete a lesson today.', delay);
}

export function notifyAchievement(name) {
    sendNotification('Achievement Unlocked! 🏆', `You earned: ${name}`);
}