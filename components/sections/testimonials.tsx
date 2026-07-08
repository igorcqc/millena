import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";
import { MonogramWatermark } from "@/components/ui/monogram-watermark";
import { testimonials } from "@/content/site";

const [featured, ...rest] = testimonials;

export function Testimonials() {
  return (
    <Section className="relative overflow-hidden bg-graphite">
      <MonogramWatermark className="-left-16 -top-24 md:-left-10 md:-top-32" />
      <Container className="relative">
        <FadeIn className="max-w-2xl text-center md:mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-gold">
            O que as pacientes dizem
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Mensagens reais, enviadas depois do procedimento
          </h2>
        </FadeIn>

        <FadeIn delay={0.08} className="mx-auto mt-14 max-w-2xl text-center">
          <blockquote>
            <p className="font-display text-2xl italic leading-snug text-ink md:text-3xl">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <cite className="mt-5 block text-sm not-italic uppercase tracking-[0.1em] text-gold">
              {featured.attribution}
            </cite>
          </blockquote>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-3xl gap-x-10 gap-y-10 border-t border-graphite-deep pt-10 md:grid-cols-3">
          {rest.map((testimonial, i) => (
            <FadeIn key={testimonial.quote} delay={i * 0.08}>
              <blockquote>
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
