import { cn } from "@/lib/utils";

export function MonogramWatermark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute select-none font-display text-[28rem] font-normal leading-none text-blush-deep/60",
        className
      )}
    >
      M
    </span>
  );
}
