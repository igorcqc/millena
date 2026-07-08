import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";

type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const titleColor = tone === "light" ? "text-ink" : "text-cream";
  const leadColor = tone === "light" ? "text-ink-soft" : "text-cream/70";

  return (
    <FadeIn
      className={cn("max-w-2xl", isCenter && "mx-auto text-center", className)}
    >
      <p
        className={cn(
          "flex items-baseline gap-3 text-sm font-medium uppercase tracking-[0.16em] text-gold",
          isCenter && "justify-center"
        )}
      >
        {index && (
          <span className="font-display text-base italic tracking-normal">{index}</span>
        )}
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 font-display text-4xl leading-[1.08] md:text-5xl",
          titleColor
        )}
      >
        {title}
      </h2>
      {lead && <p className={cn("mt-5 text-lg leading-relaxed", leadColor)}>{lead}</p>}
    </FadeIn>
  );
}
