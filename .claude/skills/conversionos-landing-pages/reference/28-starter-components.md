# ConversionOS - Starter Components Skill

Version: 1.0

---

# Purpose

This skill provides concrete, working reference implementations of the most-reused UI primitives, aligned to `reference/core-tech-stack.md` and styled according to `00-design-system.md`.

`24-component-architecture.md` explains *how* to think about components. This skill gives the actual starting code, so every project builds from the same technical foundation instead of reinventing these primitives each time.

---

# Scope

Applies to the initial technical setup of any project using the default stack (Next.js + TypeScript + Tailwind CSS + shadcn/ui pattern).

If a project uses a different stack (see `reference/core-tech-stack.md` deviation rules), treat this file as a pattern reference to adapt rather than code to copy verbatim.

---

# Dependencies

This skill depends on:

- reference/core-tech-stack.md
- 00-design-system.md
- 24-component-architecture.md
- 11-accessibility.md

---

# Design Tokens (Tailwind config reference)

Define spacing, color, and typography as tokens once, referenced everywhere — never hardcode raw values in components.

```ts
// tailwind.config.ts (excerpt)
export default {
  theme: {
    extend: {
      spacing: {
        // 8px grid from 00-design-system.md
        1: "8px",
        2: "16px",
        3: "24px",
        4: "32px",
        6: "48px",
        8: "64px",
        10: "80px",
        12: "96px",
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--color-primary))",
          foreground: "hsl(var(--color-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--color-secondary))",
          foreground: "hsl(var(--color-secondary-foreground))",
        },
        neutral: {
          50: "hsl(var(--color-neutral-50))",
          900: "hsl(var(--color-neutral-900))",
        },
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
};
```

Colors are defined as CSS variables per project (see below) so the same component code produces a different, brand-appropriate palette per project — this is what keeps `26-avoiding-ai-cliches.md`'s "sameness problem" in check while reusing the same components.

```css
/* globals.css — replace values per project's brand */
:root {
  --color-primary: 222 89% 55%;
  --color-primary-foreground: 0 0% 100%;
  --color-secondary: 250 20% 20%;
  --color-secondary-foreground: 0 0% 100%;
  --color-neutral-50: 0 0% 98%;
  --color-neutral-900: 222 20% 10%;
}
```

---

# Container

```tsx
// components/layout/container.tsx
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-container px-4 md:px-6", className)}>
      {children}
    </div>
  );
}
```

---

# Section

```tsx
// components/layout/section.tsx
import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-10 md:py-12", className)}>
      {children}
    </section>
  );
}
```

---

# Button

Implements the states required by `05-cta.md` and `11-accessibility.md`: visible hover, focus, active, and disabled states; comfortable tap target.

```tsx
// components/ui/button.tsx
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          size === "default" ? "h-11 px-6 text-sm" : "h-12 px-8 text-base",
          variant === "primary" &&
            "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
          variant === "secondary" &&
            "bg-secondary text-secondary-foreground hover:bg-secondary/90",
          variant === "ghost" &&
            "bg-transparent text-secondary hover:bg-neutral-50",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
```

Minimum 44px tap target (`h-11` = 44px) per `09-responsive.md` and `11-accessibility.md`.

---

# Hero (section composition example)

Demonstrates composing primitives into a section component per `24-component-architecture.md` — content passed as props, not hardcoded.

```tsx
// components/sections/hero.tsx
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type HeroProps = {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
};

export function Hero({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
}: HeroProps) {
  return (
    <Container className="grid items-center gap-6 py-8 md:grid-cols-2 md:py-12">
      <div>
        {eyebrow && (
          <p className="mb-2 text-sm font-medium text-primary">{eyebrow}</p>
        )}
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
          {headline}
        </h1>
        <p className="mt-3 text-lg text-neutral-900/70">{subheadline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button asChild size="lg">
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button asChild variant="ghost" size="lg">
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
        />
      </div>
    </Container>
  );
}
```

Note: `priority` on the hero image (never lazy-loaded, per `10-performance.md`). Text stacks above the visual on mobile by default via `md:grid-cols-2` (mobile-first, per `09-responsive.md`).

---

# Accordion (for FAQ, per `08-faq.md`)

Use the shadcn/ui Accordion (Radix-based) rather than building one from scratch — it handles keyboard interaction and ARIA attributes correctly by default, satisfying `11-accessibility.md` without extra work.

```tsx
// Install via shadcn/ui CLI: npx shadcn@latest add accordion
// Then compose directly:
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
```

---

# Motion Pattern (per `12-motion-design.md`)

```tsx
// components/ui/fade-in.tsx
"use client";

import { motion } from "motion/react";

export function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.3, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

Respects `prefers-reduced-motion` automatically via Framer Motion's built-in handling. Duration (300ms) and easing follow `12-motion-design.md` guidance.

---

# Common Mistakes

Avoid:

- Hardcoding color/spacing values instead of using the design tokens
- Building a custom accordion/dropdown/modal from scratch instead of using the accessible Radix-based primitive
- Skipping the `priority` flag on hero images
- Writing section components that hardcode copy instead of accepting it as props

---

# Implementation Rules

The AI must:

1. Set up design tokens (CSS variables + Tailwind config) at the start of a new project, with colors chosen deliberately for that brand.
2. Build primitives (Button, Container, Section) once, matching this reference, and reuse them.
3. Use Radix-based (shadcn/ui) components for anything with complex interaction/accessibility requirements (accordion, dialog, dropdown, tabs) rather than building from scratch.
4. Compose section components from primitives with content passed as props.

---

# Quality Checklist

□ Design tokens defined and used consistently (no hardcoded values)

□ Primitives match accessibility requirements (focus states, tap targets)

□ Complex interactive components use accessible primitives (Radix/shadcn)

□ Section components accept content as props, not hardcoded copy

---

# AI Instructions

Treat this file as the starting point for a new project's component layer, not a rigid copy-paste requirement — adapt naming and structure to the specific project while preserving the underlying patterns (tokens, accessible primitives, props-driven sections).

---

# References

Implements `reference/core-tech-stack.md` and `24-component-architecture.md` in code, using shadcn/ui (Radix UI + Tailwind CSS) conventions.
