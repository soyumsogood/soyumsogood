import Link from "next/link";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Eyebrow, H2, H3, Body } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { contact } from "@/data/contact/contact";

export default function ContactEnquiries() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-4">
            Get In Touch
          </Eyebrow>

          <H2 className="mb-6">
            Start A Conversation.
          </H2>

          <Body>
            {contact.introduction.description}
          </Body>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {contact.enquiries.map((enquiry) => (
            <div
              key={enquiry.title}
              className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-10"
            >
              <H3 className="mb-4">
                {enquiry.title}
              </H3>

              <Body className="flex-grow">
                {enquiry.description}
              </Body>

              <div className="mt-8">
                {enquiry.title === "Careers" ? (
                  <Link href="/careers">
                    <Button>
                      {enquiry.button}
                    </Button>
                  </Link>
                ) : (
                  <Link href="/contact">
                    <Button>
                      {enquiry.button}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}