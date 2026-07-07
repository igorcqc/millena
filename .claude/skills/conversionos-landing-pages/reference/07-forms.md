# ConversionOS - Forms Skill

Version: 1.0

---

# Purpose

This skill defines how to design lead capture and conversion forms that maximize completion rate while collecting the information the business actually needs.

Forms are the point of highest friction on a landing page. Every field is a reason to abandon.

---

# Scope

Applies to any form used for lead capture, quote requests, sign-ups, bookings, or checkout steps.

---

# Dependencies

This skill depends on:

- 01-cro-foundation.md
- 05-cta.md
- 11-accessibility.md

---

# Core Principle

Every field must earn its place.

Before adding a field, ask: "What happens if we don't collect this?"

If the answer is "nothing important," remove the field.

---

# Field Count Guidance

## Lead Generation (low commitment)

2-4 fields: name, phone or email, and one qualifying question maximum.

More fields reduce completion rate significantly for low-commitment offers.

---

## High-Ticket / Qualification Forms

5-8 fields acceptable when visitors expect to provide detail before a consultation (budget range, timeline, project type).

More fields can be acceptable here because it signals seriousness and pre-qualifies leads — but each field must still serve a clear purpose.

---

## Checkout / Transactional Forms

Only fields required to complete the transaction. Use progressive disclosure (multi-step) for longer checkouts.

---

# Field Types and Friction

Order fields from lowest to highest friction:

Low friction: name, email

Medium friction: phone number, company name

Higher friction: budget, address, detailed project descriptions

Place low-friction fields first to build commitment before asking for more.

---

# Field Design Rules

- Label every field clearly; never rely on placeholder text alone as a label
- Use appropriate input types (tel, email, number) to trigger correct mobile keyboards
- Mark required vs optional fields explicitly
- Provide inline validation with clear, specific error messages
- Avoid CAPTCHA unless spam is a proven problem — it adds friction

---

# Multi-Step Forms

Use multi-step forms when:

- The total field count is high
- Fields can be logically grouped
- Progressive commitment increases completion (people who start are more likely to finish)

Each step should show progress and never exceed 3-4 fields.

---

# Form Placement

- Embed the form directly on the page for lower-friction offers
- Use a dedicated step or modal for higher-commitment offers where focus matters
- Always pair the form with a headline restating the value of submitting it

---

# Submit Button Rules

See 05-cta.md.

Additional form-specific rule: the submit button copy should state what happens next, not just "Submit" (e.g., "Get my free quote", "Request a callback").

---

# Post-Submission Experience

Always define:

- A clear confirmation message or page
- What happens next and when (e.g., "We'll contact you within 1 business day")
- A tracked conversion event (see 22-analytics-tracking.md)

---

# Alternative Conversion Paths

For audiences that prefer direct contact, offer a WhatsApp or phone alternative alongside the form, especially for local business and high-ticket pages (see 17, 18).

---

# Common Mistakes

Avoid:

- Asking for information not immediately necessary
- Forms with no visible labels
- No feedback on submission (visitor unsure if it worked)
- Overly long single-step forms
- Forms that don't work correctly on mobile keyboards

---

# Implementation Rules

The AI must:

1. Determine the minimum information needed for the business to act on the lead.
2. Order fields from lowest to highest friction.
3. Use multi-step forms when field count is high.
4. Write submit button copy stating the outcome.
5. Define and implement a clear post-submission confirmation.
6. Connect form submission to tracking events.

---

# Quality Checklist

□ Minimum necessary fields

□ Clear labels on every field

□ Correct input types for mobile

□ Inline validation with clear errors

□ Submit button states the outcome

□ Confirmation message defined

□ Tracking event connected

---

# AI Instructions

Before designing a form, ask what the business will actually do with each piece of data.

Default to fewer fields unless the offer specifically requires qualification detail.

---

# References

Inspired by:

- Form usability research
- Conversion rate optimization practices
- Mobile UX guidelines
