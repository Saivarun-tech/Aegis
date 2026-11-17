# AEGIS — Agent-first Website Update

This ZIP is a **patch/overlay**, not a standalone Next.js app. It is designed to be extracted into the existing:

`D:\AEGIS-WEBSITE\aegis-web`

Keep the project's `package.json`, `next.config.ts`, `node_modules`, backend code, and existing `.env.local`. No files in those locations are included in the patch.

## Apply in Windows PowerShell

1. Stop the running dev server (`Ctrl+C`).
2. Verify `D:\AEGIS-WEBSITE\aegis-web\package.json` exists.
3. Download the ZIP and run:

```powershell
$project = 'D:\AEGIS-WEBSITE\aegis-web'
$zip = "$HOME\Downloads\AEGIS_Agent_First_Website_Update.zip"
if (-not (Test-Path "$project\package.json")) { throw "Wrong project directory: $project" }
Expand-Archive -LiteralPath $zip -DestinationPath $project -Force
Set-Location $project
npm.cmd run dev
```

Open http://localhost:3000. Review the navbar, home, agent, technology, about, contact and draft terms pages.

## Configure the future official email

When your official email exists, create or edit `D:\AEGIS-WEBSITE\aegis-web\.env.local` with:

```dotenv
NEXT_PUBLIC_AEGIS_CONTACT_EMAIL=YOUR_REAL_OFFICIAL_EMAIL
```

Replace with your actual address. Restart the Next.js server. `Let's connect` will then open the visitor's email client with that address and the subject “Hello AEGIS”. Until an official mailbox is configured, it links to `/contact`; it does not invent a nonexistent email recipient.

## Publish an Android APK later

Update `src/config/release.ts` **only after you have a verified, signed release**:

- Set `version` to your actual release version.
- Set `downloadUrl` to the real HTTPS APK link.
- Provide the file's SHA-256 checksum in `sha256` when available.

Until then, the page shows a disabled “Download for Android” button and a transparent coming-soon explanation. This avoids broken links, fake downloads and insecure placeholder APKs.

## Notes

- No model weights, checkpoints, tokenizer or active AEGIS Forge files were touched.
- No animation dependencies were added; the hero diagram is a static vector SVG.
- Technology and About text remain honest about R&D status; a production-ready agent is **not** claimed.
- `/terms` is a **draft** that needs professional/legal review before public launch.
- All colors remain in the Obsidian & Platinum family.
