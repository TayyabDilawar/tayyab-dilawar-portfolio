"use client";

import { useState } from "react";
import { Download, ExternalLink, FileText } from "lucide-react";
import type { ProfileResume } from "@/types";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ResumeViewerProps = {
  resumes: ProfileResume[];
};

export function ResumeViewer({ resumes }: ResumeViewerProps) {
  const [activeId, setActiveId] = useState(resumes[0]?.id ?? "");
  const active = resumes.find((resume) => resume.id === activeId) ?? resumes[0];

  if (!active) return null;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {resumes.map((resume) => {
          const isActive = resume.id === active.id;
          return (
            <button
              key={resume.id}
              type="button"
              onClick={() => setActiveId(resume.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold transition-all",
                isActive
                  ? "border-cyan/40 bg-cyan/10 text-foreground"
                  : "border-border bg-card text-muted hover:border-cyan/30 hover:text-foreground",
              )}
            >
              <FileText className="size-4" />
              {resume.label}
            </button>
          );
        })}
      </div>

      <div className="rounded-[20px] border border-border bg-card p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">{active.label}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">{active.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={active.href}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              <ExternalLink className="size-4" />
              View online
            </a>
            <a
              href={active.href}
              download={active.fileName}
              className={cn(buttonVariants())}
            >
              <Download className="size-4" />
              Download PDF
            </a>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-background">
          <iframe
            key={active.href}
            src={active.href}
            title={`${active.label} resume`}
            className="h-[min(78vh,920px)] w-full bg-white"
          />
        </div>
      </div>
    </div>
  );
}
