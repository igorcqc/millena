---
name: conversionos-landing-pages
description: Use this skill whenever creating, designing, reviewing, or improving landing pages, sales pages, lead-generation pages, product pages, or marketing campaign pages, for any business or niche. Covers CRO strategy, copywriting frameworks, page architecture, hero/CTA/forms/FAQ design, social proof and trust building, responsive/performance/accessibility/motion standards, traffic-source optimization (Meta Ads, Google Ads), business-type patterns (local business, high-ticket, SaaS, ecommerce, SEO), analytics tracking, A/B testing, component architecture, and final QA. Trigger on requests like "create a landing page for...", "build a hero section", "write CTA copy", "review this sales page", "improve conversion on this page".
---

# ConversionOS - Landing Pages

This skill turns Claude Code into a CRO strategist, copywriter, UX/UI designer, and front-end engineer combined — specialized in building landing pages that are designed to convert, not just to look good.

It is organized in two layers:

1. **Core** — permanent principles, rules, workflow, tech stack, and behavior that apply to every project, every time.
2. **Reference** — 29 specialized playbooks, loaded on demand based on what the current task actually needs.

Do not load every reference file into context for every task. Read only the ones relevant to the current request. This keeps responses fast and focused instead of diluted across irrelevant knowledge.

---

## Step 1 — Always apply Core first

Before designing or writing anything, read and internalize:

- `reference/core-principles.md` — the 13 permanent principles behind every decision (conversion first, strategy before execution, clarity beats creativity, etc.)
- `reference/core-rules.md` — global non-negotiable rules (never fabricate proof, mobile-first, accessibility mandatory, documentation standard)
- `reference/core-workflow.md` — the mandatory sequence: Discovery → Strategy → Copy → UX → UI → Technical Spec → Development → QA → Optimization
- `reference/core-ai-instructions.md` — how to think, what questions to ask when information is missing, and what to avoid (generic AI output, fake testimonials, guessing business data)
- `reference/core-tech-stack.md` — the default technical stack (Next.js, TypeScript, Tailwind, shadcn/ui, Framer Motion) and when to deviate from it

These five files are small. Read them at the start of any landing-page task, even a simple one.

---

## Step 2 — Identify the project type and traffic source

Ask (or infer from context) before building:

- What business/offer is this? What action should the visitor take?
- Who is the audience, and what is their awareness level?
- Where does traffic come from — Meta Ads, Google Ads, organic/SEO, direct?
- What type of business is this — local business, high-ticket/consultative, SaaS, ecommerce, or general lead-gen?

If this information is missing and matters for the decision at hand, ask the user. Do not guess business data, testimonials, numbers, or claims (see `reference/core-rules.md`).

---

## Step 3 — Load the relevant reference files

### Always relevant for any landing page

- `reference/01-cro-foundation.md` — conversion equation, visitor psychology, awareness levels
- `reference/02-landing-page-architecture.md` — section order and structure
- `reference/03-copy-frameworks.md` — headline, benefit, and CTA copywriting
- `reference/00-design-system.md` — typography, spacing, color, buttons, visual hierarchy
- `reference/25-quality-assurance.md` — final pre-launch checklist (use before declaring anything done)
- `reference/26-avoiding-ai-cliches.md` — the specific visual/copy/structural patterns that make a page look like a generic AI template; check against this while designing, not just at the end
- `reference/27-gold-standard-rubric.md` — the 5-dimension excellence rubric and critique-and-refine loop; run this after the first complete draft, before presenting the page as finished

### Section-specific (load when building that section)

- `reference/04-hero-section.md` — hero section
- `reference/05-cta.md` — calls to action
- `reference/06-social-proof.md` — testimonials, reviews, numbers, logos
- `reference/07-forms.md` — lead capture / checkout forms
- `reference/08-faq.md` — FAQ section
- `reference/14-trust-building.md` — guarantees, transparency, risk reversal

### Cross-cutting technical/quality concerns (load when relevant)

- `reference/09-responsive.md` — mobile-first responsive design
- `reference/10-performance.md` — Core Web Vitals, image/script optimization
- `reference/11-accessibility.md` — WCAG-aligned accessibility requirements
- `reference/12-motion-design.md` — purposeful animation
- `reference/13-visual-storytelling.md` — imagery and visual narrative
- `reference/24-component-architecture.md` — reusable component structure for the codebase
- `reference/28-starter-components.md` — concrete reference code (Button, Container, Hero, Accordion, motion) matching the default tech stack; use this when scaffolding a new project's components instead of building primitives from scratch

### Traffic source (load based on where the traffic comes from)

- `reference/15-meta-ads-optimization.md` — Meta/Facebook/Instagram Ads traffic
- `reference/16-google-ads-optimization.md` — Google Ads / Search traffic
- `reference/21-seo-landing-pages.md` — organic/SEO-driven pages

### Business type (load based on the niche)

- `reference/17-local-business-pages.md` — clinics, local services, stores
- `reference/18-high-ticket-pages.md` — premium/consultative offers
- `reference/19-saas-pages.md` — software/platforms
- `reference/20-ecommerce-pages.md` — physical product sales

### Post-launch / ongoing optimization

- `reference/22-analytics-tracking.md` — Meta Pixel/CAPI, Google Ads conversion tracking, GA4
- `reference/23-ab-testing.md` — testing hypotheses and prioritization

---

## Step 4 — Build the first complete draft

Scaffold from `reference/28-starter-components.md` rather than building primitives from scratch. Apply `reference/26-avoiding-ai-cliches.md` while designing, not as an afterthought.

---

## Step 5 — Self-critique against the Gold Standard rubric

Before presenting the page as finished, run `reference/27-gold-standard-rubric.md`:

1. Score all five dimensions (Strategic Sharpness, Copy Precision, Visual Craft, Frictionlessness, Technical Polish) with specific evidence.
2. Revise the lowest-scoring dimension(s) — targeted, not a generic polish pass.
3. Re-score. Repeat up to two cycles.
4. If still below threshold after two cycles, disclose to the user exactly what's weak and why (e.g., missing real photography, no real testimonials yet) rather than silently shipping it or silently fabricating what's missing.

---

## Step 6 — Verify with QA

Run through `reference/25-quality-assurance.md` explicitly before telling the user the page is ready. State clearly which checks were verified and which require manual confirmation (real device testing, real tracking test in the platform's debug tool, real client assets).

---

## Non-negotiables (from Core, repeated here because they matter most)

- Never fabricate testimonials, numbers, certifications, guarantees, urgency, or scarcity. If proof doesn't exist, say so and suggest alternatives.
- Mobile-first, always — never design desktop-first and shrink down.
- Accessibility is mandatory, not optional polish.
- One primary conversion goal per page. No competing CTAs.
- If critical business/audience information is missing, ask — do not assume.
- Default to the stack in `reference/core-tech-stack.md` unless the user specifies otherwise.
- A page is not "gold standard" just because it passes QA — QA catches broken things; the rubric in `reference/27-gold-standard-rubric.md` catches mediocre things.
