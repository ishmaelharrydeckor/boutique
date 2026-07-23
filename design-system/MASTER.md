# Master Design System — Personal Portfolio Website

This document defines the core styling, typography, spacing, depth, and motion guidelines for Ishmael Harry-Deckor's personal portfolio. 

## 1. Aesthetic Direction
- **Vibe**: Confident, minimal, technically credible. Stripe/Linear/Vercel-level polish.
- **Tone**: Professional, engineering-driven, AI-accelerated. No generic template vibes.

---

## 2. Color Palette (Restrained & High-Contrast)
Designed specifically for a sleek dark mode with one deliberate accent color.

| Token | CSS Variable | Hex Value | Purpose |
| :--- | :--- | :--- | :--- |
| **Background (Base)** | `--background` | `#050505` (Deepest Charcoal) | Page background |
| **Background (Surface)**| `--surface` | `#0D0D0E` (Charcoal Card) | Cards, inputs, sections |
| **Background (Muted)**  | `--surface-muted` | `#161618` | Borders, subtle highlights |
| **Foreground (Primary)**| `--foreground` | `#F4F4F5` (Off-white) | Primary headlines, body copy |
| **Foreground (Muted)**  | `--foreground-muted`| `#A1A1AA` (Zinc-400) | Sub-headlines, descriptions |
| **Accent (Primary)**    | `--accent` | `#D4A527` (Warm Amber/Gold) | Interactive focus, CTAs, tags |
| **Accent (Glow)**       | `--accent-glow` | `rgba(212, 165, 39, 0.15)` | Glowing highlights, soft borders |

---

## 3. Typography
- **Headlines / Display**: [Outfit](https://fonts.google.com/specimen/Outfit) or [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
  - *Rules*: Tight letter-spacing (`tracking-tight` or `-0.02em`) on large type. Large sizes with significant jumps (e.g., `text-4xl` to `text-6xl`).
- **Body / Interface**: [Inter](https://fonts.google.com/specimen/Inter)
  - *Rules*: Highly legible, standard tracking, neutral zinc coloring (`text-zinc-400`).

```css
/* Typography variables */
--font-display: var(--font-outfit), sans-serif;
--font-sans: var(--font-inter), sans-serif;
```

---

## 4. Spacing & Layout
- **Whitespace**: Generous and deliberate. Sections should have double the standard padding to feel spacious and expensive.
  - Desktop sections: `py-32` or `py-40` (128px - 160px).
  - Mobile sections: `py-20` (80px).
- **Grid Layouts**:
  - Projects grid: 3-column desktop (`grid-cols-3`), 2-column tablet (`grid-cols-2`), 1-column mobile (`grid-cols-1`). Gap size: `gap-8` (32px).

---

## 5. Depth, Borders & Glassmorphism
- **Borders**: Avoid default heavy shadows. Use subtle 1px borders for structure.
  - Card borders: `border border-zinc-800/80 hover:border-amber-500/30 transition-all duration-300`
- **Glassmorphism**: Use `backdrop-blur-md bg-zinc-950/70` strictly for the main navigation header and the CTA hero overlay. Keep other surfaces solid for high contrast.

---

## 6. Motion & Interaction Guidelines
- **Scroll Animations**: GSAP ScrollTrigger or Framer Motion.
  - *Entry*: Subtle fade-ups of 8px to 16px. Never use large slide transitions.
  - *Stagger*: Lists and grids must stagger entry by `50ms` per item.
- **Hover States**: Every interactive element needs a micro-interaction.
  - Buttons: Subtle scaling and glow shift (`hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(212,165,39,0.15)]`).
  - Cards: Soft border color shift and elevation (Y-axis translation of `-4px`).
- **Signature Interactive Moment**:
  - A React Three Fiber (R3F) interactive particle canvas in the background of the Hero section, responding to mouse position (displacement) and click ripples.

---

## 7. Tailwind CSS v4 Theme Integration
To hook this system into Tailwind v4, add these variable assignments to `src/app/globals.css`:

```css
@theme {
  --color-background: #050505;
  --color-surface: #0d0d0e;
  --color-surface-muted: #161618;
  --color-foreground: #f4f4f5;
  --color-foreground-muted: #a1a1aa;
  
  --color-accent: #d4a527;
  --color-accent-glow: rgba(212, 165, 39, 0.15);
  
  --font-sans: var(--font-inter), sans-serif;
  --font-display: var(--font-outfit), sans-serif;
}
```
