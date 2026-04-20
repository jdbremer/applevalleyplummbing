import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { business } from "@/lib/business";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  service?: string;
  message?: string;
  website?: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — silently succeed.
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const required = ["name", "phone", "email", "message"] as const;
  for (const k of required) {
    if (!body[k] || String(body[k]).trim().length === 0) {
      return NextResponse.json(
        { ok: false, message: `Missing required field: ${k}` },
        { status: 400 },
      );
    }
  }

  const lines = [
    `Name: ${body.name}`,
    `Phone: ${body.phone}`,
    `Email: ${body.email}`,
    body.city ? `City: ${body.city}` : null,
    body.service ? `Service: ${body.service}` : null,
    "",
    "Message:",
    body.message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px;margin:auto;padding:24px;color:#0f1c42">
      <h2 style="margin:0 0 8px">New service request</h2>
      <p style="color:#475569;margin:0 0 16px">${escapeHtml(body.service ?? "General inquiry")}</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${[
          ["Name", body.name],
          ["Phone", body.phone],
          ["Email", body.email],
          ["City", body.city ?? ""],
          ["Service", body.service ?? ""],
        ]
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 0;color:#64748b;width:100px">${escapeHtml(String(k))}</td><td style="padding:6px 0;font-weight:600">${escapeHtml(String(v ?? ""))}</td></tr>`,
          )
          .join("")}
      </table>
      <h3 style="margin:20px 0 6px">Message</h3>
      <p style="white-space:pre-wrap;color:#1e293b">${escapeHtml(body.message ?? "")}</p>
    </div>
  `;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO } = process.env;
  const to = CONTACT_TO || business.email;

  if (SMTP_HOST) {
    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT ?? 587),
        secure: Number(SMTP_PORT ?? 587) === 465,
        auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
      });
      await transporter.sendMail({
        from: SMTP_FROM || `${business.name} Website <${SMTP_USER ?? "no-reply@localhost"}>`,
        to,
        replyTo: body.email,
        subject: `New service request — ${body.service ?? "General"} (${body.name})`,
        text: lines,
        html,
      });
    } catch (err) {
      console.error("[contact] SMTP send failed:", err);
      return NextResponse.json(
        { ok: false, message: "Email delivery failed. Please call us directly." },
        { status: 502 },
      );
    }
  } else {
    console.log("[contact] SMTP not configured — logging submission:\n" + lines);
  }

  return NextResponse.json({ ok: true });
}
