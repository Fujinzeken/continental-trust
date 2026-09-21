function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M1 4h13v12H1z" />
      <path d="M14 8h4l3 4v4h-7" />
      <circle cx="5.5" cy="18.5" r="2" />
      <circle cx="17.5" cy="18.5" r="2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-7" />
      <path d="M22 20H2" />
    </svg>
  );
}

const cards = [
  {
    icon: <TruckIcon />,
    title: "Auto liability",
    body: "Bodily injury and property damage liability arising from the operation of covered commercial vehicles, meeting federal financial-responsibility requirements.",
  },
  {
    icon: <ShieldIcon />,
    title: "Built for compliance",
    body: "Coverage structured around the realities of FMCSA operating authority and DOT financial-responsibility filings for interstate and intrastate carriers.",
  },
  {
    icon: <ChartIcon />,
    title: "Underwriting discipline",
    body: "Carriers are evaluated on safety performance and loss history, keeping the book focused on well-run operations and sustainable results.",
  },
];

export default function Coverage() {
  return (
    <section id="coverage" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <p className="text-[16px] font-bold text-navy">Coverage</p>
        <h2 className="mt-5 max-w-2xl font-serif text-[34px] leading-[1.25] text-navy sm:text-[40px]">
          Commercial auto liability for motor carriers.
        </h2>
        <p className="mt-6 max-w-xl text-[17px] leading-[1.7] text-gray-600">
          Continental Trust concentrates on the coverage motor carriers are
          required to carry and rely on most.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-navy/10 bg-white p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-sand text-navy">
                {card.icon}
              </div>
              <h3 className="mt-6 font-serif text-[22px] font-bold text-navy">
                {card.title}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.7] text-gray-600">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[15px] text-gray-500">
          Coverage descriptions are general summaries. Actual terms, conditions,
          limits, and exclusions are governed by the issued policy.
        </p>
      </div>
    </section>
  );
}