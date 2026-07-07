# ConversionOS - A/B Testing Skill

Version: 1.0

---

# Purpose

This skill defines how to identify testable hypotheses and structure A/B tests to improve landing page conversion rate over time.

A landing page is never "finished" — it is a starting hypothesis to be validated and improved with real data.

---

# Scope

Applies to post-launch optimization of existing landing pages with sufficient traffic to generate meaningful test results.

---

# Dependencies

This skill depends on:

- 01-cro-foundation.md
- 22-analytics-tracking.md

---

# Core Principle

Test based on hypotheses grounded in the conversion equation (Motivation, Clarity, Trust, Friction — see 01), not random preference or aesthetic taste.

Every test should have a clearly stated hypothesis: "We believe changing X will improve Y because Z."

---

# When to Test

A/B testing requires sufficient traffic and conversions to reach statistical significance within a reasonable timeframe.

Prioritize testing when:

- The page already has meaningful, consistent traffic volume
- A clear, well-reasoned hypothesis exists
- The current conversion rate leaves obvious room for improvement

Avoid testing on very low-traffic pages — inconclusive tests waste time and can lead to false conclusions.

---

# High-Impact Elements to Test First

In order of typical impact:

## 1. Headline / Value Proposition

Often the highest-leverage element — changes how visitors interpret the entire offer.

---

## 2. Hero Structure and Visual

Affects immediate first impression and continuation rate.

---

## 3. CTA Copy and Placement

Directly affects the conversion action itself.

---

## 4. Offer Framing

How the offer, pricing, or guarantee is presented.

---

## 5. Social Proof Type and Placement

Which proof elements are shown and where.

---

## 6. Form Length and Fields

Especially relevant for lead generation pages (see 07-forms.md).

Lower-impact elements (minor color changes, small copy tweaks) should generally be tested only after high-impact elements have been optimized.

---

# Test Structure

- Change one primary variable per test when possible, to isolate what caused the result
- Multivariate testing is acceptable only with sufficient traffic to support it statistically
- Define the success metric before launching the test (conversion rate on the specific tracked event from 22)
- Define a minimum sample size or duration before evaluating results, to avoid stopping tests too early on noisy data

---

# Avoiding False Conclusions

- Do not call a winner based on early, small-sample results
- Account for external factors (seasonality, campaign changes, traffic source shifts) that could bias results independent of the test itself
- Re-test surprising or counter-intuitive results before fully committing to them

---

# Documentation

For every test, record:

- Hypothesis
- What was changed (with before/after reference)
- Metric and result
- Decision made and why

This builds an institutional knowledge base of what works for a specific audience/business over time, and prevents re-testing the same ideas repeatedly.

---

# Common Mistakes

Avoid:

- Testing without a clear hypothesis
- Testing too many variables simultaneously without enough traffic
- Ending tests too early based on incomplete data
- Ignoring external factors that could explain results
- Never documenting results, leading to repeated or contradictory decisions over time

---

# Implementation Rules

The AI must:

1. Propose test hypotheses grounded in the conversion equation, not arbitrary preference.
2. Prioritize high-impact elements before minor ones.
3. Recommend appropriate test structure given available traffic.
4. Define success metrics before the test begins.
5. Document hypothesis, change, result, and decision for every test.

---

# Quality Checklist

□ Hypothesis clearly stated and reasoned

□ High-impact element prioritized

□ Success metric defined before testing

□ Sufficient traffic/duration considered

□ Results documented with decision rationale

---

# AI Instructions

When a user asks what to test next, always ask about current traffic volume and conversion rate first — recommending a test without this context risks proposing something statistically unfeasible.

---

# References

Inspired by:

- Conversion rate optimization testing methodology
- Statistical significance principles in experimentation
