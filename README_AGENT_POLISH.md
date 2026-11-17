# AEGIS Website — Agent/Technology/About Polish Overlay

This is an **overlay**, NOT a complete Next.js project. Apply it to your existing `D:\AEGIS-WEBSITE\aegis-web` project after the earlier AEGIS site updates.

## What changes

- **The Agent:** keeps the content on the left and adds a compact Android + Windows release card on the right. Both downloads are genuinely disabled until their files, versions and SHA-256 checksums are configured.
- **Technology:** simple explanation of skills and technologies, with Core / Forge / Platform at a glance.
- **About:** mission, principles, current stage, terms, privacy, official email.
- **Contact:** `connect.aegisforge@gmail.com` opens a mail composer.
- **Experience:** subtle mouse halo on fine-pointer devices, smooth CSS hover, small responsive site footer, mobile menu resets after navigation.
- **Legal drafts:** updates Terms and adds a draft Privacy Notice. Review both before launching public services.

**The homepage hero (`src/app/page.tsx` and `src/features/home/hero-stage.tsx`) was deliberately NOT modified.** Its content can be expanded together later.

## Safe installation (PowerShell)

1. Stop the development server with `Ctrl+C`.
2. Download the patch ZIP to Downloads.
3. The following creates a backup of matching files before extraction and does not touch other AEGIS projects:

```powershell
$project = 'D:\AEGIS-WEBSITE\aegis-web'
$zip = "$HOME\Downloads\AEGIS_Agent_Polish_Git_Overlay.zip"
if (-not (Test-Path "$project\package.json")) { throw "Wrong project directory: $project" }

# Create a timestamped backup of the site source (does not include node_modules or .git)
$backup = "${project}-source-backup-$(Get-Date -Format yyyyMMdd-HHmmss)"
New-Item -ItemType Directory -Path $backup -Force | Out-Null
Copy-Item -LiteralPath "$project\src" -Destination "$backup\src" -Recurse -Force -ErrorAction Stop

Expand-Archive -LiteralPath $zip -DestinationPath $project -Force
Set-Location $project
npm.cmd run build
npm.cmd run dev
```

If you already have uncommitted changes in these same paths, compare before extraction; `Expand-Archive -Force` overwrites matching files. No `package.json`, lockfile, `.env.local`, model weights, database or backend code is included.

## When releases are ready

See `docs/releases/RELEASE_SETUP.md`. The release card checks for a **real HTTPS URL, version, filename and a 64-character SHA-256 checksum** before enabling a download. Obtain signed Android and Windows builds and verify them independently before entering their data. No binaries are bundled here.

## Git setup

See `docs/development/GIT_SETUP.md` for commands that work whether Create Next App already initialized Git or not.

## Validation notes

TypeScript/JSX transpilation syntax checked (17 source files); current overlay paths and internal imports checked; ZIP integrity checked; responsive static-layout preview tested at 390, 820 and 1540 pixel widths with zero horizontal overflow. This is not a full Next.js production build, because the user's local dependencies are not available here. Run `npm.cmd run build` in the project.
