# AEGIS — homepage design specification (first visual build)

## Approved direction
- Premium **Obsidian & Platinum** design with restrained, Linear-inspired spacing.
- Black/graphite page background: `#101114`; warm off-white typography `#F5F3EF`; muted silver `#A5A7AE`; platinum highlight `#D6D0C9`.
- AEGIS wordmark (wide letter spacing), centered links **Home · Technology · About**, and outlined **Let's connect** button.
- Home hero deliberately has **NO VISIBLE LEFT-COLUMN TEXT**, including no label, headline, description, or CTA. Space is reserved for later co-design.
- Right hero contains an original stylized **A** monogram connected to six disciplines: model, code, compute, data, network, tools.
- No shield and no earth; SVG diagram is illustrative and does not claim that production functionality exists.

## Technical constraints
- Artwork is a lightweight static SVG; no WebGL, video, canvas, background tracking, or VFX dependency.
- Components are split between `components/layout`, `features/home`, and `components/vfx/custom`.
- Placeholder routes make the nav work; they are intentionally not considered final pages.
- CSS respects `prefers-reduced-motion` and includes a keyboard focus indicator.
- For eventual interactive VFX, add them on a user-approved component basis; do not animate the entire scene continuously.
- Mobile: hide empty left column and show scaled panel below the header.

## Next review
1. Confirm position and scale of right-side diagram.
2. Approve left-side copy separately.
3. Choose interaction effects (including Sakuga if desired) before implementation.
4. Design the Technology and About pages individually.
