import { Container } from "@/components/layout/container";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <Container className="flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg uppercase tracking-[0.14em] text-cream">
            {site.name}
          </p>
          <p className="mt-2 text-sm">
            {site.role} · {site.credential}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cream"
          >
            Instagram {site.instagramHandle}
          </a>
          <span>{site.cities.join(" · ")}</span>
        </div>
      </Container>
      <Container className="border-t border-cream/10 py-4 text-xs">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
