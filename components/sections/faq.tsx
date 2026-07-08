import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/content/site";

export function Faq() {
  return (
    <Section id="duvidas">
      <Container className="max-w-3xl">
        <FadeIn>
          <p className="text-center text-sm font-medium uppercase tracking-[0.14em] text-gold">
            Dúvidas frequentes
          </p>
          <h2 className="mt-3 text-center font-display text-3xl text-ink md:text-4xl">
            Perguntas que mais recebo
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10">
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </Container>
    </Section>
  );
}
