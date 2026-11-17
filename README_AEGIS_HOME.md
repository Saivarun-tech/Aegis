# AEGIS official homepage — approved visual starter

This ZIP is a **drop-in overlay** for the `aegis-web` Next.js/TypeScript/Tailwind project already created at:

`D:\AEGIS-WEBSITE\aegis-web`

## Installation (PowerShell)

1. Stop an existing dev server with **Ctrl+C**.
2. Ensure your `aegis-web` project already exists and contains `package.json`.
3. In PowerShell, use the path where you downloaded this ZIP, e.g. `Downloads`:

```powershell
$zip = Join-Path $HOME 'Downloads\AEGIS_Homepage_Design_Overlay.zip'
$project = 'D:\AEGIS-WEBSITE\aegis-web'
Test-Path (Join-Path $project 'package.json')
Expand-Archive -LiteralPath $zip -DestinationPath $project -Force
Set-Location $project
npm.cmd run dev
```

The test must return `True` before extraction. Open <http://localhost:3000>.

## Contents

The ZIP overwrites ONLY these default Next.js project files:
- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/app/favicon.ico`

It adds these isolated new files:
- `src/components/layout/site-header.tsx`
- `src/components/layout/placeholder-page.tsx`
- `src/components/vfx/custom/connected-systems.tsx`
- `src/features/home/hero-stage.tsx`
- `src/config/navigation.ts`
- `src/app/technology/page.tsx`
- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`
- `public/illustrations/aegis-systems.svg`
- `docs/design/HOMEPAGE_DESIGN.md`

No changes to dependencies, `package.json`, Next configuration, backend, Forge, Core, or trained model files.

**The left half of the homepage is intentionally blank**. Any copy in the earlier concept image was excluded at the user's request. Header link labels and illustration node labels remain.

The Technology / About / Contact pages are minimal placeholders. We will design them later, one at a time.

## Validation

Run `npm.cmd run build` locally after installation to verify the production Next.js build using your exact scaffold dependencies.

If your local project already has meaningful changes in `src/app/page.tsx`, `src/app/layout.tsx`, or `src/app/globals.css`, back them up before extraction.
