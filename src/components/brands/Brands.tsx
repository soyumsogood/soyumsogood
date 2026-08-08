import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { H2, Body } from "@/components/ui/Typography";
import { brands } from "@/data/brands/brands";

export default function Brands() {
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

          <Body className="text-gray-600">
            Our growing portfolio of food brands is built around distinctive
            identities, exceptional products, strong operating systems, and
            memorable customer experiences.
          </Body>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {liveBrands.map((brand) => (
            <article
              key={brand.id}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10"
            >
              <span className="mb-6 inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-700">
                {brand.status}
              </span>

              <h3 className="mb-3 text-3xl font-bold text-gray-900">
                {brand.name}
              </h3>

              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
                {brand.tagline}
              </p>

              <p className="mb-8 leading-8 text-gray-600">
                {brand.description}
              </p>

              <a
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-semibold text-[#C8102E] transition-all duration-200 hover:translate-x-1"
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