/**
 * Lightweight interactive SVG: native links and CSS transitions only.
 * The central monogram retains the original Aegis silhouette and platinum glow.
 * This is an illustrative system map, not a live representation of model operations.
 */
const symbols = [
  { label: "Model", x: 337, y: 74, width: 146, kind: "model", href: null },
  { label: "Code", x: 69, y: 204, width: 171, kind: "code", href: null },
  { label: "Compute", x: 582, y: 204, width: 169, kind: "compute", href: null },
  { label: "Data", x: 69, y: 388, width: 171, kind: "data", href: null },
  { label: "Network", x: 582, y: 388, width: 169, kind: "network", href: null },
  { label: "Tools", x: 337, y: 520, width: 146, kind: "tools", href: "/technology#tools" },
] as const;

type SymbolKind = (typeof symbols)[number]["kind"];

function NodeIcon({ kind }: { kind: SymbolKind }) {
  switch (kind) {
    case "model":
      return <g stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"><path d="M0 0 13 -7 26 0 13 7Z M0 7 13 14 26 7 M0 14 13 21 26 14" /></g>;
    case "code":
      return <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"><path d="M6 -6 0 0 6 6 M24 -6 30 0 24 6 M19 -12 11 12" /></g>;
    case "compute":
      return <g stroke="currentColor" strokeWidth="1.8" fill="none"><rect x="5" y="-9" width="20" height="20" rx="2"/><rect x="11" y="-3" width="8" height="8" rx="1"/><path d="M9 -13v4 M15 -13v4 M21 -13v4 M9 11v4 M15 11v4 M21 11v4 M1 -5h4 M1 1h4 M1 7h4 M25 -5h4 M25 1h4 M25 7h4"/></g>;
    case "data":
      return <g stroke="currentColor" strokeWidth="1.9" fill="none"><ellipse cx="13" cy="-8" rx="11" ry="5"/><path d="M2 -8v19c0 7 22 7 22 0V-8 M2 1c0 6 22 6 22 0"/></g>;
    case "network":
      return <g stroke="currentColor" strokeWidth="1.8" fill="none"><path d="M13 -11 0 11h26Z"/><circle cx="13" cy="-11" r="3.3" fill="#17181a"/><circle cx="0" cy="11" r="3.3" fill="#17181a"/><circle cx="26" cy="11" r="3.3" fill="#17181a"/></g>;
    case "tools":
      return <g stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" fill="none"><path d="M0 -11 24 13 M24 -11 0 13 M18 -13l8 8"/><circle cx="0" cy="-11" r="3"/><circle cx="24" cy="13" r="3"/></g>;
  }
}

export function ConnectedSystems() {
  return (
    <figure className="system-panel">
      <svg className="system-panel__vector" viewBox="0 0 820 652" xmlns="http://www.w3.org/2000/svg" role="group" aria-label="Illustration of Aegis connected to model, code, compute, data, network and tools. Only Tools opens the Technology page.">
        <defs>
          <radialGradient id="aegis-v6-warmth"><stop stopColor="#b7a797" stopOpacity=".11"/><stop offset=".55" stopColor="#b7a797" stopOpacity=".025"/><stop offset="1" stopColor="#b7a797" stopOpacity="0"/></radialGradient>
          <linearGradient id="aegis-v6-platinum" x1="410" y1="225" x2="410" y2="416" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset=".65" stopColor="#faf3ea"/><stop offset="1" stopColor="#e4d8ce"/></linearGradient>
          <filter id="aegis-v6-glow" x="-60%" y="-60%" width="220%" height="220%" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="21"/></filter>
        </defs>
        <circle cx="410" cy="322" r="164" fill="url(#aegis-v6-warmth)"/>
        <circle cx="410" cy="322" r="235" fill="none" stroke="#c4b9ae" strokeWidth="1" opacity=".19"/>
        <circle cx="410" cy="322" r="135" fill="none" stroke="#c4b9ae" strokeWidth="1" opacity=".13"/>
        <g stroke="#beb4a9" strokeWidth="1.1" opacity=".38" strokeLinecap="round" fill="none">
          <path d="M410 322 V133 M410 322 L240 232 M410 322 L580 232 M410 322 L240 418 M410 322 L580 418 M410 322 V516"/>
        </g>
        <g fill="#e6dcd2">{[[410,133],[240,232],[580,232],[240,418],[580,418],[410,516]].map(([x,y])=><circle key={`${x}-${y}`} cx={x} cy={y} r="3"/>)}</g>
        <ellipse cx="410" cy="322" rx="101" ry="107" fill="#d8c3ae" opacity=".22" filter="url(#aegis-v6-glow)"/>
        <g transform="translate(410 322) scale(.47) translate(-393 -297)">
          <path d="M393 137 L389 139 L345 214 L256 373 L209 452 L209 456 L248 456 L291 388 L348 376 L412 350 L317 350 L314 348 L385 223 L393 213 L535 455 L576 455 Z" fill="#f1ddc7" opacity=".85" filter="url(#aegis-v6-glow)" />
          <path d="M393 137 L389 139 L345 214 L256 373 L209 452 L209 456 L248 456 L291 388 L348 376 L412 350 L317 350 L314 348 L385 223 L393 213 L535 455 L576 455 Z" fill="url(#aegis-v6-platinum)" />
        </g>
        {symbols.map(({ label, x, y, width, kind, href }) => {
          const artwork = (
            <g className="system-node__group">
              <rect className="system-node__chip" x={x} y={y} width={width} height="58" rx="15" fill="#17181a" fillOpacity=".96" stroke="#8c8781" strokeOpacity=".58" />
              <g className="system-node__icon" transform={`translate(${x + 23} ${y + 29})`} color="#e8e0d8"><NodeIcon kind={kind} /></g>
              <text className="system-node__label" x={x + 71} y={y + 36} fill="#ede8e1" fontSize="18" fontFamily="Arial, sans-serif" fontWeight="400">{label.toLowerCase()}</text>
            </g>
          );
          // Only Tools is an interactive link. All other nodes are visual only.
          return href ? (
            <a className="system-node system-node--link" href={href} key={label} aria-label="Explore tools in Aegis Technology">
              {artwork}
            </a>
          ) : (
            <g className="system-node system-node--static" key={label}>
              {artwork}
            </g>
          );
        })}
      </svg>
      <figcaption className="sr-only">Illustrative Aegis systems map. Only the Tools node links to the Technology page; other nodes are decorative.</figcaption>
    </figure>
  );
}
