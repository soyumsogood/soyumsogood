import AboutHero from "@/components/about/AboutHero";
import CompanyIntro from "@/components/about/CompanyIntro";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import Leadership from "@/components/about/Leadership";
import Timeline from "@/components/about/Timeline";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyIntro />
      <MissionVision />
      <CoreValues />
      <Leadership />
      <Timeline />
      <AboutCTA />
    </main>
  );
}