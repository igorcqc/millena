# ConversionOS - Google Ads Optimization Skill

Version: 1.0

---

# Purpose

This skill defines how to design landing pages specifically for traffic coming from Google Ads (Search, and to a lesser extent Performance Max/Display).

Search traffic carries active intent and requires a different page strategy than social traffic.

---

# Scope

Applies to landing pages where the primary traffic source is Google Ads, particularly Search campaigns.

---

# Dependencies

This skill depends on:

- 01-cro-foundation.md
- 02-landing-page-architecture.md
- 03-copy-frameworks.md

---

# Google Search Traffic Characteristics

Visitors from Search are typically:

- Actively looking for a solution (higher intent than social)
- Already problem-aware or solution-aware (see 01)
- Comparing options, sometimes across multiple open tabs
- Expecting immediate relevance to their exact query

---

# Page Strategy for Search Traffic

## Query-to-Page Relevance

The landing page must immediately confirm it matches what the visitor searched for. If they searched "planned furniture for small apartments," the hero should speak to that specific need, not a generic furniture pitch.

---

## Skip Deep Problem Education

Since intent is already established, don't over-explain the problem — visitors already know it. Move faster into solution, differentiation, and proof.

---

## Differentiation Over Identification

Search visitors are often comparing multiple providers. The page should clearly answer "why this one, not a competitor" earlier than a Meta Ads page would.

---

## Fast Path to Conversion

Reduce the number of steps and sections between arrival and the conversion action. High-intent visitors reward directness.

---

# Keyword and Ad Alignment

- The landing page headline should reflect the keyword theme and ad copy that brought the visitor there
- If running multiple ad groups with different keyword themes, consider dedicated landing page variants matched to each theme rather than one generic page for all
- Match the specific service/product named in the ad exactly on the page (don't make visitors hunt for it)

---

# Local Intent Considerations

For location-based searches (see 17-local-business-pages.md), ensure:

- Location is confirmed immediately
- Local trust signals (address, service area, local reviews) are prominent

---

# Quality Score Considerations

Google Ads Quality Score is influenced by landing page experience. Ensure:

- Fast load time (see 10-performance.md)
- Clear relevance to the ad and keyword
- Mobile-friendliness (see 09-responsive.md)
- Transparent, easy-to-find information (avoid deceptive or hidden practices)

---

# Tracking Requirements

Ensure Google Ads conversion tracking and Google Analytics/Tag Manager are correctly implemented (see 22-analytics-tracking.md), including:

- Conversion action tied to the actual business goal (lead, call, purchase)
- Enhanced conversions where applicable
- Proper attribution to campaign/ad group/keyword when needed for optimization

---

# Common Mistakes

Avoid:

- Sending all keyword variations to one generic, unrelated landing page
- Over-explaining the problem to an already-aware visitor
- Slow-loading pages that hurt Quality Score and abandon high-intent visitors
- Missing or incorrect conversion tracking, wasting bidding optimization data
- Burying the specific service/product the ad promised

---

# Implementation Rules

The AI must:

1. Confirm the landing page headline matches the keyword/ad theme.
2. Reduce problem-education content relative to Meta Ads pages; prioritize differentiation and proof.
3. Shorten the path to conversion.
4. Verify page speed and mobile experience given Quality Score impact.
5. Verify Google Ads conversion tracking implementation.

---

# Quality Checklist

□ Headline matches keyword/ad theme

□ Differentiation from competitors is clear

□ Fast path to conversion, minimal unnecessary sections

□ Fast load time

□ Google Ads conversion tracking correctly implemented

---

# AI Instructions

Always ask what specific keywords and ad copy are driving traffic before building the page — the headline and offer framing should mirror that exact search intent.

---

# References

Inspired by:

- Google Ads Quality Score guidelines
- Search intent and query matching principles
- Landing page relevance best practices
