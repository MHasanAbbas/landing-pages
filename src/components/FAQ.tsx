type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  title?: string;
  items: FAQItem[];
};

export default function FAQ({ title = "FAQ", items }: FAQProps) {
  return (
    <section className="rounded-3xl border border-white/70 bg-[linear-gradient(135deg,_rgba(255,255,255,0.96)_0%,_rgba(255,255,255,0.86)_60%,_rgba(247,242,232,0.92)_100%)] p-6 shadow-[0_20px_50px_-32px_rgba(15,47,36,0.58)] backdrop-blur">
      <h2 className="text-xl font-semibold text-[color:var(--brand-ink)]">
        {title}
      </h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-white/70 bg-white/85 p-4"
          >
            <p className="text-sm font-semibold text-[color:var(--brand-ink)]">
              {item.question}
            </p>
            <p className="mt-2 text-sm text-[color:var(--brand-muted)]">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
