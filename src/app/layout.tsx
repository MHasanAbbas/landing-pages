import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Totalee Halal",
    template: "%s | Totalee Halal",
  },
  description:
    "Halal-only food delivery with verified halal restaurants and stores across London.",
  metadataBase: new URL("https://totaleehalal.co.uk"),
  openGraph: {
    title: "Totalee Halal",
    description:
      "Halal-only food delivery with verified halal restaurants and stores across London.",
    images: ["/brand/totalee-mockup.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Totalee Halal",
    description:
      "Halal-only food delivery with verified halal restaurants and stores across London.",
    images: ["/brand/totalee-mockup.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
