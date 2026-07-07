# ConversionOS - Performance Skill

Version: 1.0

---

# Purpose

This skill defines how to build fast-loading landing pages. Page speed directly affects conversion rate, ad quality scores, and SEO.

Every second of delay increases abandonment, especially on mobile and paid traffic.

---

# Scope

Applies to loading speed, asset optimization, and rendering performance of landing pages.

---

# Dependencies

This skill depends on:

- 09-responsive.md
- 24-component-architecture.md

---

# Core Principle

Performance is a conversion feature, not a technical afterthought.

A beautiful page that loads slowly converts worse than a simpler page that loads instantly.

---

# Target Metrics

Aim for Core Web Vitals within "Good" thresholds:

- Largest Contentful Paint (LCP): under 2.5s
- Interaction to Next Paint (INP): under 200ms
- Cumulative Layout Shift (CLS): under 0.1

These directly affect both user experience and Google Ads/SEO performance.

---

# Image Optimization

- Use modern formats (WebP/AVIF) with fallbacks as needed
- Compress all images without visible quality loss
- Serve responsive image sizes matched to viewport (see 09)
- Lazy-load images below the fold; never lazy-load the hero image (it must load immediately)
- Always set explicit width/height (or aspect-ratio) to prevent layout shift

---

# Font Loading

- Limit to 1-2 font families, 2-4 weights total
- Use `font-display: swap` or equivalent to avoid invisible text during load
- Preload critical fonts used above the fold

---

# JavaScript and CSS

- Ship only the code the page needs; avoid heavy unused libraries
- Defer or lazy-load non-critical scripts (chat widgets, analytics beyond the essential pixel, below-fold interactive elements)
- Avoid render-blocking resources in the critical path
- Minify and bundle assets for production

---

# Third-Party Scripts

Every third-party script (chat widgets, tracking pixels, heatmaps) has a performance cost.

Before adding one, ask: "Is this necessary for this specific page's goal?"

Load non-essential third-party scripts asynchronously and after the main content.

---

# Hosting and Delivery

- Serve assets through a CDN when possible
- Use caching headers appropriately for static assets
- Prefer platforms with fast edge delivery (e.g., Vercel) for deployment

---

# Layout Shift Prevention

- Reserve space for images, embeds, and ads before they load
- Avoid inserting content above existing content after initial render
- Load web fonts in a way that doesn't cause visible reflow

---

# Common Mistakes

Avoid:

- Uncompressed, full-resolution images
- Loading every tracking script synchronously in the head
- Custom fonts with no fallback or preload strategy
- Heavy animation libraries for simple effects achievable with CSS
- Ignoring performance until after the page is "done"

---

# Implementation Rules

The AI must:

1. Optimize and correctly size every image before use.
2. Lazy-load below-the-fold media; load the hero eagerly.
3. Limit and defer third-party scripts.
4. Prevent layout shift with explicit dimensions.
5. Validate Core Web Vitals before considering the page complete.

---

# Quality Checklist

□ LCP under 2.5s

□ CLS under 0.1

□ Images compressed and correctly sized

□ Fonts limited and optimized

□ Non-critical scripts deferred

□ No unnecessary third-party scripts

---

# AI Instructions

Treat performance budget as a constraint from the start of development, not a cleanup step at the end.

When choosing between a heavier visual effect and page speed, default to speed unless the business case clearly justifies the tradeoff.

---

# References

Inspired by:

- Core Web Vitals (Google)
- Web performance optimization best practices
