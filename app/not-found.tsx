import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { business } from "@/lib/business";

export default function NotFound() {
  return (
    <section className="bg-water">
      <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="eyebrow">404 · Page not found</p>
        <h1 className="mt-5 font-display text-4xl font-bold text-brand-800 sm:text-5xl">
          This page sprung a leak.
        </h1>
        <p className="mt-4 max-w-xl text-slate-600">
          The page you&apos;re looking for moved or never existed. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            <Home className="h-4 w-4" />
            Back home
          </Link>
          <a href={`tel:${business.phoneTel}`} className="btn-secondary">
            <Phone className="h-4 w-4" />
            Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
