import Section from "@/components/ui/Section";
import { H2, Body } from "@/components/ui/Typography";

const capabilities = [
  {
    title: "Digital Experience",
    description:
      "Modern websites, direct ordering, and seamless customer journeys designed around convenience and brand consistency.",
  },
  {
    title: "Smart Operations",
    description:
      "Scalable systems, standardized workflows, and operational excellence that help every brand perform consistently.",
  },
  {
    title: "Data & Insights",
    description:
      "Data-driven decisions enable continuous improvement, better customer understanding, and sustainable business growth.",
  },
  {
    title: "Future Innovation",
    description:
      "Building for tomorrow through AI-assisted workflows, automation, and technology that empowers both teams and customers.",
  },
];

export default function Technology() {
  return (
    <Section>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8102E]">
            Technology
          </p>

          <H2 className="mb-6">
            Powered by Technology. Built for Scale.
          </H2>

          <Body>
            We believe modern food businesses are built on more than great
            recipes. Technology enables consistency, operational excellence,
            smarter decisions, and better customer experiences across every
            brand we create.
          </Body>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="leading-8 text-gray-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}