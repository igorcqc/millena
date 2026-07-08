import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppCtaLink } from "@/components/ui/whatsapp-cta-link";
import { procedures, whatsappLink, whatsappMessages } from "@/content/site";

export function Procedures() {
  return (
    <Section id="procedimentos">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Procedimentos"
          title="O que é avaliado e pode ser indicado"
          lead="Nada é indicado antes da avaliação. Aqui não existe pacote fechado: o plano nasce do seu rosto."
        />

        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {procedures.map((procedure, i) => (
            <FadeIn key={procedure.title} delay={(i % 3) * 0.06}>
              <div className="border-t border-line pt-6">
                <span className="font-display text-sm italic text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-2xl text-ink">{procedure.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{procedure.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-14">
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
