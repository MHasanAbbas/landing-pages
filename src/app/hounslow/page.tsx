import type { Metadata } from "next";
import Link from "next/link";
import BrandHeader from "@/components/BrandHeader";
import Hero from "@/components/Hero";
import QuickTiles from "@/components/QuickTiles";
import RestaurantCard from "@/components/RestaurantCard";
import StickyCTA from "@/components/StickyCTA";
import FAQ from "@/components/FAQ";
import { hounslowDeals } from "@/data/hounslow";
import { absoluteUrl, appLinks, buildMetadata, ogImagePath } from "@/lib/seo";

const title = "Halal food delivery in Hounslow";
const description =
  "Verified halal-only restaurants & stores in Hounslow. Open and order in seconds with Totalee Halal.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/hounslow",
});

const quickTiles = [
  {
    title: "30% OFF first order",
    description: "30% OFF your first order (London-wide).",
    href: "/hounslow/deals",
  },
  {
    title: "Ramadan specials",
    description: "Family iftar bundles and limited-time Ramadan deals.",
    href: "/hounslow/ramadan-deals",
  },
  {
    title: "Top-rated picks",
    description: "Handpicked halal favorites across West London.",
  },
];

const steps = [
  {
    title: "Choose a restaurant",
    description: "Browse halal-only partners and pick a favorite.",
  },
  {
    title: "Open in the app",
    description: "We deep-link straight to the restaurant page.",
  },
  {
    title: "Order and track",
    description: "Checkout fast and track delivery in-app.",
  },
];

const faqs = [
  {
    question: "Is Totalee Halal verified?",
    answer: "Yes. Every partner is checked before going live in the app.",
  },
  {
    question: "How do I claim the Hounslow deals?",
    answer: "Tap a restaurant and the offer opens inside the app.",
  },
  {
    question: "Does Totalee Halal cover West London?",
    answer: "Yes, Hounslow and nearby West London areas are covered.",
  },
];

const trustLines = [
  "Verified halal-only restaurants & stores",
  "30% OFF your first order (London-wide)",
  "Open the restaurant directly in the app",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Totalee Halal",
  url: absoluteUrl("/hounslow"),
  image: absoluteUrl(ogImagePath),
  description,
  slogan: "Purity in a bag. Community at heart.",
  areaServed: "Hounslow, West London",
  serviceType: "Halal food delivery",
  sameAs: [appLinks.appStore, appLinks.playStore],
};

export default function HounslowHubPage() {
  return (
    <div className="relative min-h-screen pb-28">
      <div className="pointer-events-none absolute -left-40 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,_rgba(15,47,36,0.18),_transparent_65%)]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] -translate-y-1/3 translate-x-1/3 rounded-full bg-[radial-gradient(circle_at_center,_rgba(107,123,90,0.22),_transparent_65%)]" />

      <BrandHeader pageLabel="Hounslow" />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 pb-12 sm:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Hero
          title={title}
          subtitle="Verified halal-only restaurants & stores. Open and order in seconds."
          eyebrow="Hounslow area hub"
          badge="Halal-only delivery"
          actions={[
            { label: "See 30% OFF deals", href: "/hounslow/deals" },
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

        <QuickTiles tiles={quickTiles} />

        <section className="grid gap-4 rounded-3xl border border-white/70 bg-white/75 p-6 shadow-[0_18px_45px_-30px_rgba(15,47,36,0.55)] backdrop-blur md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-secondary)]">
              How it works
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[color:var(--brand-ink)]">
              Three quick steps to your order.
            </h2>
          </div>
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/70 bg-white/80 p-4"
            >
              <p className="text-sm font-semibold text-[color:var(--brand-ink)]">
                {step.title}
              </p>
              <p className="mt-2 text-sm text-[color:var(--brand-muted)]">
                {step.description}
              </p>
            </div>
          ))}
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-secondary)]">
                Top-rated picks
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[color:var(--brand-ink)]">
                Hounslow favorites ready in the app.
              </h2>
            </div>
            <Link
              href="/hounslow/deals"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-primary)]"
            >
              View all deals
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {hounslowDeals.slice(0, 3).map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                area="hounslow"
                src="hub"
              />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-[0_18px_45px_-30px_rgba(15,47,36,0.55)] backdrop-blur">
          <h2 className="text-2xl font-semibold text-[color:var(--brand-ink)]">
            Ordering halal food in Hounslow
          </h2>
          <p className="mt-3 text-sm text-[color:var(--brand-muted)]">
            From Hounslow High Street to nearby West London neighborhoods, Totalee
            Halal keeps ordering halal food fast, verified, and app-first.
          </p>
        </section>

        <FAQ title="Hounslow FAQs" items={faqs} />

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
