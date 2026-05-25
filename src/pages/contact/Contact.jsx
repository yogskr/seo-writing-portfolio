import { useEffect } from "react";
import { ContactForm } from "../../components/contact/ContactForm";
import { ContactInfo } from "../../components/contact/ContactInfo";
import { contactData } from "../../data";
import useIsScrolled from "../../hooks/useIsScrolled";
import emailjs from "@emailjs/browser";

export function Contact() {
  // EmailJS configuration - these would typically come from environment variables
  // For demo purposes, using placeholder values
  const emailjsConfig = {
    serviceId: "your_service_id", // Replace with your EmailJS service ID
    templateId: "your_template_id", // Replace with your EmailJS template ID
    publicKey: "your_public_key", // Replace with your EmailJS public key
    toEmail: contactData.directContact.email,
  };

  useEffect(() => {
    // Initialize EmailJS with public key
    emailjs.init(emailjsConfig.publicKey);
  }, [emailjsConfig.publicKey]);

  const stickyHeader = useIsScrolled();

  return (
    <>
      <div className="bg-snow-storm-nord6 p-4">
        <section
          className={`${stickyHeader ? "fixed left-0 right-0 rounded-none shadow-none" : "sticky shadow-small"} top-0 flex flex-wrap items-center justify-between gap-4 bg-pollar-night-nord0 text-snow-storm-nord5 p-4 rounded-lg z-50`}
        >
          <h2 className="text-lg font-bold font-cascadia-code text-snow-storm-nord6">
            {contactData.header.title}
          </h2>
          <p className="text-sm text-frost-nord7 tracking-tight font-jetbrains-mono">
            {contactData.header.description}
          </p>
        </section>
      </div>
      <div className="grid grid-cols-12 auto-rows-auto gap-y-4 gap-x-3 p-4">
        <ContactInfo contactData={contactData} />
        <div className="col-span-12 border-2 border-solid border-pollar-night-nord3 p-4 rounded-lg flex flex-col gap-4 shadow-small">
          <h3 className="text-sm lowercase font-cascadia-code text-pollar-night-nord0">
            {contactData.formFields.title}
          </h3>
          <ContactForm emailjsConfig={emailjsConfig} />
        </div>
        <div className="col-span-12 flex flex-col p-4 gap-4 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small bg-frost-nord8">
          <h3 className="lowercase text-sm font-cascadia-code">
            {contactData.availability.title}
          </h3>
          <ul className="lowercase flex flex-wrap gap-2">
            {contactData.availability.description.map((job) => (
              <li
                key={job.id}
                className="border-2 border-solid border-pollar-night-nord0 font-jetbrains-mono px-2 py-1 rounded-md"
              >
                {job.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
