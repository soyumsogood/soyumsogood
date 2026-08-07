import Link from "next/link";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { H2, Body } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";

import { about } from "@/data/about/about";

export default function AboutCTA() {
  return (
    <Section className="bg-gray-900 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#F8CB34]">
            Let&apos;s Build Together
          </p>

          <H2 className="mb-6 text-white">
            {about.cta.title}
          </H2>

          <Body className="mx-auto mb-10 max-w-3xl text-gray-300">
            {about.cta.description}
          </Body>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button>
                {about.cta.button}
              </Button>
            </Link>

            <Link
              href="/careers"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-white hover:bg-white hover:text-gray-900"
            >
              Explore Careers
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}