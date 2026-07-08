import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

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
    description: "Você recebe as opções, o que cada uma muda de fato e o valor, sem surpresas.",
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
        <SectionHeading
          index="04"
          eyebrow="Como funciona"
          title="Do primeiro contato ao resultado"
        />

        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.06}>
              <li className="flex h-full flex-col">
                <span className="font-display text-4xl italic text-gold">{step.number}</span>
                <h3 className="mt-4 font-display text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
