import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "About Us",
  description: `Apple Valley Plumbing Company has been family-owned and locally operated since ${business.founded}. Meet owner ${business.owner} and the values behind the company.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Family-owned plumbing, built on honest work."
        subtitle={`Apple Valley Plumbing Company was founded by ${business.owner} in ${business.founded} to bring honest, no-pressure plumbing to the south metro.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft ring-1 ring-slate-100">
              <Image
                src="/images/about-us.jpg"
                alt={`${business.owner}, owner of ${business.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow">Meet the owner</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-brand-800 sm:text-4xl">
              {business.owner} founded this company on a simple idea.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              After years in the trade, Greg saw too many neighbors paying too much for work that wasn&apos;t done right. Apple Valley Plumbing was founded in {business.founded} to offer the opposite: flat-rate honest pricing, clean work, and a plumber who explains every option instead of selling the most expensive one.
            </p>
            <p className="mt-4 text-slate-600">
              We live in the same neighborhoods we serve. That shapes everything — from how quickly we get there to how we leave your home when we&apos;re done.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                `Licensed master plumber · #${business.license}`,
                `Family-owned since ${business.founded}`,
                "Flat-rate pricing — no hourly surprises",
                "Workmanship warranty on every install",
                "Background-checked technicians",
                "Clean trucks, drop cloths, shoe covers",
              ].map((v) => (
                <div key={v} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-500" />
                  <span className="text-sm text-slate-700">{v}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${business.phoneTel}`} className="btn-primary">
                <Phone className="h-4 w-4" />
                {business.phone}
              </a>
              <Link href="/why-choose-us" className="btn-secondary">
                Why choose us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-50/60 py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Our values</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-brand-800 sm:text-4xl">
              Plumbing is our specialty. Service is our passion.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Educate, don't sell",
                body: "We explain the repair-vs-replace math so you make the call. We never pressure, and we never upsell for the sake of the ticket.",
              },
              {
                title: "Show up on time",
                body: "Appointments come with a tight window, not a four-hour mystery. If we're ever running late, you hear about it from us first.",
              },
              {
                title: "Leave it cleaner than we found it",
                body: "Floor protection, drop cloths, and a vacuum in the truck. When we leave, the only evidence we were there is that the plumbing works.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-slate-100">
                <p className="font-display text-xl font-bold text-brand-800">{v.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
