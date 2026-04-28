# devos-landing-web — AI Context

## Purpose
Marketing landing page for DevOS. Explains the product in 30 seconds and captures wait-list sign-ups. Built with Next.js 14+ (App Router), TypeScript, Tailwind CSS.

## Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel / Docker
- **Error monitoring**: Sentry (browser + server + edge)

## Key files
- `src/app/page.tsx` — landing page content, hero, features, wait-list CTA
- `src/app/api/waitlist/route.ts` — POST endpoint for wait-list sign-ups
- `src/components/Hero.tsx` — hero section with headline and primary CTA
- `src/components/Features.tsx` — 3-column feature grid
- `src/components/WaitlistForm.tsx` — client component for email capture
- `sentry.client.config.ts` — Sentry init for browser bundle
- `sentry.server.config.ts` — Sentry init for SSR + route handlers
- `sentry.edge.config.ts` — Sentry init for middleware / edge runtime (REQUIRED — without it, edge errors are silent)
- `instrumentation.ts` — Next.js instrumentation hook (loads Sentry on server boot)
- `next.config.js` — wrapped with `withSentryConfig` for source-map upload and tunnel route

## Patterns
- **Server Components by default** — use client components only for interactivity (form submission, animations)
- **Route handlers** — `/api/waitlist/route.ts` uses Next.js route handler pattern (export async function POST)
- **Tailwind utility-first** — no CSS modules, all styling via Tailwind classes
- **Responsive design** — mobile-first, test on 375px, 768px, 1440px viewports
- **SEO metadata** — export `metadata` object in page.tsx for title, description, OG tags

## Error monitoring
- **Sentry is configured with THREE entry points** (client, server, edge) — all three are required for full coverage
- **Always call `Sentry.captureException(err)`** at service boundaries:
  - Route handlers (`/api/waitlist/route.ts`) — wrap in try/catch, capture before returning 500
  - Server component data fetches — capture and return error state
  - Client event handlers — capture and show user-friendly message
- **Never swallow errors silently** — every caught exception should either be captured in Sentry or explicitly logged with context
- **Tunnel route** (`/_sentry-tunnel`) is configured in `next.config.js` to bypass ad-blockers

## Testing
- **Run tests**: `npm test`
- **Run in watch mode**: `npm test -- --watch`
- **Required env vars for tests**: `NODE_ENV=test`
- **Setup**: Tests use Jest + React Testing Library. No external services required for unit tests.
- **Expected output**: `Tests: X passed, 0 failed` (passing suite shows green checkmarks)
- **What to test**:
  - `WaitlistForm` component renders and handles submission
  - `/api/waitlist` route validates email format
  - Feature components render correct content

## Do not touch
- `sentry.*.config.ts` files — auto-loaded by `@sentry/nextjs`, do NOT import manually
- `next.config.js` Sentry wrapper — required for source-map upload and tunnel route
- `.github/workflows/ci.yml` and `preview.yml` — managed by DevOS, changes may break Watcher integration

## Local development
1. `npm install`
2. Copy `.env.example` to `.env.local` and fill in values
3. `npm run dev` → http://localhost:3000
4. Test wait-list form submission (check browser console for POST response)

## Deployment notes
- `NEXT_PUBLIC_SENTRY_DSN` must be set at **build time** (via Dockerfile ARG or Vercel env var)
- Browser bundle inlines `NEXT_PUBLIC_*` vars during build — runtime env won't reach the client
- **Standalone output mode** is enabled in `next.config.js` — Docker builds copy from `.next/standalone/` for smaller images
- If deploying via Docker, ensure `ARG NEXT_PUBLIC_SENTRY_DSN` and `ENV NEXT_PUBLIC_SENTRY_DSN=$NEXT_PUBLIC_SENTRY_DSN` are in the builder stage
