import { cn } from "@/lib/utils";
import { site } from "@/content/site";

export function Logotype({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "cream";
}) {
  const textColor = tone === "ink" ? "text-ink" : "text-cream";
  const ruleColor = tone === "ink" ? "bg-gold" : "bg-gold";
  const taglineColor = tone === "ink" ? "text-ink-soft" : "text-cream/60";

  return (
    <a href="#top" className={cn("inline-flex flex-col items-start", className)}>
      <span
        className={cn(
          "font-display text-xl uppercase tracking-[0.18em]",
          textColor
        )}
      >
        {site.name}
      </span>
      <span className="mt-1.5 hidden items-center gap-2 whitespace-nowrap sm:flex">
        <span className={cn("h-px w-4", ruleColor)} />
        <span className={cn("text-[0.6rem] uppercase tracking-[0.22em]", taglineColor)}>
          Harmonização Orofacial
        </span>
      </span>
    </a>
  );
}
