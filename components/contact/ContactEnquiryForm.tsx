"use client";

import { useId, useState, type FormEvent } from "react";
import { EMAIL } from "@/lib/navigation";

const SERVICE_OPTIONS = [
  "Marine Safety Inspection",
  "AMSA DCV Marine Surveyor",
  "Flag State Inspection",
  "Class Related Consultancy",
  "Internal Audit — ISM / ISPS / MLC",
  "Pre-Purchase Inspection",
  "Pre-AMSA Inspection",
  "Cargo Survey",
  "Technical Inspection & Marine Engineering Consultancy",
  "Bunker Survey",
  "Pre-PSC Inspection",
  "Safety Vetting Inspection",
  "Other",
] as const;

type FieldName =
  | "name"
  | "company"
  | "email"
  | "phone"
  | "vesselName"
  | "vesselType"
  | "location"
  | "service"
  | "preferredDate"
  | "message";

type FormState = Record<FieldName, string>;

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  vesselName: "",
  vesselType: "",
  location: "",
  service: "",
  preferredDate: "",
  message: "",
};

const fieldClassName =
  "mt-2 block w-full min-w-0 rounded-sm border border-pms-line bg-white px-3 py-3 text-sm text-pms-navy outline-none transition-colors duration-150 focus-visible:border-pms-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactEnquiryForm() {
  const formId = useId();
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function update(name: FieldName, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) {
        return current;
      }
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function validate(state: FormState) {
    const next: Partial<Record<FieldName, string>> = {};

    if (!state.name.trim()) {
      next.name = "Enter your full name.";
    }
    if (!state.email.trim()) {
      next.email = "Enter your email address.";
    } else if (!isValidEmail(state.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!state.phone.trim()) {
      next.phone = "Enter a phone number.";
    }
    if (!state.location.trim()) {
      next.location = "Enter the vessel or inspection location.";
    }
    if (!state.service) {
      next.service = "Select the service required.";
    }
    if (!state.message.trim()) {
      next.message = "Describe the inspection or survey requirement.";
    }

    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0];
      document.getElementById(`${formId}-${first}`)?.focus();
      setStatus("idle");
      return;
    }

    setStatus("ready");
  }

  function enquiryMailto() {
    const lines = [
      `Name: ${values.name}`,
      values.company ? `Company: ${values.company}` : null,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      values.vesselName ? `Vessel name: ${values.vesselName}` : null,
      values.vesselType ? `Vessel type: ${values.vesselType}` : null,
      `Location: ${values.location}`,
      `Service: ${values.service}`,
      values.preferredDate
        ? `Preferred inspection date: ${values.preferredDate}`
        : null,
      "",
      values.message,
    ].filter((line): line is string => line !== null);

    return `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Marine service enquiry: ${values.service}`,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <div className="min-w-0 rounded-sm border border-pms-line bg-white p-5 sm:p-6 lg:p-8">
      <h2
        id="contact-form-heading"
        className="text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
      >
        Send Us a Marine Service Enquiry
      </h2>
      <p className="mt-3 text-sm leading-6 text-pms-muted sm:text-[15px]">
        Tell us about your vessel, service requirement and location. This
        information helps us understand the scope of your enquiry.
      </p>

      <form
        className="mt-8 grid grid-cols-1 gap-5"
        noValidate
        onSubmit={handleSubmit}
        aria-describedby={status === "ready" ? `${formId}-status` : undefined}
      >
        <Field
          id={`${formId}-name`}
          label="Full Name"
          name="name"
          autoComplete="name"
          required
          value={values.name}
          error={errors.name}
          onChange={(value) => update("name", value)}
        />
        <Field
          id={`${formId}-company`}
          label="Company / Organisation"
          name="company"
          autoComplete="organization"
          value={values.company}
          error={errors.company}
          onChange={(value) => update("company", value)}
        />
        <Field
          id={`${formId}-email`}
          label="Email Address"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          error={errors.email}
          onChange={(value) => update("email", value)}
        />
        <Field
          id={`${formId}-phone`}
          label="Phone Number"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          value={values.phone}
          error={errors.phone}
          onChange={(value) => update("phone", value)}
        />
        <Field
          id={`${formId}-vesselName`}
          label="Vessel Name"
          name="vesselName"
          value={values.vesselName}
          error={errors.vesselName}
          onChange={(value) => update("vesselName", value)}
        />
        <Field
          id={`${formId}-vesselType`}
          label="Vessel Type"
          name="vesselType"
          value={values.vesselType}
          error={errors.vesselType}
          onChange={(value) => update("vesselType", value)}
        />
        <Field
          id={`${formId}-location`}
          label="Vessel / Inspection Location"
          name="location"
          required
          value={values.location}
          error={errors.location}
          onChange={(value) => update("location", value)}
        />

        <div>
          <label
            htmlFor={`${formId}-service`}
            className="block text-sm font-semibold text-pms-navy"
          >
            Service Required{" "}
            <span className="font-normal text-pms-muted">(required)</span>
          </label>
          <select
            id={`${formId}-service`}
            name="service"
            required
            value={values.service}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={
              errors.service ? `${formId}-service-error` : undefined
            }
            onChange={(event) => update("service", event.target.value)}
            className={fieldClassName}
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p
              id={`${formId}-service-error`}
              role="alert"
              className="mt-2 text-sm text-red-700"
            >
              {errors.service}
            </p>
          ) : null}
        </div>

        <Field
          id={`${formId}-preferredDate`}
          label="Preferred Inspection Date"
          name="preferredDate"
          type="date"
          value={values.preferredDate}
          error={errors.preferredDate}
          onChange={(value) => update("preferredDate", value)}
        />

        <div>
          <label
            htmlFor={`${formId}-message`}
            className="block text-sm font-semibold text-pms-navy"
          >
            Message / Inspection Requirements{" "}
            <span className="font-normal text-pms-muted">(required)</span>
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            required
            rows={6}
            value={values.message}
            placeholder="Please describe your vessel, inspection requirement, location, preferred date and any relevant details."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? `${formId}-message-error` : undefined
            }
            onChange={(event) => update("message", event.target.value)}
            className={`${fieldClassName} min-h-40 resize-y`}
          />
          {errors.message ? (
            <p
              id={`${formId}-message-error`}
              role="alert"
              className="mt-2 text-sm text-red-700"
            >
              {errors.message}
            </p>
          ) : null}
        </div>

        {status === "ready" ? (
          <div
            id={`${formId}-status`}
            role="status"
            className="border border-pms-line bg-pms-wash px-4 py-4 text-sm leading-6 text-pms-navy"
          >
            <p>
              The enquiry form is ready. Email delivery is not connected on
              this website yet, so the form does not send a message
              automatically.
            </p>
            <p className="mt-2">
              Please email{" "}
              <a
                href={enquiryMailto()}
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                {EMAIL}
              </a>{" "}
              using your email app, or call using the numbers on this page.
            </p>
          </div>
        ) : null}

        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-pms-blue px-6 text-sm font-semibold text-white transition-colors duration-150 hover:bg-pms-marine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue sm:w-auto"
        >
          Send Enquiry
        </button>
      </form>
    </div>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  autoComplete,
  required = false,
  value,
  error,
  onChange,
}: {
  id: string;
  label: string;
  name: FieldName;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-pms-navy">
        {label}{" "}
        <span className="font-normal text-pms-muted">
          {required ? "(required)" : "(optional)"}
        </span>
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={fieldClassName}
      />
      {error ? (
        <p id={errorId} role="alert" className="mt-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
