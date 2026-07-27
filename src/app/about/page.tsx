"use client";

import Image from "next/image";
import Link from "next/link";
import { certifications } from "@/data/certifications";
import { skills } from "@/data/skills";

export default function AboutPage() {
  // Group certifications by category
  const aiMLCerts = certifications.filter((c) => c.category === "AI & ML");
  const toolCerts = certifications.filter((c) => c.category === "Software & Tools");
  const softCerts = certifications.filter((c) => c.category === "Soft Skills");

  return (
    <div className="min-h-screen bg-background py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Main Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Headshot Column (Left) */}
          <div className="lg:col-span-5 flex justify-center lg:sticky lg:top-24">
            <div className="relative group w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-3 hover:border-accent/35 transition-all duration-300">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900">
                <Image
                  src="/headshot.jpg"
                  alt="Ishmael Harry-Deckor Headshot"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
              </div>
              {/* Gold Decorative Corner Blurs */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-accent-glow blur-2xl pointer-events-none group-hover:opacity-100 transition-opacity duration-300 opacity-60"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-accent-glow blur-2xl pointer-events-none group-hover:opacity-100 transition-opacity duration-300 opacity-60"></div>
            </div>
          </div>

          {/* Bio Narrative Column (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent-glow px-3 py-1 rounded border border-accent/20">
                About Me
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Ishmael Harry-Deckor
              </h1>
              <p className="mt-2 text-sm font-semibold text-accent uppercase tracking-wider">
                AI Product Builder • Founder, Sena Academy
              </p>
            </div>

            {/* Verbatim Bio Paragraphs */}
            <div className="font-sans text-base text-foreground-muted leading-relaxed space-y-6">
              <p>
                I'm Ishmael Harry-Deckor, a software developer and the founder of Sena Academy, where we're helping the next generation of builders learn AI and software development by creating real projects—not just watching tutorials. To power this vision, I personally engineered our custom, live <Link href="/projects/sena-academy-lms" className="text-accent hover:underline font-semibold">Sena Academy LMS</Link> platform from the ground up, serving as the core infrastructure for our student hub.
              </p>
              <p>
                I build modern, high-performance web applications that combine thoughtful design with AI-powered development workflows. To me, AI isn't a shortcut—it's a productivity multiplier that allows me to build faster while maintaining quality.
              </p>
              <p>
                My experience spans frontend development, prompt engineering, machine learning fundamentals, and practical AI implementation. Through my internship at Erudite Africa Network, I applied AI to solve real business problems, giving me a deeper understanding of how technology creates value beyond writing code.
              </p>
              <p>
                Alongside building products, I'm passionate about helping others become builders. Through Sena Academy, I'm creating a community where students, professionals, and aspiring developers gain practical experience by shipping projects, building portfolios, and preparing for opportunities in today's AI-driven world.
              </p>
              <p>
                Whether I'm designing interfaces, building products, or mentoring future developers, my goal remains the same:
              </p>
              <p className="font-bold text-foreground">
                Build technology that solves real problems—and empower others to do the same.
              </p>
              <p className="border-l-2 border-accent pl-4 text-foreground/90 font-medium italic">
                "I don't just build websites. I build products, create opportunities, and help others become builders."
              </p>
            </div>

            {/* Action CTA */}
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent text-zinc-950 px-6 py-3 text-sm font-bold hover:bg-accent/90 transition-all duration-300"
              >
                Let's Start a Project
              </Link>
            </div>
          </div>

        </div>

        {/* Technical Expertise Grid Section */}
        <section className="mt-32 pt-20 border-t border-zinc-900/60">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent">
              Expertise
            </h2>
            <p className="mt-2 font-display text-2xl font-bold text-foreground">
              Technical Skill Mapping
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Frontend", "AI & Systems", "Design & Creative", "Operations & Growth"].map((cat) => {
              const catSkills = skills.filter((s) => s.category === cat);
              return (
                <div key={cat} className="rounded-xl border border-zinc-800/80 bg-[#0d0d0e] p-6 hover:border-accent/15 transition-all">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4 pb-2 border-b border-zinc-900">
                    {cat}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {catSkills.map((skill) => (
                      <span
                        key={skill.name}
                        className="rounded bg-zinc-950 border border-zinc-900 px-2.5 py-1.5 text-xs text-foreground-muted"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Certifications Badge Section */}
        <section className="mt-32 pt-20 border-t border-zinc-900/60">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent">
              Credentials
            </h2>
            <p className="mt-2 font-display text-2xl font-bold text-foreground">
              Professional Certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI & ML */}
            <div className="rounded-xl border border-zinc-800/85 bg-[#0d0d0e] p-6 flex flex-col gap-4">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent-glow px-2.5 py-1 w-fit rounded border border-accent/20">
                AI & Machine Learning
              </span>
              <div className="flex flex-col gap-3 mt-2">
                {aiMLCerts.map((cert) => (
                  <div key={cert.name} className="flex flex-col gap-1 border-l border-zinc-800 pl-3">
                    <p className="text-sm font-bold text-foreground">{cert.name}</p>
                    <p className="text-xs text-foreground-muted">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Software & Tools */}
            <div className="rounded-xl border border-zinc-800/85 bg-[#0d0d0e] p-6 flex flex-col gap-4">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent-glow px-2.5 py-1 w-fit rounded border border-accent/20">
                Software & Tool Craft
              </span>
              <div className="flex flex-col gap-3 mt-2">
                {toolCerts.map((cert) => (
                  <div key={cert.name} className="flex flex-col gap-1 border-l border-zinc-800 pl-3">
                    <p className="text-sm font-bold text-foreground">{cert.name}</p>
                    <p className="text-xs text-foreground-muted">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Public Speaking */}
            <div className="rounded-xl border border-zinc-800/85 bg-[#0d0d0e] p-6 flex flex-col gap-4">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent-glow px-2.5 py-1 w-fit rounded border border-accent/20">
                Operational Leadership
              </span>
              <div className="flex flex-col gap-3 mt-2">
                {softCerts.map((cert) => (
                  <div key={cert.name} className="flex flex-col gap-1 border-l border-zinc-800 pl-3">
                    <p className="text-sm font-bold text-foreground">{cert.name}</p>
                    <p className="text-xs text-foreground-muted">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
