"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import {
  BRAND_WORDMARK,
  COMPANY_PHONES,
  NAV_ITEMS,
  SITE_NAME,
  WHATSAPP_LINK,
} from "../../config/site";

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="20"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="20"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  function isCurrent(href) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(`${href}/`);
  }

  return (
    <header className="site-header">
      <div className="shell flex h-full items-center justify-between gap-6">
        <Link
          aria-label={`${SITE_NAME} home`}
          className="inline-flex shrink-0 flex-col items-start gap-0.5 no-underline"
          href="/"
        >
          <span className="display-sm text-montado">
            {BRAND_WORDMARK.primary}
          </span>
          <span className="label text-[0.78rem] font-normal tracking-[0.06em] text-charcoal">
            {BRAND_WORDMARK.secondary}
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="m-0 flex items-center gap-7 p-0">
            {NAV_ITEMS.map((item) => (
              <li className="list-none" key={item.href}>
                <Link
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className="nav-link"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="list-none">
              <Link className="btn btn--primary" href="/contact#request-a-quote">
                Request a quote
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            className="btn btn--primary min-h-11 px-4 text-sm"
            href="/contact#request-a-quote"
          >
            Request a quote
          </Link>
          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label="Open menu"
            className="grid size-11 place-items-center rounded-control border border-charcoal/30 text-charcoal"
            onClick={() => setOpen(true)}
            ref={triggerRef}
            type="button"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {open && (
        <div
          aria-label="Menu"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col bg-paper lg:hidden"
          id="mobile-menu"
          role="dialog"
        >
          <div className="shell flex h-[76px] shrink-0 items-center justify-between border-b border-montado/15">
            <span className="display-sm text-montado">
              {BRAND_WORDMARK.primary}
              <span className="label ml-2 font-normal tracking-[0.06em] text-charcoal">
                {BRAND_WORDMARK.secondary}
              </span>
            </span>
            <button
              aria-label="Close menu"
              className="grid size-11 place-items-center rounded-control border border-charcoal/30 text-charcoal"
              onClick={() => setOpen(false)}
              ref={closeRef}
              type="button"
            >
              <CloseIcon />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="shell flex-1 overflow-y-auto py-6">
            <ul className="m-0 grid gap-1 p-0">
              {NAV_ITEMS.map((item) => (
                <li className="list-none" key={item.href}>
                  <Link
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    className="flex min-h-14 items-center border-b border-montado/12 text-[1.5rem] font-bold tracking-[-0.02em] text-montado no-underline [font-variation-settings:'wdth'_125,'wght'_800] aria-[current=page]:border-cork"
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="shell grid shrink-0 gap-2 border-t border-montado/15 py-5">
            <Link
              className="btn btn--primary w-full"
              href="/contact#request-a-quote"
              onClick={() => setOpen(false)}
            >
              Request a quote
            </Link>
            <a className="btn btn--secondary w-full" href={`tel:${COMPANY_PHONES[0].href}`}>
              Call {COMPANY_PHONES[0].display}
            </a>
            <a
              className="btn btn--plain justify-center"
              href={WHATSAPP_LINK}
              rel="noopener noreferrer"
              target="_blank"
            >
              Send your drawing on WhatsApp
            </a>
            <p className="spec-num m-0 pt-2 text-sm text-charcoal/70">
              GIDC, Vapi, Gujarat
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
