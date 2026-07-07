# ConversionOS - Responsive Design Skill

Version: 1.0

---

# Purpose

This skill defines how to build landing pages that work correctly and convert well across mobile, tablet, and desktop.

Most traffic for paid campaigns arrives on mobile. Responsive design is not an adaptation of desktop — it is the primary design target.

---

# Scope

Applies to layout, typography, spacing, images, and interaction across all breakpoints.

---

# Dependencies

This skill depends on:

- 00-design-system.md
- 10-performance.md

---

# Core Principle

Design mobile-first.

Start with the smallest viewport and progressively enhance for larger screens, rather than designing desktop and shrinking it down.

---

# Breakpoint Strategy

Recommended baseline breakpoints:

Mobile: up to 640px

Tablet: 641px - 1024px

Desktop: 1025px and above

Adjust based on the actual content, not arbitrary device widths — add a breakpoint only when the layout visibly breaks.

---

# Mobile-First Layout Rules

- Single column by default; introduce multi-column layouts only at larger breakpoints
- Stack hero text above visuals on mobile (text first, unless the visual is the primary hook)
- Keep the primary CTA visible without excessive scrolling
- Avoid hover-dependent interactions since mobile has no hover state

---

# Typography Across Breakpoints

- Use fluid or breakpoint-based type scales rather than a single fixed size
- Maintain a minimum body text size of 16px on mobile to avoid forced zoom
- Reduce heading sizes proportionally on mobile to preserve hierarchy without overwhelming small screens

---

# Touch Targets

- Minimum comfortable tap target: ~44x44px
- Adequate spacing between adjacent tappable elements to avoid mis-taps
- Avoid small icon-only buttons without sufficient padding

---

# Images and Media

- Serve appropriately sized images per breakpoint (responsive images / srcset)
- Avoid large desktop-only background images loading on mobile
- Test that critical images do not cause layout shift (see 10-performance.md)

---

# Navigation Patterns

- Simplify navigation on mobile; avoid deep menus on a single-goal landing page
- If a sticky CTA is used, ensure it doesn't obscure content or overlap the keyboard when a form is open

---

# Testing Requirements

Every landing page must be tested on:

- A real or accurately emulated mobile viewport (not just a resized browser)
- Tablet viewport
- Desktop viewport
- Both portrait and landscape mobile orientations for key sections

Check for:

- Text truncation or overflow
- Overlapping elements
- Broken alignment
- Horizontal scroll (should never happen unintentionally)

---

# Common Mistakes

Avoid:

- Designing desktop-first and adapting down
- Fixed pixel widths that break on smaller screens
- Text too small to read without zooming
- CTAs pushed below the fold on mobile
- Interactive elements too close together for accurate tapping

---

# Implementation Rules

The AI must:

1. Build layouts mobile-first, then enhance for larger breakpoints.
2. Verify CTA visibility and tap target sizing on mobile.
3. Use responsive images matched to viewport size.
4. Test all breakpoints before considering a page complete.
5. Eliminate any unintentional horizontal scroll.

---

# Quality Checklist

□ Mobile-first layout implemented

□ No horizontal scroll

□ CTA visible without excessive scrolling on mobile

□ Touch targets sized appropriately

□ Typography readable without zoom

□ Tested on mobile, tablet, and desktop

---

# AI Instructions

Always validate the page on a mobile viewport before considering it complete, since most paid traffic will land there first.

---

# References

Inspired by:

- Mobile-first design principles
- Responsive web design standards
- Web Content Accessibility Guidelines (touch target sizing)
