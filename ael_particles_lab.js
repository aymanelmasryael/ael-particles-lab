// System Clock
setInterval(() => {
  const now = new Date();
  document.getElementById('sys-time').innerText = `SYS_TIME: ${now.toTimeString().split(' ')[0]}`;
}, 1000);

// 100 Particles Taxonomy
const taxonomyData = [
  { id: 1, name: "Newtonian Particle", layer: "Physics" }, { id: 2, name: "Gravity Particle", layer: "Physics" }, { id: 3, name: "Inertia Particle", layer: "Physics" }, { id: 4, name: "Collision Particle", layer: "Physics" }, { id: 5, name: "Friction Particle", layer: "Physics" }, { id: 6, name: "Bounce Particle", layer: "Physics" }, { id: 7, name: "Drag Particle", layer: "Physics" }, { id: 8, name: "Mass Particle", layer: "Physics" }, { id: 9, name: "Velocity Particle", layer: "Physics" }, { id: 10, name: "Acceleration Particle", layer: "Physics" },
  { id: 11, name: "Sprite Particle", layer: "Visual" }, { id: 12, name: "Mesh Particle", layer: "Visual" }, { id: 13, name: "Ribbon Particle", layer: "Visual" }, { id: 14, name: "Decal Particle", layer: "Visual" }, { id: 15, name: "Light Particle", layer: "Visual" }, { id: 16, name: "Shadow Particle", layer: "Visual" }, { id: 17, name: "Emissive Particle", layer: "Visual" }, { id: 18, name: "Refraction Particle", layer: "Visual" }, { id: 19, name: "Volumetric Particle", layer: "Visual" }, { id: 20, name: "Opacity Particle", layer: "Visual" },
  { id: 21, name: "Fractal Particle", layer: "Procedural" }, { id: 22, name: "Noise Particle", layer: "Procedural" }, { id: 23, name: "Sine Particle", layer: "Procedural" }, { id: 24, name: "Vector Particle", layer: "Procedural" }, { id: 25, name: "Matrix Particle", layer: "Procedural" }, { id: 26, name: "Quaternion Particle", layer: "Procedural" }, { id: 27, name: "Spline Particle", layer: "Procedural" }, { id: 28, name: "Chaos Particle", layer: "Procedural" }, { id: 29, name: "Fibonacci Particle", layer: "Procedural" }, { id: 30, name: "Voronoi Particle", layer: "Procedural" },
  { id: 31, name: "Boid Particle", layer: "AI Behavioral" }, { id: 32, name: "Seek Particle", layer: "AI Behavioral" }, { id: 33, name: "Flee Particle", layer: "AI Behavioral" }, { id: 34, name: "Wander Particle", layer: "AI Behavioral" }, { id: 35, name: "Pathfinding Particle", layer: "AI Behavioral" }, { id: 36, name: "Swarm Particle", layer: "AI Behavioral" }, { id: 37, name: "Flocking Particle", layer: "AI Behavioral" }, { id: 38, name: "Predator Particle", layer: "AI Behavioral" }, { id: 39, name: "Prey Particle", layer: "AI Behavioral" }, { id: 40, name: "Avoidance Particle", layer: "AI Behavioral" },
  { id: 41, name: "Liquid Particle", layer: "Fluid Dynamics" }, { id: 42, name: "Gas Particle", layer: "Fluid Dynamics" }, { id: 43, name: "Plasma Particle", layer: "Fluid Dynamics" }, { id: 44, name: "Smoke Particle", layer: "Fluid Dynamics" }, { id: 45, name: "Fire Particle", layer: "Fluid Dynamics" }, { id: 46, name: "Steam Particle", layer: "Fluid Dynamics" }, { id: 47, name: "Vortex Particle", layer: "Fluid Dynamics" }, { id: 48, name: "Viscosity Particle", layer: "Fluid Dynamics" }, { id: 49, name: "Buoyancy Particle", layer: "Fluid Dynamics" }, { id: 50, name: "Turbulence Particle", layer: "Fluid Dynamics" },
  { id: 51, name: "Compute Particle", layer: "GPU Compute" }, { id: 52, name: "Buffer Particle", layer: "GPU Compute" }, { id: 53, name: "Thread Particle", layer: "GPU Compute" }, { id: 54, name: "Instanced Particle", layer: "GPU Compute" }, { id: 55, name: "Shader Particle", layer: "GPU Compute" }, { id: 56, name: "Voxel Particle", layer: "GPU Compute" }, { id: 57, name: "Raycast Particle", layer: "GPU Compute" }, { id: 58, name: "Culling Particle", layer: "GPU Compute" }, { id: 59, name: "Atlas Particle", layer: "GPU Compute" }, { id: 60, name: "Transform Particle", layer: "GPU Compute" },
  { id: 61, name: "Spawn Particle", layer: "State Lifecycle" }, { id: 62, name: "Lifetime Particle", layer: "State Lifecycle" }, { id: 63, name: "Decay Particle", layer: "State Lifecycle" }, { id: 64, name: "Death Particle", layer: "State Lifecycle" }, { id: 65, name: "Mutation Particle", layer: "State Lifecycle" }, { id: 66, name: "Evolution Particle", layer: "State Lifecycle" }, { id: 67, name: "Stasis Particle", layer: "State Lifecycle" }, { id: 68, name: "Loop Particle", layer: "State Lifecycle" }, { id: 69, name: "Trigger Particle", layer: "State Lifecycle" }, { id: 70, name: "Delay Particle", layer: "State Lifecycle" },
  { id: 71, name: "Wind Particle", layer: "Environment Forces" }, { id: 72, name: "Magnetism Particle", layer: "Environment Forces" }, { id: 73, name: "Repulsion Particle", layer: "Environment Forces" }, { id: 74, name: "Attraction Particle", layer: "Environment Forces" }, { id: 75, name: "Field Particle", layer: "Environment Forces" }, { id: 76, name: "Boundary Particle", layer: "Environment Forces" }, { id: 77, name: "Surface Particle", layer: "Environment Forces" }, { id: 78, name: "Weather Particle", layer: "Environment Forces" }, { id: 79, name: "Sound Particle", layer: "Environment Forces" }, { id: 80, name: "Pressure Particle", layer: "Environment Forces" },
  { id: 81, name: "Anchor Particle", layer: "Hybrid Composite" }, { id: 82, name: "Constraint Particle", layer: "Hybrid Composite" }, { id: 83, name: "Spring Particle", layer: "Hybrid Composite" }, { id: 84, name: "Hinge Particle", layer: "Hybrid Composite" }, { id: 85, name: "Chain Particle", layer: "Hybrid Composite" }, { id: 86, name: "Web Particle", layer: "Hybrid Composite" }, { id: 87, name: "Lattice Particle", layer: "Hybrid Composite" }, { id: 88, name: "Cloth Particle", layer: "Hybrid Composite" }, { id: 89, name: "Softbody Particle", layer: "Hybrid Composite" }, { id: 90, name: "Rigidbody Particle", layer: "Hybrid Composite" },
  { id: 91, name: "Sovereign Particle", layer: "Advanced Quantum" }, { id: 92, name: "Quantum Particle", layer: "Advanced Quantum" }, { id: 93, name: "Entanglement Particle", layer: "Advanced Quantum" }, { id: 94, name: "Tachyon Particle", layer: "Advanced Quantum" }, { id: 95, name: "Entropy Particle", layer: "Advanced Quantum" }, { id: 96, name: "Paradox Particle", layer: "Advanced Quantum" }, { id: 97, name: "Void Particle", layer: "Advanced Quantum" }, { id: 98, name: "Nexus Particle", layer: "Advanced Quantum" }, { id: 99, name: "Aura Particle", layer: "Advanced Quantum" }, { id: 100, name: "Core Particle", layer: "Advanced Quantum" }
];

