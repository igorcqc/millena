# ConversionOS - Ecommerce Pages Skill

Version: 1.0

---

# Purpose

This skill defines how to design landing and product pages for physical product sales, where the goal is to drive purchase directly.

Ecommerce pages must build product desire and remove purchase friction simultaneously.

---

# Scope

Applies to product landing pages, single-product sales pages, and campaign-specific ecommerce pages.

---

# Dependencies

This skill depends on:

- 01-cro-foundation.md
- 06-social-proof.md
- 07-forms.md (checkout as a form)

---

# Ecommerce Visitor Psychology

Ecommerce visitors ask, beyond standard questions:

- "What exactly does this look/work like?"
- "Is the quality good?"
- "What does it cost, including shipping?"
- "What if I don't like it / it doesn't fit?"
- "Can I trust this store with my payment info?"

---

# Priority Elements

## Product Visualization

High-quality images from multiple angles, in-context/lifestyle shots, and video when possible. This is the primary driver of desire for physical products.

---

## Clear Pricing and Value

Show price prominently, including any additional costs (shipping) as early and transparently as possible to avoid checkout abandonment surprises.

---

## Purchase-Specific Trust Signals

- Return/exchange policy clearly stated
- Secure payment badges near checkout
- Reviews specific to the product (not just the brand generally)
- Shipping time expectations

---

## Urgency and Scarcity (when genuine)

Limited stock, limited-time offers, or seasonal relevance can increase conversion — but only when true. Fabricated urgency damages trust and can create legal/compliance issues.

---

## Simplified Checkout Path

Minimize steps between "Add to cart" and completed purchase. Every additional step or required account creation increases abandonment.

---

# Structure Adjustments

Relative to the default architecture (02), ecommerce/product pages typically benefit from:

- Product gallery immediately in the hero area
- Key product details/specs presented in a scannable format
- Reviews specific to the product placed prominently
- Related/complementary products (when relevant to increase order value) placed after the primary decision content, not before
- Clear, low-friction path to cart/checkout

---

# Guest Checkout

Offer guest checkout as an option; forcing account creation before purchase is a common cause of cart abandonment.

---

# Common Mistakes

Avoid:

- Low-quality or insufficient product imagery
- Hidden shipping costs revealed only at the final checkout step
- Fabricated urgency/scarcity claims
- Forcing account creation before checkout
- Generic reviews not specific to the actual product

---

# Implementation Rules

The AI must:

1. Prioritize high-quality, multi-angle product imagery.
2. Show full pricing (including shipping estimate) as early as possible.
3. Use only genuine urgency/scarcity claims.
4. Minimize checkout steps and offer guest checkout.
5. Place product-specific reviews prominently.

---

# Quality Checklist

□ High-quality product imagery from multiple angles

□ Pricing and shipping shown transparently early

□ Return/exchange policy visible

□ Urgency/scarcity claims are genuine

□ Checkout path is minimal-friction, guest checkout available

□ Product-specific reviews present

---

# AI Instructions

Before building an ecommerce page, confirm real pricing, shipping costs, and policy details from the business — do not estimate or fabricate these, as incorrect information here has direct legal and trust consequences.

---

# References

Inspired by:

- Ecommerce conversion rate optimization research
- Checkout usability studies
