type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  count?: number;
};

export default function SectionHeader({
  title,
  subtitle,
  count,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 className="text-2xl font-semibold text-[#14201b]">{title}</h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-[#5b6b61]">{subtitle}</p>
        ) : null}
      </div>
      {typeof count === "number" ? (
        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0f8b6a]">
          {count} spots
        </span>
      ) : null}
    </div>
  );
}
