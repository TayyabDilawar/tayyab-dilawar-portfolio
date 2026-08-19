import Link from "next/link";
import { profile } from "@/data/profile";
import { githubStats } from "@/data/github";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

function levelClass(count: number): string {
  if (count === 0) return "bg-border/60";
  if (count === 1) return "bg-accent/25";
  if (count === 2) return "bg-accent/50";
  if (count === 3) return "bg-accent/75";
  return "bg-accent";
}

export function Github() {
  return (
    <section className="reveal py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="GitHub"
            title={`@${githubStats.username}`}
            description="Static contribution map — a fallback so the site never depends on the GitHub API. Replace with live data later if you want."
          />
          <Link
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "secondary" })}
          >
            View GitHub
          </Link>
        </div>
        <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card p-5">
          <div
            className="grid w-max grid-flow-col grid-rows-7 gap-1"
            aria-hidden
          >
            {githubStats.activity.map((day) => (
              <span
                key={day.date}
                title={`${day.date}: ${day.count} (placeholder)`}
                className={cn("size-2.5 rounded-[3px]", levelClass(day.count))}
              />
            ))}
          </div>
          <p className="mt-4 font-mono text-[11px] text-muted">
            Source: {githubStats.source}. Not live GitHub data.
          </p>
        </div>
      </Container>
    </section>
  );
}
