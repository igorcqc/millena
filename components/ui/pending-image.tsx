import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function PendingImage({ note, className }: { note: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center",
        className
      )}
    >
      <ImageIcon className="h-6 w-6 text-rose" strokeWidth={1.5} />
      <p className="text-sm leading-relaxed text-ink-soft">{note}</p>
    </div>
  );
}
