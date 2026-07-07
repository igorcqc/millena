# ConversionOS - Motion Design Skill

Version: 1.0

---

# Purpose

This skill defines how to use animation and motion purposefully on landing pages: to guide attention, provide feedback, and improve perceived quality, without harming performance or accessibility.

---

# Scope

Applies to transitions, micro-interactions, scroll effects, and loading states.

---

# Dependencies

This skill depends on:

- 00-design-system.md
- 10-performance.md
- 11-accessibility.md

---

# Core Principle

Motion must serve a purpose: guiding attention, confirming an action, or smoothing a transition.

Motion added purely for visual flair, without function, adds risk (performance, accessibility, distraction) without benefit.

---

# Purposeful Motion Categories

## Feedback Motion

Confirms that an action happened: button press states, form submission confirmation, hover states.

Should be near-instant (100-200ms).

---

## Guidance Motion

Directs attention to what matters next: subtle entrance animation on scroll for key sections, a pulsing CTA in specific, justified cases.

Should be subtle and used sparingly — overuse trains visitors to ignore it.

---

## Transition Motion

Smooths state changes: accordion expand/collapse, modal open/close, tab switching.

Should be fast enough to feel responsive (200-400ms) without feeling abrupt.

---

# Timing and Easing

- Keep most UI animations between 150-400ms
- Use ease-out for elements entering the screen, ease-in for elements leaving
- Avoid linear easing for UI motion — it feels mechanical

---

# Scroll Animations

- Use sparingly; not every section needs an entrance animation
- Avoid animations that delay the visitor from reading content immediately (e.g., long fade-ins on critical copy)
- Never animate the hero content in a way that delays CTA visibility

---

# What Not to Animate

- Critical information the visitor needs immediately (hero headline, CTA)
- Elements in a way that causes layout shift (see 10-performance.md)
- Large background elements with heavy, continuous animation (performance cost)

---

# Accessibility Requirements

- Respect `prefers-reduced-motion`: disable or significantly reduce non-essential animation for users with this preference
- Avoid motion patterns known to cause discomfort (parallax at extreme intensity, rapid flashing, large-scale continuous movement)

---

# Performance Requirements

- Animate using GPU-accelerated properties (transform, opacity) rather than properties that trigger layout recalculation (width, top, left)
- Avoid animation libraries when CSS transitions/animations achieve the same result with less overhead

---

# Common Mistakes

Avoid:

- Animating everything on scroll "to make the page feel alive"
- Slow animations that make the page feel sluggish
- Motion that blocks the visitor from acting quickly
- Ignoring reduced-motion preferences
- Heavy animation libraries for simple effects

---

# Implementation Rules

The AI must:

1. Justify each animation's purpose (feedback, guidance, or transition).
2. Keep durations within the 150-400ms range for UI motion.
3. Use GPU-accelerated properties for animation.
4. Respect reduced-motion preferences.
5. Never delay critical content or CTA visibility with animation.

---

# Quality Checklist

□ Every animation has a clear purpose

□ Durations feel responsive, not sluggish

□ GPU-accelerated properties used

□ Reduced-motion preference respected

□ No delay to critical content visibility

---

# AI Instructions

Before adding any animation, ask: "What does this help the user understand or do?"

If there's no clear answer, do not add it.

---

# References

Inspired by:

- Material Design motion guidelines
- Web animation performance best practices
