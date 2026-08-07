import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Eyebrow, H2, H3, Body } from "@/components/ui/Typography";
import { careers } from "@/data/careers/careers";

export default function WhyJoin() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-4">
            Why Join Us
          </Eyebrow>

          <H2 className="mb-6">
            Grow With What We&apos;re Building.
          </H2>

          <Body>
            We want people to do meaningful work, develop their abilities,
            and grow alongside the company.
          </Body>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {careers.whyJoin.map((item, index) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg md:p-10"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8102E] text-lg font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>

              <H3 className="mb-4">
                {item.title}
              </H3>

              <Body>
                {item.description}
              </Body>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-4xl rounded-3xl bg-gray-950 px-8 py-12 text-center text-white md:px-12 md:py-16">
          <Eyebrow className="mb-4 text-[#F8CB34]">
            Our Philosophy
          </Eyebrow>

          <H2 className="mb-6 text-white">
            {careers.philosophy.title}
          </H2>

          <Body className="mx-auto max-w-3xl text-gray-300">
            {careers.philosophy.description}
          </Body>
        </div>
      </Container>
    </Section>
  );
}