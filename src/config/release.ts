/**
 * Public release manifest. Set these ONLY after the installer is built, signed,
 * uploaded to a verified HTTPS location, and its SHA-256 is independently checked.
 * Never place unfinished builds or a fabricated download URL here.
 */
export type ReleasePlatform = "android" | "windows";
export type PublicRelease = Readonly<{
  version: string | null;
  downloadUrl: string | null;
  sha256: string | null;
  filename: string | null;
}>;

export const releases: Record<ReleasePlatform, PublicRelease> = {
  android: { version: null, downloadUrl: null, sha256: null, filename: null },
  windows: { version: null, downloadUrl: null, sha256: null, filename: null },
};

export function isReleasePublished(release: PublicRelease): boolean {
  if (!release.version || !release.downloadUrl || !release.sha256 || !release.filename) return false;
  if (!/^[a-fA-F0-9]{64}$/.test(release.sha256)) return false;
  try {
    const link = new URL(release.downloadUrl);
    return link.protocol === "https:";
  } catch {
    return false;
  }
}
