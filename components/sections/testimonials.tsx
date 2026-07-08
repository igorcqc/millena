import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";
import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <Section>
      <Container>
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-gold">
            O que as pacientes dizem
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Mensagens reais, enviadas depois do procedimento
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <FadeIn key={testimonial.quote} delay={i * 0.08}>
              <blockquote className="rounded-2xl border border-line bg-card p-6">
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
