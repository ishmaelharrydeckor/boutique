import { projects } from "@/data/projects";
import { redirect, notFound } from "next/navigation";

interface ProjectRedirectProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectRedirectPage({ params }: ProjectRedirectProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  redirect(project.url);
}
