import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { H1, Body } from "@/components/ui/Typography";
import { about } from "@/data/about/about";

export default function AboutHero() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-4xl py-16 text-center md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8102E]">
            {about.hero.eyebrow}
          </p>

          <H1 className="mb-8 text-gray-900">
            {about.hero.title}
          </H1>

          <Body className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
            {about.hero.description}
          </Body>
        </div>
      </Container>
    </Section>
  );
}