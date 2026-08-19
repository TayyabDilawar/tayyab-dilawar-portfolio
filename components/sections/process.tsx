import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  return (
    <section className="reveal py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="A straight path from discovery to maintenance."
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="font-mono text-sm text-accent">{step.number}</p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
