export function ContactInfo({ contactData }) {
  return (
    <>
      <div className="col-span-8 flex flex-col gap-4 border-2 border-solid border-pollar-night-nord3 rounded-lg p-4 h-full shadow-small bg-aurora-nord12 text-pollar-night-nord0">
        <h3 className="lowercase text-sm font-cascadia-code">
          {contactData.directContact.title[0]}
        </h3>
        <a
          href={`mailto:${contactData.directContact.email}`}
          className="font-semibold font-jetbrains-mono tracking-tighter md:tracking-normal"
        >
          {contactData.directContact.email}
        </a>
      </div>

      <div className="col-span-4 flex flex-col gap-4 border-2 border-solid border-pollar-night-nord3 rounded-lg p-4 h-full shadow-small bg-aurora-nord14 text-pollar-night-nord0">
        <h3 className="lowercase text-sm font-cascadia-code">
          {contactData.directContact.title[1]}
        </h3>
        <div className="flex items-center justify-between">
          {contactData.directContact.socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
            >
              <i className={`text-2xl ${link.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
