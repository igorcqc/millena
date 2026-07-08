import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

const worries = [
  {
    title: "Medo de ficar “estufada”",
    description:
      "Boca de pato, maçã do rosto artificial, rosto que parece com o de qualquer outra pessoa que fez o mesmo procedimento.",
  },
  {
    title: "Insegurança com assimetrias",
    description:
      "Queixo recuado, mandíbula pouco definida, lábios desproporcionais — pontos que incomodam no dia a dia e nas fotos.",
  },
  {
    title: "Não saber em quem confiar",
    description:
      "Procedimento estético sem entender quem está por trás da agulha, sem saber se a avaliação é séria ou só “venda de pacote”.",
  },
];

export function Problem() {
  return (
    <Section>
      <Container>
        <SectionHeading
          index="01"
          eyebrow="Antes de qualquer procedimento"
          title="Se alguma dessas preocupações é sua, você não está exagerando."
        />
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {worries.map((worry, i) => (
            <FadeIn key={worry.title} delay={i * 0.08}>
              <div className="border-t border-line pt-6">
                <h3 className="font-display text-2xl text-ink">{worry.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{worry.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
