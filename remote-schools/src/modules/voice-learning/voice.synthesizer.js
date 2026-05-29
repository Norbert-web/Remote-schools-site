// src/modules/voice-learning/voice.synthesizer.js
let synth = null;

export function initializeVoice() {
    if ('speechSynthesis' in window) {
        synth = window.speechSynthesis;
    }
}

export function speak(text, lang = 'en-US') {
    if (!synth) { alert('Speech synthesis not supported.'); return; }
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9;
    synth.speak(utterance);
}

export function stopSpeaking() {
    if (synth) synth.cancel();
}