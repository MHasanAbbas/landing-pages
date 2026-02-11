# Totalee Halal Hounslow Deals Landing

Premium, offer-first landing page for Hounslow deals that routes users into the Totalee Halal app.

## Run locally

```bash
pnpm install
pnpm dev
```

Build for production:

```bash
pnpm build
```

## Edit restaurant data

Update the Hounslow deal cards in:

```
src/data/hounslow-deals.ts
```

## Deep link + fallback setup

The deep link bridge is implemented in:

```
src/app/go/[id]/page.tsx
```

Replace these later with Branch/Appsflyer:
- `totaleehalal://restaurant/<id>` (current deep link)
- `https://example.com/app-download` (fallback download link)

You can also update the CTA link on the landing page here:

```
src/app/hounslow-deals/page.tsx
```
