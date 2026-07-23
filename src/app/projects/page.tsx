"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "SaaS Dashboard", "Education & LMS", "Booking & Portal", "Waitlist & Landing"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Title */}
        <div className="max-w-3xl mb-16">
          <h1 className="font-display text-xs font-semibold uppercase tracking-widest text-accent">
            Case Studies
          </h1>
          <p className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Selected Works
          </p>
          <p className="mt-4 text-base text-foreground-muted leading-relaxed">
            Explore 12 real-world sites built using AI-accelerated frontend systems. From data-heavy analytics dashboards to high-conversion waitlists, each project highlights design precision and speed.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-zinc-900/60">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-accent text-zinc-950 border-accent"
                  : "bg-zinc-900/40 text-foreground-muted border-zinc-800 hover:border-accent/40 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="group relative overflow-hidden rounded-xl border border-zinc-800/80 bg-[#0d0d0e] hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Aspect ratio container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-zinc-900 bg-zinc-950">
                  <Image
                    src={`/projects/${project.slug}/desktop.png`}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={idx < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-wider bg-accent-glow px-2 py-0.5 rounded border border-accent/15">
                      {project.category}
                    </span>
                    <span className="text-[10px] text-foreground-muted truncate">
                      {project.techStack.join(" · ")}
                    </span>
                  </div>
                  
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                    {project.name}
                  </h3>
                  
                  <p className="mt-2.5 text-xs text-foreground-muted leading-relaxed flex-grow">
                    {project.summary}
                  </p>

                  <div className="mt-6 pt-5 border-t border-zinc-900/60 flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/btn flex items-center gap-1 text-xs font-semibold text-foreground hover:text-accent transition-colors"
                    >
                      Read Case Study
                      <ArrowUpRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-foreground-muted hover:text-foreground transition-colors"
                    >
                      Live Link
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
