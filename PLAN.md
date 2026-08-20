# Ethan's Portfolio Website — Build Plan

> **Status:** LIVE — https://ethans-web.vercel.app (deployed via Vercel from https://github.com/EthanR03/EthansWeb)
> **Last updated:** 2026-08-20

## 1. Purpose & Audience

A personal portfolio site whose primary job is **recruiting**: a recruiter or hiring manager lands on it, immediately sees who Ethan is (headshot + introduction), and within one scroll understands his education, experience, and projects — impressed enough to say "wow."

- **Primary audience:** recruiters and hiring managers (often skimming on a laptop, sometimes phone, in under 60 seconds).
- **Secondary audience:** peers, collaborators, anyone Googling Ethan.
- **Success criteria:** looks unmistakably high-end, loads fast, tells the story in one scroll, and is easy for Ethan to extend over time.

## 2. Key Decisions (locked)

| Decision | Choice |
|---|---|
| Visual direction | **Dark & cinematic** — near-black canvas, dramatic typography, glowing accent, headshot lit like a film still |
| Structure | **One-page narrative + dedicated project detail pages** |
| Motion | **Rich scroll-driven motion** — scroll-triggered reveals, parallax, micro-interactions (no WebGL/3D for v1) |
| Content management | **Structured data files in the repo** (typed TS objects); media in ImageKit |
| Frontend | **Next.js** (App Router, TypeScript) |
| Media | **ImageKit** for all image/video storage, optimization, transformation, and delivery |

## 3. Content (resolved from resume, 2026-08-20)

### Identity & positioning
- **Name:** Ethan Rivera
- **Profile:** Computer Science (Software Engineering) graduate seeking full-time software engineering roles; strengths in web dev, mobile, AI/ML integration, ServiceNow platform, and cloud.
- **Tagline (final):** *"CS grad turning AI into working software"*

### Education
- **Arizona State University, Tempe, AZ** — B.S. Computer Science (Software Engineering), Jan 2022 – May 2025, GPA 3.0.

### Experience (site timeline)
- **ServiceNow Developer Intern — KeenStack, Chandler, AZ** (May 2026 – Jul 2026): scoped applications, AI-powered intake with Now Assist Skill Kit & Document Intelligence, Business Rules, Client Scripts, UI Actions, Flow Designer automations.
- *Default decision:* the non-technical roles on the resume (food runner, sales associate, valet, childcare) are **omitted from the site** — this is a SWE portfolio and the internship + projects tell the stronger story. Ethan can override.

### Featured projects (4 at launch)
| Project | One-liner | Stack |
|---|---|---|
| **CMDB Cockpit** | AI agents for ServiceNow CMDB intake — hackathon build (team of 3, KeenStack StackUp, Jul 2026) | Next.js, TypeScript, PostgreSQL, Drizzle ORM, OpenAI API, ServiceNow Table API & IRE |
| **Rheum-Uveitis Referral Intelligence** | ServiceNow AI proof of concept automating specialist-referral intake for RA/uveitis patients (team of 3, Jun 2026) | ServiceNow, Now Assist Skill Kit, Document Intelligence, Flow Designer, Scripted REST APIs |
| **AI Memory Assistant** | Personal RAG assistant that ingests, indexes, and retrieves personal documents (Apr 2026 – present) | Python, RAG |
| **Go Together — K-12 Carpooling App** | Cross-platform capstone app for secure school carpool scheduling (team of 4, Fall '24 – Spring '25) | Flutter, Firebase, MVVM |

Rich bullet detail for each lives in the resume and will be adapted into problem → solution → outcome narratives on the detail pages.

### Links & contact
- **GitHub:** https://github.com/EthanR03
- **LinkedIn:** https://www.linkedin.com/in/ethan-rivera
- **Email:** ethanjose1111@gmail.com
- **Resume download:** `Ethans_Resume_1.pdf` (recommend a site copy with phone number removed — see privacy note below).
- *Privacy default:* phone number stays **off** the public site (email + LinkedIn are enough for recruiters; public phone numbers get scraped). Ethan can override.

