import Section from "@/components/ui/Section";
import { H2, Body } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <Section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#F8CB34]">
            Contact
          </p>

          <H2 className="mb-6 text-white">
            Let's Build the Future of Food Together.
          </H2>

          <Body className="text-gray-300">
            Whether you're interested in partnering with us, joining our team,
            investing in our vision, or simply starting a conversation, we'd
            love to hear from you.
          </Body>
        </div>

        <form className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Full Name *
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-700 bg-gray-800 p-4 text-white outline-none transition focus:border-[#C8102E]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Email Address *
              </label>

              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-xl border border-gray-700 bg-gray-800 p-4 text-white outline-none transition focus:border-[#C8102E]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full rounded-xl border border-gray-700 bg-gray-800 p-4 text-white outline-none transition focus:border-[#C8102E]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Organization / Company
              </label>

              <input
                type="text"
                placeholder="Company or organization name"
                className="w-full rounded-xl border border-gray-700 bg-gray-800 p-4 text-white outline-none transition focus:border-[#C8102E]"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Purpose of Enquiry *
            </label>

            <select className="w-full rounded-xl border border-gray-700 bg-gray-800 p-4 text-white outline-none transition focus:border-[#C8102E]">
              <option value="">Select Purpose *</option>

              <option>Partnership</option>
              <option>Careers</option>
              <option>Investment</option>
              <option>Media & Press</option>
              <option>Supplier / Vendor</option>
              <option>Customer Feedback</option>
              <option>General Enquiry</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Subject *
            </label>

            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Automatically generated after selecting a purpose"
              className="w-full rounded-xl border border-gray-700 bg-gray-800 p-4 text-white outline-none transition focus:border-[#C8102E]"
            />

            <p className="mt-2 text-sm text-gray-500">
              The subject will be automatically suggested based on the selected
              purpose. You can edit it if needed.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Message *
            </label>

            <textarea
              rows={6}
              placeholder="Tell us how we can help..."
              className="w-full rounded-xl border border-gray-700 bg-gray-800 p-4 text-white outline-none transition focus:border-[#C8102E]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Attachment (Optional)
            </label>

            <input
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              className="block w-full rounded-xl border border-dashed border-gray-600 bg-gray-800 p-4 text-gray-300"
            />

            <p className="mt-2 text-sm text-gray-500">
              Supported file types:
              <br />
              PDF, DOC, DOCX, JPG, JPEG, PNG
              <br />
              Maximum file size: 10 MB
            </p>
          </div>

          <label className="flex items-start gap-3 text-sm text-gray-300">
            <input type="checkbox" className="mt-1" />

            <span>I have read and agree to the Privacy Policy.</span>
          </label>

          <div className="pt-4 text-center">
            <Button>
              Start the Conversation
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
}