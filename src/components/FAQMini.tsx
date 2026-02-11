type FAQMiniProps = {
  area: string;
  type: "deals" | "ramadan";
};

export default function FAQMini({ area, type }: FAQMiniProps) {
  const faqs = [
    {
      question: "How do I claim the offer?",
      answer:
        "Tap any restaurant card and the app opens with the offer applied.",
    },
    {
      question: "Are these halal-only restaurants?",
      answer:
        "Yes. Totalee Halal curates verified halal menus for each area.",
    },
    {
      question:
        type === "ramadan"
          ? `Do the ${area} Ramadan bundles include iftar items?`
          : `How long are ${area} deals live?`,
      answer:
        type === "ramadan"
          ? "Most bundles include dates, soup, or sides ready for iftar."
          : "Deals refresh daily and can sell out fast, so order in the app.",
    },
  ];

  return (
    <section className="mt-10 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_18px_40px_-28px_rgba(20,32,27,0.6)] backdrop-blur">
      <h3 className="text-lg font-semibold text-[#14201b]">Quick FAQ</h3>
      <div className="mt-4 space-y-4">
        {faqs.map((item) => (
          <div key={item.question}>
            <p className="text-sm font-semibold text-[#14201b]">
              {item.question}
            </p>
            <p className="mt-1 text-sm text-[#5b6b61]">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
