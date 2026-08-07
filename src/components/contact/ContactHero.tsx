import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Eyebrow, H1, Body } from "@/components/ui/Typography";
import { contact } from "@/data/contact/contact";

export default function ContactHero() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-4xl py-16 text-center md:py-24">
          <Eyebrow className="mb-4">
            {contact.hero.eyebrow}
          </Eyebrow>

          <H1 className="mb-8">
            {contact.hero.title}
          </H1>

          <Body className="mx-auto max-w-3xl text-lg leading-8">
            {contact.hero.description}
          </Body>
        </div>
      </Container>
    </Section>
  );
}