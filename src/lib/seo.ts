import type { Metadata } from "next";

export const siteName = "Totalee Halal";
const canonicalBase =
  process.env.NEXT_PUBLIC_CANONICAL_BASE ??
  "https://www.totaleehalal.co.uk";
export const siteUrl = canonicalBase.replace(/\/$/, "");
export const ogImagePath = "/brand/totalee-mockup.png";

export const appLinks = {
  appStore: "https://apps.apple.com/gb/app/totalee-halal/id6502573216",
  playStore:
    "https://play.google.com/store/apps/details?id=com.totaleehalal.orderapp&hl=en_GB",
};

export const sameAsLinks: string[] = [];

type BuildMetaProps = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({ title, description, path }: BuildMetaProps) {
  const image = {
    url: ogImagePath,
    width: 1024,
    height: 768,
    alt: "Totalee Halal app preview",
  };
  const canonical = absoluteUrl(path);

  const metadata: Metadata = {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImagePath],
    },
  };

  return metadata;
}

export function absoluteUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildItemListSchema(
  name: string,
  items: {
    name: string;
    image: string;
    cuisine: string[];
    rating: number;
    ratingCount: number;
    offerText: string;
  }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Restaurant",
        name: item.name,
        image: absoluteUrl(item.image),
        servesCuisine: item.cuisine.join(", "),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hounslow",
          addressCountry: "GB",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: item.rating,
          ratingCount: item.ratingCount,
        },
        offers: {
          "@type": "Offer",
          description: item.offerText,
        },
      },
    })),
  };
}