// === LAYER PERSONALITIES ===
const LAYER_PROFILE = {
  "Physics": {
    bg: "gravity",
    clear: "fade",
    shape: "rect",
    size: [1.5, 3],
    color: "#ff3366",
    glow: "rgba(255,51,102,0.06)"
  },
  "Visual": {
    bg: "radialGlow",
    clear: "fade",
    shape: "circle",
    size: [2, 6],
    color: "dynamic",
    glow: "rgba(0,255,204,0.07)"
  },
  "Procedural": {
    bg: "noiseGrid",
    clear: "fade",
    shape: "diamond",
    size: [2, 4],
    color: "#a020f0",
    glow: "rgba(160,32,240,0.05)"
  },
  "AI Behavioral": {
    bg: "spotlight",
    clear: "fade",
    shape: "triangle",
    size: [2, 4],
    color: "#ffcc00",
    glow: "rgba(255,204,0,0.06)"
  },
  "Fluid Dynamics": {
    bg: "waveField",
    clear: "fade",
    shape: "circle",
    size: [2, 5],
    color: "#0088ff",
    glow: "rgba(0,136,255,0.06)"
  },
  "GPU Compute": {
    bg: "dataGrid",
    clear: "clear",
    shape: "rect",
    size: [2, 3],
    color: "#00ffcc",
    glow: "rgba(0,255,204,0.04)"
  },
  "State Lifecycle": {
    bg: "pulseRings",
    clear: "fade",
    shape: "circle",
    size: [2, 5],
    color: "lifecycle",
    glow: "rgba(255,255,255,0.04)"
  },
  "Environment Forces": {
    bg: "windVectors",
    clear: "fade",
    shape: "streak",
    size: [2, 7],
    color: "#cccccc",
    glow: "rgba(204,204,204,0.04)"
  },
  "Hybrid Composite": {
    bg: "meshGrid",
    clear: "clear",
    shape: "diamond",
    size: [2, 4],
    color: "#ff8800",
    glow: "rgba(255,136,0,0.06)"
  },
  "Advanced Quantum": {
    bg: "sparkleNoise",
    clear: "fade",
    shape: "rect",
    size: [1, 2],
    color: "#ffffff",
    glow: "rgba(255,255,255,0.05)"
  }
};

