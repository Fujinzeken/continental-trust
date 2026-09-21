const corporateRows = [
  { label: "Legal name", value: "Continental Trust Risk Retention Group" },
  { label: "Business", value: "Specialty insurer — commercial auto liability" },
  { label: "State of domicile", value: "South Carolina" },
  {
    label: "Principal office",
    value: "38 Broad Street, Suite 200, Charleston, SC 29401",
  },
  { label: "Year established", value: "2026" },
  { label: "Federal EIN", value: "42-3867015" },
];

const regulatoryRows = [
  { label: "NAIC number", value: "18010" },
  { label: "NAIC group code", value: "0000" },
  { label: "SC license / charter no.", value: "526251536" },
  { label: "Certificate of Authority", value: "Approved 09/11/2026" },
  {
    label: "States authorized",
    value: "South Carolina (domicile); additional states to be assigned",
  },
  { label: "Financial strength rating", value: "Not yet rated" },
  {
    label: "Domiciliary regulator",
    value: "South Carolina Dept. of Insurance",
  },
];

export default function CompanyInformation() {
  return (
    <section id="company-information" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <p className="text-[16px] font-bold text-navy">Company information</p>
        <h2 className="mt-5 max-w-2xl font-serif text-[34px] leading-[1.25] text-navy sm:text-[40px]">
          For brokers, regulators, and carriers verifying the company.
        </h2>
        <p className="mt-6 max-w-xl text-[17px] leading-[1.7] text-gray-600">
          Key identifying and regulatory details for due-diligence review.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {[
            { title: "Corporate", rows: corporateRows },
            { title: "Regulatory & financial", rows: regulatoryRows },
          ].map((table) => (
            <div
              key={table.title}
              className="overflow-hidden rounded-lg border border-navy/10 bg-white"
            >
              <div className="bg-sand px-7 py-5">
                <h3 className="text-[16px] font-semibold text-navy">
                  {table.title}
                </h3>
              </div>
              <dl>
                {table.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-start justify-between gap-6 border-b border-gray-200 px-7 py-4 last:border-b-0"
                  >
                    <dt className="pt-0.5 text-[15px] text-gray-500">
                      {row.label}
                    </dt>
                    <dd className="text-right text-[15px] font-semibold text-navy">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-navy/10 bg-white">
          <div className="bg-sand px-7 py-5">
            <h3 className="text-[16px] font-semibold text-navy">
              Verifying documents
            </h3>
          </div>
          <div className="divide-y divide-gray-200 sm:grid sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {[
              {
                title: "Certificate of Authority",
                desc: "Issued by the South Carolina Dept. of Insurance — approved 09/11/2026.",
                href: "/docs/COA-526251536%20Continental%20Trust%20RRG%209.11.26.pdf",
                fileName: "COA-526251536 Continental Trust RRG 9.11.26.pdf",
              },
              {
                title: "IRS EIN confirmation (FEIN)",
                desc: "IRS confirmation letter for Federal EIN 42-3867015.",
                href: "/docs/Continental%20Trust%20RRG%20FEIN.pdf",
                fileName: "Continental Trust RRG FEIN.pdf",
              },
            ].map((doc) => (
              <div
                key={doc.title}
                className="flex flex-wrap items-center justify-between gap-4 px-7 py-5"
              >
                <div>
                  <p className="text-[15px] font-semibold text-navy">
                    {doc.title}
                  </p>
                  <p className="mt-1 text-[13px] text-gray-500">{doc.desc}</p>
                </div>
                <a
                  href={doc.href}
                  download={doc.fileName}
                  className="rounded-md bg-navy px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-navy/85"
                >
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
