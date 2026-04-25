import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

const SERVICE_OPTIONS = [
  "Static ADAS calibration",
  "Dynamic ADAS calibration",
  "Forward-facing camera",
  "Front / corner radar",
  "Lidar",
  "Surround-view camera",
  "Steering angle sensor",
  "Multi-system / not sure",
];

const CONTACT_EMAIL = "[EMAIL]";

export function Contact() {
  const [pending, setPending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const lines = [
      `Name: ${data.get("name") || ""}`,
      `Shop / Facility: ${data.get("shop") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Vehicle (year / make / model): ${data.get("vehicle") || ""}`,
      `Service requested: ${data.get("service") || ""}`,
      "",
      "Notes:",
      String(data.get("notes") || ""),
    ];
    const subject = `Calibration request — ${data.get("vehicle") || "vehicle"}`;
    const body = lines.join("\n");
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.assign(href);
    // Allow re-submit if user comes back
    setTimeout(() => setPending(false), 1500);
  }

  return (
    <section
      id="contact"
      className="relative border-t border-rule/70 py-20 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-accent" />
                Request
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-8 text-[clamp(1.75rem,3.6vw,3rem)] text-bone max-w-[14ch]">
                Request a calibration.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[42ch] font-serif text-[16px] leading-[1.7] text-bone-2">
                We&rsquo;ll confirm procedure availability for your specific
                year / make / model and respond with scheduling and a written
                estimate within one business day.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <dl className="mt-12 border-t border-rule/70">
                {[
                  ["Phone", "[PHONE]"],
                  ["Email", "[EMAIL]"],
                  ["Hours", "[HOURS]"],
                  ["Address", "[ADDRESS]"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="grid grid-cols-12 gap-4 border-b border-rule/70 py-4"
                  >
                    <dt className="col-span-4 font-mono text-[11px] uppercase tracking-widest text-bone-2">
                      {k}
                    </dt>
                    <dd className="col-span-8 font-mono text-[13px] text-bone">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Shop / Facility" name="shop" />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
                <Field
                  label="Vehicle (year / make / model)"
                  name="vehicle"
                  className="sm:col-span-2"
                  placeholder="e.g. 2023 Toyota RAV4 XLE"
                  required
                />

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label
                    htmlFor="service"
                    className="font-mono text-[11px] uppercase tracking-widest text-bone-2"
                  >
                    Service requested
                  </label>
                  <select id="service" name="service" required defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label
                    htmlFor="notes"
                    className="font-mono text-[11px] uppercase tracking-widest text-bone-2"
                  >
                    Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={5}
                    placeholder="Repair history, urgency, drop-off vs mobile, anything we should know."
                  />
                </div>

                <div className="sm:col-span-2 mt-4 flex items-center justify-between gap-6 border-t border-rule/70 pt-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
                    Submitting opens your email client
                  </span>
                  <button
                    type="submit"
                    disabled={pending}
                    className="font-mono text-[12px] uppercase tracking-widest border border-accent text-accent px-5 py-2.5 hover:bg-accent hover:text-bg transition-colors disabled:opacity-60"
                  >
                    {pending ? "Opening…" : "Submit request"}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
};

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className = "",
}: FieldProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={name}
        className="font-mono text-[11px] uppercase tracking-widest text-bone-2"
      >
        {label}
        {required && <span className="text-accent"> ·</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}
