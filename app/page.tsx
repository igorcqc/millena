import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { Statement } from "@/components/sections/statement";
import { Procedures } from "@/components/sections/procedures";
import { Process } from "@/components/sections/process";
import { Results } from "@/components/sections/results";
import { Testimonials } from "@/components/sections/testimonials";
import { Trust } from "@/components/sections/trust";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/sections/whatsapp-float";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <Statement />
        <Procedures />
        <Process />
        <Results />
        <Testimonials />
        <Trust />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
