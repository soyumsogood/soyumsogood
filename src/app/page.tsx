import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Company from "@/components/sections/Company";
import Journey from "@/components/sections/Journey";
import Brands from "@/components/sections/Brands";
import Ecosystem from "@/components/sections/Ecosystem";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />

      <main>
        <Hero />
        <Company />
        <Journey />
        <Brands />
        <Ecosystem />
      </main>
    </>
  );
}