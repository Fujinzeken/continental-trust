const recordRows: { label: string; value: string; sub?: string }[] = [
  { label: "Legal name", value: "Continental Trust Risk Retention Group" },
  { label: "Business", value: "Specialty insurer" },
  { label: "State of domicile", value: "South Carolina" },
  {
    label: "Principal office",
    value: "Charleston, SC",
    sub: "38 Broad Street, Suite 200",
  },
  { label: "Line of business", value: "Commercial auto liability" },
  { label: "Industry served", value: "Motor carriers" },
];

const highlights = [
  "Focused on commercial auto liability",
  "Serving motor carriers across the U.S.",
  "Domiciled and chartered in South Carolina",
];

export default function Hero() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 lg:pb-28 lg:pt-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[13px] font-bold text-gold">
              Specialty commercial auto liability insurance
            </p>
            <h1 className="mt-6 font-serif text-[44px] leading-[1.15] sm:text-[47px]">
              Auto liability coverage,{" "}
              <span className="text-gold">built for motor carriers.</span>
            </h1>
            <p className="mt-8 max-w-xl text-[19px] leading-[1.7] text-gold">
              Continental Trust is a specialty insurer providing commercial
              automobile liability coverage to trucking companies across the
              United States.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-md bg-white px-7 py-4 text-[16px] font-semibold text-navy transition-colors hover:bg-cream"
              >
                Contact us
              </a>
              <a
                href="#company-information"
                className="rounded-md border border-white/30 px-7 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Verify our company
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white text-navy shadow-xl lg:justify-self-end lg:w-full lg:max-w-md">
            <div className="border-b border-gray-200 px-7 py-5">
              <h2 className="font-serif text-[16px] font-bold">
                Company record
              </h2>
              <p className="mt-1 text-[12px] text-gray-500">
                Key details for verification
              </p>
            </div>
            <dl>
              {recordRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-start justify-between gap-6 border-b border-gray-100 px-7 py-4 last:border-b-0"
                >
                  <dt className="pt-0.5 text-[15px] text-gray-500">
                    {row.label}
                  </dt>
                  <dd className="text-right text-[15px] font-semibold text-navy">
                    {row.value}
                    {row.sub && (
                      <span className="mt-1 block text-[13px] font-normal text-gray-500">
                        {row.sub}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-navy-deep">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-gold/70" />
              <span className="text-[15px] text-white/80">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
