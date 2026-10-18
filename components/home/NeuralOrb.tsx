"use client";

import { useEffect, useRef } from "react";
import {
  OpenAILogo,
  GeminiLogo,
  PerplexityLogo,
  ClaudeLogo,
  DeepSeekLogo,
  GoogleAILogo,
} from "@/components/shared/AIPlatformLogos";

/**
 * NeuralOrb — the hero globe.
 *
 * Adapted from the reference build (a draggable glass sphere with neural
 * nodes), with two deliberate changes:
 *
 *  1. Recoloured to the brand. The reference is cobalt/slate (#2563EB,
 *     #94A3B8), which reads as a different product next to an orange logo.
 *     Every accent here is the text-safe brand orange or a warm neutral.
 *
 *  2. The AI platform labels are DOM, not canvas text. Canvas text is
 *     invisible to search engines and to screen readers — the reference drew
 *     "ChatGPT"/"Gemini" into the bitmap, so those words did not exist in the
 *     document at all. Here they are real elements.
 *
 * It replaces a 120-node sphere that ran an O(n²) distance loop (14,400 checks
 * per frame) to draw its filaments. This one bounds the inner loop, so it is
 * both prettier and cheaper.
 */
const PLATFORMS = [
  { name: "ChatGPT",    Logo: OpenAILogo,     pos: "left-[1%] top-[15%]",     delay: "0s" },
  { name: "Gemini",     Logo: GeminiLogo,     pos: "right-[0%] top-[7%]",     delay: "0.9s" },
  { name: "Perplexity", Logo: PerplexityLogo, pos: "right-[3%] top-[45%]",    delay: "1.7s" },
  { name: "DeepSeek",   Logo: DeepSeekLogo,   pos: "right-[8%] bottom-[14%]", delay: "0.5s" },
  { name: "Claude",     Logo: ClaudeLogo,     pos: "left-[6%] bottom-[9%]",   delay: "1.3s" },
  { name: "Google AI",  Logo: GoogleAILogo,   pos: "left-[0%] top-[45%]",     delay: "2.1s" },
];

const ORANGE = "207, 59, 15";
const ORANGE_DEEP = "120, 34, 10";
const WARM_BACK = "196, 170, 158";
const WARM_LINE = "150, 112, 92";

interface OrbState {
  rx: number; ry: number;
  mouseX: number; mouseY: number; tx: number; ty: number;
  dragging: boolean; lastX: number; lastY: number; vx: number; vy: number;
  pulse: number; time: number; speed: number;
}

