type HeroProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  badge?: string;
};

export default function Hero({ title, subtitle, eyebrow, badge }: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_24px_60px_-36px_rgba(20,32,27,0.6)] backdrop-blur sm:p-8">
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,_rgba(217,130,43,0.45),_transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-28 left-0 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,_rgba(15,139,106,0.35),_transparent_70%)]" />
      <div className="relative z-10 flex flex-col gap-3">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0f8b6a]">
            {eyebrow}
          </p>
        ) : null}
        <div className="flex flex-wrap items-center gap-2">
          {badge ? (
            <span className="rounded-full border border-[#0f8b6a]/30 bg-[#0f8b6a]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0f8b6a]">
              {badge}
            </span>
          ) : null}
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5b6b61]">
            Limited time
          </span>
        </div>
        <h1 className="text-3xl font-semibold leading-tight text-[#14201b] sm:text-4xl">
          {title}
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-[#4c5b52] sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
