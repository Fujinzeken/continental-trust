"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-gray-400 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div>
        <label htmlFor="company-name" className="mb-2 block text-[15px] font-semibold text-navy">
          Company name
        </label>
        <input
          id="company-name"
          name="companyName"
          type="text"
          required
          placeholder="Your motor carrier's legal name"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="your-name" className="mb-2 block text-[15px] font-semibold text-navy">
          Your name
        </label>
        <input
          id="your-name"
          name="yourName"
          type="text"
          required
          placeholder="Full name"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-[15px] font-semibold text-navy">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-[15px] font-semibold text-navy">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Coverage or verification question"
          className={`${inputClass} resize-y`}
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-navy px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-navy-deep"
      >
        Send inquiry
      </button>
      {submitted && (
        <p className="text-[15px] font-medium text-navy">
          Thank you — your inquiry has been received. We&apos;ll follow up shortly.
        </p>
      )}
    </form>
  );
}