### Final decisions (2026-08-20)
1. **Headshot:** already uploaded to Ethan's ImageKit media library. *(Build-time input needed: the ImageKit URL endpoint, e.g. `ik.imagekit.io/<id>`, and the headshot's file path within the library.)*
2. **Project media:** designed placeholder covers at launch — art-directed graphics per project (name, stack motif) in the site's visual language, swapped for real screenshots/demos later via ImageKit.
3. **Domain:** launch on the Vercel URL first; custom domain later (5-minute swap in Vercel when ready).
4. **Accent color:** **purple** — exact shade tuned during design for WCAG AA contrast on the near-black canvas (violet family, e.g. `#8B5CF6`–`#A78BFA` range).
5. **Tagline:** *"CS grad turning AI into working software"*.

## 4. Design Direction — "Dark & Cinematic"

### Look & feel

- **Canvas:** near-black (not pure `#000` — a warm/cool dark like `#0A0A0B`), subtle grain or vignette for depth.
- **One accent color** used sparingly: glows, underlines, hover states, selection color. Everything else is a disciplined grayscale ramp.
- **Typography as the star:** a characterful display face for oversized headlines paired with a clean grotesque for body; tight tracking on display sizes, generous line-height on body. Fluid type scale (`clamp()`) so headlines feel massive on desktop without breaking mobile.
- **Headshot treatment:** large-format in the hero, edge-lit / duotone-graded via ImageKit transformations so it blends into the dark canvas rather than sitting in a white rectangle.
- **Light theme:** none. The site commits to dark — that's part of the identity. (`color-scheme: dark` set explicitly.)

### Motion language

- **Hero:** staged entrance (name → title → headshot → scroll cue), slight parallax between headshot and type on scroll.
- **Sections:** scroll-triggered reveals (opacity + translate, once, ~0.5–0.7s, custom easing) — no re-triggering on scroll-up.
- **Experience timeline:** line draws in as you scroll; entries cascade.
- **Project cards:** hover lifts with accent glow; image subtly zooms; cursor-aware tilt optional.
- **Details:** animated counters for stats, magnetic buttons, smooth scrolling (Lenis), custom selection/scrollbar styling.
- **Discipline:** animate only `transform` and `opacity`; everything respects `prefers-reduced-motion`; nothing blocks reading — a recruiter who scrolls fast should never wait for content.

## 5. Site Structure

### `/` — the one-page narrative

| # | Section | Content |
|---|---|---|
| 1 | **Hero** | Full-viewport: headshot (ImageKit, priority-loaded), name in oversized display type, one-line positioning statement, primary CTA ("View work" / "Contact"), scroll indicator |
| 2 | **About** | 2–3 paragraph introduction, key facts/stats strip (e.g. years coding, projects shipped), secondary photo optional |
| 3 | **Education** | College, degree, grad year, honors/coursework highlights — prominent placement per Ethan's requirement |
| 4 | **Experience** | Vertical timeline of roles with company, title, dates, highlight bullets |
| 5 | **Projects** | Featured grid (3–6 cards): cover image/video loop, name, one-liner, stack tags → each links to `/projects/[slug]` |
| 6 | **Contact / Footer** | Email CTA, GitHub/LinkedIn, resume download, small footer |

Sticky minimal nav (name/monogram + anchor links + resume button) that appears after scrolling past the hero.

### `/projects/[slug]` — project detail pages

Statically generated from the projects data file: hero media (image or ImageKit-streamed video demo), problem → solution → outcome narrative, stack, role, links (live/GitHub), gallery, next-project navigation.

### Utility routes

- `not-found.tsx` — styled 404 in the same art direction.
- `sitemap.ts`, `robots.ts`, `opengraph-image` — SEO plumbing (§8).

## 6. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | **Next.js 15+ (App Router, TypeScript)** | Static generation for every page; Server Components by default, client components only where motion needs them |
| Styling | **Tailwind CSS v4** | Design tokens (colors, type scale, spacing) as CSS variables in `@theme` |
| Motion | **Motion (Framer Motion) + Lenis** | Motion for reveals/micro-interactions; Lenis for smooth scrolling. GSAP ScrollTrigger only if a scene needs scrubbing that Motion can't do cleanly |
| Media | **ImageKit** via `@imagekit/next` | See §7 |
| Fonts | `next/font` (self-hosted Google fonts) | Zero layout shift, no external font requests |
| Icons | Inline SVG (Phosphor/Lucide) | No emoji-as-icons |
| Deployment | **Vercel** | Native Next.js hosting, preview deploys, custom domain + HTTPS |
| Analytics | Vercel Analytics (optional) | Zero-config, privacy-friendly |

