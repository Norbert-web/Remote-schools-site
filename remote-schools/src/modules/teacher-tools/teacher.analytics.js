// src/modules/teacher-tools/teacher.analytics.js
import { getState } from '../../core/state.js';

export function getClassAnalytics() {
    const state = getState();
    const attempts = state.attempts || [];
    const quizAttempts = attempts.filter(a => a.type === 'quiz');
    const avgScore = quizAttempts.length > 0 ? Math.round(quizAttempts.reduce((s, a) => s + (a.score || 0), 0) / quizAttempts.length) : 0;
    const topicsCompleted = Object.values(state.lessonsProgress || {}).filter(p => p.status === 'done').length;
    return { totalQuizzes: quizAttempts.length, avgScore, topicsCompleted };
}