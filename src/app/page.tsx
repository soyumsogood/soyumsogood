import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        <Hero />

        <Section>
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              This section will become our Ecosystem.
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
              Every section on this website will now use our reusable Section
              component, giving the entire platform a consistent rhythm and
              spacing.
            </p>
          </div>
        </Section>
      </main>
    </>
  );
}