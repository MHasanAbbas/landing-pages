import Image from "next/image";
import Link from "next/link";
import type { Restaurant } from "@/data/hounslow";

type RestaurantCardProps = {
  restaurant: Restaurant;
  area: string;
  src: "hub" | "deals" | "ramadan";
  variant?: "default" | "ramadan";
};

export default function RestaurantCard({
  restaurant,
  area,
  src,
  variant = "default",
}: RestaurantCardProps) {
  const href = `/go/${restaurant.id}?area=${area}&src=${src}&target=${restaurant.slug}`;
  const isRamadan = variant === "ramadan";

  return (
    <Link
      href={href}
      aria-label={`Order ${restaurant.name} in the Totalee Halal app`}
      className="group block focus-visible:outline-none"
    >
      <article className="overflow-hidden rounded-3xl border border-white/80 bg-[linear-gradient(155deg,_rgba(255,255,255,0.98)_0%,_rgba(255,255,255,0.88)_60%,_rgba(247,242,232,0.92)_100%)] shadow-[0_18px_45px_-28px_rgba(15,47,36,0.58)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_55px_-24px_rgba(15,47,36,0.68)] focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ring)]">
        <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[16/10]">
          <Image
            src={restaurant.image}
            alt={`${restaurant.name} food`}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 520px"
          />
          <div
            className={`absolute left-3 top-3 rounded-2xl px-3 py-1 text-left shadow-md backdrop-blur sm:left-4 sm:top-4 sm:px-4 sm:py-2 ${
              isRamadan
                ? "bg-[color:var(--brand-amber)]/90 text-[#1f1605]"
                : "bg-white/95 text-[color:var(--brand-primary)]"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em]">
              {restaurant.offerBadge}
            </p>
            <p className="text-sm font-semibold">{restaurant.offerDetail}</p>
          </div>
        </div>
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-[color:var(--brand-ink)]">
                {restaurant.name}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {restaurant.cuisine.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[color:var(--brand-primary)]/10 bg-[color:var(--brand-bg)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-secondary)] sm:px-3 sm:py-1 sm:text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="rounded-full bg-[color:var(--brand-bg)] px-3 py-1 text-[11px] font-semibold text-[color:var(--brand-ink)] sm:text-xs">
              {restaurant.rating} rating
            </span>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-medium text-[color:var(--brand-muted)] sm:mt-4">
            <span>ETA {restaurant.eta}</span>
            <span>Delivery {restaurant.deliveryFee}</span>
          </div>
          <div className="mt-3 flex items-center justify-between sm:mt-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] sm:text-xs">
              Open the restaurant directly in the app
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-primary)] px-4 py-2 text-xs font-semibold text-white transition group-hover:bg-[color:var(--brand-secondary)]">
              Order in App &rarr;
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
