import Link from "next/link";

type Tile = {
  title: string;
  description: string;
  href?: string;
};

type QuickTilesProps = {
  tiles: Tile[];
};

export default function QuickTiles({ tiles }: QuickTilesProps) {
  return (
    <section className="grid gap-4 sm:grid-cols-3">
      {tiles.map((tile) => {
        const content = (
          <div className="flex h-full flex-col gap-2 rounded-3xl border border-white/70 bg-white/75 p-5 shadow-[0_18px_45px_-30px_rgba(15,47,36,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_50px_-28px_rgba(15,47,36,0.6)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-secondary)]">
              {tile.title}
            </p>
            <p className="text-sm text-[color:var(--brand-muted)]">
              {tile.description}
            </p>
          </div>
        );

        return tile.href ? (
          <Link
            key={tile.title}
            href={tile.href}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ring)]"
          >
            {content}
          </Link>
        ) : (
          <div key={tile.title}>{content}</div>
        );
      })}
    </section>
  );
}
