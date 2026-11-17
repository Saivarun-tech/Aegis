import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail, contactHref } from "@/config/contact";

export const metadata: Metadata = {
  title: "Terms & Conditions — Draft",
  description: "Draft website terms for Aegis Forge. Not finalized for a public agent service.",
  robots: { index: false, follow: false },
};

const termSections = [
  {
    title: "Project Status",
    body: "Aegis Forge is an AI agent project in development. This website introduces a product vision; it does not promise that described agent features or software downloads are available today.",
  },
  {
    title: "Website Information",
    body: "Material here is offered for general information and may change as development continues. Prototype demonstrations and development goals are not guarantees of availability, performance, or suitability for any particular purpose.",
  },
  {
    title: "Appropriate Use",
    body: "Our intended tools support legitimate learning, creativity, development, and productivity. Future automation is intended for work users are authorized to perform, not unauthorized access, deception, or harmful activity.",
  },
  {
    title: "Downloads and Updates",
    body: "Android and Windows downloads will be enabled only after verified release files, platform details, and checksums are published. Do not install unofficial or altered copies presented as Aegis releases.",
  },
  {
    title: "Third-Party Technology",
    body: "The project may use external libraries, services, and platform features. Their respective terms and licenses may apply. These draft website terms do not replace third-party notices or licenses.",
  },
  {
    title: "Limitations",
    body: "AI-generated content can be incorrect, incomplete, or inappropriate for a task. When agent features become available, important outputs and actions should be reviewed before being relied upon.",
  },
] as const;

export default function TermsPage() {
  return (
    <main id="main-content" className="content-page legal-page">
      <div className="legal-layout">
        <header className="legal-intro">
          <p className="section-label">Website Information</p>
          <h1>Terms &amp; Conditions</h1>
          <p className="page-lead">
            A clear starting point for using and understanding this informational website.
            These terms are preliminary and must be reviewed before a public agent service is launched.
          </p>
          <p className="legal-draft">Draft for review before public launch · November 2026</p>
        </header>

        <div className="legal-sections">
          {termSections.map(({ title, body }) => (
            <section key={title} className="legal-section">
              <h2>{title}</h2>
              <p>{body}</p>
            </section>
          ))}
          <section className="legal-section">
            <h2>Privacy</h2>
            <p>Please read our <Link href="/privacy">Privacy Notice</Link> for information about the website and messages sent to our project email.</p>
          </section>
          <section className="legal-section">
            <h2>Contact and Changes</h2>
            <p>For questions, email <a href={contactHref}>{contactEmail}</a>. These draft terms may change as the project and applicable legal requirements become clearer.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
