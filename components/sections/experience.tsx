import { experience } from "@/data/experience";
import { Container } from "@/components/ui/container";
import { ExperienceCard } from "@/components/ui/experience-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <section id="experience" className="reveal scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Roles and the work attached to them."
          description="Placeholder timeline. Replace company names, dates, and responsibilities in data/experience.ts — do not invent a history in the UI."
        />
        <div className="relative mt-12 space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[5px] before:w-px before:bg-border">
          {experience.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
