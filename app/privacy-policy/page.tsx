import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Continental Trust Risk Retention Group",
  description:
    "How Continental Trust Risk Retention Group collects, uses, discloses, and safeguards your information.",
};

const sections: {
  title: string;
  body: string[];
  list?: string[];
  callout?: { heading: string; paragraphs: string[] };
  contact?: boolean;
}[] = [
  {
    title: "1. Information We Collect",
    body: [
      "We collect information that you provide directly to us and information collected automatically when you use our services.",
    ],
  },
  {
    title: "1.1 Information You Provide",
    body: [],
    list: [
      "Contact Information: Name, email address, phone number, and mailing address",
      "Business Information: Company name, DOT/MC number, fleet details, and billing information",
      "Insurance Application Information: Underwriting data, loss history, driver rosters, and coverage requests",
      "Communication Preferences: Your preferences for receiving communications from us, including SMS consent",
      "Account Information: Username, password, and account settings",
    ],
  },
  {
    title: "1.2 Information Collected Automatically",
    body: [],
    list: [
      "Device Information: IP address, browser type, operating system, and device identifiers",
      "Usage Data: Pages visited, time spent on pages, links clicked, and referring URLs",
      "Location Data: Approximate location based on IP address",
      "Cookies and Tracking Technologies: Information collected through cookies, web beacons, and similar technologies",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use the information we collect for the following purposes:",
    ],
    list: [
      "Service Delivery: To provide, maintain, and improve our commercial auto liability insurance services",
      "Communication: To communicate with you about policies, quotes, appointments, and service updates via phone, email, or SMS",
      "Quote Processing: To process and respond to your requests for premium quotes",
      "Underwriting: To evaluate applications and manage policy-related matters",
      "Customer Support: To respond to your inquiries and provide customer service",
      "Billing: To process payments and send billing communications",
      "Claims Handling: To process and coordinate claims in accordance with the issued policy",
      "Legal Compliance: To comply with applicable laws, regulations, and legal processes",
      "Security: To protect our services, users, and the public from fraud and abuse",
      "Analytics: To analyze usage patterns and improve our website and services",
    ],
  },
  {
    title: "3. Information Sharing and Disclosure",
    body: [
      "We do not sell your personal information to third parties. We may share your information in the following circumstances:",
    ],
    list: [
      "Service Providers: With third-party vendors who assist in our operations (payment processors, IT service providers, communication platforms)",
      "Business Partners: With adjusters, reinsurers, and program partners directly involved in your coverage",
      "Legal Requirements: When required by law, court order, or government authority",
      "Business Transfers: In connection with a merger, acquisition, or sale of assets",
      "With Your Consent: When you have given us explicit permission to share your information",
    ],
    callout: {
      heading: "Important SMS Privacy Notice",
      paragraphs: [
        "Mobile Opt in, SMS Consent, and phone numbers collected for SMS communication purposes will not be shared with any third party and affiliates for marketing purposes.",
        "Phone numbers obtained through SMS opt-in are used solely for the purpose of providing you with service-related communications such as policy updates, renewal reminders, and billing inquiries. We do not share, sell, rent, or trade your phone number or SMS consent with any third parties for their marketing purposes.",
      ],
    },
  },
{
    title: "4. SMS Communications",
    body: [
      "If you opt in to receive SMS communications from Continental Trust Risk Retention Group, please be aware of the following:",
    ],
    list: [
      "You may receive text messages related to policy updates, renewal reminders, follow-up messages, and billing inquiries",
      "Message frequency varies based on your active policies and services",
      "Standard message and data rates may apply based on your mobile carrier plan",
      "You can opt out at any time by replying STOP to any message",
      "For help, reply HELP or contact us at (854) 214-6443",
    ],
    callout: {
      heading: "Terms Reference",
      paragraphs: [
        "For complete SMS terms, please refer to Section 7 of our Terms of Use.",
      ],
    },
  },
  {
    title: "5. Data Security",
    body: [
      "We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:",
    ],
    list: [
      "Encryption of sensitive data in transit and at rest",
      "Secure access controls and authentication",
      "Regular security assessments and updates",
      "Employee training on data protection practices",
      "Physical security measures at our facilities",
    ],
  },
  {
    title: "6. Data Retention",
    body: [
      "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. The retention period may vary based on:",
    ],
    list: [
      "The nature of your relationship with us",
      "Legal obligations requiring data retention",
      "Legitimate business needs",
      "Resolution of disputes or enforcement of agreements",
    ],
  },
  {
    title: "7. Your Rights and Choices",
    body: [
      "Depending on your location, you may have certain rights regarding your personal information:",
    ],
    list: [
      "Access: Request a copy of the personal information we hold about you",
      "Correction: Request correction of inaccurate or incomplete information",
      "Deletion: Request deletion of your personal information, subject to legal exceptions",
      "Opt-Out: Opt out of marketing communications and SMS messages",
      "Portability: Request transfer of your data in a structured format",
    ],
  },
  {
    title: "8. Cookies and Tracking Technologies",
    body: [
      "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user behavior. Types of cookies we use:",
    ],
    list: [
      "Essential Cookies: Required for basic website functionality",
      "Analytics Cookies: Help us understand how visitors use our site",
      "Functional Cookies: Remember your preferences and settings",
    ],
  },
  {
    title: "9. Third-Party Links",
    body: [
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.",
    ],
  },
  {
    title: "10. Children's Privacy",
    body: [
      "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete that information.",
    ],
  },
  {
    title: "11. Changes to This Privacy Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the new policy on this page and updating the \"Last updated\" date. We encourage you to review this Privacy Policy periodically.",
    ],
  },
  {
    title: "12. Contact Us",
    body: [
      "If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:",
      "For SMS-related inquiries, you can also reply HELP to any SMS message or call us directly at (854) 214-6443.",
    ],
    contact: true,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-cream">
      <section className="bg-navy-deep py-16 text-white">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[14px] font-medium uppercase tracking-[0.18em] text-white/60">
            Legal
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-[1.7] text-white/70">
            Continental Trust Risk Retention Group (&quot;we,&quot; &quot;our,&quot;
            or &quot;us&quot;) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website, use our
            services, or communicate with us via SMS, email, or other channels.
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

              {section.callout && (
                <div className="mt-5 rounded-lg border border-gold bg-sand px-6 py-5">
                  <p className="font-serif text-lg font-semibold text-navy">
                    {section.callout.heading}
                  </p>
                  {section.callout.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="mt-3 text-[15px] leading-[1.8] text-ink/70"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {section.contact && (
                <dl className="mt-4 space-y-2 rounded-lg bg-sand px-6 py-5 text-[16px] leading-[1.8] text-ink/75">
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