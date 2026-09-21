import ContactForm from "../contact-form";

const contactRows: { label: string; value: React.ReactNode }[] = [
  { label: "Contact", value: "Laura Marshalls" },
  {
    label: "Email",
    value: (
      <a
        href="mailto:laura@continental-trust.net"
        className="font-semibold text-white underline underline-offset-4 transition-colors hover:text-gold"
      >
        laura@continental-trust.net
      </a>
    ),
  },
  {
    label: "Phone",
    value: (
      <a
        href="tel:+18542146443"
        className="font-semibold text-white underline underline-offset-4 transition-colors hover:text-gold"
      >
        (854) 214-6443
      </a>
    ),
  },
  {
    label: "Office",
    value: "38 Broad Street, Suite 200\nCharleston, SC 29401",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[16px] font-bold text-gold">Contact</p>
            <h2 className="mt-5 max-w-md font-serif text-[34px] leading-[1.25] text-white sm:text-[40px]">
              Get in touch with Continental Trust.
            </h2>
            <p className="mt-6 max-w-lg text-[17px] leading-[1.7] text-gold">
              For coverage questions, broker inquiries, or verification
              requests, reach us directly.
            </p>

            <dl className="mt-10">
              {contactRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[120px_1fr] gap-4 border-b border-white/10 py-4"
                >
                  <dt className="pt-0.5 text-[15px] text-white/70">
                    {row.label}
                  </dt>
                  <dd className="whitespace-pre-line text-[16px] font-semibold text-white">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-[15px] text-white/70">
              To report a claim, email{" "}
              <a
                href="mailto:claims@continental-trust.net"
                className="font-semibold text-white underline underline-offset-4 transition-colors hover:text-gold"
              >
                claims@continental-trust.net
              </a>{" "}
              or call the number above.
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 text-navy shadow-xl">
            <h3 className="font-serif text-[26px] font-bold">
              Request information
            </h3>
            <p className="mt-2 text-[15px] text-gray-500">
              Tell us about your operation and we&apos;ll follow up.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
