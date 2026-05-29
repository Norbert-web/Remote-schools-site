// src/modules/offline-queue/queue.manager.js
let queue = JSON.parse(localStorage.getItem('rs_offline_queue') || '[]');

export function enqueue(action) {
    queue.push({ ...action, queuedAt: Date.now() });
    persistQueue();
}

export function dequeue() {
    const item = queue.shift();
    persistQueue();
    return item;
}

export function peek() { return queue[0]; }
export function size() { return queue.length; }
export function all() { return [...queue]; }

function persistQueue() {
    try { localStorage.setItem('rs_offline_queue', JSON.stringify(queue)); } catch (e) {}
}