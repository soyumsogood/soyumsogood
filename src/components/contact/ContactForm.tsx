"use client";

import { FormEvent, useState } from "react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Eyebrow, H2, Body } from "@/components/ui/Typography";

const enquiryTypes = [
  "Business Partnership",
  "Brand Opportunity",
  "Franchise",
  "Careers",
  "Media & Press",
  "Supplier / Vendor",
  "Customer Feedback",
  "General Enquiry",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      organization: formData.get("organization"),
      enquiryType: formData.get("enquiryType"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit your enquiry."
        );
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Contact form error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div id="contact-form" className="scroll-mt-24">
      <Section className="bg-gray-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <Eyebrow className="mb-4 text-[#F8CB34]">
                Send An Enquiry
              </Eyebrow>

              <H2 className="mb-6 text-white">
                Let&apos;s Start A Conversation.
              </H2>

              <Body className="text-gray-300">
                Tell us a little about yourself and what you would like to
                discuss. Our team can review your enquiry and get back to you.
              </Body>

              <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-900 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F8CB34]">
                  Before You Submit
                </p>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Please provide enough information for our team to understand
                  your enquiry and respond appropriately.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-800 bg-gray-900 p-6 md:p-10">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C8102E] text-2xl text-white">
                    ✓
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Thank You.
                  </h3>

                  <p className="mx-auto mt-4 max-w-lg text-gray-400">
                    Your enquiry has been submitted successfully. Our team will
                    review your message and get back to you.
                  </p>

                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center justify-center rounded-xl bg-[#C8102E] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Full Name *
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-gray-700 bg-gray-800 p-4 text-white outline-none placeholder:text-gray-500 transition focus:border-[#C8102E]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Email Address *
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-gray-700 bg-gray-800 p-4 text-white outline-none placeholder:text-gray-500 transition focus:border-[#C8102E]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="Optional"
                        className="w-full rounded-xl border border-gray-700 bg-gray-800 p-4 text-white outline-none placeholder:text-gray-500 transition focus:border-[#C8102E]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="organization"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Company / Organisation
                      </label>

                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        autoComplete="organization"
                        placeholder="Optional"
                        className="w-full rounded-xl border border-gray-700 bg-gray-800 p-4 text-white outline-none placeholder:text-gray-500 transition focus:border-[#C8102E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="enquiryType"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Enquiry Type *
                    </label>

                    <select
                      id="enquiryType"
                      name="enquiryType"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-gray-700 bg-gray-800 p-4 text-white outline-none transition focus:border-[#C8102E]"
                    >
                      <option value="" disabled>
                        Select an enquiry type
                      </option>

                      {enquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Message *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={10}
                      rows={7}
                      placeholder="Tell us about your enquiry..."
                      className="w-full resize-y rounded-xl border border-gray-700 bg-gray-800 p-4 text-white outline-none placeholder:text-gray-500 transition focus:border-[#C8102E]"
                    />
                  </div>

                  <div className="rounded-xl border border-gray-800 bg-gray-950 p-4">
                    <label className="flex items-start gap-3 text-sm text-gray-400">
                      <input
                        type="checkbox"
                        name="privacy"
                        required
                        className="mt-1 h-4 w-4 rounded border-gray-600 bg-gray-800"
                      />

                      <span>
                        I agree that the information provided may be used to
                        respond to my enquiry and I have read the{" "}
                        <a
                          href="/privacy"
                          className="font-medium text-[#F8CB34] hover:underline"
                        >
                          Privacy Policy
                        </a>
                        .
                      </span>
                    </label>
                  </div>

                  {errorMessage && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-900 bg-red-950/50 p-4 text-sm text-red-300"
                    >
                      {errorMessage}
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center rounded-xl bg-[#C8102E] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                    </button>
                  </div>

                  <p className="text-xs leading-6 text-gray-500">
                    Your information will be handled securely and used only for
                    responding to your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}