import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-xl space-y-3",
        align === "center" && "mx-auto text-center",
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <p className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.25em] text-cyan uppercase before:h-px before:w-6 before:bg-cyan">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-8 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
