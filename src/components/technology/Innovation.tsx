import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Eyebrow, H2, Body } from "@/components/ui/Typography";
import { technology } from "@/data/technology/technology";

export default function Innovation() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow className="mb-4">
              {technology.innovation.eyebrow}
            </Eyebrow>

            <H2 className="mb-6">
              {technology.innovation.title}
            </H2>

            <Body className="max-w-2xl">
              {technology.innovation.description}
            </Body>
          </div>

          <div className="rounded-3xl bg-gray-950 p-8 text-white md:p-10">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#F8CB34]">
              Our Principles
            </p>

            <div className="space-y-5">
              {technology.innovation.principles.map((principle, index) => (
                <div
                  key={principle}
                  className="flex items-start gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C8102E] text-sm font-bold">
                    {index + 1}
                  </span>

                  <p className="pt-1 text-base leading-7 text-gray-200">
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