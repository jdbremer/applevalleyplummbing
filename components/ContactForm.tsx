"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { services } from "@/lib/services";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message ?? "Something went wrong. Please call us instead.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-emerald-50 p-8 text-emerald-900 ring-1 ring-emerald-200">
        <CheckCircle2 className="h-8 w-8 text-emerald-600" />
        <h3 className="mt-3 font-display text-xl font-semibold">Request received.</h3>
        <p className="mt-2 text-sm">
          We&apos;ll reach out shortly. For anything urgent, call us directly — we usually answer on the first ring.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <Field label="Email" name="email" type="email" required />
      <Field label="City" name="city" placeholder="Apple Valley" />
      <div>
        <label className="mb-1 block text-sm font-medium text-brand-800">How can we help?</label>
        <select
          name="service"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service…
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Something else</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-brand-800">Tell us more</label>
        <textarea
          name="message"
          rows={5}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
          placeholder="Any details help us show up prepared."
          required
        />
      </div>

      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

      {status === "error" && error && (
        <div className="flex items-start gap-2 rounded-xl bg-accent-50 p-4 text-sm text-accent-700 ring-1 ring-accent-100">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-none" />
          <p>{error}</p>
        </div>
      )}

      <button type="submit" className="btn-primary w-full" disabled={status === "sending"}>
        <Send className="h-4 w-4" />
        {status === "sending" ? "Sending…" : "Request service"}
      </button>
      <p className="text-center text-xs text-slate-500">
        By submitting you agree to be contacted about your request. We never share your info.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-brand-800">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}
