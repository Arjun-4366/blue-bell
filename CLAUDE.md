# Blue Bell Resort — Project Context

Marketing website for **Blue Bell**, a treehouse / private-pool earthen-dome resort
in Periya, Wayanad, Kerala. Booking is not live yet — the site showcases stays,
amenities, gallery, events and reviews, and captures reservation *requests* via a
form (no payment, no real-time availability).

Domain (already owned, on GoDaddy): `bluebellwayand.com`.

## Tech stack

- **Next.js 16** (App Router, Turbopack), **React 19**, **TypeScript**
- **GSAP + ScrollTrigger** for scroll/entrance animations, **Lenis** for smooth scroll
- **Tailwind CSS v4** is installed (`@import "tailwindcss"` in `globals.css`) but
  **not used** across most of the site — see Styling section below
- `next/font` for fonts (Cormorant Garamond, Playfair Display, Plus Jakarta Sans,
  Alex Brush), loaded in `src/app/layout.tsx`

## Project structure

- `src/app/` — one folder per route (`about`, `stays`, `book-now`, etc.), each with a
  thin `page.tsx` that composes section components. `stays/[slug]/page.tsx` is a
  dynamic route (Next 16 async `params`) rendering one detail page per stay via
  `generateStaticParams`.
- `src/components/layout/` — `Navbar`, `Footer`, `PageHero` (generic sub-page hero),
  `WhatsAppButton`
- `src/components/sections/<page>/` — the actual content blocks per page
  (e.g. `sections/home/Hero.tsx`, `sections/stays/StaysList.tsx`,
  `sections/stays/StayDetailHero.tsx` / `StayDetailInfo.tsx` for the `/stays/[slug]`
  detail page)
- `src/components/providers/LenisProvider.tsx`
- `src/data/stays.ts` — single source of truth for all 10 real room/stay units
  (Dome D1–D5, Tree Hut B1–B3, Tree Trunk A1–A3): rates, meal plans,
  features, inclusions, and images. Consumed by the `/stays` overview list,
  `/stays/[slug]` detail pages, and the `BookNowForm` stay-type dropdown — update
  stay data here, not in the components. The home page's stay teaser
  (`HomeAbout.tsx`) is a separate, hand-written 3-category narrative (Tree Trunk /
  Tree Hut / Domes) that doesn't pull from this file — a `FeaturedStays.tsx` card
  grid was tried and removed as redundant with it.
- `src/assests/images/` — **note the typo is intentional/existing** (`assests`, not
  `assets`) — don't "fix" it, it'll break every import
- `src/app/globals.css` — design tokens + shared utility classes (see below)

## Styling pattern (important — read before touching UI)

The codebase mixes **three** styling approaches:

1. **Inline `style={{...}}` objects** — the dominant pattern in nearly every
   component. Values reference CSS custom properties directly, e.g.
   `color: 'var(--brand-cyan)'`, `fontSize: 'clamp(2rem, 5vw, 4.5rem)'`.
2. **`<style jsx>` blocks** at the bottom of components — used for `@media` breakpoints
   (typically `max-width: 768px` and `max-width: 480px`) since inline styles can't
   do media queries.
3. **Shared utility classes in `globals.css`** — `.container`, `.section` /
   `.section-tint` / `.section-accent` / `.section-dark`, `.section-label`,
   `.section-title`, `.divider`, `.btn` / `.btn-primary` / `.btn-blue` /
   `.btn-outline` / `.btn-outline-dark`, `.img-cover`. These are legitimate reusable
   design-system classes — keep using them, don't reinvent per component.

**Tailwind is installed but essentially unused.** `Hero.tsx` was converted to
Tailwind once as a proof-of-concept template, then **the user reverted it back to
the inline-style/style-jsx version** (deliberate choice — do not re-convert it
unless asked). Decision made this session: **do not migrate the rest of the site to
Tailwind before launch** — too much regression risk for a marketing site about to go
live. Revisit migration later, one page at a time, with a visual check (screenshot)
after each page, only after the site is live and stable.

**Known landmine if Tailwind utilities are ever mixed into a component again:**
`globals.css` has plain (non-`@layer`) rules for bare tags —
`h1,h2,h3,h4,h5,h6 { color: var(--color-text); }`, `p { color: var(--color-text-mid);
font-size: 0.95rem; line-height: 1.85; }`, `a { ... }`. Because Tailwind's own
utilities live inside `@layer utilities`, and **unlayered CSS always beats layered
CSS regardless of specificity**, any Tailwind class like `text-white` or
`text-[1.2rem]` applied directly to an `<h1>`/`<p>`/`<a>` will silently be
overridden by these global rules. This exact bug caused the hero heading to render
invisible (dark navy text on a dark background) the first time `Hero.tsx` was
converted. If Tailwind is reintroduced on a component, either wrap those global tag
rules in `@layer base { ... }` first, or apply the color/typography classes to a
wrapping `<span>` instead of the tag itself.

