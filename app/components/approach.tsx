const items = [
  {
    title: "Single-line focus",
    body: "We write only commercial auto liability, so our exposures are well understood and consistently managed.",
  },
  {
    title: "Industry knowledge",
    body: "Deep familiarity with FMCSA, CSA/SMS, and DOT realities lets us read a carrier's risk accurately.",
  },
  {
    title: "Disciplined underwriting",
    body: "Carriers are assessed on safety records and loss history, favoring professional, well-run fleets.",
  },
  {
    title: "Long-term stability",
    body: "A conservative, focused approach oriented toward dependable coverage that lasts.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <p className="text-[16px] font-bold text-gold">Our approach</p>
        <h2 className="mt-5 max-w-xl font-serif text-[34px] leading-[1.25] text-white sm:text-[40px]">
          Focused underwriting. Built for stability.
        </h2>
        <p className="mt-6 max-w-xl text-[18px] leading-[1.7] text-gold">
          A single-line specialist can know its risks well and price them with
          discipline.
        </p>

        <div className="mt-12 grid gap-x-16 gap-y-12 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="border-t border-white/15 pt-8">
              <h3 className="font-serif text-[22px] font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.7] text-white/75">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
