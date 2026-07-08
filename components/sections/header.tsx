import { Container } from "@/components/layout/container";
import { WhatsAppCtaLink } from "@/components/ui/whatsapp-cta-link";
import { whatsappLink, whatsappMessages } from "@/content/site";

const navLinks = [
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="font-display text-lg tracking-wide text-ink md:text-xl">
          Millena Curty
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <WhatsAppCtaLink
          href={whatsappLink(whatsappMessages.hero)}
          location="header"
          className="text-sm"
        >
          Agendar avaliação
        </WhatsAppCtaLink>
      </Container>
    </header>
  );
}
