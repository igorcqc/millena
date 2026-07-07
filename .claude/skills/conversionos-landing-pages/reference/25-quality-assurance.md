# ConversionOS - Quality Assurance Skill

Version: 1.0

---

# Purpose

This skill defines the final review process every landing page must pass before being considered complete and ready to publish.

This is the last checkpoint combining every other skill into a single go/no-go decision.

---

# Scope

Applies to any landing page before launch or before being marked "done."

---

# Dependencies

This skill depends on all other Skills in this module. This skill is the final synthesis step, not an isolated concern.

---

# Core Principle

A landing page is not complete when it looks finished. It is complete when it has been verified against strategy, content, design, technical, and conversion requirements.

"Looks done" and "is done" are different states.

---

# Review Sequence

Run the review in this order — each stage assumes the previous stage passed.

## 1. Strategy Review

Reference: 01-cro-foundation.md

□ Clear, single conversion goal defined

□ Target audience and traffic source identified

□ Awareness level considered in structure and copy

□ Message matches traffic source (ad/keyword)

---

## 2. Structure Review

Reference: 02-landing-page-architecture.md

□ Section order is logical and justified

□ No redundant or purposeless sections

□ CTA repeated at strategic points

---

## 3. Copy Review

Reference: 03-copy-frameworks.md, 04, 05, 08

□ Headline leads with outcome/identification, not generic claims

□ Benefits use Feature → Benefit → Outcome

□ CTA copy is specific and value-stating

□ Top objections addressed (FAQ and/or dedicated section)

□ No typos or grammar errors

---

## 4. Trust and Proof Review

Reference: 06-social-proof.md, 14-trust-building.md

□ Social proof is real, specific, and distributed across the page

□ Trust signals match the actual objections of this audience

□ No fabricated or unverifiable claims

---

## 5. Design Review

Reference: 00-design-system.md, 13-visual-storytelling.md

□ Consistent spacing, typography, and color usage

□ Clear visual hierarchy

□ Imagery is specific and relevant, not generic stock

□ Consistent component usage (buttons, cards, icons)

---

## 6. Responsive Review

Reference: 09-responsive.md

□ Tested on mobile, tablet, and desktop

□ No horizontal scroll

□ CTA visible without excessive scrolling on mobile

□ Touch targets appropriately sized

---

## 7. Performance Review

Reference: 10-performance.md

□ Core Web Vitals within target thresholds

□ Images optimized and appropriately sized

□ Non-critical scripts deferred

---

## 8. Accessibility Review

Reference: 11-accessibility.md

□ Contrast ratios meet minimum thresholds

□ Full keyboard operability with visible focus states

□ Semantic HTML and proper labeling

---

## 9. Motion Review

Reference: 12-motion-design.md

□ Animations are purposeful, not decorative

□ Reduced-motion preference respected

---

## 10. Forms Review

Reference: 07-forms.md

□ Minimum necessary fields

□ Inline validation and clear error messages

□ Confirmation experience defined

---

## 11. Tracking Review

Reference: 22-analytics-tracking.md

□ All conversion events implemented and tested

□ No duplicate or missing event fires

□ Privacy disclosures present where required

---

## 12. Niche-Specific Review

Reference: 15 through 21 as applicable to the project type

□ Traffic-source-specific requirements met (Meta/Google)

□ Business-type-specific requirements met (local/high-ticket/SaaS/ecommerce/SEO)

---

# Launch Blockers vs. Improvements

Distinguish between:

## Launch Blockers

Must be fixed before publishing: broken tracking, broken forms, major accessibility failures, incorrect claims, broken CTAs, obvious mobile breakage.

---

## Post-Launch Improvements

Can be addressed via iteration/testing after launch: minor copy refinements, secondary A/B test ideas, non-critical visual polish.

Do not let non-blocking polish delay a launch indefinitely; do not let launch pressure skip actual blockers.

---

# Common Mistakes

Avoid:

- Treating "looks good in a screenshot" as equivalent to "passes QA"
- Skipping mobile testing because desktop looked fine
- Launching without testing tracking events
- Confusing minor polish items with actual launch blockers
- Reviewing design and copy but skipping performance/accessibility/tracking

---

# Implementation Rules

The AI must:

1. Run through the full review sequence before declaring a page complete.
2. Explicitly separate launch blockers from post-launch improvement ideas.
3. Never mark tracking or forms as done without actual testing.
4. Flag any unresolved blocker clearly rather than silently ignoring it.

---

# Quality Checklist

Use the full Review Sequence above as the master checklist. A page is launch-ready only when every applicable section has been explicitly verified, not assumed.

---

# AI Instructions

Before telling the user a page is "ready to launch," explicitly state which review stages were verified and flag anything that could not be verified (e.g., real tracking test, real device testing) so the user knows what still needs manual confirmation.

---

# References

Synthesizes all other Skills in this module into a single pre-launch process.
