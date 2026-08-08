import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { H2, Body } from "@/components/ui/Typography";
import { contact } from "@/data/contact/contact";

export default function ContactCTA() {
  return (
    <Section className="bg-[#C8102E]">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white">
            Let&apos;s Talk
          </p>

          <H2 className="mb-6 text-white">
            {contact.cta.title}
          </H2>

          <Body className="mx-auto mb-8 max-w-3xl text-red-100">
            {contact.cta.description}
          </Body>

          <a
            href="#contact-form"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#C8102E] transition hover:bg-gray-100"
          >
            {contact.cta.button}
          </a>
        </div>
      </Container>
    </Section>
  );
}