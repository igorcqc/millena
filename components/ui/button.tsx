import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary: "bg-clay text-white hover:bg-clay-dark active:bg-clay-dark",
  secondary: "bg-ink text-cream hover:bg-ink/90",
  ghost: "bg-transparent text-ink border border-line hover:bg-cream-deep",
};

const sizes = {
  default: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

type CommonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkButtonProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export function ButtonLink({
  className,
  variant = "primary",
  size = "default",
  href,
  ...props
}: LinkButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("https://wa.me");
  const isHash = href.startsWith("#");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }

  if (isHash) {
    return (
      <a href={href} className={cn(base, variants[variant], sizes[size], className)} {...props} />
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {props.children}
    </Link>
  );
}
