"use client";

import { useEffect, useRef } from "react";

/**
 * FallingStars — ambient background motion for the whole site.
 *
 * A light theme inverts the usual star effect: a "falling star" has to be a
 * *darker* streak to be visible at all, so the streaks are drawn in brand and
 * palette colours at low alpha over the near-white canvas rather than in white.
 *
 * Two presets, because the effect has two jobs:
 *
 *   - "hero"    — mounted inside the hero, behind its content, where it is the
 *                 showcase and can run at full strength.
 *   - "ambient" — mounted once in the root layout as a fixed layer, so every
 *                 route carries the motion rather than only the homepage. It
 *                 runs lighter and thinner than the hero's, because it crosses
 *                 body copy on the way down. An overlay is already the
 *                 established pattern on this site: the film grain is a fixed
 *                 `body::after` at z-index 70, and this sits below the grain
 *                 and below the sticky navbar.
 *
 * Deliberately cheap, because one instance now runs on every page:
 *   - the device pixel ratio is capped (1.5 hero, 1 ambient) — a background
 *     wash gains nothing from full retina resolution and costs double the fill
 *   - the loop is throttled to ~30 fps; a drifting ambience is indistinguishable
 *     from 60 fps and this halves the CPU the tab spends on it
 *   - it stops entirely when the tab is hidden, and when the canvas scrolls off
 *     screen (the hero instance — a fixed one is on screen by definition)
 *   - `prefers-reduced-motion` gets one static frame and no loop at all
 *   - no shadowBlur: that forces a per-star offscreen blur pass every frame
 *
 * Colour. The streaks used to alternate between two warm tones. The palette
 * below is sampled from colours the site already uses: the brand orange in both
 * its display (#FC4812) and text-safe (#CF3B0F) values, plus blue-600,
 * cyan-600 and violet-500 — which between them appear several hundred times
 * across the components — and one warm neutral for depth. Brand orange keeps
 * the heaviest weighting so the wash still reads as Wildrank, and the cool
 * tones are what let individual streaks register as separate events instead of
 * one orange smear.
 *
 * Intensity was raised twice: ~30% on the first review, and again here, when
 * the note was that the stars could still be pushed. In each case trail length,
 * stroke weight, alpha, streak count and spawn rate moved together rather than
 * alpha alone, because raising alpha by itself reads as a smear.
 */
const PALETTE: { rgb: string; weight: number; alpha: number }[] = [
  { rgb: "207, 59, 15", weight: 26, alpha: 1 }, // brand orange, text-safe
  { rgb: "252, 72, 18", weight: 16, alpha: 0.85 }, // brand orange, display
  { rgb: "37, 99, 235", weight: 20, alpha: 0.8 }, // blue-600
  { rgb: "8, 145, 178", weight: 14, alpha: 0.85 }, // cyan-600
  { rgb: "139, 92, 246", weight: 10, alpha: 0.75 }, // violet-500
  { rgb: "124, 106, 98", weight: 14, alpha: 0.9 }, // warm neutral
];

const CUMULATIVE: number[] = PALETTE.reduce<number[]>((acc, entry) => {
  acc.push((acc[acc.length - 1] ?? 0) + entry.weight);
  return acc;
}, []);
const TOTAL_WEIGHT = CUMULATIVE[CUMULATIVE.length - 1];

function pick() {
  const roll = Math.random() * TOTAL_WEIGHT;
  for (let i = 0; i < CUMULATIVE.length; i++) {
    if (roll < CUMULATIVE[i]) return PALETTE[i];
  }
  return PALETTE[0];
}

type Preset = {
  opacityMin: number; opacityRange: number;
  lenMin: number; lenRange: number;
  tailMin: number; tailRange: number;
  maxStreaks: number; spawnEvery: number; initialStreaks: number;
  twinkleDivisor: number; twinkleCap: number; twinkleAlpha: number;
  dprCap: number;
};

const PRESETS: Record<"hero" | "ambient", Preset> = {
  hero: {
    opacityMin: 0.3, opacityRange: 0.34,
    lenMin: 108, lenRange: 130,
    tailMin: 1.3, tailRange: 1,
    maxStreaks: 9, spawnEvery: 48, initialStreaks: 3,
    twinkleDivisor: 16000, twinkleCap: 150, twinkleAlpha: 0.2,
    dprCap: 1.5,
  },
  ambient: {
    opacityMin: 0.19, opacityRange: 0.28,
    lenMin: 86, lenRange: 110,
    tailMin: 1, tailRange: 0.8,
    maxStreaks: 7, spawnEvery: 60, initialStreaks: 2,
    twinkleDivisor: 19000, twinkleCap: 120, twinkleAlpha: 0.15,
    dprCap: 1,
  },
};

export default function FallingStars({
  className = "",
  density = 1,
  variant = "hero",
  fixed = false,
}: {
  className?: string;
  density?: number;
  variant?: "hero" | "ambient";
  /** Pin to the viewport instead of filling the nearest positioned ancestor. */
  fixed?: boolean;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const P = PRESETS[variant];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    type Twinkle = { x: number; y: number; r: number; base: number; phase: number; speed: number; rgb: string };
    type Star = {
      x: number; y: number; len: number; speed: number;
      opacity: number; tail: number; rgb: string;
    };

    let twinkles: Twinkle[] = [];
    const stars: Star[] = [];

    const makeStar = (spread: boolean): Star => {
      const colour = pick();
      return {
        x: Math.random() * (width + 260) - 80,
        y: spread ? Math.random() * height * 0.7 : -80 - Math.random() * 120,
        len: P.lenMin + Math.random() * P.lenRange,
        speed: 3.6 + Math.random() * 4.4,
        opacity: (P.opacityMin + Math.random() * P.opacityRange) * colour.alpha,
        tail: P.tailMin + Math.random() * P.tailRange,
        rgb: colour.rgb,
      };
    };

    const seed = () => {
      const count = Math.min(
        P.twinkleCap,
        Math.max(30, Math.round(((width * height) / P.twinkleDivisor) * density))
      );
      twinkles = Array.from({ length: count }, () => {
        const colour = pick();
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r: 0.9 + Math.random() * 1.6,
          base: P.twinkleAlpha * (0.55 + Math.random() * 1.1),
          phase: Math.random() * Math.PI * 2,
          speed: 0.006 + Math.random() * 0.014,
          rgb: colour.rgb,
        };
      });
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, P.dprCap);
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
        const a = Math.max(0.02, t.base + Math.sin(t.phase) * 0.05);
        // A four-point sparkle, not a dot. At two pixels across, a circle on a
        // near-white page reads as dust; a diamond reads as a star, which is
        // what it is meant to be. Same cost — one path, one fill.
        ctx.beginPath();
        ctx.moveTo(t.x, t.y - t.r);
        ctx.lineTo(t.x + t.r * 0.62, t.y);
        ctx.lineTo(t.x, t.y + t.r);
        ctx.lineTo(t.x - t.r * 0.62, t.y);
        ctx.closePath();
        ctx.fillStyle = `rgba(${t.rgb}, ${a})`;
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

    for (let i = 0; i < P.initialStreaks; i++) stars.push(makeStar(true));

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
      if (frame % P.spawnEvery === 0 && stars.length < P.maxStreaks) stars.push(makeStar(false));
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
  }, [density, variant]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none ${fixed ? "fixed" : "absolute"} inset-0 h-full w-full ${className}`}
    />
  );
}
