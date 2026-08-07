import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Eyebrow, H1, Body } from "@/components/ui/Typography";
import { technology } from "@/data/technology/technology";

export default function TechnologyHero() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-4xl py-16 text-center md:py-24">
          <Eyebrow className="mb-4">
            {technology.hero.eyebrow}
          </Eyebrow>

          <H1 className="mb-8">
            {technology.hero.title}
          </H1>

          <Body className="mx-auto max-w-3xl text-lg leading-8">
            {technology.hero.description}
          </Body>
        </div>
      </Container>
    </Section>
  );
}