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
import {
  MenuIcon,
  XIcon,
  PhoneIcon,
  WhatsAppIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from "../ui/icons";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <>
      {/* Top Engineering & Factory Assurance Banner */}
      <div className="hidden border-b border-montado/10 bg-[#0d1e17] px-4 py-2 text-xs font-medium text-white/90 sm:block">
        <div className="shell flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-cork-gold">
              <span className="badge-pulse-dot" />
              Direct Works Dispatch • GIDC, Vapi, Gujarat
            </span>
            <span className="text-white/30">|</span>
            <span className="flex items-center gap-1 text-white/80">
              <ShieldCheckIcon className="size-3.5 text-cork-gold" />
              ISO 9001:2015 System & IS 4253 Part II Compliance
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              className="flex items-center gap-1.5 text-white/85 hover:text-white"
              href={`tel:${COMPANY_PHONES[0].href}`}
            >
              <PhoneIcon className="size-3 text-cork-gold" />
              <span className="spec-num">{COMPANY_PHONES[0].display}</span>
            </a>
            <span className="text-white/30">|</span>
            <a
              className="flex items-center gap-1 text-[#4ade80] hover:text-[#86efac]"
              href={WHATSAPP_LINK}
              rel="noopener noreferrer"
              target="_blank"
            >
              <WhatsAppIcon className="size-3.5" />
              <span>WhatsApp Drawing Line</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? "border-b border-montado/12 bg-white/95 shadow-sm backdrop-blur-md py-3"
            : "border-b border-montado/8 bg-white/90 backdrop-blur-sm py-4"
        }`}
      >
        <div className="shell flex items-center justify-between gap-6">
          {/* Brand Mark with Monogram */}
          <Link
            aria-label={`${SITE_NAME} homepage`}
            className="group flex items-center gap-3 no-underline"
            href="/"
          >
            <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-montado text-cork-gold shadow-sm transition-transform duration-200 group-hover:scale-105">
              <svg aria-hidden="true" className="size-5.5 text-cork-gold" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4.5" strokeDasharray="2.5 2.5" />
                <circle cx="12" cy="5.5" r="1.25" fill="currentColor" />
                <circle cx="12" cy="18.5" r="1.25" fill="currentColor" />
                <circle cx="5.5" cy="12" r="1.25" fill="currentColor" />
                <circle cx="18.5" cy="12" r="1.25" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-montado transition-colors group-hover:text-montado-vibrant">
                {BRAND_WORDMARK.primary} {BRAND_WORDMARK.secondary}
              </span>
              <span className="text-[0.72rem] font-semibold tracking-wider text-charcoal-muted uppercase">
                Precision Gaskets & Cork Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="m-0 flex items-center gap-1 p-0">
              {NAV_ITEMS.map((item) => {
                const active = isCurrent(item.href);
                return (
                  <li className="list-none" key={item.href}>
                    <Link
                      aria-current={active ? "page" : undefined}
                      className={`relative px-3.5 py-2 text-[0.92rem] font-medium no-underline transition-colors duration-150 rounded-md ${
                        active
                          ? "bg-montado-subtle text-montado font-semibold"
                          : "text-charcoal hover:bg-black/4 hover:text-montado"
                      }`}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              className="btn btn--secondary min-h-10 px-3.5 py-1.5 text-sm"
              href={WHATSAPP_LINK}
              rel="noopener noreferrer"
              target="_blank"
            >
              <WhatsAppIcon className="size-4 text-[#25d366]" />
              <span>WhatsApp Drawing</span>
            </a>
            <Link
              className="btn btn--primary min-h-10 px-4 py-1.5 text-sm"
              href="/contact#request-a-quote"
            >
              <span>Request a Quote</span>
              <ArrowRightIcon className="size-3.5" />
            </Link>
          </div>

          {/* Mobile Menu & Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              aria-label="Send drawing on WhatsApp"
              className="grid size-10 place-items-center rounded-md bg-[#25d366]/15 text-[#15803d]"
              href={WHATSAPP_LINK}
              rel="noopener noreferrer"
              target="_blank"
            >
              <WhatsAppIcon className="size-5" />
            </a>

            <button
              aria-controls="mobile-navigation-dialog"
              aria-expanded={open}
              aria-label="Open menu"
              className="grid size-10 place-items-center rounded-md border border-charcoal/20 text-charcoal hover:bg-black/5"
              onClick={() => setOpen(true)}
              ref={triggerRef}
              type="button"
            >
              <MenuIcon className="size-5" />
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Navigation Drawer */}
        {open && (
          <div
            aria-label="Navigation Menu"
            aria-modal="true"
            className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden"
            id="mobile-navigation-dialog"
            role="dialog"
          >
            <div className="shell flex h-18 shrink-0 items-center justify-between border-b border-montado/12">
              <div className="flex items-center gap-2.5">
                <div className="grid size-9 place-items-center rounded-lg bg-montado text-cork-gold shadow-sm">
                  <svg aria-hidden="true" className="size-5 text-cork-gold" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="4.5" strokeDasharray="2.5 2.5" />
                    <circle cx="12" cy="5.5" r="1.25" fill="currentColor" />
                    <circle cx="12" cy="18.5" r="1.25" fill="currentColor" />
                    <circle cx="5.5" cy="12" r="1.25" fill="currentColor" />
                    <circle cx="18.5" cy="12" r="1.25" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-sm font-extrabold text-montado">
                  {BRAND_WORDMARK.primary} {BRAND_WORDMARK.secondary}
                </span>
              </div>
              <button
                aria-label="Close menu"
                className="grid size-10 place-items-center rounded-md border border-charcoal/20 text-charcoal"
                onClick={() => setOpen(false)}
                ref={closeRef}
                type="button"
              >
                <XIcon className="size-5" />
              </button>
            </div>

            <nav
              aria-label="Mobile main navigation"
              className="shell flex-1 overflow-y-auto py-6"
            >
              <ul className="m-0 grid gap-2 p-0">
                {NAV_ITEMS.map((item) => {
                  const active = isCurrent(item.href);
                  return (
                    <li className="list-none" key={item.href}>
                      <Link
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between rounded-lg px-4 py-3.5 text-lg font-bold no-underline transition-colors ${
                          active
                            ? "bg-montado-subtle text-montado"
                            : "text-charcoal hover:bg-slate-50"
                        }`}
                        href={item.href}
                        onClick={() => setOpen(false)}
                      >
                        <span>{item.label}</span>
                        <ArrowRightIcon className="size-4 opacity-40" />
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 rounded-xl bg-sheet p-4 border border-montado/10">
                <p className="m-0 text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
                  Manufacturing Works
                </p>
                <p className="mt-1 mb-0 text-sm font-medium text-charcoal">
                  GIDC 2nd Phase, Vapi, Gujarat — 396195
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-montado font-semibold">
                  <ShieldCheckIcon className="size-4 text-cork" />
                  <span>ISO 9001:2015 & IS 4253 Part II</span>
                </div>
              </div>
            </nav>

            <div className="shell grid shrink-0 gap-2.5 border-t border-montado/12 py-5 bg-white">
              <a
                className="btn btn--whatsapp w-full justify-center"
                href={WHATSAPP_LINK}
                rel="noopener noreferrer"
                target="_blank"
              >
                <WhatsAppIcon className="size-4" />
                <span>Send Drawing on WhatsApp</span>
              </a>

              <Link
                className="btn btn--primary w-full justify-center"
                href="/contact#request-a-quote"
                onClick={() => setOpen(false)}
              >
                <span>Request a Quote</span>
                <ArrowRightIcon className="size-4" />
              </Link>

              <a
                className="btn btn--secondary w-full justify-center spec-num"
                href={`tel:${COMPANY_PHONES[0].href}`}
              >
                <PhoneIcon className="size-4 text-montado" />
                <span>Call {COMPANY_PHONES[0].display}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
