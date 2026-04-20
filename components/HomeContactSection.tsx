import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { business } from "@/lib/business";

export default function HomeContactSection() {
  return (
    <section className="bg-gradient-to-b from-brand-50/50 to-white py-20">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Schedule</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-brand-800 sm:text-4xl">
            Get on the schedule in 60 seconds.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tell us what&apos;s going on and we&apos;ll confirm an arrival window. Prefer to talk? Call{" "}
            <a href={`tel:${business.phoneTel}`} className="font-semibold text-brand-700 hover:text-brand-500">
              {business.phone}
            </a>
            .
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="space-y-4">
              <InfoLine icon={Phone} label="Call" value={business.phone} href={`tel:${business.phoneTel}`} />
              <InfoLine icon={Mail} label="Email" value={business.email} href={`mailto:${business.email}`} />
              <InfoLine
                icon={MapPin}
                label="Visit"
                value={`${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`}
              />
              <InfoLine
                icon={Clock}
                label="Hours"
                value="Mon–Fri 7a–6p · Sat 8a–4p · 24/7 emergency"
              />
            </div>

            <div className="mt-6 rounded-2xl bg-brand-900 p-6 text-brand-100">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-200">Why call us</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>· A real person answers, often the owner.</li>
                <li>· Flat-rate quote before any work starts.</li>
                <li>· Most appointments booked today.</li>
                <li>· License #{business.license} · fully insured.</li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-slate-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoLine({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrapper: React.ElementType = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100 transition hover:ring-brand-200"
    >
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">{label}</p>
        <p className="text-sm font-medium text-brand-800">{value}</p>
      </div>
    </Wrapper>
  );
}
