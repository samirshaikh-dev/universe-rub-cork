"use client";

import { useRef, useState } from "react";

import {
  COMPANY_EMAILS,
  COMPANY_PHONES,
  SITE_NAME,
  WHATSAPP_NUMBER,
} from "../../config/site";
import { PRODUCTS } from "../../data/site-content";
import {
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  CheckCircleIcon,
  CopyIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from "../ui/icons";

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

const COMMON_THICKNESSES = ["1.5 mm", "3.0 mm", "5.0 mm", "6.0 mm", "8.0 mm", "10.0 mm"];

function validateField(name, value, variant) {
  const trimmed = value.trim();

  if (name === "name") {
    return trimmed ? "" : "Please enter your name or company contact.";
  }

  if (name === "email") {
    if (!trimmed) {
      return variant === "short" ? "" : "Please provide a work email for the official quote.";
    }
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
      ? ""
      : "Please enter a valid email address.";
  }

  if (name === "phone") {
    return trimmed.replace(/\D/g, "").length >= 10
      ? ""
      : "Please enter a valid 10-digit mobile or WhatsApp number.";
  }

  if (name === "product") {
    return trimmed ? "" : "Please select a product range or Choose 'Not sure yet'.";
  }

  return "";
}

function buildMessage(values) {
  const lines = [
    `*NEW QUOTE REQUEST — ${SITE_NAME.toUpperCase()}*`,
    `----------------------------------------`,
    `👤 Contact: ${values.name.trim()}`,
  ];

  if (values.company.trim()) lines.push(`🏢 Company: ${values.company.trim()}`);
  if (values.email.trim()) lines.push(`✉️ Email: ${values.email.trim()}`);

  lines.push(`📱 Phone: ${values.phone.trim()}`);
  lines.push(`📦 Product Range: ${values.product.trim()}`);

  if (values.size.trim()) lines.push(`📐 Size / Quantity: ${values.size.trim()}`);
  if (values.thickness.trim()) lines.push(`📏 Thickness: ${values.thickness.trim()}`);
  if (values.standard.trim()) lines.push(`📋 Standard: ${values.standard.trim()}`);
  if (values.drawing.trim()) lines.push(`📎 Drawing Ref: ${values.drawing.trim()}`);
  if (values.message.trim()) {
    lines.push(`----------------------------------------`);
    lines.push(`💬 Remarks: ${values.message.trim()}`);
  }

  return lines.join("\n");
}

export default function QuoteForm({ variant = "full" }) {
  const isShort = variant === "short";
  const [values, setValues] = useState(EMPTY_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [handoffUrl, setHandoffUrl] = useState("");
  const [copied, setCopied] = useState(false);

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
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: "" } : prev));
    setStatus("idle");
  }

  function handleBlur(event) {
    const { name, value } = event.target;
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value, variant),
    }));
  }

  function handleQuickThickness(th) {
    setValues((prev) => ({ ...prev, thickness: th }));
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

    const message = buildMessage(values);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setHandoffUrl(url);
    setStatus("handoff");
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function handleCopy() {
    navigator.clipboard.writeText(buildMessage(values));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  if (status === "handoff") {
    return (
      <div
        aria-live="polite"
        className="card-surface p-6 sm:p-10 border-2 border-montado/20 bg-white shadow-xl rounded-2xl"
        id={isShort ? undefined : "request-a-quote"}
      >
        <div className="flex items-center gap-3 text-montado mb-4">
          <div className="grid size-12 place-items-center rounded-xl bg-montado/10 text-montado">
            <CheckCircleIcon className="size-6 text-[#16a34a]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-charcoal m-0">
              Ready to Send via WhatsApp
            </h3>
            <p className="text-xs text-charcoal-muted m-0">
              Your inquiry message has been prepared for our engineering desk.
            </p>
          </div>
        </div>

        <p className="text-sm text-charcoal-light leading-relaxed mb-6">
          WhatsApp has opened in a new tab with your pre-filled inquiry. Click{" "}
          <strong>Send</strong> in WhatsApp to deliver your specification directly to the United
          Rubber Cork technical desk in Vapi.
        </p>

        {/* Message Preview Box */}
        <div className="mb-6 rounded-xl border border-montado/15 bg-sheet p-4 text-xs font-mono text-charcoal whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
          {buildMessage(values)}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            className="btn btn--whatsapp min-h-11 px-5 text-sm font-semibold"
            href={handoffUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <WhatsAppIcon className="size-4" />
            <span>Open WhatsApp Tab Again</span>
          </a>

          <button
            className="btn btn--secondary min-h-11 px-4 text-sm font-semibold"
            onClick={handleCopy}
            type="button"
          >
            <CopyIcon className="size-4" />
            <span>{copied ? "Copied!" : "Copy Inquiry"}</span>
          </button>

          <a
            className="btn btn--secondary min-h-11 px-4 text-sm font-semibold"
            href={`mailto:${COMPANY_EMAILS[0]}?subject=Quote%20Request%20-%20${encodeURIComponent(
              values.product || "Cork Parts"
            )}&body=${encodeURIComponent(buildMessage(values))}`}
          >
            <MailIcon className="size-4" />
            <span>Email Instead</span>
          </a>
        </div>

        <div className="mt-6 pt-5 border-t border-montado/10 flex items-center justify-between text-xs text-charcoal-muted">
          <span>Need to attach PDF or CAD files? Send them in the WhatsApp chat.</span>
          <button
            className="text-montado font-bold hover:underline"
            onClick={() => setStatus("idle")}
            type="button"
          >
            Edit Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`card-surface bg-white shadow-xl rounded-2xl ${
        isShort ? "p-6 sm:p-8" : "p-6 sm:p-10"
      }`}
      id={isShort ? undefined : "request-a-quote"}
    >
      <div className="mb-6 pb-5 border-b border-montado/10">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="badge-tag">
            <WhatsAppIcon className="size-3.5 text-[#16a34a]" />
            <span>Fast WhatsApp Handoff</span>
          </span>
          <span className="text-xs text-charcoal-muted">
            • 24hr Quotation Turnaround
          </span>
        </div>

        <h3 className="display-sm m-0 text-charcoal">
          {isShort ? "Get an Instant Specification Quote" : "Request a Technical Quotation"}
        </h3>
        <p className="mt-1.5 mb-0 text-xs sm:text-sm text-charcoal-light">
          Share your dimensions or sample details. This opens WhatsApp with your pre-formatted
          message ready to send to our Vapi engineering works.
        </p>
      </div>

      <form
        aria-describedby={status === "error" ? "quote-form-error" : undefined}
        className="grid gap-4 sm:grid-cols-2"
        noValidate
        onSubmit={handleSubmit}
      >
        {/* Anti-spam honeypot */}
        <div aria-hidden="true" className="hidden">
          <label htmlFor="quote-website-field">Website</label>
          <input
            autoComplete="off"
            id="quote-website-field"
            name="website"
            ref={honeypotRef}
            tabIndex={-1}
            type="text"
          />
        </div>

        {/* Name */}
        <div>
          <label className="field-label" htmlFor="quote-name">
            Contact Name <span className="text-danger">*</span>
          </label>
          <input
            aria-invalid={errors.name ? "true" : undefined}
            autoComplete="name"
            className="field"
            id="quote-name"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="e.g. Rajesh Kumar"
            ref={nameRef}
            required
            type="text"
            value={values.name}
          />
          {errors.name && (
            <p className="mt-1 text-xs font-semibold text-danger">{errors.name}</p>
          )}
        </div>

        {/* Phone / WhatsApp */}
        <div>
          <label className="field-label" htmlFor="quote-phone">
            Phone / WhatsApp Number <span className="text-danger">*</span>
          </label>
          <input
            aria-invalid={errors.phone ? "true" : undefined}
            autoComplete="tel"
            className="field spec-num"
            id="quote-phone"
            inputMode="tel"
            name="phone"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="e.g. +91 98765 43210"
            ref={phoneRef}
            required
            type="tel"
            value={values.phone}
          />
          {errors.phone ? (
            <p className="mt-1 text-xs font-semibold text-danger">{errors.phone}</p>
          ) : (
            <p className="mt-1 text-[0.72rem] text-charcoal-muted">
              We send the quote &amp; drawing verification to this number.
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label className="field-label" htmlFor="quote-company">
            Company Name <span className="text-xs text-charcoal-muted font-normal">(optional)</span>
          </label>
          <input
            autoComplete="organization"
            className="field"
            id="quote-company"
            name="company"
            onChange={handleChange}
            placeholder="e.g. Acme Transformers Ltd."
            type="text"
            value={values.company}
          />
        </div>

        {/* Work Email */}
        <div>
          <label className="field-label" htmlFor="quote-email">
            Work Email {!isShort && <span className="text-danger">*</span>}
          </label>
          <input
            aria-invalid={errors.email ? "true" : undefined}
            autoComplete="email"
            className="field"
            id="quote-email"
            inputMode="email"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="e.g. engineer@acme.com"
            ref={emailRef}
            required={!isShort}
            type="email"
            value={values.email}
          />
          {errors.email && (
            <p className="mt-1 text-xs font-semibold text-danger">{errors.email}</p>
          )}
        </div>

        {/* Product Selector */}
        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="quote-product">
            Product Range Required <span className="text-danger">*</span>
          </label>
          <select
            aria-invalid={errors.product ? "true" : undefined}
            className="field font-medium"
            id="quote-product"
            name="product"
            onBlur={handleBlur}
            onChange={handleChange}
            ref={productRef}
            required
            value={values.product}
          >
            <option value="">Select a product category...</option>
            {PRODUCTS.map((product) => (
              <option key={product.slug} value={product.name}>
                {product.name} (Sheets, Strips, Finished Gaskets)
              </option>
            ))}
            <option value="Transformer Specific Gaskets (IS 4253)">
              Transformer Specific Gaskets (IS 4253 Part II)
            </option>
            <option value="Automotive Flange Gaskets">Automotive Flange Gaskets</option>
            <option value="Not sure yet / Need technical recommendation">
              Not sure yet / Need technical recommendation
            </option>
          </select>
          {errors.product && (
            <p className="mt-1 text-xs font-semibold text-danger">{errors.product}</p>
          )}
        </div>

        {/* Thickness Quick Selectors & Field */}
        <div>
          <label className="field-label" htmlFor="quote-thickness">
            Thickness Required
          </label>
          <input
            className="field spec-num"
            id="quote-thickness"
            name="thickness"
            onChange={handleChange}
            placeholder="e.g. 3.0 mm or 6.0 mm"
            type="text"
            value={values.thickness}
          />
          <div className="mt-2 flex flex-wrap gap-1.5">
            {COMMON_THICKNESSES.map((th) => (
              <button
                className={`text-[0.7rem] px-2 py-0.5 rounded border transition-colors ${
                  values.thickness === th
                    ? "bg-montado text-white border-montado font-bold"
                    : "bg-sheet text-charcoal border-montado/15 hover:border-montado"
                }`}
                key={th}
                onClick={() => handleQuickThickness(th)}
                type="button"
              >
                {th}
              </button>
            ))}
          </div>
        </div>

        {/* Size / Dimensions / Quantity */}
        <div>
          <label className="field-label" htmlFor="quote-size">
            Dimensions &amp; Quantity
          </label>
          <input
            className="field spec-num"
            id="quote-size"
            name="size"
            onChange={handleChange}
            placeholder="e.g. 1000 x 1000 mm, 50 sheets"
            type="text"
            value={values.size}
          />
          <p className="mt-1 text-[0.72rem] text-charcoal-muted">
            Or describe gasket outer/inner diameter and bolt-hole count.
          </p>
        </div>

        {/* Full-form extra fields */}
        {!isShort && (
          <>
            <div>
              <label className="field-label" htmlFor="quote-standard">
                Applicable Standard
              </label>
              <input
                className="field"
                id="quote-standard"
                name="standard"
                onChange={handleChange}
                placeholder="e.g. IS 4253 Part II or ASTM F36"
                type="text"
                value={values.standard}
              />
            </div>

            <div>
              <label className="field-label" htmlFor="quote-drawing">
                Drawing or Sample Details
              </label>
              <input
                className="field"
                id="quote-drawing"
                name="drawing"
                onChange={handleChange}
                placeholder="e.g. Drawing No. TR-442 / Sample available"
                type="text"
                value={values.drawing}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="field-label" htmlFor="quote-message">
                Specific Application Notes / Fluid Conditions
              </label>
              <textarea
                className="field min-h-24 resize-y"
                id="quote-message"
                name="message"
                onChange={handleChange}
                placeholder="Mention operating temperature, fluid type (mineral oil, fuel, water), bolt load, or any special tolerances..."
                rows={3}
                value={values.message}
              />
            </div>
          </>
        )}

        {/* Submit Button */}
        <div className="sm:col-span-2 mt-2 pt-3 border-t border-montado/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <button
              className="btn btn--whatsapp min-h-12 px-6 text-base font-bold shadow-md justify-center"
              type="submit"
            >
              <WhatsAppIcon className="size-5" />
              <span>Generate WhatsApp Quote</span>
              <ArrowRightIcon className="size-4" />
            </button>

            <div className="flex items-center gap-2 text-xs text-charcoal-muted">
              <ShieldCheckIcon className="size-4 text-montado" />
              <span>Direct factory pricing from Vapi Works. No spam.</span>
            </div>
          </div>

          {status === "error" && (
            <p
              aria-live="polite"
              className="mt-3 mb-0 text-xs font-semibold text-danger"
              id="quote-form-error"
            >
              Please review the highlighted fields above to continue.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
