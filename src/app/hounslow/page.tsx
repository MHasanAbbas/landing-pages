import type { Metadata } from "next";
import Link from "next/link";
import BrandHeader from "@/components/BrandHeader";
import Hero from "@/components/Hero";
import QuickTiles from "@/components/QuickTiles";
import RestaurantList from "@/components/RestaurantList";
import StickyCTA from "@/components/StickyCTA";
import FAQ from "@/components/FAQ";
import Schema from "@/components/Schema";
import {
  hounslowAiBlurb,
  hounslowDeals,
  hounslowFaqs,
  hounslowLocalCopy,
} from "@/data/hounslow";
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
    description: "Family Iftar bundles and limited-time Ramadan deals.",
    href: "/hounslow/ramadan-deals",
  },
  {
    title: "Top-rated picks",
    description: "Handpicked halal favorites across West London.",
  },
];

const trustLines = [
  "Verified halal-only restaurants & stores",
  "30% OFF your first order (London-wide)",
  "Open the restaurant directly in the app",
];

const canonical = absoluteUrl("/hounslow");

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url: canonical,
    description,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hounslow",
        item: canonical,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Totalee Halal",
    url: canonical,
    description:
      "Totalee Halal is a halal-only food delivery app serving Hounslow, London.",
    areaServed: "Hounslow, London",
    logo: absoluteUrl(ogImagePath),
    sameAs: [appLinks.appStore, appLinks.playStore],
  },
];

export default function HounslowHubPage() {
  return (
    <div className="relative min-h-screen pb-28">
      <div className="pointer-events-none absolute -left-40 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,_rgba(15,47,36,0.18),_transparent_65%)]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] -translate-y-1/3 translate-x-1/3 rounded-full bg-[radial-gradient(circle_at_center,_rgba(107,123,90,0.22),_transparent_65%)]" />

      <BrandHeader pageLabel="Hounslow" />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 pb-12 sm:px-8">
        <Schema data={schemaData} />

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

        <section className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-secondary)]">
                Popular in Hounslow today
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[color:var(--brand-ink)]">
                Tap a restaurant to open it in the app.
              </h2>
            </div>
            <Link
              href="/hounslow/deals"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-primary)]"
            >
              View all deals
            </Link>
          </div>
          <RestaurantList
            id="restaurants"
            restaurants={hounslowDeals}
            area="hounslow"
            src="hub"
          />
        </section>

        <section className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-[0_18px_45px_-30px_rgba(15,47,36,0.55)] backdrop-blur">
          <h2 className="text-2xl font-semibold text-[color:var(--brand-ink)]">
            Ordering halal food in Hounslow
          </h2>
          <p className="mt-3 text-sm text-[color:var(--brand-muted)]">
            {hounslowLocalCopy}
          </p>
        </section>

        <FAQ title="Hounslow FAQs" items={hounslowFaqs.hub} />

        <section className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_18px_45px_-30px_rgba(15,47,36,0.55)] backdrop-blur">
          <h2 className="text-2xl font-semibold text-[color:var(--brand-ink)]">
            Totalee Halal in Hounslow
          </h2>
          <p className="mt-3 text-sm text-[color:var(--brand-muted)]">
            {hounslowAiBlurb.hub}
          </p>
        </section>
      </main>

      <StickyCTA mode="hub" targetId="restaurants" />
    </div>
  );
}
