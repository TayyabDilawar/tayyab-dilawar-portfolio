import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/35",
        className,
      )}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-card-solid">
          <Image
            src={project.image}
            alt={`${project.title} cover`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="space-y-3 p-5">
          <div className="flex items-center justify-between gap-3">
            <Badge>{project.category}</Badge>
            {project.placeholder ? (
              <span className="font-mono text-[10px] tracking-wide text-muted uppercase">
                Placeholder
              </span>
            ) : null}
          </div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight">
              {project.title}
            </h3>
            <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
          </div>
          <p className="text-sm leading-6 text-muted">{project.shortDescription}</p>
          <p className="font-mono text-[11px] text-muted">
            {project.technologies.slice(0, 4).join(" · ")}
          </p>
        </div>
      </Link>
    </article>
  );
}
