import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/ishmaelharrydeckor", handle: "@ishmaelharrydeckor" },
    { name: "LinkedIn", href: "#", handle: "Ishmael Harry-Deckor" },
    { name: "Twitter", href: "#", handle: "@ishmael_hd" },
    { name: "Email", href: "mailto:ishmaelharrydeckor@gmail.com", handle: "ishmaelharrydeckor@gmail.com" },
  ];

  return (
    <footer className="border-t border-zinc-800/60 bg-[#050505] py-16 mt-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Link href="/" className="font-display font-semibold tracking-wider text-foreground text-md">
              ISHMAEL HARRY-DECKOR
            </Link>
            <p className="text-sm text-foreground-muted leading-relaxed">
              AI-accelerated frontend builder. Building premium, production-ready web experiences at lightspeed.
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
                      className="text-sm text-foreground-muted hover:text-accent transition-colors duration-200"
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
                      className="text-sm text-foreground-muted hover:text-accent transition-colors duration-200"
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
          <p>© {new Date().getFullYear()} Ishmael Harry-Deckor. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Built with <span className="text-accent">●</span> AI Acceleration
          </p>
        </div>
      </div>
    </footer>
  );
}
