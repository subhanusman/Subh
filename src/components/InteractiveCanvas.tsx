import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, Sparkles, Box, Waves } from 'lucide-react';

type SimulationMode = 'polyhedron' | 'fluid' | 'waveform';

export const InteractiveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mode, setMode] = useState<SimulationMode>('polyhedron');
  const [isPlaying, setIsPlaying] = useState(true);
  const [interacted, setInteracted] = useState(false);

  // Mouse tracking
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isHovering: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Handle high DPI resize
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D Polyhedron vertices (Icosahedron)
    const phi = (1 + Math.sqrt(5)) / 2;
    const verticesBase = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
    ].map(([x, y, z]) => {
      const len = Math.hypot(x, y, z);
      return [x / len, y / len, z / len];
    });

    const edges = [
      [0, 11], [0, 5], [0, 1], [0, 7], [0, 10],
      [1, 5], [1, 9], [1, 8], [1, 7],
      [2, 11], [2, 10], [2, 6], [2, 3], [2, 4],
      [3, 4], [3, 9], [3, 8], [3, 6],
      [4, 5], [4, 9], [4, 11],
      [5, 9], [5, 11],
      [6, 7], [6, 8], [6, 10],
      [7, 8], [7, 10],
      [8, 9],
      [10, 11]
    ];

    // Particles for fluid
    const particleCount = 120;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * 800,
      y: Math.random() * 500,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      radius: Math.random() * 2 + 1,
      baseColor: Math.random() > 0.5 ? 'rgba(255, 255, 255,' : 'rgba(212, 212, 216,',
    }));

    const render = () => {
      if (isPlaying) {
        time += 0.015;
      }

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      // Clear frame with deep obsidian
      ctx.fillStyle = '#08080a';
      ctx.fillRect(0, 0, w, h);

      // Render subtle background coordinate grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      const cx = w / 2;
      const cy = h / 2;

      // MODE 1: 3D POLYHEDRON
      if (mode === 'polyhedron') {
        const rotX = time * 0.4 + (mouseRef.current.y / h - 0.5) * 1.8;
        const rotY = time * 0.6 + (mouseRef.current.x / w - 0.5) * 2.2;
        const rotZ = time * 0.2;

        const scale = Math.min(w, h) * 0.32;

        // 3D rotation matrix
        const rotatedVertices = verticesBase.map(([vx, vy, vz]) => {
          // Rotate Y
          let x = vx * Math.cos(rotY) + vz * Math.sin(rotY);
          let z = -vx * Math.sin(rotY) + vz * Math.cos(rotY);
          let y = vy;

          // Rotate X
          const y1 = y * Math.cos(rotX) - z * Math.sin(rotX);
          const z1 = y * Math.sin(rotX) + z * Math.cos(rotX);

          // Rotate Z
          const x2 = x * Math.cos(rotZ) - y1 * Math.sin(rotZ);
          const y2 = x * Math.sin(rotZ) + y1 * Math.cos(rotZ);

          // Perspective projection
          const fov = 3.2;
          const pZ = z1 + 3.0;
          const projX = cx + (x2 * scale * fov) / pZ;
          const projY = cy + (y2 * scale * fov) / pZ;

          return { px: projX, py: projY, z: z1 };
        });

        // Draw inner glow
        const gradient = ctx.createRadialGradient(cx, cy, 20, cx, cy, scale * 1.2);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.07)');
        gradient.addColorStop(0.5, 'rgba(212, 212, 216, 0.02)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx, cy, scale * 1.2, 0, Math.PI * 2);
        ctx.fill();

        // Draw edges with depth-based alpha
        edges.forEach(([i, j]) => {
          const v1 = rotatedVertices[i];
          const v2 = rotatedVertices[j];
          if (!v1 || !v2) return;

          const avgZ = (v1.z + v2.z) / 2;
          const alpha = Math.max(0.12, Math.min(0.9, (avgZ + 1.2) / 2.4));

          ctx.strokeStyle = `rgba(244, 244, 245, ${alpha})`;
          ctx.lineWidth = alpha > 0.5 ? 1.6 : 1.0;

          ctx.beginPath();
          ctx.moveTo(v1.px, v1.py);
          ctx.lineTo(v2.px, v2.py);
          ctx.stroke();
        });

        // Draw vertices
        rotatedVertices.forEach((v) => {
          const pointAlpha = Math.max(0.2, (v.z + 1.2) / 2.4);
          ctx.fillStyle = `rgba(255, 255, 255, ${pointAlpha})`;
          ctx.beginPath();
          ctx.arc(v.px, v.py, pointAlpha * 3.5, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // MODE 2: KINETIC FLUID PARTICLES
      else if (mode === 'fluid') {
        const mx = mouseRef.current.isHovering ? mouseRef.current.x : cx + Math.sin(time) * 160;
        const my = mouseRef.current.isHovering ? mouseRef.current.y : cy + Math.cos(time * 0.8) * 100;

        // Draw cursor influence field
        const cursorGlow = ctx.createRadialGradient(mx, my, 5, mx, my, 140);
        cursorGlow.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
        cursorGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = cursorGlow;
        ctx.beginPath();
        ctx.arc(mx, my, 140, 0, Math.PI * 2);
        ctx.fill();

        particles.forEach((p, idx) => {
          // Physics step
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 180 && dist > 1) {
            const force = (180 - dist) / 180;
            p.vx += (dx / dist) * force * 0.45;
            p.vy += (dy / dist) * force * 0.45;
          }

          // Damping & drift
          p.vx *= 0.96;
          p.vy *= 0.96;
          p.x += p.vx + Math.sin(time + p.y * 0.02) * 0.4;
          p.y += p.vy + Math.cos(time + p.x * 0.02) * 0.4;

          // Wrap edges
          if (p.x < 0) p.x = w;
          if (p.x > w) p.x = 0;
          if (p.y < 0) p.y = h;
          if (p.y > h) p.y = 0;

          // Connect nearby particles
          for (let j = idx + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const pdist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (pdist < 75) {
              const lineAlpha = (1 - pdist / 75) * 0.25;
              ctx.strokeStyle = `rgba(244, 244, 245, ${lineAlpha})`;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }

          // Draw particle
          ctx.fillStyle = `${p.baseColor} 0.8)`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // MODE 3: SPECTRAL HARMONIC WAVEFORM
      else if (mode === 'waveform') {
        const wavesCount = 5;
        const waveStep = 3;

        for (let waveIdx = 0; waveIdx < wavesCount; waveIdx++) {
          const waveFreq = 0.008 + waveIdx * 0.003;
          const waveSpeed = time * (1.2 + waveIdx * 0.4);
          const amp = 40 + waveIdx * 12 + Math.sin(time * 0.5) * 15;
          const yOffset = cy + (waveIdx - wavesCount / 2) * 22;

          ctx.beginPath();
          for (let x = 0; x <= w; x += waveStep) {
            const mouseInfluence = Math.exp(-Math.pow((x - mouseRef.current.x) / 120, 2)) * 30;
            const y = yOffset + Math.sin(x * waveFreq + waveSpeed) * amp + mouseInfluence;
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }

          const waveAlpha = 0.35 + (waveIdx / wavesCount) * 0.5;
          ctx.strokeStyle = waveIdx === 0 
            ? `rgba(255, 255, 255, ${waveAlpha})` 
            : `rgba(212, 212, 216, ${waveAlpha * 0.7})`;
          ctx.lineWidth = 1.4;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mode, isPlaying]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current.targetX = e.clientX - rect.left;
    mouseRef.current.targetY = e.clientY - rect.top;
    mouseRef.current.isHovering = true;
    if (!interacted) setInteracted(true);
  };

  const handleMouseLeave = () => {
    mouseRef.current.isHovering = false;
  };

  // Touch event handlers for mobile and tablet responsiveness
  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const touch = e.touches[0];
      mouseRef.current.targetX = touch.clientX - rect.left;
      mouseRef.current.targetY = touch.clientY - rect.top;
      mouseRef.current.isHovering = true;
      if (!interacted) setInteracted(true);
    }
  };

  const handleTouchEnd = () => {
    mouseRef.current.isHovering = false;
  };

  return (
    <section id="interactive-lab" className="py-20 sm:py-24 md:py-32 border-b border-zinc-900 bg-[#070709] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 pb-6 border-b border-zinc-800">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
              Experimental Motion Engine · Local JS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Kinetic Spatial Simulation Preview
            </h2>
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex items-center flex-wrap gap-1.5 p-1 bg-zinc-900/90 border border-zinc-800 rounded-md">
            <button
              onClick={() => setMode('polyhedron')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 min-h-[38px] ${
                mode === 'polyhedron'
                  ? 'bg-zinc-100 text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>3D Polyhedron</span>
            </button>

            <button
              onClick={() => setMode('fluid')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 min-h-[38px] ${
                mode === 'fluid'
                  ? 'bg-zinc-100 text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Kinetic Fluid</span>
            </button>

            <button
              onClick={() => setMode('waveform')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 min-h-[38px] ${
                mode === 'waveform'
                  ? 'bg-zinc-100 text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Waves className="w-3.5 h-3.5" />
              <span>Waveform</span>
            </button>
          </div>
        </div>

        {/* Canvas Display Container */}
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#08080a] shadow-2xl group touch-none">
          <canvas
            ref={canvasRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchMove}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="w-full h-[280px] sm:h-[360px] md:h-[440px] cursor-crosshair block"
          />

          {/* Canvas Floating HUD & Controls */}
          <div className="absolute top-4 left-4 right-4 sm:top-5 sm:left-5 sm:right-5 flex items-center justify-between pointer-events-none">
            <div className="text-[10px] sm:text-[11px] font-mono text-zinc-400 tracking-wider uppercase bg-zinc-950/80 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded border border-zinc-800 backdrop-blur-sm">
              {mode.toUpperCase()} · 60 FPS
            </div>

            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 sm:p-2.5 rounded bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/80 transition-all cursor-pointer shadow min-w-[36px] min-h-[36px] flex items-center justify-center"
                aria-label={isPlaying ? 'Pause simulation animation' : 'Play simulation animation'}
                title={isPlaying ? 'Pause simulation animation' : 'Play simulation animation'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Interaction Guide Notice */}
          <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-5 sm:right-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] sm:text-xs text-zinc-400 font-mono pointer-events-none bg-black/40 sm:bg-transparent p-2 sm:p-0 rounded">
            <span>Touch or drag across canvas to modulate pitch, inertia, and field velocity</span>
            <span className="hidden md:inline text-zinc-500">Pure Client-Side Math</span>
          </div>
        </div>

      </div>
    </section>
  );
};
