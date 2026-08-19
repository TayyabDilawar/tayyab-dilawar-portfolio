import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  const featured = getFeaturedProjects();

  return (
    <section id="projects" className="reveal scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work, written as case studies."
            description="Placeholder projects until you swap in real products. Each card opens a full write-up."
          />
          <Link href="/projects" className={buttonVariants({ variant: "secondary" })}>
            All projects
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
