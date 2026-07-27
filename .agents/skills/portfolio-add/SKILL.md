---
name: portfolio-add
description: Apply at the end of any project build, or when explicitly asked to add a project to the portfolio.
activationMode: ModelDecision
---

# Portfolio Add — Post-Project Check

Run this at the end of ANY project build (client work or 
demo/showcase), and whenever explicitly asked to review a 
past project for portfolio inclusion.

## Step 1: Ask, Don't Assume

Once a project is complete and has passed the project-sop 
quality gates, ask the user directly:

"Should I add this to your portfolio site? If yes:
1. What category/tag should it have? (e.g. 'Client Work', 
   '3D/Interactive', 'Design Systems', 'Hospitality / Visual 
   Showcase')
2. Should it be marked as 'featured' on the homepage, or just 
   included in the full projects grid?
3. Is there anything about this project that's sensitive/private 
   and shouldn't be publicly described in the case study (e.g. 
   real client name, confidential business details)? If so, 
   note what should be anonymized or generalized in the write-up."

Do not add anything to the portfolio without an explicit yes — 
some projects (private client work under NDA, unfinished demos, 
test builds) should NOT be added, and the user may not have 
thought about this until asked.

## Step 2: If Yes — Gather What's Needed

1. Confirm the live URL (Vercel or otherwise) for this project.
2. Visit the live URL, capture screenshots at desktop (1440px) 
   and mobile (375px) viewports.
3. Draft a short case-study description (problem, approach, 
   outcome) grounded in what's actually visible/true — respecting 
   any anonymization notes from Step 1.
4. Identify the actual tech stack used for this specific project.

## Step 3: Add to the Portfolio Data File

1. Locate the main portfolio site's `data/projects.ts` file 
   (path may need to be confirmed with the user if working in 
   a different project directory).
2. Add a new entry following the existing typed structure: 
   slug, name, url, category, summary, problem, approach, 
   outcome, techStack, isFeatured.
3. Add captured screenshots to the appropriate `public/projects/
   [slug]/` folder in the portfolio site.
4. Do NOT touch any layout/component code — this should be a 
   pure data-file + image addition, per the portfolio's 
   content-driven architecture.

## Step 4: Confirm and Verify

1. Run the portfolio site's dev server and confirm the new 
   project renders correctly in both the grid and its individual 
   `/projects/[slug]` page, with no console errors.
2. Report back to the user: what was added, what category/
   featured status was set, and a reminder that they can review 
   and edit the case-study copy before it's considered final.

## Guardrails

- Never add a project to the portfolio without explicit 
  confirmation from the user first.
- Never publicly name a real client or disclose confidential 
  business details in a case study without the user's explicit 
  go-ahead — default to anonymizing (e.g. "a local hospitality 
  business" instead of a real name) unless told otherwise.
- If the portfolio site's project data structure has changed 
  since this skill was last used, read the current 
  `data/projects.ts` structure first rather than assuming the 
  original schema still applies.

## Activation
Run this:
- At the end of any project build, after quality gates pass
- Whenever explicitly asked to "add this to my portfolio"
- As the final step in the project-sop skill's Step 5 (Wrap-Up)
