"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const PLATFORMS = [
  { name: "ChatGPT",           color: "#10A37F", angle: 0 },
  { name: "Gemini",            color: "#4285F4", angle: 60 },
  { name: "Perplexity",        color: "#20B8CD", angle: 120 },
  { name: "DeepSeek",          color: "#7C3AED", angle: 180 },
  { name: "Claude",            color: "#CC9B7A", angle: 240 },
  { name: "MS Copilot",        color: "#2563EB", angle: 300 },
];

export default function SEOUniverse() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // --- Generate sphere nodes on a geodesic distribution ---
    const NUM_NODES = 120;
    type Node3D = { x: number; y: number; z: number; ox: number; oy: number; oz: number };
    const nodes: Node3D[] = [];
    const PHI = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < NUM_NODES; i++) {
      const y  = 1 - (i / (NUM_NODES - 1)) * 2;
      const r  = Math.sqrt(1 - y * y);
      const th = PHI * i;
      nodes.push({ x: Math.cos(th)*r, y, z: Math.sin(th)*r, ox: 0, oy: 0, oz: 0 });
    }

    const rotX = (p: Node3D, a: number) => ({
      ...p,
      y: p.y * Math.cos(a) - p.z * Math.sin(a),
      z: p.y * Math.sin(a) + p.z * Math.cos(a),
    });
    const rotY = (p: Node3D, a: number) => ({
      ...p,
      x: p.x * Math.cos(a) + p.z * Math.sin(a),
      z: -p.x * Math.sin(a) + p.z * Math.cos(a),
    });

    const CONN_DIST = 0.45;

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const cx = W / 2;
      const cy = H / 2;
      const R  = Math.min(W, H) * 0.34;

      t += 0.004;

      // Rotate all nodes
      const rotated = nodes.map(n => rotY(rotX({ ...n }, t * 0.4), t));

      // Sort back-to-front
      rotated.sort((a, b) => a.z - b.z);

      // Project to 2D
      const fov = 2.2;
      const proj = rotated.map(n => {
        const s = fov / (fov + n.z + 1.2);
        return { sx: cx + n.x * R * s, sy: cy + n.y * R * s, z: n.z, s };
      });

      // Draw connections
      for (let i = 0; i < rotated.length; i++) {
        for (let j = i + 1; j < rotated.length; j++) {
          const a = rotated[i], b = rotated[j];
          const dx = a.x-b.x, dy = a.y-b.y, dz = a.z-b.z;
          const dist = Math.sqrt(dx*dx+dy*dy+dz*dz);
          if (dist < CONN_DIST) {
            const avg_z = (a.z + b.z) / 2;
            const alpha = (1 - dist / CONN_DIST) * (0.06 + 0.12 * ((avg_z + 1) / 2));
            ctx.beginPath();
            ctx.moveTo(proj[i].sx, proj[i].sy);
            ctx.lineTo(proj[j].sx, proj[j].sy);
            ctx.strokeStyle = `rgba(37,99,235,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < proj.length; i++) {
        const { sx, sy, z, s } = proj[i];
        const brightness = (z + 1) / 2;
        const r = s * 3.2;
        const pulse = 0.7 + 0.3 * Math.sin(t * 3 + i * 0.3);

        // Glow
        const grd = ctx.createRadialGradient(sx, sy, 0, sx, sy, r * 3);
        grd.addColorStop(0, `rgba(37,99,235,${brightness * 0.25 * pulse})`);
        grd.addColorStop(1, `rgba(37,99,235,0)`);
        ctx.beginPath();
        ctx.arc(sx, sy, r * 3, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(sx, sy, r * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${brightness > 0.6 ? "124,58,237" : "37,99,235"},${0.4 + brightness * 0.5})`;
        ctx.fill();
      }

      // --- Draw orbiting AI platforms ---
      const orbitR = R * 1.38;
      PLATFORMS.forEach((pl, idx) => {
        const speed  = 0.18 + idx * 0.03;
        const baseA  = (pl.angle * Math.PI) / 180;
        const angle  = baseA + t * speed;
        const tiltY  = Math.cos(t * 0.15 + idx) * 0.22;
        const tiltX  = Math.sin(t * 0.12 + idx) * 0.14;
        const px = cx + Math.cos(angle) * orbitR;
        const py = cy + Math.sin(angle) * orbitR * 0.45 + Math.sin(t + idx) * 18;
        // depth fake
        const depthScale = 0.8 + 0.2 * Math.sin(angle);
        const alpha = 0.6 + 0.4 * depthScale;

        // Connection line to sphere surface
        const lineEndX = cx + Math.cos(angle) * (R * 0.92);
        const lineEndY = cy + Math.sin(angle) * (R * 0.4);
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(lineEndX, lineEndY);
        const lineGrd = ctx.createLinearGradient(px, py, lineEndX, lineEndY);
        lineGrd.addColorStop(0, `rgba(${hexToRgb(pl.color)},0.5)`);
        lineGrd.addColorStop(1, `rgba(${hexToRgb(pl.color)},0.05)`);
        ctx.strokeStyle = lineGrd;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 5]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Dot at connection point
        ctx.beginPath();
        ctx.arc(lineEndX, lineEndY, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(pl.color)},0.7)`;
        ctx.fill();

        // Pill badge
        const bW = 90 * depthScale;
        const bH = 22 * depthScale;
        const bX = px - bW / 2;
        const bY = py - bH / 2;
        const br = bH / 2;

        ctx.beginPath();
        ctx.roundRect(bX, bY, bW, bH, br);
        ctx.fillStyle = `rgba(10,10,20,${0.75 * alpha})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(${hexToRgb(pl.color)},${0.5 * alpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Color dot
        ctx.beginPath();
        ctx.arc(bX + bH * 0.5, py, 3.5 * depthScale, 0, Math.PI * 2);
        ctx.fillStyle = pl.color;
        ctx.fill();

        // Text
        ctx.font = `${Math.round(10 * depthScale)}px Inter, sans-serif`;
        ctx.fillStyle = `rgba(220,230,255,${alpha})`;
        ctx.textBaseline = "middle";
        ctx.fillText(pl.name, bX + bH * 0.95, py);
      });

      // Centre glow
      const cGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.35);
      cGrd.addColorStop(0, "rgba(37,99,235,0.08)");
      cGrd.addColorStop(0.5, "rgba(124,58,237,0.04)");
      cGrd.addColorStop(1, "rgba(0,0,0,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = cGrd;
      ctx.fill();

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.95 }}
    />
  );
}

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
