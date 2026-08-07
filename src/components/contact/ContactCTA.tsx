import Link from "next/link";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { H2, Body } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { contact } from "@/data/contact/contact";

export default function ContactCTA() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#C8102E] px-8 py-14 text-center text-white md:px-12 md:py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#F8CB34]">
            Let&apos;s Talk
          </p>

          <H2 className="mb-6 text-white">
            {contact.cta.title}
          </H2>

          <Body className="mx-auto mb-8 max-w-3xl text-red-100">
            {contact.cta.description}
          </Body>

          <Link href="mailto:hello@soyumsogood.com">
            <Button>
              {contact.cta.button}
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}