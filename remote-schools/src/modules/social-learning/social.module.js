// src/modules/social-learning/social.module.js
export function shareProgress() {
    const state = JSON.parse(localStorage.getItem('remote_schools_state_v2') || '{}');
    const completed = Object.values(state.lessonsProgress || {}).filter(p => p.status === 'done').length;
    const text = `I've completed ${completed} topics on Remote Schools! 🎓`;
    if (navigator.share) {
        navigator.share({ title: 'My Learning Progress', text, url: window.location.origin });
    } else {
        navigator.clipboard.writeText(text).then(() => alert('Progress copied to clipboard!'));
    }
}