## Design tokens (in `globals.css` `:root`)

- Brand accents: `--brand-cyan` `#06B5D3`, `--brand-blue` `#1A5FAD`, `--brand-green`
  `#0EA875` (+ `-light`/`-muted`/`-deep` variants)
- Backgrounds: white-based (`--color-bg` `#FFFFFF`, `--color-bg-warm`,
  `--color-bg-accent`)
- Text: `--color-text` (deep navy, headings), `--color-text-mid` (paragraphs),
  `--color-text-soft` (captions/labels)
- Fonts: `--font-display` (Cormorant Garamond — hero headings), `--font-serif`
  (Playfair Display — section titles), `--font-sans` (Plus Jakarta Sans — body/UI),
  `--font-script` (Alex Brush — logo wordmark only)

Overall look: white-based luxury theme, brand cyan/blue used sparingly as accent,
not as a dominant color.

## Pricing

**Room rates ARE shown** on the `/stays` overview cards (`StaysList.tsx`) and stay
detail pages (`/stays/[slug]`, via `StayDetailHero.tsx`) — reversing the earlier
no-pricing decision. The user supplied real per-room rates (see `src/data/stays.ts`)
and asked for them to display even though live booking/payment isn't wired up yet;
showing a starting nightly rate doesn't require real-time availability.
`EventsList.tsx` / `HomeEvents.tsx` still have no pricing (no rates were provided for
events) — revisit those separately if/when event pricing is supplied.

## Known technical debt / open items

- **Images are huge**: `src/assests/images/` is ~102MB total, individual `.webp`
  files up to 11MB (should be ~150–400KB for web use). `public/heroVideo.mp4` is
  21MB and autoplays on every page load. This — not the styling approach — is the
  main Lighthouse performance drag. Compress before/around launch.
- **Raw `<img>` tags** (bypass Next.js image optimization) exist in
  `PageHero.tsx`, `GalleryGrid.tsx`, `ReviewsGrid.tsx`. Everywhere else already uses
  `next/image` correctly. Convert these three when touched.
- When images move to dynamic URLs (CMS/API) later, route them through
  `next/image` (or the provider's own resizing), not raw `<img src>`.
- `next.config.ts` has `devIndicators: false` — the Next.js DevTools floating
  indicator badge was glitching in dev (throwing spurious
  `Uncaught NotFoundError: removeChild` console errors on load, unrelated to any
  app code — every stack trace bottomed out inside the `next-devtools` bundle
  itself). Disabling it removed the errors. Dev-only, no effect on production
  builds. If it's ever re-enabled, expect that error to come back.

## Deployment plan

Target: **AWS Lightsail** (chosen over EC2 for this scale — ~50k visits/month,
~100 bookings/month — because Lightsail bundles bandwidth into a flat monthly
price, avoiding surprise EC2 egress bills for an image-heavy site). Plan: ~$10/mo
tier (2 vCPU / 2GB RAM — the 1GB tier risks OOM during `next build`). 3-month AWS
free trial applies (new account).

Stack on the server: Ubuntu 22.04, Node 20, PM2 (process manager), Nginx (reverse
proxy on 80/443 → Next.js on 3000), Certbot (free SSL).

Domain `bluebellwayand.com` stays registered at **GoDaddy** — no registrar
migration needed, just point A records (`@` and `www`) at the Lightsail static IP
via GoDaddy's DNS management panel.

## Working preferences (this project)

- **Verify UI changes visually before declaring done — but only for actual
  layout/UI changes** (new components, resized/repositioned elements, new
  animations, responsive breakpoint changes). Start the dev server, screenshot
  with Playwright (`npx playwright screenshot ...` — Chromium browser binary may
  need `npx playwright install chromium` if missing), check both desktop and
  mobile viewports.
- **Do not spin up the dev server / take screenshots for plain text or copy
  edits** (changing a sentence, a label, a data field like a milestone's
  description) — a `tsc --noEmit` pass is enough. The user finds the
  screenshot-verification loop slow and has explicitly asked to skip it for
  content-only changes. Reserve the visual-verification step for changes that
  could actually break layout.
- On **Windows**, killing whatever's listening on port 3000 must go through the
  PowerShell tool, not Bash — `Get-NetTCPConnection -LocalPort 3000 -State Listen
  | Select-Object -ExpandProperty OwningProcess -Unique | ForEach-Object {
  Stop-Process -Id $_ -Force }`. Bash mistranslates `$_` in that one-liner.
- Prefer small, verifiable, low-risk changes over big rewrites — especially true
  right now since the site is pre-launch and every visual regression matters.
- Don't migrate more of the site to Tailwind unless explicitly asked (see Styling
  section) — it was deliberately postponed until after go-live.
