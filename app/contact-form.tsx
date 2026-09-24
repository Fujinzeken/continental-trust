"use client";

import { useState } from "react";

const SHEET_WEBHOOK_URL = process.env.NEXT_PUBLIC_SHEET_WEBHOOK_URL ?? "";

const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-gray-400 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!SHEET_WEBHOOK_URL) {
      console.warn("NEXT_PUBLIC_SHEET_WEBHOOK_URL is not configured.");
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");

    try {
      await fetch(SHEET_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          companyName: data.get("companyName"),
          yourName: data.get("yourName"),
          email: data.get("email"),
          message: data.get("message"),
          smsConsent: data.get("smsConsent") === "on",
          submittedAt: new Date().toISOString(),
        }),
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="company-name"
          className="mb-2 block text-[15px] font-semibold text-navy"
        >
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
        <label
          htmlFor="your-name"
          className="mb-2 block text-[15px] font-semibold text-navy"
        >
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
        <label
          htmlFor="email"
          className="mb-2 block text-[15px] font-semibold text-navy"
        >
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
        <label
          htmlFor="message"
          className="mb-2 block text-[15px] font-semibold text-navy"
        >
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
        disabled={status === "submitting"}
        className="rounded-md bg-navy px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send inquiry"}
      </button>
      <label
        htmlFor="sms-consent"
        className="flex items-start gap-3 text-[13.5px] leading-[1.6] text-ink/75"
      >
        <input
          id="sms-consent"
          name="smsConsent"
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-navy"
        />
        <span>
          By checking this box, you agree to receive SMS messages from
          Continental Trust Risk Retention Group related to conversational
          purposes. You may reply STOP to opt out at any time. Reply HELP to{" "}
          <a
            href="tel:+18542146443"
            className="underline decoration-navy/30 underline-offset-2 hover:text-navy"
          >
            (854) 214-6443
          </a>{" "}
          for assistance. Messages and data rates may apply. Message frequency
          will vary. Learn more on our{" "}
          <a
            href="/privacy-policy"
            className="underline decoration-navy/30 underline-offset-2 hover:text-navy"
          >
            Privacy Policy
          </a>{" "}
          page and{" "}
          <a
            href="/terms-of-use"
            className="underline decoration-navy/30 underline-offset-2 hover:text-navy"
          >
            Terms &amp; Conditions
          </a>
          .
        </span>
      </label>
      {status === "success" && (
        <p className="text-[15px] font-medium text-navy">
          Thank you — your inquiry has been received. We&apos;ll follow up
          shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-[15px] font-medium text-red-600">
          Something went wrong sending your inquiry. Please try again or email
          us directly.
        </p>
      )}
    </form>
  );
}