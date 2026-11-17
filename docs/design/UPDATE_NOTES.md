# AEGIS public website — homepage and content update

## Scope

- Preserve the Obsidian & Platinum palette and lightweight SVG systems diagram.
- Reduce the AEGIS monogram scale and make a subtle platinum glow visible.
- Add concise, agent-first hero copy. AEGIS Core is a foundation; the product goal is an AI agent.
- Add The Agent route after Home, with accurate status descriptions and a future Android APK download CTA.
- Replace Technology and About placeholder routes with readable, introductory content.
- Add draft terms, legal-status notes and an honest contact fallback.
- Reduce scrollbar transparency (increase thumb opacity) while keeping it unobtrusive.

## Release safety

`src/config/release.ts` has no APK URL and no invented version. The download button remains disabled until a verified HTTPS release URL and version are set. Add a checksum when publishing.

## Contact email

Until an official email exists, Let's connect opens `/contact`. Set `NEXT_PUBLIC_AEGIS_CONTACT_EMAIL` in `.env.local` and restart `npm.cmd run dev`. Then the header, mobile navigation and contact page point to `mailto:YOUR_ADDRESS?subject=Hello%20AEGIS`.

## Legal content

`/terms` is a draft to be reviewed, not a binding/legal-reviewed contract. A privacy policy and accurate legal-entity details should be prepared before collecting user data or launching a public service.

## Design/performance

The SVG remains static; no canvas, particle engine, video backgrounds, or JavaScript animation. The site uses DM Sans via next/font/google with system fallbacks. Respect `prefers-reduced-motion`. Existing package and backend files are untouched.
