// src/modules/certification/certificate.module.js
import { ICONS } from '../../ui/icons.js';
import { generateCertificate } from './certificate.generator.js';
import { getState } from '../../core/state.js';

export async function render() {
    const state = getState();
    const completed = Object.values(state.lessonsProgress || {}).filter(p => p.status === 'done').length;
    return `
    <div class="view">
        <h1>${ICONS.certificate} Certification</h1>
        <div class="card">
            <h3>Earn Certificates</h3>
            <p>Topics completed: <strong>${completed}</strong></p>
            <div class="progress-bar"><div class="progress-inner" style="width:${Math.min(completed * 2, 100)}%"></div></div>
            <p class="muted" style="margin-top:4px;">Need 50+ topics for a full certificate.</p>
            <button class="btn" style="margin-top:8px;" onclick="const cert=generateCertificate('Mathematics');if(cert)alert('Certificate generated for '+cert.name+'! ID: '+cert.id)">Generate Certificate</button>
        </div>
    </div>`;
}