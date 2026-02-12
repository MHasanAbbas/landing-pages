import type { Metadata } from "next";
import BrandHeader from "@/components/BrandHeader";
import RestaurantList from "@/components/RestaurantList";
import StickyCTA from "@/components/StickyCTA";
import FAQ from "@/components/FAQ";
import Schema from "@/components/Schema";
import {
  hounslowAiBlurb,
  hounslowFaqs,
  hounslowRamadan,
} from "@/data/hounslow";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

const title = "Ramadan deals in Hounslow";
const description =
  "Family boxes, Iftar combos, and limited-time offers. Tap to open in the app.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/hounslow/ramadan-deals",
});

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Hounslow Ramadan deals",
  itemListElement: hounslowRamadan.map((restaurant, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Restaurant",
      name: restaurant.name,
      image: absoluteUrl(restaurant.image),
      servesCuisine: restaurant.cuisine.join(", "),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: restaurant.rating,
        ratingCount: restaurant.ratingCount,
      },
      offers: {
        "@type": "Offer",
        description: `${restaurant.offerBadge} - ${restaurant.offerDetail}`,
      },
    },
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: hounslowFaqs.ramadan.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HounslowRamadanDealsPage() {
  return (
    <div className="relative min-h-screen pb-28">
      <div className="pointer-events-none absolute -left-32 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(15,47,36,0.18),_transparent_70%)]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] -translate-y-1/3 translate-x-1/3 rounded-full bg-[radial-gradient(circle_at_center,_rgba(201,151,43,0.22),_transparent_65%)]" />

      <BrandHeader pageLabel="Ramadan deals" variant="compact" showNav={false} />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 pb-12 sm:px-8">
        <Schema data={[itemList, faqSchema]} />

        <section className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold leading-tight text-[color:var(--brand-ink)] sm:text-3xl">
            Ramadan deals in Hounslow
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-xs text-[color:var(--brand-muted)] sm:text-sm">
            <span className="rounded-full border border-[color:var(--brand-primary)]/15 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-primary)]">
              Limited time
            </span>
            <span>Tap a restaurant to open in the app.</span>
          </div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] sm:text-xs">
            Most ordered this week &bull; Verified halal-only &bull; One-tap order
          </div>
        </section>

        <RestaurantList
          id="restaurants"
          restaurants={hounslowRamadan}
          area="hounslow"
          src="ramadan"
          variant="ramadan"
        />

        <FAQ title="Ramadan FAQs" items={hounslowFaqs.ramadan} />

        <section className="rounded-3xl border border-white/70 bg-[linear-gradient(135deg,_rgba(255,255,255,0.97)_0%,_rgba(255,255,255,0.88)_60%,_rgba(247,242,232,0.94)_100%)] p-6 shadow-[0_20px_50px_-32px_rgba(15,47,36,0.58)] backdrop-blur">
          <h2 className="text-2xl font-semibold text-[color:var(--brand-ink)]">
            Totalee Halal in Hounslow
          </h2>
          <p className="mt-3 text-sm text-[color:var(--brand-muted)]">
            {hounslowAiBlurb.ramadan}
          </p>
        </section>
      </main>

      <StickyCTA mode="app" />
    </div>
  );
}
