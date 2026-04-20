import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    city: "Apple Valley, MN",
    body: "Called in the morning about a leaking water heater and had a new one installed by dinner. Clean work, honest price, and they even hauled away the old tank.",
  },
  {
    name: "Mike T.",
    city: "Eagan, MN",
    body: "Our basement drain backed up on a Saturday. They were at the house in under two hours, found a root intrusion with the camera, and had it cleared without any upsell.",
  },
  {
    name: "Jen K.",
    city: "Lakeville, MN",
    body: "Whole-house repipe from galvanized to PEX. Two-day project, barely any drywall cut, and the pressure upstairs is night and day. Worth every dollar.",
  },
  {
    name: "Daniel R.",
    city: "Burnsville, MN",
    body: "Ran a new gas line for our generator. Permitted, pressure tested, inspected, and done on schedule. This is how contractors are supposed to operate.",
  },
  {
    name: "Linda P.",
    city: "Rosemount, MN",
    body: "Greg walked me through the repair-vs-replace math on my 11-year-old water heater and did not push me either way. Replaced it and it has been quiet and efficient ever since.",
  },
  {
    name: "Chris B.",
    city: "Farmington, MN",
    body: "Burst pipe during a cold snap. They picked up at 11pm, walked me through shutting the main, and were there first thing in the morning. Saved our finished basement.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-brand-50/60 py-20">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Reviews</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-brand-800 sm:text-4xl">
            What neighbors across the south metro are saying.
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-600">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>Five-star rated on Google &amp; Facebook</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl bg-white p-7 shadow-card ring-1 ring-slate-100"
            >
              <Quote className="absolute right-5 top-5 h-6 w-6 text-brand-100" />
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-slate-700">
                &ldquo;{t.body}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-slate-100 pt-4 text-sm">
                <p className="font-semibold text-brand-800">{t.name}</p>
                <p className="text-slate-500">{t.city}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
