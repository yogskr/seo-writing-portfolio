export function ContactInfo({ contactData }) {
  return (
    <div className="contact-info">
      <div className="contact-email">
        <h3 className="contact-section-title">Email</h3>
        <div className="contact-link email-link">
          <a href={`mailto:${contactData.directContact.email}`}>
            {contactData.directContact.email}
          </a>
        </div>
      </div>

      <div className="contact-social-media">
        <h3 className="contact-section-title">Social Media</h3>
        <div className="social-links">
          {contactData.directContact.socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title={link.name}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
