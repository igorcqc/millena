import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { WhatsAppCtaLink } from "@/components/ui/whatsapp-cta-link";
import { PendingImage } from "@/components/ui/pending-image";
import { site, whatsappLink, whatsappMessages } from "@/content/site";

const heroImageSrc = "/images/hero.jpg";

function fileExists(publicPath: string) {
  return fs.existsSync(path.join(process.cwd(), "public", publicPath));
}

const facts = [
  { label: "Registro profissional", value: site.credential },
  { label: "Atendimento", value: site.cities.join(" · ") },
];

export function Hero() {
  const hasHeroImage = fileExists(heroImageSrc);

  return (
    <div id="top" className="relative overflow-hidden">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24 lg:gap-16">
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-gold">
            Harmonização Orofacial · {site.cities.join(" e ")}
          </p>
          <h1 className="font-display text-[2.75rem] leading-[1.06] text-ink md:text-6xl">
            Harmonização facial planejada na sua anatomia, não em um padrão de rosto pronto.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Sou {site.name}, {site.role.toLowerCase()} ({site.credential}). Antes de qualquer
            procedimento, avalio estrutura óssea e oclusão para um resultado que realça seus
            traços, sem uniformizar o seu rosto.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <WhatsAppCtaLink
              href={whatsappLink(whatsappMessages.hero)}
              location="hero_primary"
              size="lg"
            >
              Agendar avaliação no WhatsApp
            </WhatsAppCtaLink>
            <ButtonLink href="#resultados" variant="ghost" size="lg">
              Ver resultados reais
            </ButtonLink>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-5 border-t border-line pt-7">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs uppercase tracking-[0.14em] text-ink-soft">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-medium text-ink">{fact.value}</dd>
              </div>
            ))}
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-ink-soft">Comunidade</dt>
              <dd className="mt-1 font-medium text-ink">
                +6 mil no Instagram{" "}
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline underline-offset-4 transition-colors hover:text-gold-dark"
                >
                  {site.instagramHandle}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-graphite">
          {hasHeroImage ? (
            <Image
              src={heroImageSrc}
              alt={`${site.name}, ${site.role}`}
              fill
              priority
              className="object-cover"
            />
          ) : (
            <PendingImage note="Foto profissional da Dra. Millena, aguardando envio do arquivo real (ver /public/images/README.md)" />
          )}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/60 to-transparent p-5">
            <p className="text-sm text-cream">
              <span className="font-display text-base italic">Dra. {site.name}</span>
              <span className="block text-cream/70">{site.credential}</span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
