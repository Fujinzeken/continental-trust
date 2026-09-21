import Logo from "./logo";

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Coverage", href: "#coverage" },
  { label: "Our approach", href: "#approach" },
  { label: "Who we cover", href: "#who-we-cover" },
  { label: "Company information", href: "#company-information" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo variant="footer" />
            <p className="mt-6 max-w-xs text-[15px] leading-[1.7] text-white/70">
              A specialty insurer providing commercial auto liability coverage to
              motor carriers. Domiciled in South Carolina.
            </p>
          </div>

          <div>
            <h3 className="text-[16px] font-bold">Company</h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-bold">Contact</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="mailto:laura@continental-trust.net"
                  className="text-[15px] text-white/75 transition-colors hover:text-white"
                >
                  laura@continental-trust.net
                </a>
              </li>
              <li>
                <a
                  href="tel:+18542146443"
                  className="text-[15px] text-white/75 transition-colors hover:text-white"
                >
                  (854) 214-6443
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[15px] text-white/75 transition-colors hover:text-white"
                >
                  Request information
                </a>
              </li>
              <li>
                <a
                  href="mailto:claims@continental-trust.net"
                  className="text-[15px] text-white/75 transition-colors hover:text-white"
                >
                  Report a claim
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <p className="text-[14px] leading-[1.8] text-white/60">
            <span className="font-bold text-white/80">Important notice.</span>{" "}
            Continental Trust Risk Retention Group is a risk retention group
            chartered and licensed as a liability insurer under the laws of its
            state of domicile and authorized to operate under the federal
            Liability Risk Retention Act of 1986. Risk retention groups may not
            be subject to all of the insurance laws and regulations of every
            state in which they operate, and may not participate in state
            insurance guaranty funds. Coverage is provided solely under the terms
            of the issued policy.
          </p>

          <div className="mt-8 flex flex-col gap-4 text-[14px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Continental Trust Risk Retention Group. All rights reserved.</p>
            <div className="flex gap-2">
              <a href="#top" className="transition-colors hover:text-white">
                Privacy policy
              </a>
              <span>·</span>
              <a href="#top" className="transition-colors hover:text-white">
                Terms of use
              </a>
              <span>·</span>
              <a href="#company-information" className="transition-colors hover:text-white">
                Licensing &amp; disclosures
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}