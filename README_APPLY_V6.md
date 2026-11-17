# Aegis Forge — V6 typography, technology, and interactive diagram update

This ZIP is **an overlay**, not a standalone Next.js project. Apply it to the existing
`D:\AEGIS-WEBSITE\aegis-web` project created in earlier phases. Keep your existing
`node_modules`, `package.json`, and `.env.local`. It does not touch Aegis Core or Forge repositories.

## Included changes

- **About:** Heading is now `Aegis Forge`; the second oversized slogan is removed and
  replaced with `Founder — Vishnu Sai Varun`. Existing mission, principles, status and
  contact sections remain present and are lightly standardized into Title Case.
- **Technology:** Describes the intended **Version 1 tools**, not the software libraries
  used to construct the site: PowerPoint/presentations, PDF/document tools, Excel,
  Power BI exploration, frontend languages, and basic Python/coding help. These are
  development goals and should not be advertised as already released.
- **Navbar:** Larger links; on **hover/focus**, links turn muted red with a short red
  underline. The active link stays plain and legible when not hovered. Keyboard focus
  rings are preserved.
- **Home:** Removes the 'independent development' and 'early-stage' labels; retains
  the agent-first message. Logo remains uppercase as a deliberate wordmark exception.
- **Diagram:** Replaces the static SVG `<img>` with an inline SVG using the same central
  Aegis monogram and glow. All six surrounding nodes are real links that lift a little
  on hover; **Tools** navigates directly to `/technology#tools`, Code to `#coding`,
  Data to `#data`. No animation library or perpetual render loop was added.
- **Consistency:** Uses **Aegis** in normal sentences and Title Case in headings,
  while preserving technical acronyms such as AI, PDF, HTML and Power BI.
- **Footer:** Remains Home-only, as established previously. Copy is streamlined.

## Apply safely in Windows PowerShell

Stop the dev server (`Ctrl+C`). Save the ZIP to Downloads, then:

```powershell
$project = 'D:\AEGIS-WEBSITE\aegis-web'
$zip = Join-Path $HOME 'Downloads\AEGIS_Forge_V6_UI_Technology_Patch.zip'

if (-not (Test-Path (Join-Path $project 'package.json'))) {
    throw 'Expected Next.js project was not found.'
}
if (-not (Test-Path $zip)) { throw "ZIP not found: $zip" }

# Create a local backup before overwriting files
$backup = 'D:\AEGIS-WEBSITE\backup-before-v6-' + (Get-Date -Format 'yyyyMMdd-HHmmss')
New-Item -ItemType Directory -Path $backup -Force | Out-Null
Copy-Item (Join-Path $project 'src') (Join-Path $backup 'src') -Recurse -Force

Expand-Archive -LiteralPath $zip -DestinationPath $project -Force
Set-Location $project
npm.cmd run build
```

When build succeeds:

```powershell
npm.cmd run dev
```

Review:
- `http://localhost:3000/`
- `http://localhost:3000/technology#tools`
- `http://localhost:3000/about`

The ZIP also includes this README file in the project root. The existing downloaded app
buttons remain disabled until official release URLs and checksums are supplied.

## Validation

The updated TSX files passed TypeScript syntax parsing, the V6 CSS passed stylesheet
syntax parsing, and the ZIP passed integrity verification. A complete Next.js production
build has **not** been run in this environment; run the command above to check it on
your existing installation.
