type TrustItem = {
  label: string;
};

type TrustRowProps = {
  items: TrustItem[];
};

function TrustIcon() {
  return (
    <span className="inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[color:var(--brand-primary)]/80" />
  );
}

export default function TrustRow({ items }: TrustRowProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] sm:text-xs">
      {items.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-2">
          <TrustIcon />
          {item.label}
        </span>
      ))}
    </div>
  );
}
