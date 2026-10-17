"use client";

import { useEffect, useRef } from "react";

/**
 * FallingStars — ambient background motion.
 *
 * A light theme inverts the usual star effect: a "falling star" has to be a
 * *darker* streak to be visible at all, so the streaks are drawn in the brand
 * orange at low alpha over the near-white canvas rather than in white.
 *
 * Deliberately cheap, because this runs behind every hero on the site:
 *   - the device pixel ratio is capped at 1.5 (a background wash gains nothing
 *     from full retina resolution and costs double the fill rate)
 *   - the loop is throttled to ~30 fps; a drifting ambience is indistinguishable
 *     from 60 fps and this halves the CPU the tab spends on it
 *   - it stops entirely when the tab is hidden or the canvas scrolls off screen,
 *     judged with an IntersectionObserver rather than a scroll listener
 *   - `prefers-reduced-motion` gets one static frame and no loop at all
 *   - no shadowBlur: that forces a per-star offscreen blur pass every frame
 *
 * Intensity was raised ~30% after review — the first version was tasteful but
 * too quiet to register as motion on a bright hero, which is the whole point of
 * putting it there. Trail length, stroke weight, alpha and spawn rate all moved
 * together rather than alpha alone, because raising alpha by itself reads as a
 * smear rather than as a star.
 */
export default function FallingStars({
  className = "",
  density = 1,
}: {
  className?: string;
  density?: number;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // 207,59,15 is the text-safe brand orange; 124,106,98 is a warm neutral.
    const ORANGE = "207, 59, 15";
    const WARM = "124, 106, 98";

    type Twinkle = { x: number; y: number; r: number; base: number; phase: number; speed: number };
    type Star = {
      x: number; y: number; len: number; speed: number;
      opacity: number; tail: number; rgb: string;
    };

    let twinkles: Twinkle[] = [];
    const stars: Star[] = [];

    const makeStar = (spread: boolean): Star => ({
      x: Math.random() * (width + 260) - 80,
      y: spread ? Math.random() * height * 0.7 : -80 - Math.random() * 120,
      len: 88 + Math.random() * 110,
      speed: 3.6 + Math.random() * 4.4,
      opacity: 0.21 + Math.random() * 0.26,
      tail: 1.1 + Math.random() * 0.85,
      rgb: Math.random() > 0.35 ? ORANGE : WARM,
    });

    const seed = () => {
      const count = Math.min(120, Math.max(36, Math.round((width * height) / 20000 * density)));
      twinkles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.6 + Math.random() * 1.1,
        base: 0.08 + Math.random() * 0.16,
        phase: Math.random() * Math.PI * 2,
        speed: 0.006 + Math.random() * 0.014,
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const drawFrame = (animate: boolean) => {
      ctx.clearRect(0, 0, width, height);

      for (const t of twinkles) {
        if (animate) t.phase += t.speed;
        const a = t.base + Math.sin(t.phase) * 0.05;
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${WARM}, ${Math.max(0.02, a)})`;
        ctx.fill();
      }

      for (let i = stars.length - 1; i >= 0; i--) {
        const s = stars[i];
        // 52° down-and-left, matching the diagonal of the hero's own layout.
        const cos = Math.cos(Math.PI / 3.4);
        const sin = Math.sin(Math.PI / 3.4);
        const tx = s.x - cos * s.len;
        const ty = s.y - sin * s.len;

        const grad = ctx.createLinearGradient(tx, ty, s.x, s.y);
        grad.addColorStop(0, `rgba(${s.rgb}, 0)`);
        grad.addColorStop(0.75, `rgba(${s.rgb}, ${s.opacity * 0.35})`);
        grad.addColorStop(1, `rgba(${s.rgb}, ${s.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.tail;
        ctx.lineCap = "round";
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.tail * 1.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.rgb}, ${s.opacity * 1.15})`;
        ctx.fill();

        if (animate) {
          s.x += cos * s.speed;
          s.y += sin * s.speed;
          if (s.x > width + 260 || s.y > height + 200) stars.splice(i, 1);
        }
      }
    };

    resize();

    if (reduced) {
      // One static, calm frame — still ornamental, entirely motionless.
      drawFrame(false);
      const onResize = () => { resize(); drawFrame(false); };
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }

    for (let i = 0; i < 3; i++) stars.push(makeStar(true));

    let last = 0;
    let frame = 0;
    let inView = true;
    let looping = false;

    const loop = (now: number) => {
      if (!looping) return;
      raf = requestAnimationFrame(loop);
      if (now - last < 33) return; // ~30 fps
      last = now;
      frame++;
      if (frame % 68 === 0 && stars.length < 7) stars.push(makeStar(false));
      drawFrame(true);
    };

    const shouldRun = () => inView && !document.hidden;
    const start = () => {
      if (looping || !shouldRun()) return;
      looping = true;
      last = 0;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      looping = false;
      cancelAnimationFrame(raf);
    };
    const sync = () => (shouldRun() ? start() : stop());

    start();

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", sync);

    // Cheaper than a scroll listener, which reflows on every frame.
    const io = new IntersectionObserver(
      ([entry]) => { inView = entry.isIntersecting; sync(); },
      { rootMargin: "120px" }
    );
    io.observe(canvas);

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", sync);
      io.disconnect();
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
