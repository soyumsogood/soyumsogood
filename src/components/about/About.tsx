import Section from "@/components/ui/Section";
import { H2, Body } from "@/components/ui/Typography";

export default function About() {
  return (
    <Section>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8102E]">
            About Us
          </p>

          <H2 className="mb-6">
            Building More Than Restaurants.
          </H2>

          <Body>
            So Yum! So Good! is creating a modern food ecosystem where great
            brands, technology, and operational excellence come together to
            build unforgettable customer experiences.
          </Body>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
              Who We Are
            </p>

            <p className="leading-8 text-gray-600">
              We are not just building restaurants. We are building scalable
              food brands designed for the future. Every brand inside our
              ecosystem has a clear identity, a defined purpose, and the
              ambition to become a category leader.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
              What We Believe
            </p>

            <ul className="space-y-4 text-gray-600">
              <li>• Great food creates lasting memories.</li>
              <li>• Great brands earn customer trust.</li>
              <li>• Great technology powers sustainable growth.</li>
              <li>• Great people build great companies.</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}