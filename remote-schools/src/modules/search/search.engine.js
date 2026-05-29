// src/modules/search/search.engine.js
import { getAllTopics } from '../../data/curriculum.js';

export function fullTextSearch(query, options = {}) {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    let results = getAllTopics({ query: q });
    // Rank by relevance
    results = results.map(r => {
        let score = 0;
        const title = r.topic.title.toLowerCase();
        const subject = r.subject.title.toLowerCase();
        if (title === q) score += 100;
        else if (title.startsWith(q)) score += 50;
        else if (title.includes(q)) score += 30;
        if (subject.includes(q)) score += 20;
        if (r.topic.grade.toLowerCase() === q) score += 40;
        return { ...r, score };
    });
    results.sort((a, b) => b.score - a.score);
    if (options.maxResults) results = results.slice(0, options.maxResults);
    return results;
}