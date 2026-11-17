import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail, contactHref } from "@/config/contact";
import "./about-refinement-v5.css";

export const metadata: Metadata = {
  title: "About",
  description: "About Aegis Forge, its founder Vishnu Sai Varun, its development principles, and official contact information.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="content-page about-page">
      <div className="content-wrap">
        <header className="about-intro">
          <h1>Aegis Forge</h1>
          <p className="about-founder about-founder--prominent">Founder — <strong>Vishnu Sai Varun</strong></p>
          <p className="page-lead">
            We&apos;re creating an intelligent agent that can help turn ideas, questions,
            and everyday work into practical next steps. Our own language model is one part of the foundation.
          </p>
        </header>

        <section className="two-column-section">
          <div><p className="section-label">The Mission</p><h2>Start Useful, Grow Responsibly</h2></div>
          <div className="prose-copy">
            <p>Our long-term goal is an assistant that understands requests and, when appropriate, works with tools to complete tasks. We are building this incrementally: communication first, then practical software workflows, then more advanced agent behavior.</p>
            <p><strong>Aegis Core</strong> is the developing language-model foundation. <strong>Aegis Forge</strong> is the agent and tool-execution infrastructure. The future <strong>Aegis Platform</strong> will bring these pieces to users.</p>
          </div>
        </section>
        <section className="two-column-section">
          <div><p className="section-label">Development Guidelines</p><h2>Principles Before Promises</h2></div>
          <div className="prose-copy">
            <p><strong>Be clear about limitations.</strong> A model can generate errors. Experimental results and planned abilities must not be presented as proven production features.</p>
            <p><strong>Ask before acting.</strong> Future automation should respect user permission, show consequential actions clearly and provide a way to stop or review them.</p>
            <p><strong>Protect user information.</strong> We intend to design with privacy and secure handling in mind; any real data practices need clear policies before release.</p>
            <p><strong>Build for authorized use.</strong> The agent is meant for legitimate learning and productivity, not unauthorized access or harmful automation.</p>
          </div>
        </section>
        <section className="two-column-section">
          <div><p className="section-label">Current Status</p><h2>Built Step by Step</h2></div>
          <div className="prose-copy">
            <p>Development and testing are ongoing. We won&apos;t describe planned abilities as released features until they have been tested and made available.</p>
            <p>Read the <Link href="/terms">draft Terms &amp; Conditions</Link> and <Link href="/privacy">draft Privacy Notice</Link>. Both need review before public services launch or personal data is collected.</p>
          </div>
        </section>
        <section className="two-column-section">
          <div><p className="section-label">Contact</p><h2>Let&apos;s Connect</h2></div>
          <div className="prose-copy">
            <p>For engineering conversations, collaboration, or questions about Aegis Forge:</p>
            <p><a className="text-link" href={contactHref}>{contactEmail} ↗</a></p>
            <p className="subtle-note">The email link opens your email app; it doesn&apos;t send a message directly from the website.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
