import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { H2 } from "@/components/ui/Typography";
import { about } from "@/data/about/about";

export default function Leadership() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8102E]">
              Leadership
            </p>

            <H2 className="text-gray-900">
              {about.leadership.title}
            </H2>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2">
              {about.leadership.principles.map((principle) => (
                <div
                  key={principle}
                  className="flex items-start gap-4 rounded-2xl border border-gray-100 p-6 transition-all duration-300 hover:border-[#C8102E]/30 hover:bg-gray-50"
                >
                  <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#C8102E] text-lg font-bold text-white">
                    ✓
                  </div>

                  <p className="text-lg font-medium leading-8 text-gray-700">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}