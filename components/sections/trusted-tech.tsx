import { trustedTechnologies } from "@/data/skills";
import { Container } from "@/components/ui/container";

export function TrustedTech() {
  const items = [...trustedTechnologies, ...trustedTechnologies];

  return (
    <section aria-label="Trusted technologies" className="border-y border-border py-6">
      <Container>
        <p className="mb-4 text-center font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
          Trusted technologies
        </p>
        <div className="overflow-hidden">
          <div className="marquee-track flex w-max gap-8">
            {items.map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="font-mono text-sm text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
