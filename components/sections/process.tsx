import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";

const steps = [
  {
    number: "01",
    title: "Conversa inicial no WhatsApp",
    description: "Você conta o que te incomoda e o que gostaria de melhorar. Sem compromisso.",
  },
  {
    number: "02",
    title: "Avaliação presencial",
    description:
      "Análise da anatomia facial, estrutura óssea e oclusão para entender o que é realista para o seu rosto.",
  },
  {
    number: "03",
    title: "Plano individual e orçamento",
    description: "Você recebe as opções, o que cada uma muda de fato, e o valor — sem surpresas.",
  },
  {
    number: "04",
    title: "Procedimento e acompanhamento",
    description: "Aplicação com biossegurança e retorno para acompanhar o resultado.",
  },
];

export function Process() {
  return (
    <Section className="border-t border-line">
      <Container>
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-gold">
            Como funciona
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Do primeiro contato ao resultado
          </h2>
        </FadeIn>

        <div className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          <div className="pointer-events-none absolute top-3 left-0 right-0 hidden h-px bg-line md:block" />
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.06} className="relative">
              <span className="relative z-10 inline-block bg-cream pr-4 font-display text-3xl italic text-gold md:pr-0">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-lg text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
