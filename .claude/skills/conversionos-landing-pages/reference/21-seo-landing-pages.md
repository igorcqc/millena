# ConversionOS - SEO Landing Pages Skill

Version: 1.0

---

# Purpose

This skill defines how to design landing pages that also perform well in organic search, balancing conversion goals with SEO requirements.

Unlike paid traffic pages, SEO pages must earn discovery through search engines before they can convert anyone.

---

# Scope

Applies to landing pages intended to rank organically, including service pages, location pages, and evergreen conversion pages.

---

# Dependencies

This skill depends on:

- 01-cro-foundation.md
- 02-landing-page-architecture.md
- 10-performance.md
- 11-accessibility.md

---

# Core Principle

An SEO landing page must satisfy two audiences: search engine crawlers and human visitors. Neither can be sacrificed for the other — a page that ranks but doesn't convert, or converts but never ranks, both fail.

---

# On-Page SEO Fundamentals

## Title Tag and Meta Description

- Title tag: include the primary keyword naturally, keep under ~60 characters
- Meta description: compelling, accurate summary under ~155 characters that encourages click-through from search results

---

## Heading Structure

- One H1 containing the primary keyword/topic, matching 11-accessibility.md heading rules
- Logical H2/H3 structure that also serves human scanability

---

## URL Structure

- Clean, descriptive, keyword-relevant URLs
- Avoid unnecessary parameters or deep nesting

---

## Content Depth

- Cover the topic thoroughly enough to satisfy search intent, not just enough to fit a template
- Avoid thin, templated content that provides little unique value (a common cause of ranking failure for local/service page templates)

---

# Semantic Relevance

- Use natural language around the target topic, including related terms, rather than repetitive exact-match keyword stuffing
- Structure content to directly answer the likely search query, ideally within the first screen of content

---

# Technical SEO Requirements

- Fast load performance (see 10-performance.md) — a direct ranking factor
- Mobile-friendly, responsive layout (see 09-responsive.md)
- Proper semantic HTML and accessible structure (see 11-accessibility.md) — overlaps significantly with crawlability
- Descriptive alt text on meaningful images
- Structured data (schema markup) where applicable: LocalBusiness, Product, FAQ, Review schema depending on page type
- Canonical tags to avoid duplicate content issues across similar pages

---

# Balancing SEO and Conversion

- The primary CTA and conversion architecture (02, 05) still apply — SEO traffic still needs to convert
- Content depth required for SEO should not bury the conversion path; use clear structure (headings, sections) so both crawlers and scanning humans find what they need
- FAQ sections (08) serve double duty: objection handling for humans and semantic relevance/FAQ schema opportunities for search

---

# Multi-Page SEO Strategy

For businesses targeting multiple locations or service variations, create distinct, substantively unique pages per variation rather than one generic template duplicated with only the location name swapped — duplicate/thin content underperforms and can be penalized.

---

# Common Mistakes

Avoid:

- Sacrificing content depth entirely for a short, purely conversion-focused page when organic ranking is a stated goal
- Keyword stuffing that hurts readability
- Duplicate or near-duplicate pages across locations/variations
- Ignoring page speed and mobile experience, which affect both ranking and conversion
- Missing structured data opportunities relevant to the page type

---

# Implementation Rules

The AI must:

1. Confirm the target keyword/search intent before writing the page.
2. Structure headings around both keyword relevance and human scanability.
3. Ensure sufficient content depth to satisfy search intent without burying the CTA.
4. Implement technical SEO basics (meta tags, semantic HTML, structured data, performance).
5. Create substantively unique content for each location/variation page.

---

# Quality Checklist

□ Title tag and meta description optimized

□ Heading structure supports both SEO and readability

□ Content depth matches search intent

□ Technical SEO basics implemented (schema, alt text, canonical tags)

□ Fast load and mobile-friendly

□ Conversion path still clear despite added content depth

---

# AI Instructions

Before writing, confirm the target keyword and real search intent behind it. Content should serve that intent thoroughly and then guide the visitor to the same conversion goal defined in 01.

---

# References

Inspired by:

- Search engine optimization best practices
- Content and technical SEO guidelines
- Structured data documentation (schema.org)
