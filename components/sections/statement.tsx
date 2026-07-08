import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";

export function Statement() {
  return (
    <Section className="bg-ink text-cream">
      <Container className="max-w-3xl text-center">
        <FadeIn>
          <p className="font-display text-3xl italic leading-snug md:text-4xl">
            Beleza que não precisa se explicar — só precisa parecer sua.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
