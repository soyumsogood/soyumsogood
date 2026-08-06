import Button from "../ui/Button";
import Section from "../ui/Section";
import {
  Eyebrow,
  H1,
  Lead,
} from "../ui/Typography";

export default function Hero() {
  return (
    <Section className="pb-12">
      <div className="text-center">
        <Eyebrow className="mb-4">
          So Yum! So Good!
        </Eyebrow>

        <H1 className="mx-auto mb-8 max-w-5xl">
          Building India&apos;s Next Generation
          <br />
          of Food Brands
        </H1>

        <Lead className="mx-auto mb-10 max-w-3xl">
          We build scalable food brands, technology platforms, and consumer
          experiences designed for the future of quick-service restaurants.
        </Lead>

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