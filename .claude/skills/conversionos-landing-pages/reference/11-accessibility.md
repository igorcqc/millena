# ConversionOS - Accessibility Skill

Version: 1.0

---

# Purpose

This skill defines the baseline accessibility standards for landing pages, ensuring they are usable by people with disabilities and compliant with recognized guidelines.

Accessibility also improves usability, SEO, and legal compliance for all users.

---

# Scope

Applies to all interactive and content elements: text, color, forms, navigation, images, and interactive components.

---

# Dependencies

This skill depends on:

- 00-design-system.md
- 07-forms.md

---

# Core Principle

If a person using a keyboard, screen reader, or with low vision cannot understand or complete the page's primary action, the page is not done.

---

# Color and Contrast

- Body text: minimum 4.5:1 contrast ratio against its background
- Large text (18px+ bold or 24px+ regular): minimum 3:1
- Never use color alone to convey meaning (e.g., error states must include an icon or text, not just red color)

---

# Typography

- Minimum readable body text size: 16px
- Sufficient line height for readability (typically 1.4-1.6 for body text)
- Avoid justified text (creates uneven spacing that hurts readability)

---

# Keyboard Accessibility

- All interactive elements (links, buttons, form fields, accordions) must be reachable and operable via keyboard alone
- Visible focus states on every focusable element
- Logical tab order matching visual reading order

---

# Screen Reader Support

- Use semantic HTML (headings, buttons, lists, landmarks) instead of generic divs for interactive or structural elements
- Provide meaningful alt text for informative images; use empty alt for purely decorative images
- Label all form fields explicitly (not placeholder-only)
- Use ARIA attributes only when semantic HTML cannot achieve the same result

---

# Heading Structure

- One H1 per page, matching the primary message
- Headings in logical, non-skipping order (H1 → H2 → H3)
- Headings used for structure, not just for visual size

---

# Forms Accessibility

See 07-forms.md for full form guidance. Accessibility-specific requirements:

- Every input has an associated, visible label
- Error messages are specific and programmatically associated with their field
- Required fields are indicated in a way perceivable by screen readers, not color alone

---

# Motion and Animation

- Respect `prefers-reduced-motion` for users who have this preference enabled
- Avoid motion that could trigger vestibular discomfort (large, fast, repeated movement)

See 12-motion-design.md for full motion guidance.

---

# Common Mistakes

Avoid:

- Low-contrast text for "aesthetic" purposes
- Icon-only buttons with no accessible label
- Form fields with placeholder text as the only label
- Non-semantic divs used as buttons or links
- Content or functionality that only works with a mouse

---

# Implementation Rules

The AI must:

1. Verify contrast ratios for all text against its background.
2. Use semantic HTML for structure and interactive elements.
3. Ensure full keyboard operability with visible focus states.
4. Label all form fields explicitly.
5. Respect reduced-motion preferences.

---

# Quality Checklist

□ Contrast ratios meet minimum thresholds

□ Keyboard navigation works for all interactive elements

□ Visible focus states present

□ Semantic HTML used throughout

□ Form fields have explicit labels

□ Reduced motion respected

---

# AI Instructions

Accessibility is not optional polish — treat it as a functional requirement equal to conversion and performance.

When a design choice conflicts with accessibility, prioritize accessibility and find an alternative visual solution.

---

# References

Inspired by:

- Web Content Accessibility Guidelines (WCAG) 2.1 AA
- Inclusive design principles
