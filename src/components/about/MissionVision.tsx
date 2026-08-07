import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { H2 } from "@/components/ui/Typography";
import { about } from "@/data/about/about";

export default function MissionVision() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8102E]">
              Our Purpose
            </p>

            <H2 className="text-gray-900">
              Driven by Purpose. Guided by Vision.
            </H2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
                {about.mission.title}
              </p>

              <p className="leading-8 text-gray-600">
                {about.mission.description}
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
                {about.vision.title}
              </p>

              <p className="leading-8 text-gray-600">
                {about.vision.description}
              </p>
            </article>
          </div>
        </div>
      </Container>
    </Section>
  );
}