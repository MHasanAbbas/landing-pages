import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)]"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.label} className="inline-flex items-center gap-2">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-[color:var(--brand-primary)] hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[color:var(--brand-muted)]">
                {item.label}
              </span>
            )}
            {isLast ? null : (
              <span className="text-[color:var(--brand-muted)]">/</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
