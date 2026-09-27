# WASL Architecture Guide

## 1. Goals

- Production-ready modular monolith on Next.js 16 App Router
- Clean Architecture boundaries (Domain → Application → Infrastructure → Interfaces)
- PostgreSQL via Drizzle ORM
- Preserve full product surface: Escrow, disputes, invoices, WhatsApp, analytics, settings, reviews, security, AI

## 2. Runtime map

```text
Browser (RTL UI)
   │
   ├─ Server Components / Client Components (src/app, src/components)
   │
   ├─ REST API (src/app/api/*/route.ts)
   │     │
   │     ├─ Services (src/services)
   │     │     ├─ escrow/* (orders, payments, disputes, invoices, revenue)
   │     │     └─ notifications/* (WhatsApp dispatch)
   │     │
   │     ├─ Application use-cases (src/application)
   │     │
   │     └─ Infrastructure adapters
   │           ├─ whatsapp.ts (Meta Cloud API / mock)
   │           ├─ ip-inspector.ts
   │           └─ content-moderation.ts
   │
   └─ PostgreSQL (src/db/schema.ts via Drizzle)
```

## 3. API catalog (stable)

| Area | Routes |
|------|--------|
| Health | `GET /api/health` |
| Users | `GET/POST /api/users`, `POST /api/auth/login` |
| Providers | `GET/POST /api/providers`, `GET/PATCH /api/providers/[id]` |
| Orders/Payments | `GET/POST/PATCH /api/orders`, `GET/POST /api/payments` |
| Disputes | `GET/POST /api/disputes` |
| Invoices | `GET/POST /api/invoices` |
| Revenue | `GET /api/revenue` |
| Dashboard live | `GET /api/dashboard?view=live` |
| WhatsApp | `GET/POST /api/whatsapp` |
| Settings | `GET/PATCH /api/settings` |
| Reviews | `GET/POST /api/reviews` |
| Security | `GET/POST /api/security`, `/api/ip-inspect`, `/api/moderation` |
| Assistant | `GET/POST /api/assistant` |

## 4. Data model (high level)

- `users`, `provider_profiles`, `portfolio_projects`
- `orders`, `payments` (Escrow lifecycle)
- `disputes` (mediation workflow + evidence/timeline JSON)
- `invoices` (immutable fiscal snapshots)
- `whatsapp_notifications` (dispatch audit)
- `reviews` (verified success stories)
- `security_logs`, `banned_words`
- `platform_settings` (currency/fee/whatsapp/maintenance)

## 5. UI composition

- Shell + brand + settings provider wrap all pages
- Feature panels are client components under `src/components/<domain>`
- Pages under `src/app/<route>/page.tsx` remain thin and compose panels/services

## 6. Escrow state machine (summary)

```text
pending_payment → in_progress (funds held)
→ pending_approval → completed (release)
or disputed → refunded | completed
```

Platform fee is applied on release. WhatsApp coordinator notices fire on fund/complete/release when enabled.

## 7. Migration from single-file MVP

`public/index.html` remains as a self-contained demo shell.

Production path is App Router:

1. Keep using `/api/*` contracts
2. Prefer React pages (`/dashboard`, `/revenue`, `/invoices`, `/whatsapp`, `/settings`)
3. Single-file UI can call the same APIs later if needed

## 8. Deployment checklist

- [ ] `DATABASE_URL` set
- [ ] `npx drizzle-kit push` applied
- [ ] seed via `POST /api/dashboard { action: "seed" }`
- [ ] WhatsApp env (or keep `WHATSAPP_PROVIDER=mock`)
- [ ] `npm run build`
- [ ] healthcheck `/api/health`
