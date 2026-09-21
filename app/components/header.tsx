import Logo from "./logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Coverage", href: "#coverage" },
  { label: "Our approach", href: "#approach" },
  { label: "Company information", href: "#company-information" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14.5px] font-medium text-navy/70 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md border border-navy/60 px-6 py-3 text-[14.5px] font-medium text-navy transition-colors hover:bg-navy hover:text-cream"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
}