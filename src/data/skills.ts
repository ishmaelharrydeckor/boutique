export interface Skill {
  name: string;
  category: "Frontend" | "AI & Systems" | "Design & Creative" | "Operations & Growth";
}

export const skills: Skill[] = [
  // Frontend
  { name: "Next.js / React", category: "Frontend" },
  { name: "Tailwind CSS v4", category: "Frontend" },
  { name: "GSAP / useGSAP", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Three.js / R3F", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },

  // AI & Systems
  { name: "Python", category: "AI & Systems" },
  { name: "OpenAI API Integration", category: "AI & Systems" },
  { name: "Prompt Engineering", category: "AI & Systems" },
  { name: "Machine Learning (Basics)", category: "AI & Systems" },

  // Design
  { name: "Adobe Photoshop", category: "Design & Creative" },
  { name: "UI/UX Prototyping", category: "Design & Creative" },
  { name: "Figma Layouts", category: "Design & Creative" },

  // Operations
  { name: "Operations Management", category: "Operations & Growth" },
  { name: "Public Speaking", category: "Operations & Growth" },
  { name: "Growth Leadership", category: "Operations & Growth" }
];
