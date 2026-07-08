import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";
import { site } from "@/content/site";

const signals = [
  {
    title: "Registro profissional verificável",
    description: `${site.credential} — cirurgiã-dentista, consulta pública no site do Conselho Regional de Odontologia.`,
  },
  {
    title: "Produtos registrados e de procedência",
    description: "Nenhum produto sem procedência ou fora das normas de biossegurança é utilizado.",
  },
  {
    title: "Avaliação antes da venda",
    description:
      "Procedimento nenhum é indicado sem avaliação presencial da anatomia e da oclusão.",
  },
];

export function Trust() {
  return (
    <Section className="border-y border-line bg-blush">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {signals.map((signal, i) => (
            <FadeIn key={signal.title} delay={i * 0.06}>
              <h3 className="font-display text-lg text-ink">{signal.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{signal.description}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
