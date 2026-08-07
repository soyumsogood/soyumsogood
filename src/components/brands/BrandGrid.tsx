import Link from "next/link";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { H2, H3, Body } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";

const brands = [
  {
    name: "DCD™",
    tagline: "The House of ThunderCrunch™ Chicken",
    description:
      "DCD™ is our flagship fried chicken brand, built around bold flavours, premium quality, and unforgettable ThunderCrunch™ experiences. Designed for the next generation of Quick Service Restaurants.",
    color: "#C8102E",
    website: "https://dcdnation.com",
    status: "Live",
  },
  {
    name: "Yum! Express™",
    tagline: "Modern Momo Kitchen",
    description:
      "Yum! Express™ brings handcrafted momos, rice bowls, snacks, and modern comfort food together with technology-driven ordering and fast delivery to create memorable everyday meals.",
    color: "#F8CB34",
    website: "https://yumexpress.in",
    status: "Live",
  },
  {
    name: "Future Brands",
    tagline: "Coming Soon",
    description:
      "Our innovation pipeline includes multiple food concepts across emerging categories. Every future brand will follow the So Yum! So Good! philosophy of scalable systems, operational excellence, and exceptional customer experiences.",
    color: "#6B7280",
    website: "#",
    status: "In Development",
  },
];

export default function BrandGrid() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#F8CB34]">
            Brand Portfolio
          </p>

          <H2 className="mb-6">
            Our Growing Ecosystem
          </H2>

          <Body>
            Every brand serves a different customer need while sharing the same
            commitment to quality, innovation, and operational excellence.
          </Body>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className="mb-6 h-2 w-20 rounded-full"
                style={{ backgroundColor: brand.color }}
              />

              <div className="mb-4 inline-flex w-fit rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-gray-700">
                {brand.status}
              </div>

              <H3 className="mb-2">
                {brand.name}
              </H3>

              <p
                className="mb-6 text-sm font-semibold"
                style={{ color: brand.color }}
              >
                {brand.tagline}
              </p>

              <Body className="flex-grow">
                {brand.description}
              </Body>

              <div className="mt-8">
                {brand.website === "#" ? (
                  <div className="inline-flex cursor-not-allowed rounded-xl bg-gray-200 px-6 py-3 font-semibold text-gray-500">
  Coming Soon
</div>
                ) : (
                  <Link
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>
                      Visit Brand
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