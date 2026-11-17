import Link from "next/link";
import { ConnectedSystems } from "@/components/vfx/custom/connected-systems";

/** Aegis is an agent project. Core is its language-model foundation. */
export function HeroStage() {
  return (
    <section className="hero-stage" aria-labelledby="hero-title">
      <div className="hero-stage__copy">
        <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" /> Aegis Forge</p>
        <h1 id="hero-title">An Assistant That Goes Beyond Answers</h1>
        <p className="hero-stage__description">
          Meet Aegis: an agent we&apos;re building to help with questions, ideas, and practical work.
          From a conversation to a useful next step, the goal is simple — technology that works with you.
        </p>
        <div className="hero-stage__actions">
          <Link className="button button--primary" href="/agent">Explore the Agent <span aria-hidden="true">↗</span></Link>
          <Link className="button button--outline" href="/technology#tools">Explore the Tools <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <ConnectedSystems />
    </section>
  );
}
