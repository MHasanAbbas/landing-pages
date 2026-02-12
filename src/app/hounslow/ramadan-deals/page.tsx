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
  hounslowEntitySummary,
  hounslowFaqs,
  hounslowPageMeta,
  hounslowRamadan,
} from "@/data/hounslow";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildItemListSchema,
  buildMetadata,
} from "@/lib/seo";

const { title, description } = hounslowPageMeta.ramadan;

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/hounslow/ramadan-deals",
});

const itemList = buildItemListSchema(
  "Hounslow Ramadan deals",
  hounslowRamadan.map((restaurant) => ({
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
  name: "Ramadan deals",
  description: "Ramadan bundles and limited-time Iftar offers in Hounslow.",
};

const schemaData = [
  buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Hounslow", path: "/hounslow" },
    { name: "Ramadan deals", path: "/hounslow/ramadan-deals" },
  ]),
  itemList,
  offerSchema,
  buildFaqSchema(hounslowFaqs.ramadan),
];

export default function HounslowRamadanDealsPage() {
  return (
    <div className="relative min-h-screen pb-28">
      <div className="pointer-events-none absolute -left-32 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(15,47,36,0.18),_transparent_70%)]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] -translate-y-1/3 translate-x-1/3 rounded-full bg-[radial-gradient(circle_at_center,_rgba(201,151,43,0.22),_transparent_65%)]" />

      <BrandHeader pageLabel="Ramadan deals" variant="compact" showNav={false} />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 pb-12 sm:px-8">
        <Schema data={schemaData} />

        <section className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold leading-tight text-[color:var(--brand-ink)] sm:text-3xl">
            Ramadan deals in Hounslow
          </h1>
          <p className="text-sm text-[color:var(--brand-muted)]">
            Limited time offers — tap a restaurant to open in the app.
          </p>
          <TrustRow
            items={[
              { label: "Top picks" },
              { label: "Verified halal-only" },
              { label: "One-tap order" },
            ]}
          />
        </section>

        <RestaurantList
          id="restaurants"
          restaurants={hounslowRamadan}
          area="hounslow"
          src="ramadan"
          variant="ramadan"
        />

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)]">
          <span>Want 30% OFF first order?</span>
          <Link
            href="/hounslow/deals"
            className="rounded-full border border-[color:var(--brand-primary)]/15 bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-primary)] transition hover:border-transparent hover:bg-white"
          >
            See 30% OFF deals
          </Link>
        </div>

        <FAQ title="Ramadan FAQs" items={hounslowFaqs.ramadan} />

        <section className="rounded-3xl border border-white/70 bg-[linear-gradient(135deg,_rgba(255,255,255,0.97)_0%,_rgba(255,255,255,0.88)_60%,_rgba(247,242,232,0.94)_100%)] p-6 shadow-[0_20px_50px_-32px_rgba(15,47,36,0.58)] backdrop-blur">
          <h2 className="text-2xl font-semibold text-[color:var(--brand-ink)]">
            Totalee Halal in Hounslow
          </h2>
          <p className="mt-3 text-sm text-[color:var(--brand-muted)]">
            {hounslowAiBlurb.ramadan}
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
