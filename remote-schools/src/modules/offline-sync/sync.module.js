// src/modules/offline-sync/sync.module.js
import { processSync, loadQueue } from './sync.engine.js';

export async function initializeSync() {
    loadQueue();
    window.addEventListener('online', () => processSync());
    if (navigator.onLine) await processSync();
}

export function getPendingCount() {
    return loadQueue().length;
}