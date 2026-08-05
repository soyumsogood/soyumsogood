import Button from "../ui/Button";
import Section from "../ui/Section";

export default function Hero() {
  return (
    <Section className="pb-12">
      <div className="text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8102E]">
          So Yum! So Good!
        </p>

        <h1 className="mx-auto mb-8 max-w-5xl text-5xl font-bold tracking-tight text-gray-900 lg:text-7xl">
          Building India's Next Generation
          <br />
          of Food Brands
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-xl leading-9 text-gray-600">
          We build scalable food brands, technology platforms, and consumer
          experiences designed for the future of quick-service restaurants.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/brands">
            Explore Brands
          </Button>

          <Button href="/company" variant="secondary">
            Our Story
          </Button>
        </div>
      </div>
    </Section>
  );
}