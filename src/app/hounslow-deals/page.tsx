import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { hounslowDeals } from "@/data/hounslow-deals";

export const dynamic = "force-dynamic";

const appDownloadUrl = "https://example.com/app-download";

const title = "30% OFF Halal Food in Hounslow | Totalee Halal";
const description =
  "Exclusive halal food deals in Hounslow (TW3/TW4). Open the restaurant in the app to claim 30% OFF.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: "/brand/totalee-mockup.png",
        width: 1024,
        height: 768,
        alt: "Totalee Halal app preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/brand/totalee-mockup.png"],
  },
};

const proofStats = [
  {
    label: "Avg rating",
    value: "4.8/5",
  },
  {
    label: "Typical ETA",
    value: "20-35 min",
  },
  {
    label: "Active deals",
    value: `${hounslowDeals.length} restaurants`,
  },
];

const valueProps = [
  {
    title: "Verified halal kitchens",
    description:
      "Every restaurant is checked before it appears on Totalee Halal.",
  },
  {
    title: "30% OFF applied in-app",
    description:
      "Tap a deal and the discount is ready on the restaurant page.",
  },
  {
    title: "Local delivery focus",
    description:
      "Hounslow-first coverage means shorter routes and faster meals.",
  },
];

const steps = [
  {
    step: "01",
    title: "Pick a deal",
    description: "Choose a Hounslow restaurant you love.",
  },
  {
    step: "02",
    title: "Open in the app",
    description: "We deep-link directly into Totalee Halal.",
  },
  {
    step: "03",
    title: "Order in minutes",
    description: "Checkout fast and track delivery in-app.",
  },
];

const testimonials = [
  {
    quote:
      "The app opens straight to the deal. It is the fastest halal order I have made.",
    name: "Amina",
    role: "Hounslow local",
  },
  {
    quote:
      "Real savings, quick delivery, and every kitchen is halal verified. Done.",
    name: "Bilal",
    role: "TW3 resident",
  },
];

const faqs = [
  {
    question: "Is every restaurant halal verified?",
    answer: "Yes, Totalee Halal only lists verified halal kitchens.",
  },
  {
    question: "How do I claim the 30% OFF offer?",
    answer: "Tap a restaurant card and the offer opens in the app.",
  },
  {
    question: "Do these deals cover TW3 and TW4?",
    answer: "Yes, Hounslow deals cover nearby TW3 and TW4 areas.",
  },
];

const trustLine =
  "Verified halal kitchens \u2022 Local favorites \u2022 One-tap order in the app";

