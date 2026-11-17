"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";
import { contactHref } from "@/config/contact";

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand" aria-label="Aegis homepage">AEGIS</Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link${pathname === href ? " nav-link--active" : ""}`}
              aria-current={pathname === href ? "page" : undefined}
            >{label}</Link>
          ))}
        </nav>
        <a href={contactHref} className="contact-button desktop-contact">Let&apos;s connect</a>
        <details key={pathname} className="mobile-nav">
          <summary aria-label="Toggle navigation menu">
            <span className="menu-bars" aria-hidden="true"><span /><span /><span /></span>
            <span className="menu-label">Menu</span>
          </summary>
          <nav className="mobile-nav__panel" aria-label="Mobile navigation">
            {navigation.map(({ label, href }) => (
              <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>
            ))}
            <a href={contactHref} className="mobile-contact">Let&apos;s connect</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
