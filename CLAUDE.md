# CLAUDE.md

Guidance for Claude Code working in this repo.

## Project

Website for personal trainer based in Otwock, Poland. Three subpages plus homepage:

- **Homepage** — hero, work (links to the 3 offer pages), about me, social links, contact
- **Płetfale** (Swimming Academy — renamed from "Akademia Pływania", see TODO.md)
- **Przygotowanie Fizyczne** (Physical Conditioning — renamed from "Trening Personalny", see TODO.md; this is the real name of the service, not a separate "Motoryka" page)
- **Fizjoterapia** (Physiotherapy)

Business is based in **Otwock**, Poland. If any reference material says otherwise (e.g. a different town), Otwock is correct — confirmed by the user.

Target audience: local clients in Otwock and nearby area. Content language: Polish.

## Tech stack

- HTML (semantic, hand-written, no framework)
- CSS via SCSS (compiled to CSS, no CSS framework like Bootstrap/Tailwind)
- Vanilla JavaScript (no framework, no build-heavy JS libraries unless explicitly requested)

No React, Vue, Next.js, jQuery, or CSS frameworks. Keep dependencies minimal.

## File structure

```
/
├── index.html
├── pletfale.html
├── przygotowanie-fizyczne.html
├── fizjoterapia.html
├── scss/
│   ├── main.scss
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── components/
├── css/            (compiled output, gitignored or committed per project setup)
├── js/
│   └── main.js
└── assets/
    ├── img/            (final, compressed .webp/.mp4 assets the site actually serves)
    ├── fonts/
    └── source/         (raw, unprocessed photo drops — not served; convert to .webp
                          into assets/img/ before referencing from a page)
```

Adjust as pages/components grow, but keep SCSS partials organized by component/section, not one giant file.

`TODO.md` at repo root tracks every placeholder (missing photos, real contact info, social URLs, unbuilt subpage content). Check it before treating a page as finished.

## Design rules — hard constraints

- **No AI-gradient backgrounds.** No purple/blue mesh gradients, no generic "AI startup" gradient blobs.
- **No "eyebrow" text.** No small uppercase label sitting above headings (e.g. "OUR SERVICES" above an `<h2>`). Write direct headings instead. This stays banned even though a reference repo (see below) uses eyebrows throughout — confirmed by the user, do not reintroduce them.
- **No glowing buttons.** No box-shadow glow/bloom effects on buttons or CTAs. Buttons get flat or subtle-shadow styling, not neon glow.
- Avoid generic templated SaaS-landing-page look. Design should feel like a real local trainer's site, not a SaaS product.

## Code style

- SCSS: use variables for colors/spacing/breakpoints, mixins for repeated patterns (e.g. media queries). Avoid deep nesting (max ~3 levels).
- HTML: semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), proper heading hierarchy, alt text on images.
- JS: vanilla, no unnecessary abstraction. Only add JS for actual interactivity (nav toggle, form handling, etc.) — don't add JS for things CSS can do.
- Mobile-first responsive design.
- Polish diacritics (ą, ć, ę, ł, ń, ó, ś, ź, ż) must render correctly — ensure UTF-8 encoding declared in HTML.

## Images

- All images use `.webp` format. No `.jpg`, `.png`, or other raster formats.
- Compress every image before committing (automated, no manual step skipped).

## SEO — first priority

SEO and local Google ranking (Otwock + nearby area) are the top priority on every page, not an afterthought bolted on at the end. Apply this on every new page and section from the start:

