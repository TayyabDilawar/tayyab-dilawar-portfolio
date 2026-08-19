import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchitectureDiagram } from "@/components/projects/architecture-diagram";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import {
  getProjectBySlug,
  getRelatedProjects,
  projects,
} from "@/data/projects";
import { projectJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return createMetadata({
    title: project.title,
    description: project.shortDescription,
    path: `/projects/${project.slug}`,
    image: project.image,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.slug);

  return (
    <>
      <JsonLd data={projectJsonLd(project)} />
      <article className="pb-24">
        <section className="border-b border-border py-16 sm:py-24">
          <Container>
            <div className="flex flex-wrap gap-2">
              {project.categories.map((category) => (
                <Badge key={category}>{category}</Badge>
              ))}
              {project.placeholder ? <Badge>Placeholder</Badge> : null}
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              {project.shortDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants()}
              >
                Live demo
              </a>
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "secondary" })}
                >
                  GitHub
                </a>
              ) : null}
            </div>
          </Container>
        </section>

        <Container className="mt-10">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl border border-border">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              priority
              sizes="(min-width: 1024px) 72rem, 100vw"
              className="object-cover"
            />
          </div>
        </Container>

        <Container className="mt-16 grid gap-16">
          <Section title="Overview" body={project.detailedDescription} />
          <Section title="Problem" body={project.problem} />
          <Section title="Solution" body={project.solution} />

          <section>
            <h2 className="text-2xl font-semibold">Architecture</h2>
            <div className="mt-6">
              <ArchitectureDiagram layers={project.architecture} />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-3 py-1 text-sm text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Key features</h2>
            <ul className="mt-4 grid gap-4 md:grid-cols-3">
              {project.features.map((feature) => (
                <li
                  key={feature.title}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <p className="font-medium">{feature.title}</p>
                  <p className="mt-2 text-sm text-muted">{feature.description}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Development process</h2>
            <ol className="mt-4 space-y-2 text-sm text-muted">
              {project.process.map((step, index) => (
                <li key={step}>
                  {String(index + 1).padStart(2, "0")} — {step}
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Challenges</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {project.challenges.map((item) => (
                <div
                  key={item.challenge}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <p className="text-sm font-medium">Challenge</p>
                  <p className="mt-2 text-sm text-muted">{item.challenge}</p>
                  <p className="mt-4 text-sm font-medium">Solution</p>
                  <p className="mt-2 text-sm text-muted">{item.solution}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Screenshots</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {project.screenshots.map((src) => (
                <div
                  key={src}
                  className="relative aspect-video overflow-hidden rounded-2xl border border-border"
                >
                  <Image
                    src={src}
                    alt={`${project.title} additional view`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Results</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {project.results.map((result) => (
                <li key={result}>— {result}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related projects</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((item) => (
                <ProjectCard key={item.slug} project={item} />
              ))}
            </div>
          </section>

          <p>
            <Link href="/projects" className="text-sm text-muted hover:text-foreground">
              ← All projects
            </Link>
          </p>
        </Container>
      </article>
    </>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-3 max-w-3xl text-base leading-7 text-muted">{body}</p>
    </section>
  );
}
