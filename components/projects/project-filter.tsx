"use client";

import { useMemo, useState } from "react";
import { projectCategories, projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types";

type Filter = "All" | ProjectCategory;

export function ProjectFilter() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.categories.includes(filter));
  }, [filter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
        {projectCategories.map((category) => {
          const active = filter === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-semibold transition-all",
                active
                  ? "bg-brand border-transparent text-black shadow-[0_4px_20px_rgba(14,165,233,0.35)]"
                  : "border-border text-muted hover:-translate-y-0.5 hover:border-cyan/40 hover:text-foreground",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>
      {visible.length === 0 ? (
        <p className="mt-10 text-sm text-muted">
          No projects in this category yet. Add one in data/projects.ts.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
