import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-accent-soft px-3 py-1 text-xs font-medium text-foreground",
        className,
      )}
      {...props}
    />
  );
}
