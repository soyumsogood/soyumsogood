import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Ecosystem from "@/components/sections/Ecosystem";
import Company from "@/components/sections/Company";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />

      <main>
  <Hero />
  <Company />
  <Journey />
  <Ecosystem />
</main>
    </>
  );
}