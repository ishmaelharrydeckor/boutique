"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  // Resolve params promise
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  
  // Calculate next project
  const nextProjectIndex = (projectIndex + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button Bar */}
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8 border-b border-zinc-900/40">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground-muted hover:text-accent transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all projects
        </Link>
      </div>

      {/* Hero Parallax Header */}
      <div className="relative w-full aspect-[21/9] md:aspect-[32/10] bg-zinc-950 overflow-hidden border-b border-zinc-900">
        <Image
          src={`/projects/${project.slug}/desktop.png`}
          alt={`${project.name} Banner`}
          fill
          className="object-cover object-top opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Main Details Grid */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Sidebar Column (Metadata) */}
            <div className="flex flex-col gap-8 lg:sticky lg:top-24 h-fit">
              <div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent-glow px-3 py-1 rounded border border-accent/20">
                  {project.category}
                </span>
                <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl leading-tight">
                  {project.name}
                </h1>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-accent text-zinc-950 px-5 py-3 text-sm font-bold tracking-wide hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] hover:shadow-[0_0_15px_rgba(212,165,39,0.2)]"
                >
                  Visit Live Site
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Tech Stack */}
              <div className="border-t border-zinc-900 pt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground-muted mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-zinc-900 border border-zinc-800/80 px-3 py-1.5 text-xs font-semibold text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Next Project Card */}
              <div className="border-t border-zinc-900 pt-6 mt-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground-muted mb-4">
                  Next Project
                </h3>
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group block rounded-xl border border-zinc-850 bg-[#0c0c0d] p-5 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-accent font-bold uppercase tracking-wider">
                        {nextProject.category}
                      </span>
                      <p className="text-sm font-bold text-foreground mt-1 group-hover:text-accent transition-colors">
                        {nextProject.name}
                      </p>
                    </div>
                    <div className="rounded-lg bg-zinc-900 border border-zinc-800 p-2 text-foreground group-hover:text-accent group-hover:border-accent/20 transition-all">
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Content Column (Case Study Narrative) */}
            <div className="lg:col-span-2 flex flex-col gap-16">
              
              {/* Problem */}
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-lg font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                  The Problem
                </h2>
                <p className="text-base text-foreground-muted leading-relaxed font-sans">
                  {project.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-lg font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                  The Approach
                </h2>
                <p className="text-base text-foreground-muted leading-relaxed font-sans">
                  {project.approach}
                </p>
              </div>

              {/* Outcome */}
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-lg font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                  The Outcome
                </h2>
                <p className="text-base text-foreground-muted leading-relaxed font-sans">
                  {project.outcome}
                </p>
              </div>

              {/* Device Gallery */}
              <div className="border-t border-zinc-900 pt-16 flex flex-col gap-8">
                <h3 className="font-display text-xl font-extrabold text-foreground tracking-tight">
                  Interface Showcase
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  
                  {/* Desktop Preview (Wider) */}
                  <div className="md:col-span-2 flex flex-col gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground-muted">
                      Desktop Viewport (1440px)
                    </span>
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
                      <Image
                        src={`/projects/${project.slug}/desktop.png`}
                        alt={`${project.name} Desktop Interface`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 66vw"
                      />
                    </div>
                  </div>

                  {/* Mobile Preview (Taller) */}
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground-muted">
                      Mobile Viewport (375px)
                    </span>
                    <div className="relative aspect-[9/16] w-full max-w-[280px] mx-auto md:max-w-none rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
                      <Image
                        src={`/projects/${project.slug}/mobile.png`}
                        alt={`${project.name} Mobile Interface`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
