import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-24">
        <div className="max-w-4xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#C8102E]">
            SO YUM! SO GOOD!
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-7xl">
            Building India's
            <br />
            Next Generation
            <br />
            Food Company.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-600">
            We create scalable restaurant brands, consumer food products,
            technology platforms, and manufacturing capabilities that shape the
            future of food across India.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/brands">
              Explore Our Brands
            </Button>

            <Button
              href="/opportunities"
              variant="secondary"
            >
              Investment Opportunities
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-10 border-t border-gray-200 pt-10">

            <div>
              <h3 className="text-4xl font-bold text-[#C8102E]">
                03+
              </h3>

              <p className="mt-2 text-gray-600">
                Brands Planned
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#C8102E]">
                Food + Tech
              </h3>

              <p className="mt-2 text-gray-600">
                Ecosystem Vision
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#C8102E]">
                India
              </h3>

              <p className="mt-2 text-gray-600">
                Long-Term Focus
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}