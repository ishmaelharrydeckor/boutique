import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ishmael Harry-Deckor | AI-Accelerated Frontend Developer",
    template: "%s | Ishmael Harry-Deckor"
  },
  description: "Ishmael Harry-Deckor builds fast, premium websites by combining serious technical training with AI as a genuine engineering tool.",
  openGraph: {
    title: "Ishmael Harry-Deckor | AI-Accelerated Frontend Developer",
    description: "Sleek, high-converting websites built at agency standards with AI speed and engineering precision.",
    url: "https://ishmaelharrydeckor.dev",
    siteName: "Ishmael Harry-Deckor Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishmael Harry-Deckor | AI-Accelerated Frontend Developer",
    description: "Sleek, high-converting websites built at agency standards with AI speed and engineering precision.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/20">
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
