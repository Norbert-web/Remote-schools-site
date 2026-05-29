// src/modules/ai-tutor/tutor.module.js
import { getResponse } from './tutor.chat.js';
import { ICONS } from '../../ui/icons.js';
import { escapeHtml } from '../../utils/helpers.js';

export async function render() {
    return `
    <div class="view">
        <h1>${ICONS.ai} AI Tutor</h1>
        <div class="card" id="tutorChat" style="min-height:300px;display:flex;flex-direction:column;">
            <div id="tutorMessages" style="flex:1;overflow-y:auto;padding:8px;">
                <p class="muted">👋 Hello! I'm your AI study buddy. Ask me anything about your lessons!</p>
            </div>
            <div class="row" style="margin-top:8px;">
                <input id="tutorInput" class="search-input" style="flex:1;" placeholder="Ask a question...">
                <button class="btn" id="tutorSend">Send</button>
            </div>
        </div>
    </div>`;
}

// Initialize chat listeners after render
document.addEventListener('route-changed', (e) => {
    if (e.detail.view === 'ai-tutor') {
        setTimeout(() => {
            const input = document.getElementById('tutorInput');
            const msgs = document.getElementById('tutorMessages');
            const send = document.getElementById('tutorSend');
            if (send && input && msgs) {
                const handler = () => {
                    const text = input.value.trim();
                    if (!text) return;
                    msgs.innerHTML += `<p><strong>You:</strong> ${escapeHtml(text)}</p>`;
                    const reply = getResponse(text);
                    msgs.innerHTML += `<p style="color:var(--primary);"><strong>AI:</strong> ${reply}</p>`;
                    input.value = '';
                    msgs.scrollTop = msgs.scrollHeight;
                };
                send.onclick = handler;
                input.onkeydown = (ev) => { if (ev.key === 'Enter') handler(); };
            }
        }, 200);
    }
});