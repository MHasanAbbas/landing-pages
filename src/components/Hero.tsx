import Image from "next/image";
import Link from "next/link";

export type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type HeroProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  badge?: string;
  actions?: HeroAction[];
  image?: {
    src: string;
    alt: string;
  };
  children?: React.ReactNode;
};

export default function Hero({
  title,
  subtitle,
  eyebrow,
  badge,
  actions,
  image,
  children,
}: HeroProps) {
  return (
    <section className="relative grid items-center gap-10 overflow-hidden rounded-[32px] border border-white/70 bg-[linear-gradient(135deg,_rgba(255,255,255,0.96)_0%,_rgba(255,255,255,0.88)_45%,_rgba(247,242,232,0.92)_100%)] p-6 shadow-[0_30px_80px_-42px_rgba(15,47,36,0.55)] backdrop-blur sm:p-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,_rgba(107,123,90,0.28),_transparent_70%)]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,_rgba(15,47,36,0.18),_transparent_70%)]" />
      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-3">
          {eyebrow ? (
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-secondary)]">
              {eyebrow}
            </span>
          ) : null}
          {badge ? (
            <span className="rounded-full border border-[color:var(--brand-primary)]/20 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-primary)]">
              {badge}
            </span>
          ) : null}
        </div>
        <h1 className="text-3xl font-semibold leading-tight text-[color:var(--brand-ink)] sm:text-4xl">
          {title}
        </h1>
        <p className="text-base leading-relaxed text-[color:var(--brand-muted)] sm:text-lg">
          {subtitle}
        </p>
        {actions && actions.length ? (
          <div className="flex flex-col gap-3 sm:flex-row">
            {actions.map((action) => {
              const isPrimary = action.variant !== "secondary";
              const isExternal = action.href.startsWith("http");
              const className = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ring)] ${
                isPrimary
                  ? "bg-[color:var(--brand-primary)] text-white hover:bg-[color:var(--brand-secondary)]"
                  : "border border-[color:var(--brand-primary)]/15 bg-white/80 text-[color:var(--brand-primary)] hover:border-transparent hover:bg-white"
              }`;

              if (isExternal) {
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    className={className}
                    rel="noopener noreferrer"
                  >
                    {action.label}
                  </a>
                );
              }

              return (
                <Link key={action.label} href={action.href} className={className}>
                  {action.label}
                </Link>
              );
            })}
          </div>
        ) : null}
        {children}
      </div>
      {image ? (
        <div className="relative z-10">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[28px] border border-[color:var(--brand-primary)]/10 bg-white/60" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-[0_24px_60px_-32px_rgba(15,47,36,0.65)]">
            <Image
              src={image.src}
              alt={image.alt}
              width={1024}
              height={768}
              className="h-auto w-full rounded-3xl object-cover"
              priority
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
