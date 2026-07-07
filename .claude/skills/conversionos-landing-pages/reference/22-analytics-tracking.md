# ConversionOS - Analytics & Tracking Skill

Version: 1.0

---

# Purpose

This skill defines how to implement tracking and analytics on landing pages so conversion data is accurate, actionable, and usable for campaign optimization.

A page that converts but isn't tracked correctly is invisible to optimization — it might as well not convert at all from a business decision-making perspective.

---

# Scope

Applies to pixel/tag implementation, event tracking, and analytics setup on any conversion page.

---

# Dependencies

This skill depends on:

- 01-cro-foundation.md
- 05-cta.md
- 07-forms.md
- 15-meta-ads-optimization.md
- 16-google-ads-optimization.md

---

# Core Principle

Define what "conversion" means precisely before building anything. Every conversion action defined in 01 must map to a tracked event.

---

# Required Tracking Layer

## Tag Management

Use a tag management system (e.g., Google Tag Manager) as the central layer for deploying pixels and events, rather than hardcoding multiple platform scripts directly, to keep tracking maintainable and auditable.

---

## Core Events to Implement

- PageView — baseline for all platforms
- Lead / Form Submission — fires on successful form completion, not on form view
- Contact Click — WhatsApp click, phone click (see 17-local-business-pages.md)
- Purchase — for ecommerce (see 20-ecommerce-pages.md), including value and currency
- Scroll depth / engagement (optional) — useful for diagnosing where visitors drop off

---

# Platform-Specific Requirements

## Meta Pixel / Conversions API

- Implement both browser-side Pixel and server-side Conversions API (CAPI) for resilience against browser tracking restrictions
- Ensure proper event deduplication between Pixel and CAPI using event IDs
- Pass relevant parameters (value, currency, content name) on conversion events

See 15-meta-ads-optimization.md.

---

## Google Ads Conversion Tracking

- Implement conversion tracking tied to the real business goal, not just a generic "page load" conversion
- Use Enhanced Conversions where applicable for better match rates
- Ensure conversion values are passed when relevant for value-based bidding

See 16-google-ads-optimization.md.

---

## Google Analytics (GA4)

- Track key events aligned with the conversion goal
- Set up conversion/key events matching business goals, not just default GA4 events
- Ensure UTM parameters from campaigns are preserved and captured correctly

---

# Data Accuracy Requirements

- Test every tracked event manually before launch (use platform debugging tools: GTM Preview, Meta Pixel Helper, GA4 DebugView)
- Verify events fire exactly once per real conversion (no double-firing, no missing fires)
- Ensure tracking works correctly across the responsive breakpoints defined in 09-responsive.md

---

# Privacy and Compliance

- Include a clear privacy notice, especially near forms collecting personal data (see 14-trust-building.md)
- Respect cookie consent requirements applicable to the business's operating regions
- Avoid tracking implementations that collect more data than disclosed

---

# Common Mistakes

Avoid:

- Tracking "form view" instead of "form submission" as the conversion event
- Missing server-side tracking (CAPI) leading to under-reported conversions
- Firing the same conversion event multiple times per session
- No testing before launch, discovering broken tracking only after budget is spent
- Ignoring privacy/consent requirements

---

# Implementation Rules

The AI must:

1. Define the exact conversion event(s) matching the business goal from 01.
2. Implement platform-appropriate tracking (Pixel+CAPI for Meta, conversion tracking for Google Ads, GA4 events).
3. Test every event before considering the page launch-ready.
4. Verify no duplicate or missing event fires.
5. Include appropriate privacy disclosures.

---

# Quality Checklist

□ Conversion events map exactly to business goals

□ Meta Pixel + CAPI implemented with deduplication (if applicable)

□ Google Ads conversion tracking implemented (if applicable)

□ GA4 events configured (if applicable)

□ All events tested and verified before launch

□ Privacy disclosures present

---

# AI Instructions

Never mark a project complete without explicitly testing and confirming tracking events fire correctly — this is a launch-blocking requirement, not an optional enhancement.

---

# References

Inspired by:

- Meta Business tracking documentation
- Google Ads and GA4 measurement best practices
