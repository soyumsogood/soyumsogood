import Section from "../ui/Section";
import { H2, Body } from "../ui/Typography";
import { company } from "@/data/company/company";

export default function Company() {
  return (
    <Section>
      <div className="mx-auto max-w-4xl text-center">
        <H2 className="mb-6">
          {company.name}
        </H2>

        <Body className="mx-auto mb-8 max-w-3xl">
          {company.description}
        </Body>

        <div className="inline-flex rounded-full bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-700">
          Founded {company.founded} • {company.headquarters}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 text-left shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
              Mission
            </p>

            <p className="text-lg leading-8 text-gray-600">
              {company.mission}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 text-left shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
              Vision
            </p>

            <p className="text-lg leading-8 text-gray-600">
              {company.vision}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}