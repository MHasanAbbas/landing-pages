# Totalee Halal Hounslow Landing

Premium, offer-first landing pages for Hounslow that route users into the Totalee Halal app.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Canonical base

Set the production canonical domain with:

```
NEXT_PUBLIC_CANONICAL_BASE=https://www.totaleehalal.co.uk
```

If not set, the app defaults to `https://www.totaleehalal.co.uk`.

## Pages

- `/hounslow`
- `/hounslow/deals`
- `/hounslow/ramadan-deals`
- `/go/[id]` (deep-link bridge)
- `/go/app` (generic app open)

## Edit restaurant data

Update Hounslow restaurants, offers, FAQs, and meta copy in:

```
src/data/hounslow.ts
```

## Deep link + fallback setup

Deep link bridge:

```
src/app/go/[id]/page.tsx
```

Generic app open route:

```
src/app/go/app/page.tsx
```

Replace these later with Branch/Appsflyer:
- `totaleehalal://restaurant/<id>` (current deep link)
- `totaleehalal://` (generic app open)
- Store links in `src/lib/seo.ts`
