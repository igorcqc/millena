import { Container } from "@/components/layout/container";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <Container className="flex flex-col gap-4 py-10 text-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base text-cream">{site.name}</p>
          <p>{site.role} · {site.credential}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream"
          >
            Instagram {site.instagramHandle}
          </a>
          <span>{site.cities.join(" · ")}</span>
        </div>
      </Container>
      <Container className="border-t border-cream/10 py-4 text-xs">
        <p>&copy; {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
}