export default function HounslowDealsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-28">
      <div className="pointer-events-none absolute -left-40 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,_rgba(199,151,43,0.22),_transparent_65%)]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] -translate-y-1/3 translate-x-1/3 rounded-full bg-[radial-gradient(circle_at_center,_rgba(15,47,36,0.24),_transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(15,47,36,0.06)_0%,rgba(199,151,43,0.08)_45%,transparent_72%)]" />

      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-5 pb-6 pt-8 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-[#0f2f24]/20 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0f2f24]">
            Totalee Halal
          </span>
          <span className="rounded-full bg-[#c9972b]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b5b1f]">
            Hounslow deals
          </span>
        </div>
        <a
          href={appDownloadUrl}
          className="hidden items-center justify-center rounded-full bg-[#0f2f24] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#184336] sm:inline-flex"
        >
          Get 30% OFF
        </a>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 pb-12 sm:px-8">
        <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-6 animate-fade-up">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#c9972b]/30 bg-[#c9972b]/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b5b1f]">
                Limited time 30% OFF
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2a5a47]">
                TW3 / TW4 delivery
              </span>
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2a5a47]">
              Tap. Open. Order. Eat.
            </p>

            <h1 className="text-4xl font-semibold leading-tight text-[#101814] sm:text-5xl">
              Open the app and unlock 30% OFF halal food in Hounslow.
            </h1>
            <p className="text-lg text-[#3f4b45]">
              Your next halal meal is already discounted. Choose a restaurant,
              open Totalee Halal, and checkout in minutes.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={appDownloadUrl}
                className="inline-flex items-center justify-center rounded-full bg-[#0f2f24] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#184336]"
              >
                Get 30% OFF in the app
              </a>
              <a
                href="#deals"
                className="inline-flex items-center justify-center rounded-full border border-[#0f2f24]/15 bg-white/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#0f2f24] transition hover:border-transparent hover:bg-white"
              >
                See Hounslow deals
              </a>
            </div>

            <p className="text-sm text-[#3f4b45]">{trustLine}</p>

            <div className="grid gap-3 sm:grid-cols-3">
              {proofStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-[0_12px_30px_-22px_rgba(16,24,20,0.6)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2a5a47]">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#101814]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up animate-fade-up-delay-2">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[36px] border border-[#0f2f24]/10 bg-white/60" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/70 bg-white/80 p-4 shadow-[0_24px_60px_-30px_rgba(16,24,20,0.7)] backdrop-blur">
              <div className="absolute right-6 top-6 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2a5a47]">
                Tap to open in app
              </div>
              <Image
                src="/brand/totalee-mockup.png"
                alt="Totalee Halal app preview"
                width={1024}
                height={768}
                className="h-auto w-full rounded-3xl object-cover"
                priority
              />
              <div className="mt-4 rounded-2xl border border-[#0f2f24]/10 bg-white/90 px-4 py-3 text-sm text-[#3f4b45] shadow-[0_12px_30px_-24px_rgba(16,24,20,0.6)]">
                Claim the discount in-app. Order takes under 60 seconds.
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-[#0f2f24]/10 bg-[#0f2f24] p-6 text-white shadow-[0_25px_60px_-32px_rgba(15,47,36,0.8)] animate-fade-up animate-fade-up-delay-3">
          <div className="pointer-events-none absolute -right-24 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2),_transparent_65%)]" />
          <div className="pointer-events-none absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,_rgba(199,151,43,0.35),_transparent_65%)]" />
          <div className="relative grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f2e6c8]">
                Hounslow exclusive
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight">
                This is the fastest way to halal food in Hounslow. Tap once and
                the deal is live.
              </h2>
              <p className="mt-3 text-sm text-[#f7f1e6]">
                Totalee Halal opens the restaurant instantly, applies the
                discount, and keeps the order moving.
              </p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f2e6c8]">
                What you get
              </p>
              <div className="mt-4 space-y-3 text-sm text-[#f7f1e6]">
                {[
                  "Instant deep-link to the restaurant deal.",
                  "30% OFF applied on the menu screen.",
                  "Delivery updates inside the app.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#c9972b]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a
                href={appDownloadUrl}
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f2f24] transition hover:bg-[#f4efe6]"
              >
                Open Totalee Halal
              </a>
            </div>
          </div>
        </section>

        <section
          id="deals"
          className="flex flex-col gap-6 rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_20px_50px_-32px_rgba(16,24,20,0.65)] backdrop-blur"
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2a5a47]">
                Today in Hounslow
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[#101814]">
                Claim 30% OFF at these halal favorites
              </h2>
              <p className="mt-1 text-sm text-[#3f4b45]">
                Tap any restaurant to open the offer inside the app.
              </p>
            </div>
            <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2a5a47]">
              {hounslowDeals.length} restaurants
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {hounslowDeals.map((restaurant) => (
              <Link
                key={restaurant.id}
                href={`/go/${restaurant.id}?area=hounslow&src=deals`}
                aria-label={`Order ${restaurant.name} in the Totalee Halal app`}
                className="group block focus-visible:outline-none"
              >
                <article className="overflow-hidden rounded-3xl border border-white/80 bg-white shadow-[0_16px_40px_-26px_rgba(16,24,20,0.6)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-24px_rgba(16,24,20,0.7)] focus-visible:ring-2 focus-visible:ring-[#c9972b]">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={restaurant.image}
                      alt={`${restaurant.name} food`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                    <div className="absolute left-4 top-4 rounded-2xl bg-white/90 px-4 py-2 text-left shadow-md backdrop-blur">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c9972b]">
                        30% OFF
                      </p>
                      <p className="text-sm font-semibold text-[#101814]">
                        {restaurant.saveAmount}
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-[#101814]">
                          {restaurant.name}
                        </h3>
                        <p className="text-sm text-[#516158]">
                          {restaurant.cuisine}
                        </p>
                      </div>
                      <span className="rounded-full bg-[#f4efe6] px-3 py-1 text-xs font-semibold text-[#101814]">
                        {restaurant.rating} {"\u2605"}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-medium text-[#516158]">
                      <span>ETA {restaurant.eta}</span>
                      <span>Delivery {restaurant.deliveryFee}</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2a5a47]">
                        Limited time
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#0f2f24] px-4 py-2 text-xs font-semibold text-white transition group-hover:bg-[#2a5a47]">
                        Order in App {"\u2192"}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-4 rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_20px_50px_-32px_rgba(16,24,20,0.6)] backdrop-blur md:grid-cols-3">
          {valueProps.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/70 bg-white/80 p-4"
            >
              <p className="text-sm font-semibold text-[#101814]">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-[#516158]">{item.description}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_20px_50px_-32px_rgba(16,24,20,0.6)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2a5a47]">
              How it works
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#101814]">
              One tap from craving to checkout.
            </h2>
            <div className="mt-5 space-y-4">
              {steps.map((step) => (
                <div
                  key={step.step}
                  className="flex items-start gap-4 rounded-2xl border border-white/70 bg-white/90 p-4"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f2f24] text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    {step.step}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#101814]">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm text-[#516158]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#0f2f24]/10 bg-[#f4efe6] p-6 shadow-[0_20px_50px_-32px_rgba(16,24,20,0.5)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2a5a47]">
              People in Hounslow
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#101814]">
              Proof that the app converts.
            </h2>
            <div className="mt-6 space-y-4">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-white/70 bg-white/90 p-4"
                >
                  <p className="text-sm text-[#3f4b45]">"{item.quote}"</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#2a5a47]">
                    {item.name} {"\u00B7"} {item.role}
                  </p>
                </div>
              ))}
            </div>
            <a
              href={appDownloadUrl}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#0f2f24] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#2a5a47]"
            >
              Open Totalee Halal
            </a>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-8 shadow-[0_20px_50px_-32px_rgba(16,24,20,0.6)] backdrop-blur">
          <div className="pointer-events-none absolute -right-20 -top-12 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,_rgba(199,151,43,0.25),_transparent_65%)]" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,_rgba(15,47,36,0.18),_transparent_65%)]" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2a5a47]">
                Ready to eat?
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#101814]">
                The deal is live. Open Totalee Halal and order now.
              </h2>
              <p className="mt-2 text-sm text-[#3f4b45]">
                Your discount is waiting on the restaurant page.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={appDownloadUrl}
                className="inline-flex items-center justify-center rounded-full bg-[#0f2f24] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#184336]"
              >
                Open Totalee Halal
              </a>
              <a
                href="#deals"
                className="inline-flex items-center justify-center rounded-full border border-[#0f2f24]/15 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#0f2f24] transition hover:border-transparent hover:bg-[#f4efe6]"
              >
                Browse deals
              </a>
            </div>
          </div>
        </section>

        <section className="grid gap-4 rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_20px_50px_-32px_rgba(16,24,20,0.6)] backdrop-blur md:grid-cols-3">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-white/70 bg-white/80 p-4"
            >
              <p className="text-sm font-semibold text-[#101814]">
                {item.question}
              </p>
              <p className="mt-2 text-sm text-[#516158]">{item.answer}</p>
            </div>
          ))}
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50">
        <div className="mx-auto flex w-full max-w-6xl px-5 pb-4 sm:px-8">
          <div className="w-full rounded-2xl border border-white/70 bg-white/90 p-3 shadow-[0_18px_45px_-20px_rgba(16,24,20,0.7)] backdrop-blur">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2a5a47]">
                  30% OFF today
                </p>
                <p className="text-sm font-semibold text-[#101814]">
                  Open Totalee Halal App to claim the deal
                </p>
              </div>
              <a
                href={appDownloadUrl}
                className="inline-flex items-center justify-center rounded-full bg-[#0f2f24] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#2a5a47]"
              >
                Open Totalee Halal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