const LAYER_ORDER = ["Physics","Visual","Procedural","AI Behavioral","Fluid Dynamics","GPU Compute","State Lifecycle","Environment Forces","Hybrid Composite","Advanced Quantum"];

const LAYER_THEME = {
  "Physics": { bg: "#0a0508", accent: "#ff3366", label: "MECHANICS" },
  "Visual": { bg: "#020a0a", accent: "#00ffcc", label: "OPTICS" },
  "Procedural": { bg: "#08020a", accent: "#a020f0", label: "ALGORITHMIC" },
  "AI Behavioral": { bg: "#0a0800", accent: "#ffcc00", label: "COGNITIVE" },
  "Fluid Dynamics": { bg: "#00060a", accent: "#0088ff", label: "HYDRO" },
  "GPU Compute": { bg: "#020a06", accent: "#00ffcc", label: "PARALLEL" },
  "State Lifecycle": { bg: "#050508", accent: "#ffffff", label: "LIFECYCLE" },
  "Environment Forces": { bg: "#080808", accent: "#cccccc", label: "ENVIRO" },
  "Hybrid Composite": { bg: "#080500", accent: "#ff8800", label: "COMPOSITE" },
  "Advanced Quantum": { bg: "#00020a", accent: "#ffffff", label: "QUANTUM" }
};

// Build Taxonomy UI
const listContainer = document.getElementById('particle-list');
let currentLayer = "";

function buildTaxonomy(filter) {
  listContainer.innerHTML = "";
  currentLayer = "";
  let count = 0;
  taxonomyData.forEach(p => {
    if (filter && !p.name.toLowerCase().includes(filter.toLowerCase()) && !p.layer.toLowerCase().includes(filter.toLowerCase())) return;
    count++;
    if (p.layer !== currentLayer) {
      currentLayer = p.layer;
      const header = document.createElement('div');
      header.className = "category-header text-xs font-bold mt-4 mb-2 pl-3 border-l-2 py-1.5 rounded-r shadow-sm tech-font";
      const theme = LAYER_THEME[p.layer];
      header.style.color = theme.accent;
      header.style.borderLeftColor = theme.accent;
      header.style.background = `${theme.accent}15`;
      header.innerText = `[ ${theme.label} ]`;
      listContainer.appendChild(header);
    }
    const item = document.createElement('div');
    item.className = "particle-item px-3 py-2 mb-1 rounded text-[11px] text-gray-300 tech-flex";
    item.innerHTML = `<span class="opacity-50 w-8 inline-block text-gray-500 shrink-0">${p.id.toString().padStart(3,'0')}</span><span class="font-semibold text-right flex-1 truncate">${p.name}</span>`;
    item.onclick = () => selectParticle(p.id, item);
    listContainer.appendChild(item);
  });
  document.getElementById('taxonomy-count').innerText = count;
}

buildTaxonomy();

// Search
document.getElementById('taxonomy-search').addEventListener('input', (e) => {
  buildTaxonomy(e.target.value.trim());
});

