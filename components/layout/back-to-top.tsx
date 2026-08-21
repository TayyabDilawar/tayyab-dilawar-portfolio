"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const CIRCUMFERENCE = 163.36;

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      setVisible(window.scrollY > 500);
      if (circleRef.current) {
        circleRef.current.style.strokeDashoffset = String(CIRCUMFERENCE * (1 - pct));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed right-8 bottom-8 z-40 flex size-12.5 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:-translate-y-0.5 hover:border-cyan hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <ArrowUp className="relative z-10 size-5" />
      <svg className="pointer-events-none absolute -inset-1 size-14.5" viewBox="0 0 58 58" aria-hidden>
        <circle
          ref={circleRef}
          cx="29"
          cy="29"
          r="26"
          fill="none"
          stroke="url(#back-top-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
          transform="rotate(-90 29 29)"
        />
        <defs>
          <linearGradient id="back-top-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}
