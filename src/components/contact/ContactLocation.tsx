import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Eyebrow, H2, Body } from "@/components/ui/Typography";
import { contact } from "@/data/contact/contact";

export default function ContactLocation() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow className="mb-4">
              {contact.office.title}
            </Eyebrow>

            <H2 className="mb-6">
              Based In New Delhi.
            </H2>

            <Body className="max-w-xl">
              {contact.office.description}
            </Body>
          </div>

          <div className="rounded-3xl bg-gray-950 p-10 text-white md:p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#F8CB34]">
              Location
            </p>

            <p className="text-3xl font-bold tracking-tight">
              {contact.office.city}
            </p>

            <p className="mt-4 text-gray-400">
              India
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}