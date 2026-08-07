import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { H2 } from "@/components/ui/Typography";
import { about } from "@/data/about/about";

export default function CompanyIntro() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8102E]">
              Company
            </p>

            <H2 className="text-gray-900">
              {about.introduction.title}
            </H2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {about.introduction.paragraphs.map((paragraph) => (
              <article
                key={paragraph}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="leading-8 text-gray-600">
                  {paragraph}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}