export default function NeuralOrb({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // Held in a ref so the pointer handlers in JSX and the render loop in the
  // effect mutate the same object without re-running the effect.
  const stateRef = useRef<OrbState>({
    rx: 0.3, ry: 0.5,
    mouseX: 0, mouseY: 0, tx: 0, ty: 0,
    dragging: false, lastX: 0, lastY: 0, vx: 0, vy: 0,
    pulse: 0, time: 0, speed: 0.0035,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const state = stateRef.current;

    let rafId = 0;
    let looping = false;
    let inView = true;
    let dpr = 1;
    let w = 0;
    let h = 0;

    // ── Geometry: golden-ratio spiral, part surface, part interior volume ──
    const COUNT = 200;
    type P = { radius: number; size: number; alpha: number; theta: number; phi: number };
    const pts: P[] = [];
    for (let i = 0; i < COUNT; i++) {
      const inner = i % 4 === 0;
      pts.push({
        radius: inner ? 0.35 + Math.random() * 0.45 : 0.88 + Math.random() * 0.08,
        size: inner ? 1.1 : 1.7 + Math.random() * 1.1,
        alpha: inner ? 0.22 + Math.random() * 0.22 : 0.45 + Math.random() * 0.38,
        theta: Math.acos(1 - (2 * (i + 0.5)) / COUNT),
        phi: Math.PI * (1 + Math.sqrt(5)) * i,
      });
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = () => {
      if (!looping) return;
      rafId = requestAnimationFrame(render);

      state.time += 0.016;
      if (!state.dragging) {
        state.ry += state.speed + state.vy;
        state.rx += state.vx;
        state.vx *= 0.94;
        state.vy *= 0.94;
      }
      state.mouseX += (state.tx - state.mouseX) * 0.08;
      state.mouseY += (state.ty - state.mouseY) * 0.08;
      if (state.pulse > 0) state.pulse = Math.max(0, state.pulse - 0.02);

      const cx = w / 2;
      const cy = h / 2 - h * 0.015;
      // The wrapper reserves ~14% of the square for the floating labels.
      const R = Math.min(w, h) * 0.34;

      ctx.clearRect(0, 0, w, h);

      // 1. Ground contact shadow.
      const shadow = ctx.createRadialGradient(
        cx + state.mouseX * 22, cy + R * 1.16, 6,
        cx + state.mouseX * 22, cy + R * 1.16, R * 1.05
      );
      shadow.addColorStop(0, "rgba(140, 60, 30, 0.14)");
      shadow.addColorStop(0.4, "rgba(140, 60, 30, 0.05)");
      shadow.addColorStop(1, "rgba(140, 60, 30, 0)");
      ctx.beginPath();
      ctx.ellipse(cx + state.mouseX * 22, cy + R * 1.16, R * 0.8, R * 0.2, 0, 0, Math.PI * 2);
      ctx.fillStyle = shadow;
      ctx.fill();

      // 2. Glass body.
      const lx = cx - R * 0.42 + state.mouseX * 36;
      const ly = cy - R * 0.42 + state.mouseY * 36;
      const body = ctx.createRadialGradient(lx, ly, R * 0.05, cx, cy, R * 1.02);
      body.addColorStop(0, "#ffffff");
      body.addColorStop(0.2, "#fff8f5");
      body.addColorStop(0.48, "#fbe7de");
      body.addColorStop(0.72, "#f2cbb8");
      body.addColorStop(0.9, "#dda486");
      body.addColorStop(1, "#b8795a");

      const rotX = state.rx + state.mouseY * 0.3;
      const rotY = state.ry + state.mouseX * 0.3;
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = body;
      ctx.fill();
      ctx.clip();

      // 3. Latitude rings — the equator carries the brand colour.
      [-0.62, -0.3, 0, 0.3, 0.62].forEach((lat, i) => {
        const rr = Math.cos(lat) * R * 0.95;
        const ry = Math.sin(lat) * R * 0.95;
        ctx.beginPath();
        for (let s = 0; s <= 64; s++) {
          const a = (s / 64) * Math.PI * 2;
          const z0 = rr * Math.sin(a);
          const x1 = rr * Math.cos(a) * cosY - z0 * sinY;
          const z1 = rr * Math.cos(a) * sinY + z0 * cosY;
          const y2 = ry * cosX - z1 * sinX;
          if (s === 0) ctx.moveTo(cx + x1, cy + y2);
          else ctx.lineTo(cx + x1, cy + y2);
        }
        ctx.strokeStyle = i === 2
          ? `rgba(${ORANGE}, ${0.26 + state.pulse * 0.3})`
          : `rgba(${WARM_LINE}, 0.10)`;
        ctx.lineWidth = i === 2 ? 1.4 : 1;
        ctx.stroke();
      });

      // 4. Project nodes onto the rotated sphere.
      type Proj = { x: number; y: number; z: number; size: number; alpha: number };
      const proj: Proj[] = [];
      for (const p of pts) {
        const wob = Math.sin(state.time * 1.8 + p.phi * 0.3) * 0.03;
        const r = (p.radius + wob) * R;
        const px = r * Math.sin(p.theta) * Math.cos(p.phi + state.time * 0.12);
        const py = r * Math.cos(p.theta);
        const pz = r * Math.sin(p.theta) * Math.sin(p.phi + state.time * 0.12);
        const x1 = px * cosY - pz * sinY;
        const z1 = px * sinY + pz * cosY;
        const y2 = py * cosX - z1 * sinX;
        const z2 = py * sinX + z1 * cosX;
        proj.push({ x: cx + x1, y: cy + y2, z: z2, size: p.size, alpha: p.alpha });
      }
      proj.sort((a, b) => a.z - b.z);

      // 5. Filaments — bounded inner loop, front hemisphere only.
      ctx.strokeStyle = `rgba(${WARM_LINE}, 0.13)`;
      ctx.lineWidth = 0.7;
      for (let i = 0; i < proj.length; i += 3) {
        const a = proj[i];
        if (a.z < 0) continue;
        for (let j = i + 1; j < Math.min(i + 7, proj.length); j++) {
          const b = proj[j];
          if (b.z < 0) continue;
          const dx = a.x - b.x, dy = a.y - b.y;
          if (dx * dx + dy * dy < 1500) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // 6. Nodes, depth-sorted.
      for (const p of proj) {
        const depth = (p.z + R) / (R * 2);
        const a = Math.max(0.1, Math.min(0.95, p.alpha * (0.35 + depth * 0.75)));
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.7, p.size * (0.6 + depth * 0.6)), 0, Math.PI * 2);
        if (p.z > R * 0.4) ctx.fillStyle = `rgba(${ORANGE_DEEP}, ${a})`;
        else if (p.z > 0) ctx.fillStyle = `rgba(${ORANGE}, ${a * 0.9})`;
        else ctx.fillStyle = `rgba(${WARM_BACK}, ${a * 0.7})`;
        ctx.fill();
      }

      // 7. Limbal halo — the refracted edge that sells the glass.
      const rim = ctx.createRadialGradient(cx, cy, R * 0.86, cx, cy, R * 1.01);
      rim.addColorStop(0, "rgba(255,255,255,0)");
      rim.addColorStop(0.7, "rgba(255,255,255,0.42)");
      rim.addColorStop(0.93, `rgba(${ORANGE}, 0.26)`);
      rim.addColorStop(1, "rgba(96, 45, 24, 0.5)");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = rim;
      ctx.fill();

      // 8. Specular glint.
      const glint = ctx.createRadialGradient(lx, ly, R * 0.02, lx, ly, R * 0.42);
      glint.addColorStop(0, "rgba(255,255,255,0.95)");
      glint.addColorStop(0.28, "rgba(255,255,255,0.55)");
      glint.addColorStop(0.7, "rgba(255,255,255,0.08)");
      glint.addColorStop(1, "rgba(255,255,255,0)");
      ctx.beginPath();
      ctx.ellipse(lx, ly, R * 0.3, R * 0.2, -Math.PI / 6, 0, Math.PI * 2);
      ctx.fillStyle = glint;
      ctx.fill();
      ctx.restore();

      // 9. Hairline + dashed orbit.
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(96, 45, 24, 0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.save();
      ctx.beginPath();
      ctx.ellipse(cx, cy, R * 1.28, R * 0.42, state.rx * 0.5, 0, Math.PI * 2);
      ctx.setLineDash([4, 7]);
      ctx.strokeStyle = `rgba(${ORANGE}, 0.18)`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    };

    const shouldRun = () => !document.hidden && inView && !reduced;

    const start = () => {
      if (looping || !shouldRun()) return;
      looping = true;
      rafId = requestAnimationFrame(render);
    };
    const stop = () => {
      looping = false;
      cancelAnimationFrame(rafId);
    };

    const sync = () => (shouldRun() ? start() : stop());

    resize();
    render();            // paint one frame immediately
    if (reduced) stop(); // …and stay still
    else start();

    const onResize = () => {
      resize();
      if (reduced) { const was = looping; looping = true; render(); looping = was; }
    };
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", sync);

    const io = new IntersectionObserver(
      ([e]) => { inView = e.isIntersecting; sync(); },
      { rootMargin: "80px" }
    );
    io.observe(canvas);

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", sync);
      io.disconnect();
    };
  }, []);

  const grab = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const s = stateRef.current;
    s.dragging = true;
    s.lastX = e.clientX;
    s.lastY = e.clientY;
    s.pulse = 1;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const drag = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const s = stateRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    s.tx = Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width) * 2 - 1));
    s.ty = Math.max(-1, Math.min(1, ((e.clientY - rect.top) / rect.height) * 2 - 1));
    if (s.dragging) {
      s.vy = (e.clientX - s.lastX) * 0.005;
      s.vx = -(e.clientY - s.lastY) * 0.005;
      s.lastX = e.clientX;
      s.lastY = e.clientY;
    }
  };

  const release = () => { stateRef.current.dragging = false; };

  return (
    <div className={`relative mx-auto aspect-square w-full max-w-[540px] ${className}`}>
      {/* Warm halo behind the sphere. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[10%] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(207,59,15,0.10) 0%, rgba(207,59,15,0.04) 45%, rgba(207,59,15,0) 70%)",
        }}
      />

      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Interactive globe of the AI search surfaces Wildrank optimises for: ChatGPT, Gemini, Perplexity, DeepSeek, Claude and Google AI"
        className="absolute inset-0 h-full w-full cursor-grab touch-none active:cursor-grabbing"
        onPointerDown={grab}
        onPointerMove={drag}
        onPointerUp={release}
        onPointerCancel={release}
        onPointerLeave={() => { const s = stateRef.current; s.dragging = false; s.tx = 0; s.ty = 0; }}
        onClick={() => { stateRef.current.pulse = 1; }}
      />

      {/* Real DOM labels — visible to crawlers, screen readers and users.
          The marks are the vendors' own, on a small neutral badge: a coloured
          dot said "something of this brand" where the logo says which. */}
      {PLATFORMS.map(({ name, Logo, pos, delay }) => (
        <span
          key={name}
          className={`animate-float absolute ${pos} flex items-center gap-1.5 rounded-full border border-hairline/10 bg-canvas/70 py-1 pl-1.5 pr-2.5 text-[11px] font-semibold text-ink shadow-[0_6px_20px_rgba(140,60,30,0.10)] backdrop-blur-md`}
          style={{ animationDelay: delay }}
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tint/10">
            <Logo className="h-3.5 w-3.5" />
          </span>
          {name}
        </span>
      ))}

    </div>
  );
}
