import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Star, MessageSquare } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import CTABanner from "@/components/CTABanner";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Leave Feedback",
  description: `Share your experience with ${business.name} — on Google, Facebook, or directly with us.`,
};

export default function FeedbackPage() {
  return (
    <>
      <PageHero
        eyebrow="Feedback"
        title="Tell us how we did."
        subtitle="A public review on Google or Facebook is the single kindest thing you can do for a small local business. If something wasn't right, we'd rather hear it from you first — fill out the form and we'll make it right."
        crumbs={[{ label: "Home", href: "/" }, { label: "Feedback" }]}
      />

      <section className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-gradient-to-br from-brand-50 to-white p-7 ring-1 ring-slate-100">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-4 font-display text-xl font-semibold text-brand-800">
                Leave a public review
              </p>
              <p className="mt-2 text-sm text-slate-600">
                If you had a good experience, a review helps your neighbors find us.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="https://www.google.com/search?q=Apple+Valley+Plumbing+Company"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full"
                >
                  <ExternalLink className="h-4 w-4" />
                  Review on Google
                </a>
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary w-full"
                >
                  <ExternalLink className="h-4 w-4" />
                  Review on Facebook
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-slate-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <p className="font-display text-lg font-semibold text-brand-800">Prefer to tell us privately?</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                The form on the right goes straight to the owner. If something went wrong, we&apos;d rather hear it from you first so we can make it right.
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Or call {business.owner} directly at{" "}
                <a href={`tel:${business.phoneTel}`} className="font-semibold text-brand-700 hover:text-brand-500">
                  {business.phone}
                </a>
                .
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-slate-100">
              <p className="font-display text-xl font-bold text-brand-800">Send feedback</p>
              <p className="mt-2 text-sm text-slate-600">
                Good, bad, or in-between — we read every one.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Thanks for your time." body="Whether you leave a review or not, we appreciate you trusting us with your home." />
    </>
  );
}
