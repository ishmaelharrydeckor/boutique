---
name: project-sop
description: Master SOP workflow for starting and delivering new projects.
activationMode: AlwaysOn
global: true
---

# Project SOP — Master Workflow

Run this SOP at the start of ANY new project (client work or 
portfolio piece), before writing any code. Do not skip steps 
just because a request seems simple.

## Step 1: Clarify Before Building

Before doing anything, ask the user the following (skip only 
if already clearly answered in their initial prompt):

1. **Project type**: Client project, portfolio showcase, or 
   personal tool?
2. **Purpose/goal**: What should a visitor DO or FEEL after 
   visiting? (convert, get in touch, be impressed, understand 
   a product, etc.)
3. **Industry/audience**: Who is this for, specifically?
4. **Visual direction**: Any reference sites/brands they want 
   to match or avoid? If none given, note that imagegen-frontend-web 
   will be used to explore direction first.
5. **Scope**: Single page or multi-page? Real backend needed, 
   or front-end/mock-data only for now?
6. **Assets available**: Do they have real copy, images, logo, 
   brand colors? Or should placeholders be used (and clearly 
   marked as such)?
7. **Timeline/priority**: Is speed or polish the higher priority 
   for this specific build?

Do not proceed to Step 2 until these are reasonably answered. 
Ask concisely — don't overwhelm with all 7 as separate messages, 
group them naturally.

## Step 2: Foundation

1. Run the `/new-project` workflow to clone the starter template 
   (Tailwind, shadcn/ui, GSAP, Framer Motion, R3F pre-configured). 
   Never scaffold a fresh project unless the user explicitly says 
   this project needs a different stack.
2. If visual direction is unclear or the user wants exploration: 
   use `imagegen-frontend-web` (or `brandkit` if brand identity 
   is also needed) to generate 2-3 reference directions. Present 
   to the user for selection before continuing.
3. Use the **UI/UX Pro Max** skill to generate a design system 
   tailored to the project's industry/type, and persist it to 
   `design-system/MASTER.md`. Reference the chosen imagegen 
   direction if one was picked in step 2.

## Step 3: Build

1. Build the highest-impact page/section first (usually Home/
   hero) and show the user for approval before continuing to 
   other pages — never build the full scope blind.
2. Follow the content-driven architecture pattern: all editable 
   content in typed data files (`data/*.ts`), never hardcoded 
   into components, so future updates don't require touching 
   layout code.
3. All animation/3D components: `'use client'` + `useGSAP` hook 
   per our conventions. No plain `useEffect` for GSAP.
4. Reference existing showcase components (`ThreeScene.tsx`, 
   `ScrollVideoScene.tsx`, `FramerMotionScene.tsx`, 
   `GsapScene.tsx`) as patterns when relevant, rather than 
   building animation/3D from scratch each time.

## Step 4: Quality Gates (run ALL of these before considering ANY page done)

1. **Impeccable audit**: `/impeccable audit [page]` — fix all 
   findings.
2. **Impeccable critique**: `/impeccable critique [page]` — 
   review UX judgment findings, fix what's worth fixing.
3. **Impeccable polish**: `/impeccable polish [page]`.
4. **Animation check**: run `find-animation-opportunities`, 
   then `review-animations` — fix findings from both.
5. **Mobile review**: run the `mobile-responsive-review` skill.
6. **Performance check**: run the `performance-optimization` skill.
7. **If any real backend/database is involved**: run the 
   `backend-security-checklist` skill. Do not skip this even 
   if the backend seems simple.
8. Confirm zero console errors via `npm run dev` and manual 
   check before reporting anything as "done."

## Step 5: Wrap-Up

1. Run the `portfolio-add` skill to handle post-project check and portfolio inclusion.
2. If a repo destination was given, commit and push all code 
   there.
3. Write/update the README for the project documenting the 
   content-update pattern (how to add new content without 
   touching layout code).
4. Give the user a clear summary: what was built, what quality 
   gates were run and passed, and what — if anything — still 
   needs their input (real assets, copy, backend integration, 
   etc.) before this is truly launch-ready.

## Guardrails

- Never skip Step 1's clarifying questions just because a 
  request "seems obvious."
- Never skip Step 4's quality gates to save time, even for 
  small/quick projects.
- Never fabricate testimonials, team members, or credentials 
  as if real — clearly mark all placeholder content and note 
  what needs replacing before public/client launch.
- Never expose API keys or secrets client-side.
- If uncertain about scope (e.g. "is this client work or a 
  demo?"), ask rather than assume.
