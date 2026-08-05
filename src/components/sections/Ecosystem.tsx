import Section from "../ui/Section";
import { H2, Body } from "../ui/Typography";

export default function Ecosystem() {
  return (
    <Section className="bg-gray-50">
      <div className="text-center mb-16">
        <H2 className="mb-6">
          One Company.
          <br />
          Multiple Growth Engines.
        </H2>

        <Body className="mx-auto max-w-3xl">
          So Yum! So Good! is building an ecosystem where food brands,
          technology, people, and innovation work together to create the
          future of quick-service restaurants.
        </Body>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Food Brands */}
        <div className="rounded-3xl bg-white p-10 shadow-sm lg:col-span-7">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
            Food Brands
          </p>

          <h3 className="mb-4 text-3xl font-bold text-gray-900">
            Building brands customers love.
          </h3>

          <p className="text-lg leading-8 text-gray-600">
            From premium fried chicken to modern QSR concepts,
            every brand is designed with a unique identity,
            scalable operations, and memorable customer experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-[#C8102E]">
              DCD™
            </span>

            <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-gray-900">
              Yum! Express™
            </span>

            <span className="rounded-full bg-gray-100 px-5 py-2 text-sm font-semibold text-gray-700">
              Future Brands
            </span>
          </div>
        </div>

        {/* Technology */}
        <div className="rounded-3xl bg-[#111827] p-10 text-white lg:col-span-5">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
            Technology
          </p>

          <h3 className="mb-4 text-3xl font-bold">
            Restaurants powered by software.
          </h3>

          <p className="text-lg leading-8 text-gray-300">
            We're building digital products, operational systems,
            automation, and AI-driven tools that make our brands
            smarter every day.
          </p>
        </div>

        {/* Vision */}
        <div className="rounded-3xl bg-white p-8 shadow-sm lg:col-span-4">
          <h3 className="mb-3 text-2xl font-bold text-gray-900">
            Vision
          </h3>

          <p className="leading-8 text-gray-600">
            Build India's most admired food ecosystem.
          </p>
        </div>

        {/* People */}
        <div className="rounded-3xl bg-white p-8 shadow-sm lg:col-span-4">
          <h3 className="mb-3 text-2xl font-bold text-gray-900">
            People
          </h3>

          <p className="leading-8 text-gray-600">
            Great brands are built by extraordinary people.
          </p>
        </div>

        {/* Future */}
        <div className="rounded-3xl bg-white p-8 shadow-sm lg:col-span-4">
          <h3 className="mb-3 text-2xl font-bold text-gray-900">
            Future
          </h3>

          <p className="leading-8 text-gray-600">
            Every decision today is designed for the next decade.
          </p>
        </div>
      </div>
    </Section>
  );
}