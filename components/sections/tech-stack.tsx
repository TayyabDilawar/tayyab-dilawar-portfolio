import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const layers = [
  { label: "Frontend", detail: "React / Next.js" },
  { label: "API", detail: "REST over HTTPS" },
  { label: "Backend", detail: "Node.js / Express" },
  { label: "Database", detail: "MongoDB / PostgreSQL / Supabase" },
];

export function TechStack() {
  return (
    <section className="reveal py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Architecture"
          title="Frontend to data, without a mystery box in the middle."
          description="A simple full-stack path: the UI talks to an API, the API owns auth and rules, the database stores the source of truth."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-4">
          {layers.map((layer, index) => (
            <li key={layer.label} className="relative">
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[11px] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-lg font-semibold">{layer.label}</p>
                <p className="mt-1 text-sm text-muted">{layer.detail}</p>
              </div>
              {index < layers.length - 1 ? (
                <span
                  className="pointer-events-none absolute top-1/2 -right-2 hidden h-px w-4 bg-accent/50 md:block"
                  aria-hidden
                />
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
