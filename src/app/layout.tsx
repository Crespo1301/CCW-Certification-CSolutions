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
  metadataBase: new URL("https://training-template.example.com"),
  title: {
    default: "Defense Training Template | CCW and Firearms Training",
    template: "%s | Defense Training Template",
  },
  description:
    "Reusable landing-page template for CCW certification, firearms instruction, and range-based training businesses.",
  keywords: [
    "CCW website template",
    "firearms training website",
    "certification landing page",
    "concealed carry course site",
    "training business template",
  ],
  openGraph: {
    title: "Defense Training Template",
    description:
      "Reusable landing-page template for certification and firearms training businesses.",
    type: "website",
    images: [
      {
        url: "/images/template-placeholder.svg",
        width: 1080,
        height: 1080,
        alt: "Defense training template placeholder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Defense Training Template",
    description:
      "Reusable landing-page template for certification and training businesses.",
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
