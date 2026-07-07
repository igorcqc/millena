# ConversionOS - Gold Standard Rubric Skill

Version: 1.0

---

# Purpose

This skill defines what "gold standard" actually means inside ConversionOS, and gives the AI a concrete self-evaluation process to reach it — not just a pass/fail checklist, but a scored critique-and-refine loop.

`25-quality-assurance.md` catches launch blockers (broken, missing, wrong). This skill pushes for excellence (competent vs. exceptional) — a page can pass every QA checkbox and still be mediocre.

---

# Scope

Applies after a page's first complete draft exists, before presenting it as finished to the user.

---

# Dependencies

This skill depends on:

- reference/core-principles.md
- 00-design-system.md
- 26-avoiding-ai-cliches.md
- 25-quality-assurance.md

---

# Core Principle

The first version is a draft, not a deliverable. A senior designer critiques their own work before showing it to a client. This skill makes that critique step explicit and mandatory rather than optional.

---

# What "Gold Standard" Means Here

A gold-standard landing page is one where a visitor never notices the craftsmanship — because everything works exactly as they expect, feels intentional, and removes every reason to hesitate. Excellence here is invisible; mediocrity is what stands out (a slightly-off spacing, a vague headline, a stock photo that doesn't fit).

Gold standard is measured across five dimensions. Each is scored 1-5 during self-review.

---

# The Five Dimensions

## 1. Strategic Sharpness (weight: high)

Does the page make an argument, or just present information?

- 5: Every section builds on the last; a stranger could explain the offer and who it's for after reading only the hero.
- 3: The strategy is present but generic; sections feel interchangeable with a similar business's page.
- 1: No clear single goal; competing messages; unclear who this is for.

Reference: `01-cro-foundation.md`, `02-landing-page-architecture.md`.

---

## 2. Copy Precision (weight: high)

Does every sentence earn its place, and is it specific to this business?

- 5: Headline fails the "swap test" from `26-avoiding-ai-cliches.md` (too specific to reuse elsewhere). No filler sentences. Every claim is concrete.
- 3: Copy is clear but generic; could describe several similar businesses.
- 1: Vague, jargon-heavy, or copy-pasted marketing language with no specificity.

Reference: `03-copy-frameworks.md`, `26-avoiding-ai-cliches.md`.

---

## 3. Visual Craft (weight: high)

Does the design feel deliberately made for this brand, or does it feel like a template?

- 5: Distinct typographic/color direction chosen for this project (not recycled defaults); consistent spacing rhythm; imagery specific and relevant; nothing decorative without purpose.
- 3: Clean and consistent, but visually interchangeable with other AI-built pages; default fonts/colors used without a considered reason.
- 1: Inconsistent spacing/hierarchy, generic stock imagery, visible clichés from `26-avoiding-ai-cliches.md`.

Reference: `00-design-system.md`, `13-visual-storytelling.md`, `26-avoiding-ai-cliches.md`.

---

## 4. Frictionlessness (weight: medium)

How much effort does it take the visitor to go from arrival to conversion?

- 5: The next action is always obvious; forms ask only what's essential; objections are resolved before they're needed; nothing requires re-reading.
- 3: Functional but requires some effort — a slightly long form, an objection left unaddressed, a CTA that's easy to miss.
- 1: Confusing navigation, competing CTAs, excessive form fields, unresolved objections.

Reference: `05-cta.md`, `07-forms.md`, `08-faq.md`, `14-trust-building.md`.

---

## 5. Technical Polish (weight: medium)

Does the implementation match the design intent, and does it perform?

- 5: Fast load, no layout shift, flawless on mobile, fully accessible, tracking verified.
- 3: Works correctly but has room to optimize (slower load, minor mobile rough edges).
- 1: Broken elements, poor mobile experience, missing accessibility basics, untested tracking.

Reference: `09-responsive.md`, `10-performance.md`, `11-accessibility.md`, `22-analytics-tracking.md`.

---

# Scoring and Threshold

Score each dimension 1-5. A page is gold standard only when:

- No dimension scores below 4
- At least three dimensions score 5

If the page doesn't meet this bar, identify the lowest-scoring dimension and revise specifically that dimension before moving to the next. Do not do a generic "polish pass" — target the actual weak point.

---

# Calibration: What "5" Looks Like in Practice

When evaluating Visual Craft and Strategic Sharpness in particular, calibrate against products known for restrained, high-craft, conversion-focused design — not as a style to copy, but as a bar for what "nothing is arbitrary" looks like in practice: every spacing decision, every word choice, and every visual element present because it earns its place. Products broadly recognized for this level of craft include companies like Stripe, Linear, and Apple's marketing pages — studied here for their standard of intentionality, not for their specific visual style, which should never be copied wholesale onto an unrelated brand.

The goal is not to imitate these products' aesthetics. The goal is to match their *level of care* applied to a completely different, brand-appropriate visual direction.

---

# The Critique-and-Refine Loop

1. Build the first complete draft of the page.
2. Score all five dimensions honestly, citing specific evidence for each score (not just a number).
3. Identify the lowest-scoring dimension(s).
4. Revise specifically to address that weakness — not a broad, unfocused second pass.
5. Re-score only the revised dimension(s).
6. Repeat until the threshold is met, or until two revision cycles have passed — if still short after two cycles, present the page along with an honest note on what remains weak and why (e.g., "Visual Craft is capped at 4 because we don't have real product photography yet").

---

# Common Mistakes

Avoid:

- Scoring every dimension a 5 without specific justification (this defeats the purpose of the rubric)
- Treating this as a formality after the page is already considered "done"
- Doing a broad, unfocused revision pass instead of targeting the specific weak dimension
- Chasing a visual style copied from a benchmark brand instead of the underlying standard of intentionality

---

# Implementation Rules

The AI must:

1. Run this rubric after the first complete draft, before presenting the page as finished.
2. Score each dimension with specific evidence, not a bare number.
3. Revise the lowest-scoring dimension(s) specifically, then re-score.
4. Disclose to the user any dimension still below threshold after two revision cycles, and why.

---

# Quality Checklist

□ All five dimensions scored with evidence

□ No dimension below 4 (or the gap is disclosed with a reason)

□ At least three dimensions at 5

□ Revisions targeted the specific weak dimension, not a generic pass

---

# AI Instructions

Treat this rubric as a mandatory step for any project where the user asked for a high-quality or "best possible" result — not just an optional nicety. When time or information is limited, apply it anyway and disclose the gaps rather than skipping it silently.

---

# References

Synthesizes all other Skills in this module into a single excellence standard, complementing the pass/fail checklist in `25-quality-assurance.md`.
