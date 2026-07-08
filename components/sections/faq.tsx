import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
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
        <SectionHeading
          index="07"
          eyebrow="Dúvidas frequentes"
          title="Perguntas que mais recebo"
          align="center"
        />

        <FadeIn delay={0.1} className="mt-12">
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
