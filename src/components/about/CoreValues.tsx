import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { H2 } from "@/components/ui/Typography";
import { values } from "@/data/about/values";

export default function CoreValues() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8102E]">
              Core Values
            </p>

            <H2 className="text-gray-900">
              The Principles That Guide Every Decision
            </H2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C8102E]/10">
                  <span className="text-2xl font-bold text-[#C8102E]">
                    {value.title.charAt(0)}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {value.title}
                </h3>

                <p className="leading-8 text-gray-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}