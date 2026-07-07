# ConversionOS - Component Architecture Skill

Version: 1.0

---

# Purpose

This skill defines how to structure the code of a landing page for maintainability, reusability, and scalability across projects.

Well-architected code allows faster iteration, easier A/B testing, and consistent design system application.

---

# Scope

Applies to the technical implementation of landing pages: component structure, file organization, and reusability patterns.

---

# Dependencies

This skill depends on:

- 00-design-system.md
- reference/core-rules.md

---

# Core Principle

Build with reusable, composable components rather than one-off, page-specific markup — even for a single landing page, since sections (hero, CTA, testimonials, FAQ) recur across nearly every project.

---

# Component Organization

## Layout Components

Structural wrappers: Container, Section, Grid — implementing the spacing and layout rules from 00-design-system.md.

---

## UI Primitives

Base building blocks: Button, Input, Badge, Card, Accordion — styled once according to the design system and reused everywhere.

---

## Section Components

Composed, page-specific sections built from primitives: Hero, ProblemSection, SocialProof, PricingTable, FAQSection, FinalCTA.

Each section component should accept content as props/data rather than hardcoding copy, enabling reuse across projects with different content.

---

# Reusability Rules

Before creating a new component, check:

- Does an equivalent primitive or section component already exist in the project or template library?
- Will this pattern likely recur in future projects (per 00-design-system.md component consistency guidance)?

If yes, build it as a generic, reusable component rather than a one-off.

---

# Content and Structure Separation

Where practical, separate content (copy, images, data) from structural components, so:

- The same Hero component can render different copy across projects
- Copy changes (from 03) don't require touching component logic
- A/B testing (23) content variants becomes simpler

---

# File Organization

Recommended baseline structure:

```
/components
  /ui          → primitives (Button, Input, Card, Accordion)
  /layout      → Container, Section, Grid
  /sections    → Hero, SocialProof, FAQ, FinalCTA, etc.
/lib           → utilities, tracking helpers
/content       → page copy/data, separated from components when practical
```

Adjust to the specific framework/stack in use while preserving this separation of concerns.

---

# Consistency with Design System

Every primitive component must implement the rules defined in 00-design-system.md (spacing, typography, color, button states) in one place, so design changes propagate consistently rather than requiring updates across many files.

---

# Performance Considerations

Component architecture should support the performance requirements in 10-performance.md:

- Avoid unnecessary re-renders in interactive components
- Lazy-load below-the-fold section components when the framework supports it
- Keep component bundles lean; avoid heavy dependencies for simple UI needs

---

# Common Mistakes

Avoid:

- Duplicating the same button/card styling inline across multiple sections instead of a shared component
- Hardcoding copy directly inside structural components, making reuse and A/B testing harder
- Overly generic "do everything" components that become difficult to maintain
- Ignoring the existing design system primitives and creating one-off styles per page

---

# Implementation Rules

The AI must:

1. Build UI primitives once, aligned with 00-design-system.md, and reuse them.
2. Compose section components from primitives rather than duplicating markup.
3. Separate content from structure where practical.
4. Organize files following a clear, consistent structure.
5. Consider performance implications of component structure (lazy loading, bundle size).

---

# Quality Checklist

□ UI primitives reused consistently, not duplicated

□ Section components composed from primitives

□ Content separated from structure where practical

□ Clear, consistent file organization

□ No unnecessary re-renders or bundle bloat

---

# AI Instructions

Before writing a new component, check whether an existing primitive or section pattern already covers the need. Prefer extending or reusing over duplicating.

---

# References

Inspired by:

- Component-driven development principles
- Design system engineering practices
