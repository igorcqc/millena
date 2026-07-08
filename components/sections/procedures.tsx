import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";
import { WhatsAppCtaLink } from "@/components/ui/whatsapp-cta-link";
import { procedures, whatsappLink, whatsappMessages } from "@/content/site";

export function Procedures() {
  return (
    <Section id="procedimentos">
      <Container>
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-gold">
            Procedimentos
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            O que é avaliado e pode ser indicado
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Cada procedimento só é sugerido depois da avaliação — nenhum deles é vendido como
            pacote fechado.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {procedures.map((procedure, i) => (
            <FadeIn key={procedure.title} delay={(i % 3) * 0.06}>
              <h3 className="font-display text-xl text-ink">{procedure.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{procedure.description}</p>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12">
          <WhatsAppCtaLink
            href={whatsappLink(whatsappMessages.procedures)}
            location="procedures"
            size="lg"
          >
            Perguntar qual procedimento faz sentido pra mim
          </WhatsAppCtaLink>
        </div>
      </Container>
    </Section>
  );
}
