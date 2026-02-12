export type Restaurant = {
  id: string;
  name: string;
  cuisine: string[];
  rating: number;
  eta: string;
  deliveryFee: string;
  offerTitle: string;
  offerSubtitle: string;
  image: string;
};

const GBP = "\u00a3";

const images = [
  "/restaurants/food-1.svg",
  "/restaurants/food-2.svg",
  "/restaurants/food-3.svg",
  "/restaurants/food-4.svg",
  "/restaurants/food-5.svg",
];

export const hounslowDeals: Restaurant[] = [
  {
    id: "hounslow-lahori-karahi",
    name: "Hounslow Lahori Karahi",
    cuisine: ["Pakistani", "Punjabi"],
    rating: 4.8,
    eta: "20-30 min",
    deliveryFee: `${GBP}1.49`,
    offerTitle: "30% OFF",
    offerSubtitle: `Save ${GBP}8`,
    image: images[0],
  },
  {
    id: "hounslow-hyderabad-house",
    name: "Hyderabad House",
    cuisine: ["Hyderabadi", "Biryani"],
    rating: 4.7,
    eta: "25-35 min",
    deliveryFee: `${GBP}1.99`,
    offerTitle: "30% OFF",
    offerSubtitle: `Save ${GBP}10`,
    image: images[1],
  },
  {
    id: "hounslow-kings-darbar",
    name: "Kings Darbar",
    cuisine: ["Asian", "Curry"],
    rating: 4.6,
    eta: "30-40 min",
    deliveryFee: `${GBP}2.29`,
    offerTitle: "30% OFF",
    offerSubtitle: `Save ${GBP}7`,
    image: images[2],
  },
  {
    id: "hounslow-sahara-grill",
    name: "Sahara Grill",
    cuisine: ["Grill", "Kebabs"],
    rating: 4.5,
    eta: "20-30 min",
    deliveryFee: `${GBP}1.79`,
    offerTitle: "30% OFF",
    offerSubtitle: `Save ${GBP}6`,
    image: images[3],
  },
  {
    id: "hounslow-biryani-house",
    name: "Biryani House",
    cuisine: ["Biryani", "Family packs"],
    rating: 4.7,
    eta: "25-35 min",
    deliveryFee: `${GBP}1.89`,
    offerTitle: "30% OFF",
    offerSubtitle: `Save ${GBP}9`,
    image: images[4],
  },
];

export const hounslowRamadan: Restaurant[] = [
  {
    id: "hounslow-lahori-karahi-ramadan",
    name: "Hounslow Lahori Karahi",
    cuisine: ["Pakistani", "Punjabi"],
    rating: 4.8,
    eta: "20-30 min",
    deliveryFee: `${GBP}1.49`,
    offerTitle: "Iftar Combo for 2",
    offerSubtitle: `${GBP}19.99`,
    image: images[0],
  },
  {
    id: "hounslow-hyderabad-house-ramadan",
    name: "Hyderabad House",
    cuisine: ["Hyderabadi", "Biryani"],
    rating: 4.7,
    eta: "25-35 min",
    deliveryFee: `${GBP}1.99`,
    offerTitle: "Family Box (serves 4)",
    offerSubtitle: `${GBP}39.99`,
    image: images[1],
  },
  {
    id: "hounslow-kings-darbar-ramadan",
    name: "Kings Darbar",
    cuisine: ["Asian", "Curry"],
    rating: 4.6,
    eta: "30-40 min",
    deliveryFee: `${GBP}2.29`,
    offerTitle: "Buy 1 Get 1 Free",
    offerSubtitle: "Selected items",
    image: images[2],
  },
  {
    id: "hounslow-sahara-grill-ramadan",
    name: "Sahara Grill",
    cuisine: ["Grill", "Kebabs"],
    rating: 4.5,
    eta: "20-30 min",
    deliveryFee: `${GBP}1.79`,
    offerTitle: `20% off ${GBP}15+`,
    offerSubtitle: "Limited Iftar slots",
    image: images[3],
  },
  {
    id: "hounslow-biryani-house-ramadan",
    name: "Biryani House",
    cuisine: ["Biryani", "Family packs"],
    rating: 4.7,
    eta: "25-35 min",
    deliveryFee: `${GBP}1.89`,
    offerTitle: "Free dessert",
    offerSubtitle: "With Iftar meal",
    image: images[4],
  },
];
