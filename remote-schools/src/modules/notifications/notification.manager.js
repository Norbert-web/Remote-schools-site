// src/modules/notifications/notification.manager.js
export function requestPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

export function sendNotification(title, body, icon = '/public/icons/app-icon-192.png') {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(title, { body, icon });
    }
}

export function scheduleReminder(title, body, delayMs) {
    setTimeout(() => sendNotification(title, body), delayMs);
}