"use client";

import { useRef, useState } from "react";

import {
  COMPANY_EMAILS,
  COMPANY_PHONES,
  SITE_NAME,
  WHATSAPP_NUMBER,
} from "../../config/site";
import { PRODUCTS } from "../../data/site-content";

const EMPTY_VALUES = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product: "",
  size: "",
  thickness: "",
  standard: "",
  drawing: "",
  message: "",
};

function validateField(name, value, variant) {
  const trimmed = value.trim();

  if (name === "name") {
    return trimmed ? "" : "Enter your name.";
  }

  if (name === "email") {
    if (!trimmed) {
      return variant === "short" ? "" : "Enter an email address so we can send the quote.";
    }

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
      ? ""
      : "That email looks incomplete. Check it and send again.";
  }

  if (name === "phone") {
    return trimmed.replace(/\D/g, "").length >= 10
      ? ""
      : "Enter a phone number with at least 10 digits.";
  }

  if (name === "product") {
    return trimmed ? "" : "Select a product, or choose Not sure yet.";
  }

  return "";
}

function buildMessage(values) {
  const lines = [`Quote request from the ${SITE_NAME} website`, "", `Name: ${values.name.trim()}`];

  if (values.company.trim()) lines.push(`Company: ${values.company.trim()}`);
  if (values.email.trim()) lines.push(`Email: ${values.email.trim()}`);

  lines.push(`Phone or WhatsApp: ${values.phone.trim()}`, `Product: ${values.product.trim()}`);

  if (values.size.trim()) lines.push(`Size and quantity: ${values.size.trim()}`);
  if (values.thickness.trim()) lines.push(`Thickness: ${values.thickness.trim()}`);
  if (values.standard.trim()) lines.push(`Standard or material requirement: ${values.standard.trim()}`);
  if (values.drawing.trim()) lines.push(`Drawing or sample details: ${values.drawing.trim()}`);
  if (values.message.trim()) lines.push("", `Message: ${values.message.trim()}`);

  return lines.join("\n");
}

