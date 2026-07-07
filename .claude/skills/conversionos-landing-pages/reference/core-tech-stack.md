# ConversionOS - Tech Stack

Version: 1.0

---

# Purpose

This document defines the default technical stack for every project built inside ConversionOS.

A fixed stack is what makes the Component Architecture skill (`24-component-architecture.md`) and the Starter Components reference (`28-starter-components.md`) actually work — reusable components only stay reusable if every project speaks the same technical language.

Deviate from this stack only when the user explicitly requests a different one, or when a project has a hard constraint (existing codebase, client requirement, platform limitation).

---

# Default Stack

## Framework

**Next.js** (App Router), React, TypeScript.

Why: first-class Vercel deployment (matches the Claude Code → GitHub → Vercel workflow), strong performance defaults (image optimization, code splitting), and the most common target for AI-assisted development today.

---

## Styling

**Tailwind CSS**.

Why: enforces the spacing/sizing constraints from `00-design-system.md` directly in markup, fast to iterate, no separate CSS files to keep in sync, easy for an AI agent to apply consistently.

---

## UI Primitives

**shadcn/ui** (Radix UI primitives + Tailwind), customized to the project's design tokens.

Why: accessible by default (matches `11-accessibility.md` — keyboard navigation, focus management, ARIA handled by Radix), unstyled-by-default so it doesn't fight the design system, and code lives in the project (not a black-box dependency), which supports the reusable component philosophy in `26-component-architecture.md`.

---

## Icons

**Lucide** (lucide-react).

Why: one consistent icon family, matches the "never mix icon systems" rule in `00-design-system.md`.

---

## Motion

**Framer Motion** (motion/react) for interactive/gesture-driven animation; plain CSS transitions for simple hover/focus states.

Why: covers the purposeful-motion patterns in `12-motion-design.md` without overusing a heavy library for effects CSS alone can handle.

---

## Forms

**React Hook Form** + **Zod** for validation.

Why: supports the inline validation and clear error messaging required by `07-forms.md`, minimal re-renders (performance), type-safe validation schemas.

---

## Fonts

Loaded via `next/font` (self-hosted, zero layout shift, no external request) using the families defined in `00-design-system.md` (Inter, Geist, or Manrope, or a brand-specific alternative chosen deliberately per project — see `27-gold-standard-rubric.md` on avoiding sameness across projects).

---

## Analytics & Tracking

- **Google Tag Manager** as the central tag layer (per `22-analytics-tracking.md`)
- **Meta Pixel + Conversions API** via server-side implementation (Next.js Route Handlers) for resilience
- **Vercel Analytics** or **GA4** for baseline traffic/behavior data

---

## Deployment Pipeline

```
Local development (Claude Code)
  ↓
GitHub (version control, source of truth)
  ↓
Vercel (build + deploy, preview URLs per branch/PR)
```

- Every project is a GitHub repository from the start, even for solo work — this gives version history and safe rollback.
- Use Vercel's preview deployments to review a page before promoting to production.
- Environment variables (API keys, pixel IDs) go in Vercel project settings, never committed to the repo.

---

## Package Manager

**pnpm** (or the project's existing choice if working in an established repo). Consistency matters more than the specific choice — do not mix package managers within a single project.

---

# When to Deviate

Acceptable reasons to use a different stack:

- The user explicitly asks for a different framework (e.g., plain HTML/CSS for a very simple static page, WordPress for a client who will self-manage content, Shopify for ecommerce with existing store infrastructure)
- An existing project already has an established stack — follow the existing conventions rather than introducing a second stack into the same codebase
- A specific integration requirement makes the default stack impractical

When deviating, still apply every rule from the other Skills (accessibility, performance, design system, component architecture) — the stack changes, the standards don't.

---

# Common Mistakes

Avoid:

- Introducing a new UI library mid-project because it "looked easier" for one component
- Mixing styling approaches (Tailwind in some files, plain CSS modules in others) without reason
- Skipping TypeScript for "a simple page" — type safety catches integration errors before they reach production
- Choosing a stack based on unfamiliarity avoidance rather than what actually fits the project

---

# Implementation Rules

The AI must:

1. Default to this stack unless the user specifies otherwise or an existing codebase dictates different conventions.
2. State clearly when and why deviating from the default.
3. Set up the GitHub → Vercel pipeline expectation from the start of a new project (repo structure, environment variable handling).
4. Keep the stack consistent within a single project — no mixing approaches for the same concern.

---

# References

Reflects the Claude Code → GitHub → Vercel workflow this system is designed around.
