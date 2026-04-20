import Image from "next/image";
import { ShieldCheck, BadgeCheck, Clock4, HeartHandshake } from "lucide-react";
import { business } from "@/lib/business";

const items = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    body: `Master plumber license #${business.license}. Every job inspected and to code.`,
  },
  {
    icon: BadgeCheck,
    title: "Upfront Pricing",
    body: "Flat-rate quotes before any work starts. No hourly surprises, ever.",
  },
  {
    icon: Clock4,
    title: "Same-Day Service",
    body: "Most repairs booked today, done today. Two-hour emergency dispatch.",
  },
  {
    icon: HeartHandshake,
    title: "Family Owned",
    body: `Owner Greg Kranz has been serving this community since ${business.founded}.`,
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <p className="font-display text-base font-semibold text-brand-800">{title}</p>
              <p className="mt-1 text-sm text-slate-600">{body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-4 pb-10 opacity-80">
        <Image
          src="/images/weaccept.png"
          alt="Accepted payment methods"
          width={260}
          height={40}
          className="h-8 w-auto"
        />
        <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
          Cash · Check · All major cards · Financing available
        </span>
      </div>
    </section>
  );
}
