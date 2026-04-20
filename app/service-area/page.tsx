import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { serviceCities, citySlug } from "@/lib/business";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "We serve Apple Valley, Eagan, Lakeville, Burnsville, Rosemount, Farmington, Bloomington, Edina, Inver Grove Heights, Mendota Heights, Prior Lake, and Richfield.",
};

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title="Serving Apple Valley and the south metro."
        subtitle="Local trucks, local plumbers, faster response. We live here — it shows up in the details."
        crumbs={[{ label: "Home", href: "/" }, { label: "Service Area" }]}
      />

      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Where we work</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-brand-800 sm:text-4xl">
              12 towns. One phone number.
            </h2>
            <p className="mt-4 text-slate-600">
              Tap your city for a page tailored to local construction styles, typical issues, and response times.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {serviceCities.map((c) => (
                <li key={c}>
                  <Link
                    href={`/service-area/${citySlug(c)}`}
                    className="group flex items-center justify-between rounded-xl bg-white p-3 ring-1 ring-slate-100 hover:ring-brand-200"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-brand-500" />
                      <span className="text-sm font-medium text-brand-800">{c}, MN</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-brand-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-slate-100">
              <Image
                src="/images/maps-services.jpg"
                alt="Apple Valley Plumbing service area map"
                width={1400}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
