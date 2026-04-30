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
    <div className="contact-form">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            {contactData.formFields.name.label} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`form-input ${errors.name ? "error" : ""}`}
            placeholder="Your full name"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            {contactData.formFields.email.label} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`form-input ${errors.email ? "error" : ""}`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            {contactData.formFields.subject.label} *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={`form-input ${errors.subject ? "error" : ""}`}
            placeholder="What's this about?"
          />
          {errors.subject && (
            <span className="error-message">{errors.subject}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            {contactData.formFields.message.label} *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className={`form-textarea ${errors.message ? "error" : ""}`}
            placeholder="Tell me more about your project or inquiry..."
            rows="5"
          />
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="company" className="form-label">
            {contactData.formFields.company.label}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Your company (optional)"
          />
        </div>

        <button type="submit" disabled={isSubmitting} className="submit-button">
          <p className="submit-text">
            {isSubmitting ? "Sending..." : "Send Message"}
          </p>
          <img
            className="paper-plane"
            src={contactData.sendButton.icon}
            alt=""
          />
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
    </div>
  );
}
