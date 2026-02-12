import type { Metadata } from "next";
import BrandHeader from "@/components/BrandHeader";
import RestaurantList from "@/components/RestaurantList";
import StickyCTA from "@/components/StickyCTA";
import FAQ from "@/components/FAQ";
import Schema from "@/components/Schema";
import TrustRow from "@/components/TrustRow";
import Link from "next/link";
import {
  hounslowAiBlurb,
  hounslowDeals,
  hounslowEntitySummary,
  hounslowFaqs,
  hounslowPageMeta,
} from "@/data/hounslow";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildItemListSchema,
  buildMetadata,
} from "@/lib/seo";

const { title, description } = hounslowPageMeta.deals;

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/hounslow/deals",
});

const itemList = buildItemListSchema(
  "Hounslow halal food deals",
  hounslowDeals.map((restaurant) => ({
    name: restaurant.name,
    image: restaurant.image,
    cuisine: restaurant.cuisine,
    rating: restaurant.rating,
    ratingCount: restaurant.ratingCount,
    offerText: `${restaurant.offerBadge} - ${restaurant.offerDetail}`,
  }))
);

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "30% OFF first order",
  description: "30% OFF first order on verified halal restaurants in Hounslow.",
};

const schemaData = [
  buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Hounslow", path: "/hounslow" },
    { name: "Deals", path: "/hounslow/deals" },
  ]),
  itemList,
  offerSchema,
  buildFaqSchema(hounslowFaqs.deals),
];

export default function HounslowDealsPage() {
  return (
    <div className="relative min-h-screen pb-28">
      <div className="pointer-events-none absolute -left-32 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(15,47,36,0.18),_transparent_70%)]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] -translate-y-1/3 translate-x-1/3 rounded-full bg-[radial-gradient(circle_at_center,_rgba(107,123,90,0.22),_transparent_65%)]" />

      <BrandHeader pageLabel="Hounslow deals" variant="compact" showNav={false} />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 pb-12 sm:px-8">
        <Schema data={schemaData} />

        <section className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold leading-tight text-[color:var(--brand-ink)] sm:text-3xl">
            30% OFF halal in Hounslow
          </h1>
          <p className="text-sm text-[color:var(--brand-muted)]">
            Limited time offers — tap a restaurant to open in the app.
          </p>
          <TrustRow
            items={[
              { label: "Popular today" },
              { label: "Verified halal-only" },
              { label: "One-tap order" },
            ]}
          />
        </section>

        <RestaurantList
          id="restaurants"
          restaurants={hounslowDeals}
          area="hounslow"
          src="deals"
        />

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)]">
          <span>Looking for Ramadan bundles?</span>
          <Link
            href="/hounslow/ramadan-deals"
            className="rounded-full border border-[color:var(--brand-primary)]/15 bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-primary)] transition hover:border-transparent hover:bg-white"
          >
            See Ramadan deals
          </Link>
        </div>

        <FAQ title="Deals FAQs" items={hounslowFaqs.deals} />

        <section className="rounded-3xl border border-white/70 bg-[linear-gradient(135deg,_rgba(255,255,255,0.97)_0%,_rgba(255,255,255,0.88)_60%,_rgba(247,242,232,0.94)_100%)] p-6 shadow-[0_20px_50px_-32px_rgba(15,47,36,0.58)] backdrop-blur">
          <h2 className="text-2xl font-semibold text-[color:var(--brand-ink)]">
            Totalee Halal in Hounslow
          </h2>
          <p className="mt-3 text-sm text-[color:var(--brand-muted)]">
            {hounslowAiBlurb.deals}
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)]">
            {hounslowEntitySummary}
          </p>
        </section>
      </main>

      <StickyCTA mode="list" targetId="restaurants" />
    </div>
  );
}
