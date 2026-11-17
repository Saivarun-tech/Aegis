# AEGIS Agent — Typography & Copy Refinement (V4)

This is a **small overlay** for the existing `D:\AEGIS-WEBSITE\aegis-web` Next.js project. It is not a new website and it does not change the homepage composition, AEGIS monogram, release configuration, or backend files.

## Changes

- Swaps DM Sans for **Geist** site-wide using `next/font/google` (`display: swap`). No font binaries are bundled.
- Removes the short navigation underline and replaces it with a clean type-weight difference.
- Keeps focus-visible indicators, so keyboard users can still navigate.
- Refines the Agent hero into a short, warmer statement with more balanced text proportions.
- Removes decorative horizontal separators from the Agent content and official guidelines.
- Keeps Android and Windows actions exactly as before; unreleased binaries remain unavailable.
- Preserves the previous footer-on-Home-only behavior.

## Install (PowerShell)

Stop the development server (`Ctrl+C`) first.

```powershell
$project = "D:\AEGIS-WEBSITE\aegis-web"
$zip = "$HOME\Downloads\AEGIS_Agent_Typography_Copy_V4.zip"

if (-not (Test-Path "$project\package.json")) { throw "AEGIS website not found." }
if (-not (Test-Path $zip)) { throw "Download the ZIP into your Downloads folder first." }

# Back up just the two files that this update replaces.
$backup = Join-Path $project ("backup-typography-v4-" + (Get-Date -Format "yyyyMMdd-HHmmss"))
New-Item -ItemType Directory -Path "$backup\app\agent" -Force | Out-Null
Copy-Item "$project\src\app\layout.tsx" "$backup\app\layout.tsx" -Force
Copy-Item "$project\src\app\agent\page.tsx" "$backup\app\agent\page.tsx" -Force

Expand-Archive -LiteralPath $zip -DestinationPath $project -Force
Set-Location $project
npm.cmd run build
```

On a successful build:

```powershell
npm.cmd run dev
```

Open `http://localhost:3000/agent` and refresh with `Ctrl+Shift+R`.

## Notes

- This patch is based on the AEGIS Agent Clean Refinement V3 source. If you've modified `src/app/layout.tsx` or `src/app/agent/page.tsx` since V3, compare those files with this update before overwriting.
- A font fetch may be required on the first build (handled by Next.js).
- This update does not turn development goals into claims about shipped functionality.
- No legal-policy pages, API endpoints, binaries, or download URLs are modified.
