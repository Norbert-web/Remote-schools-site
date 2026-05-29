// src/modules/certification/certificate.generator.js
import { getState } from '../../core/state.js';

export function generateCertificate(subject) {
    const state = getState();
    const completed = Object.values(state.lessonsProgress || {}).filter(p => p.status === 'done').length;
    if (completed < 5) { alert('Complete at least 5 topics to earn a certificate.'); return null; }
    return {
        name: state.profile?.name || 'Learner',
        subject: subject || 'General Studies',
        completedTopics: completed,
        date: new Date().toLocaleDateString('en-UG'),
        id: 'CERT-' + Date.now().toString(36).toUpperCase()
    };
}