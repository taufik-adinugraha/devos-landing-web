# devos-landing-web

Marketing landing page for DevOS. Explains the product in 30 seconds and captures wait-list sign-ups.

## Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Sentry (error monitoring)

## Local setup

### Prerequisites
- Node.js 20+
- npm

### Install
```bash
npm install
```

### Configure environment
```bash
cp .env.example .env.local
```

Fill in:
- `SENTRY_DSN` — server-side Sentry DSN (from Sentry project settings)
- `NEXT_PUBLIC_SENTRY_DSN` — client-side Sentry DSN (usually same value as SENTRY_DSN)
- `WAITLIST_WEBHOOK_URL` — (optional) webhook endpoint for wait-list sign-ups

### Run development server
```bash
npm run dev
```

Open http://localhost:3000

## Testing

### Run tests
```bash
npm test
```

### Run in watch mode
```bash
npm test -- --watch
```

### Required env vars for tests
- `NODE_ENV=test` (set automatically by Jest)

### Setup steps
1. No external services required for unit tests
2. Run `npm test`
3. Tests use Jest + React Testing Library

### Expected output
```
Tests: X passed, 0 failed
 PASS  src/components/WaitlistForm.test.tsx
 PASS  src/app/api/waitlist/route.test.ts
```

Green checkmarks indicate passing tests.

## Build
```bash
npm run build
npm start
```

## Linting & type-checking
```bash
npm run lint
npm run type-check
```

## CI / CD
GitHub Actions runs lint, type-check, and tests on every pull request and push to main. See `.github/workflows/ci.yml`.

DevOS Watcher monitors CI status. DevOS Medic can auto-fix common failures.

## Deployment

### Vercel (recommended)
1. Connect repo to Vercel
2. Set environment variables:
   - `SENTRY_DSN`
   - `NEXT_PUBLIC_SENTRY_DSN`
   - `SENTRY_AUTH_TOKEN` (for source-map upload)
3. Deploy

### Docker
Ensure `NEXT_PUBLIC_SENTRY_DSN` is passed as a build arg:
```bash
docker build --build-arg NEXT_PUBLIC_SENTRY_DSN=$NEXT_PUBLIC_SENTRY_DSN -t devos-landing-web .
docker run -p 3000:3000 -e SENTRY_DSN=$SENTRY_DSN devos-landing-web
```

## Project structure
See `ARCHITECTURE.md` for folder layout and request flow.
