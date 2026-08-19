import { skillGroups } from "@/data/skills";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillCard } from "@/components/ui/skill-card";

export function Skills() {
  return (
    <section id="skills" className="reveal scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="The stack I actually ship with."
          description="Grouped the way the work is grouped: interface, API, data, and the tools that get it to production."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <h3 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillCard key={item} name={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