- Unique `<title>` (50-60 chars) and `<meta name="description">` (140-160 chars) per page, written for the actual page content, not boilerplate.
- One `<h1>` per page, real heading hierarchy (no skipped levels — h1 → h2 → h3, never h1 → h3).
- `<link rel="canonical">` on every page, pointing at its own real URL.
- Open Graph (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:locale` = `pl_PL`) and `twitter:card` on every page.
- `alt` text on every image, descriptive and in Polish, not filler.
- JSON-LD structured data (`schema.org` `LocalBusiness` / `ExerciseGym` or `HealthAndBeautyBusiness` as fits) on the homepage at minimum — name, address, area served (Otwock), service types.
- `robots.txt` and `sitemap.xml` at the repo root, kept in sync as pages are added.
- Internal links use descriptive Polish anchor text (already the case via the nav and work-section cards), not "click here".
- Real domain, address, and phone are needed for canonical URLs and the LocalBusiness schema to be worth anything — flagged in `TODO.md` until supplied.

## Subpage layouts

Przygotowanie Fizyczne and Fizjoterapia each get their own layout below the hero, not a copy-pasted template reused with different colors and copy. Reusable building blocks (`.content-block`, the `.process` steps section, `.split`, galleries) are fair to share, but each page should combine and vary them differently — e.g. `.process` numbered steps where a service has a natural sequence, plain prose `.content-block`s where it doesn't.

**The hero is shared, not varied** (confirmed by the user): the homepage, Płetfale and Przygotowanie Fizyczne all use the same full-screen video hero (`.hero--bleed`: background video with a scrim, text over it, wave divider filled with the next section's background), each with its own footage and poster. Don't give one of these pages a unique hero composition to make it look distinct — the old image-left `.hero--mirror` variant was removed for exactly that reason. Fizjoterapia still has its text-only hero and hasn't been discussed for the video treatment; ask before changing it.

Przygotowanie Fizyczne (video hero, 3-step process section, plain `.price-list` cennik rows, dark theme with amber accent) and Fizjoterapia (text-only hero over a violet gradient, no hero photo, 2-column "Co leczę" conditions list, image+text `.split` section) are the shipped examples.

**Płetfale is the deliberate exception**, per later confirmed direction: it mirrors `index.html`'s section structure almost 1:1 (full-bleed video `.hero--bleed`, `.work`-style card grid — using the `.work__grid--level`/`.work__card--level` equal-3-column variant instead of the homepage's featured-card asymmetric grid, an `.about-photo` scroll-reveal split, `.gallery`), distinguished from the homepage only by its own blue `body.page--pletfale` theme and hero media. It no longer uses the `.levels`/`.audience`/`.cta-banner` components (removed from the SCSS build — see git history if reviving a wave-divider/pill-row treatment elsewhere). It also has a `.pricing`/`.pricing-pool` cennik section (one big wave-bordered panel, not separate cards — see `_pricing.scss`) placed right after the "Dla kogo są zajęcia" split; this is Płetfale-only for now, not part of the homepage-mirroring pattern. Przygotowanie Fizyczne's cennik is deliberately a different, plainer component (`.price-list` rows, see `_price-list.scss`), chosen by the user over reusing Płetfale's pool-themed one.

## Reference material

The private repo `HubcioBubcio123/pletfale-szkolka` (GitHub) is a fuller placeholder-driven spec for this same business — index="O mnie" hub, Płetfale, Fizjoterapia, Motoryka, each with their own SCSS folder. It was reviewed and only partially adopted:

- **Adopted as content/structure ideas, not wholesale**: things like a testimonials ("opinie") section, a pricing-row list, a certifications timeline are fair inspiration for future sections — evaluate and build them within this project's existing shared-component SCSS architecture (not the reference's per-page-independent SCSS folders).
- **Rejected**: eyebrow labels (conflicts with the hard constraint above), the reference's per-service inline accent colors (this project uses one CSS-custom-property accent per page, see `pletfale.html`'s `body.page--pletfale` override pattern), and its Karczew address placeholder (this business is in Otwock).
- **Reversed since**: the reference's "Motoryka" being a rename of personal training was initially rejected here as a distinct 4th service, but per later confirmed direction, "Trening Personalny" was itself renamed to "Przygotowanie Fizyczne" (its real name) — see "Rename tracking" in TODO.md. There is no separate Motoryka page; the site stays at 3 offer pages.
- Font stack, JS animation approach (`data-reveal` scroll fade-ins, stat counters), and full section copy are not adopted as-is — reference only for what a section could contain, not a copy-paste source.

## What not to do

- Don't introduce a JS/CSS framework without being asked.
- Don't add AI-gradient hero sections, eyebrow labels, or glowing button effects — ever, even if it's a common default.
- Don't over-engineer: this is a small marketing/brochure site, not an app. No unnecessary build tooling beyond SCSS compilation.
