import Link from "next/link";
import {
  Database,
  Globe,
  Layers,
  LayoutDashboard,
  Plug,
  PanelsTopLeft,
} from "lucide-react";
import type { Service } from "@/types";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const icons = {
  layers: Layers,
  globe: Globe,
  database: Database,
  api: Plug,
  saas: PanelsTopLeft,
  layout: LayoutDashboard,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];

  return (
    <article className="flex h-full flex-col rounded-[20px] border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-cyan/35 hover:shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
      <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-accent-soft text-accent">
        <Icon className="size-4" aria-hidden />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{service.description}</p>
      <ul className="mt-4 space-y-2 text-sm text-muted">
        {service.features.map((feature) => (
          <li key={feature}>— {feature}</li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "mt-auto w-fit px-0",
        )}
      >
        Discuss this →
      </Link>
    </article>
  );
}
