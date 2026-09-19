import type { Metadata } from "next";
import { ResumeViewer } from "@/components/resume/resume-viewer";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";
import { webPageJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Resume",
  description: `Download or view ${profile.name}'s MERN Stack and React Native resumes online.`,
  path: "/resume",
});

export default function ResumePage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: `Resume — ${profile.name}`,
          description: `View or download ${profile.name}'s resumes.`,
          path: "/resume",
        })}
      />
      <section className="pt-16 pb-20 sm:pb-28">
        <Container>
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Resume
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight">
            Choose a resume to view or download.
          </h1>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-8 text-muted">
            Two versions are available — MERN Stack for web roles and React Native for mobile roles.
            Preview either PDF below, open it in a new tab, or download a copy.
          </p>
          <div className="mt-10">
            <ResumeViewer resumes={profile.resumes} />
          </div>
        </Container>
      </section>
    </>
  );
}
