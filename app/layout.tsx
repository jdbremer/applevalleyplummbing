import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { business } from "@/lib/business";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} | Licensed Plumber in Apple Valley, MN`,
    template: `%s | ${business.shortName}`,
  },
  description: `${business.tagline}. Licensed, insured, and family-owned since ${business.founded}. Same-day plumbing service in Apple Valley, Eagan, Lakeville, Burnsville, and the south metro. Call ${business.phone}.`,
  keywords: [
    "plumber Apple Valley",
    "plumber Eagan",
    "plumber Lakeville",
    "water heater repair Minnesota",
    "drain cleaning south metro",
    "emergency plumber",
    "burst pipe repair",
    "sewer line repair",
  ],
  authors: [{ name: business.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: business.siteUrl,
    siteName: business.name,
    title: `${business.name} — Licensed Plumber in Apple Valley, MN`,
    description: `${business.tagline}. Same-day service, upfront pricing, licensed and insured.`,
    images: [
      {
        url: "/images/apple-tech.png",
        width: 1200,
        height: 630,
        alt: business.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: business.name,
    description: business.tagline,
    images: ["/images/apple-tech.png"],
  },
  icons: {
    icon: "/images/appleicon.png",
    apple: "/images/appleicon.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f1c42",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="flex min-h-screen flex-col bg-white">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
