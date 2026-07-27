---
name: typography-selection
description: Apply when selecting, evaluating, or troubleshooting font choices for a project.
activationMode: ModelDecision
---

# Typography Selection

Use this skill whenever choosing or evaluating fonts for a 
project — during initial design system creation, and as a 
check whenever typography feels generic or unconsidered.

## Core Principle: Contrast, Not Similarity

A font pairing works because the two fonts do DIFFERENT jobs, 
not because they're both "nice." Pick pairs that contrast in 
at least one dimension:
- **Serif + Sans** — the most reliable, safest contrast (one 
  for headlines, one for body)
- **High-contrast display + minimal geometric sans** — display 
  font carries personality, sans carries clarity
- **Two weights/styles of one well-designed geometric family** 
  — works ONLY if the family has genuinely distinct weights 
  (e.g. a Black display weight + a Regular body weight), not 
  just the same weight twice

Avoid pairing two fonts that feel similar in weight, mood, and 
structure — this reads as accidental, not intentional. If both 
fonts could be swapped for each other without anyone noticing, 
they're not actually paired, they're just duplicated.

## Match Font Personality to Brand Voice

Before picking a font, identify what the brand needs to signal, 
then pick typefaces that embody it:
- **High-contrast serif** (thick/thin stroke variation) → 
  tradition, luxury, editorial authority, establishment
- **Geometric sans** (circles, consistent stroke width) → 
  modern, tech, clean, approachable
- **Humanist sans** (slightly organic curves) → friendly, 
  accessible, warm without being informal
- **Monospace** → technical, developer-focused, precise, 
  slightly raw/unpolished on purpose
- **Slab serif** → confident, bold, sturdy, sometimes playful
- **Script/handwritten** → personal, artisanal, informal — use 
  VERY sparingly, almost never for body text, often wrong choice 
  for anything claiming "premium" unless genuinely artisanal/craft

Match the font to what the BRAND is, not what looks trendy in 
isolation. A fintech app and a boutique bakery should never 
reach for the same typeface family.

## Sizing Scale Discipline

Per our existing design rules: fewer distinct sizes, bigger 
jumps between them, not many similar sizes.
- A confident hero headline should be dramatically larger than 
  body text — not a modest step up
- Limit the type scale to roughly 4-6 distinct sizes across an 
  entire site (display, H1, H2, body, small/caption) rather than 
  a size for every possible use case
- Tighten letter-spacing on large display text (negative tracking); 
  loosen slightly on small caps/labels/eyebrow text for legibility

## Explicitly Avoid (per Impeccable's detector + general anti-slop)

- Arial, system-ui defaults, or unstyled fallback fonts as a 
  final choice — these signal "no decision was made," not 
  "clean and simple"
- Using Inter for both heading AND body — Inter is fine as a 
  body font, but pairing it with itself (or nothing) for 
  headlines reads as the most common AI-generated-site default
- More than 2 font families on one page (a third "accent" 
  font is rarely justified and usually just adds noise)
- Justifying a script/decorative font choice purely because it 
  "looks fancy" without a genuine brand-voice reason

## Practical Selection Process

1. Identify brand personality (2-3 adjectives) before touching 
   any font list
2. Pick ONE distinctive font for headlines that embodies those 
   adjectives — prioritize character over safety
3. Pick a clean, highly legible sans or serif for body — 
   prioritize readability over character here, body text is 
   not the place for personality
4. Check contrast: could you swap the two fonts and not notice? 
   If yes, pick a more distinct headline font
5. Cross-check against the user's other recent projects (per 
   project-sop) — avoid reusing the exact same font pairing 
   across unrelated projects unless there's a deliberate reason 
   (e.g. maintaining the user's own personal brand consistency 
   on their portfolio specifically)
6. Confirm the chosen fonts are available via next/font/google 
   or similar, for proper loading performance — don't pick an 
   obscure font that isn't reliably available
