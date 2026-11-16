'use client';

import React, { useEffect, useRef } from 'react';

interface Point3D {
  radius: number;
  size: number;
  alpha: number;
  theta: number;
  phi: number;
}

interface ProjectedPoint {
  x: number;
  y: number;
  z: number;
  size: number;
  alpha: number;
}

export const AiGlobe3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const stateRef = useRef({
    time: 0,
    rx: 0.22,
    ry: 0.45,
    vx: 0,
    vy: 0,
    speed: 0.0035,
    dragging: false,
    lastX: 0,
    lastY: 0,
    tx: 0,
    ty: 0,
    mouseX: 0,
    mouseY: 0,
    pulse: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let isVisible = true;
    let dpr = 1;
    let width = 0;
    let height = 0;

    const primaryRgb = '21, 188, 223'; // #15BCDF
    const secondaryRgb = '43, 48, 51';

    // 1. Generate 200 Fibonacci Sphere Points
    const points: Point3D[] = [];
    const count = 200;
    for (let i = 0; i < count; i++) {
      const isCore = i % 4 === 0;
      points.push({
        radius: isCore ? 0.35 + 0.45 * Math.random() : 0.88 + 0.08 * Math.random(),
        size: isCore ? 1.1 : 1.7 + 1.1 * Math.random(),
        alpha: isCore ? 0.22 + 0.22 * Math.random() : 0.45 + 0.38 * Math.random(),
        theta: Math.acos(1 - (2 * (i + 0.5)) / count),
        phi: Math.PI * (1 + Math.sqrt(5)) * i,
      });
    }

    const resize = () => {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = () => {
      if (!isVisible) return;
      animId = requestAnimationFrame(render);

      const s = stateRef.current;
      s.time += 0.016;

      if (!s.dragging) {
        s.ry += s.speed + s.vy;
        s.rx += s.vx;
        s.vx *= 0.94;
        s.vy *= 0.94;
      }

      s.mouseX += (s.tx - s.mouseX) * 0.08;
      s.mouseY += (s.ty - s.mouseY) * 0.08;
      if (s.pulse > 0) s.pulse = Math.max(0, s.pulse - 0.02);

      const cx = width / 2;
      const cy = height / 2 - 0.015 * height;
      const radius = 0.34 * Math.min(width, height);

      ctx.clearRect(0, 0, width, height);

      // Layer 1: Ground Drop Shadow
      const shadowGrad = ctx.createRadialGradient(
        cx + 22 * s.mouseX,
        cy + 1.16 * radius,
        6,
        cx + 22 * s.mouseX,
        cy + 1.16 * radius,
        1.05 * radius
      );
      shadowGrad.addColorStop(0, 'rgba(21, 188, 223, 0.25)');
      shadowGrad.addColorStop(0.4, 'rgba(21, 188, 223, 0.08)');
      shadowGrad.addColorStop(1, 'rgba(21, 188, 223, 0)');
      ctx.beginPath();
      ctx.ellipse(cx + 22 * s.mouseX, cy + 1.16 * radius, 0.8 * radius, 0.2 * radius, 0, 0, Math.PI * 2);
      ctx.fillStyle = shadowGrad;
      ctx.fill();

      // Layer 2: 3D Volumetric Shading
      const lightX = cx - 0.42 * radius + 36 * s.mouseX;
      const lightY = cy - 0.42 * radius + 36 * s.mouseY;
      const sphereGrad = ctx.createRadialGradient(
        lightX,
        lightY,
        0.05 * radius,
        cx,
        cy,
        1.02 * radius
      );
      sphereGrad.addColorStop(0, '#ffffff');
      sphereGrad.addColorStop(0.2, '#f6fbfd');
      sphereGrad.addColorStop(0.5, '#e4f5f9');
      sphereGrad.addColorStop(0.75, '#c5ebf3');
      sphereGrad.addColorStop(0.92, '#8ad7e8');
      sphereGrad.addColorStop(1, '#15bcdf');

      const rotX = s.rx + 0.3 * s.mouseY;
      const rotY = s.ry + 0.3 * s.mouseX;
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = sphereGrad;
      ctx.fill();
      ctx.clip();

      // Layer 3: 5 Projected Latitude Wireframe Rings
      [-0.62, -0.3, 0, 0.3, 0.62].forEach((lat, idx) => {
        const ringRad = Math.cos(lat) * radius * 0.95;
        const ringZ = Math.sin(lat) * radius * 0.95;

        ctx.beginPath();
        for (let seg = 0; seg <= 64; seg++) {
          const angle = (seg / 64) * Math.PI * 2;
          const px = ringRad * Math.sin(angle);
          const py = ringRad * Math.cos(angle) * cosY - px * sinY;
          const pz = ringZ * cosX - (ringRad * Math.cos(angle) * sinY + px * cosY) * sinX;

          if (seg === 0) ctx.moveTo(cx + py, cy + pz);
          else ctx.lineTo(cx + py, cy + pz);
        }

        ctx.strokeStyle =
          idx === 2
            ? `rgba(${primaryRgb}, ${0.35 + 0.3 * s.pulse})`
            : `rgba(${secondaryRgb}, 0.12)`;
        ctx.lineWidth = idx === 2 ? 1.5 : 1;
        ctx.stroke();
      });

      // Layer 4: 3D Point Projection & Constellations
      const projected: ProjectedPoint[] = [];
      for (const p of points) {
        const breathing = 0.03 * Math.sin(1.8 * s.time + 0.3 * p.phi);
        const rCurrent = (p.radius + breathing) * radius;

        const x0 = rCurrent * Math.sin(p.theta) * Math.cos(p.phi + 0.12 * s.time);
        const y0 = rCurrent * Math.cos(p.theta);
        const z0 = rCurrent * Math.sin(p.theta) * Math.sin(p.phi + 0.12 * s.time);

        const x1 = x0 * cosY - z0 * sinY;
        const z1 = x0 * sinY + z0 * cosY;

        const y2 = y0 * cosX - z1 * sinX;
        const z2 = y0 * sinX + z1 * cosX;

        projected.push({
          x: cx + x1,
          y: cy + y2,
          z: z2,
          size: p.size,
          alpha: p.alpha,
        });
      }

      projected.sort((a, b) => a.z - b.z);

      // Connecting lines
      ctx.strokeStyle = `rgba(${secondaryRgb}, 0.14)`;
      ctx.lineWidth = 0.7;
      for (let i = 0; i < projected.length; i += 3) {
        const p1 = projected[i];
        if (p1.z < 0) continue;
        for (let j = i + 1; j < Math.min(i + 7, projected.length); j++) {
          const p2 = projected[j];
          if (p2.z < 0) continue;
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          if (dx * dx + dy * dy < 1500) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const p of projected) {
        const depthFactor = (p.z + radius) / (2 * radius);
        const alpha = Math.max(0.1, Math.min(0.95, p.alpha * (0.35 + 0.75 * depthFactor)));

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.7, p.size * (0.6 + 0.6 * depthFactor)), 0, Math.PI * 2);

        if (p.z > 0.4 * radius) {
          ctx.fillStyle = `rgba(15, 163, 194, ${alpha})`;
        } else if (p.z > 0) {
          ctx.fillStyle = `rgba(${primaryRgb}, ${0.9 * alpha})`;
        } else {
          ctx.fillStyle = `rgba(148, 163, 184, ${0.6 * alpha})`;
        }
        ctx.fill();
      }

      // Layer 5: Atmospheric Rim
      const rimGrad = ctx.createRadialGradient(cx, cy, 0.86 * radius, cx, cy, 1.01 * radius);
      rimGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
      rimGrad.addColorStop(0.7, 'rgba(255, 255, 255, 0.45)');
      rimGrad.addColorStop(0.93, `rgba(${primaryRgb}, 0.35)`);
      rimGrad.addColorStop(1, 'rgba(15, 163, 194, 0.55)');

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = rimGrad;
      ctx.fill();

      // Layer 6: Specular Light Glint
      const specGrad = ctx.createRadialGradient(lightX, lightY, 0.02 * radius, lightX, lightY, 0.42 * radius);
      specGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      specGrad.addColorStop(0.28, 'rgba(255, 255, 255, 0.55)');
      specGrad.addColorStop(0.7, 'rgba(255, 255, 255, 0.08)');
      specGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.ellipse(lightX, lightY, 0.3 * radius, 0.2 * radius, -Math.PI / 6, 0, Math.PI * 2);
      ctx.fillStyle = specGrad;
      ctx.fill();

      ctx.restore();

      // Outer outline & Dashed Orbital Track
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(21, 188, 223, 0.35)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.save();
      ctx.beginPath();
      ctx.ellipse(cx, cy, 1.28 * radius, 0.42 * radius, 0.5 * s.rx, 0, Math.PI * 2);
      ctx.setLineDash([4, 7]);
      ctx.strokeStyle = `rgba(${primaryRgb}, 0.28)`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    };

    resize();
    render();

    window.addEventListener('resize', resize);
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) render();
    });

    if (canvas) observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      observer.disconnect();
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const s = stateRef.current;
    s.dragging = true;
    s.lastX = e.clientX;
    s.lastY = e.clientY;
    s.pulse = 1;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
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

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px] select-none">
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Interactive 3D globe"
        className="absolute inset-0 h-full w-full cursor-grab touch-none active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={() => (stateRef.current.dragging = false)}
        onPointerCancel={() => (stateRef.current.dragging = false)}
        onPointerLeave={() => {
          const s = stateRef.current;
          s.dragging = false;
          s.tx = 0;
          s.ty = 0;
        }}
      />

      {[
        { name: 'ChatGPT', pos: 'left-[1%] top-[15%]', delay: '0s', color: '#10a37f' },
        { name: 'Gemini', pos: 'right-[0%] top-[7%]', delay: '0.9s', color: '#4285F4' },
        { name: 'Perplexity', pos: 'right-[3%] top-[45%]', delay: '1.7s', color: '#20808D' },
        { name: 'DeepSeek', pos: 'right-[8%] bottom-[14%]', delay: '0.5s', color: '#5786FE' },
        { name: 'Claude', pos: 'left-[6%] bottom-[9%]', delay: '1.3s', color: '#D97757' },
        { name: 'Google AI', pos: 'left-[0%] top-[45%]', delay: '2.1s', color: '#EA4335' },
      ].map((surface) => (
        <span
          key={surface.name}
          className={`absolute ${surface.pos} flex items-center gap-1.5 rounded-full border border-slate-300/60 bg-white/80 py-1 pl-1.5 pr-2.5 text-[11px] font-semibold text-slate-900 shadow-md backdrop-blur-md hover:scale-105 transition-transform animate-float`}
          style={{ animationDelay: surface.delay }}
        >
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: surface.color }} />
          <span>{surface.name}</span>
        </span>
      ))}

    </div>
  );
};

export default AiGlobe3D;
