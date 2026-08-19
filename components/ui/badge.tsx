import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-cyan uppercase",
        className,
      )}
      {...props}
    />
  );
}
