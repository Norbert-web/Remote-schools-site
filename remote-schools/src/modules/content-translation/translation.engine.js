// src/modules/content-translation/translation.engine.js
const TRANSLATIONS = {
    'Welcome to Remote Schools': { 'sw': 'Karibu Shule za Mbali', 'lg': 'Tukusanyukira ku Masomero ga Wala' },
    'Start Learning': { 'sw': 'Anza Kujifunza', 'lg': 'Tandika Okusoma' },
    'Mathematics': { 'sw': 'Hisabati', 'lg': 'Okubala' },
    'Science': { 'sw': 'Sayansi', 'lg': 'Sayansi' },
};

export function translate(text, targetLang = 'sw') {
    return TRANSLATIONS[text]?.[targetLang] || text;
}