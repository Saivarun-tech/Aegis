import type { Metadata } from "next";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { CursorAura } from "@/components/vfx/custom/cursor-aura";
import "./globals.css";
import "../styles/agent-refinement-v4.css";
import "../styles/aegis-refinement-v6.css";
import "../styles/aegis-final-v7.css";

const aegisSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-aegis-sans",
});

export const metadata: Metadata = {
  title: { default: "Aegis Forge — An Intelligent Agent", template: "%s | Aegis Forge" },
  description:
    "Aegis Forge is developing an intelligent agent for conversation, practical creation, and everyday work, supported by independently developed language-model technology.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={aegisSans.variable}>
        <div className="site-shell">
          <a className="skip-link" href="#main-content">Skip to content</a>
          <SiteHeader />
          {children}
          <CursorAura />
        </div>
      </body>
    </html>
  );
}
