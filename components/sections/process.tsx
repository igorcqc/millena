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
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-rose">
            Como funciona
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Do primeiro contato ao resultado
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.06}>
              <span className="font-display text-3xl text-rose">{step.number}</span>
              <h3 className="mt-3 font-display text-lg text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
