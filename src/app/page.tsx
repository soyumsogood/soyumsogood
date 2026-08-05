import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Section from "@/components/ui/Section";
import { Body, H2 } from "@/components/ui/Typography";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        <Hero />

        <Section>
          <div className="text-center">
            <H2 className="mb-4">
              This section will become our Ecosystem.
            </H2>

            <Body className="mx-auto max-w-3xl">
              Every section on this website will now use our reusable design
              system, giving the entire platform a consistent rhythm,
              typography, and spacing.
            </Body>
          </div>
        </Section>
      </main>
    </>
  );
}