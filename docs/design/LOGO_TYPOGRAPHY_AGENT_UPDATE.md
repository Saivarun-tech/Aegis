# AEGIS — Logo, typography & agent identity update

## Scope
This is a **small overlay patch**, not a replacement Next.js project.
No homepage copy or backend code is introduced.

### Logo repair
- The SVG monogram in `public/illustrations/aegis-systems.svg` follows the first uploaded reference rather than the second (older) generated approximation.
- The inner bar rises to the right and tapers; it is integrated into a single continuous A silhouette.
- The center symbol is approximately **31% wider** than before, with the approved overall A proportions.
- A gentle, static warm-platinum glow is back; it does not require scripts or animation.
- The existing six technology nodes and clean dark right-side panel stay intact.

### Typography
- The OpenAI website's custom typeface is *OpenAI Sans*, but no redistribution permission was verified.
- To avoid using a proprietary font without a license, this site uses **DM Sans**, an OFL-1.1 open-source alternative with a similar geometric feel.
- `next/font/google` downloads and self-hosts DM Sans during your Next.js build. We do not distribute any font binaries in this patch.
- The offline HTML preview falls back to system fonts if DM Sans is not installed locally.

### Positioning
- **AEGIS's end goal is an intelligent agent**, not a standalone language model.
- **AEGIS Core** is the model foundation; **AEGIS Forge** develops agent/workflow infrastructure; the **AEGIS platform** is the intended product experience.
- Updated SEO metadata to reflect the agent-first direction.
- The six spokes are a **conceptual illustration**, not a claim that all systems are production ready.

### Intentionally unchanged
- The left hero column remains **completely blank**.
- Navigation links and placeholder pages are unchanged.
- No added VFX dependency, network animation, data API, or background video.
