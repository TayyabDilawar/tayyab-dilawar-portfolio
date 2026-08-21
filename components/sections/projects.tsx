import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  const featured = getFeaturedProjects();

  return (
    <section id="projects" className="reveal scroll-mt-24 bg-surface py-24 sm:py-27.5">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="center"
            className="sm:text-left"
            eyebrow="projects"
            title="Featured Work"
            description="Live products: a random generator suite, reserved-seat ticketing, restaurant POS, and a multi-tenant HRMS."
          />
          <Link href="/projects" className={buttonVariants({ variant: "secondary" })}>
            All projects
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2" style={{ perspective: "1200px" }}>
          {featured.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
