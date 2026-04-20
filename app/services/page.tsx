import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/ServicesGrid";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Plumbing Services",
  description:
    "Full-service residential plumbing across Apple Valley and the south metro: water heaters, drain cleaning, sewer line repair, gas lines, repiping, sump pumps, and emergency service.",
};

export default function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Residential plumbing, done right the first time."
        subtitle="From a dripping faucet to a whole-home repipe, everything we do is licensed, inspected, and backed by a workmanship warranty."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <ServicesGrid compact />
      <CTABanner title="Not sure which service you need?" body="Call us. We will ask the right questions and give you an honest recommendation before we roll a truck." />
    </>
  );
}
