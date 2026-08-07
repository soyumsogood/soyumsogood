import TechnologyHero from "@/components/technology/TechnologyHero";
import Capabilities from "@/components/technology/Capabilities";
import Innovation from "@/components/technology/Innovation";

export const metadata = {
  title: "Technology | So Yum! So Good!",
  description:
    "Discover how So Yum! So Good! uses technology, data, automation, and operational systems to build scalable food brands.",
};

export default function TechnologyPage() {
  return (
    <main>
      <TechnologyHero />
      <Capabilities />
      <Innovation />
    </main>
  );
}