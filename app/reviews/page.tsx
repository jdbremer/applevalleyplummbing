import type { Metadata } from "next";
import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Five-star reviews from ${business.name} customers across Apple Valley, Eagan, Lakeville, and the south metro.`,
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Five stars, earned one appointment at a time."
        subtitle="We are grateful for every review. Here's what our customers across the south metro have to say."
        crumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
      />

      <section className="pt-10">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-gradient-to-br from-brand-50 to-white p-6 ring-1 ring-slate-100">
            <div className="flex items-center gap-4">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div>
                <p className="font-display text-lg font-bold text-brand-800">Five-star rated</p>
                <p className="text-sm text-slate-600">On Google and Facebook across the south metro</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.google.com/search?q=Apple+Valley+Plumbing+Company"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <ExternalLink className="h-4 w-4" />
                Google reviews
              </a>
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <ExternalLink className="h-4 w-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="pb-10">
        <div className="container-page">
          <div className="rounded-2xl bg-brand-50/60 p-8 text-center ring-1 ring-brand-100">
            <p className="font-display text-xl font-semibold text-brand-800">
              Had a great experience with us?
            </p>
            <p className="mt-2 text-sm text-slate-600">
              A review on Google or Facebook is the single kindest thing you can do for a small local business. Thank you.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href="https://www.google.com/search?q=Apple+Valley+Plumbing+Company"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Leave a Google review
              </a>
              <Link href="/contact" className="btn-secondary">
                Send us feedback privately
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