function Field({
  id,
  label,
  name,
  optional = false,
  hint,
  error,
  children,
  ...inputProps
}) {
  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {label}
        {optional && (
          <span className="font-normal text-charcoal/65"> (optional)</span>
        )}
      </label>
      {children ?? (
        <input
          aria-describedby={
            [error ? `${id}-error` : null, hint ? `${id}-hint` : null]
              .filter(Boolean)
              .join(" ") || undefined
          }
          aria-invalid={error ? "true" : undefined}
          className="field"
          id={id}
          name={name}
          {...inputProps}
        />
      )}
      {hint && (
        <p className="mt-1.5 text-sm text-charcoal/75" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p className="mt-1.5 text-sm font-medium text-danger" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

export default function QuoteForm({ variant = "full" }) {
  const isShort = variant === "short";
  const [values, setValues] = useState(EMPTY_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [handoffUrl, setHandoffUrl] = useState("");

  const honeypotRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const productRef = useRef(null);

  const requiredFields = isShort
    ? ["name", "phone", "product"]
    : ["name", "email", "phone", "product"];

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => (current[name] ? { ...current, [name]: "" } : current));
    setStatus("idle");
  }

  function handleBlur(event) {
    const { name, value } = event.target;
    setErrors((current) => ({
      ...current,
      [name]: validateField(name, value, variant),
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (honeypotRef.current?.value) return;

    const nextErrors = {};
    for (const name of requiredFields) {
      const message = validateField(name, values[name], variant);
      if (message) nextErrors[name] = message;
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");

      const refs = { name: nameRef, email: emailRef, phone: phoneRef, product: productRef };
      const firstInvalid = requiredFields.find((name) => nextErrors[name]);
      refs[firstInvalid]?.current?.focus();
      return;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      buildMessage(values)
    )}`;

    setHandoffUrl(url);
    setStatus("handoff");
    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (status === "handoff") {
    return (
      <div
        aria-live="polite"
        className="panel p-6 sm:p-8"
        id={isShort ? undefined : "request-a-quote"}
      >
        <div aria-hidden="true" className="fit-mark mb-6">
          <span className="fit-mark__outline" />
          <span className="fit-mark__piece" />
        </div>
        <h2 className="display-md m-0 mb-3">Ready to send.</h2>
        <p className="mb-2 max-w-[50ch] text-charcoal">
          WhatsApp has opened in a new tab with your request filled in. Press
          send there to reach United Rubber Cork.
        </p>
        <p className="mb-6 max-w-[50ch] text-sm text-charcoal/75">
          Nothing has been sent from this site yet. If the tab did not open, use
          the button below.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            className="btn btn--primary"
            href={handoffUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Open WhatsApp
          </a>
          <a className="btn btn--secondary" href={`mailto:${COMPANY_EMAILS[0]}`}>
            Email instead
          </a>
        </div>
        <p className="mt-5 mb-0 text-sm text-charcoal/75">
          Prefer to talk? Call{" "}
          <a className="link spec-num" href={`tel:${COMPANY_PHONES[0].href}`}>
            {COMPANY_PHONES[0].display}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div
      className={isShort ? "panel p-6 sm:p-8" : "panel p-6 sm:p-10"}
      id={isShort ? undefined : "request-a-quote"}
    >
      {!isShort && (
        <>
          <h2 className="display-md m-0 mb-3" id="request-a-quote-heading">
            Request a quote
          </h2>
          <p className="mb-8 max-w-[62ch] text-charcoal">
            Send the product, size and standard. This form opens WhatsApp with
            your details filled in, so nothing is sent until you press send
            there.
          </p>
        </>
      )}

      {isShort && (
        <h3 className="display-sm m-0 mb-5">Request a quote</h3>
      )}

      <form
        aria-describedby={status === "error" ? "quote-status" : undefined}
        className="grid gap-5 sm:grid-cols-2"
        noValidate
        onSubmit={handleSubmit}
      >
        <div aria-hidden="true" className="hidden">
          <label htmlFor="quote-website">Website</label>
          <input
            autoComplete="off"
            id="quote-website"
            name="website"
            ref={honeypotRef}
            tabIndex={-1}
            type="text"
          />
        </div>

        <Field
          autoComplete="name"
          error={errors.name}
          id="quote-name"
          label="Name"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          ref={nameRef}
          required
          type="text"
          value={values.name}
        />

        <div>
          <label className="field-label" htmlFor="quote-phone">
            Phone or WhatsApp
          </label>
          <input
            aria-describedby={
              [errors.phone ? "quote-phone-error" : null, "quote-phone-hint"]
                .filter(Boolean)
                .join(" ")
            }
            aria-invalid={errors.phone ? "true" : undefined}
            autoComplete="tel"
            className="field spec-num"
            id="quote-phone"
            inputMode="tel"
            name="phone"
            onBlur={handleBlur}
            onChange={handleChange}
            ref={phoneRef}
            required
            type="tel"
            value={values.phone}
          />
          <p className="mt-1.5 text-sm text-charcoal/75" id="quote-phone-hint">
            We may call to confirm the specification.
          </p>
          {errors.phone && (
            <p className="mt-1.5 text-sm font-medium text-danger" id="quote-phone-error">
              {errors.phone}
            </p>
          )}
        </div>

        <Field
          autoComplete="organization"
          id="quote-company"
          label="Company"
          name="company"
          onChange={handleChange}
          optional
          type="text"
          value={values.company}
        />

        <Field
          autoComplete="email"
          error={errors.email}
          id="quote-email"
          inputMode="email"
          label="Work email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          optional={isShort}
          ref={emailRef}
          type="email"
          value={values.email}
        />

        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="quote-product">
            Product
          </label>
          <select
            aria-describedby={errors.product ? "quote-product-error" : undefined}
            aria-invalid={errors.product ? "true" : undefined}
            className="field"
            id="quote-product"
            name="product"
            onBlur={handleBlur}
            onChange={handleChange}
            ref={productRef}
            required
            value={values.product}
          >
            <option value="">Select a product</option>
            {PRODUCTS.map((product) => (
              <option key={product.slug} value={product.name}>
                {product.name}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
          {errors.product && (
            <p className="mt-1.5 text-sm font-medium text-danger" id="quote-product-error">
              {errors.product}
            </p>
          )}
        </div>

        <Field
          id="quote-size"
          label="Size and quantity"
          name="size"
          onChange={handleChange}
          optional
          placeholder="e.g. 3 ft x 3 ft sheet, 12 sheets"
          type="text"
          value={values.size}
        />

        {!isShort && (
          <>
            <Field
              id="quote-thickness"
              label="Thickness"
              name="thickness"
              onChange={handleChange}
              optional
              placeholder="e.g. 6 mm"
              type="text"
              value={values.thickness}
            />

            <Field
              id="quote-standard"
              label="Standard or material requirement"
              name="standard"
              onChange={handleChange}
              optional
              placeholder="e.g. IS 4253 Part II"
              type="text"
              value={values.standard}
            />

            <Field
              id="quote-drawing"
              label="Drawing or sample"
              name="drawing"
              onChange={handleChange}
              optional
              type="text"
              value={values.drawing}
            />

            <div className="sm:col-span-2">
              <label className="field-label" htmlFor="quote-message">
                Message
                <span className="font-normal text-charcoal/65"> (optional)</span>
              </label>
              <textarea
                className="field min-h-32"
                id="quote-message"
                name="message"
                onChange={handleChange}
                rows={4}
                value={values.message}
              />
            </div>
          </>
        )}

        <div className="sm:col-span-2">
          <button className="btn btn--primary w-full sm:w-auto" type="submit">
            Send quote request
          </button>
          <p className="mt-3 mb-0 max-w-[58ch] text-sm text-charcoal/75">
            Opens WhatsApp. Send drawings by WhatsApp or email; this site does
            not accept file uploads yet.
          </p>
          <p aria-live="polite" className="mt-3 mb-0 text-sm font-medium text-danger">
            {status === "error"
              ? "Check the highlighted fields and send again."
              : ""}
          </p>
        </div>
      </form>
    </div>
  );
}
