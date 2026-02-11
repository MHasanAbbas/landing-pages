export type DealRestaurant = {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  eta: string;
  deliveryFee: string;
  saveAmount: string;
  image: string;
};

export const hounslowDeals: DealRestaurant[] = [
  {
    id: "hounslow-zaytoon-grill",
    name: "Zaytoon Grill",
    cuisine: "Lebanese / Charcoal",
    rating: 4.8,
    eta: "20-30 min",
    deliveryFee: "\u00A31.49",
    saveAmount: "Save \u00A38",
    image: "/images/food-1.svg",
  },
  {
    id: "hounslow-cedar-flame",
    name: "Cedar Flame",
    cuisine: "Turkish / Kebab",
    rating: 4.7,
    eta: "25-35 min",
    deliveryFee: "\u00A31.99",
    saveAmount: "Save \u00A37",
    image: "/images/food-2.svg",
  },
  {
    id: "hounslow-noor-biryani",
    name: "Noor Biryani House",
    cuisine: "Pakistani / Biryani",
    rating: 4.6,
    eta: "30-40 min",
    deliveryFee: "\u00A32.29",
    saveAmount: "Save \u00A39",
    image: "/images/food-3.svg",
  },
  {
    id: "hounslow-mina-shawarma",
    name: "Mina Shawarma",
    cuisine: "Shawarma / Street",
    rating: 4.7,
    eta: "20-30 min",
    deliveryFee: "\u00A31.29",
    saveAmount: "Save \u00A36",
    image: "/images/food-4.svg",
  },
  {
    id: "hounslow-olive-oak",
    name: "Olive & Oak",
    cuisine: "Mediterranean / Grill",
    rating: 4.5,
    eta: "25-35 min",
    deliveryFee: "\u00A31.79",
    saveAmount: "Save \u00A310",
    image: "/images/food-5.svg",
  },
];
