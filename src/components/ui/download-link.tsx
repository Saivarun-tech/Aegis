import { isReleasePublished, releases, type ReleasePlatform } from "@/config/release";

const platforms: ReadonlyArray<{ id: ReleasePlatform; label: string; format: string }> = [
  { id: "android", label: "Download for Android", format: "APK" },
  { id: "windows", label: "Download for Windows", format: "Desktop" },
];

function PlatformIcon({ platform }: { platform: ReleasePlatform }) {
  return platform === "android" ? (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 18h3" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M2 4.5 11 3v8H2V4.5Zm11-1.7L22 1v10h-9V2.8ZM2 13h9v8L2 19.5V13Zm11 0h9v10l-9-1.8V13Z" />
    </svg>
  );
}

/** Standalone platform action: real link when verified, disabled when not released. */
export function DownloadLink({ platform }: { platform: ReleasePlatform }) {
  const release = releases[platform];
  const published = isReleasePublished(release);
  const details = platforms.find((item) => item.id === platform)!;

  return (
    <div className="release-action">
      {published && release.downloadUrl ? (
        <a
          className="download-button download-button--ready"
          href={release.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${details.label} (${details.format}), version ${release.version}`}
        >
          <span className="download-button__icon"><PlatformIcon platform={platform} /></span>
          <span className="download-button__text"><strong>{details.label}</strong><small>{details.format} · v{release.version}</small></span>
          <span className="download-button__arrow" aria-hidden="true">↗</span>
        </a>
      ) : (
        <button className="download-button" disabled type="button" aria-label={`${details.label}: not released yet`}>
          <span className="download-button__icon"><PlatformIcon platform={platform} /></span>
          <span className="download-button__text"><strong>{details.label}</strong><small>{details.format} · Coming soon</small></span>
          <span className="download-button__arrow" aria-hidden="true">—</span>
        </button>
      )}
      {published && release.sha256 && (
        <p className="download-checksum"><span>SHA-256</span> <code>{release.sha256}</code></p>
      )}
    </div>
  );
}

/** No wrapper card or marketing copy: the two verified release actions only. */
export function PlatformDownloads() {
  return (
    <aside className="agent-downloads" aria-label="Aegis downloads for Android and Windows">
      <div className="agent-downloads__actions">
        {platforms.map((item) => <DownloadLink key={item.id} platform={item.id} />)}
      </div>
    </aside>
  );
}
