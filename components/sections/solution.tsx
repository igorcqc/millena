import { Bone, CalendarCheck, FileText, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/content/site";

const points = [
  {
    icon: Bone,
    text: "Avaliação da estrutura óssea, da oclusão e da musculatura facial antes de indicar qualquer procedimento",
  },
  {
    icon: FileText,
    text: "Plano individual para cada rosto, nunca uma fórmula pronta",
  },
  {
    icon: ShieldCheck,
    text: "Produtos registrados e biossegurança rigorosa em cada etapa",
  },
  {
    icon: CalendarCheck,
    text: "Acompanhamento de perto no pós-procedimento, com retorno marcado",
  },
];

export function Solution() {
  return (
    <Section className="bg-graphite">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center lg:gap-16">
        <SectionHeading
          index="02"
          eyebrow="Por que uma dentista"
          title="Harmonização orofacial é uma especialidade odontológica. A estética vem depois da estrutura."
          lead={`Como cirurgiã-dentista (${site.credential}), ${site.name} estuda a base que sustenta o resultado: ossos, dentes, oclusão e musculatura da face. É essa base que decide se um preenchimento ou uma toxina vai parecer natural ou artificial.`}
        />
        <FadeIn delay={0.1}>
          <ul className="divide-y divide-graphite-deep">
            {points.map(({ icon: Icon, text }) => (
              <li key={text} className="flex gap-5 py-5 leading-relaxed text-ink first:pt-0 last:pb-0">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </Section>
  );
}
