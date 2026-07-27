"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import ThreeScene from "@/components/ThreeScene";
import { projects } from "@/data/projects";

// Register GSAP ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Restrict to featured projects
  const featuredProjects = projects.filter((p) => p.isFeatured);

  useGSAP(
    () => {
      // Query system accessibility preference for reduced motion
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const yOffset = prefersReducedMotion ? 0 : 16;
      const yOffsetLarge = prefersReducedMotion ? 0 : 24;

      // Hero timeline reveal
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: yOffset },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: yOffsetLarge },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: yOffset },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: yOffset / 2 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "-=0.4"
        );

      // Section scroll reveals (fade-up + yOffset)
      const revealSections = gsap.utils.toArray<HTMLElement>(".scroll-reveal");
      revealSections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: yOffset },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Staggered reveals for lists/grids (50ms apart)
      const staggerContainers = gsap.utils.toArray<HTMLElement>(".stagger-container");
      staggerContainers.forEach((container) => {
        const items = container.querySelectorAll(".stagger-item");
        gsap.fromTo(
          items,
          { opacity: 0, y: yOffset },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 3D Scene Backdrop */}
      <ThreeScene />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex min-h-screen flex-col justify-center px-6 py-24 sm:py-32 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="max-w-4xl relative z-10">
          <span className="hero-eyebrow inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent-glow px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent opacity-0 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></span>
            AETHER STUDIO
          </span>
          <h1 className="hero-title font-display text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl lg:text-8xl opacity-0 leading-[1.05] uppercase">
            We build web <br />
            experiences for <br />
            those who <br />
            <span className="text-accent">value taste.</span>
          </h1>
          <p className="hero-subtitle mt-8 font-sans text-lg sm:text-xl text-foreground-muted leading-relaxed max-w-xl opacity-0">
            A boutique creative tech studio fusing mathematical precision with uncompromising digital aesthetics.
          </p>
          <div className="hero-cta mt-10 opacity-0">
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg bg-accent text-zinc-950 px-6 py-3.5 text-sm font-semibold tracking-wider hover-scale hover-glow transition-all duration-300"
            >
              EXPLORE CAPABILITIES
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services/What We Do Section */}
      <section
        id="services"
        className="scroll-reveal relative border-t border-zinc-900 bg-surface/50 py-36 px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">01 / CAPABILITIES</span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl uppercase">
              Core Offerings
            </h2>
          </div>

          <div className="stagger-container grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="stagger-item border border-zinc-900 bg-surface p-10 rounded-lg hover-border transition-all duration-300">
              <span className="text-xs font-semibold text-accent/80 tracking-widest uppercase block mb-4">01.01</span>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4 uppercase">Design Systems</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Refined digital design systems constructed from layout grids, mathematical ratios, and highly responsive typographic hierarchy.
              </p>
            </div>

            <div className="stagger-item border border-zinc-900 bg-surface p-10 rounded-lg hover-border transition-all duration-300">
              <span className="text-xs font-semibold text-accent/80 tracking-widest uppercase block mb-4">01.02</span>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4 uppercase">Interactive Builds</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Immersive 3D environments and clean layout animations utilizing WebGL, React Three Fiber, and customized GSAP controllers.
              </p>
            </div>

            <div className="stagger-item border border-zinc-900 bg-surface p-10 rounded-lg hover-border transition-all duration-300">
              <span className="text-xs font-semibold text-accent/80 tracking-widest uppercase block mb-4">01.03</span>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4 uppercase">Product Craft</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                High-performance Next.js application development. Structured code, rigorous typings, and SEO integrations built to convert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section
        id="work"
        className="scroll-reveal relative border-t border-zinc-900 py-36 px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">02 / SELECTS</span>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl uppercase">
                Featured Case Studies
              </h2>
            </div>
          </div>

          <div className="stagger-container grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="stagger-item group relative overflow-hidden rounded-lg border border-zinc-900 bg-surface hover-border transition-all duration-300 flex flex-col h-full cursor-pointer"
              >
                {/* Visual Representation */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-zinc-900 bg-zinc-950">
                  <Image
                    src={`/projects/${project.slug}/desktop.png`}
                    alt={`${project.name} Desktop Interface`}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent-glow px-2.5 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="text-[10px] text-foreground-muted font-mono uppercase">
                      {project.techStack.slice(0, 2).join(" · ")}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-foreground uppercase">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-xs text-foreground-muted leading-relaxed flex-grow">
                    {project.summary}
                  </p>
                  <div className="mt-6 pt-6 border-t border-zinc-900 flex items-center justify-between">
                    <span className="group-hover:text-accent text-xs font-semibold flex items-center gap-1 transition-colors">
                      VIEW LIVE DEMO
                      <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Approach/Process Section */}
      <section
        id="approach"
        className="scroll-reveal relative border-t border-zinc-900 bg-surface/50 py-36 px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">03 / METHODOLOGY</span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl uppercase">
              Our Approach
            </h2>
          </div>

          <div className="stagger-container grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="stagger-item border-l border-zinc-800 pl-8 py-4">
              <span className="font-mono text-xs text-accent">01 // REDUCE</span>
              <h3 className="mt-4 font-display text-xl font-bold text-foreground uppercase">Strip the Noise</h3>
              <p className="mt-3 text-sm text-foreground-muted leading-relaxed">
                We remove unnecessary visual decoration to let typography, content alignment, and structure carry the weight of the brand.
              </p>
            </div>

            <div className="stagger-item border-l border-zinc-800 pl-8 py-4">
              <span className="font-mono text-xs text-accent">02 // INTENSIFY</span>
              <h3 className="mt-4 font-display text-xl font-bold text-foreground uppercase">Elevate Interactions</h3>
              <p className="mt-3 text-sm text-foreground-muted leading-relaxed">
                We apply interactive 3D, physics displacement, and smooth scroll reveals to make navigation feel alive and premium.
              </p>
            </div>

            <div className="stagger-item border-l border-zinc-800 pl-8 py-4">
              <span className="font-mono text-xs text-accent">03 // MATERIALIZE</span>
              <h3 className="mt-4 font-display text-xl font-bold text-foreground uppercase">Flawless Output</h3>
              <p className="mt-3 text-sm text-foreground-muted leading-relaxed">
                Every line of code is optimized, responsive, accessible, and structured for conversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section
        id="contact"
        className="scroll-reveal relative border-t border-zinc-900 py-36 px-6 lg:px-8"
      >
        {/* Subtle accent glow overlay in bottom right */}
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent-glow blur-[120px] pointer-events-none opacity-50"></div>

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-6 block">04 / INITIATION</span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl uppercase">
            Let's build <br />something serious.
          </h2>
          <p className="mt-6 text-sm text-foreground-muted leading-relaxed max-w-xl mx-auto">
            Ready to upgrade your web presence with agency-tier aesthetics and math-driven animations? Connect with our studio to check availability.
          </p>
          <div className="mt-10">
            <a
              href="mailto:hello@aether.studio"
              className="inline-flex items-center gap-2 rounded-lg bg-accent text-zinc-950 px-8 py-4 text-sm font-semibold tracking-wider hover-scale hover-glow transition-all duration-300"
            >
              hello@aether.studio
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
