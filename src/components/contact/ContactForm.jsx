import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contactData } from "../../data";

export function ContactForm({ emailjsConfig }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        company: formData.company,
        to_email: emailjsConfig.toEmail,
      };

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey,
      );

      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        company: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start gap-4">
      <div className="flex flex-col gap-4 w-full border-2 border-solid border-pollar-night-nord3 p-2 rounded-lg">
        <label
          htmlFor="name"
          className="bg-aurora-nord13 px-2 py-1 font-semibold font-jetbrains-mono rounded-md"
        >
          {contactData.formFields.name.label}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={`text-sm font-jetbrains-mono focus:outline-none focus:bg-frost-nord8/35 rounded-md p-2 ${errors.name ? "bg-aurora-nord11/20" : "bg-snow-storm-nord4/50"}`}
          placeholder={contactData.formFields.name.placeholder}
        />
        {errors.name && (
          <span className="p-1 text-sm text-aurora-nord11 font-cascadia-code">
            {errors.name}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-4 w-full border-2 border-solid border-pollar-night-nord3 p-2 rounded-lg">
        <label
          htmlFor="email"
          className="bg-aurora-nord13 px-2 py-1 font-semibold font-jetbrains-mono rounded-md"
        >
          {contactData.formFields.email.label}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`text-sm font-jetbrains-mono focus:outline-none focus:bg-frost-nord8/35 rounded-md p-2 ${errors.name ? "bg-aurora-nord11/20" : "bg-snow-storm-nord4/50"}`}
          placeholder={contactData.formFields.email.placeholder}
        />
        {errors.email && (
          <span className="p-1 text-sm text-aurora-nord11 font-cascadia-code">
            {errors.email}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-4 w-full border-2 border-solid border-pollar-night-nord3 p-2 rounded-lg">
        <label
          htmlFor="subject"
          className="bg-aurora-nord13 px-2 py-1 font-semibold font-jetbrains-mono rounded-md"
        >
          {contactData.formFields.subject.label}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className={`text-sm font-jetbrains-mono focus:outline-none focus:bg-frost-nord8/35 rounded-md p-2 ${errors.name ? "bg-aurora-nord11/20" : "bg-snow-storm-nord4/50"}`}
          placeholder={contactData.formFields.subject.placeholder}
        />
        {errors.subject && (
          <span className="p-1 text-sm text-aurora-nord11 font-cascadia-code">
            {errors.subject}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-4 w-full border-2 border-solid border-pollar-night-nord3 p-2 rounded-lg">
        <label
          htmlFor="message"
          className="bg-aurora-nord13 px-2 py-1 font-semibold font-jetbrains-mono rounded-md"
        >
          {contactData.formFields.message.label}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className={`text-sm font-jetbrains-mono focus:outline-none focus:bg-frost-nord8/35 rounded-md p-2 ${errors.name ? "bg-aurora-nord11/20" : "bg-snow-storm-nord4/50"}`}
          placeholder={contactData.formFields.message.placeholder}
          rows="5"
        />
        {errors.message && (
          <span className="p-1 text-sm text-aurora-nord11 font-cascadia-code">
            {errors.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="lowercase border-2 border-solid border-pollar-night-nord3 px-2 py-1 rounded-md bg-aurora-nord14 font-cascadia-code text-pollar-night-nord0 font-semibold flex items-center gap-2 self-end"
      >
        <p className="submit-text">
          {isSubmitting ? "Sending..." : "Send Message"}
        </p>
        <i className={contactData.sendButton.icon}></i>
      </button>

      {submitStatus === "success" && (
        <div className="success-message">
          {contactData.sendButton.sucessMessage}
        </div>
      )}

      {submitStatus === "error" && (
        <div className="error-message">
          {contactData.sendButton.errorMessage}
        </div>
      )}
    </form>
  );
}
