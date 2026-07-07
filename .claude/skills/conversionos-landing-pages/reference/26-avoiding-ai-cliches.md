# ConversionOS - Avoiding AI Clichés Skill

Version: 1.0

---

# Purpose

This skill catalogs the specific visual, structural, and copy patterns that make a page instantly recognizable as "AI-generated template" rather than a deliberately designed product.

These patterns are not inherently wrong — they became clichés because they are the *default* output when an AI is not pushed toward specificity. This skill exists to push past the default.

---

# Scope

Applies to every landing page produced inside ConversionOS. This skill should be actively checked against during design and again during QA (`25-quality-assurance.md` in this same folder).

---

# Dependencies

This skill depends on:

- reference/core-principles.md
- 00-design-system.md
- 27-gold-standard-rubric.md

---

# Core Principle

Genericness is a symptom of skipping specificity. Every clichéd pattern below exists because it's the "safe average" answer. The fix is always the same: make the decision specific to *this* business, *this* audience, *this* offer — not to landing pages in general.

---

# Visual Clichés to Avoid

## The Purple/Blue Gradient Blob

Abstract gradient shapes (purple-to-blue, teal-to-pink) floating behind hero content, with no relationship to the product or brand.

Instead: use real product imagery, a specific brand color used deliberately, or no decorative background at all.

---

## Glassmorphism by Default

Frosted-glass cards with heavy blur and transparency applied automatically, regardless of whether it serves the brand.

Instead: use glassmorphism only when it's a deliberate brand choice, not a default texture.

---

## The Circle Icon + Title + Paragraph, x3

Three (or four) identical columns: a colored circle with a centered icon, a bold short title, and a short paragraph — repeated for "features" or "benefits" with no visual variation.

Instead: vary the structure, use real screenshots/photos where possible, or a size hierarchy for differently-weighted benefits (see `01-cro-foundation.md` motivation guidance).

---

## Generic 3D Illustrations

Isometric or blob-style 3D illustration packs (people at laptops, floating UI cards, abstract shapes) used because they're fast to source, not because they communicate anything specific.

Instead: real photography of the actual product/service/team (see `13-visual-storytelling.md`), or custom illustration only when it has a specific communicative reason.

---

## Overused "Bento Grid" Layouts

Feature sections broken into an uneven grid of boxes with icons, applied automatically to any list of features regardless of whether the content actually has that kind of hierarchy.

Instead: use a bento layout only when the content genuinely has uneven importance/hierarchy that the grid communicates.

---

## Excessive Rounded Corners + Soft Shadows Everywhere

Every element — buttons, cards, images, inputs — sharing the exact same large border-radius and identical soft drop shadow, creating a flat, undifferentiated "AI SaaS" look.

Instead: use radius and elevation deliberately to create hierarchy — not every element needs the same treatment.

---

## Emoji as Icons

Using emoji (🚀 💡 ✅ 🔥) in headings or as bullet markers instead of a proper icon system.

Instead: use the icon system defined in `00-design-system.md` and `reference/core-tech-stack.md` (Lucide). Emoji read as low-effort in professional contexts, especially for high-ticket or B2B offers.

---

# Copy Clichés to Avoid

## "Unlock", "Elevate", "Revolutionize", "Supercharge"

Verb choices that sound impressive but say nothing specific about the outcome.

Instead: use the Feature → Benefit → Outcome framework (`03-copy-frameworks.md`) with a real, specific outcome.

---

## "In today's fast-paced world..."

Generic scene-setting openers that delay getting to the point.

Instead: open with the specific identification or promise (`04-hero-section.md`).

---

## "Seamless", "Cutting-edge", "Best-in-class", "World-class"

Unverifiable superlatives that every competitor also claims, carrying zero differentiating information.

Instead: replace with a specific, checkable claim or proof point.

---

## Headline That Could Belong to Any Business

A headline so generic it could be swapped onto a competitor's page without anyone noticing.

Instead: run the swap test — if this headline works equally well for a direct competitor, it's not specific enough. See `03-copy-frameworks.md`.

---

## Testimonial Quotes That Sound Like Marketing Copy

"This product changed my life! Five stars, highly recommend!" — testimonials with no specific detail, sounding written rather than spoken.

Instead: see `06-social-proof.md` — real, specific testimonials with concrete detail.

---

# Structural Clichés to Avoid

## Every Page Has the Exact Same Section Order Regardless of Context

Hero → 3 features → testimonials → pricing → FAQ → CTA, applied without considering traffic source or awareness level.

Instead: follow `02-landing-page-architecture.md` — the order should be a reasoned decision, not a template default.

---

## Logo Cloud With Fake or Irrelevant Logos

A row of client/press logos included because "pages usually have this," using logos of companies that never actually were clients, or generic tech logos with no real relationship to the business.

Instead: see `reference/core-rules.md` — never fabricate proof. Omit the logo cloud entirely if there's nothing real to show.

---

## Countdown Timers and Fake Urgency by Default

A countdown timer or "X people viewing this" indicator added automatically, disconnected from any real scarcity.

Instead: see `14-trust-building.md` and `20-ecommerce-pages.md` — urgency only when genuine.

---

# The Sameness Problem Across Projects

A specific risk for a system like ConversionOS: if every project defaults to the same fonts, same spacing scale, same component styling from `00-design-system.md`, every client's page starts looking like it belongs to the same company — undermining the "premium, intentional" goal for each individual brand.

## Rule

The Design System defines *constraints and quality bars* (spacing rhythm, contrast minimums, component consistency *within* a project), not a single fixed visual identity to reuse *across* projects.

For every new project, deliberately choose, and document, at least:

- A primary typeface pairing appropriate to the brand (not always the same default)
- A color palette derived from the client's actual brand or a considered new direction — not a recycled palette from the last project
- A distinct visual texture/mood appropriate to the industry (see `27-gold-standard-rubric.md` for calibration)

---

# Implementation Rules

The AI must:

1. Check every visual and copy decision against this list before finalizing a section.
2. When a pattern from this list is the fastest/default option, deliberately choose a more specific alternative instead.
3. Run the "swap test" on the headline: could this apply to a direct competitor unchanged? If yes, rewrite it.
4. Choose a distinct typographic and color direction per project rather than reusing the exact same defaults every time.
5. Flag to the user when a request would require fabricating proof (fake logos, fake testimonials, fake urgency) rather than silently including it.

---

# Quality Checklist

□ No unexplained gradient blobs or generic 3D illustrations

□ No emoji used as a substitute for the icon system

□ Headline fails the "swap test" (i.e., is specific enough that it fails to generalize)

□ No unverifiable superlatives ("best-in-class", "seamless", "revolutionize")

□ No fabricated logos, testimonials, or urgency

□ Visual identity is deliberately chosen for this project, not recycled by default

---

# AI Instructions

Before finalizing any section, ask: "Is this the specific right choice for this business, or is this just the fastest generic answer?" If it's the latter, push further.

---

# References

Synthesizes observed patterns in generic AI-generated marketing sites, cross-referenced against `00-design-system.md`, `03-copy-frameworks.md`, and `14-trust-building.md`.
