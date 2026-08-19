import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="reveal scroll-mt-24 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_0.85fr]">
        <SectionHeading
          eyebrow="About"
          title="Full-stack work with a production bias."
          description={profile.about}
        />
        <div className="space-y-6 text-sm leading-7 text-muted">
          <p>{profile.background}</p>
          <p>{profile.specialization}</p>
          <p>{profile.enjoysBuilding}</p>
          <p className="text-foreground">{profile.philosophy}</p>
        </div>
        <dl className="grid grid-cols-2 gap-4 lg:col-span-2 sm:grid-cols-4">
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <dt className="text-xs tracking-wide text-muted uppercase">
                {stat.label}
              </dt>
              <dd className="mt-2 text-2xl font-semibold">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
