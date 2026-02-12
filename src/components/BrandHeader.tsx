import Link from "next/link";

const tagline = "Purity in a bag. Community at heart.";

type BrandHeaderProps = {
  pageLabel?: string;
};

export default function BrandHeader({ pageLabel }: BrandHeaderProps) {
  return (
    <header className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 pb-4 pt-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <div className="flex items-start gap-4">
        <Link
          href="/hounslow"
          className="flex flex-col gap-1 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ring)]"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-primary)]">
            Totalee Halal
          </span>
          <span className="text-sm text-[color:var(--brand-muted)]">
            {tagline}
          </span>
        </Link>
        {pageLabel ? (
          <span className="mt-1 inline-flex items-center rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-primary)]">
            {pageLabel}
          </span>
        ) : null}
      </div>
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
    </header>
  );
}
