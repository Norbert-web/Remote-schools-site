import { STORAGE_KEY } from './constants.js';

const DEFAULT_STATE = {
    profile: null,
    theme: 'auto',
    fontSize: 15,
    lessonsProgress: {},
    exercises: [],
    attempts: [],
    flashcards: [],
    bookmarks: [],
    streak: { lastStudyDate: null, count: 0 },
    achievements: [],
    created_at: new Date().toISOString()
};

let _state = null;

export function loadState() {
    if (_state) return _state;
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            _state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        } else {
            _state = Object.assign(JSON.parse(JSON.stringify(DEFAULT_STATE)), JSON.parse(raw));
        }
    } catch (e) {
        _state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
    return _state;
}

export function saveState(state = _state) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        _state = state;
    } catch (e) {
        console.warn('Failed to save state:', e);
    }
}

export function getState() {
    return _state || loadState();
}

export function resetState() {
    _state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    saveState(_state);
}