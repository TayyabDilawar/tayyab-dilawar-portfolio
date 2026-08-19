import type { Experience } from "@/types";
import { Badge } from "@/components/ui/badge";

export function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article className="relative pl-8">
      <span
        className="absolute top-1.5 left-0 size-3 rounded-full border border-accent bg-background"
        aria-hidden
      />
      <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="font-mono">
            {item.startDate} — {item.endDate}
          </span>
          <span aria-hidden>·</span>
          <span>{item.location}</span>
          {item.placeholder ? (
            <Badge className="ml-auto">Placeholder</Badge>
          ) : null}
        </div>
        <h3 className="mt-3 text-lg font-semibold">{item.position}</h3>
        <p className="text-sm text-accent">{item.company}</p>
        <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          {item.responsibilities.map((responsibility) => (
            <li key={responsibility} className="flex gap-2">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
