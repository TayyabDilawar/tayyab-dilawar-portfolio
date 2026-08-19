import { experience } from "@/data/experience";
import { Container } from "@/components/ui/container";
import { ExperienceCard } from "@/components/ui/experience-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <section id="experience" className="reveal scroll-mt-24 py-24 sm:py-[110px]">
      <Container>
        <SectionHeading
          eyebrow="career"
          title="Work Experience"
          description="MERN and Next.js roles from internship through full-stack work at Maxenius."
        />
        <div className="relative mt-12 space-y-6 pl-8 sm:pl-11 before:absolute before:top-0 before:bottom-0 before:left-3 before:w-0.5 before:rounded-full before:bg-[linear-gradient(to_bottom,var(--cyan),var(--violet),var(--pink))] before:opacity-50 sm:before:left-5">
          {experience.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
