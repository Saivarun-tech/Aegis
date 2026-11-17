import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technology",
  description: "Explore the tools and technologies planned for the first version of Aegis Forge: presentations, PDF files, spreadsheets, Power BI, and foundational programming.",
};

const firstVersionTools = [
  {
    id: "presentations",
    number: "01",
    name: "PowerPoint & Presentations",
    detail: "Turn an outline into a structured presentation, with slides that you can review and refine.",
    kind: "Documents",
  },
  {
    id: "pdf",
    number: "02",
    name: "PDF & Documents",
    detail: "Help draft, organize, and prepare useful documents, including PDF workflows through dedicated tools.",
    kind: "Documents",
  },
  {
    id: "data",
    number: "03",
    name: "Excel & Spreadsheets",
    detail: "Organize tables, explain formulas, and support basic spreadsheet tasks step by step.",
    kind: "Data",
  },
  {
    id: "power-bi",
    number: "04",
    name: "Power BI",
    detail: "Explore introductory reporting and data-visualization assistance. Direct Power BI integration is not yet confirmed.",
    kind: "Data",
  },
  {
    id: "coding",
    number: "05",
    name: "Frontend Development",
    detail: "Learn and work with HTML, CSS, JavaScript, TypeScript, and React for foundational frontend tasks.",
    kind: "Code",
  },
  {
    id: "python",
    number: "06",
    name: "Python & Coding Help",
    detail: "Ask basic programming questions, understand examples, and work toward clearer debugging guidance.",
    kind: "Code",
  },
] as const;

export default function TechnologyPage() {
  return (
    <main id="main-content" className="content-page technology-page">
      <div className="content-wrap">
        <header className="technology-intro" id="approach">
          <p className="section-label">Version One</p>
          <h1>Tools Aegis Can Work With.</h1>
          <p className="page-lead">
            Your ideas should not need five different apps to move forward.
            We&apos;re building Aegis Forge to help you learn, create, and work with familiar tools in one place.
          </p>
          <p className="technology-status">These are first-version development goals, not live features or confirmed integrations.</p>
        </header>

        <section className="technology-tool-section" id="tools" aria-labelledby="tools-title">
          <div className="section-heading">
            <h2 id="tools-title">Tools It Can Work With</h2>
            <p>Focused on useful everyday work for students and developers.</p>
          </div>
          <div className="feature-grid technology-feature-grid">
            {firstVersionTools.map(({ id, number, name, detail, kind }) => (
              <article id={id} className="info-card tech-card" key={id}>
                <span className="card-index">{number} · {kind}</span>
                <h3>{name}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="technology-closing" aria-labelledby="technology-closing-title">
          <div>
            <p className="section-label">One Foundation, Practical Tasks</p>
            <h2 id="technology-closing-title">From a Question to a Useful Result</h2>
          </div>
          <div>
            <p>
              Aegis Core is the language-model foundation. Aegis Forge is the agent infrastructure intended
              to connect conversations with tools. Each capability will need its own testing before release.
            </p>
            <Link href="/agent">Meet the Agent <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </div>
    </main>
  );
}
