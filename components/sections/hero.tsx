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

export function Hero() {
  const hasHeroImage = fileExists(heroImageSrc);

  return (
    <div id="top" className="relative">
      <Container className="grid gap-14 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24 lg:gap-20">
        <div>
          <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.14em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Harmonização Orofacial · {site.cities.join(" e ")}
          </p>
          <h1 className="font-display text-5xl leading-[1.05] text-ink md:text-6xl lg:text-7xl">
            Harmonização facial planejada na sua anatomia
            <span className="italic text-gold"> — não em um padrão de rosto pronto.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Sou {site.name}, {site.role.toLowerCase()} ({site.credential}). Antes de qualquer
            procedimento, avalio estrutura óssea e oclusão para um resultado que realça seus
            traços — sem uniformizar seu rosto.
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

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-7 text-sm">
            <div>
              <dt className="text-ink-soft">Registro profissional</dt>
              <dd className="mt-0.5 font-medium text-ink">{site.credential}</dd>
            </div>
            <div>
              <dt className="text-ink-soft">Atendimento</dt>
              <dd className="mt-0.5 font-medium text-ink">{site.cities.join(" · ")}</dd>
            </div>
            <div>
              <dt className="text-ink-soft">Comunidade</dt>
              <dd className="mt-0.5 font-medium text-ink">
                +6 mil no Instagram{" "}
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline underline-offset-2"
                >
                  {site.instagramHandle}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-3 hidden border border-gold/40 md:block" />
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-graphite">
            {hasHeroImage ? (
              <Image
                src={heroImageSrc}
                alt={`${site.name}, ${site.role}`}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            ) : (
              <PendingImage note="Foto profissional da Dra. Millena, aguardando envio do arquivo real (ver /public/images/README.md)" />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
