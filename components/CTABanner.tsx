import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { business } from "@/lib/business";

export default function CTABanner({
  title = "Ready when you are.",
  body = "Most appointments booked today, done today. Same honest work we would do in our own home.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 px-8 py-14 text-white shadow-soft sm:px-16">
          <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" aria-hidden />
          <div className="relative grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-200">
                Apple Valley · Eagan · Lakeville · Burnsville · Rosemount · Farmington
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
              <p className="mt-3 max-w-xl text-brand-100">{body}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <a href={`tel:${business.phoneTel}`} className="btn-primary">
                <Phone className="h-4 w-4" />
                {business.phone}
              </a>
              <Link href="/contact" className="btn bg-white/10 text-white ring-1 ring-inset ring-white/30 hover:bg-white/20">
                <CalendarCheck className="h-4 w-4" />
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
