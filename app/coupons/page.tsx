import type { Metadata } from "next";
import { Scissors, Phone, Tag } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Coupons & Specials",
  description: `Current discounts and specials from ${business.name}. Save on drain cleaning, water heater installs, and first-time service calls.`,
};

const coupons = [
  {
    value: "$25 OFF",
    title: "Any Service Call",
    body: "New customer? Save $25 on your first visit. One-time use, cannot be combined with other offers.",
    code: "NEWCUSTOMER25",
  },
  {
    value: "$75 OFF",
    title: "Water Heater Install",
    body: "Save $75 on a standard tank or tankless water heater installation. Mention the coupon when scheduling.",
    code: "HOTWATER75",
  },
  {
    value: "$50 OFF",
    title: "Main Line Drain Cleaning",
    body: "Save $50 on professional main sewer line cleaning with complimentary camera inspection.",
    code: "DRAIN50",
  },
  {
    value: "10% OFF",
    title: "Seniors & Veterans",
    body: "A small thank-you to our seniors and those who served. Ten percent off any plumbing service call.",
    code: "THANKYOU10",
  },
];

export default function CouponsPage() {
  return (
    <>
      <PageHero
        eyebrow="Coupons"
        title="Save on the work you were already planning to do."
        subtitle="Current specials for Apple Valley Plumbing customers. Mention the code when you schedule."
        crumbs={[{ label: "Home", href: "/" }, { label: "Coupons" }]}
      />

      <section className="py-16">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {coupons.map((c) => (
            <div
              key={c.code}
              className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-card ring-1 ring-slate-100"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-50" />
              <Scissors className="absolute left-6 top-6 h-4 w-4 rotate-45 text-slate-300" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                  <Tag className="h-3.5 w-3.5" />
                  Coupon
                </div>
                <p className="mt-2 font-display text-4xl font-bold text-brand-700">{c.value}</p>
                <p className="mt-1 font-display text-lg font-semibold text-brand-800">{c.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.body}</p>
                <div className="mt-5 flex items-center justify-between gap-4 border-t border-dashed border-slate-200 pt-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Code</p>
                    <p className="font-mono text-sm font-semibold text-brand-800">{c.code}</p>
                  </div>
                  <a href={`tel:${business.phoneTel}`} className="btn-primary">
                    <Phone className="h-4 w-4" />
                    Redeem
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container-page mt-10">
          <p className="text-center text-xs text-slate-500">
            Coupons valid for residential service in our service area. Cannot be combined. Offers subject to change.
          </p>
          <p className="mt-3 text-center text-sm text-slate-600">
            Have a question about a specific job?{" "}
            <Link href="/contact" className="font-semibold text-brand-600 hover:text-brand-500">
              Send us a note
            </Link>{" "}
            and we&apos;ll put together an estimate.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
