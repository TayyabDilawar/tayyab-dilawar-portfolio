"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -80, y: -80 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      className="custom-cursor pointer-events-none fixed top-0 left-0 z-[70] size-8 rounded-full border border-accent/50 mix-blend-difference"
      style={{ transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)` }}
      aria-hidden
    />
  );
}
