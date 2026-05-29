const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas to fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// --- GAME SETTINGS ---
const WORLD_SIZE = 3000; // The actual size of the open world
const TILE_SIZE = 50;

// --- PLAYER OBJECT ---
const player = {
    x: WORLD_SIZE / 2,
    y: WORLD_SIZE / 2,
    radius: 15,
    speed: 5,
    dx: 0,
    dy: 0
};

// --- CAMERA OBJECT ---
const camera = {
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height
};

// --- INPUT HANDLING ---
const keys = {};
window.addEventListener('keydown', (e) => keys[e.key.toLowerCase()] = true);
window.addEventListener('keyup', (e) => keys[e.key.toLowerCase()] = false);

// --- WORLD GENERATION (Placeholders for realism) ---
const environmentObjects = [];
// Generate random "trees" or "rocks"
for (let i = 0; i < 500; i++) {
    environmentObjects.push({
        x: Math.random() * WORLD_SIZE,
        y: Math.random() * WORLD_SIZE,
        radius: Math.random() * 20 + 10,
        color: Math.random() > 0.5 ? '#2d5a27' : '#555' // Green for trees, grey for rocks
    });
}

// --- GAME LOGIC ---
function update() {
    // 1. Move Player
    if (keys['w']) player.y -= player.speed;
    if (keys['s']) player.y += player.speed;
    if (keys['a']) player.x -= player.speed;
    if (keys['d']) player.x += player.speed;

    // Constrain player to world boundaries
    player.x = Math.max(player.radius, Math.min(WORLD_SIZE - player.radius, player.x));
    player.y = Math.max(player.radius, Math.min(WORLD_SIZE - player.radius, player.y));

    // 2. Update Camera (Center on player)
    camera.x = player.x - canvas.width / 2;
    camera.y = player.y - canvas.height / 2;

    // Constrain camera to world boundaries
    camera.x = Math.max(0, Math.min(WORLD_SIZE - canvas.width, camera.x));
    camera.y = Math.max(0, Math.min(WORLD_SIZE - canvas.height, camera.y));
}

// --- RENDERING ---
function draw() {
    // Clear screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Save context state before applying camera offset
    ctx.save();
    
    // Translate context to simulate camera movement
    ctx.translate(-camera.x, -camera.y);

    // Draw World Background (Grass)
    ctx.fillStyle = '#4a752c';
    ctx.fillRect(0, 0, WORLD_SIZE, WORLD_SIZE);

    // Draw Grid (Optional: helps visualize movement)
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    for (let i = 0; i < WORLD_SIZE; i += TILE_SIZE) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, WORLD_SIZE);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(WORLD_SIZE, i);
        ctx.stroke();
    }

    // Draw Environment Objects
    environmentObjects.forEach(obj => {
        // Only draw objects that are visible within the camera view (Optimization)
        if (obj.x > camera.x - obj.radius && obj.x < camera.x + camera.width + obj.radius &&
            obj.y > camera.y - obj.radius && obj.y < camera.y + camera.height + obj.radius) {
            
            // Add a simple shadow for depth (stepping stone to realism)
            ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.beginPath();
            ctx.arc(obj.x + 5, obj.y + 5, obj.radius, 0, Math.PI * 2);
            ctx.fill();

            // Draw object
            ctx.fillStyle = obj.color;
            ctx.beginPath();
            ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    // Draw Player
    ctx.fillStyle = '#d9b382'; // Skin-ish tone placeholder
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctx.fill();
    // Player outline
    ctx.strokeStyle = '#222';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Restore context to its original state
    ctx.restore();
}

// --- GAME LOOP ---
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop); // Keeps the loop running at monitor refresh rate
}

// Start the game
gameLoop();

// Handle window resizing
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    camera.width = canvas.width;
    camera.height = canvas.height;
});