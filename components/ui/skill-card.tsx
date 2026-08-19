"use client";

import { useEffect, useRef } from "react";
import type { SkillGroup } from "@/types";
import { cn } from "@/lib/utils";

const tagClass: Record<SkillGroup["variant"], string> = {
  cyan: "border-cyan/20 bg-cyan/10 text-cyan",
  violet: "border-violet/20 bg-violet/10 text-violet",
  pink: "border-pink/20 bg-pink/10 text-pink",
  amber: "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-300",
};

export function SkillCard({ group }: { group: SkillGroup }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          node.querySelectorAll<HTMLElement>(".gauge-fill").forEach((bar, index) => {
            window.setTimeout(() => bar.classList.add("is-in"), index * 120);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden bg-surface p-7 hover:bg-card"
    >
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
      <span className="mb-3 block text-2xl" aria-hidden>
        {group.icon}
      </span>
      <h3 className="mb-4 font-mono text-[11px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {group.items.map((item) => (
          <span
            key={item}
            className={cn(
              "rounded-md border px-2.5 py-1 font-mono text-[12px] font-medium",
              tagClass[group.variant],
            )}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-4 space-y-2.5">
        {group.gauges.map((gauge) => (
          <div key={gauge.name}>
            <div className="mb-1 flex justify-between font-mono text-[11px] text-muted">
              <span>{gauge.name}</span>
              <span>{gauge.percent}%</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-card-solid">
              <div
                className="gauge-fill h-full rounded-full bg-brand"
                style={{ ["--gauge" as string]: `${gauge.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
