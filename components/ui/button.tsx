import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brand text-black shadow-[0_4px_24px_rgba(14,165,233,0.3)] hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(14,165,233,0.45)]",
        secondary:
          "border border-border bg-transparent text-foreground hover:-translate-y-0.5 hover:border-cyan/40 hover:bg-white/5",
        ghost: "text-muted hover:bg-white/5 hover:text-foreground",
        outline:
          "border border-border bg-card text-foreground hover:border-cyan/40",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { buttonVariants };