// === PROMPT › PARTICLE ===
const PROMPT_MAP = {
  'gravity':2,'gravitational':2,'fall':2,'falling':2,'weight':2,'heaviness':2,
  'bounce':6,'bouncing':6,'collision':4,'collide':4,'crash':4,'impact':4,
  'friction':5,'drag':7,'resistance':7,'mass':8,'heavy':8,'velocity':9,'speed':9,
  'fast':9,'quick':9,'accelerate':10,'acceleration':10,'thrust':10,
  'visual':11,'sprite':11,'image':11,'graphic':11,'mesh':12,'ribbon':13,'trail':13,
  'decal':14,'sticker':14,'light':15,'shadow':16,'dark':16,'glow':17,'shine':17,
  'emissive':17,'refract':18,'refraction':18,'prism':18,'volumetric':19,'volume':19,
  'fog':19,'opacity':20,'fade':20,'transparent':20,'alpha':20,'see':20,
  'fractal':21,'infinity':21,'noise':22,'perlin':22,'static':22,'sine':23,'wave':23,
  'oscillate':23,'vector':24,'direction':24,'matrix':25,'grid':25,'array':25,
  'quaternion':26,'rotate':26,'rotation':26,'spline':27,'curve':27,'path':27,
  'chaos':28,'random':28,'entropy':28,'fibonacci':29,'spiral':29,'golden':29,
  'voronoi':30,'cell':30,'honeycomb':30,
  'boid':31,'bird':31,'flock':31,'seek':32,'chase':32,'pursue':32,'follow':32,
  'hunt':32,'flee':33,'run':33,'escape':33,'avoid':33,'wander':34,'drift':34,
  'roam':34,'pathfind':35,'navigation':35,'swarm':36,'insect':36,'flocking':37,
  'group':37,'herd':37,'predator':38,'hunt':38,'prey':39,'avoidance':40,
  'liquid':41,'water':41,'fluid':41,'flow':41,'gas':42,'air':42,'puff':42,
  'plasma':43,'energy':43,'smoke':44,'cloud':44,'mist':44,'fire':45,'flame':45,
  'burn':45,'burning':45,'steam':46,'vapor':46,'vortex':47,'whirl':47,'tornado':47,
  'viscosity':48,'thick':48,'honey':48,'buoyancy':49,'float':49,'rise':49,
  'turbulence':50,'chaotic':50,'storm':50,'turbulent':50,
  'compute':51,'gpu':51,'parallel':51,'buffer':52,'cache':52,'thread':53,
  'instanced':54,'instance':54,'shader':55,'glsl':55,'pixel':55,'voxel':56,
  'block':56,'raycast':57,'ray':57,'culling':58,'frustum':58,'atlas':59,
  'texture':59,'transform':60,'matrix':60,
  'spawn':61,'birth':61,'create':61,'generate':61,'lifetime':62,'age':62,
  'aging':62,'decay':63,'rot':63,'decompose':63,'death':64,'die':64,'kill':64,
  'mutation':65,'mutate':65,'change':65,'evolution':66,'evolve':66,'adapt':66,
  'stasis':67,'pause':67,'still':67,'frozen':67,'loop':68,'cycle':68,'repeat':68,
  'trigger':69,'event':69,'activate':69,'delay':70,'wait':70,'hold':70,
  'wind':71,'breeze':71,'blow':71,'magnetism':72,'magnet':72,'magnetic':72,
  'attract':72,'repulsion':73,'repel':73,'push':73,'attraction':74,'pull':74,
  'field':75,'force':75,'boundary':76,'wall':76,'edge':76,'surface':77,'skin':77,
  'weather':78,'rain':78,'snow':78,'sound':79,'audio':79,'vibrate':79,
  'pressure':80,'compress':80,
  'anchor':81,'pin':81,'fix':81,'constraint':82,'limit':82,'spring':83,
  'elastic':83,'stretch':83,'hinge':84,'door':84,'chain':85,'link':85,
  'web':86,'spider':86,'network':86,'lattice':87,'honeycomb':87,'cloth':88,
  'fabric':88,'softbody':89,'jelly':89,'squish':89,'rigidbody':90,'rigid':90,
  'solid':90,'hard':90,
  'sovereign':91,'ruler':91,'king':91,'supreme':91,'quantum':92,'subatomic':92,
  'entanglement':93,'entangled':93,'pair':93,'tachyon':94,'time':94,'faster':94,
  'paradox':95,'contradiction':95,'void':97,'empty':97,'nothing':97,'nexus':98,
  'core':100,'center':100,'heart':100,'aura':99,'glow':99,'halo':99
};

const ARABIC_MAP = {
  'جاذبية':2,'جذب':2,'وزن':8,'وقوع':2,'سقوط':2,'ارتداد':6,'تصادم':4,
  'ضوء':15,'نور':15,'ظل':16,'توهج':17,'إشعاع':17,'شفاف':20,
  'نار':45,'لهب':45,'حريق':45,'دخان':44,'ماء':41,'سائل':41,'بخار':46,
  'رياح':71,'عاصفة':78,'موجة':23,'صوت':79,'ضغط':80,
  'عشوائي':28,'فوضى':28,'عشوائية':28,
  'سرب':36,'طير':31,'طيور':31,'مجموعة':37,
  'موت':64,'حياة':61,'ولادة':61,'نشأة':61,'تطور':66,'تغير':65,
  'كم':92,'كوانتم':92,'ثقب':97,'فراغ':97,
  'مرن':83,'مطاط':83,'صلب':90,'جامد':90,'قماش':88,'نسيج':88,
  'أثير':99,'روح':99,'قلب':100,'مركز':100,'جاذبية':2
};

