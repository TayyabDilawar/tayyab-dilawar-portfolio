"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

const lines = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "MERN Stack Developer" },
  { prompt: true, text: "stack" },
  { prompt: false, text: "React" },
  { prompt: false, text: "Next.js" },
  { prompt: false, text: "Node.js" },
  { prompt: false, text: "Express" },
  { prompt: false, text: "MongoDB" },
  { prompt: false, text: "TypeScript" },
  { prompt: true, text: "status" },
  { prompt: false, text: "Building scalable web applications..." },
];

export function Terminal({ className }: { className?: string }) {
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    if (reduced) return;

    const id = window.setInterval(() => {
      setVisibleCount((count) => {
        if (count >= lines.length) {
          window.clearInterval(id);
          return count;
        }
        return count + 1;
      });
    }, 220);

    return () => window.clearInterval(id);
  }, [reduced]);

  const shown = reduced ? lines.length : visibleCount;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-terminal shadow-[0_24px_80px_rgba(0,0,0,0.35)]",
        className,
      )}
      aria-label="Developer terminal"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f56]" aria-hidden />
        <span className="size-2.5 rounded-full bg-[#ffbd2e]" aria-hidden />
        <span className="size-2.5 rounded-full bg-[#27c93f]" aria-hidden />
        <span className="ml-3 font-mono text-[11px] text-muted">
          ~/portfolio
        </span>
      </div>
      <div className="space-y-1.5 p-5 font-mono text-[13px] leading-6 sm:text-sm">
        <AnimatePresence>
          {lines.slice(0, shown).map((line, index) => (
            <motion.p
              key={`${line.text}-${index}`}
              className="text-muted"
              initial={reduced ? false : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18 }}
            >
              {line.prompt ? (
                <>
                  <span className="text-accent">$</span>{" "}
                  <span className="text-foreground">{line.text}</span>
                </>
              ) : (
                <>
                  <span className="text-muted">{" > "}</span>
                  <span className="text-accent">{line.text}</span>
                </>
              )}
            </motion.p>
          ))}
        </AnimatePresence>
        {!reduced && visibleCount < lines.length ? (
          <span className="inline-block h-4 w-1.5 animate-pulse bg-accent" />
        ) : null}
      </div>
    </div>
  );
}

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}
