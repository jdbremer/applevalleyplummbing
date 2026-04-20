import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, ArrowRight, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { posts, getPost, formatPostDate } from "@/lib/posts";
import { business } from "@/lib/business";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const idx = posts.findIndex((p) => p.slug === post.slug);
  const prev = posts[idx - 1];
  const next = posts[idx + 1];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: business.name },
    publisher: {
      "@type": "Organization",
      name: business.name,
      logo: { "@type": "ImageObject", url: `${business.siteUrl}/images/applevalley.jpg` },
    },
    description: post.excerpt,
    articleSection: post.category,
  };

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: post.title },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="py-12">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <div className="flex items-center gap-5 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatPostDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readMinutes} min read
              </span>
            </div>

            <div className="mt-8 space-y-8 text-slate-700">
              <p className="font-display text-xl leading-relaxed text-brand-800">{post.excerpt}</p>

              {post.body.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="mt-10 font-display text-2xl font-bold text-brand-800">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs?.map((p, j) => (
                    <p key={j} className="mt-4 text-[17px] leading-relaxed">
                      {p}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-4 space-y-2.5">
                      {section.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-[17px] leading-relaxed">
                          <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-8">
              {prev ? (
                <Link href={`/news/${prev.slug}`} className="group text-sm">
                  <p className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                    <ArrowLeft className="h-3 w-3" /> Previous
                  </p>
                  <p className="mt-1 font-semibold text-brand-800 group-hover:text-brand-600">
                    {prev.title}
                  </p>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link href={`/news/${next.slug}`} className="group text-right text-sm">
                  <p className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                    Next <ArrowRight className="h-3 w-3" />
                  </p>
                  <p className="mt-1 font-semibold text-brand-800 group-hover:text-brand-600">
                    {next.title}
                  </p>
                </Link>
              )}
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 p-6 text-white shadow-soft">
                <p className="text-xs uppercase tracking-[0.18em] text-brand-200">Need a plumber?</p>
                <p className="mt-2 font-display text-xl font-bold">Call {business.phone}</p>
                <p className="mt-2 text-sm text-brand-100">
                  Most repairs booked same-day. Two-hour emergency dispatch.
                </p>
                <a href={`tel:${business.phoneTel}`} className="btn-primary mt-5 w-full">
                  <Phone className="h-4 w-4" />
                  Call now
                </a>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
                <p className="font-display text-base font-semibold text-brand-800">More reading</p>
                <ul className="mt-4 space-y-4">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/news/${o.slug}`}
                        className="group block"
                      >
                        <p className="text-xs uppercase tracking-[0.18em] text-brand-500">
                          {o.category}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-brand-800 group-hover:text-brand-600">
                          {o.title}
                        </p>
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
