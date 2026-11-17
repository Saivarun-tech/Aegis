import { HeroStage } from "@/features/home/hero-stage";
import { SiteFooter } from "@/components/layout/site-footer";

export default function HomePage() {
  return (
    <>
      <main id="main-content"><HeroStage /></main>
      <SiteFooter />
    </>
  );
}
