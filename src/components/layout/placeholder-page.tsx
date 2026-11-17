import type { ReactNode } from "react";

export function PlaceholderPage({ title }: { title: ReactNode }) {
  return (
    <main id="main-content" className="placeholder-page">
      <div>
        <p className="placeholder-page__eyebrow">AEGIS / WEBSITE IN DEVELOPMENT</p>
        <h1>{title}</h1>
        <p>This page will be designed in the next stage.</p>
      </div>
    </main>
  );
}
