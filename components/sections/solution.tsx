import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";
import { site } from "@/content/site";

const points = [
  "Avaliação da estrutura óssea, oclusão e musculatura facial antes de sugerir qualquer procedimento",
  "Plano de tratamento individual — o objetivo é realçar seus traços, não aplicar uma fórmula pronta",
  "Produtos registrados e de procedência, com biossegurança rigorosa em todas as etapas",
  "Acompanhamento após o procedimento, não só no dia da aplicação",
];

export function Solution() {
  return (
    <Section className="bg-cream-deep">
      <Container className="grid gap-10 md:grid-cols-2 md:items-center">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-gold">
            Por que uma dentista faz harmonização facial
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Harmonização orofacial é uma especialidade odontológica — não só estética de
            superfície.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Como cirurgiã-dentista ({site.credential}), {site.name} estuda a base que sustenta o
            resultado: ossos, dentes, oclusão e musculatura da face. É essa base que decide se um
            preenchimento ou uma toxina vai parecer natural ou artificial.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <ul className="space-y-4">
            {points.map((point) => (
              <li key={point} className="flex gap-3 leading-relaxed text-ink">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </Section>
  );
}
