# Aegis Forge — V7 legal-layout and launch-readiness patch

This is a **small overlay**, not a standalone Next.js project. Apply to `D:\AEGIS-WEBSITE\aegis-web` after V6. No Aegis Core or Aegis Forge training files are touched.

## Changes

1. Privacy/Terms now start at the page's left content margin, use two responsive columns, consistent Title Case headings, and have no decorative horizontal dividers or underlined text links.
2. Clicking the existing **Tools** node in the homepage diagram navigates to `/technology#tools` as before. The Technology tools area is visibly highlighted on arrival and the **Let's connect** navbar action receives a subtle accent while that anchor is active.
3. Adds `scripts/audit-launch.mjs` and `docs/launch/PHASE1_FINAL_REVIEW.md`.
4. Preserves the existing wordmark, homepage, Agent, Technology, About, cursor effect, contact email, and disabled downloads.

## Windows PowerShell

Stop the running dev server (`Ctrl+C`). Then:

```powershell
$project = 'D:\AEGIS-WEBSITE\aegis-web'
$zip = Join-Path $HOME 'Downloads\AEGIS_Forge_V7_Launch_Readiness_Patch.zip'
if (-not (Test-Path "$project\package.json")) { throw 'Website folder missing' }
if (-not (Test-Path $zip)) { throw "ZIP missing: $zip" }
$backup = 'D:\AEGIS-WEBSITE\backup-before-v7-' + (Get-Date -Format yyyyMMdd-HHmmss)
New-Item -ItemType Directory -Path $backup -Force | Out-Null
Copy-Item "$project\src" "$backup\src" -Recurse -Force
Expand-Archive -LiteralPath $zip -DestinationPath $project -Force
Set-Location $project
node scripts/audit-launch.mjs
npm.cmd run build
```

If build succeeds:

```powershell
npm.cmd run dev
```

Review `/privacy`, `/terms`, and click Tools on `/` to visit `/technology#tools`.

## Status

The ZIP is syntax and archive tested, but it cannot confirm your local Next.js production build or legal compliance. Policy text is explicitly **draft**, not lawyer-approved. Read the launch checklist before publishing.
