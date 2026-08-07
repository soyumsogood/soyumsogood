import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Eyebrow, H2, H3, Body } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { careers } from "@/data/careers/careers";

export default function OpenPositions() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-4">
            Opportunities
          </Eyebrow>

          <H2 className="mb-6">
            Find Your Place In Our Story.
          </H2>

          <Body>
            We are looking for people who want to build, learn, take ownership,
            and help create exceptional food businesses.
          </Body>
        </div>

        <div className="mx-auto mt-16 max-w-5xl space-y-6">
          {careers.positions.map((position) => (
            <div
              key={position.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-10"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[#C8102E]/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#C8102E]">
                      {position.department}
                    </span>

                    <span className="rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-gray-600">
                      {position.type}
                    </span>

                    <span className="rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-gray-600">
                      {position.location}
                    </span>
                  </div>

                  <H3 className="mb-4">
                    {position.title}
                  </H3>

                  <Body>
                    {position.description}
                  </Body>
                </div>

                <div className="shrink-0">
                  <Button>
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}