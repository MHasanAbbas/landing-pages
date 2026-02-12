import RestaurantCard from "@/components/RestaurantCard";
import type { Restaurant } from "@/data/hounslow";

type RestaurantListProps = {
  id?: string;
  restaurants: Restaurant[];
  area: string;
  src: "hub" | "deals" | "ramadan";
  variant?: "default" | "ramadan";
};

export default function RestaurantList({
  id,
  restaurants,
  area,
  src,
  variant,
}: RestaurantListProps) {
  return (
    <div id={id} className="grid gap-5 md:grid-cols-2">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          area={area}
          src={src}
          variant={variant}
        />
      ))}
    </div>
  );
}
