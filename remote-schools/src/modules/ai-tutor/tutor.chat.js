// src/modules/ai-tutor/tutor.chat.js
const RESPONSES = {
    'hello': 'Hello! I am your AI tutor. How can I help you with your studies today?',
    'help': 'I can help explain concepts, solve problems, and quiz you. Try asking about a specific topic!',
    'math': 'Mathematics is all about patterns and logic. What specific topic would you like to explore?',
    'science': 'Science helps us understand the world. Would you like to learn about biology, chemistry, or physics?',
    'default': 'That\'s an interesting question! Let me help you explore that topic. Can you be more specific?'
};

export function getResponse(input) {
    const lower = input.toLowerCase();
    for (const [key, response] of Object.entries(RESPONSES)) {
        if (lower.includes(key)) return response;
    }
    return RESPONSES['default'];
}