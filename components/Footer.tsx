import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter } from "lucide-react";
import { business, serviceCities, citySlug } from "@/lib/business";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="mt-20 bg-brand-900 text-brand-100">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-brand-700/60">
              <Image src="/images/appleicon.png" alt={business.name} fill sizes="48px" className="object-cover" />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-white">{business.shortName}</p>
              <p className="text-xs text-brand-200">{business.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-200">
            Family-owned, licensed, and insured. Serving Apple Valley and the south metro with honest, same-day plumbing since {business.founded}.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={business.social.facebook}
              aria-label="Facebook"
              className="rounded-full bg-brand-800 p-2 text-brand-100 hover:bg-brand-700 hover:text-white"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={business.social.twitter}
              aria-label="Twitter"
              className="rounded-full bg-brand-800 p-2 text-brand-100 hover:bg-brand-700 hover:text-white"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-800/70 px-4 py-2 text-xs">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            License {business.license} · MN Licensed &amp; Insured
          </div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Services</h4>
          <ul className="mt-4 grid gap-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-brand-200 hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Service Area</h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {serviceCities.map((c) => (
              <li key={c}>
                <Link
                  href={`/service-area/${citySlug(c)}`}
                  className="text-brand-200 hover:text-white"
                >
                  {c}, MN
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`tel:${business.phoneTel}`} className="flex items-start gap-2 text-brand-200 hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 flex-none" />
                {business.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="flex items-start gap-2 text-brand-200 hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 flex-none" />
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2 text-brand-200">
              <MapPin className="mt-0.5 h-4 w-4 flex-none" />
              <span>
                {business.address.street}
                <br />
                {business.address.city}, {business.address.state} {business.address.zip}
              </span>
            </li>
            <li className="flex items-start gap-2 text-brand-200">
              <Clock className="mt-0.5 h-4 w-4 flex-none" />
              <span>
                Mon–Fri 7a–6p
                <br />
                Sat 8a–4p
                <br />
                24/7 Emergency
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800/80">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-brand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/feedback" className="hover:text-white">
              Leave a Review
            </Link>
            <Link href="/news" className="hover:text-white">
              News
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
