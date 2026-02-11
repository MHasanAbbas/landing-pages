import Image from "next/image";
import Link from "next/link";
import type { PageType, Restaurant } from "@/data/areas";

type RestaurantCardProps = {
  restaurant: Restaurant;
  areaSlug: string;
  type: PageType;
};

export default function RestaurantCard({
  restaurant,
  areaSlug,
  type,
}: RestaurantCardProps) {
  const href = `/go/${restaurant.id}?area=${areaSlug}&type=${type}`;
  const badgeSub =
    type === "deals" ? restaurant.offerSubtitle : restaurant.price ?? "";

  return (
    <Link
      href={href}
      aria-label={`Order ${restaurant.name} in the Totalee Halal app`}
      className="group block focus-visible:outline-none"
    >
      <article className="overflow-hidden rounded-3xl border border-white/80 bg-white shadow-[0_16px_40px_-26px_rgba(20,32,27,0.6)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-24px_rgba(20,32,27,0.7)] focus-visible:ring-2 focus-visible:ring-[#d9822b]">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={restaurant.imagePath}
            alt={`${restaurant.name} hero`}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 600px"
          />
          <div className="absolute left-4 top-4 rounded-2xl bg-white/90 px-4 py-2 text-left shadow-md backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0f8b6a]">
              {restaurant.offerTitle}
            </p>
            <p className="text-sm font-semibold text-[#14201b]">{badgeSub}</p>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-[#14201b]">
                {restaurant.name}
              </h3>
              <p className="text-sm text-[#5b6b61]">{restaurant.cuisine}</p>
            </div>
            <span className="rounded-full bg-[#f6f2ea] px-3 py-1 text-xs font-semibold text-[#14201b]">
              {restaurant.rating} \u2605
            </span>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-medium text-[#5b6b61]">
            <span>ETA {restaurant.eta}</span>
            <span>Delivery {restaurant.deliveryFee}</span>
          </div>
          {type === "ramadan" ? (
            <p className="mt-3 text-sm text-[#5b6b61]">
              {restaurant.offerSubtitle}
            </p>
          ) : null}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-[#0f8b6a]">
              {type === "deals" ? "Save today" : "Bundle price"}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#14201b] px-4 py-2 text-xs font-semibold text-white transition group-hover:bg-[#0f8b6a]">
              Order in App \u2192
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
