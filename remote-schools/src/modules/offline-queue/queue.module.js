// src/modules/offline-queue/queue.module.js
import { enqueue, size, all } from './queue.manager.js';

export function initializeOfflineQueue() {
    window.addEventListener('offline', () => {
        console.log('Offline mode: actions will be queued.');
    });
    window.addEventListener('online', async () => {
        while (size() > 0) {
            const item = all()[0];
            try {
                // Process item
                console.log('Processing queued action:', item);
            } catch (e) {
                console.warn('Failed to process:', e);
            }
        }
    });
}