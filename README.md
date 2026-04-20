# Apple Valley Plumbing — Website

Modern, fast, SEO-optimized marketing site for Apple Valley Plumbing Company, built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. Shipped as a single Docker image behind Cloudflare → Nginx.

## Stack

- **Next.js 15** (App Router, React 19, standalone output)
- **TypeScript** (strict)
- **Tailwind CSS 3.4** with a custom brand theme
- **Lucide** icons
- **Nodemailer** for the contact form (SMTP — optional)
- **Docker** multi-stage build (≈ 180 MB final image)

## Pages

- `/` — Home (hero, trust strip, services, about, service area, testimonials, CTA)
- `/services` — Services index
- `/services/[slug]` — Detail pages for 9 services (water heaters, drain, sewer, burst pipe, gas, repiping, kitchen, toilet, sump pump)
- `/service-area` — All cities served
- `/service-area/[city]` — Per-city landing pages (12 cities)
- `/about`
- `/why-choose-us`
- `/reviews`
- `/coupons`
- `/news`
- `/contact` (form posts to `/api/contact`)
- `/sitemap.xml`, `/robots.txt`
- Custom 404

Each page ships per-page metadata, and the root layout emits a `Plumber` JSON-LD block with hours, service area, and the full service catalog for SEO.

## Running locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Running in Docker (production)

```bash
# Build + start, binding host port 3030 to the container
docker compose up -d --build

# or override the host port
APP_PORT=9000 docker compose up -d --build
```

The container listens on **3000 inside** and publishes to whatever you set `APP_PORT` to on the host. Point Nginx / Cloudflare Tunnel at that host port.

### Example Nginx block

```nginx
server {
    listen 80;
    server_name theapplevalleyplumber.com www.theapplevalleyplumber.com;

    location / {
        proxy_pass http://127.0.0.1:3030;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Contact form email (optional)

The form at `/contact` POSTs to `/api/contact`. Out of the box it logs submissions to the container's stdout. Add SMTP credentials to enable real delivery — see `.env.example` or the commented block in `docker-compose.yml`:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user@example.com
SMTP_PASS=change-me
SMTP_FROM=Apple Valley Plumbing <noreply@theapplevalleyplumber.com>
CONTACT_TO=service@theapplevalleyplumber.com
```

Any provider works (SendGrid, Mailgun, Postmark, Gmail app password, your own MTA).

## Project layout

```
app/               # App Router pages and API routes
components/        # Shared UI (Header, Footer, Hero, ServicesGrid, …)
lib/business.ts    # Single source of truth for business info (phone, hours, license, etc.)
lib/services.ts    # Service catalog (title, summary, FAQ, etc.)
public/images/     # Logo, hero, map, payment-methods imagery
Dockerfile         # Multi-stage build (deps → build → runner)
docker-compose.yml # Single-service compose with configurable host port
```

## Updating business info

Everything a small edit might touch — phone number, hours, address, license, social links, hero tagline — lives in `lib/business.ts`. Change it once and every page updates.

## Health check

The container exposes `GET /` and the Docker `HEALTHCHECK` pings it every 30 seconds.

## License

© Apple Valley Plumbing Company. Proprietary.
