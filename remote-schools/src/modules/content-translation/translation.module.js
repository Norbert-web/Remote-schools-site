// src/modules/content-translation/translation.module.js
import { ICONS } from '../../ui/icons.js';
import { translate } from './translation.engine.js';

export async function render() {
    const sample = translate('Welcome to Remote Schools', 'sw');
    return `
    <div class="view">
        <h1>${ICONS.translate} Content Translation</h1>
        <div class="card">
            <h3>Local Language Support</h3>
            <p>Example: "Welcome to Remote Schools" → <strong>${sample}</strong> (Kiswahili)</p>
            <p class="muted">Full translation engine coming soon for Luganda, Runyankole, and more.</p>
        </div>
    </div>`;
}