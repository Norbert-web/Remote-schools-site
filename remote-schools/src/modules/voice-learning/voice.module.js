// src/modules/voice-learning/voice.module.js
import { initializeVoice, speak, stopSpeaking } from './voice.synthesizer.js';
import { ICONS } from '../../ui/icons.js';

let initialized = false;

export async function render() {
    if (!initialized) { initializeVoice();
        initialized = true; }
    return `
    <div class="view">
        <h1>${ICONS.voice} Voice Learning</h1>
        <div class="card">
            <h3>Text-to-Speech Reader</h3>
            <textarea id="voiceText" class="search-input" style="width:100%;min-height:120px;" placeholder="Paste lesson text here..."></textarea>
            <div class="row" style="margin-top:8px;">
                <button class="btn" onclick="import('../modules/voice-learning/voice.synthesizer.js').then(m=>m.speak(document.getElementById('voiceText').value))">Speak</button>
                <button class="btn ghost" onclick="import('../modules/voice-learning/voice.synthesizer.js').then(m=>m.stopSpeaking())">Stop</button>
            </div>
        </div>
    </div>`;
}