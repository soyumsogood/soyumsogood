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

        <Body className="mb-8">
          {company.description}
        </Body>

        <div className="inline-flex rounded-full bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-700">
          Founded {company.founded} • {company.headquarters}
        </div>
      </div>
    </Section>
  );
}