const STOP_WORDS = new Set(['the','a','an','i','you','he','she','it','we','they','me','my','your','his','her','its','our','their','this','that','these','those','is','are','was','were','be','been','being','have','has','had','do','does','did','will','would','can','could','shall','should','may','might','must','in','on','at','to','for','with','by','from','up','of','about','into','over','after','before','between','under','above','and','but','or','not','no','so','if','than','as','very','just','like','some','any','all','both','each','more','most','other','such','what','which','who','whom','why','how','want','need','make','create','get','let','something','particle','that']);

function promptToParticle(text) {
  const words = text.toLowerCase().replace(/[.,!?;:'"()\[\]{}]/g,'').split(/\s+/).filter(w => w.length > 1 && !STOP_WORDS.has(w));
  if (!words.length) return null;

  const scores = new Map();
  for (const word of words) {
    const eng = PROMPT_MAP[word];
    if (eng) scores.set(eng, (scores.get(eng)||0) + 3);
    const arb = ARABIC_MAP[word];
    if (arb) scores.set(arb, (scores.get(arb)||0) + 3);

    for (const p of taxonomyData) {
      let match = 0;
      if (p.name.toLowerCase().includes(word)) match += 2;
      if (p.layer.toLowerCase().includes(word)) match += 2;
      if (match && scores.has(p.id)) scores.set(p.id, scores.get(p.id) + match);
      else if (match) scores.set(p.id, match);
    }
  }

  let bestId = 0, bestScore = 0;
  for (const [id, score] of scores) {
    if (score > bestScore) { bestScore = score; bestId = id; }
  }
  return bestId ? taxonomyData.find(p => p.id === bestId) : null;
}

function selectParticleById(id) {
  const items = document.querySelectorAll('.particle-item');
  const el = items[id - 1];
  if (!el) return showToast('Error: item not found');
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  selectParticle(id, el);
  el.style.transition = 'background 0.1s';
  el.style.background = 'rgba(0,255,204,0.3)';
  setTimeout(() => { el.style.background = ''; }, 300);
}

function handleGenerate() {
  const input = document.getElementById('prompt-input');
  const text = input.value.trim();
  if (!text) return;
  document.getElementById('taxonomy-search').value = '';
  buildTaxonomy();
  const result = promptToParticle(text);
  if (result) {
    selectParticleById(result.id);
    showToast(`⚡ ${result.name}`);
  } else {
    showToast('No match. Try different words.');
  }
}

document.getElementById('prompt-input').addEventListener('keydown', (e) => { if (e.key === 'Enter') handleGenerate(); });
document.getElementById('prompt-generate').onclick = handleGenerate;

// === PRESET SYSTEM ===
function savePreset() {
  const data = JSON.stringify({ layer: engineConfig.layer });
  localStorage.setItem('ael-particles-lab-preset', data);
  showToast('Preset saved');
}

function loadPreset() {
  const raw = localStorage.getItem('ael-particles-lab-preset');
  if (!raw) { showToast('No preset found'); return; }
  const data = JSON.parse(raw);
  const target = taxonomyData.find(p => p.layer === data.layer);
  if (target) {
    const items = document.querySelectorAll('.particle-item');
    const idx = taxonomyData.indexOf(target);
    if (items[idx]) selectParticle(target.id, items[idx]);
    showToast(`Loaded: ${data.layer}`);
  }
}

function shareURL() {
  const url = `${window.location.origin}${window.location.pathname}?layer=${encodeURIComponent(engineConfig.layer)}`;
  navigator.clipboard.writeText(url).then(() => showToast('Share URL copied')).catch(() => showToast('Copy: ' + url));
}

function showToast(msg) {
  const el = document.getElementById('toast');
  el.innerText = msg;
  el.classList.remove('opacity-0');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.add('opacity-0'), 2000);
}

document.getElementById('save-preset').onclick = savePreset;
document.getElementById('load-preset').onclick = loadPreset;
document.getElementById('share-url').onclick = shareURL;

// === MOBILE DRAWER ===
function toggleDrawer() {
  const panel = document.getElementById('taxonomy-panel');
  const overlay = document.getElementById('drawer-overlay');
  panel.classList.toggle('translate-x-0');
  overlay.classList.toggle('hidden');
}
document.getElementById('mobile-toggle').onclick = toggleDrawer;
document.getElementById('drawer-overlay').onclick = toggleDrawer;

// === HYBRID RENDERING ENGINE ===
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d', { alpha: false });
let particles = [];
let engineConfig = { layer: "Physics", count: 0 };
let mouse = { x: -1000, y: -1000 };
let frames = 0, lastTime = performance.now();
let bgTime = 0;

// FPS chart
const fpsCanvas = document.getElementById('fps-chart');
const fpsCtx = fpsCanvas.getContext('2d');
const fpsHistory = new Array(60).fill(0);
let fpsIdx = 0;

let animId = null;

function resize() {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
  fpsCanvas.width = 200;
}
window.addEventListener('resize', resize);
resize();

canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});
canvas.addEventListener('mouseleave', () => { mouse.x = -1000; mouse.y = -1000; });

