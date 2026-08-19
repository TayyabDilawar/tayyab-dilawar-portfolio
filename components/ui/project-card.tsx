"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const heads = [
  "bg-[linear-gradient(135deg,#0d1f3c,#1e3a8a,#1d4ed8)]",
  "bg-[linear-gradient(135deg,#1e0a3c,#4c1d95,#7c3aed)]",
  "bg-[linear-gradient(135deg,#042f2e,#065f46,#059669)]",
  "bg-[linear-gradient(135deg,#420007,#9f1239,#e11d48)]",
  "bg-[linear-gradient(135deg,#0c1a2e,#0e3a6f,#0284c7)]",
  "bg-[linear-gradient(135deg,#2d1001,#92400e,#d97706)]",
];

export function ProjectCard({
  project,
  className,
  index = 0,
}: {
  project: Project;
  className?: string;
  index?: number;
}) {
  function onMove(event: MouseEvent<HTMLElement>) {
    const card = event.currentTarget;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-8px)`;
  }

  function onLeave(event: MouseEvent<HTMLElement>) {
    event.currentTarget.style.transform = "rotateY(0) rotateX(0) translateY(0)";
  }

  return (
    <article
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "group overflow-hidden rounded-[20px] border border-border bg-card transition-[box-shadow,border-color,transform] duration-300 hover:border-cyan/35 hover:shadow-[0_24px_80px_rgba(0,0,0,0.45)]",
        className,
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div
          className={cn(
            "relative flex h-40 items-center justify-center overflow-hidden",
            heads[index % heads.length],
          )}
        >
          <Image
            src={project.image}
            alt={`${project.title} cover`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>
        <div className="flex flex-1 flex-col space-y-3 p-6">
          <div className="flex items-center justify-between gap-3">
            <Badge>{project.category}</Badge>
            {project.placeholder ? (
              <span className="font-mono text-[10px] tracking-wide text-muted uppercase">
                Placeholder
              </span>
            ) : null}
          </div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-[0.98rem] font-bold tracking-tight">{project.title}</h3>
            <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan" />
          </div>
          <p className="text-[13px] leading-7 text-muted">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-card-solid px-2 py-0.5 font-mono text-[11px] font-semibold text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
