# ConversionOS - Meta Ads Optimization Skill

Version: 1.0

---

# Purpose

This skill defines how to design landing pages specifically for traffic coming from Meta Ads (Facebook and Instagram).

Meta traffic behaves differently from search traffic and requires a distinct page strategy.

---

# Scope

Applies to landing pages where the primary traffic source is Meta Ads campaigns.

---

# Dependencies

This skill depends on:

- 01-cro-foundation.md
- 02-landing-page-architecture.md
- 03-copy-frameworks.md

---

# Meta Traffic Characteristics

Visitors from Meta Ads are typically:

- Interrupted, not actively searching (scroll-stopping, not intent-driven)
- Often unaware or only problem-aware (see 01 awareness levels)
- Making a fast, low-context judgment about whether to continue
- Primarily on mobile

---

# Page Strategy for Meta Traffic

## Message Match

The landing page must continue the exact conversation the ad started — same promise, same visual language, same audience framing. Any mismatch causes immediate bounce.

---

## Strong Identification

The hero must make the visitor feel "this is talking to me" within seconds, since they weren't actively looking for this.

---

## Problem Before Solution

Because awareness is often low, spend more time establishing the problem and its cost before presenting the solution (see 02 architecture guidance for problem-aware/unaware traffic).

---

## Emotional Connection

Meta is a discovery/social environment; emotional resonance (identification, aspiration, relief) often outperforms purely rational arguments here, especially in the hero and problem sections.

---

## Front-Loaded Trust

Since visitors don't know the brand, place a trust signal (numbers, logos, a short testimonial) earlier than you might for search traffic.

---

# Creative-to-Page Consistency

- Match the landing page's primary visual to the ad creative's visual language (colors, imagery style, tone)
- If the ad promises a specific outcome, the hero headline should restate that promise, not a generic version of it
- If the ad targets a specific audience segment, the page copy should speak directly to that segment

---

# Mobile Priority

Meta traffic is overwhelmingly mobile. Apply 09-responsive.md with extra rigor:

- Hero and CTA must work perfectly on mobile without any compromise
- Forms should be short (see 07-forms.md) given lower initial commitment

---

# Funnel Considerations

- Cold traffic campaigns: prioritize identification, problem, and trust; keep the ask small
- Retargeting campaigns: can skip deep problem education and go straight to offer/objection handling, since the visitor already has context

---

# Tracking Requirements

Ensure Meta Pixel and Conversions API events are implemented correctly (see 22-analytics-tracking.md), including:

- PageView
- Lead / Purchase / relevant conversion event
- Proper deduplication between Pixel and server-side events

---

# Common Mistakes

Avoid:

- A landing page that doesn't match the ad's promise or visual style
- Assuming high intent when traffic is actually cold and interrupted
- Long, dense pages with no emotional hook early on
- Ignoring mobile performance and UX
- Missing or misconfigured conversion tracking, wasting optimization data

---

# Implementation Rules

The AI must:

1. Confirm message match between ad and landing page before building.
2. Prioritize emotional identification and problem framing in the early sections for cold traffic.
3. Front-load a trust signal.
4. Build and test mobile experience as the primary target.
5. Verify Meta Pixel/CAPI tracking implementation.

---

# Quality Checklist

□ Message matches the ad creative and copy

□ Strong identification in the hero

□ Problem established before solution (for cold traffic)

□ Trust signal appears early

□ Mobile experience is flawless

□ Meta Pixel/CAPI correctly implemented

---

# AI Instructions

Always ask what the ad creative and copy say before building the landing page — the page is a continuation of that conversation, not a new one.

---

# References

Inspired by:

- Direct response advertising principles
- Meta Ads platform best practices
- Awareness-level marketing frameworks