class HybridParticle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.baseX = this.x;
    this.baseY = this.y;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.size = 1.5;
    this.life = Math.random();
    this.angle = Math.random() * Math.PI * 2;
    this.color = '#0074FF';
  }

  update(layer) {
    const w = canvas.width, h = canvas.height;
    switch(layer) {
      case "Physics":
        this.vy += 0.15;
        this.x += this.vx; this.y += this.vy;
        if (this.y > h) { this.y = h; this.vy *= -0.7; }
        if (this.x < 0 || this.x > w) this.vx *= -1;
        break;
      case "Visual":
        this.life -= 0.008;
        if (this.life <= 0) { this.life = 1; this.x = Math.random()*w; this.y = Math.random()*h; }
        this.size = this.life * (LAYER_PROFILE.Visual.size[1] - LAYER_PROFILE.Visual.size[0]) + LAYER_PROFILE.Visual.size[0];
        break;
      case "Procedural":
        this.angle += 0.04;
        this.x += Math.sin(this.angle) * 2;
        this.y += Math.cos(this.angle) * 2;
        break;
      case "AI Behavioral":
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distSq = dx*dx + dy*dy;
        if (distSq < 40000 && distSq > 0) {
          const dist = Math.sqrt(distSq);
          this.vx += (dx/dist) * 0.5;
          this.vy += (dy/dist) * 0.5;
        }
        this.vx *= 0.96; this.vy *= 0.96;
        this.x += this.vx; this.y += this.vy;
        break;
      case "Fluid Dynamics":
        this.angle += 0.03;
        this.vx = Math.sin(this.y * 0.015 + this.angle) * 0.8;
        this.vy = -Math.random() * 2 - 0.5;
        this.x += this.vx; this.y += this.vy;
        if (this.y < 0) this.y = h;
        break;
      case "GPU Compute":
        this.x += (Math.round(this.baseX / 15) * 15 - this.x) * 0.15;
        this.y += (Math.round(this.baseY / 15) * 15 - this.y) * 0.15;
        this.baseX += (Math.random()-0.5) * 2;
        this.baseY += (Math.random()-0.5) * 2;
        break;
      case "State Lifecycle":
        this.size += 0.05;
        this.life -= 0.015;
        if (this.life <= 0) { this.life = 1; this.size = 1.5; this.x = Math.random()*w; this.y = Math.random()*h; }
        break;
      case "Environment Forces":
        this.vx += 0.08;
        this.x += this.vx; this.y += this.vy;
        if (this.x > w) { this.x = 0; this.vx = 0; }
        break;
      case "Hybrid Composite":
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
        break;
      case "Advanced Quantum":
        if (Math.random() < 0.02) { this.x = Math.random()*w; this.y = Math.random()*h; }
        this.x += (Math.random() - 0.5) * 0.8;
        this.y += (Math.random() - 0.5) * 0.8;
        break;
    }
    this.x = Math.max(-10, Math.min(w + 10, this.x));
    this.y = Math.max(-10, Math.min(h + 10, this.y));
  }

  draw(ctx, layer) {
    const profile = LAYER_PROFILE[layer] || LAYER_PROFILE["Physics"];
    let color = profile.color;
    if (color === "dynamic") {
      color = `hsl(${180 + this.life * 60}, 100%, ${50 + this.life * 30}%)`;
    } else if (color === "lifecycle") {
      ctx.globalAlpha = Math.max(0.2, this.life);
      color = "#ffffff";
    }
    ctx.fillStyle = color;

    const s = this.size;
    const shape = profile.shape;
    const x = this.x, y = this.y;

    switch(shape) {
      case "circle":
        ctx.beginPath();
        ctx.arc(x, y, s / 2, 0, Math.PI * 2);
        ctx.fill();
        break;
      case "diamond":
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(-s / 2, -s / 2, s, s);
        ctx.restore();
        break;
      case "triangle":
        ctx.beginPath();
        ctx.moveTo(x + Math.cos(this.angle) * s, y + Math.sin(this.angle) * s);
        ctx.lineTo(x + Math.cos(this.angle + 2.4) * s, y + Math.sin(this.angle + 2.4) * s);
        ctx.lineTo(x + Math.cos(this.angle - 2.4) * s, y + Math.sin(this.angle - 2.4) * s);
        ctx.closePath();
        ctx.fill();
        break;
      case "streak":
        ctx.fillRect(x - s * 0.6, y - 1, s * 1.2, 2.5);
        break;
      default:
        ctx.fillRect(x, y, s, s);
    }

    if (color === "lifecycle") ctx.globalAlpha = 1;
  }
}

