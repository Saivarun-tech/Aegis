import Link from "next/link";
import { contactEmail, contactHref } from "@/config/contact";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__intro">
          <Link href="/" className="site-footer__brand" aria-label="Aegis home">AEGIS</Link>
          <p>Aegis Forge is building an agent to help with ideas and practical work.</p>
        </div>
        <nav aria-label="Footer navigation" className="site-footer__nav">
          <Link href="/agent">The Agent</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/about">About</Link>
          <Link href="/terms">Terms (draft)</Link>
          <Link href="/privacy">Privacy (draft)</Link>
        </nav>
        <div className="site-footer__contact">
          <span>Get in Touch</span>
          <a href={contactHref}>{contactEmail} ↗</a>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© 2026 Aegis Forge</span>
        <span>An agent built to work with you</span>
      </div>
    </footer>
  );
}
