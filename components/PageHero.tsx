import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 to-white">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div className="container-page relative py-16 sm:py-20">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-500">
              {crumbs.map((c, i) => (
                <li key={i} className="inline-flex items-center gap-1">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-brand-700">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-brand-700">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-brand-800 sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-slate-600">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
