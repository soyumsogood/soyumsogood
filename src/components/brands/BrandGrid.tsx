import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { H2, H3, Body } from "@/components/ui/Typography";
import { brands } from "@/data/brands/brands";

export default function BrandGrid() {
  const liveBrands = brands.filter((brand) => brand.status === "Live");

  return (
    <Section>
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8102E]">
            Our Brands
          </p>

          <H2 className="mb-6">
            Building Brands People Love.
          </H2>

          <Body>
            Every brand within the So Yum! So Good! ecosystem is built with a
            clear purpose, a strong identity, and a commitment to exceptional
            food experiences.
          </Body>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {liveBrands.map((brand) => (
            <article
              key={brand.id}
              className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-700">
                  {brand.status}
                </span>
              </div>

              <H3 className="mb-3 text-3xl">
                {brand.name}
              </H3>

              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
                {brand.tagline}
              </p>

              <Body className="mb-10 flex-grow text-gray-600">
                {brand.description}
              </Body>

              <a
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center font-semibold text-[#C8102E] transition-all duration-200 hover:translate-x-1"
              >
                Explore Brand
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}