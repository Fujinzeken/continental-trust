import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Continental Trust Risk Retention Group",
  description:
    "Terms and conditions governing the use of Continental Trust Risk Retention Group's website and services.",
};

const sections: {
  title: string;
  body: string[];
  list?: string[];
  example?: string;
  contact?: boolean;
}[] = [
  {
    title: "1. Agreement to Terms",
    body: [
      "By accessing and using the website and services provided by Continental Trust Risk Retention Group, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our website or services.",
    ],
  },
  {
    title: "2. Services",
    body: [
      "Continental Trust Risk Retention Group provides commercial auto liability coverage to motor carriers. All coverage is subject to availability, underwriting guidelines, and the terms outlined in the issued policy and related documents provided to members.",
    ],
  },
  {
    title: "3. Rates and Payment",
    body: [
      "All premium quotes are based on information provided by the applicant. Final premiums may vary based on actual underwriting and risk characteristics. Payment terms are as outlined in the issued policy documents unless otherwise agreed upon in writing.",
    ],
  },
  {
    title: "4. Liability",
    body: [
      "Continental Trust Risk Retention Group maintains reinsurance and capital as required by applicable regulations. Our liability for covered losses is limited to the terms of the issued policy and applicable federal and state regulations. Coverage is provided solely under the terms of the issued policy.",
    ],
  },
  {
    title: "5. Prohibited Uses",
    body: [
      "We reserve the right to decline coverage for hazardous operations, unlawful activities, or any risks prohibited by federal or state law. Applicants and members are responsible for the accurate and complete disclosure of all information submitted during the underwriting process.",
    ],
  },
  {
    title: "6. Claims",
    body: [
      "Claims must be reported promptly in writing, in accordance with the notice provisions of the issued policy. All claims will be processed in accordance with the terms of the issued policy and applicable regulations.",
    ],
  },
  {
    title: "7. SMS Communication Terms of Service",
    body: [],
  },
  {
    title: "7.1 SMS Consent Communication",
    body: [
      "The information (phone numbers) obtained as part of the SMS consent process will not be shared with third parties for marketing purposes. Your phone number is collected solely for the purpose of providing you with SMS communications related to our services.",
    ],
  },
  {
    title: "7.2 Types of SMS Communications",
    body: [
      "If you have consented to receive text messages from Continental Trust Risk Retention Group, you may receive messages related to the following:",
    ],
    list: [
      "Policy status updates and renewal notifications",
      "Appointment and documentation reminders",
      "Follow-up messages regarding your account",
      "Billing inquiries and payment confirmations",
      "Claims communication and coordination",
      "Service updates and important announcements",
    ],
    example:
      '"Hello, this is a reminder that your policy with Continental Trust Risk Retention Group is scheduled for renewal on [Date] at [Time]. You can reply STOP to opt out of SMS messaging from Continental Trust Risk Retention Group at any time."',
  },
  {
    title: "7.3 Message Frequency",
    body: [
      "Message frequency may vary depending on the type of communication and your active policies. For example, you may receive up to 10 SMS messages per week related to your policies, appointments, and billing inquiries. During active claims, message frequency may increase to provide timely updates.",
    ],
  },
  {
    title: "7.4 Opt-In Confirmation",
    body: [
      "When you opt into SMS messages, you will receive the following confirmation:",
    ],
    example:
      '"Thank you for opting into SMS messages from Continental Trust Risk Retention Group. To opt out at any time, reply STOP. For assistance, reply HELP. Message and data rates may apply. Messaging frequency may vary."',
  },
  {
    title: "7.5 Opt-Out Instructions",
    body: [
      "You may opt out of SMS communications at any time by replying STOP to any message. Upon opting out, you will receive:",
    ],
    example:
      '"Thank you for opting out of SMS messages from Continental Trust Risk Retention Group. You will not receive any further SMS communications. To opt back in at any time, reply START."',
  },
  {
    title: "7.6 Help and Support",
    body: [
      "For assistance with SMS communications, reply HELP to any message. You will receive:",
    ],
    example:
      '"Thank you for contacting Continental Trust Risk Retention Group. For immediate assistance, please call (854) 214-6443 or visit our website. Message and data rates may apply."',
  },
  {
    title: "7.7 Message and Data Rates",
    body: [
      "Standard message and data rates may apply to SMS communications based on your mobile carrier plan. Continental Trust Risk Retention Group is not responsible for any charges incurred from your mobile carrier for receiving SMS messages.",
    ],
  },
  {
    title: "7.8 Standard Messaging Disclosures",
    body: [],
    list: [
      "Message and data rates may apply.",
      'You can opt out at any time by texting "STOP."',
      'For assistance, text "HELP" or visit our Privacy Policy and Terms of Use pages.',
      "Message frequency may vary.",
    ],
  },
  {
    title: "8. Modifications",
    body: [
      "Continental Trust Risk Retention Group reserves the right to modify these terms at any time. Continued use of our website and services after any modifications constitutes acceptance of the updated terms.",
    ],
  },
  {
    title: "9. Contact Information",
    body: [
      "For questions regarding these Terms and Conditions, please contact us at:",
    ],
    contact: true,
  },
];

export default function TermsOfUsePage() {
  return (
    <main className="bg-cream">
      <section className="bg-navy-deep py-16 text-white">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[14px] font-medium uppercase tracking-[0.18em] text-white/60">
            Legal
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-[1.7] text-white/70">
            These Terms and Conditions govern your use of the Continental Trust
            Risk Retention Group website and services. Please read them
            carefully.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          {sections.map((section) => (
            <article key={section.title} className="mb-12 last:mb-0">
              <h2 className="font-serif text-2xl font-bold text-navy">
                {section.title}
              </h2>
              {section.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="mt-4 text-[16px] leading-[1.8] text-ink/75"
                >
                  {paragraph}
                </p>
              ))}

              {section.list && (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-[16px] leading-[1.7] text-ink/75 marker:text-navy/50">
                  {section.list.map((item) => (
                    <li key={item.slice(0, 32)}>{item}</li>
                  ))}
                </ul>
              )}

              {section.example && (
                <div className="mt-5 rounded-lg border border-gold bg-sand px-6 py-5">
                  <p className="text-[15px] italic leading-[1.8] text-ink/70">
                    {section.example}
                  </p>
                </div>
              )}

              {section.contact && (
                <dl className="mt-4 space-y-2 text-[16px] leading-[1.8] text-ink/75">
                  <div>
                    <dt className="inline font-semibold text-navy">Email: </dt>
                    <dd className="inline">
                      <a
                        href="mailto:laura@continental-trust.net"
                        className="underline decoration-navy/30 underline-offset-4 transition-colors hover:text-navy"
                      >
                        laura@continental-trust.net
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-navy">Phone: </dt>
                    <dd className="inline">
                      <a
                        href="tel:+18542146443"
                        className="underline decoration-navy/30 underline-offset-4 transition-colors hover:text-navy"
                      >
                        (854) 214-6443
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-navy">
                      Address:{" "}
                    </dt>
                    <dd className="inline">South Carolina, United States</dd>
                  </div>
                </dl>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
