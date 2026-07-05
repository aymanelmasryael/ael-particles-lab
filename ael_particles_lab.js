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

        // Build Taxonomy UI
        const listContainer = document.getElementById('particle-list');
        let currentLayer = "";

        taxonomyData.forEach(p => {
            if (p.layer !== currentLayer) {
                currentLayer = p.layer;
                const header = document.createElement('div');
                header.className = "category-header text-[#0074FF] text-xs font-bold mt-4 mb-2 pl-3 border-l-2 border-[#0074FF] tech-font bg-[#0074FF]/10 py-1.5 rounded-r shadow-sm";
                header.innerText = `[ ${currentLayer.toUpperCase()} ]`;
                listContainer.appendChild(header);
            }
            const item = document.createElement('div');
            item.className = "particle-item px-3 py-2 mb-1 rounded text-[11px] text-gray-300 tech-font flex items-center justify-between";
            item.innerHTML = `<span class="opacity-50 w-8 inline-block text-gray-500">${p.id.toString().padStart(3, '0')}</span> <span class="font-semibold text-right">${p.name}</span>`;
            item.onclick = () => selectParticle(p.id, item);
            listContainer.appendChild(item);
        });

        // === Hybrid Rendering Engine v3.0 ===
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d', { alpha: false });
        let particles = [];
        let engineConfig = { layer: "Physics", count: 0 };
        let mouse = { x: -1000, y: -1000 };
        let frames = 0;
        let lastTime = performance.now();

        function resize() {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
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
                this.size = Math.random() < 0.85 ? 1.5 : 3;
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
                        this.color = '#ff3366';
                        break;
                    case "Visual":
                        this.life -= 0.008;
                        if (this.life <= 0) { this.life = 1; this.x = Math.random()*w; this.y = Math.random()*h; }
                        this.size = this.life * 4;
                        this.color = `hsl(${180 + this.life * 60}, 100%, ${50 + this.life * 30}%)`;
                        break;
                    case "Procedural":
                        this.angle += 0.04;
                        this.x += Math.sin(this.angle) * 2;
                        this.y += Math.cos(this.angle) * 2;
                        this.color = '#a020f0';
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
                        this.color = '#ffcc00';
                        break;
                    case "Fluid Dynamics":
                        this.angle += 0.03;
                        this.vx = Math.sin(this.y * 0.015 + this.angle) * 0.8;
                        this.vy = -Math.random() * 2 - 0.5;
                        this.x += this.vx; this.y += this.vy;
                        if (this.y < 0) this.y = h;
                        this.color = '#0088ff';
                        break;
                    case "GPU Compute":
                        this.x += (Math.round(this.baseX / 15) * 15 - this.x) * 0.15;
                        this.y += (Math.round(this.baseY / 15) * 15 - this.y) * 0.15;
                        this.baseX += (Math.random()-0.5) * 2;
                        this.baseY += (Math.random()-0.5) * 2;
                        this.color = '#00ffcc';
                        break;
                    case "State Lifecycle":
                        this.size += 0.05;
                        this.life -= 0.015;
                        if (this.life <= 0) { this.life = 1; this.size = 1.5; this.x = Math.random()*w; this.y = Math.random()*h; }
                        this.color = `rgba(255, 255, 255, ${this.life})`;
                        break;
                    case "Environment Forces":
                        this.vx += 0.08;
                        this.x += this.vx; this.y += this.vy;
                        if (this.x > w) { this.x = 0; this.vx = 0; }
                        this.color = '#cccccc';
                        break;
                    case "Hybrid Composite":
                        this.x += this.vx; this.y += this.vy;
                        if (this.x < 0 || this.x > w) this.vx *= -1;
                        if (this.y < 0 || this.y > h) this.vy *= -1;
                        this.color = '#ff8800';
                        break;
                    case "Advanced Quantum":
                        if (Math.random() < 0.02) { this.x = Math.random()*w; this.y = Math.random()*h; }
                        this.x += (Math.random() - 0.5) * 0.8;
                        this.y += (Math.random() - 0.5) * 0.8;
                        this.color = '#ffffff';
                        break;
                }
                if (this.x !== undefined) {
                    this.x = Math.max(-10, Math.min(w + 10, this.x));
                    this.y = Math.max(-10, Math.min(h + 10, this.y));
                }
            }

            draw(ctx) {
                ctx.fillStyle = this.color;
                ctx.fillRect(this.x, this.y, this.size, this.size);
            }
        }

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
                particles[i] = new HybridParticle();
            }
            document.getElementById('hud-count').innerText = engineConfig.count.toLocaleString();
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

        // Connection lines cache (drawn only for Hybrid)
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

        function animate() {
            ctx.fillStyle = 'rgba(2, 3, 5, 0.25)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const layer = engineConfig.layer;
            const len = particles.length;
            for (let i = 0; i < len; i++) {
                particles[i].update(layer);
                particles[i].draw(ctx);
            }

            drawConnections();

            frames++;
            const now = performance.now();
            if (now - lastTime >= 1000) {
                document.getElementById('hud-fps').innerText = frames;
                frames = 0; lastTime = now;
            }

            requestAnimationFrame(animate);
        }

        window.onload = () => {
            const firstItem = document.querySelector('.particle-item');
            if (firstItem) selectParticle(1, firstItem);
            animate();
        };
