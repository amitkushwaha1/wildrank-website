"use client";

import { useEffect, useRef, useState } from "react";

/**
 * HeroBackground
 * - If /hero-video.mp4 exists in /public, it plays as a full-bleed background video.
 * - Otherwise (or until it loads) an animated canvas "particle network" renders,
 *   giving a flowing, tech-style motion background similar to modern agency sites.
 */
export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [videoOk, setVideoOk] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    let raf = 0;

    const PARTICLE_COUNT = Math.min(90, Math.floor((width * height) / 16000));
    const colors = ["#2563EB", "#7C3AED", "#FF6B35"];

    type P = { x: number; y: number; vx: number; vy: number; r: number; c: string };
    const particles: P[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
      c: colors[Math.floor(Math.random() * colors.length)],
    }));

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // move + draw nodes
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = 0.6;
        ctx.fill();
      }

      // connect nearby nodes
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = a.c;
            ctx.globalAlpha = (1 - dist / 130) * 0.18;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Optional real video — drop /public/hero-video.mp4 to enable */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setVideoOk(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoOk ? "opacity-100" : "opacity-0"}`}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Animated canvas fallback / always-on tech motion */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${videoOk ? "opacity-0" : "opacity-100"}`}
      />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/40 to-[#0a0a0a] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/60 pointer-events-none" />
    </div>
  );
}
