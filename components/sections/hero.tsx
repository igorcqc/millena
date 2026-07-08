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
    <div id="top" className="relative overflow-hidden">
      <Container className="grid gap-10 py-14 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-gold">
            Harmonização Orofacial · {site.cities.join(" e ")}
          </p>
          <h1 className="font-display text-4xl leading-[1.1] text-ink md:text-5xl">
            Harmonização facial planejada na sua anatomia — não em um padrão de rosto pronto.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Sou {site.name}, {site.role.toLowerCase()} ({site.credential}). Antes de qualquer
            procedimento, avalio estrutura óssea e oclusão para um resultado que realça seus
            traços — sem uniformizar seu rosto.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-line pt-6 text-sm">
            <div>
              <dt className="text-ink-soft">Registro profissional</dt>
              <dd className="font-medium text-ink">{site.credential}</dd>
            </div>
            <div>
              <dt className="text-ink-soft">Atendimento</dt>
              <dd className="font-medium text-ink">{site.cities.join(" · ")}</dd>
            </div>
            <div>
              <dt className="text-ink-soft">Comunidade</dt>
              <dd className="font-medium text-ink">
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
        </div>
      </Container>
    </div>
  );
}
