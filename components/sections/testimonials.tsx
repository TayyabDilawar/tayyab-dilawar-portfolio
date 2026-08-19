import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  return (
    <section className="reveal py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Quotes go here once they are real."
          description="These entries are placeholders. Do not publish them as client feedback."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.id}
              className="rounded-2xl border border-border bg-card p-6"
            >
              {item.placeholder ? <Badge>Placeholder</Badge> : null}
              <blockquote className="mt-4 text-sm leading-7 text-muted">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <Image
                  src={item.avatar}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 rounded-full border border-border"
                />
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted">
                    {item.position}, {item.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
