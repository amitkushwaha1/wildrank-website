"use client";

import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ── Tilt card with 3D perspective ── */
interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}
export function TiltCard({ children, className = "", intensity = 12 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), { stiffness: 300, damping: 30 });
  const scale   = useSpring(1, { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width  - 0.5);
    y.set((e.clientY - rect.top)  / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => scale.set(1.03)}
      onMouseLeave={() => { x.set(0); y.set(0); scale.set(1); }}
      style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d", perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Floating orb background decoration ── */
interface OrbProps {
  size?: number;
  color?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
  opacity?: number;
}
export function FloatingOrb({ size = 400, color = "rgba(15,76,129,0.12)", top, left, right, bottom, delay = 0, opacity = 1 }: OrbProps) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ width: size, height: size, background: color, top, left, right, bottom, opacity, filter: "blur(80px)" }}
      animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.08, 1] }}
      transition={{ duration: 8 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

/* ── Animated counter ── */
interface CounterProps { from?: number; to: number; suffix?: string; duration?: number; className?: string; }
export function AnimatedCounter({ from = 0, to, suffix = "", duration = 2, className = "" }: CounterProps) {
  const [count, setCount] = useState(from);
  const [started, setStarted] = useState(false);

  return (
    <motion.span
      className={className}
      onViewportEnter={() => {
        if (started) return;
        setStarted(true);
        const steps = 60;
        const inc = (to - from) / steps;
        let cur = from;
        const t = setInterval(() => {
          cur += inc;
          if (cur >= to) { setCount(to); clearInterval(t); }
          else setCount(Math.floor(cur));
        }, (duration * 1000) / steps);
      }}
    >
      {count.toLocaleString()}{suffix}
    </motion.span>
  );
}

/* ── Stagger container ── */
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

/* ── Fade-up item ── */
export const fadeUpItem = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Fade-in item ── */
export const fadeInItem = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ── Slide-in from left ── */
export const slideLeft = {
  hidden:  { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Slide-in from right ── */
export const slideRight = {
  hidden:  { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
