import { cn } from "@/lib/utils";

export function SkillCard({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors hover:border-accent/40 hover:bg-accent-soft",
        className,
      )}
    >
      {name}
    </div>
  );
}
