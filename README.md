# juliocesar.io

Personal blog built with Next.js.

## Stack

- Next.js (App Router)
- MD/MDX content in `content/posts`
- Tag-driven homepage feed (Poetry, Code, Research)
- Optional Upstash Redis views counter
- Deployable on any Node.js-compatible platform

## Requirements

- Node.js `24.x` (see `.nvmrc`)
- `pnpm` `11+`

## Run Locally

1. Install dependencies

```bash
pnpm install
```

2. Start the dev server

```bash
pnpm dev
```

3. Open:

- [http://localhost:3000](http://localhost:3000)
- [http://localhost:3000/about](http://localhost:3000/about)

## Scripts

- `pnpm dev` - run local development server
- `pnpm build` - build production bundle
- `pnpm start` - run production server
- `pnpm lint` - run Next.js lint checks

## Content Model

- **Posts**: `content/posts/<slug>/index.mdx` (or `index.md`)
- **About**: `content/pages/about/index.mdx` served at `/about`
- **Images in posts**: use relative paths like `./image.png`; they are served
  through `/post-assets/<slug>/<file>`
- **Curated links (Research/Code)**: defined in `lib/curated-content.ts`

## Views Counter (Upstash Redis)

Views are optional. If Redis is not configured, the app falls back to `0` views.
Add these variables in local `.env.local` and in Vercel project settings:

```bash
KV_REST_API_URL=...
KV_REST_API_TOKEN=...
```

## Verify Before Deploy

```bash
pnpm build
```

Then check:

- `/`
- `/about`
- existing post URLs (for example `/seduciendo-al-tiempo/`)
- post images render correctly
- homepage feed displays Poetry, Code, and Research entries

## Deploy

1. Install dependencies: `pnpm install`
2. Build production assets: `pnpm build`
3. Start production server: `pnpm start`
4. Configure environment variables in your hosting platform:
   - `KV_REST_API_URL` (optional, for views)
   - `KV_REST_API_TOKEN` (optional, for views)
5. Validate key routes after deploy (`/`, `/about`, and post URLs).

Credits: visual and structural inspiration from [`rauchg/blog`](https://github.com/rauchg/blog).
