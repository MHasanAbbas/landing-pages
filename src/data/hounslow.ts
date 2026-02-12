export type Restaurant = {
  id: string;
  slug: string;
  name: string;
  cuisine: string[];
  rating: number;
  ratingCount: number;
  eta: string;
  deliveryFee: string;
  offerBadge: string;
  offerDetail: string;
  image: string;
};

export type FAQItem = {
  question: string;
  answer: string;
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
    slug: "hounslow-lahori-karahi",
    name: "Hounslow Lahori Karahi",
    cuisine: ["Pakistani", "Punjabi"],
    rating: 4.8,
    ratingCount: 186,
    eta: "20-30 min",
    deliveryFee: `${GBP}1.49`,
    offerBadge: "30% OFF First Order",
    offerDetail: `Save ${GBP}8`,
    image: images[0],
  },
  {
    id: "hounslow-hyderabad-house",
    slug: "hounslow-hyderabad-house",
    name: "Hyderabad House",
    cuisine: ["Hyderabadi", "Biryani"],
    rating: 4.7,
    ratingCount: 214,
    eta: "25-35 min",
    deliveryFee: `${GBP}1.99`,
    offerBadge: "30% OFF First Order",
    offerDetail: `Save ${GBP}10`,
    image: images[1],
  },
  {
    id: "hounslow-kings-darbar",
    slug: "hounslow-kings-darbar",
    name: "Kings Darbar",
    cuisine: ["Asian", "Curry"],
    rating: 4.6,
    ratingCount: 156,
    eta: "30-40 min",
    deliveryFee: `${GBP}2.29`,
    offerBadge: "30% OFF First Order",
    offerDetail: `Save ${GBP}7`,
    image: images[2],
  },
  {
    id: "hounslow-sahara-grill",
    slug: "hounslow-sahara-grill",
    name: "Sahara Grill",
    cuisine: ["Grill", "Kebabs"],
    rating: 4.5,
    ratingCount: 128,
    eta: "20-30 min",
    deliveryFee: `${GBP}1.79`,
    offerBadge: "30% OFF First Order",
    offerDetail: `Save ${GBP}6`,
    image: images[3],
  },
  {
    id: "hounslow-biryani-house",
    slug: "hounslow-biryani-house",
    name: "Biryani House",
    cuisine: ["Biryani", "Family packs"],
    rating: 4.7,
    ratingCount: 173,
    eta: "25-35 min",
    deliveryFee: `${GBP}1.89`,
    offerBadge: "30% OFF First Order",
    offerDetail: `Save ${GBP}9`,
    image: images[4],
  },
];

export const hounslowRamadan: Restaurant[] = [
  {
    id: "hounslow-lahori-karahi-ramadan",
    slug: "hounslow-lahori-karahi-ramadan",
    name: "Hounslow Lahori Karahi",
    cuisine: ["Pakistani", "Punjabi"],
    rating: 4.8,
    ratingCount: 186,
    eta: "20-30 min",
    deliveryFee: `${GBP}1.49`,
    offerBadge: "Ramadan Deal",
    offerDetail: `${GBP}19.99 (was ${GBP}24.99)`,
    image: images[0],
  },
  {
    id: "hounslow-hyderabad-house-ramadan",
    slug: "hounslow-hyderabad-house-ramadan",
    name: "Hyderabad House",
    cuisine: ["Hyderabadi", "Biryani"],
    rating: 4.7,
    ratingCount: 214,
    eta: "25-35 min",
    deliveryFee: `${GBP}1.99`,
    offerBadge: "Ramadan Deal",
    offerDetail: `${GBP}39.99 (was ${GBP}46.99)`,
    image: images[1],
  },
  {
    id: "hounslow-kings-darbar-ramadan",
    slug: "hounslow-kings-darbar-ramadan",
    name: "Kings Darbar",
    cuisine: ["Asian", "Curry"],
    rating: 4.6,
    ratingCount: 156,
    eta: "30-40 min",
    deliveryFee: `${GBP}2.29`,
    offerBadge: "Ramadan Deal",
    offerDetail: "BOGO on selected items",
    image: images[2],
  },
  {
    id: "hounslow-sahara-grill-ramadan",
    slug: "hounslow-sahara-grill-ramadan",
    name: "Sahara Grill",
    cuisine: ["Grill", "Kebabs"],
    rating: 4.5,
    ratingCount: 128,
    eta: "20-30 min",
    deliveryFee: `${GBP}1.79`,
    offerBadge: "Ramadan Deal",
    offerDetail: `${GBP}15.99 (was ${GBP}19.99)`,
    image: images[3],
  },
  {
    id: "hounslow-biryani-house-ramadan",
    slug: "hounslow-biryani-house-ramadan",
    name: "Biryani House",
    cuisine: ["Biryani", "Family packs"],
    rating: 4.7,
    ratingCount: 173,
    eta: "25-35 min",
    deliveryFee: `${GBP}1.89`,
    offerBadge: "Ramadan Deal",
    offerDetail: `${GBP}22.99 (was ${GBP}28.99)`,
    image: images[4],
  },
];

