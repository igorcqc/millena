import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/ui/fade-in";
import { site } from "@/content/site";

const signals = [
  {
    title: "Registro que você pode conferir",
    description: `${site.credential}. Você pode checar o registro no site do Conselho Regional de Odontologia.`,
  },
  {
    title: "Produtos com procedência",
    description: "Só uso produtos registrados, com procedência e nota fiscal.",
  },
  {
    title: "Avaliação antes da venda",
    description:
      "Nenhum procedimento é indicado sem avaliação presencial do seu rosto.",
  },
];

export function Trust() {
  return (
    <section className="border-y border-line bg-graphite py-14 md:py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {signals.map((signal, i) => (
            <FadeIn key={signal.title} delay={i * 0.06}>
              <h3 className="flex items-baseline gap-3 font-display text-xl text-ink">
                <span className="h-px w-6 shrink-0 translate-y-[-0.3em] bg-gold" />
                {signal.title}
              </h3>
              <p className="mt-3 pl-9 text-sm leading-relaxed text-ink-soft">
                {signal.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
