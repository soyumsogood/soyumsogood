import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Eyebrow, H2, H3, Body } from "@/components/ui/Typography";
import { technology } from "@/data/technology/technology";

export default function Capabilities() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-4">
            Our Capabilities
          </Eyebrow>

          <H2 className="mb-6">
            Technology Across The Entire Ecosystem.
          </H2>

          <Body>
            We build connected systems that support our customers, restaurant
            teams, and brands from discovery to delivery.
          </Body>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {technology.capabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8102E] text-lg font-bold text-white">
                +
              </div>

              <H3 className="mb-4">
                {capability.title}
              </H3>

              <Body className="text-gray-600">
                {capability.description}
              </Body>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}