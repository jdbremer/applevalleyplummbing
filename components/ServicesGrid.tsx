import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";

export default function ServicesGrid({ compact = false }: { compact?: boolean }) {
  return (
    <section className="relative py-20">
      {!compact && (
        <div className="container-page mb-12 max-w-3xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-brand-800 sm:text-4xl">
            Every plumbing problem, one phone call.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Residential plumbing for the south metro — from a leaky faucet to a full repipe. Licensed, insured, and backed by a workmanship guarantee.
          </p>
        </div>
      )}

      <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group card flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
                <s.icon className="h-6 w-6" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all group-hover:text-brand-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-brand-800 group-hover:text-brand-700">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.short}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
