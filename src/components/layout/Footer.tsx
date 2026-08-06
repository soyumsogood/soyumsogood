import Container from "@/components/ui/Container";
import Logo from "@/components/branding/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white">
      <Container>
        <div className="border-b border-gray-800 py-16">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Brand */}

            <div>
              <div className="mb-6">
                <Logo />
              </div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#F8CB34]">
                Building India&apos;s Next Generation of Food Brands.
              </p>

              <p className="leading-8 text-gray-400">
                So Yum! So Good! develops modern food brands powered by
                innovation, technology, and operational excellence to create
                unforgettable customer experiences.
              </p>
            </div>

            {/* Company */}

            <div>
              <h3 className="mb-6 text-lg font-bold text-white">
                Company
              </h3>

              <ul className="space-y-4 text-gray-400">
                <li>About</li>
                <li>Technology</li>
                <li>Ecosystem</li>
                <li>Careers</li>
              </ul>
            </div>

            {/* Brands */}

            <div>
              <h3 className="mb-6 text-lg font-bold text-white">
                Brands
              </h3>

              <ul className="space-y-4 text-gray-400">
                <li>
                  <a
                    href="https://dcdnation.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    DCD™
                  </a>
                </li>

                <li>
                  <a
                    href="https://yumexpress.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    Yum! Express™
                  </a>
                </li>

                <li className="text-gray-500">
                  Future Brands
                </li>
              </ul>
            </div>

            {/* Connect */}

            <div>
              <h3 className="mb-6 text-lg font-bold text-white">
                Connect
              </h3>

              <ul className="space-y-4 text-gray-400">
                <li>Contact Us</li>
                <li>Partnerships</li>
                <li>Careers</li>

                <li>
                  <a
                    href="https://www.instagram.com/soyumsogood"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    Follow Our Journey
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}

        <div className="flex flex-col items-center justify-between gap-6 py-8 text-sm text-gray-500 md:flex-row">
          <p>
            © {currentYear} So Yum! So Good!™. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms &amp; Conditions</span>
            <span>Trademark Notice</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}