import Section from "@/components/ui/Section";
import { H2, Body } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";

const values = [
  {
    title: "Growth",
    description:
      "Grow with a company that is building long-term brands, not just restaurants.",
  },
  {
    title: "Ownership",
    description:
      "We encourage initiative, responsibility, and the freedom to make meaningful contributions.",
  },
  {
    title: "Innovation",
    description:
      "We believe great ideas can come from anyone. Curiosity and continuous improvement drive everything we do.",
  },
];

export default function Careers() {
  return (
    <Section>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8102E]">
            Careers
          </p>

          <H2 className="mb-6">
            Build the Future of Food With Us.
          </H2>

          <Body>
            Behind every successful brand is an exceptional team. We're looking
            for passionate people who want to create memorable customer
            experiences, embrace innovation, and grow with us as we build
            India's next generation of food brands.
          </Body>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                {value.title}
              </h3>

              <p className="leading-8 text-gray-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/careers">
            Join Our Team
          </Button>

          <Button href="/contact" variant="secondary">
            Partner With Us
          </Button>
        </div>
      </div>
    </Section>
  );
}