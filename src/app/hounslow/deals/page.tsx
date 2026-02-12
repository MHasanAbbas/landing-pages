import type { Metadata } from "next";
import Link from "next/link";
import BrandHeader from "@/components/BrandHeader";
import Hero from "@/components/Hero";
import RestaurantCard from "@/components/RestaurantCard";
import StickyCTA from "@/components/StickyCTA";
import FAQ from "@/components/FAQ";
import { hounslowDeals } from "@/data/hounslow";
import { absoluteUrl, appLinks, buildMetadata } from "@/lib/seo";

const title = "30% OFF halal food in Hounslow";
const description =
  "First order discount with verified halal-only restaurants & stores. Tap a restaurant to open in the app.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/hounslow/deals",
});

const trustLines = [
  "Verified halal-only restaurants & stores",
  "30% OFF your first order (London-wide)",
  "Open the restaurant directly in the app",
];

const whyTotalee = [
  "Verified halal-only partners",
  "Supports local halal businesses",
  "Easy ordering + tracking in app",
];

const faqs = [
  {
    question: "How do I claim 30% OFF?",
    answer: "Tap a restaurant card to open the offer in the app.",
  },
  {
    question: "Is every restaurant verified halal?",
    answer: "Yes. Totalee Halal is halal-only and verified.",
  },
  {
    question: "Do deals change daily?",
    answer: "Deals refresh often, so tap to lock in your offer.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Hounslow halal food deals",
  itemListElement: hounslowDeals.map((restaurant, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Restaurant",
      name: restaurant.name,
      url: absoluteUrl(
        `/go/${restaurant.id}?src=deals&area=hounslow`
      ),
      servesCuisine: restaurant.cuisine.join(", "),
      offers: {
        "@type": "Offer",
        description: `${restaurant.offerTitle} - ${restaurant.offerSubtitle}`,
      },
    },
  })),
};

export default function HounslowDealsPage() {
  return (
    <div className="relative min-h-screen pb-28">
      <div className="pointer-events-none absolute -left-32 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(15,47,36,0.18),_transparent_70%)]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] -translate-y-1/3 translate-x-1/3 rounded-full bg-[radial-gradient(circle_at_center,_rgba(107,123,90,0.22),_transparent_65%)]" />

      <BrandHeader pageLabel="Hounslow deals" />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 pb-12 sm:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Hero
          title={title}
          subtitle="First order discount - verified halal-only - tap a restaurant to open in the app."
          eyebrow="Top deals today"
          badge="First order • Limited time"
          actions={[
            { label: "Open Totalee Halal App", href: appLinks.appStore },
            {
              label: "See Ramadan deals",
              href: "/hounslow/ramadan-deals",
              variant: "secondary",
            },
          ]}
          image={{
            src: "/brand/totalee-mockup.png",
            alt: "Totalee Halal app preview",
          }}
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-3">
              {trustLines.map((line) => (
                <span
                  key={line}
                  className="rounded-full border border-[color:var(--brand-primary)]/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)]"
                >
                  {line}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={appLinks.appStore}
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-secondary)]"
              >
                App Store
              </a>
              <a
                href={appLinks.playStore}
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--brand-primary)]/15 bg-white/80 px-5 py-3 text-sm font-semibold text-[color:var(--brand-primary)] transition hover:border-transparent hover:bg-white"
              >
                Google Play
              </a>
            </div>
          </div>
        </Hero>

        <section className="flex flex-col gap-6" id="deals">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-secondary)]">
                Top deals today
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[color:var(--brand-ink)]">
                Tap a restaurant to open the offer in the app.
              </h2>
              <p className="mt-2 text-sm text-[color:var(--brand-muted)]">
                Exclusive 30% OFF savings from Hounslow halal favorites.
              </p>
            </div>
            <Link
              href="/hounslow"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-primary)]"
            >
              Back to hub
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {hounslowDeals.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                area="hounslow"
                src="deals"
              />
            ))}
          </div>
        </section>

        <section className="grid gap-4 rounded-3xl border border-white/70 bg-white/75 p-6 shadow-[0_18px_45px_-30px_rgba(15,47,36,0.55)] backdrop-blur md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-secondary)]">
              Why Totalee Halal
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[color:var(--brand-ink)]">
              Built for halal-only ordering.
            </h2>
          </div>
          {whyTotalee.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/70 bg-white/80 p-4"
            >
              <p className="text-sm font-semibold text-[color:var(--brand-ink)]">
                {item}
              </p>
            </div>
          ))}
        </section>

        <FAQ title="Deals FAQ" items={faqs} />

        <section className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_18px_45px_-30px_rgba(15,47,36,0.55)] backdrop-blur">
          <h2 className="text-2xl font-semibold text-[color:var(--brand-ink)]">
            What is Totalee Halal?
          </h2>
          <p className="mt-3 text-sm text-[color:var(--brand-muted)]">
            Totalee Halal is a halal-only food delivery app offering verified
            halal meals, groceries and fresh meat.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={appLinks.appStore}
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-secondary)]"
            >
              App Store
            </a>
            <a
              href={appLinks.playStore}
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--brand-primary)]/15 bg-white/80 px-5 py-3 text-sm font-semibold text-[color:var(--brand-primary)] transition hover:border-transparent hover:bg-white"
            >
              Google Play
            </a>
          </div>
        </section>
      </main>

      <StickyCTA />
    </div>
  );
}
