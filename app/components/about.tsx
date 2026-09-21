export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[16px] font-bold text-navy">About Continental Trust</p>
            <h2 className="mt-5 font-serif text-[34px] leading-[1.2] text-navy sm:text-[40px]">
              A specialty insurer for the trucking industry.
            </h2>
            <p className="mt-7 text-[17px] leading-[1.75] text-gray-600">
              Continental Trust is a specialty insurance company focused on
              commercial automobile liability for motor carriers. We write a
              single line of business, which lets us understand our
              policyholders&apos; operations, exposures, and regulatory
              obligations more closely than a generalist carrier can.
            </p>
            <p className="mt-6 text-[17px] leading-[1.75] text-gray-600">
              That focus shapes everything — how we underwrite, how we price,
              and how we support the carriers we insure. Our aim is dependable
              coverage and steady, long-term protection for professional
              trucking operations.
            </p>
          </div>

          <div className="rounded-lg bg-sand p-8 lg:mt-12">
            <h3 className="font-serif text-[22px] font-bold text-navy">
              Why specialty matters
            </h3>
            <p className="mt-5 text-[16px] leading-[1.75] text-gray-600">
              Trucking is not a general commercial risk. Loss exposures, federal
              financial-responsibility rules, and safety performance all behave
              differently for motor carriers than for other businesses. A
              specialist insurer that works in this field every day can read
              those risks more accurately — and stand behind the coverage more
              reliably.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}