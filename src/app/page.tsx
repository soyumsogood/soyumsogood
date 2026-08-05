import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Ecosystem from "@/components/sections/Ecosystem";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />

      <main>
        <Hero />
        <Ecosystem />
      </main>
    </>
  );
}