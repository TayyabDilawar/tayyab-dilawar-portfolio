"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cursorX = -50;
    let cursorY = -50;
    let ringX = -50;
    let ringY = -50;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      cursorX = event.clientX;
      cursorY = event.clientY;
      dot.style.transform = `translate(${cursorX - 3}px, ${cursorY - 3}px)`;
    };

    const hoverOn = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest("a, button, [role='button']")) {
        ring.dataset.hover = "true";
      }
    };

    const hoverOff = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest("a, button, [role='button']")) {
        ring.dataset.hover = "false";
      }
    };

    const tick = () => {
      ringX += (cursorX - ringX) * 0.12;
      ringY += (cursorY - ringY) * 0.12;
      const hovering = ring.dataset.hover === "true";
      const offset = hovering ? 26 : 17;
      ring.style.transform = `translate(${ringX - offset}px, ${ringY - offset}px)`;
      ring.style.width = hovering ? "52px" : "34px";
      ring.style.height = hovering ? "52px" : "34px";
      frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseover", hoverOn);
    document.addEventListener("mouseout", hoverOff);
    tick();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseover", hoverOn);
      document.removeEventListener("mouseout", hoverOff);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[80] size-1.5 rounded-full bg-cyan shadow-[0_0_12px_var(--cyan)]"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[80] size-[34px] rounded-full border border-cyan/30 transition-[width,height,border-color] duration-300"
        aria-hidden
      />
    </>
  );
}
