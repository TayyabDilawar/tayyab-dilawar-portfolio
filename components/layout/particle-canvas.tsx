"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#0ea5e9", "#6366f1", "#d946ef", "#0ea5e9", "#6366f1"];
const TOTAL = 72;
const MAX_DIST = 130;
const MOUSE_RADIUS = 160;

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  c: string;
  a: number;
};

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function hexToRgb(hex: string) {
  return [
    Number.parseInt(hex.slice(1, 3), 16),
    Number.parseInt(hex.slice(3, 5), 16),
    Number.parseInt(hex.slice(5, 7), 16),
  ].join(",");
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const surface: HTMLCanvasElement = canvas;
    const context: CanvasRenderingContext2D = ctx;

    const mouse = { x: -9999, y: -9999 };
    const pts: Point[] = Array.from({ length: TOTAL }, () => ({
      x: rand(0, window.innerWidth),
      y: rand(0, window.innerHeight),
      vx: rand(-0.22, 0.22),
      vy: rand(-0.22, 0.22),
      r: rand(1, 2.2),
      c: COLORS[Math.floor(Math.random() * COLORS.length)] ?? "#0ea5e9",
      a: rand(0.35, 0.85),
    }));

    let width = window.innerWidth;
    let height = window.innerHeight;
    let frame = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      surface.width = width * dpr;
      surface.height = height * dpr;
      surface.style.width = `${width}px`;
      surface.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function tick() {
      context.clearRect(0, 0, width, height);
      const inHero = window.scrollY < height * 0.7;

      for (const point of pts) {
        const dx = mouse.x - point.x;
        const dy = mouse.y - point.y;
        const distance = Math.hypot(dx, dy);
        if (distance < MOUSE_RADIUS && distance > 1) {
          const force = (1 - distance / MOUSE_RADIUS) * 0.012;
          point.vx += dx * force;
          point.vy += dy * force;
        }
        const speed = Math.hypot(point.vx, point.vy);
        if (speed > 0.7) {
          point.vx *= 0.7 / speed;
          point.vy *= 0.7 / speed;
        }
        point.x += point.vx;
        point.y += point.vy;
        if (point.x < -6) point.x = width + 6;
        if (point.x > width + 6) point.x = -6;
        if (point.y < -6) point.y = height + 6;
        if (point.y > height + 6) point.y = -6;
      }

      const maxPairs = inHero ? pts.length : Math.floor(pts.length * 0.5);
      for (let i = 0; i < maxPairs; i += 1) {
        for (let j = i + 1; j < pts.length; j += 1) {
          const a = pts[i];
          const b = pts[j];
          if (!a || !b) continue;
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          const maxD = inHero ? MAX_DIST : MAX_DIST * 0.6;
          if (distance < maxD) {
            const alpha = (1 - distance / maxD) * (inHero ? 0.18 : 0.08);
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.strokeStyle = `rgba(${hexToRgb(a.c)},${alpha})`;
            context.lineWidth = 0.8;
            context.stroke();
          }
        }
      }

      for (const point of pts) {
        context.beginPath();
        context.arc(point.x, point.y, point.r, 0, Math.PI * 2);
        context.fillStyle = `rgba(${hexToRgb(point.c)},${point.a})`;
        context.shadowColor = point.c;
        context.shadowBlur = 6;
        context.fill();
        context.shadowBlur = 0;
      }

      frame = window.requestAnimationFrame(tick);
    }

    const onMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 size-full"
      aria-hidden
    />
  );
}
