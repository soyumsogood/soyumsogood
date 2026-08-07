import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { H2 } from "@/components/ui/Typography";

const milestones = [
  {
    year: "2022",
    title: "DCD™ Founded",
    description:
      "The journey began with the launch of DCD™ (Delicious Chicken Destination), introducing our vision for modern quick-service dining.",
  },
  {
    year: "2025",
    title: "So Yum! So Good! Established",
    description:
      "The parent company was founded to build, operate, and scale multiple food brands under one unified ecosystem.",
  },
  {
    year: "2025",
    title: "Yum! Express™ Launched",
    description:
      "Expansion into a dedicated momo-focused quick-service brand with a technology-first approach to food delivery and customer experience.",
  },
  {
    year: "Future",
    title: "Building India's Food Ecosystem",
    description:
      "Our long-term vision is to create multiple category-leading food brands powered by innovation, operational excellence, and scalable technology.",
  },
];

export default function Timeline() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8102E]">
              Our Journey
            </p>

            <H2 className="text-gray-900">
              Milestones That Shape Our Story
            </H2>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-5 top-0 h-full w-px bg-gray-200 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((item) => (
                <div
                  key={`${item.year}-${item.title}`}
                  className="relative flex flex-col gap-6 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center"
                >
                  <div className="hidden md:block md:text-right">
                    <span className="text-3xl font-bold text-[#C8102E]">
                      {item.year}
                    </span>
                  </div>

                  <div className="absolute left-5 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-[#C8102E] shadow md:static md:translate-x-0" />

                  <div className="ml-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:ml-0">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#C8102E] md:hidden">
                      {item.year}
                    </p>

                    <h3 className="mb-4 text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="leading-8 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}