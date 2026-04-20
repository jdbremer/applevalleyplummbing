import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { posts, formatPostDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "News & Media",
  description:
    "Plumbing news, seasonal tips, and maintenance advice from Apple Valley Plumbing Company — written for Minnesota homes.",
};

export default function NewsPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = sorted;

  return (
    <>
      <PageHero
        eyebrow="News & Media"
        title="Practical tips from working plumbers."
        subtitle="No fluff. Just the things we wish every homeowner knew before they call."
        crumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
      />

      <section className="py-16">
        <div className="container-page">
          {featured && (
            <Link
              href={`/news/${featured.slug}`}
              className="group mb-14 grid gap-8 rounded-3xl bg-gradient-to-br from-brand-50 to-white p-8 ring-1 ring-slate-100 transition hover:ring-brand-200 lg:grid-cols-12 lg:p-10"
            >
              <div className="lg:col-span-7">
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
                  Featured · {featured.category}
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold text-brand-800 sm:text-4xl group-hover:text-brand-700">
                  {featured.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-5 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatPostDate(featured.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readMinutes} min read
                  </span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:text-brand-500">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
              <div className="flex items-center lg:col-span-5">
                <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 shadow-soft" />
              </div>
            </Link>
          )}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link key={p.slug} href={`/news/${p.slug}`} className="group card flex flex-col">
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
                  {p.category}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-brand-800 group-hover:text-brand-700">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.excerpt}</p>
                <div className="mt-auto flex items-center gap-4 pt-6 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatPostDate(p.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {p.readMinutes} min
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
