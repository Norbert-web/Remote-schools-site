import { bootstrap } from './core/app.js';
import { initNavLinks } from './ui/components.js';
import { initializeNotifications } from './modules/notifications/notification.module.js';
import { initializeSync } from './modules/offline-sync/sync.module.js';
import { initializeAdaptive } from './modules/adaptive-learning/adaptive.module.js';
import { initializeGamification } from './modules/gamification/gamification.module.js';
import { initializeOfflineQueue } from './modules/offline-queue/queue.module.js';

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await bootstrap();
    initNavLinks();

    // Initialize new features
    initializeNotifications();
    initializeSync();
    initializeAdaptive();
    initializeGamification();
    initializeOfflineQueue();

    console.log('🏫 Remote Schools — v2.0 Ready');
    console.log('   20+ features loaded lazily');
});