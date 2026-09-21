const criteria = [
  {
    lead: "Licensed motor carriers",
    rest: " holding active operating authority and DOT registration.",
  },
  {
    lead: "Sound safety records",
    rest: ", reviewed against CSA/SMS performance and loss history.",
  },
  {
    lead: "Commitment to compliance",
    rest: " with FMCSA and applicable state requirements.",
  },
  {
    lead: "Professional operations",
    rest: ", with well-maintained equipment and qualified drivers.",
  },
];

export default function WhoWeCover() {
  return (
    <section id="who-we-cover" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[16px] font-bold text-navy">Who we cover</p>
            <h2 className="mt-5 font-serif text-[34px] leading-[1.2] text-navy sm:text-[40px]">
              Who Continental Trust insures.
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.75] text-gray-600">
              We insure motor carriers that operate professionally, maintain
              valid authority, and take safety and compliance seriously. General
              guidelines are outlined below; specific criteria are set by our
              underwriting.
            </p>

            <ol className="mt-10">
              {criteria.map((item, i) => (
                <li
                  key={item.lead}
                  className="flex gap-6 border-b border-gray-200 py-5 first:border-t-0 last:border-b-0 [&:not(:first-child)]:border-t"
                >
                  <span className="w-8 shrink-0 font-serif text-[15px] tracking-wider text-gray-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[16px] leading-[1.7] text-gray-600">
                    <span className="font-bold text-navy">{item.lead}</span>
                    {item.rest}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-lg bg-sand p-8 lg:mt-14">
            <h3 className="font-serif text-[22px] font-bold text-navy">
              More than a policy
            </h3>
            <p className="mt-5 text-[16px] leading-[1.75] text-gray-600">
              Continental Trust supports insured carriers with safety and
              compliance resources aimed at reducing exposure before losses
              occur — driver qualification, CSA score awareness, and FMCSA
              compliance support.
            </p>
            <p className="mt-5 text-[16px] leading-[1.75] text-gray-600">
              The goal is straightforward: help carriers run safer fleets, which
              protects the carrier and keeps coverage dependable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}