import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import CouponsTeaser from "@/components/CouponsTeaser";
import HomeContactSection from "@/components/HomeContactSection";
import { business, serviceCities, citySlug } from "@/lib/business";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid />

      <section className="relative overflow-hidden bg-brand-900 py-20 text-white">
        <div className="absolute inset-0 bg-grid opacity-10" aria-hidden />
        <div className="container-page relative grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] ring-4 ring-brand-800">
              <Image
                src="/images/about-us.jpg"
                alt="Apple Valley Plumbing team"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow bg-brand-800 text-brand-100 ring-brand-700">Meet the owner</p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Hi, I&apos;m {business.owner}. I started this company to do plumbing the right way.
            </h2>
            <p className="mt-4 text-brand-100">
              After years in the trade, I saw too many neighbors get rushed through bad quotes and sloppy installs. Apple Valley Plumbing runs on three rules: show up when we say we will, explain every option before we pick up a tool, and leave your home cleaner than we found it.
            </p>
            <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              {[
                "Licensed Minnesota master plumber",
                `Serving the south metro since ${business.founded}`,
                "Flat-rate, upfront pricing on every job",
                "Workmanship warranty on every install",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-400" />
                  <span className="text-brand-100">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn bg-white text-brand-800 hover:bg-brand-50">
                About the company
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${business.phoneTel}`}
                className="btn bg-white/10 text-white ring-1 ring-inset ring-white/30 hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                {business.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Where we work</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-brand-800 sm:text-4xl">
              Local to Apple Valley. Across the south metro.
            </h2>
            <p className="mt-4 text-slate-600">
              We live here. That means faster response, better traffic-aware routing, and plumbers who know which towns have cast iron mains and which are on newer PVC.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-y-2 text-sm">
              {serviceCities.map((c) => (
                <li key={c}>
                  <Link
                    href={`/service-area/${citySlug(c)}`}
                    className="inline-flex items-center gap-1 text-brand-700 hover:text-brand-500"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
                    {c}, MN
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/service-area" className="btn-secondary mt-8">
              See full service area
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative lg:col-span-7">
            <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-slate-100">
              <Image
                src="/images/maps-services.jpg"
                alt="Apple Valley Plumbing service area map"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <CouponsTeaser />
      <HomeContactSection />
      <CTABanner />
    </>
  );
}
