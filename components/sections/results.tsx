import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";
import { PendingImage } from "@/components/ui/pending-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { results } from "@/content/site";

function fileExists(publicPath: string) {
  return fs.existsSync(path.join(process.cwd(), "public", publicPath));
}

export function Results() {
  return (
    <Section id="resultados" className="bg-graphite">
      <Container>
        <SectionHeading
          index="05"
          eyebrow="Resultados"
          title="Antes e depois reais de pacientes"
          lead="Fotos de pacientes reais, com autorização de uso de imagem."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {results.map((result, i) => {
            const exists = fileExists(result.src);
            return (
              <FadeIn key={result.id} delay={i * 0.08}>
                <figure>
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-cream">
                    {exists ? (
                      <Image
                        src={result.src}
                        alt={result.label}
                        fill
                        loading="lazy"
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <PendingImage note={`Foto real aguardando upload em public${result.src}`} />
                    )}
                  </div>
                  <figcaption className="mt-4 flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span className="font-display italic text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {result.label}
                  </figcaption>
                </figure>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
