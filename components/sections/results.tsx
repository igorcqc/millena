import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";
import { PendingImage } from "@/components/ui/pending-image";
import { results } from "@/content/site";

function fileExists(publicPath: string) {
  return fs.existsSync(path.join(process.cwd(), "public", publicPath));
}

export function Results() {
  return (
    <Section id="resultados" className="bg-graphite">
      <Container>
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-gold">Resultados</p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Antes e depois reais de pacientes
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Fotos de pacientes reais, com autorização de uso de imagem.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {results.map((result, i) => {
            const exists = fileExists(result.src);
            return (
              <FadeIn key={result.id} delay={i * 0.08}>
                <div className="relative">
                  <div className="pointer-events-none absolute -inset-2 hidden border border-gold/30 md:block" />
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
                    {exists ? (
                      <Image
                        src={result.src}
                        alt={result.label}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                      />
                    ) : (
                      <PendingImage
                        note={`Foto real aguardando upload em public${result.src}`}
                      />
                    )}
                  </div>
                </div>
                <p className="mt-4 text-sm text-ink-soft">{result.label}</p>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
