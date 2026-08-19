import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const highlights = [
  "MERN applications",
  "REST APIs & auth",
  "Admin dashboards",
  "SaaS products",
  "Database modeling",
  "Production deploys",
];

export function About() {
  const initials = profile.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <section id="about" className="reveal scroll-mt-24 py-24 sm:py-[110px]">
      <Container className="grid items-center gap-16 lg:grid-cols-[380px_1fr] lg:gap-20">
        <div className="relative mx-auto size-[280px] sm:size-[360px]">
          <div className="absolute -inset-0.5 rounded-[34px] bg-brand opacity-60" aria-hidden />
          <div className="relative flex size-full items-center justify-center overflow-hidden rounded-[32px] border border-border bg-card-solid">
            <span className="text-7xl font-extrabold text-gradient sm:text-8xl">
              {initials}
            </span>
          </div>
          <div className="absolute -top-4 -right-3 flex items-center gap-2 rounded-xl border border-cyan/30 bg-card-solid px-4 py-2.5 text-sm font-bold shadow-xl backdrop-blur">
            <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#22c55e]" />
            {profile.role}
          </div>
          <div className="absolute -bottom-4 -left-3 rounded-xl border border-cyan/30 bg-card-solid px-4 py-2.5 text-sm font-bold shadow-xl backdrop-blur">
            React · Next.js · Node
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="about me"
            title="Building production web apps, end to end."
            description={profile.about}
          />
          <div className="mt-6 space-y-4 text-[1.03rem] leading-8 text-muted">
            <p>{profile.specialization}</p>
            <p>{profile.enjoysBuilding}</p>
          </div>
          <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-muted transition-colors hover:border-cyan/40 hover:text-foreground"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-cyan" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
