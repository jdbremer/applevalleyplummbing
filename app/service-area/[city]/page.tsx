import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import { business, serviceCities, citySlug } from "@/lib/business";
import { services } from "@/lib/services";

export function generateStaticParams() {
  return serviceCities.map((c) => ({ city: citySlug(c) }));
}

function resolveCity(slug: string) {
  return serviceCities.find((c) => citySlug(c) === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const name = resolveCity(city);
  if (!name) return {};
  return {
    title: `Plumber in ${name}, MN`,
    description: `Licensed, insured, same-day plumbing service in ${name}, MN. Water heaters, drain cleaning, sewer lines, burst pipes, gas lines, and more.`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const name = resolveCity(city);
  if (!name) notFound();

  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title={`Plumber in ${name}, MN`}
        subtitle={`Licensed and insured plumbing for ${name} homeowners. Same-day service, flat-rate pricing, and a team that lives and works in the south metro.`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Service Area", href: "/service-area" },
          { label: name },
        ]}
      />

      <section className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Local knowledge</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-brand-800 sm:text-4xl">
              We know the neighborhoods in {name}.
            </h2>
            <p className="mt-4 text-slate-600">
              Homes in {name} span decades of construction — from mid-century slabs with galvanized supply lines, to newer PEX builds on the edge of town. That matters when we diagnose a problem. A rust stain in a 1970s home tells a different story than the same stain in a 2015 build.
            </p>
            <p className="mt-4 text-slate-600">
              When you call, we dispatch the truck closest to {name} — usually the same day, and sometimes within the hour.
            </p>

            <h3 className="mt-10 font-display text-xl font-bold text-brand-800">
              Services available in {name}
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between rounded-xl bg-white p-4 ring-1 ring-slate-100 hover:ring-brand-200"
                >
                  <span className="flex items-center gap-3">
                    <s.icon className="h-5 w-5 text-brand-500" />
                    <span className="text-sm font-medium text-brand-800">{s.title}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-brand-500" />
                </Link>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="sticky top-32 rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 p-6 text-white shadow-soft">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-200">Book a plumber in {name}</p>
              <p className="mt-2 font-display text-xl font-bold">Call {business.phone}</p>
              <p className="mt-2 text-sm text-brand-100">
                Most same-day in {name}. Two-hour emergency dispatch.
              </p>
              <a href={`tel:${business.phoneTel}`} className="btn-primary mt-5 w-full">
                <Phone className="h-4 w-4" />
                Call now
              </a>
              <Link
                href="/contact"
                className="btn mt-3 w-full bg-white/10 text-white ring-1 ring-inset ring-white/30 hover:bg-white/20"
              >
                Schedule online
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Testimonials />
      <CTABanner title={`${name}, we're ready when you are.`} />
    </>
  );
}
