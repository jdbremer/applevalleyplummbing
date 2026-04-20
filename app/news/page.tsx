import type { Metadata } from "next";
import Link from "next/link";
import { Calendar } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "News & Tips",
  description:
    "Plumbing news, seasonal tips, and maintenance advice from Apple Valley Plumbing Company — built for Minnesota homes.",
};

const posts = [
  {
    slug: "winterize-pipes-minnesota",
    date: "November",
    title: "Five minutes of winterizing that saves a $10,000 burst pipe",
    excerpt:
      "Where to look, what to shut off, and a simple foam-sleeve trick that protects the two pipes most likely to freeze in a south metro home.",
  },
  {
    slug: "water-heater-signs",
    date: "October",
    title: "Four signs your water heater is two weeks from dying",
    excerpt:
      "Rumbling, rusty water, a pilot that won't stay lit, and one sneaky sign almost nobody looks for.",
  },
  {
    slug: "drain-cleaning-mistake",
    date: "September",
    title: "Why the drain cleaner under your sink makes things worse",
    excerpt:
      "Grocery-store drain chemicals damage older cast iron, mask real problems, and can actually void some drain-cleaning warranties.",
  },
  {
    slug: "sump-pump-backup",
    date: "August",
    title: "If your sump pump loses power during a storm, does it matter?",
    excerpt:
      "Battery vs. water-powered backups — how to choose for a Minnesota basement that actually stays dry.",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Tips"
        title="Practical tips from working plumbers."
        subtitle="No fluff. Just the things we wish every homeowner knew before they call."
        crumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
      />

      <section className="py-16">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.slug} className="card">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
                <Calendar className="h-3.5 w-3.5" />
                {p.date}
              </p>
              <h2 className="mt-3 font-display text-xl font-semibold text-brand-800">
                <Link href={`/news#${p.slug}`} className="hover:text-brand-700">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.excerpt}</p>
            </article>
          ))}
        </div>
        <div className="container-page mt-10 text-center text-sm text-slate-500">
          More articles publishing soon.
        </div>
      </section>

      <CTABanner />
    </>
  );
}
