# AEGIS — revised A logo + font + agent identity

## Apply this patch
The ZIP has the exact folder structure for your existing Next.js project.

1. Stop the dev server with `Ctrl+C`.
2. In PowerShell, confirm this returns `True`:
   ```powershell
   Test-Path 'D:\AEGIS-WEBSITE\aegis-web\package.json'
   ```
3. Extract the ZIP to **`D:\AEGIS-WEBSITE\aegis-web`** (choose overwrite/replace for the few files included). 
   Or run from your Downloads folder:
   ```powershell
   Expand-Archive -LiteralPath "$HOME\Downloads\AEGIS_Logo_Font_Agent_Update.zip" -DestinationPath 'D:\AEGIS-WEBSITE\aegis-web' -Force
   ```
4. Start:
   ```powershell
   Set-Location 'D:\AEGIS-WEBSITE\aegis-web'
   npm.cmd run dev
   ```
5. Hard refresh the site with `Ctrl+Shift+R` if the old logo is cached.

## What changed?
- **Logo**: wider, sharp tapered inner bar rising right, soft glow, reference-derived vector outline.
- **Font**: `DM Sans` (open-source near-match to OpenAI Sans), via `next/font/google`.
- **Identity**: agent-first SEO wording and accessible image description.
- **Copy**: left homepage remains blank.
- **Preserved**: other pages, node labels, navbar layout, backend folders, and dependency files.

The PNG/HTML previews may be useful for comparison; you only need to extract the patch ZIP. Download and font self-hosting require the build machine to access Google Fonts the first time.
