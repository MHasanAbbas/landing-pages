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

## Pages

- `/hounslow`
- `/hounslow/deals`
- `/hounslow/ramadan-deals`
- `/go/[id]` (deep-link bridge)

## Edit restaurant data

Update the Hounslow restaurant cards in:

```
src/data/hounslow.ts
```

## Deep link + fallback setup

The deep link bridge is implemented in:

```
src/app/go/[id]/page.tsx
```

Replace these later with Branch/Appsflyer:
- `totaleehalal://restaurant/<id>` (current deep link)
- Store links in `src/lib/seo.ts`
