import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { H2, H3, Body } from "@/components/ui/Typography";

const futureConcepts = [
  {
    title: "Quick Service Restaurants",
    description:
      "Innovative food concepts designed for India's rapidly evolving food culture and changing customer expectations.",
  },
  {
    title: "Cafe & Beverage Concepts",
    description:
      "Modern café and beverage experiences focused on specialty drinks, desserts, and welcoming community spaces.",
  },
  {
    title: "Digital-First Food Brands",
    description:
      "Delivery-native concepts supported by technology, digital ordering, efficient operations, and data-driven decision making.",
  },
  {
    title: "Regional Food Experiences",
    description:
      "Authentic Indian flavours reimagined for modern consumers while respecting the food traditions and stories behind them.",
  },
];

export default function FutureBrands() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8102E]">
            What&apos;s Next
          </p>

          <H2 className="mb-6 text-gray-900">
            Building the Next Generation of Food Concepts.
          </H2>

          <Body className="text-gray-600">
            So Yum! So Good! is building a long-term ecosystem of food brands
            across multiple categories. Future concepts will share our
            commitment to quality, operational excellence, technology, and
            customer-first thinking while maintaining their own distinctive
            identities.
          </Body>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {futureConcepts.map((concept) => (
            <article
              key={concept.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-10"
            >
              <H3 className="mb-4 text-gray-900">
                {concept.title}
              </H3>

              <Body className="text-gray-600">
                {concept.description}
              </Body>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-4xl rounded-3xl bg-[#C8102E] px-8 py-14 text-center text-white md:px-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#F8CB34]">
            Our Vision
          </p>

          <H2 className="mb-6 text-white">
            Building India&apos;s Most Admired Food Company.
          </H2>

          <Body className="mx-auto max-w-3xl text-red-100">
            Our ambition extends beyond operating restaurants. We are building
            brands, technology, systems, and people that can shape the future
            of India&apos;s food industry for decades to come.
          </Body>
        </div>
      </Container>
    </Section>
  );
}