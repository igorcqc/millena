import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";
import { MonogramWatermark } from "@/components/ui/monogram-watermark";
import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <Section className="relative overflow-hidden bg-blush">
      <MonogramWatermark className="-left-16 -top-24 md:-left-10 md:-top-32" />
      <Container className="relative">
        <FadeIn className="max-w-2xl text-center md:mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-rose">
            O que as pacientes dizem
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Mensagens reais, enviadas depois do procedimento
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <FadeIn key={testimonial.quote} delay={i * 0.08}>
              <blockquote className="border-t border-blush-deep pt-5">
                <p className="leading-relaxed text-ink">&ldquo;{testimonial.quote}&rdquo;</p>
                <cite className="mt-4 block text-sm not-italic text-ink-soft">
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
