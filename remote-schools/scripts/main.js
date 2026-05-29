        (function() {
            // ──────────────────────────────────────────────
            // REMOTE SCHOOLS — Complete E‑Learning Platform
            // ──────────────────────────────────────────────
            const STORAGE_KEY = 'remote_schools_state_v1';
            const APP_NAME = 'Remote Schools';
            const TAGLINE = 'lamn nobert\'s';

            // ── SVG ICONS ──────────────────────────────
            const ICONS = {
                home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 11.5L12 4l9 7.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="5" y="13" width="14" height="8" rx="1" fill="none" stroke="currentColor"/></svg>',
                subjects: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
                lesson: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
                exercises: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M9 12h6M12 9v6"/></svg>',
                quizzes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="13" y2="14"/></svg>',
                pastpapers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
                analytics: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
                dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/></svg>',
                profile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>',
                settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
                help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
                community: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
                flashcards: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="14" height="14" rx="2"/><line x1="8" y1="9" x2="14" y2="9"/><line x1="8" y1="13" x2="12" y2="13"/><rect x="13" y="3" width="8" height="12" rx="1.5" fill="var(--card)" stroke="currentColor"/></svg>',
                bookmarks: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
                achievements: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>',
                privacy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
                search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="10" cy="10" r="7"/><line x1="16" y1="16" x2="22" y2="22"/></svg>',
                close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
                check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>',
                play: '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
                clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
                star: '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
            };

            // ── STATE ────────────────────────────────
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

            function loadState() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEY);
                    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_STATE));
                    return Object.assign(JSON.parse(JSON.stringify(DEFAULT_STATE)), JSON.parse(raw));
                } catch (e) { return JSON.parse(JSON.stringify(DEFAULT_STATE)); }
            }

            function saveState(s) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch (e) {} }
            let STATE = loadState();

            // ── CURRICULUM DATA ─────────────────────
            const CURRICULUM = {
                primary: {
                    name: 'Primary (P1–P7)',
                    grades: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7'],
                    subjects: [
                        { id: 'p_literacy', title: 'Literacy', short: 'Reading & Writing', topics: [
                                { id: 'lit_p1_abc', title: 'Alphabet & Phonics', grade: 'P1',
                                    lesson: '<p>Learn the 26 letters of the alphabet and their sounds.</p>',
                                    objectives: ['Recognize all letters', 'Match sounds to letters'],
                                    exercises: [{ id: 'ex_lit_1', type: 'mcq', q: 'What letter comes after A?',
                                        choices: ['B', 'C', 'D'], answer: 0 }] }, { id: 'lit_p3_comp', title: 'Reading Comprehension',
                                    grade: 'P3', lesson: '<p>Read short passages and answer questions about them.</p>',
                                    objectives: ['Read fluently', 'Answer comprehension questions'], exercises: [] }
                            ] }, { id: 'p_math', title: 'Mathematics', short: 'Numbers & Operations', topics: [
                                { id: 'math_p1_count', title: 'Counting 1–100', grade: 'P1',
                                    lesson: '<p>Count objects and write numbers from 1 to 100.</p>',
                                    objectives: ['Count to 100', 'Write numbers correctly'],
                                    exercises: [{ id: 'ex_math_p1_1', type: 'mcq', q: 'What is 5 + 3?', choices: ['7', '8', '9'],
                                        answer: 1 }] }, { id: 'math_p4_mult', title: 'Multiplication Tables', grade: 'P4',
                                    lesson: '<p>Master times tables from 1×1 to 12×12.</p>', objectives: [
                                        'Recite times tables', 'Solve multiplication problems'
                                    ], exercises: [] }
                            ] }, { id: 'p_science', title: 'Science', short: 'Living & Non-living', topics: [
                                { id: 'sci_p3_plants', title: 'Plants & Their Parts', grade: 'P3',
                                    lesson: '<p>Identify roots, stems, leaves, and flowers and their functions.</p>',
                                    objectives: ['Name plant parts', 'Explain functions'], exercises: [] }
                            ] }, { id: 'p_sst', title: 'Social Studies', short: 'Community & Environment', topics: [
                                { id: 'sst_p4_uganda', title: 'Uganda Districts', grade: 'P4',
                                    lesson: '<p>Learn the districts of Uganda and their capitals.</p>',
                                    objectives: ['Name major districts', 'Locate on map'], exercises: [] }
                            ] }, { id: 'p_english', title: 'English', short: 'Grammar & Writing', topics: [
                                { id: 'eng_p5_tenses', title: 'Verb Tenses', grade: 'P5',
                                    lesson: '<p>Understand past, present, and future tenses.</p>',
                                    objectives: ['Identify tenses', 'Use correct tense in sentences'], exercises: [] }
                            ] }
                    ]
                },
                secondary: {
                    name: 'Secondary (S1–S6)',
                    grades: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
                    subjects: [
                        { id: 's_math', title: 'Mathematics', short: 'Algebra, Geometry & Calculus', topics: [
                                { id: 'math_s1_sets', title: 'Sets & Venn Diagrams', grade: 'S1',
                                    lesson: '<p>Sets are collections of distinct objects. Use Venn diagrams to show relationships between sets.</p>',
                                    objectives: ['Define sets', 'Use Venn diagrams', 'Find unions & intersections'],
                                    exercises: [{ id: 'ex_sets_1', type: 'mcq', q: 'What is {1,2} ∪ {2,3}?',
                                        choices: ['{1,2,3}', '{2}', '{1,3}'], answer: 0 }] }, { id: 'math_s2_alg',
                                    title: 'Linear Equations', grade: 'S2',
                                    lesson: '<p>Solve equations of the form ax + b = c by isolating the variable.</p>',
                                    objectives: ['Solve 1-step equations', 'Solve 2-step equations'],
                                    exercises: [{ id: 'ex_alg_1', type: 'mcq', q: 'Solve: 2x + 3 = 9',
                                        choices: ['x=3', 'x=6', 'x=2'], answer: 0 }] }, { id: 'math_s4_calc',
                                    title: 'Introduction to Calculus', grade: 'S4',
                                    lesson: '<p>Understand limits, derivatives, and their applications.</p>',
                                    objectives: ['Find limits', 'Compute basic derivatives'], exercises: [] }
                            ] }, { id: 's_bio', title: 'Biology', short: 'Cells, Organisms & Ecology', topics: [
                                { id: 'bio_s1_cells', title: 'Cell Structure', grade: 'S1',
                                    lesson: '<p>Cells are the basic units of life. Learn about organelles and their functions.</p>',
                                    objectives: ['Identify organelles', 'Compare plant & animal cells'],
                                    exercises: [{ id: 'ex_bio_1', type: 'mcq', q: 'Which organelle produces energy?',
                                        choices: ['Nucleus', 'Mitochondria', 'Ribosome'], answer: 1 }] },
                                { id: 'bio_s3_ecology', title: 'Ecosystems', grade: 'S3',
                                    lesson: '<p>Study food chains, habitats, and environmental interactions.</p>',
                                    objectives: ['Define ecosystem', 'Draw food webs'], exercises: [] }
                            ] }, { id: 's_chem', title: 'Chemistry', short: 'Matter & Reactions', topics: [
                                { id: 'chem_s2_atoms', title: 'Atomic Structure', grade: 'S2',
                                    lesson: '<p>Atoms consist of protons, neutrons, and electrons arranged in shells.</p>',
                                    objectives: ['Know subatomic particles', 'Write electron configurations'],
                                    exercises: [] }, { id: 'chem_s4_organic', title: 'Organic Chemistry', grade: 'S4',
                                    lesson: '<p>Study carbon compounds including alkanes, alkenes, and functional groups.</p>',
                                    objectives: ['Name organic compounds', 'Understand isomerism'], exercises: [] }
                            ] }, { id: 's_phy', title: 'Physics', short: 'Forces, Motion & Energy', topics: [
                                { id: 'phy_s2_motion', title: 'Motion & Speed', grade: 'S2',
                                    lesson: '<p>Speed = distance ÷ time. Velocity includes direction.</p>',
                                    objectives: ['Calculate speed', 'Distinguish speed & velocity'],
                                    exercises: [{ id: 'ex_phy_1', type: 'mcq',
                                        q: 'A car travels 100km in 2 hours. Its speed is?', choices: ['50 km/h',
                                            '100 km/h', '200 km/h'
                                        ], answer: 0 }] }, { id: 'phy_s5_waves', title: 'Waves & Optics',
                                    grade: 'S5', lesson: '<p>Understand wave properties, reflection, and refraction.</p>',
                                    objectives: ['Define wavelength', 'Apply Snell\'s law'], exercises: [] }
                            ] }, { id: 's_geo', title: 'Geography', short: 'Maps, Climate & Landforms', topics: [
                                { id: 'geo_s1_maps', title: 'Map Reading Skills', grade: 'S1',
                                    lesson: '<p>Learn to read map scales, contours, and symbols.</p>',
                                    objectives: ['Use map scale', 'Interpret contours'], exercises: [] },
                                { id: 'geo_s3_climate', title: 'Climate & Weather', grade: 'S3',
                                    lesson: '<p>Understand Uganda\'s climate zones and weather patterns.</p>',
                                    objectives: ['Describe climate types', 'Read weather charts'], exercises: [] }
                            ] }, { id: 's_hist', title: 'History', short: 'Uganda & World History', topics: [
                                { id: 'hist_s2_uganda', title: 'Colonial Uganda', grade: 'S2',
                                    lesson: '<p>Uganda became a British protectorate in 1894 and gained independence in 1962.</p>',
                                    objectives: ['Know key dates', 'Identify independence leaders'],
                                    exercises: [] }, { id: 'hist_s4_global', title: 'World Wars', grade: 'S4',
                                    lesson: '<p>Study causes and effects of World War I and II on Africa.</p>',
                                    objectives: ['Explain causes', 'Analyze impact on Uganda'], exercises: [] }
                            ] }, { id: 's_ict', title: 'ICT', short: 'Computing & Digital Skills', topics: [
                                { id: 'ict_s1_basics', title: 'Computer Basics', grade: 'S1',
                                    lesson: '<p>Learn about CPU, RAM, storage devices, and input/output peripherals.</p>',
                                    objectives: ['Identify computer parts', 'Understand functions'],
                                    exercises: [{ id: 'ex_ict_1', type: 'mcq', q: 'What does CPU stand for?',
                                        choices: ['Central Processing Unit', 'Computer Personal Unit',
                                            'Central Program Utility'
                                        ], answer: 0 }] }, { id: 'ict_s3_prog', title: 'Introduction to Programming',
                                    grade: 'S3', lesson: '<p>Write simple programs using Scratch and Python.</p>',
                                    objectives: ['Create algorithms', 'Write basic code'], exercises: [] }
                            ] }, { id: 's_eng', title: 'English Literature', short: 'Grammar, Comprehension & Lit',
                            topics: [
                                { id: 'eng_s1_grammar', title: 'Advanced Grammar', grade: 'S1',
                                    lesson: '<p>Master parts of speech, sentence structure, and punctuation.</p>',
                                    objectives: ['Identify clauses', 'Use correct punctuation'], exercises: [] },
                                { id: 'eng_s4_lit', title: 'Literary Analysis', grade: 'S4',
                                    lesson: '<p>Analyze themes, characters, and literary devices in set texts.</p>',
                                    objectives: ['Identify themes', 'Write analytical essays'], exercises: [] }
                            ] }, { id: 's_ent', title: 'Entrepreneurship', short: 'Business & Innovation',
                            topics: [
                                { id: 'ent_s3_biz', title: 'Starting a Business', grade: 'S3',
                                    lesson: '<p>Learn business planning, budgeting, and market research basics.</p>',
                                    objectives: ['Write a business plan', 'Understand budgeting'], exercises: [] }
                            ] }
                    ]
                }
            };

            // ── UTILITY FUNCTIONS ────────────────────
            function escapeHtml(s) { return String(s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;',
                    '"': '&quot;', "'": '&#39;' })[m]); }

            function nowIso() { return new Date().toISOString(); }

            function uid(p = 'id') { return p + '_' + Date.now() + '_' + Math.floor(Math.random() * 10000); }

            function secondsToHuman(s) {
                if (!s || s < 1) return '0s';
                const h = Math.floor(s / 3600),
                    m = Math.floor((s % 3600) / 60),
                    sec = s % 60;
                return (h ? h + 'h ' : '') + (m ? m + 'm ' : '') + sec + 's';
            }
            const $ = (sel) => document.querySelector(sel);
            const $$ = (sel) => document.querySelectorAll(sel);

            // ── VIEW MANAGEMENT (Lazy Loading) ──────
            const VIEWS = {};
            let currentView = 'home';
            let viewParams = {};

            function registerView(name, renderFn) { VIEWS[name] = renderFn; }

            function navigateTo(viewName, params = {}) {
                stopLessonTimer();
                currentView = viewName;
                viewParams = params;
                const container = $('#viewContainer');
                if (!container) return;
                if (VIEWS[viewName]) {
                    container.innerHTML = VIEWS[viewName](params);
                } else {
                    container.innerHTML =
                        '<div class="card"><h2>Page not found</h2><p class="muted">The requested page could not be loaded.</p></div>';
                }
                updateNavActive(viewName);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            function updateNavActive(viewName) {
                $$('.nav-btn').forEach(b => b.classList.remove('active'));
                const btn = $(`.nav-btn[data-view="${viewName}"]`);
                if (btn) btn.classList.add('active');
            }

            // ── LESSON TIMER ─────────────────────────
            let lessonTimerHandle = null;
            let lessonViewStart = null;
            let currentTopicId = null;

            function startLessonTimer(topicId) {
                stopLessonTimer();
                currentTopicId = topicId;
                lessonViewStart = Date.now();
                STATE.lessonsProgress = STATE.lessonsProgress || {};
                if (!STATE.lessonsProgress[topicId]) STATE.lessonsProgress[topicId] = { status: 'not', viewed: 0,
                    timeSpentSec: 0, lastViewedAt: null };
                STATE.lessonsProgress[topicId].viewed += 1;
                STATE.lessonsProgress[topicId].lastViewedAt = nowIso();
                saveState(STATE);
                lessonTimerHandle = setInterval(() => {
                    const elapsed = Math.floor((Date.now() - lessonViewStart) / 1000);
                    const prev = STATE.lessonsProgress[topicId]?.timeSpentSec || 0;
                    const el = $('#lessonTimeSpent');
                    if (el) el.textContent = secondsToHuman(prev + elapsed);
                }, 1000);
            }

            function stopLessonTimer() {
                if (lessonTimerHandle) clearInterval(lessonTimerHandle);
                if (currentTopicId && lessonViewStart) {
                    const delta = Math.floor((Date.now() - lessonViewStart) / 1000);
                    STATE.lessonsProgress[currentTopicId] = STATE.lessonsProgress[currentTopicId] || { viewed: 0,
                        timeSpentSec: 0 };
                    STATE.lessonsProgress[currentTopicId].timeSpentSec = (STATE.lessonsProgress[currentTopicId]
                        .timeSpentSec || 0) + delta;
                    STATE.lessonsProgress[currentTopicId].lastViewedAt = nowIso();
                    saveState(STATE);
                }
                lessonTimerHandle = null;
                lessonViewStart = null;
                currentTopicId = null;
            }

            // ── FIND TOPIC HELPERS ──────────────────
            function findTopic(topicId) {
                for (const level of [CURRICULUM.primary, CURRICULUM.secondary]) {
                    for (const sub of level.subjects) {
                        const t = sub.topics.find(t => t.id === topicId);
                        if (t) return { topic: t, subject: sub, level };
                    }
                }
                return null;
            }

            function getAllTopics(filters = {}) {
                const results = [];
                for (const level of [CURRICULUM.primary, CURRICULUM.secondary]) {
                    if (filters.level && filters.level !== (level === CURRICULUM.primary ? 'primary' : 'secondary'))
                        continue;
                    for (const sub of level.subjects) {
                        if (filters.subjectId && filters.subjectId !== sub.id) continue;
                        for (const t of sub.topics) {
                            if (filters.grade && t.grade !== filters.grade) continue;
                            if (filters.query && !t.title.toLowerCase().includes(filters.query.toLowerCase()) && !sub
                                .title.toLowerCase().includes(filters.query.toLowerCase())) continue;
                            results.push({ topic: t, subject: sub, level });
                        }
                    }
                }
                return results;
            }

            // ── MODAL ────────────────────────────────
            function openModal(htmlContent) {
                const overlay = $('#modalOverlay');
                const panel = $('#modalPanel');
                if (!overlay || !panel) return;
                panel.innerHTML = htmlContent;
                overlay.classList.remove('hidden');
                overlay.setAttribute('aria-hidden', 'false');
            }

            function closeModal() {
                const overlay = $('#modalOverlay');
                if (overlay) { overlay.classList.add('hidden');
                    overlay.setAttribute('aria-hidden', 'true'); }
            }
            $('#modalOverlay')?.addEventListener('click', function(e) { if (e.target === this) closeModal(); });
            document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

            // ── THEME ────────────────────────────────
            function applyTheme() {
                const theme = STATE.theme || 'auto';
                if (theme === 'auto') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    document.body.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
                } else {
                    document.body.setAttribute('data-theme', theme);
                }
                document.documentElement.style.setProperty('--fs', (STATE.fontSize || 15) + 'px');
            }

            // ── ACHIEVEMENTS ─────────────────────────
            function checkAchievements() {
                const completed = Object.values(STATE.lessonsProgress || {}).filter(p => p.status === 'done').length;
                const quizAttempts = (STATE.attempts || []).filter(a => a.type === 'quiz').length;
                const ach = STATE.achievements || [];
                const newAch = [];
                const addIfNew = (id, name, icon) => { if (!ach.find(a => a.id === id)) { ach.push({ id, name, icon,
                        earnedAt: nowIso() });
                        newAch.push(name); } };
                if (completed >= 1) addIfNew('first_lesson', 'First Lesson Completed', '📖');
                if (completed >= 10) addIfNew('10_lessons', '10 Lessons Completed', '📚');
                if (completed >= 25) addIfNew('25_lessons', 'Scholar Badge', '🎓');
                if (quizAttempts >= 1) addIfNew('first_quiz', 'First Quiz Taken', '📝');
                if (quizAttempts >= 5) addIfNew('5_quizzes', 'Quiz Master Bronze', '🥉');
                STATE.achievements = ach;
                saveState(STATE);
                if (newAch.length) {
                    setTimeout(() => alert('🏆 Achievement unlocked: ' + newAch.join(', ')), 400);
                }
            }

            // ── REGISTER ALL VIEWS ───────────────────
            // 1. HOME
            registerView('home', () => {
                const completed = Object.values(STATE.lessonsProgress || {}).filter(p => p.status === 'done').length;
                const totalTopics = getAllTopics().length;
                const pct = totalTopics > 0 ? Math.round((completed / totalTopics) * 100) : 0;
                const streakCount = STATE.streak?.count || 0;
                return `
            <div class="view">
              <div class="grid-2">
                <div class="card" style="grid-column:1/-1;background:linear-gradient(135deg,var(--primary),var(--primary-light));color:#fff;border:none;">
                  <h1 style="font-size:1.8rem;margin-bottom:4px;">Welcome to Remote Schools</h1>
                  <p style="opacity:0.9;">Free, offline‑first e‑learning for the Uganda curriculum — Primary & Secondary</p>
                  <div class="row" style="margin-top:14px;gap:8px;">
                    <button class="btn" style="background:#fff;color:var(--primary);" onclick="navigateTo('subjects')">Browse Subjects</button>
                    <button class="btn outline" style="border-color:#fff;color:#fff;" onclick="navigateTo('dashboard')">Your Dashboard</button>
                    <button class="btn outline" style="border-color:#fff;color:#fff;" onclick="navigateTo('pastpapers')">Past Papers</button>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header"><h3>Quick Actions</h3></div>
                  <div class="col" style="gap:6px;">
                    <button class="btn small" onclick="navigateTo('exercises')">${ICONS.exercises} Practice Exercises</button>
                    <button class="btn small outline" onclick="navigateTo('quizzes')">${ICONS.quizzes} Take a Quiz</button>
                    <button class="btn small outline" onclick="navigateTo('flashcards')">${ICONS.flashcards} Study Flashcards</button>
                    <button class="btn small ghost" onclick="navigateTo('community')">${ICONS.community} Community Forum</button>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header"><h3>Your Progress</h3><span class="badge">${pct}%</span></div>
                  <div class="progress-bar"><div class="progress-inner" style="width:${pct}%"></div></div>
                  <p class="muted" style="margin-top:8px;">Completed: <strong>${completed}</strong> / ${totalTopics} topics</p>
                  <p class="muted">Streak: <strong>${streakCount}</strong> days 🔥</p>
                  <button class="btn small" style="margin-top:8px;" onclick="navigateTo('analytics')">View Analytics</button>
                </div>
              </div>
              <div class="grid-3" style="margin-top:16px;">
                <div class="card" style="cursor:pointer" onclick="navigateTo('subjects',{level:'primary'})">
                  <h3>🎒 Primary (P1–P7)</h3><p class="muted">Literacy, Math, Science, SST, English & more</p>
                  <span class="badge">${CURRICULUM.primary.subjects.length} subjects</span>
                </div>
                <div class="card" style="cursor:pointer" onclick="navigateTo('subjects',{level:'secondary'})">
                  <h3>🏫 Secondary (S1–S6)</h3><p class="muted">Math, Biology, Chemistry, Physics, History, ICT & more</p>
                  <span class="badge accent">${CURRICULUM.secondary.subjects.length} subjects</span>
                </div>
                <div class="card" style="cursor:pointer" onclick="navigateTo('achievements')">
                  <h3>🏆 Achievements</h3><p class="muted">Badges & milestones you've earned</p>
                  <span class="badge warning">${(STATE.achievements||[]).length} earned</span>
                </div>
              </div>
            </div>`;
            });

            // 2. SUBJECTS
            registerView('subjects', (params = {}) => {
                const levelFilter = params.level || '';
                let html = '<div class="view"><div class="card-header"><h1>Browse Subjects</h1><div class="row">';
                html +=
                    `<select id="filterLevel" class="search-input" style="width:140px" onchange="navigateTo('subjects',{level:this.value})"><option value="">All Levels</option><option value="primary" ${levelFilter==='primary'?'selected':''}>Primary</option><option value="secondary" ${levelFilter==='secondary'?'selected':''}>Secondary</option></select>`;
                html +=
                    '<input id="filterQuery" class="search-input" style="width:200px" placeholder="Filter topics..." oninput="renderSubjectsFiltered()">';
                html += '</div></div><div class="grid-2" style="margin-top:12px"><div id="subjectsList"></div><div id="topicsPreview" class="card"><p class="muted">Select a subject to see its topics.</p></div></div></div>';
                setTimeout(() => {
                    const listEl = $('#subjectsList');
                    if (!listEl) return;
                    const levels = [];
                    if (!levelFilter || levelFilter === 'primary') levels.push({ level: CURRICULUM.primary,
                        label: 'Primary (P1–P7)' });
                    if (!levelFilter || levelFilter === 'secondary') levels.push({ level: CURRICULUM.secondary,
                        label: 'Secondary (S1–S6)' });
                    listEl.innerHTML = levels.map(l => `
                <div class="card" style="margin-bottom:10px;"><h3>${l.label}</h3>
                  ${l.level.subjects.map(s=>`
                    <div class="card" style="margin:6px 0;cursor:pointer;border:1px solid var(--border);" onclick="showSubjectTopics('${s.id}')">
                      <strong>${escapeHtml(s.title)}</strong><span class="muted" style="float:right">${s.topics.length} topics</span>
                      <div class="muted">${escapeHtml(s.short)}</div>
                    </div>`).join('')}
                </div>`).join('');
                }, 50);
                return html;
            });

            window.showSubjectTopics = function(subjectId) {
                const preview = $('#topicsPreview');
                if (!preview) return;
                let sub = null;
                for (const level of [CURRICULUM.primary, CURRICULUM.secondary]) {
                    sub = level.subjects.find(s => s.id === subjectId);
                    if (sub) break;
                }
                if (!sub) { preview.innerHTML = '<p class="muted">Subject not found.</p>'; return; }
                preview.innerHTML = `
              <h3>${escapeHtml(sub.title)}</h3><p class="muted">${escapeHtml(sub.short)}</p><hr class="divider">
              ${sub.topics.map(t=>`
                <div class="card" style="margin:4px 0;cursor:pointer;display:flex;justify-content:space-between;align-items:center;" onclick="navigateTo('lesson',{topicId:'${t.id}'})">
                  <div><strong>${escapeHtml(t.title)}</strong><span class="tag">${t.grade}</span></div>
                  <button class="btn small">Open</button>
                </div>`).join('')}`;
            };
            window.renderSubjectsFiltered = function() {
                const q = ($('#filterQuery')?.value || '').toLowerCase();
                const listEl = $('#subjectsList');
                if (!listEl) return;
                const allTopics = getAllTopics({ query: q });
                const grouped = {};
                allTopics.forEach(({ topic, subject }) => {
                    if (!grouped[subject.id]) grouped[subject.id] = { subject, topics: [] };
                    grouped[subject.id].topics.push(topic);
                });
                listEl.innerHTML = Object.values(grouped).map(g => `
              <div class="card" style="margin-bottom:8px;"><h4>${escapeHtml(g.subject.title)}</h4>
                ${g.topics.map(t=>`<div class="card" style="margin:4px 0;cursor:pointer;" onclick="navigateTo('lesson',{topicId:'${t.id}'})"><strong>${escapeHtml(t.title)}</strong> <span class="tag">${t.grade}</span></div>`).join('')}
              </div>`).join('') || '<p class="muted">No topics match your search.</p>';
            };

            // 3. LESSON VIEWER
            registerView('lesson', (params = {}) => {
                const topicId = params.topicId || '';
                const found = findTopic(topicId);
                if (!found) return '<div class="view card"><h2>Topic not found</h2><p class="muted">Please select a valid topic.</p></div>';
                const { topic, subject, level } = found;
                const prog = STATE.lessonsProgress[topicId] || { status: 'not', viewed: 0, timeSpentSec: 0 };
                const statusLabel = { not: 'Not Started', in: 'In Progress', done: 'Completed' } [prog.status] || 'Not Started';
                const statusClass = { not: 'yellow', in: 'blue', done: 'green' } [prog.status] || 'yellow';
                const siblingTopics = subject.topics || [];
                setTimeout(() => startLessonTimer(topicId), 100);
                return `
            <div class="view">
              <div class="grid-2">
                <div class="card">
                  <div class="card-header">
                    <div><h1>${escapeHtml(topic.title)}</h1><p class="muted">${escapeHtml(subject.title)} • ${topic.grade} • ${level.name}</p></div>
                    <span class="pill ${statusClass}">${statusLabel}</span>
                  </div>
                  <div class="card" style="background:var(--bg);margin-top:10px;">
                    <h4>Learning Objectives</h4>
                    <ul>${(topic.objectives||[]).map(o=>`<li>${escapeHtml(o)}</li>`).join('')||'<li class="muted">None listed.</li>'}</ul>
                  </div>
                  <div class="lesson-content" style="margin-top:12px;line-height:1.7;">
                    ${topic.lesson||'<p class="muted">Lesson content coming soon.</p>'}
                  </div>
                  <div class="row" style="margin-top:14px;gap:8px;">
                    <button class="btn" onclick="markLessonStatus('${topicId}','done')">${ICONS.check} Mark Complete</button>
                    <button class="btn outline" onclick="markLessonStatus('${topicId}','in')">Mark In Progress</button>
                    <button class="btn ghost" onclick="toggleBookmark('${topicId}')">${ICONS.bookmarks} Bookmark</button>
                  </div>
                  <div style="margin-top:10px;" class="muted">
                    Viewed: ${prog.viewed||0} times • Time: <span id="lessonTimeSpent">${secondsToHuman(prog.timeSpentSec||0)}</span>
                  </div>
                </div>
                <div class="card">
                  <h3>Topics in ${escapeHtml(subject.title)}</h3>
                  ${siblingTopics.map(t=>`
                    <div class="card" style="margin:4px 0;cursor:pointer;${t.id===topicId?'border:2px solid var(--primary);':''}" onclick="navigateTo('lesson',{topicId:'${t.id}'})">
                      <strong>${escapeHtml(t.title)}</strong><span class="tag">${t.grade}</span>
                    </div>`).join('')}
                  <hr class="divider">
                  <button class="btn small" onclick="navigateTo('exercises',{topicId:'${topicId}'})">${ICONS.exercises} Practice Exercises</button>
                  <button class="btn small outline" style="margin-top:6px;" onclick="navigateTo('flashcards')">${ICONS.flashcards} Create Flashcards</button>
                </div>
              </div>
            </div>`;
            });
            window.markLessonStatus = function(topicId, status) {
                STATE.lessonsProgress = STATE.lessonsProgress || {};
                STATE.lessonsProgress[topicId] = STATE.lessonsProgress[topicId] || { viewed: 0, timeSpentSec: 0 };
                STATE.lessonsProgress[topicId].status = status;
                STATE.lessonsProgress[topicId].lastViewedAt = nowIso();
                if (status === 'done') {
                    const today = new Date().toDateString();
                    const last = STATE.streak?.lastStudyDate;
                    if (last !== today) {
                        STATE.streak = STATE.streak || { lastStudyDate: null, count: 0 };
                        STATE.streak.count = (STATE.streak.count || 0) + 1;
                        STATE.streak.lastStudyDate = today;
                    }
                }
                saveState(STATE);
                checkAchievements();
                navigateTo('lesson', { topicId });
            };
            window.toggleBookmark = function(topicId) {
                STATE.bookmarks = STATE.bookmarks || [];
                const idx = STATE.bookmarks.indexOf(topicId);
                if (idx > -1) STATE.bookmarks.splice(idx, 1);
                else STATE.bookmarks.push(topicId);
                saveState(STATE);
                alert(idx > -1 ? 'Bookmark removed.' : 'Bookmarked!');
            };

            // 4. EXERCISES
            registerView('exercises', (params = {}) => {
                const topicId = params.topicId || '';
                let allEx = [];
                const levels = [CURRICULUM.primary, CURRICULUM.secondary];
                levels.forEach(level => level.subjects.forEach(sub => sub.topics.forEach(t => {
                    if (topicId && t.id !== topicId) return;
                    (t.exercises || []).forEach(ex => allEx.push({ ...ex, topicTitle: t.title,
                        subjectTitle: sub.title, topicId: t.id, grade: t.grade }));
                })));
                if (!allEx.length) return '<div class="view card"><h2>Exercises</h2><p class="muted">No exercises available. Try selecting a topic first.</p><button class="btn" onclick="navigateTo(\'subjects\')">Browse Topics</button></div>';
                return `
            <div class="view">
              <h1>Practice Exercises</h1>
              <p class="muted">Test your knowledge with these questions.</p>
              <div class="grid-2" style="margin-top:12px;">
                ${allEx.map((ex,i)=>{const attempted=STATE.exercises?.find(r=>r.id===ex.id);
                  return`
                <div class="card" id="exCard${i}">
                  <span class="tag">${ex.grade}</span> <strong>${escapeHtml(ex.subjectTitle)}</strong> — ${escapeHtml(ex.topicTitle)}
                  <p style="margin-top:8px;"><strong>Q:</strong> ${escapeHtml(ex.q)}</p>
                  ${ex.type==='mcq'?ex.choices.map((c,ci)=>`<button class="btn small ${attempted?(ci===ex.answer?'':'ghost'):'ghost'}" style="display:block;width:100%;margin-top:4px;" onclick="checkExercise('${ex.id}',${ci},${ex.answer},${i})">${escapeHtml(c)}</button>`).join(''):
                  `<input id="shortAns${i}" class="search-input" placeholder="Your answer" style="margin-top:4px;"><button class="btn small" onclick="checkShortExercise('${ex.id}','${ex.answerText||''}',${i})">Check</button>`}
                  <div id="exFeedback${i}" class="muted" style="margin-top:4px;">${attempted?('Previously attempted • '+(attempted.correct>0?'Correct':'Incorrect')):''}</div>
                </div>`}).join('')}
              </div>
            </div>`;
            });
            window.checkExercise = function(exId, chosen, correct, idx) {
                const isCorrect = chosen === correct;
                recordExercise(exId, isCorrect);
                const fb = $('#exFeedback' + idx);
                if (fb) fb.innerHTML = isCorrect ? '✅ Correct! Well done.' :
                    '❌ Incorrect. The correct answer was option ' + (correct + 1) + '.';
            };
            window.checkShortExercise = function(exId, answerText, idx) {
                const val = ($('#shortAns' + idx)?.value || '').toLowerCase().trim();
                const isCorrect = val.includes((answerText || '').toLowerCase());
                recordExercise(exId, isCorrect);
                const fb = $('#exFeedback' + idx);
                if (fb) fb.innerHTML = isCorrect ? '✅ Correct!' : '❌ Not quite. Suggested answer: ' + escapeHtml(
                    answerText);
            };

            function recordExercise(exId, correct) {
                STATE.exercises = STATE.exercises || [];
                const rec = STATE.exercises.find(r => r.id === exId);
                if (!rec) STATE.exercises.push({ id: exId, correct: correct ? 1 : 0, attempts: 1,
                lastAttempt: nowIso() });
                else { rec.attempts += 1;
                    rec.correct += correct ? 1 : 0;
                    rec.lastAttempt = nowIso(); }
                saveState(STATE);
                checkAchievements();
            }

            // 5. QUIZZES
            registerView('quizzes', () => {
                const allMcq = [];
                [CURRICULUM.primary, CURRICULUM.secondary].forEach(level => level.subjects.forEach(sub => sub.topics
                    .forEach(t => (t.exercises || []).forEach(ex => { if (ex.type === 'mcq') allMcq.push({ ...ex,
                            topicTitle: t.title, subjectTitle: sub.title, grade: t.grade,
                            topicId: t.id }); }))));
                if (!allMcq.length) return '<div class="view card"><h2>Quizzes</h2><p class="muted">No quiz questions available yet.</p></div>';
                return `
            <div class="view">
              <h1>Topic Quizzes</h1>
              <p class="muted">Timed multiple‑choice quizzes to test your understanding.</p>
              <div class="row" style="margin-top:10px;">
                <select id="quizGrade" class="search-input" style="width:120px"><option value="">Any Grade</option>
                  ${[...new Set(allMcq.map(q=>q.grade))].map(g=>`<option value="${g}">${g}</option>`).join('')}</select>
                <button class="btn" onclick="startQuiz()">${ICONS.play} Start Random Quiz</button>
              </div>
              <div id="quizArea" style="margin-top:14px;"></div>
            </div>`;
            });
            let quizSession = null;
            window.startQuiz = function() {
                const grade = $('#quizGrade')?.value || '';
                let pool = [];
                [CURRICULUM.primary, CURRICULUM.secondary].forEach(level => level.subjects.forEach(sub => sub.topics
                    .forEach(t => { if (grade && t.grade !== grade) return;
                        (t.exercises || []).forEach(ex => { if (ex.type === 'mcq') pool.push({ ...ex,
                                topicTitle: t.title, subjectTitle: sub.title, grade: t.grade,
                                topicId: t.id }); }); })));
                if (!pool.length) { alert('No questions for this grade.'); return; }
                pool = pool.sort(() => 0.5 - Math.random()).slice(0, Math.min(8, pool.length));
                quizSession = { questions: pool, i: 0, correct: 0, start: Date.now(), timeLimit: pool.length * 45 };
                renderQuizQuestion();
                openModal('<div id="quizModalContent"></div>');
            };

            function renderQuizQuestion() {
                const area = $('#quizModalContent');
                if (!area || !quizSession) return;
                if (quizSession.i >= quizSession.questions.length) return finishQuiz();
                const q = quizSession.questions[quizSession.i];
                const remaining = Math.max(0, quizSession.timeLimit - Math.floor((Date.now() - quizSession.start) /
                    1000));
                area.innerHTML = `
              <h3>Q${quizSession.i+1} of ${quizSession.questions.length}</h3>
              <p class="muted">${q.subjectTitle} • ${q.grade} • Time left: ${remaining}s</p>
              <p style="font-size:1.1rem;margin:10px 0;"><strong>${escapeHtml(q.q)}</strong></p>
              ${q.choices.map((c,ci)=>`<button class="btn outline" style="display:block;width:100%;margin-top:6px;text-align:left;" onclick="answerQuiz(${ci},${q.answer})">${escapeHtml(c)}</button>`).join('')}
              <button class="btn ghost small" style="margin-top:8px;" onclick="finishQuiz()">Quit Quiz</button>`;
            }
            window.answerQuiz = function(chosen, correct) {
                if (!quizSession) return;
                if (chosen === correct) quizSession.correct++;
                quizSession.i++;
                renderQuizQuestion();
            };

            function finishQuiz() {
                if (!quizSession) { closeModal(); return; }
                const score = Math.round((quizSession.correct / quizSession.questions.length) * 100);
                STATE.attempts = STATE.attempts || [];
                STATE.attempts.unshift({ type: 'quiz', questions: quizSession.questions.length, correct: quizSession
                        .correct, score, when: nowIso(), subject: quizSession.questions[0]?.subjectTitle || '' });
                saveState(STATE);
                checkAchievements();
                const area = $('#quizModalContent');
                if (area) area.innerHTML = `
              <h2>Quiz Complete!</h2>
              <p style="font-size:2rem;font-weight:800;color:var(--primary);">${score}%</p>
              <p>Correct: ${quizSession.correct} / ${quizSession.questions.length}</p>
              <button class="btn" onclick="closeModal();navigateTo('quizzes')">Close</button>`;
                quizSession = null;
            }

            // 6. PAST PAPERS
            registerView('pastpapers', () => {
                const samplePapers = [
                    { id: 'pp1', title: 'Mathematics — Sample Paper 1', duration: '2 hours', grade: 'S4',
                        questions: 10 }, { id: 'pp2', title: 'Biology — Sample Paper 1', duration: '1.5 hours',
                        grade: 'S3', questions: 8 }, { id: 'pp3', title: 'English — Sample Comprehension',
                        duration: '1 hour', grade: 'S2', questions: 5 },
                    { id: 'pp4', title: 'Primary Science — Sample Test', duration: '45 min', grade: 'P6', questions: 6 }
                ];
                return `
            <div class="view">
              <h1>Past Papers & Exam Simulator</h1>
              <p class="muted">Practice with exam‑style papers in a timed environment.</p>
              <div class="grid-2" style="margin-top:12px;">
                ${samplePapers.map(p=>`
                <div class="card">
                  <h3>${escapeHtml(p.title)}</h3>
                  <span class="tag">${p.grade}</span> <span class="muted">${p.duration} • ${p.questions} questions</span>
                  <div style="margin-top:8px;">
                    <button class="btn small" onclick="startPastPaper('${p.id}')">${ICONS.play} Start Exam</button>
                  </div>
                </div>`).join('')}
              </div>
            </div>`;
            });
            window.startPastPaper = function(paperId) {
                alert('📋 Past paper "' + paperId +
                    '" would launch in full exam mode with timer. (Sample data — full implementation requires backend.)');
                // In a full version, this would open the exam simulator with actual questions.
            };

            // 7. FLASHCARDS
            registerView('flashcards', () => {
                const cards = STATE.flashcards || [];
                return `
            <div class="view">
              <h1>Flashcards</h1>
              <p class="muted">Create and review flashcards for active recall.</p>
              <button class="btn" style="margin-top:8px;" onclick="createFlashcard()">+ New Flashcard</button>
              <div class="grid-3" style="margin-top:12px;" id="flashcardList">
                ${cards.length===0?'<p class="muted">No flashcards yet. Create one to get started!</p>':
                cards.map((c,i)=>`
                <div class="card" style="cursor:pointer;" onclick="flipCard(${i})">
                  <strong>${escapeHtml(c.front)}</strong>
                  <p class="muted" style="display:none;" id="fcBack${i}">${escapeHtml(c.back)}</p>
                  <span class="tag">${c.subject||''}</span>
                  <button class="btn small danger" style="margin-top:4px;" onclick="event.stopPropagation();deleteFlashcard(${i})">Delete</button>
                </div>`).join('')}
              </div>
            </div>`;
            });
            window.createFlashcard = function() {
                const front = prompt('Front of card (question/term):');
                if (!front) return;
                const back = prompt('Back of card (answer/definition):');
                if (!back) return;
                const subject = prompt('Subject (optional):') || '';
                STATE.flashcards = STATE.flashcards || [];
                STATE.flashcards.push({ front, back, subject, created: nowIso() });
                saveState(STATE);
                navigateTo('flashcards');
            };
            window.flipCard = function(i) {
                const back = $('#fcBack' + i);
                if (back) back.style.display = back.style.display === 'none' ? 'block' : 'none';
            };
            window.deleteFlashcard = function(i) {
                if (confirm('Delete this flashcard?')) { STATE.flashcards.splice(i, 1);
                    saveState(STATE);
                    navigateTo('flashcards'); }
            };

            // 8. ANALYTICS
            registerView('analytics', () => {
                const completed = Object.values(STATE.lessonsProgress || {}).filter(p => p.status === 'done').length;
                const total = getAllTopics().length;
                const attempts = STATE.attempts || [];
                const quizScores = attempts.filter(a => a.type === 'quiz').map(a => a.score || 0);
                const avgScore = quizScores.length > 0 ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores
                    .length) : 0;
                const weakTopics = [];
                const exStats = {};
                (STATE.exercises || []).forEach(r => {
                    exStats[r.id] = exStats[r.id] || { attempts: 0, correct: 0 };
                    exStats[r.id].attempts += r.attempts;
                    exStats[r.id].correct += r.correct;
                });
                Object.keys(exStats).forEach(id => {
                    const s = exStats[id];
                    if (s.attempts >= 2 && (s.correct / s.attempts) < 0.5) weakTopics.push({ id, accuracy: Math
                            .round((s.correct / s.attempts) * 100) });
                });
                return `
            <div class="view">
              <h1>Progress & Insights</h1>
              <div class="grid-3" style="margin-top:12px;">
                <div class="card"><h3>📚 Lessons</h3><p style="font-size:2rem;font-weight:800;">${completed}<span style="font-size:1rem;color:var(--muted);">/${total}</span></p><div class="progress-bar"><div class="progress-inner" style="width:${total>0?Math.round(completed/total*100):0}%"></div></div></div>
                <div class="card"><h3>📝 Quizzes Taken</h3><p style="font-size:2rem;font-weight:800;">${attempts.filter(a=>a.type==='quiz').length}</p><p class="muted">Avg score: ${avgScore}%</p></div>
                <div class="card"><h3>🔥 Streak</h3><p style="font-size:2rem;font-weight:800;">${STATE.streak?.count||0} days</p></div>
              </div>
              <div class="card" style="margin-top:14px;"><h3>⚠️ Weak Topics</h3>
                ${weakTopics.length?weakTopics.map(w=>`<p>• ${w.id} — ${w.accuracy}% accuracy</p>`).join(''):'<p class="muted">No weak topics detected yet. Keep practicing!</p>'}
              </div>
              <div class="card" style="margin-top:14px;"><h3>Recent Attempts</h3>
                ${attempts.slice(0,5).map(a=>`<p>• ${a.type.toUpperCase()} — ${a.score||'N/A'}% — ${new Date(a.when).toLocaleDateString()}</p>`).join('')||'<p class="muted">No attempts recorded.</p>'}
              </div>
            </div>`;
            });

            // 9. DASHBOARD
            registerView('dashboard', () => {
                const completed = Object.values(STATE.lessonsProgress || {}).filter(p => p.status === 'done').length;
                const bookmarks = STATE.bookmarks || [];
                const ach = STATE.achievements || [];
                return `
            <div class="view">
              <h1>Your Dashboard</h1>
              <div class="grid-2" style="margin-top:12px;">
                <div class="card"><h3>Overview</h3><p>Completed: <strong>${completed}</strong> topics</p><p>Bookmarks: <strong>${bookmarks.length}</strong></p><p>Achievements: <strong>${ach.length}</strong></p><button class="btn small" onclick="navigateTo('analytics')">See Full Analytics</button></div>
                <div class="card"><h3>🏆 Recent Achievements</h3>${ach.slice(-5).reverse().map(a=>`<p>${a.icon} ${escapeHtml(a.name)} <span class="muted">— ${new Date(a.earnedAt).toLocaleDateString()}</span></p>`).join('')||'<p class="muted">None yet. Start learning!</p>'}</div>
              </div>
              <div class="card" style="margin-top:12px;"><h3>🔖 Bookmarks</h3>
                ${bookmarks.length?bookmarks.map(b=>{const f=findTopic(b);return f?`<p style="cursor:pointer;" onclick="navigateTo('lesson',{topicId:'${b}'})">• ${escapeHtml(f.topic.title)} (${f.subject.title})</p>`:'';}).join(''):'<p class="muted">No bookmarks. Bookmark topics from lessons!</p>'}
              </div>
            </div>`;
            });

            // 10. PROFILE
            registerView('profile', () => {
                const p = STATE.profile || {};
                return `
            <div class="view">
              <h1>Profile</h1>
              <div class="card">
                <div class="row"><div style="width:60px;height:60px;border-radius:50%;background:var(--primary);display:flex;align-items:center;justify-content:center;color:#fff;font-size:1.5rem;font-weight:700;">${(p.name||'G')[0].toUpperCase()}</div>
                <div><h3>${escapeHtml(p.name||'Guest Learner')}</h3><p class="muted">${escapeHtml(p.role||'Student')} • ${escapeHtml(p.school||'No school set')}</p></div></div>
                <hr class="divider">
                <p><strong>Class:</strong> ${escapeHtml(p.class||'Not set')}</p>
                <p><strong>Favorite Subjects:</strong> ${(p.favorites||[]).join(', ')||'None'}</p>
                <button class="btn" style="margin-top:8px;" onclick="openProfileEditor()">${ICONS.settings} Edit Profile</button>
                <button class="btn danger small" style="margin-top:8px;" onclick="if(confirm('Reset all progress?')){localStorage.clear();location.reload();}">Reset Progress</button>
              </div>
            </div>`;
            });
            window.openProfileEditor = function() {
                const p = STATE.profile || {};
                openModal(`
            <div class="modal-header"><h2>Edit Profile</h2><button class="icon-btn" onclick="closeModal()">${ICONS.close}</button></div>
            <form onsubmit="event.preventDefault();saveProfileFromModal();">
              <label>Name: <input id="pfName" class="search-input" value="${escapeHtml(p.name||'')}"></label>
              <label>Role: <select id="pfRole" class="search-input"><option value="student" ${p.role==='student'?'selected':''}>Student</option><option value="teacher" ${p.role==='teacher'?'selected':''}>Teacher</option><option value="parent" ${p.role==='parent'?'selected':''}>Parent</option></select></label>
              <label>Class: <input id="pfClass" class="search-input" value="${escapeHtml(p.class||'')}" placeholder="e.g. S3"></label>
              <label>School: <input id="pfSchool" class="search-input" value="${escapeHtml(p.school||'')}"></label>
              <label>Favorites (comma-separated): <input id="pfFavs" class="search-input" value="${(p.favorites||[]).join(', ')}"></label>
              <button class="btn" style="margin-top:10px;">Save Profile</button>
            </form>`);
            };
            window.saveProfileFromModal = function() {
                STATE.profile = STATE.profile || {};
                STATE.profile.name = $('#pfName')?.value || '';
                STATE.profile.role = $('#pfRole')?.value || 'student';
                STATE.profile.class = $('#pfClass')?.value || '';
                STATE.profile.school = $('#pfSchool')?.value || '';
                STATE.profile.favorites = ($('#pfFavs')?.value || '').split(',').map(s => s.trim()).filter(Boolean);
                saveState(STATE);
                closeModal();
                navigateTo('profile');
            };

            // 11. SETTINGS
            registerView('settings', () => {
                return `
            <div class="view">
              <h1>Settings</h1>
              <div class="card">
                <h3>Appearance</h3>
                <div class="row"><label>Theme:</label><select id="setTheme" class="search-input" style="width:140px" onchange="STATE.theme=this.value;saveState(STATE);applyTheme();"><option value="auto" ${STATE.theme==='auto'?'selected':''}>Auto</option><option value="light" ${STATE.theme==='light'?'selected':''}>Light</option><option value="dark" ${STATE.theme==='dark'?'selected':''}>Dark</option></select></div>
                <div class="row" style="margin-top:8px;"><label>Font Size:</label><input id="setFontSize" type="range" min="12" max="20" value="${STATE.fontSize||15}" oninput="STATE.fontSize=parseInt(this.value);saveState(STATE);applyTheme();document.getElementById('fsLabel').textContent=this.value+'px';"><span id="fsLabel">${STATE.fontSize||15}px</span></div>
              </div>
              <div class="card" style="margin-top:12px;">
                <h3>Data</h3>
                <p class="muted">All data is stored locally on your device. No accounts, no servers.</p>
                <button class="btn danger small" onclick="if(confirm('Clear all data?')){localStorage.clear();location.reload();}">Clear All Data</button>
              </div>
            </div>`;
            });

            // 12. COMMUNITY
            registerView('community', () => {
                return `
            <div class="view">
              <h1>Community Forum</h1>
              <p class="muted">Ask questions and help fellow learners. (Local demo — full version connects to a forum.)</p>
              <div class="card" style="margin-top:10px;">
                <h3>💬 Recent Discussions</h3>
                <div class="card" style="background:var(--bg);"><strong>How do I solve quadratic equations?</strong><p class="muted">Asked 2 days ago • 3 replies</p></div>
                <div class="card" style="background:var(--bg);"><strong>Best way to memorise the periodic table?</strong><p class="muted">Asked 5 days ago • 7 replies</p></div>
                <div class="card" style="background:var(--bg);"><strong>Tips for UNEB English paper 2</strong><p class="muted">Asked 1 week ago • 12 replies</p></div>
                <button class="btn small" style="margin-top:8px;">+ New Discussion</button>
              </div>
            </div>`;
            });

            // 13. ACHIEVEMENTS
            registerView('achievements', () => {
                const ach = STATE.achievements || [];
                const allBadges = [
                    { id: 'first_lesson', name: 'First Lesson', icon: '📖', desc: 'Complete your first lesson.' },
                    { id: '10_lessons', name: '10 Lessons', icon: '📚', desc: 'Complete 10 lessons.' },
                    { id: '25_lessons', name: 'Scholar Badge', icon: '🎓', desc: 'Complete 25 lessons.' },
                    { id: 'first_quiz', name: 'First Quiz', icon: '📝', desc: 'Take your first quiz.' },
                    { id: '5_quizzes', name: 'Quiz Master Bronze', icon: '🥉', desc: 'Take 5 quizzes.' },
                ];
                return `
            <div class="view">
              <h1>Achievements & Badges</h1>
              <div class="grid-3" style="margin-top:12px;">
                ${allBadges.map(b=>{const earned=ach.find(a=>a.id===b.id);return`
                <div class="card" style="text-align:center;${earned?'border:2px solid var(--primary);':''}">
                  <div style="font-size:3rem;">${b.icon}</div>
                  <h3>${b.name}</h3>
                  <p class="muted">${b.desc}</p>
                  ${earned?`<span class="badge">Earned ${new Date(earned.earnedAt).toLocaleDateString()}</span>`:'<span class="pill yellow">Locked</span>'}
                </div>`}).join('')}
              </div>
            </div>`;
            });

            // 14. BOOKMARKS
            registerView('bookmarks', () => {
                const bookmarks = STATE.bookmarks || [];
                const items = bookmarks.map(b => findTopic(b)).filter(Boolean);
                return `
            <div class="view">
              <h1>Your Bookmarks</h1>
              ${items.length===0?'<p class="muted">No bookmarks yet. Bookmark lessons to save them here.</p>':
              items.map(f=>`
              <div class="card" style="cursor:pointer;margin-top:6px;" onclick="navigateTo('lesson',{topicId:'${f.topic.id}'})">
                <strong>${escapeHtml(f.topic.title)}</strong> <span class="tag">${f.topic.grade}</span>
                <p class="muted">${escapeHtml(f.subject.title)} • ${f.level.name}</p>
              </div>`).join('')}
            </div>`;
            });

            // 15. PRIVACY
            registerView('privacy', () => {
                return `
            <div class="view">
              <h1>Privacy & Safety</h1>
              <div class="card">
                <p>Remote Schools stores all data <strong>locally on your device</strong>. There are:</p>
                <ul style="margin-left:20px;margin-top:8px;">
                  <li>No user accounts</li><li>No remote servers</li><li>No tracking or analytics</li><li>No advertisements</li>
                  <li>No personal data transmitted anywhere</li>
                </ul>
                <p style="margin-top:10px;">This app is designed to be <strong>child‑safe</strong> and <strong>school‑friendly</strong>, aligned with Uganda's data protection principles.</p>
              </div>
            </div>`;
            });

            // 16. ABOUT / HELP
            registerView('about', () => {
                return `
            <div class="view">
              <h1>About Remote Schools</h1>
              <div class="card">
                <p><strong>Remote Schools</strong> — ${TAGLINE} — is a <strong>free, offline‑first</strong> e‑learning platform built for the <strong>Uganda National Curriculum</strong> (NCDC).</p>
                <p style="margin-top:8px;">Covering <strong>Primary (P1–P7)</strong> and <strong>Secondary (S1–S6)</strong>, it provides lessons, exercises, quizzes, past papers, flashcards, and progress tracking — all without internet once loaded.</p>
                <h3 style="margin-top:14px;">Keyboard Shortcuts</h3>
                <p><kbd style="background:var(--border);padding:2px 6px;border-radius:4px;">/</kbd> Focus search</p>
                <p><kbd style="background:var(--border);padding:2px 6px;border-radius:4px;">H</kbd> Go to Home</p>
                <p><kbd style="background:var(--border);padding:2px 6px;border-radius:4px;">Esc</kbd> Close modals</p>
              </div>
            </div>`;
            });

            // 17. SEARCH RESULTS
            registerView('search', (params = {}) => {
                const q = params.q || '';
                const results = getAllTopics({ query: q });
                return `
            <div class="view">
              <h1>Search Results</h1>
              <p class="muted">Found ${results.length} topic(s) for "<strong>${escapeHtml(q)}</strong>"</p>
              ${results.length===0?'<p>No results. Try a different search term.</p>':
              results.map(r=>`
              <div class="card" style="cursor:pointer;margin-top:6px;" onclick="navigateTo('lesson',{topicId:'${r.topic.id}'})">
                <strong>${escapeHtml(r.topic.title)}</strong> <span class="tag">${r.topic.grade}</span>
                <p class="muted">${escapeHtml(r.subject.title)} • ${r.level.name}</p>
              </div>`).join('')}
            </div>`;
            });

            // ── NAVIGATION SETUP ─────────────────────
            const NAV_ITEMS = [
                { view: 'home', label: 'Home', icon: 'home' },
                { view: 'subjects', label: 'Subjects', icon: 'subjects' },
                { view: 'exercises', label: 'Exercises', icon: 'exercises' },
                { view: 'quizzes', label: 'Quizzes', icon: 'quizzes' },
                { view: 'pastpapers', label: 'Past Papers', icon: 'pastpapers' },
                { view: 'flashcards', label: 'Flashcards', icon: 'flashcards' },
                { view: 'analytics', label: 'Analytics', icon: 'analytics' },
                { view: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
                { view: 'community', label: 'Community', icon: 'community' },
                { view: 'bookmarks', label: 'Bookmarks', icon: 'bookmarks' },
                { view: 'achievements', label: 'Badges', icon: 'achievements' },
                { view: 'profile', label: 'Profile', icon: 'profile' },
                { view: 'settings', label: 'Settings', icon: 'settings' },
                { view: 'privacy', label: 'Privacy', icon: 'privacy' },
                { view: 'about', label: 'Help', icon: 'help' },
            ];

            function buildNavigation() {
                const nav = $('#mainNav');
                if (!nav) return;
                nav.innerHTML = NAV_ITEMS.map(n => `
              <button class="nav-btn" data-view="${n.view}" onclick="navigateTo('${n.view}')" aria-label="${n.label}">
                ${ICONS[n.icon]||''} <span class="nav-label">${n.label}</span>
              </button>`).join('');
                updateNavActive('home');
            }

            // ── INITIALIZATION ────────────────────────
            function initApp() {
                buildNavigation();
                applyTheme();
                navigateTo('home');
                // Show app, hide loading
                setTimeout(() => {
                    const loader = $('#loadingScreen');
                    if (loader) loader.classList.add('hidden');
                    const header = $('#appHeader');
                    const main = $('#app');
                    const footer = $('#appFooter');
                    if (header) header.style.display = '';
                    if (main) main.style.display = '';
                    if (footer) footer.style.display = '';
                }, 1200);
            }

            // ── EVENT LISTENERS ──────────────────────
            document.addEventListener('DOMContentLoaded', () => {
                initApp();
                // Theme toggle
                $('#themeToggle')?.addEventListener('click', () => {
                    STATE.theme = STATE.theme === 'light' ? 'dark' : 'light';
                    saveState(STATE);
                    applyTheme();
                });
                // Global search
                $('#globalSearch')?.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') {
                        const q = this.value.trim();
                        if (q) navigateTo('search', { q });
                    }
                });
                // Home button
                $('#homeBtn')?.addEventListener('click', (e) => { e.preventDefault();
                    navigateTo('home'); });
                // Privacy footer
                $('#openPrivacyFooter')?.addEventListener('click', () => navigateTo('privacy'));
                // Close modal on overlay click
                $('#modalOverlay')?.addEventListener('click', function(e) { if (e.target === this) closeModal
                    (); });
                // Keyboard shortcuts
                document.addEventListener('keydown', function(e) {
                    if (e.key === '/' && document.activeElement === document.body) { e
                            .preventDefault();
                        $('#globalSearch')?.focus(); }
                    if (e.key.toLowerCase() === 'h' && !e.ctrlKey && !e.metaKey && document
                        .activeElement === document.body) { navigateTo('home'); }
                });
                // Handle theme changes from system
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
                    if (STATE.theme === 'auto') applyTheme();
                });
                // Save state on unload
                window.addEventListener('beforeunload', () => { stopLessonTimer();
                    saveState(STATE); });
                window.addEventListener('visibilitychange', () => { if (document.hidden)
                    stopLessonTimer(); });
            });

            // ── EXPOSE GLOBALS ───────────────────────
            window.navigateTo = navigateTo;
            window.closeModal = closeModal;
            window.openModal = openModal;
            window.STATE = STATE;
            window.saveState = saveState;
            window.applyTheme = applyTheme;
            window.findTopic = findTopic;
            window.getAllTopics = getAllTopics;
            window.escapeHtml = escapeHtml;
            window.ICONS = ICONS;
            window.CURRICULUM = CURRICULUM;

            console.log('🏫 Remote Schools — Ready');
            console.log('   Free • Local‑first • Uganda Curriculum P1–S6');
            console.log('   ' + NAV_ITEMS.length + ' pages available');
            console.log('   ' + getAllTopics().length + ' topics loaded');
        })();
    