// === BACKGROUND EFFECTS ===
function drawBackground(layer) {
  const profile = LAYER_PROFILE[layer];
  if (!profile) return;
  const w = canvas.width, h = canvas.height;
  const cx = w / 2, cy = h / 2;
  bgTime += 0.016;

  switch(profile.bg) {
    case "gravity": {
      ctx.fillStyle = profile.glow;
      ctx.fillRect(0, h - 30, w, 30);
      ctx.strokeStyle = "rgba(255,51,102,0.03)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < 10; i++) {
        const x = (i / 10) * w;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x - 20, h);
        ctx.stroke();
      }
      break;
    }
    case "radialGlow": {
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.6);
      grad.addColorStop(0, "rgba(0,255,204,0.03)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      break;
    }
    case "noiseGrid": {
      ctx.fillStyle = profile.glow;
      const step = 40;
      for (let x = 0; x < w; x += step) {
        for (let y = 0; y < h; y += step) {
          const n = Math.sin(x * 0.01 + bgTime) * Math.cos(y * 0.01 + bgTime * 0.7);
          if (n > 0.5) {
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
      break;
    }
    case "spotlight": {
      const grad2 = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 150);
      grad2.addColorStop(0, "rgba(255,204,0,0.04)");
      grad2.addColorStop(1, "transparent");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, w, h);
      break;
    }
    case "waveField": {
      ctx.strokeStyle = "rgba(0,136,255,0.04)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        const baseY = (i / 5) * h;
        for (let x = 0; x <= w; x += 10) {
          const yy = baseY + Math.sin(x * 0.03 + bgTime * 2 + i) * 15;
          x === 0 ? ctx.moveTo(x, yy) : ctx.lineTo(x, yy);
        }
        ctx.stroke();
      }
      break;
    }
    case "dataGrid": {
      ctx.fillStyle = "rgba(0,255,204,0.04)";
      const step2 = 30;
      for (let x = 0; x < w; x += step2) {
        for (let y = 0; y < h; y += step2) {
          ctx.fillRect(x, y, 1, 1);
        }
      }
      ctx.strokeStyle = "rgba(0,255,204,0.03)";
      ctx.lineWidth = 0.3;
      for (let x = 0; x < w; x += step2) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += step2) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }
      break;
    }
    case "pulseRings": {
      ctx.strokeStyle = "rgba(255,255,255,0.03)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < 3; i++) {
        const radius = 40 + ((bgTime * 30 + i * 40) % 200);
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
      break;
    }
    case "windVectors": {
      ctx.strokeStyle = "rgba(204,204,204,0.03)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < 12; i++) {
        const yy = (i / 12) * h;
        ctx.beginPath();
        const offset = (bgTime * 50 + i * 30) % (w + 60) - 30;
        ctx.moveTo(offset, yy);
        ctx.lineTo(offset + 30, yy - 5);
        ctx.stroke();
      }
      break;
    }
    case "meshGrid": {
      ctx.strokeStyle = "rgba(255,136,0,0.03)";
      ctx.lineWidth = 0.3;
      const step3 = 35;
      for (let i = -20; i < w + 20; i += step3) {
        ctx.beginPath();
        ctx.moveTo(i + (bgTime * 5 % step3), 0);
        ctx.lineTo(i + (bgTime * 5 % step3) - 20, h);
        ctx.stroke();
      }
      for (let i = -20; i < h + 20; i += step3) {
        ctx.beginPath();
        ctx.moveTo(0, i + (bgTime * 3 % step3));
        ctx.lineTo(w, i + (bgTime * 3 % step3) - 10);
        ctx.stroke();
      }
      break;
    }
    case "sparkleNoise": {
      ctx.fillStyle = "rgba(255,255,255,0.04)";
      const seed = Math.floor(bgTime * 20) % 200;
      for (let i = 0; i < 50; i++) {
        const sx = ((i * 7919 + seed * 7) % w);
        const sy = ((i * 6271 + seed * 11) % h);
        ctx.fillRect(sx, sy, 1, 1);
      }
      break;
    }
  }
}

