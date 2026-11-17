# AEGIS official downloads — Android & Windows

Both release buttons are **intentionally disabled** until genuine signed public installers are ready. Do not put training checkpoints or experimental internal binaries in the public downloads directory.

## Publication checklist

1. Test the Android `.apk` or Windows signed `.exe` / `.msi` with the intended supported devices/OS versions.
2. Verify the publisher identity and code signature where applicable.
3. Publish the exact immutable release file on trusted HTTPS storage, such as a real verified release page.
4. Compute the checksum from the **same file** you publish.
5. Put real values in `src/config/release.ts` for each platform:
   - `version` — e.g. the actual semantic version; do not invent one.
   - `downloadUrl` — direct, verified `https://` download URL.
   - `sha256` — 64 hex characters computed from the downloadable file.
   - `filename` — the actual release filename.
6. Run `npm.cmd run build`, visit `/agent` and verify the download targets and checksums.
7. Confirm your terms/privacy disclosures and install warnings before public launch.

### Windows checksum command

```powershell
Get-FileHash -Algorithm SHA256 'D:\YOUR_RELEASE_FILE.apk'
Get-FileHash -Algorithm SHA256 'D:\YOUR_RELEASE_FILE.exe'
```

**Security note:** The UI checks that release metadata is formatted correctly; it cannot itself prove the installer was signed, tested or hosted by the right party. Those are release-engineering responsibilities.
