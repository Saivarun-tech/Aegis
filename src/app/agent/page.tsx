import type { Metadata } from "next";
import { PlatformDownloads } from "@/components/ui/download-link";

export const metadata: Metadata = {
  title: "The Agent",
  description:
    "Meet the Aegis agent vision: friendly conversation, clearer learning, foundational coding help, and practical everyday workflows.",
};

const waysToHelp = [
  {
    number: "01",
    title: "Just Want to Talk?",
    detail:
      "Some days, a simple conversation helps. We're shaping Aegis to be easy to talk to, thoughtful, and approachable.",
  },
  {
    number: "02",
    title: "Something on Your Mind?",
    detail:
      "Ask it your way. Our goal is to make questions easier to explore and explanations easier to understand.",
  },
  {
    number: "03",
    title: "Have Something to Build?",
    detail:
      "You bring the idea. We're developing Aegis to help you take the first steps with code and shape what comes next.",
  },
  {
    number: "04",
    title: "Need to Get Things Done?",
    detail:
      "From documents to everyday digital tasks, we're building practical tools that can help make work feel simpler.",
  },
] as const;

const officialGuidelines = [
  "Use download links from the official Aegis website.",
  "Choose the version made for your device.",
  "Check release notes and version details before installing.",
  "Avoid unofficial, altered, or unverified installers.",
  "Need help? Email connect.aegisforge@gmail.com.",
] as const;

export default function AgentPage() {
  return (
    <main id="main-content" className="content-page agent-page">
      <div className="content-wrap">
        <section className="agent-intro" aria-labelledby="agent-title">
          <div className="agent-intro__story">
            <p className="section-label">Meet the Aegis Agent</p>
            <h1 id="agent-title">You Lead.<br />Aegis Helps.</h1>
            <p className="page-lead">
              Bring a thought, a question, or an idea worth building. We&apos;re
              developing Aegis to turn conversations into useful next steps,
              at your pace.
            </p>
          </div>
          <PlatformDownloads />
        </section>

        <section className="agent-help" aria-labelledby="agent-help-title">
          <div className="agent-help__heading">
            <p className="section-label">Built Around You</p>
            <h2 id="agent-help-title">A Little Help Can Go a Long Way</h2>
          </div>
          <ol className="agent-point-list">
            {waysToHelp.map(({ number, title, detail }) => (
              <li className="agent-point" key={number}>
                <span className="agent-point__number" aria-hidden="true">{number}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </li>
            ))}
          </ol>
          <p className="agent-help__note">
            Aegis is in development. These are goals for the agent, not features available to download today.
          </p>
        </section>

        <section className="agent-guidelines" aria-labelledby="agent-guidelines-title">
          <div className="agent-guidelines__intro">
            <p className="section-label">Official Guidelines</p>
            <h2 id="agent-guidelines-title">The Right Download, the Right Source</h2>
            <p>When Aegis is ready, you&apos;ll find verified releases here. Until then, the download options stay inactive.</p>
          </div>
          <ol className="agent-guidelines__list">
            {officialGuidelines.map((guideline, index) => (
              <li key={guideline}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {guideline}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
