import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Phone, AlertTriangle, HelpCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { services, getService } from "@/lib/services";
import { business } from "@/lib/business";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return {};
  return {
    title: svc.title,
    description: svc.summary.slice(0, 160),
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  const related = services.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={svc.title}
        subtitle={svc.short}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: svc.title },
        ]}
      />

      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
                <svc.icon className="h-6 w-6" />
              </div>
              <p className="text-sm uppercase tracking-[0.18em] text-brand-500">What we do</p>
            </div>
            <h2 className="mt-5 font-display text-2xl font-bold text-brand-800 sm:text-3xl">
              {svc.summary.split(".")[0]}.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{svc.summary}</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {svc.bullets.map((b) => (
                <div key={b} className="flex items-start gap-3 rounded-xl bg-brand-50/60 p-4 ring-1 ring-brand-100">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-500" />
                  <span className="text-sm font-medium text-brand-800">{b}</span>
                </div>
              ))}
            </div>

            <h3 className="mt-14 font-display text-xl font-bold text-brand-800">
              <AlertTriangle className="mr-2 inline-block h-5 w-5 text-accent-500" />
              Signs you need us
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {svc.signs.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent-500" />
                  {s}
                </li>
              ))}
            </ul>

            <h3 className="mt-14 font-display text-xl font-bold text-brand-800">
              How we work
            </h3>
            <ol className="mt-5 space-y-4">
              {svc.process.map((p, i) => (
                <li key={p.title} className="flex gap-5 rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-800 font-display text-base font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold text-brand-800">{p.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h3 className="mt-14 font-display text-xl font-bold text-brand-800">
              <HelpCircle className="mr-2 inline-block h-5 w-5 text-brand-500" />
              Frequently asked
            </h3>
            <dl className="mt-5 divide-y divide-slate-100 rounded-2xl ring-1 ring-slate-100">
              {svc.faq.map((f) => (
                <div key={f.q} className="p-6">
                  <dt className="font-display text-base font-semibold text-brand-800">{f.q}</dt>
                  <dd className="mt-2 text-sm text-slate-600">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 p-6 text-white shadow-soft">
                <p className="text-xs uppercase tracking-[0.18em] text-brand-200">Ready to schedule?</p>
                <p className="mt-2 font-display text-xl font-bold">Call {business.phone}</p>
                <p className="mt-2 text-sm text-brand-100">
                  Most appointments booked same-day. Two-hour dispatch for emergencies.
                </p>
                <a href={`tel:${business.phoneTel}`} className="btn-primary mt-5 w-full">
                  <Phone className="h-4 w-4" />
                  Call now
                </a>
                <Link href="/contact" className="btn mt-3 w-full bg-white/10 text-white ring-1 ring-inset ring-white/30 hover:bg-white/20">
                  Schedule online
                </Link>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
                <p className="font-display text-base font-semibold text-brand-800">Related services</p>
                <ul className="mt-4 space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/services/${r.slug}`}
                        className="group flex items-start gap-3 rounded-xl p-2 hover:bg-brand-50"
                      >
                        <r.icon className="mt-0.5 h-5 w-5 flex-none text-brand-500" />
                        <div>
                          <p className="text-sm font-semibold text-brand-800 group-hover:text-brand-700">
                            {r.title}
                          </p>
                          <p className="text-xs text-slate-500">{r.short}</p>
                        </div>
                        <ArrowRight className="ml-auto h-4 w-4 flex-none text-slate-300 group-hover:text-brand-500" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