**Explicitly not in v1:** CMS, database, auth, blog, contact form backend (email link instead — no spam handling to build), i18n, light theme.

## 7. ImageKit Integration

- **SDK:** `@imagekit/next` — its `<Image>`/`<Video>` components wrap Next.js image handling with ImageKit as the loader, so every image gets automatic format negotiation (AVIF/WebP), responsive `srcset`, and CDN delivery.
- **Media library as source of truth:** all originals (headshot, project screenshots, demo videos) upload to the ImageKit dashboard, organized as `/portfolio/hero/`, `/portfolio/projects/<slug>/`, etc. Data files reference ImageKit paths, never local files.
- **Transformations used:**
  - Headshot: crop/focus (face detection), duotone/grade overlay to sit on the dark canvas, DPR variants.
  - Project covers: fixed aspect-ratio crops so the grid never shifts; low-quality placeholder (blurred thumbnail) for loading.
  - Video demos: ImageKit video delivery with trimming, poster frame extraction, adaptive quality; muted auto-looping previews on cards, full player on detail pages.
- **Env config:** `NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT` (public). Private API key only needed if in-app uploads are added later — not in v1 (uploads happen via dashboard).

## 8. Content Model (structured data files)

```
src/data/
  site.ts        # name, tagline, intro paragraphs, social links, email, resume URL
  education.ts   # school(s), degree, dates, honors, coursework
  experience.ts  # roles: company, title, dates, location, bullets, tech
  projects.ts    # slug, name, oneLiner, description, stack, links,
                 # media (ImageKit paths), featured flag, order
```

All typed with TS interfaces — adding a project is: add object to `projects.ts`, upload media to ImageKit, push. Vercel rebuilds automatically. This is also the clean migration path to MDX or a CMS later if the site grows.

## 9. Quality Bar

- **Performance:** Lighthouse ≥ 95 across the board on mobile; LCP (hero headshot) < 2.0s via priority ImageKit loading; CLS < 0.1 (fixed aspect ratios everywhere); animations at 60fps (transform/opacity only).
- **SEO:** per-page metadata, Open Graph + Twitter cards with a branded OG image, `sitemap.xml`, `robots.txt`, JSON-LD `Person` schema (name, education, links) — helps the "Google Ethan" case.
- **Accessibility:** WCAG AA contrast on the dark palette (grays checked against `#0A0A0B`), full keyboard navigation, visible focus rings styled to the accent, alt text on all media, `prefers-reduced-motion` honored globally, semantic landmarks.
- **Responsive:** mobile-first; hero art direction swaps (portrait crop via ImageKit) on small screens; 44px+ touch targets; no horizontal scroll.

## 10. Build Phases

| Phase | Scope | Outcome |
|---|---|---|
| **0. Content & assets** | Ethan answers §3; headshot + project media uploaded to ImageKit; copy drafted | Everything the build needs, ready |
| **1. Foundation** | Scaffold Next.js + Tailwind + fonts + design tokens; data files typed and filled; ImageKit wired; deploy skeleton to Vercel | Ugly-but-live site with real content, CI/CD working from day one |
| **2. Core sections, static** | Hero, About, Education, Experience, Projects grid, Contact/Footer — fully styled, zero animation | The complete site, looking high-end while perfectly still |
| **3. Motion pass** | Lenis, hero entrance, scroll reveals, timeline draw, card hovers, counters, nav behavior | The "wow" layer, added deliberately on top of a solid base |
| **4. Project pages** | `/projects/[slug]` template, media galleries, video demos, next-project nav | Depth one click away |
| **5. Polish & launch** | SEO/OG/JSON-LD, 404, favicon, accessibility audit, Lighthouse tuning, cross-device QA, custom domain | Production launch |

Phases 2→3 are intentionally separate: the site must look premium with animations off — motion amplifies good design, it doesn't rescue weak design.

## 11. Future Roadmap (post-launch, not in scope now)

- Blog / writing section (MDX)
- Case-study deep dives with scroll-driven storytelling per project
- In-app media upload flow using ImageKit's upload API (auth-gated admin)
- Testimonials/recommendations section
- View-transition API page transitions
- Analytics-driven iteration (which projects do recruiters actually open?)

---

**Next step:** Phase 0 is complete. Phase 1 begins: scaffold Next.js + Tailwind, wire ImageKit (needs Ethan's URL endpoint + headshot path), fill data files from the resume, deploy skeleton to Vercel.
