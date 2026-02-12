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
