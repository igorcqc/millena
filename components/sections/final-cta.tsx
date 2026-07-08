import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";
import { WhatsAppCtaLink } from "@/components/ui/whatsapp-cta-link";
import { site, whatsappLink, whatsappMessages } from "@/content/site";

export function FinalCta() {
  return (
    <Section id="contato" className="bg-ink text-cream">
      <Container className="text-center">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-gold">
            Agende sua avaliação
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl md:text-4xl">
            Vamos conversar sobre o que faz sentido para o seu rosto
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-cream/70">
            Atendimento em {site.cities.join(" e ")}. Fale pelo WhatsApp e agende sua avaliação —
            o orçamento é sempre feito depois da análise presencial.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppCtaLink
              href={whatsappLink(whatsappMessages.finalCta)}
              location="final_cta"
              size="lg"
            >
              Agendar avaliação no WhatsApp
            </WhatsAppCtaLink>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
