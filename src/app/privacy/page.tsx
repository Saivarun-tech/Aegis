import type { Metadata } from "next";
import { contactEmail, contactHref } from "@/config/contact";

export const metadata: Metadata = {
  title: "Privacy Notice — Draft",
  description: "Draft privacy notice for the Aegis Forge informational website.",
  robots: { index: false, follow: false },
};

const noticeSections = [
  {
    title: "About This Website",
    body: "Aegis Forge is an AI agent project in development. This website introduces the project. It does not currently provide a public agent account or a live model service.",
  },
  {
    title: "When You Contact Us",
    body: "The Let's connect link opens your email application. If you decide to send us a message, your email address and message will be handled by the email providers involved so we can read and respond to your inquiry.",
  },
  {
    title: "Hosting and Technical Information",
    body: "Our eventual hosting provider may handle IP addresses, connection details, and request logs for delivery, security, and reliability. The final notice must identify the selected provider and describe its actual practices.",
  },
  {
    title: "Analytics and Cookies",
    body: "We have not described a website analytics or advertising system in this release. Before any analytics, tracking, or optional cookies are introduced, we will document their purposes and implement any required choices or consent.",
  },
  {
    title: "Future Agent Features",
    body: "Accounts, file uploads, downloads, and agent activity could introduce additional data processing. Those capabilities will need a revised privacy notice and appropriate controls before being made available.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <main id="main-content" className="content-page legal-page">
      <div className="legal-layout">
        <header className="legal-intro">
          <p className="section-label">Website Information</p>
          <h1>Privacy Notice</h1>
          <p className="page-lead">
            This page explains the website&apos;s intended information practices. It is a draft until
            the hosting provider, services, and legal requirements are confirmed.
          </p>
          <p className="legal-draft">Draft for review before public launch · November 2026</p>
        </header>

        <div className="legal-sections">
          {noticeSections.map(({ title, body }) => (
            <section key={title} className="legal-section">
              <h2>{title}</h2>
              <p>{body}</p>
            </section>
          ))}
          <section className="legal-section">
            <h2>Questions and Updates</h2>
            <p>
              For privacy-related questions, contact <a href={contactHref}>{contactEmail}</a>.
              We will update this page when hosting and public product features are finalized.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
