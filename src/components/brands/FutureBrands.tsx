import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { H2, H3, Body } from "@/components/ui/Typography";

const futureBrands = [
  {
    title: "Quick Service Restaurants",
    description:
      "Innovative fast-casual concepts designed for India's rapidly evolving food culture.",
  },
  {
    title: "Cafe & Beverage Concepts",
    description:
      "Modern café experiences focused on specialty beverages, desserts, and community spaces.",
  },
  {
    title: "Digital-First Food Brands",
    description:
      "Delivery-native brands powered by technology, cloud kitchens, and data-driven operations.",
  },
  {
    title: "Regional Food Experiences",
    description:
      "Authentic Indian flavors reimagined for modern consumers while preserving their heritage.",
  },
];

export default function FutureBrands() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#F8CB34]">
            Looking Ahead
          </p>

          <H2 className="mb-6 text-gray-900">
            The Future of Our Ecosystem
          </H2>

          <Body className="mx-auto max-w-3xl text-gray-600">
            So Yum! So Good! is more than a restaurant company. We are building
            a long-term ecosystem of food brands that combine exceptional
            products, technology, operational excellence, and customer-first
            thinking. Every future concept will share the same commitment to
            quality while serving a unique market opportunity.
          </Body>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {futureBrands.map((brand) => (
            <div
              key={brand.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <H3 className="mb-4 text-gray-900">
                {brand.title}
              </H3>

              <Body className="text-gray-600">
                {brand.description}
              </Body>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-4xl rounded-3xl bg-[#C8102E] px-10 py-14 text-center text-white">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#F8CB34]">
            Our Vision
          </p>

          <H2 className="mb-6 text-white">
            Building India&apos;s Most Admired Food Company.
          </H2>

          <Body className="mx-auto max-w-3xl text-red-100">
            Our ambition extends beyond operating restaurants. We are building
            brands, technology, systems, and people that will shape the future
            of India&apos;s food industry for decades to come.
          </Body>
        </div>
      </Container>
    </Section>
  );
}