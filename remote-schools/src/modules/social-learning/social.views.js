// src/modules/social-learning/social.views.js
import { ICONS } from '../../ui/icons.js';

export async function render() {
    return `
    <div class="view">
        <h1>${ICONS.community} Social Learning</h1>
        <div class="card">
            <h3>Share Your Progress</h3>
            <button class="btn" onclick="import('../modules/social-learning/social.module.js').then(m=>m.shareProgress())">Share Now</button>
        </div>
    </div>`;
}