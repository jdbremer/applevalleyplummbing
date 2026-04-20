import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  BadgeCheck,
  Clock4,
  HeartHandshake,
  Sparkles,
  Wallet,
  PhoneCall,
  Hammer,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Licensed, insured, family-owned since 2013. Upfront pricing, same-day service, workmanship warranty. See the ten reasons south metro homeowners call us first.",
};

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    body: `Minnesota master plumber license #${business.license}. Full liability and workers comp coverage on every crew.`,
  },
  {
    icon: BadgeCheck,
    title: "Upfront Flat-Rate Pricing",
    body: "You approve the total before we pick up a tool. No hourly meter running while we diagnose.",
  },
  {
    icon: Clock4,
    title: "Same-Day Service",
    body: "Most repairs booked today, done today. Two-hour emergency dispatch.",
  },
  {
    icon: HeartHandshake,
    title: "Family Owned",
    body: `${business.owner} founded the company in ${business.founded} and still works the field.`,
  },
  {
    icon: Sparkles,
    title: "Clean Work",
    body: "Floor protection, drop cloths, shoe covers. We leave your home cleaner than we found it.",
  },
  {
    icon: Wallet,
    title: "No-Pressure Options",
    body: "We always present a repair option alongside replacement, so you pick the solution that fits.",
  },
  {
    icon: PhoneCall,
    title: "A Human Answers",
    body: "When you call, you get a real person — often the owner — not a call center.",
  },
  {
    icon: Hammer,
    title: "Workmanship Warranty",
    body: "Every install is backed. If something isn't right, we come back and make it right.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="Eight reasons south metro homeowners call us first."
        subtitle="The fixtures and fittings are mostly the same across the industry. What changes is who installs them, how they treat your home, and what happens when something needs a second visit."
        crumbs={[{ label: "Home", href: "/" }, { label: "Why Choose Us" }]}
      />

      <section className="py-16">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-5 font-display text-lg font-semibold text-brand-800">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-50/50 py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Our guarantee</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-brand-800 sm:text-4xl">
              If you&apos;re not happy, we&apos;re not done.
            </h2>
            <p className="mt-4 text-slate-600">
              Every job we do comes with a simple promise: if the work isn&apos;t right, we come back and make it right — no invoice, no argument, no back-and-forth.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Schedule a visit
            </Link>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-slate-100">
            <p className="font-display text-xl font-semibold text-brand-800">
              What&apos;s covered
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                <span>Installs covered against workmanship defects — we come back and fix it at no charge.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                <span>30-day clean-flow warranty on main line drain clearings that pass camera inspection.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                <span>Manufacturer warranty transferred and registered on every major appliance install.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
