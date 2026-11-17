# AEGIS Website — Git and GitHub Setup (Windows PowerShell)

Work only in the website folder, not in `D:\AEGIS` or `D:\AEGIS-FORGE`:

```powershell
Set-Location 'D:\AEGIS-WEBSITE\aegis-web'
git --version
git status
```

If `git status` says **not a git repository**, initialize Git:

```powershell
git init -b main
```

If Git was already initialized by `create-next-app`, do **not** initialize again. Confirm that `.gitignore` includes the following (default Next.js projects normally do):

```gitignore
node_modules/
.next/
.env*
!.env.example
```

Never commit secrets, `.env.local`, release signing keys, passwords, build artifacts, or model checkpoints. Review first:

```powershell
git status --short
git add .
git status --short
git commit -m "Polish AEGIS agent pages and prepare platform downloads"
```

To connect GitHub, first create a **new empty** GitHub repository, for example `aegis-website`, under your own account. Do not select a README, license or `.gitignore` during creation if they already exist locally. Then copy its actual HTTPS remote URL and run:

```powershell
git branch -M main
git remote -v
```

If there is **no** origin remote:

```powershell
git remote add origin 'PASTE_ACTUAL_HTTPS_REPO_URL_HERE'
git push -u origin main
```

If an `origin` already exists, don't add a second one; verify the URL and use `git remote set-url origin 'ACTUAL_URL'` only if you intend to change it.

After later edits:

```powershell
git add .
git commit -m "Update AEGIS website"
git push
```

To check the production build locally:

```powershell
npm.cmd run build
```

`npm.cmd` avoids the PowerShell execution-policy issue affecting `npm.ps1` on your Windows installation.
