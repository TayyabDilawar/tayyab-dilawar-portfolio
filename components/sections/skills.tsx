import { skillGroups } from "@/data/skills";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillCard } from "@/components/ui/skill-card";

export function Skills() {
  return (
    <section id="skills" className="reveal scroll-mt-24 bg-surface py-24 sm:py-[110px]">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="expertise"
          title="Skills & Technologies"
          description="A MERN and Next.js stack used to ship APIs, dashboards, and production web apps."
          className="mb-16"
        />
        <div className="grid overflow-hidden rounded-[20px] border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillCard key={group.category} group={group} />
          ))}
        </div>
      </Container>
    </section>
  );
}
