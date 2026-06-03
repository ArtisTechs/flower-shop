# Flower Shop Website

A modern floral boutique storefront built with React, TypeScript, and Vite. The site presents curated bouquets and arrangements for gifting, weddings, events, and everyday occasions, with a polished landing page and a lightweight shopping flow.

## What This Page Includes

- Animated hero section with rotating bouquet imagery
- Featured flowers, collection highlights, occasion browsing, and testimonials
- Shop page with search, category, occasion, and sorting controls
- Product detail pages for individual floral arrangements
- Cart experience with quantity controls, order summary, and checkout confirmation
- Login, create account, contact, and not found pages
- Responsive styling for desktop and mobile
- Client-side routing configured for Vercel refresh support

## Tools And Stack

- React 19
- TypeScript
- Vite
- React Router
- Framer Motion
- Lucide React
- ESLint
- Vercel deployment config

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run lint checks:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Vercel Deployment

Vercel can deploy this project as a Vite app with these settings:

- Framework preset: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

The included `vercel.json` rewrites all routes to `index.html`, allowing direct visits and refreshes on routes such as `/shop`, `/cart`, and `/product/:id`.
