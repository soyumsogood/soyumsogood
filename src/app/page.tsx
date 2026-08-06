import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Header from "@/components/layout/Header";

import Hero from "@/components/sections/Hero";
import Company from "@/components/sections/Company";
import Journey from "@/components/sections/Journey";
import Brands from "@/components/sections/Brands";
import About from "@/components/sections/About";
import Technology from "@/components/sections/Technology";
import Ecosystem from "@/components/sections/Ecosystem";
import Careers from "@/components/sections/Careers";
import Contact from "@/components/sections/Contact";

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
        <About />
        <Technology />
        <Ecosystem />
        <Careers />
        <Contact />
      </main>
    </>
  );
}