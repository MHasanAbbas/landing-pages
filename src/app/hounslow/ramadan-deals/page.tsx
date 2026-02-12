import type { Metadata } from "next";
import Link from "next/link";
import BrandHeader from "@/components/BrandHeader";
import Hero from "@/components/Hero";
import RestaurantCard from "@/components/RestaurantCard";
import StickyCTA from "@/components/StickyCTA";
import FAQ from "@/components/FAQ";
import { hounslowRamadan } from "@/data/hounslow";
import { absoluteUrl, appLinks, buildMetadata } from "@/lib/seo";

const title = "Ramadan Iftar deals in Hounslow";
const description =
  "Family boxes, Iftar combos, and limited-time offers. Tap to open in the app.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/hounslow/ramadan-deals",
});

const trustLines = [
  "Verified halal-only restaurants & stores",
  "30% OFF your first order (London-wide)",
  "Open the restaurant directly in the app",
];

const faqs = [
  {
    question: "Do Ramadan offers include Iftar items?",
    answer: "Many bundles include sides and desserts ready for Iftar.",
  },
  {
    question: "How do I open a Ramadan deal?",
    answer: "Tap a restaurant card to open it directly in the app.",
  },
  {
    question: "Is everything halal-only?",
    answer: "Yes. Totalee Halal is verified halal-only.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Hounslow Ramadan deals",
  itemListElement: hounslowRamadan.map((restaurant, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Restaurant",
      name: restaurant.name,
      url: absoluteUrl(
        `/go/${restaurant.id}?src=ramadan&area=hounslow`
      ),
      servesCuisine: restaurant.cuisine.join(", "),
      offers: {
        "@type": "Offer",
        description: `${restaurant.offerTitle} - ${restaurant.offerSubtitle}`,
      },
    },
  })),
};

export default function HounslowRamadanDealsPage() {
  return (
    <div className="relative min-h-screen pb-28">
      <div className="pointer-events-none absolute -left-32 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(15,47,36,0.18),_transparent_70%)]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] -translate-y-1/3 translate-x-1/3 rounded-full bg-[radial-gradient(circle_at_center,_rgba(201,151,43,0.22),_transparent_65%)]" />

      <BrandHeader pageLabel="Ramadan deals" />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 pb-12 sm:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Hero
          title={title}
          subtitle={description}
          eyebrow="Ramadan offers"
          badge="Limited-time Iftar"
          actions={[
            { label: "Open Totalee Halal App", href: appLinks.appStore },
            {
              label: "See 30% OFF deals",
              href: "/hounslow/deals",
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

        <section className="flex flex-col gap-6" id="ramadan">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-secondary)]">
                Ramadan deals in Hounslow
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[color:var(--brand-ink)]">
                Family boxes, Iftar combos, and limited-time offers.
              </h2>
              <p className="mt-2 text-sm text-[color:var(--brand-muted)]">
                Order early for Iftar delivery slots.
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
            {hounslowRamadan.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                area="hounslow"
                src="ramadan"
                variant="ramadan"
              />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[color:var(--brand-amber)]/20 bg-white/80 p-5 shadow-[0_18px_45px_-30px_rgba(15,47,36,0.55)] backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-amber)]">
            Best time to order
          </p>
          <p className="mt-2 text-sm text-[color:var(--brand-muted)]">
            Order early for Iftar delivery slots.
          </p>
        </section>

        <FAQ title="Ramadan FAQs" items={faqs} />

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
