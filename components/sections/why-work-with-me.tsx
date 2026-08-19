import {
  CheckCircle2,
  Code2,
  LifeBuoy,
  MessageSquare,
  Plug,
  Scaling,
  Search,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";
import { advantages } from "@/data/advantages";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Advantage } from "@/types";

const icons: Record<Advantage["icon"], typeof Code2> = {
  code: Code2,
  scale: Scaling,
  responsive: Smartphone,
  zap: Zap,
  search: Search,
  shield: Shield,
  plug: Plug,
  check: CheckCircle2,
  message: MessageSquare,
  "life-buoy": LifeBuoy,
};

export function WhyWorkWithMe() {
  return (
    <section className="reveal py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Working together"
          title="How I actually work."
          description="No slogans — these are the constraints I hold myself to on a project."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {advantages.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <Icon className="size-4 text-accent" aria-hidden />
                <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
