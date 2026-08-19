import type { Experience } from "@/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ExperienceCard({
  item,
  index,
}: {
  item: Experience;
  index: number;
}) {
  return (
    <article className="group relative grid gap-5 rounded-[20px] border border-border bg-card p-6 transition-all hover:translate-x-1 hover:border-cyan/30 sm:grid-cols-[auto_1fr] sm:p-9">
      <span
        className={cn(
          "absolute top-8 left-[-37px] size-4 rounded-full border-[3px] border-background shadow-[0_0_16px_var(--cyan)] sm:left-[-49px]",
          index % 2 === 0 ? "bg-cyan" : "bg-violet shadow-[0_0_16px_var(--violet)]",
        )}
        aria-hidden
      />
      <div className="hidden size-[52px] items-center justify-center rounded-[14px] border border-border bg-card-solid text-xl sm:flex">
        {index === 0 ? "🏢" : "⚡"}
      </div>
      <div>
        <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
          <h3 className="text-[1.1rem] font-bold">{item.position}</h3>
          <span className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-0.5 font-mono text-[11px] font-semibold text-cyan">
            {item.startDate} — {item.endDate}
          </span>
        </div>
        <p className="mb-1 text-sm font-semibold text-cyan">{item.company}</p>
        <p className="mb-4 font-mono text-[11px] text-muted-foreground">{item.location}</p>
        <p className="mb-3 text-sm leading-7 text-muted">{item.description}</p>
        <ul className="space-y-1.5 text-sm leading-7 text-muted">
          {item.responsibilities.map((responsibility) => (
            <li key={responsibility} className="relative pl-5">
              <span className="absolute left-0 text-violet">→</span>
              {responsibility}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-card-solid px-2.5 py-1 font-mono text-[11px] font-semibold text-muted"
            >
              {tech}
            </span>
          ))}
          {item.placeholder ? <Badge>Placeholder</Badge> : null}
        </div>
      </div>
    </article>
  );
}
