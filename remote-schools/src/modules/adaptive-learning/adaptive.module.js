// src/modules/adaptive-learning/adaptive.module.js
import { getRecommendedTopics } from './adaptive.engine.js';

export function initializeAdaptive() {
    document.addEventListener('route-changed', (e) => {
        if (e.detail.view === 'home' || e.detail.view === 'dashboard') {
            const recommendations = getRecommendedTopics(3);
            const container = document.getElementById('adaptiveRecommendations');
            if (container && recommendations.length) {
                container.innerHTML = recommendations.map(r => `
                <div class="card" style="cursor:pointer;margin:4px 0;" onclick="navigateTo('lesson',{topicId:'${r.topic.id}'})">
                    <strong>${r.topic.title}</strong> <span class="badge">Recommended</span>
                    <p class="muted">${r.subject.title} • ${r.topic.grade}</p>
                </div>`).join('');
            }
        }
    });
}