import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";
import { WhatsAppCtaLink } from "@/components/ui/whatsapp-cta-link";
import { site, whatsappLink, whatsappMessages } from "@/content/site";

export function FinalCta() {
  return (
    <Section id="contato" className="relative overflow-hidden bg-ink text-cream">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-32 select-none font-display text-[24rem] font-normal leading-none text-cream/[0.04]"
      >
        M
      </span>
      <Container className="relative text-center">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-gold">
            Agende sua avaliação
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-[1.08] md:text-5xl">
            Vamos conversar sobre o que faz sentido para o seu rosto
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/70">
            Atendimento em {site.cities.join(" e ")}. Fale pelo WhatsApp e agende sua avaliação —
            o orçamento é sempre feito depois da análise presencial.
          </p>
          <div className="mt-9 flex justify-center">
            <WhatsAppCtaLink
              href={whatsappLink(whatsappMessages.finalCta)}
              location="final_cta"
              size="lg"
              variant="secondary"
            >
              Agendar avaliação no WhatsApp
            </WhatsAppCtaLink>
          </div>
          <p className="mt-5 text-sm text-cream/50">Sem compromisso — a conversa não obriga nada.</p>
        </FadeIn>
      </Container>
    </Section>
  );
}
