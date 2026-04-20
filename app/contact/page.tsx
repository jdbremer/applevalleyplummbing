import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Call ${business.phone} or send a message. Same-day service in Apple Valley, Eagan, Lakeville, Burnsville, and the south metro.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's get your plumbing sorted."
        subtitle="Call, text, or fill out the form. A real person will get back to you — usually within the hour during business hours."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="space-y-5">
              <InfoCard
                icon={Phone}
                title="Call us"
                body={business.phone}
                href={`tel:${business.phoneTel}`}
                cta="Tap to call"
              />
              <InfoCard
                icon={Mail}
                title="Email us"
                body={business.email}
                href={`mailto:${business.email}`}
                cta="Open mail client"
              />
              <InfoCard
                icon={MapPin}
                title="Visit us"
                body={`${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`}
              />
              <InfoCard
                icon={Clock}
                title="Hours"
                body="Mon–Fri 7:00a–6:00p · Sat 8:00a–4:00p · 24/7 Emergency"
              />
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-slate-100">
              <iframe
                title="Apple Valley Plumbing Company map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`,
                )}&output=embed`}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-slate-100">
              <p className="font-display text-2xl font-bold text-brand-800">Request service</p>
              <p className="mt-2 text-sm text-slate-600">
                Share a few details and we&apos;ll confirm an arrival window.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
  href,
  cta,
}: {
  icon: React.ElementType;
  title: string;
  body: string;
  href?: string;
  cta?: string;
}) {
  const Wrapper: React.ElementType = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100 transition hover:ring-brand-200"
    >
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{title}</p>
        <p className="mt-1 font-medium text-brand-800">{body}</p>
        {cta && <p className="mt-1 text-xs font-semibold text-brand-500">{cta}</p>}
      </div>
    </Wrapper>
  );
}