// === ENGINE ===
function initEngine(layer) {
  engineConfig.layer = layer;
  const countMap = {
    "Physics": 4000, "Visual": 3000, "Procedural": 5000,
    "AI Behavioral": 6000, "Fluid Dynamics": 8000, "GPU Compute": 10000,
    "State Lifecycle": 3000, "Environment Forces": 4000,
    "Hybrid Composite": 2000, "Advanced Quantum": 6000
  };
  engineConfig.count = countMap[layer] || 4000;
  particles = new Array(engineConfig.count);
  for (let i = 0; i < engineConfig.count; i++) {
    const p = new HybridParticle();
    p.size = Math.random() < 0.85 ? LAYER_PROFILE[layer].size[0] : LAYER_PROFILE[layer].size[1];
    particles[i] = p;
  }
  document.getElementById('hud-count').innerText = engineConfig.count.toLocaleString();

  // Update theme accent
  const theme = LAYER_THEME[layer];
  document.querySelector('meta[name="theme-color"]').content = theme.accent;
  document.querySelector('.sovereign-block pre').style.borderColor = theme.accent + "50";
}

function selectParticle(id, element) {
  document.querySelectorAll('.particle-item').forEach(el => el.classList.remove('active'));
  element.classList.add('active');
  const particle = taxonomyData.find(p => p.id === id);
  if (particle) {
    document.getElementById('hud-id').innerText = particle.id.toString().padStart(3, '0');
    document.getElementById('hud-name').innerText = particle.name;
    document.getElementById('hud-layer').innerText = particle.layer.toUpperCase();
    initEngine(particle.layer);
  }
}

function drawConnections() {
  if (engineConfig.layer !== "Hybrid Composite" || particles.length > 2500) return;
  ctx.strokeStyle = 'rgba(255, 136, 0, 0.12)';
  ctx.lineWidth = 0.8;
  const threshold = 4000;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      if (dx*dx + dy*dy < threshold) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function drawFPSChart(fps) {
  fpsHistory[fpsIdx] = Math.min(fps, 120);
  fpsIdx = (fpsIdx + 1) % 60;

  const fw = fpsCanvas.width, fh = fpsCanvas.height;
  fpsCtx.fillStyle = "#020305";
  fpsCtx.fillRect(0, 0, fw, fh);

  const barW = fw / 60;
  for (let i = 0; i < 60; i++) {
    const idx = (fpsIdx + i) % 60;
    const val = fpsHistory[idx];
    const bh = (val / 120) * fh;
    fpsCtx.fillStyle = val > 30 ? "rgba(0,255,204,0.5)" : "rgba(255,51,102,0.5)";
    fpsCtx.fillRect(i * barW, fh - bh, barW - 0.5, bh);
  }
}

function animate() {
  const profile = LAYER_PROFILE[engineConfig.layer] || LAYER_PROFILE["Physics"];

  if (profile.clear === "clear") {
    ctx.fillStyle = '#03060c';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    ctx.fillStyle = 'rgba(2, 3, 5, 0.25)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  drawBackground(engineConfig.layer);

  const layer = engineConfig.layer;
  const len = particles.length;
  for (let i = 0; i < len; i++) {
    particles[i].update(layer);
    particles[i].draw(ctx, layer);
  }

  drawConnections();

  frames++;
  const now = performance.now();
  if (now - lastTime >= 1000) {
    document.getElementById('hud-fps').innerText = frames;
    drawFPSChart(frames);
    frames = 0;
    lastTime = now;
  }

  animId = requestAnimationFrame(animate);
}

// === INIT ===
window.onload = () => {
  // Check URL for layer param
  const params = new URLSearchParams(window.location.search);
  const layerParam = params.get('layer');
  let targetId = 1;

  if (layerParam) {
    const found = taxonomyData.find(p => p.layer === layerParam);
    if (found) targetId = found.id;
  }

  const items = document.querySelectorAll('.particle-item');
  const targetEl = items[targetId - 1];
  if (targetEl) selectParticle(targetId, targetEl);
  animate();
};
