import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Header from "@/components/layout/Header";

import Hero from "@/components/sections/Hero";
import Company from "@/components/sections/Company";
import Journey from "@/components/sections/Journey";
import Ecosystem from "@/components/sections/Ecosystem";

import Brands from "@/components/brands/Brands";
import About from "@/components/about/About";
import Technology from "@/components/technology/Technology";
import Careers from "@/components/careers/Careers";
import Contact from "@/components/contact/Contact";

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