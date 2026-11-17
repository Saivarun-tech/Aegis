import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail, contactHref } from "@/config/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Aegis by official email for engineering discussions, collaboration or project inquiries.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="content-page">
      <div className="content-wrap content-wrap--narrow">
        <p className="section-label">Contact</p>
        <h1>Let&apos;s Connect</h1>
        <p className="page-lead">Questions, technical collaboration, or a conversation about the project? Our official mailbox is open.</p>
        <div className="notice contact-notice">
          <strong>Official Aegis Email</strong>
          <p className="contact-address">{contactEmail}</p>
          <a className="button button--primary" href={contactHref}>Compose an email ↗</a>
          <p className="subtle-note">This opens your default email application; the website does not send messages on your behalf.</p>
        </div>
        <p className="bottom-link">Learn more about <Link href="/about">our mission and guidelines →</Link></p>
      </div>
    </main>
  );
}