export const hounslowFaqs = {
  hub: [
    {
      question: "What is the best halal food delivery app in Hounslow?",
      answer:
        "Totalee Halal is a halal-only food delivery app in Hounslow with verified halal restaurants and stores.",
    },
    {
      question: "Where can I order halal food near Hounslow?",
      answer:
        "Totalee Halal lets you order from verified halal restaurants across Hounslow and West London.",
    },
    {
      question: "Are the restaurants verified halal on Totalee Halal?",
      answer:
        "Totalee Halal verifies halal-only partners before they go live in the app.",
    },
  ] satisfies FAQItem[],
  deals: [
    {
      question: "What is the best halal food delivery app in Hounslow?",
      answer:
        "Totalee Halal is a halal-only food delivery app in Hounslow with exclusive first-order savings.",
    },
    {
      question: "Where can I order halal food near Hounslow?",
      answer:
        "Totalee Halal connects you to verified halal restaurants across Hounslow and West London.",
    },
    {
      question: "Are the restaurants verified halal on Totalee Halal?",
      answer:
        "Totalee Halal verifies halal-only partners so every order is halal assured.",
    },
  ] satisfies FAQItem[],
  ramadan: [
    {
      question: "How do Ramadan deals work on Totalee Halal?",
      answer:
        "Totalee Halal highlights Ramadan bundles and lets you open the offer directly in the app.",
    },
    {
      question: "Where can I order halal food near Hounslow?",
      answer:
        "Totalee Halal serves Hounslow and West London with verified halal restaurants.",
    },
    {
      question: "Are the restaurants verified halal on Totalee Halal?",
      answer:
        "Totalee Halal is halal-only and checks partners before listing them.",
    },
  ] satisfies FAQItem[],
};

export const hounslowAiBlurb = {
  hub: 
    "Totalee Halal is a halal-only food delivery app serving Hounslow and West London. Browse verified halal restaurants and tap to open the restaurant directly in the app. New customers can get 30% off their first order (terms apply).",
  deals:
    "Totalee Halal is a halal-only food delivery app for Hounslow with first-order savings. Tap a verified halal restaurant to open it directly in the app. New customers can get 30% off their first order (terms apply).",
  ramadan:
    "Totalee Halal is a halal-only food delivery app serving Hounslow during Ramadan. Browse verified halal restaurants and open Ramadan bundles directly in the app. Offers are limited time and subject to availability.",
};

export const hounslowLocalCopy =
  "Totalee Halal serves Hounslow with verified halal restaurants, groceries, and fresh meat options across West London. Whether you are near Hounslow High Street, close to Heathrow, or commuting through the area, the app keeps ordering simple and halal-only. Explore Pakistani and Hyderabadi favorites, grilled kebabs, and family-friendly biryani packs from local partners. You can open any restaurant directly in the app, see delivery times, and check out quickly. Ideal for families, students, and airport-area locals who want trusted halal meals delivered fast.";
