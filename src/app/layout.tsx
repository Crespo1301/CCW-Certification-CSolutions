import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://144academy.example.com"),
  title: {
    default: "144 Academy — California CCW Certification | Shasta County",
    template: "%s | 144 Academy",
  },
  description:
    "Shasta County approved CCW certification, renewals, and advanced firearms training in Redding, California. Initial CCW $300, renewal $175. Zoom and in-person courses available.",
  keywords: [
    "CCW California",
    "Shasta County CCW",
    "Redding firearms training",
    "concealed carry course",
    "NRA basic pistol",
    "advanced handgun training",
    "144 Academy",
  ],
  openGraph: {
    title: "144 Academy — California CCW Certification",
    description:
      "Shasta County approved CCW certification and advanced firearms training in Redding, California.",
    type: "website",
    images: [
      {
        url: "/images/owner-headshot-with-rifle.jpg",
        width: 1080,
        height: 1080,
        alt: "144 Academy lead instructor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "144 Academy — California CCW Certification",
    description:
      "Shasta County approved CCW certification and advanced firearms training.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
