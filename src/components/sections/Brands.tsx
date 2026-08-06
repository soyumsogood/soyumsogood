import Section from "@/components/ui/Section";
import { H2, Body } from "@/components/ui/Typography";
import { brands } from "@/data/brands/brands";

export default function Brands() {
  return (
    <Section>
      <div className="mx-auto max-w-6xl">

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8102E]">
            Our Brands
          </p>

          <H2 className="mb-6">
            Building Brands People Love.
          </H2>

          <Body>
            Every brand inside the So Yum! So Good! ecosystem is built with a
            clear purpose, strong identity, and a commitment to exceptional food
            experiences.
          </Body>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {brands.map((brand) => (
            <article
              key={brand.id}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-700">
                  {brand.status}
                </span>
              </div>

              <h3 className="mb-3 text-3xl font-bold text-gray-900">
                {brand.name}
              </h3>

              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
                {brand.tagline}
              </p>

              <p className="mb-10 leading-8 text-gray-600">
                {brand.description}
              </p>

              {brand.website !== "#" ? (
                <a
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-semibold text-[#C8102E] transition hover:translate-x-1"
                >
                  Explore Brand →
                </a>
              ) : (
                <span className="inline-flex items-center font-semibold text-gray-400">
                  Coming Soon
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}