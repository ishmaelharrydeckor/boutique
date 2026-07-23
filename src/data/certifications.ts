export interface Certification {
  name: string;
  issuer: string;
  category: "AI & ML" | "Software & Tools" | "Soft Skills";
}

export const certifications: Certification[] = [
  {
    name: "Understanding Prompt Engineering",
    issuer: "DataCamp",
    category: "AI & ML"
  },
  {
    name: "Introduction to AI for Work",
    issuer: "DataCamp",
    category: "AI & ML"
  },
  {
    name: "Understanding Machine Learning",
    issuer: "DataCamp",
    category: "AI & ML"
  },
  {
    name: "Working with the OpenAI API",
    issuer: "DataCamp",
    category: "AI & ML"
  },
  {
    name: "Combining AI and Excel for Exceptional Outcomes",
    issuer: "Udemy",
    category: "Software & Tools"
  },
  {
    name: "The Complete Photoshop Masterclass: From 0 to Hero",
    issuer: "Udemy",
    category: "Software & Tools"
  },
  {
    name: "Complete Python Course 2026: Beginner to Advanced",
    issuer: "Udemy",
    category: "Software & Tools"
  },
  {
    name: "The Complete Public Speaking Course",
    issuer: "Udemy",
    category: "Soft Skills"
  }
];
