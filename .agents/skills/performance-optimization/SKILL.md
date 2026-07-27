---
name: performance-optimization
description: Apply before launch, when performance/lag issues are reported, or after adding 3D/scroll-video/heavy animation features.
activationMode: ModelDecision
---

# Performance Optimization Checklist

Run this before considering any project launch-ready. 
Covers images, animation, 3D, video, and general load performance.

## Images
- All images use next/image with proper sizes prop, not raw 
  <img> tags
- Hero/above-the-fold images use priority loading; everything 
  else lazy-loads
- Images served in modern formats (WebP/AVIF) where possible
- No oversized images — a 4000px source image displayed at 
  400px is wasted bandwidth; resize at the source

## Animation (GSAP / Framer Motion)
- Respect prefers-reduced-motion — check for it and simplify 
  or disable non-essential motion for users who have it enabled
- Avoid animating layout-triggering CSS properties (width, 
  height, top, left) — animate transform and opacity instead, 
  since these run on the GPU compositor rather than triggering 
  reflow
- Don't run scroll-linked animations on properties that force 
  layout recalculation every frame
- Clean up all ScrollTrigger/animation instances on unmount 
  (useGSAP handles this automatically — verify it's actually 
  being used, not plain useEffect)
- Avoid excessive simultaneous animations on a single view — 
  stagger or limit concurrent animated elements

## 3D (React Three Fiber / Three.js)
- Keep polygon count reasonable — avoid unnecessarily complex 
  geometries for simple visual effects
- Test actual frame rate on a mid-range mobile device, not just 
  desktop — R3F scenes that run at 60fps on a laptop can drop 
  significantly on phones
- Lazy-load the 3D scene/canvas so it doesn't block initial 
  page load — show a lightweight placeholder/loading state first
- Consider disabling or simplifying 3D scenes entirely on 
  mobile/low-power devices if performance testing shows real 
  degradation, rather than forcing a heavy scene everywhere
- Dispose of Three.js resources properly when components unmount 
  to avoid memory leaks across page navigation

## Video / Scroll-Scrubbed Media
- Prefer image-sequence scrubbing over native video currentTime 
  seeking (proven more reliable across browsers/devices)
- Preload sequence frames before the section becomes interactive, 
  with a clear loading state — don't let users scrub before 
  assets are ready
- Keep source video/sequences short and compressed — long or 
  high-res source material is the most common cause of lag here
- Test scrub smoothness on both fast scroll and slow scroll, 
  desktop and mobile

## General Load Performance
- Avoid unnecessary client-side JS on static/content sections — 
  keep those as server components where the framework allows
- Check for render-blocking resources (fonts, scripts) that 
  delay first paint
- Minimize layout shift — reserve space for images/media before 
  they load (explicit width/height or aspect-ratio)
- Test on a throttled/slow connection simulation, not just local 
  dev server speed, which is unrealistically fast

## Verification Method
- Test in a PRODUCTION build (npm run build && npm run start), 
  not just dev mode — dev mode is always slower/less optimized 
  and can give a misleading impression of real performance
- Test on an actual mobile device where possible, not just 
  browser dev tools' mobile emulation
- If a Lighthouse or similar performance score is available, 
  check it — but treat real device testing as the source of truth 
  over any single score

## Reporting Requirement
Report specifically what was checked, what was found, and what 
was changed — not just "performance looks good."

## Activation
Run this checklist:
- Before any project (client or portfolio) is considered launch-ready
- Whenever the user reports something feels laggy/slow
- After adding any 3D, scroll-video, or heavy animation feature
- As part of Step 4 (Quality Gates) in the project-sop skill
