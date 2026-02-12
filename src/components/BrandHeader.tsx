import Link from "next/link";

const tagline = "Purity in a bag. Community at heart.";

type BrandHeaderProps = {
  pageLabel?: string;
  variant?: "default" | "compact";
  showNav?: boolean;
};

export default function BrandHeader({
  pageLabel,
  variant = "default",
  showNav = true,
}: BrandHeaderProps) {
  const isCompact = variant === "compact";

  return (
    <header
      className={`mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 sm:px-8 ${
        isCompact
          ? "pb-2 pt-4 sm:flex-row sm:items-center sm:justify-between"
          : "pb-3 pt-6"
      }`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/hounslow"
          className="flex flex-col gap-1 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ring)]"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-primary)]">
            Totalee Halal
          </span>
          {!isCompact ? (
            <span className="text-sm text-[color:var(--brand-muted)]">
              {tagline}
            </span>
          ) : null}
        </Link>
        {pageLabel ? (
          <span className="inline-flex items-center rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-primary)]">
            {pageLabel}
          </span>
        ) : null}
      </div>
      {showNav ? (
        <nav className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-muted)]">
          <Link
            href="/hounslow"
            className="rounded-full border border-transparent px-3 py-2 transition hover:border-white/70 hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ring)]"
          >
            Hounslow
          </Link>
          <Link
            href="/hounslow/deals"
            className="rounded-full border border-transparent px-3 py-2 transition hover:border-white/70 hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ring)]"
          >
            Deals
          </Link>
          <Link
            href="/hounslow/ramadan-deals"
            className="rounded-full border border-transparent px-3 py-2 transition hover:border-white/70 hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ring)]"
          >
            Ramadan
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
