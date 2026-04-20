import Link from "next/link";
import Image from "next/image";
import { Phone, ShieldCheck, Clock, Star } from "lucide-react";
import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-water">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div className="container-page relative grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7 animate-fade-up">
          <p className="eyebrow">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent-500" />
            Same-day service · Licensed {business.license}
          </p>
          <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.05] text-brand-800 sm:text-5xl lg:text-6xl">
            Apple Valley&apos;s trusted plumber for the jobs that can&apos;t wait.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            {business.tagline}. Family-owned since {business.founded}. Upfront pricing, honest recommendations, and the kind of clean install you&apos;d want in your own home.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${business.phoneTel}`} className="btn-primary text-base">
              <Phone className="h-5 w-5" />
              Call {business.phone}
            </a>
            <Link href="/contact" className="btn-secondary text-base">
              Schedule Online
            </Link>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 flex-none text-brand-500" />
              <div>
                <dt className="font-semibold text-brand-800">Licensed &amp; insured</dt>
                <dd className="text-slate-500">MN #{business.license}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 flex-none text-brand-500" />
              <div>
                <dt className="font-semibold text-brand-800">Same-day service</dt>
                <dd className="text-slate-500">Most repairs</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Star className="h-5 w-5 flex-none text-brand-500" />
              <div>
                <dt className="font-semibold text-brand-800">Five-star rated</dt>
                <dd className="text-slate-500">Since {business.founded}</dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-brand-100">
            <Image
              src="/images/apple-tech.png"
              alt="Apple Valley Plumbing technician"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-contain p-6"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-soft ring-1 ring-slate-100 sm:block">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-800">Five-star reviews</p>
                <p className="text-xs text-slate-500">From your neighbors in the south metro</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 top-8 hidden rounded-2xl bg-brand-800 p-4 text-white shadow-soft lg:block">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-200">Emergency?</p>
            <a href={`tel:${business.phoneTel}`} className="mt-1 block text-lg font-bold">
              {business.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
