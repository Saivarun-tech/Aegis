# AEGIS — The Agent Page Clean Refinement (V3)

This is an **overlay** for your existing Next.js project (`D:\AEGIS-WEBSITE\aegis-web`), not a complete standalone app.

## What changed

- **The Agent:** concise, agent-first hero; story moved higher; removed R&D/status sentence.
- **Downloads:** only Android and Windows actions on the right. No parent card, platform title or explanatory marketing copy. Buttons remain disabled until verified release metadata exists.
- **Capabilities:** four border-separated, friendly points, not feature cards. Copy describes **goals**, not already-available features.
- **Official guidelines:** short five-point release and safety guidance, no decorative card.
- **Footer:** shown on **Home only**. Removed from all inner pages via moving `<SiteFooter />` from `src/app/layout.tsx` into `src/app/page.tsx`.
- **Prerender:** static copyright year 2026 to prevent `new Date()` errors with Cache Components.
- **No changes** to AEGIS Core, Forge, model files, logo, navbar, Technology, About, terms, privacy or email configuration.

## Apply on Windows (PowerShell)

Stop the running dev server first (`Ctrl + C`). Download the ZIP to Downloads, then:

```powershell
$project = 'D:\AEGIS-WEBSITE\aegis-web'
$zip = Join-Path $HOME 'Downloads\AEGIS_Agent_Clean_Refinement_V3.zip'
if (-not (Test-Path (Join-Path $project 'package.json'))) { throw 'AEGIS project not found' }
if (-not (Test-Path $zip)) { throw 'ZIP not found in Downloads' }

$backup = "${project}-before-agent-v3-$(Get-Date -Format yyyyMMdd-HHmmss)"
New-Item -ItemType Directory -Path $backup -Force | Out-Null
Copy-Item (Join-Path $project 'src') (Join-Path $backup 'src') -Recurse -Force

Expand-Archive -LiteralPath $zip -DestinationPath $project -Force
Set-Location $project
npm.cmd run build
```

Only if build succeeds, start development mode:

```powershell
npm.cmd run dev
```

Open `http://localhost:3000/agent` and check desktop and mobile widths.

**Important:** If you extracted the ZIP into a different project directory, update `$project`. It overwrites 6 existing source files listed below; back up first. It does not delete any files.

## Files replaced

- `src/app/agent/page.tsx`
- `src/components/ui/download-link.tsx`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/components/layout/site-footer.tsx`

## Download release safety

The Android and Windows buttons are intentionally nonfunctional until `src/config/release.ts` contains a version, valid HTTPS installer URL, filename and 64-character SHA-256 for each release. Do not invent a download URL; only publish builds after verifying them.

## Git

If already tracking this project with Git, inspect changes before committing:

```powershell
git diff --stat
git diff
git status --short
git add src/app/agent/page.tsx src/components/ui/download-link.tsx src/app/globals.css src/app/layout.tsx src/app/page.tsx src/components/layout/site-footer.tsx
git commit -m "Refine agent page and keep footer on home"
```
