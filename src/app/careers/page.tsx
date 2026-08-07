import CareersHero from "@/components/careers/CareersHero";
import WhyJoin from "@/components/careers/WhyJoin";
import OpenPositions from "@/components/careers/OpenPositions";

export const metadata = {
  title: "Careers | So Yum! So Good!",
  description:
    "Join So Yum! So Good! and help build the next generation of food brands in India.",
};

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <WhyJoin />
      <OpenPositions />
    </main>
  );
}