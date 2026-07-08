import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";
import { MonogramWatermark } from "@/components/ui/monogram-watermark";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <Section className="relative overflow-hidden">
      <MonogramWatermark className="-left-16 -top-24 md:-left-10 md:-top-32" />
      <Container className="relative">
        <SectionHeading
          index="06"
          eyebrow="O que as pacientes dizem"
          title="Mensagens reais, enviadas depois do procedimento"
          align="center"
        />

        <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <FadeIn key={testimonial.quote} delay={i * 0.08}>
              <blockquote className="border-t border-line pt-6">
                <p className="font-display text-xl leading-relaxed text-ink md:text-[1.35rem]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <cite className="mt-5 block text-sm not-italic uppercase tracking-[0.1em] text-ink-soft">
                  {testimonial.attribution}
                </cite>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
