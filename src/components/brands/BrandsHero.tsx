import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { H1, Body } from "@/components/ui/Typography";

export default function BrandsHero() {
  return (
    <Section className="bg-gradient-to-b from-white via-gray-50 to-white">
      <Container>
        <div className="mx-auto max-w-5xl py-16 text-center lg:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8102E]">
            Our Brands
          </p>

          <H1 className="mb-8 text-gray-900">
            Building Brands.
            <br />
            Creating Experiences.
          </H1>

          <Body className="mx-auto max-w-3xl text-lg leading-9 text-gray-600">
            Every brand within the So Yum! So Good! ecosystem is built with a
            distinct identity, a clear customer promise, and a shared commitment
            to exceptional quality, operational excellence, and long-term
            growth.
          </Body>
        </div>
      </Container>
    </Section>
  );
}