export default function Logo({
  variant = "header",
}: {
  variant?: "header" | "footer";
}) {
  const light = variant === "footer";
  return (
    <a href="#top" className="flex items-center gap-3">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-md font-serif text-lg font-bold ${
          light ? "bg-cream text-navy" : "bg-navy text-white"
        }`}
      >
        CT
      </span>
      <span className="leading-tight">
        <span
          className={`block font-serif text-[15px] font-bold tracking-[0.08em] ${
            light ? "text-cream" : "text-navy"
          }`}
        >
          CONTINENTAL TRUST
        </span>
        <span
          className={`block text-[8px] font-semibold tracking-[0.32em] ${
            light ? "text-cream/70" : "text-navy/70"
          }`}
        >
          RISK RETENTION GROUP
        </span>
      </span>
    </a>
  );
}