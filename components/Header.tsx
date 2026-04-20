"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { business } from "@/lib/business";
import { services } from "@/lib/services";

const mainNav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/service-area", label: "Service Area" },
  { href: "/about", label: "About" },
  { href: "/why-choose-us", label: "Why Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/coupons", label: "Coupons" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md ring-1 ring-slate-100">
      <div className="hidden bg-brand-800 text-white text-xs md:block">
        <div className="container-page flex items-center justify-between py-2">
          <p className="tracking-wide">
            Licensed &amp; Insured · License <span className="font-semibold">{business.license}</span> · Family owned since {business.founded}
          </p>
          <div className="flex items-center gap-6">
            <span className="opacity-80">Mon–Fri 7a–6p · Sat 8a–4p · 24/7 Emergency</span>
            <a href={`tel:${business.phoneTel}`} className="font-semibold hover:text-brand-100">
              {business.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-brand-100">
            <Image
              src="/images/appleicon.png"
              alt={business.name}
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg font-bold text-brand-800">Apple Valley Plumbing</p>
            <p className="text-xs text-slate-500">{business.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setDrop(true)}
                onMouseLeave={() => setDrop(false)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
                {drop && (
                  <div className="absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-2">
                    <div className="grid grid-cols-2 gap-1 rounded-2xl bg-white p-3 shadow-soft ring-1 ring-slate-100">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="flex items-start gap-3 rounded-xl p-3 hover:bg-brand-50"
                        >
                          <s.icon className="mt-0.5 h-5 w-5 flex-none text-brand-500" />
                          <div>
                            <p className="text-sm font-semibold text-brand-800">{s.title}</p>
                            <p className="text-xs text-slate-500">{s.short}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${business.phoneTel}`} className="btn-primary">
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>
        </div>

        <button
          aria-label="Open menu"
          className="rounded-full p-2 text-brand-800 hover:bg-brand-50 lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-brand-900/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[90%] overflow-y-auto bg-white p-6 shadow-soft">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-display text-lg font-bold text-brand-800">Menu</p>
              <button
                aria-label="Close menu"
                className="rounded-full p-2 text-brand-800 hover:bg-brand-50"
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-800 hover:bg-brand-50 hover:text-brand-700"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-slate-800 hover:bg-brand-50 hover:text-brand-700"
              >
                Contact
              </Link>
            </div>
            <div className="mt-6 border-t border-slate-100 pt-6">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Services</p>
              <div className="mt-3 flex flex-col gap-1">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
            <a
              href={`tel:${business.phoneTel}`}
              className="btn-primary mt-6 w-full"
              onClick={() => setOpen(false)}
            >
              <Phone className="h-4 w-4" />
              {business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
