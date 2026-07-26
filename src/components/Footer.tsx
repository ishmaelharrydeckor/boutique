import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "SERVICES", href: "#services" },
    { name: "WORK", href: "#work" },
    { name: "APPROACH", href: "#approach" },
    { name: "CONTACT", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/ishmaelharrydeckor", handle: "@ishmaelharrydeckor" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/ishmaelharrydeckor", handle: "@ishmaelharrydeckor" },
    { name: "Twitter", href: "https://x.com/DeckorHarry", handle: "@DeckorHarry" },
    { name: "Email", href: "mailto:hello@aether.studio", handle: "hello@aether.studio" },
  ];

  return (
    <footer className="border-t border-zinc-900 bg-background py-16 mt-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Link href="#hero" className="font-display font-semibold tracking-widest text-foreground text-md uppercase">
              AETHER
            </Link>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Boutique creative tech studio crafting premium, hyper-polished web experiences with technical mastery.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">Sitemap</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs text-foreground-muted hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">Connect</h4>
              <ul className="space-y-3">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-foreground-muted hover:text-accent transition-colors duration-200"
                    >
                      <span className="text-foreground">{social.name}:</span> {social.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row sm:justify-between items-center gap-4 text-xs text-foreground-muted">
          <p>© {new Date().getFullYear()} AETHER. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-mono">
            DESIGNED & BUILT BY AETHER STUDIO
          </p>
        </div>
      </div>
    </footer>
  );
}
