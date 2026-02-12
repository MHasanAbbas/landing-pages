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
    <section className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-[0_18px_45px_-30px_rgba(15,47,36,0.55)] backdrop-blur">
      <h2 className="text-xl font-semibold text-[color:var(--brand-ink)]">
        {title}
      </h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-white/70 bg-white/80 p-4"
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
