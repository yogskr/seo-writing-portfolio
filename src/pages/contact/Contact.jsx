import { useEffect } from "react";
import { ContactForm } from "../../components/contact/ContactForm";
import { ContactInfo } from "../../components/contact/ContactInfo";
import { useIsScrolled } from "../../hooks/stickyHeader";
import { contactData } from "../../data";
import emailjs from "@emailjs/browser";
import "./Contact.css";

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

	const isScrolled = useIsScrolled();

	return (
		<div className="contact-container">
			<section
				className={
					isScrolled ? "contact-header scrolled" : "contact-header"
				}
			>
				<h2 className="contact-title">{contactData.header.title}</h2>
			</section>
			<section className="contact-content">
				<hr className="line-break" />
				<p className="contact-description">
					{contactData.header.description}
				</p>
				<div className="contact-info-section">
					<ContactInfo contactData={contactData} />
				</div>

				<hr className="line-break" />
				<div className="contact-form-section">
					<h3 className="section-title">Let's Talk About Projects</h3>
					<ContactForm emailjsConfig={emailjsConfig} />
				</div>
			</section>
		</div>
	);
}
