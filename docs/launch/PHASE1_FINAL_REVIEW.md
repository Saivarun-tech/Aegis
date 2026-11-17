# Aegis Forge — Phase 1 launch review

Prepared 17 November 2026. This checklist covers source packages available in the conversation; **it is not a full audit of your local D: drive repository**.

## Implemented in this V7 patch

- Privacy Notice and Terms & Conditions use left-aligned, readable wide layouts with Title Case headings and no decorative rules or underlined text links.
- Existing Tools diagram node continues to `/technology#tools`; target content and the **Let's connect** CTA receive a restrained highlight on arrival.
- Original homepage, Agent, Technology, About, contact mailto, and disabled Android/Windows installer controls remain unchanged.
- An audit script verifies key files and wiring and reports legal drafts.

## Content review: known from prior overlays

- **Home:** focuses on the future agent, not just Aegis Core. Avoid describing roadmap claims as live.
- **The Agent:** conversation, learning, basic coding, and useful workflows are development goals. Installer links remain disabled until verified releases exist.
- **Technology:** planned V1 areas include presentations, PDFs, spreadsheets, introductory Power BI assistance, frontend languages, and basic Python; direct integration and production quality have **not** been demonstrated.
- **About:** identifies founder Vishnu Sai Varun, Aegis Core, Aegis Forge and future Platform roles, without implying incorporation or third-party affiliations.
- **Contact:** `connect.aegisforge@gmail.com`; `mailto:` opens the user's email client.
- **Privacy and Terms:** both remain drafts and must match actual hosting, analytics, data processing and applicable laws before public launch.

## Release checks before marking Phase 1 complete

- [ ] `npm.cmd run build` succeeds after this patch (including prerendering).
- [ ] `node scripts/audit-launch.mjs` passes; manually review warnings.
- [ ] `git status --short` contains no `.env`, `.env.local`, `.next`, `node_modules`, secrets, caches, backup files, user information or installers.
- [ ] Test Home, Agent, Technology, About, Privacy, Terms and Contact at desktop and mobile widths.
- [ ] Click Tools node: arrive at Technology tools section; observe target and connect accent. Test keyboard and reduced-motion behavior.
- [ ] Click Let's connect; it should compose to the **verified** email address. It must not silently send an email.
- [ ] Review that no claims of product release, customers, funding, partnerships, certifications or proven autonomous capabilities are present.
- [ ] Complete privacy and terms review with the **actual** chosen host and analytics/cookie practices; disclose project operator as legally appropriate.
- [ ] Verify metadata, social previews, favicons, sitemap/robots and canonical production URL once hosting is selected.
- [ ] Preview production build and check 404s, errors, contrast, slow devices, reduced-motion support, and Core Web Vitals.
- [ ] Link a GitHub repo, deploy a preview, then verify the public HTTPS URL.

## Recommended deployment

**Netlify Free** is an option for an early commercial startup landing page, subject to current plan usage limits. Netlify's OpenNext integration supports normal Next.js deployments. Connect the GitHub repository using **Add new project → Import an existing project**. Do not select a static export unless you have confirmed feature compatibility. Note that free public Netlify sites may show a Powered by Netlify badge.

**Do not choose Vercel Hobby** for commercial startup use; its published Hobby terms restrict usage to personal/non-commercial applications.

The site is **ready for final build and deployment testing**, but not yet a verified completed public launch until all checks above pass.
