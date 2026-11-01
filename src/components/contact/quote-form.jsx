"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  COMPANY_EMAILS,
  COMPANY_PHONES,
  SITE_NAME,
  WHATSAPP_NUMBER,
} from "../../config/site";
import { PRODUCTS } from "../../data/site-content";

const fieldClass =
  "min-h-12 w-full rounded-sm border border-charcoal/60 bg-paper px-4 py-3 text-charcoal placeholder:text-charcoal/70 transition-colors focus:border-montado focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-amber aria-invalid:border-danger";

const labelClass = "mb-1.5 block font-semibold text-montado";

const errorClass = "mt-1.5 text-sm font-medium text-danger";

const hintClass = "mt-1.5 text-sm text-charcoal/80";

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

function validateField(name, value) {
  const trimmed = value.trim();

  if (name === "name") {
    return trimmed ? "" : "Enter your name.";
  }

  if (name === "email") {
    if (!trimmed) {
      return "Enter an email address so we can send the quote.";
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
  const lines = [
    `Quote request from the ${SITE_NAME} website`,
    "",
    `Name: ${values.name.trim()}`,
  ];

  if (values.company.trim()) {
    lines.push(`Company: ${values.company.trim()}`);
  }

  lines.push(
    `Email: ${values.email.trim()}`,
    `Phone or WhatsApp: ${values.phone.trim()}`,
    `Product: ${values.product.trim()}`
  );

  if (values.size.trim()) {
    lines.push(`Size and quantity: ${values.size.trim()}`);
  }

  if (values.thickness.trim()) {
    lines.push(`Thickness: ${values.thickness.trim()}`);
  }

  if (values.standard.trim()) {
    lines.push(`Standard or material requirement: ${values.standard.trim()}`);
  }

  if (values.drawing.trim()) {
    lines.push(`Drawing or sample details: ${values.drawing.trim()}`);
  }

  if (values.message.trim()) {
    lines.push("", `Message: ${values.message.trim()}`);
  }

  return lines.join("\n");
}

export default function QuoteForm() {
  const [values, setValues] = useState(EMPTY_VALUES);
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const honeypotRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const productRef = useRef(null);

  const requiredFields = [
    ["name", nameRef],
    ["email", emailRef],
    ["phone", phoneRef],
    ["product", productRef],
  ];

  function handleChange(event) {
    const { name, value } = event.target;

    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) =>
      current[name] ? { ...current, [name]: "" } : current
    );
    setFeedback(null);
  }

  function handleBlur(event) {
    const { name, value } = event.target;
    const message = validateField(name, value);

    setErrors((current) => ({ ...current, [name]: message }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (honeypotRef.current?.value) {
      return;
    }

    const nextErrors = {};

    for (const [name] of requiredFields) {
      const message = validateField(name, values[name]);

      if (message) {
        nextErrors[name] = message;
      }
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setWhatsappUrl("");
      setFeedback({
        type: "error",
        message: "Check the highlighted fields and send again.",
      });

      const firstInvalid = requiredFields.find(([name]) => nextErrors[name]);
      firstInvalid?.[1].current?.focus();

      return;
    }

    const message = buildMessage(values);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setWhatsappUrl(url);
    setFeedback({
      type: "info",
      message:
        "WhatsApp is opening in a new tab with your request. Press send in WhatsApp to reach United Rubber Cork.",
    });

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      aria-labelledby="request-a-quote-heading"
      className="max-w-[850px] border-t-4 border-montado bg-paper p-6 sm:p-10"
      id="request-a-quote"
    >
      <p className="mb-3 text-sm font-semibold text-montado">
        Quote requests
      </p>
      <h2
        className="mb-4 text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-montado [font-variation-settings:'wdth'_120]"
        id="request-a-quote-heading"
      >
        Request a quote
      </h2>
      <p className="mb-8 max-w-[68ch] text-lg leading-relaxed text-charcoal">
        Tell us what you need and we will reply with a quote. This form opens
        WhatsApp with your details filled in, so nothing is sent until you press
        send there.
      </p>

      <form
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

        <div>
          <label className={labelClass} htmlFor="quote-name">
            Name
          </label>
          <input
            aria-describedby={errors.name ? "quote-name-error" : undefined}
            aria-invalid={errors.name ? "true" : undefined}
            autoComplete="name"
            className={fieldClass}
            id="quote-name"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            ref={nameRef}
            required
            type="text"
            value={values.name}
          />
          {errors.name && (
            <p className={errorClass} id="quote-name-error">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="quote-company">
            Company
            <span className="font-normal text-charcoal/70"> (optional)</span>
          </label>
          <input
            autoComplete="organization"
            className={fieldClass}
            id="quote-company"
            name="company"
            onChange={handleChange}
            type="text"
            value={values.company}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="quote-email">
            Work email
          </label>
          <input
            aria-describedby={errors.email ? "quote-email-error" : undefined}
            aria-invalid={errors.email ? "true" : undefined}
            autoComplete="email"
            className={fieldClass}
            id="quote-email"
            inputMode="email"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            ref={emailRef}
            required
            type="email"
            value={values.email}
          />
          {errors.email && (
            <p className={errorClass} id="quote-email-error">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="quote-phone">
            Phone or WhatsApp
          </label>
          <input
            aria-describedby={
              errors.phone
                ? "quote-phone-hint quote-phone-error"
                : "quote-phone-hint"
            }
            aria-invalid={errors.phone ? "true" : undefined}
            autoComplete="tel"
            className={fieldClass}
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
          <p className={hintClass} id="quote-phone-hint">
            We may call to confirm the specification.
          </p>
          {errors.phone && (
            <p className={errorClass} id="quote-phone-error">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="quote-product">
            Product
          </label>
          <select
            aria-describedby={errors.product ? "quote-product-error" : undefined}
            aria-invalid={errors.product ? "true" : undefined}
            className={fieldClass}
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
            <p className={errorClass} id="quote-product-error">
              {errors.product}
            </p>
          )}
        </div>

        <div aria-live="polite" className="min-h-6 sm:col-span-2" role="status">
          {feedback && (
            <p
              className={
                feedback.type === "error"
                  ? "mb-0 text-sm font-medium text-danger"
                  : "mb-0 text-sm text-montado"
              }
            >
              {feedback.message}
            </p>
          )}
        </div>

        {whatsappUrl && (
          <p className="mb-0 text-sm text-charcoal sm:col-span-2">
            If WhatsApp did not open,{" "}
            <a
              className="font-semibold text-montado underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber"
              href={whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              open the message again
            </a>
            .
          </p>
        )}

        <div className="sm:col-span-2">
          <button
            className="inline-flex min-h-12 items-center justify-center rounded-sm bg-amber px-5 py-3 font-semibold text-charcoal transition-colors hover:bg-amber/90 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber"
            type="submit"
          >
            Send quote request on WhatsApp
          </button>
        </div>
      </form>

      <p className="mb-0 mt-6 max-w-[68ch] text-sm text-charcoal">
        Your details are shared only to answer this request. Read the{" "}
        <Link
          className="font-semibold text-montado underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber"
          href="/privacy"
        >
          privacy notice
        </Link>
        .
      </p>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-charcoal/15 pt-5">
        <a
          className="inline-flex min-h-11 items-center font-semibold text-montado underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber"
          href={`mailto:${COMPANY_EMAILS[0]}?subject=${encodeURIComponent(`Quote request for ${SITE_NAME} products`)}`}
        >
          Email a quote request instead
        </a>
        <a
          className="inline-flex min-h-11 items-center font-semibold text-montado underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber"
          href={`tel:${COMPANY_PHONES[0].href}`}
        >
          Call {COMPANY_PHONES[0].display}
        </a>
      </div>

      <noscript>
        <p className="mb-0 mt-6 border-l-4 border-cork bg-cork-light/60 p-5 text-sm text-charcoal">
          This form needs JavaScript to open WhatsApp. Email{" "}
          <a
            className="font-semibold text-montado underline-offset-4 hover:underline"
            href={`mailto:${COMPANY_EMAILS[0]}`}
          >
            {COMPANY_EMAILS[0]}
          </a>{" "}
          or call{" "}
          <a
            className="font-semibold text-montado underline-offset-4 hover:underline"
            href={`tel:${COMPANY_PHONES[0].href}`}
          >
            {COMPANY_PHONES[0].display}
          </a>
          .
        </p>
      </noscript>
    </section>
  );
}
