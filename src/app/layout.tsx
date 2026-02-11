import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Totalee Halal | Hounslow Deals",
    template: "%s | Totalee Halal",
  },
  description:
    "Exclusive halal food deals in Hounslow. Open the restaurant in the app to claim 30% OFF.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Totalee Halal | Hounslow Deals",
    description:
      "Exclusive halal food deals in Hounslow. Open the restaurant in the app to claim 30% OFF.",
    images: ["/brand/totalee-mockup.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Totalee Halal | Hounslow Deals",
    description:
      "Exclusive halal food deals in Hounslow. Open the restaurant in the app to claim 30% OFF.",
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
      <body className={`${manrope.variable} ${fraunces.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
