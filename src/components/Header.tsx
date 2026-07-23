"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/60 bg-[#050505]/80 backdrop-blur-md transition-all duration-300">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 flex h-16 items-center justify-between" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="group flex items-center gap-2 text-lg font-display font-semibold tracking-wider text-foreground hover:text-accent transition-colors duration-300">
            <span>ISHMAEL HARRY-DECKOR</span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:gap-x-12">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-sans text-sm font-medium tracking-wide transition-colors duration-300 py-1.5 ${
                  isActive ? "text-accent" : "text-foreground-muted hover:text-foreground"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-accent rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <Link
            href="/contact"
            className="rounded-lg bg-[#111112] border border-zinc-800 hover:border-accent/40 text-foreground px-4 py-2 text-xs font-semibold tracking-wider hover:text-accent hover:shadow-[0_0_15px_rgba(212,165,39,0.1)] transition-all duration-300"
          >
            LET'S WORK
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-foreground-muted hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-[#050505] px-6 py-6 transition-all duration-300">
          <div className="space-y-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-base font-semibold ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-foreground-muted hover:bg-zinc-900 hover:text-foreground"
                  } transition-all duration-200`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-zinc-800/80">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center rounded-lg bg-accent text-zinc-950 px-4 py-2.5 text-sm font-semibold tracking-wider hover:bg-accent/90 transition-all duration-300"
              >
                LET'S WORK
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
