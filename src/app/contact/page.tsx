import ContactHero from "@/components/contact/ContactHero";
import ContactEnquiries from "@/components/contact/ContactEnquiries";
import ContactForm from "@/components/contact/ContactForm";
import ContactLocation from "@/components/contact/ContactLocation";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata = {
  title: "Contact | So Yum! So Good!",
  description:
    "Get in touch with So Yum! So Good! for business partnerships, brand opportunities, careers, and general enquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactEnquiries />
      <ContactForm />
      <ContactLocation />
      <ContactCTA />
    </main>
  );
}