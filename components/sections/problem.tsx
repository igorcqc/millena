import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";

const worries = [
  {
    title: "Medo de ficar \"estufada\"",
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
      "Procedimento estético sem entender quem está por trás da agulha, sem saber se a avaliação é séria ou só \"venda de pacote\".",
  },
];

export function Problem() {
  return (
    <Section className="border-b border-line">
      <Container>
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-rose">
            Antes de qualquer procedimento
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl text-ink md:text-4xl">
            Se alguma dessas preocupações é sua, você não está exagerando.
          </h2>
        </FadeIn>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {worries.map((worry, i) => (
            <FadeIn key={worry.title} delay={i * 0.08}>
              <h3 className="font-display text-xl text-ink">{worry.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{worry.description}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
