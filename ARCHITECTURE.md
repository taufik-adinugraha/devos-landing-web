# devos-landing-web — Architecture

## Folder structure

```
.
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx            # Landing page (Server Component)
│   │   ├── layout.tsx          # Root layout, metadata
│   │   ├── globals.css         # Tailwind directives
│   │   └── api/
│   │       └── waitlist/
│   │           └── route.ts    # POST /api/waitlist endpoint
│   ├── components/
│   │   ├── Hero.tsx            # Hero section (Server Component)
│   │   ├── Features.tsx        # Feature grid (Server Component)
│   │   ├── WaitlistForm.tsx    # Email capture form (Client Component)
│   │   └── Footer.tsx          # Footer links
│   └── lib/
│       └── validations.ts      # Email validation, input sanitization
├── public/                     # Static assets (images, favicon)
├── sentry.client.config.ts     # Sentry init for browser
├── sentry.server.config.ts     # Sentry init for SSR + route handlers
├── sentry.edge.config.ts       # Sentry init for middleware / edge runtime
├── instrumentation.ts          # Next.js instrumentation hook
├── next.config.js              # Next.js config (wrapped with Sentry)
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── .github/
    └── workflows/
        └── ci.yml              # CI pipeline (lint + type-check + test)
```

## Request lifecycle

### Page load (GET /)
1. Next.js SSR renders `app/page.tsx` (Server Component)
2. Server Component fetches any server-side data (if needed)
3. HTML response includes hydration data for Client Components
4. Browser hydrates `WaitlistForm` (Client Component)
5. User interactions (form submit) trigger client-side JS

### Wait-list sign-up (POST /api/waitlist)
1. User enters email in `WaitlistForm`
2. Client-side validation (email format)
3. `fetch('/api/waitlist', { method: 'POST', body: JSON.stringify({ email }) })`
4. Route handler (`app/api/waitlist/route.ts`) receives request
5. Server-side validation (email format, rate limiting)
6. Store email (webhook, database, or third-party service)
7. Return `{ success: true }` or `{ error: 'message' }`
8. Client shows success message or error toast

## Data model

### Wait-list entry
```typescript
interface WaitlistEntry {
  email: string;          // validated email address
  timestamp: string;      // ISO 8601 timestamp
  source?: string;        // optional UTM source tracking
}
```

Currently no database — POST to webhook or third-party service (Mailchimp, ConvertKit, etc.)

## Error handling

### Server errors (route handlers)
- Wrap in try/catch
- Call `Sentry.captureException(err)`
- Return `{ error: 'User-friendly message' }` with appropriate status code

### Client errors (components)
- Catch errors in event handlers
- Call `Sentry.captureException(err)`
- Show toast notification or inline error message

### Edge errors (middleware)
- `sentry.edge.config.ts` captures errors in middleware and edge runtime
- Without this file, edge errors are silent

## Styling

- **Tailwind utility-first** — no CSS modules
- **Responsive breakpoints**: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- **Color palette** — defined in `tailwind.config.ts` (customize for brand)
- **Typography** — Tailwind typography plugin for prose content

## Performance

- **Server Components** — most components are Server Components (no JS sent to client)
- **Client Components** — only `WaitlistForm` (marked with `'use client'`)
- **Image optimization** — use `next/image` for all images
- **Font optimization** — use `next/font` for custom fonts

## SEO

- **Metadata** — export `metadata` object in `app/page.tsx`
- **OG tags** — set `openGraph` in metadata for social sharing
- **Structured data** — add JSON-LD script tag for rich snippets (optional)

## Monitoring

- **Sentry** — three entry points (client, server, edge)
- **Tunnel route** — `/_sentry-tunnel` bypasses ad-blockers
- **Source maps** — uploaded automatically if `SENTRY_AUTH_TOKEN` is set
- **Performance monitoring** — enable `tracesSampleRate` in Sentry config
