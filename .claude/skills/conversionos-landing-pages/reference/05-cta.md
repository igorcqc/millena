# ConversionOS - CTA Skill

Version: 1.0

---

# Purpose

This skill defines how to design, place, and write calls to action (CTAs) — the elements that trigger conversion.

The CTA is the point where strategy becomes a measurable action. It deserves dedicated attention beyond general button styling.

---

# Scope

Applies to all conversion actions on a page: primary CTAs, secondary CTAs, sticky CTAs, and form submit buttons.

---

# Dependencies

This skill depends on:

- 00-design-system.md
- 03-copy-frameworks.md
- 02-landing-page-architecture.md

---

# Core Principle

A CTA is a promise, not just a button.

Clicking it should lead exactly where the copy said it would, with no surprise.

---

# CTA Types

## Primary CTA

The main conversion goal of the page. There should be only one primary action type repeated throughout the page (e.g., always "Request a quote", never mixed with "Buy now" on the same page).

---

## Secondary CTA

A lower-commitment alternative for visitors not ready for the primary action (e.g., "Download the catalog" vs. "Talk to sales").

Use sparingly — too many options reduce conversion (choice paralysis).

---

## Sticky / Persistent CTA

A CTA that remains visible while scrolling (sticky header or floating button), especially valuable on mobile and long pages.

---

# CTA Placement

Place the CTA:

- In the hero
- After the value proposition / benefits section
- After social proof
- After objection handling
- At the end of the page

Repetition of the same CTA is not redundant — it meets the visitor at every point they might be ready to act.

---

# CTA Design Rules

- Highest contrast element on the page
- Comfortable click/tap target (minimum ~44px height on mobile)
- Clear visual state changes: default, hover, focus, active, disabled
- Positioned where the eye naturally lands after reading key content
- Never disguised as another UI element (must look clickable)

---

# CTA Copy Rules

See 03 for full copy guidance. Key rules specific to CTAs:

- State the action and the value, not just the action
- Avoid generic text ("Submit", "Click here")
- Use urgency or scarcity only when true — false urgency destroys trust
- Keep it short: 2-5 words is ideal

---

# Microcopy Around CTAs

Support the CTA with reassurance text nearby when friction exists:

- "No commitment required"
- "Response within 24 hours"
- "Your data is never shared"

Only include claims that are true.

---

# Post-Click Experience

The CTA promise must match what happens after the click:

- If it says "Talk on WhatsApp", it must open WhatsApp directly
- If it says "See pricing", it must not lead to a generic contact form
- If it says "Get my quote", the following step must be a quote request, not a newsletter signup

Mismatches between CTA promise and outcome destroy trust immediately.

---

# Common Mistakes

Avoid:

- Multiple primary CTAs with different goals on the same page
- CTA buttons with low contrast against the background
- CTA text that doesn't match the destination
- Relying on a single CTA placement (only at the bottom)
- Disabling the CTA without clear reason shown to the user

---

# Implementation Rules

The AI must:

1. Define one primary conversion action for the entire page.
2. Place the primary CTA at every strategic point in the architecture.
3. Write specific, value-stating CTA copy.
4. Ensure visual dominance through contrast and sizing.
5. Verify the destination matches the CTA promise exactly.

---

# Quality Checklist

□ One consistent primary action across the page

□ CTA repeated at strategic points

□ High contrast, clearly clickable

□ Specific copy, not generic

□ Destination matches the promise

□ Mobile tap target is comfortable

---

# AI Instructions

Treat every CTA as a conversion checkpoint, not a UI detail.

When in doubt about which action to prioritize, return to the page's single conversion goal defined in 01.

---

# References

Inspired by:

- Conversion rate optimization research
- Interaction design best practices
