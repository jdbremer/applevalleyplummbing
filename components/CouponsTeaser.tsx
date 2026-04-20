import Link from "next/link";
import { Tag, ArrowRight, Phone } from "lucide-react";
import { coupons } from "@/lib/coupons";
import { business } from "@/lib/business";

export default function CouponsTeaser() {
  const featured = coupons.slice(0, 3);
  return (
    <section className="relative overflow-hidden py-20">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Save</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-brand-800 sm:text-4xl">
            Current coupons &amp; specials.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Mention the code when you schedule. Stacking savings is the easiest call we take all week.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((c) => (
            <div
              key={c.code}
              className="relative overflow-hidden rounded-3xl bg-white p-7 shadow-card ring-1 ring-slate-100"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-50" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                  <Tag className="h-3.5 w-3.5" />
                  Coupon
                </div>
                <p className="mt-2 font-display text-3xl font-bold text-brand-700">{c.value}</p>
                <p className="mt-1 font-display text-base font-semibold text-brand-800">{c.title}</p>
                <p className="mt-3 text-sm text-slate-600">{c.body}</p>
                <div className="mt-5 flex items-center justify-between border-t border-dashed border-slate-200 pt-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Code</p>
                    <p className="font-mono text-sm font-semibold text-brand-800">{c.code}</p>
                  </div>
                  <a href={`tel:${business.phoneTel}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-500">
                    <Phone className="h-3.5 w-3.5" />
                    Redeem
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/coupons" className="btn-secondary">
            See all coupons
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
