"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import {
  BRAND_WORDMARK,
  COMPANY_PHONES,
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
  ChevronDownIcon,
  LayersIcon,
  ZapIcon,
  CarIcon,
  BuildingIcon,
  GaugeIcon,
  SparklesIcon,
} from "../ui/icons";

const PRODUCT_LINKS = [
  {
    title: "Rubberised Cork Sheets",
    href: "/products/rubberised-cork",
    desc: "IS 4253 Part II transformer & automotive sealing sheets",
    badge: "IS 4253 Part II",
    icon: GaugeIcon,
  },
  {
    title: "Die-Cut Continuous Gaskets",
    href: "/products/rubberised-cork",
    desc: "100% jointless continuous frames cut to your engineering CAD drawing",
    badge: "100% Jointless",
    icon: ZapIcon,
  },
  {
    title: "Natural Cork Slabs & Rolls",
    href: "/products/cork",
    desc: "High-density agglomerated cork for vibration damping & insulation",
    badge: "High Density",
    icon: LayersIcon,
  },
  {
    title: "Decorative & Acoustic Cork",
    href: "/products/decorative-cork",
    desc: "Architectural wall panels, acoustic tiles and bulletin pinboards",
    badge: "Acoustic",
    icon: SparklesIcon,
  },
  {
    title: "All Products & Specifications Matrix",
    href: "/products",
    desc: "Compare manufactured thicknesses (0.5–25 mm), sizes and tolerances",
    badge: "Catalogue",
    icon: LayersIcon,
  },
];

const APPLICATION_LINKS = [
  {
    title: "Power Transformers & Switchgear",
    href: "/industries/transformers",
    desc: "Hermetic sealing against hot mineral transformer oil and silicone fluids",
    badge: "Grade RC-70-C",
    icon: ZapIcon,
  },
  {
    title: "Automotive Flanges & Engines",
    href: "/industries/automotive",
    desc: "Oil pan, rocker cover, and timing gear gaskets with high bolt load rebound",
    badge: "Grade RC-80-B",
    icon: CarIcon,
  },
  {
    title: "Acoustic & Structural Vibration",
    href: "/industries/construction",
    desc: "Heavy machinery foundation isolation slabs and expansion joint fillers",
    badge: "Acoustic Damping",
    icon: BuildingIcon,
  },
  {
    title: "Explore All Industries",
    href: "/industries",
    desc: "Sector-specific elastomer compounding and customized die-cutting",
    badge: "Overview",
    icon: GaugeIcon,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [appOpen, setAppOpen] = useState(false);

  const productRef = useRef(null);
  const appRef = useRef(null);
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
    function handleClickOutside(event) {
      if (productRef.current && !productRef.current.contains(event.target)) {
        setProductOpen(false);
      }
      if (appRef.current && !appRef.current.contains(event.target)) {
        setAppOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setProductOpen(false);
        setAppOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
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


  const isProductsActive =
    pathname === "/products" || pathname?.startsWith("/products/");
  const isIndustriesActive =
    pathname === "/industries" || pathname?.startsWith("/industries/");
  const isQualityActive = pathname === "/quality";
  const isAboutActive = pathname === "/about";
  const isContactActive = pathname === "/contact";

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
              ISO 9001:2015 System &amp; IS 4253 Part II Compliance
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              className="flex items-center gap-1.5 text-white/85 hover:text-white transition-colors"
              href={`tel:${COMPANY_PHONES[0].href}`}
            >
              <PhoneIcon className="size-3 text-cork-gold" />
              <span className="spec-num">{COMPANY_PHONES[0].display}</span>
            </a>
            <span className="text-white/30">|</span>
            <a
              className="flex items-center gap-1 text-[#4ade80] hover:text-[#86efac] transition-colors"
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
            : "border-b border-montado/8 bg-white/90 backdrop-blur-sm py-3.5 sm:py-4"
        }`}
      >
        <div className="shell flex items-center justify-between gap-6">
          {/* Brand Mark with Monogram */}
          <Link
            aria-label={`${SITE_NAME} homepage`}
            className="group flex items-center gap-3 no-underline shrink-0"
            href="/"
          >
            <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-montado text-cork-gold shadow-sm transition-transform duration-200 group-hover:scale-105">
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
                Precision Gaskets &amp; Cork Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (with Meelte-style Dropdowns & Active Indicators) */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
              ref={productRef}
            >
              <button
                aria-expanded={productOpen}
                aria-haspopup="true"
                className={`relative inline-flex items-center gap-1.5 px-3.5 py-2 text-[0.92rem] font-semibold rounded-lg transition-colors cursor-pointer ${
                  isProductsActive || productOpen
                    ? "text-montado bg-montado-subtle/70"
                    : "text-charcoal hover:text-montado hover:bg-black/4"
                }`}
                onClick={() => {
                  setProductOpen(!productOpen);
                  setAppOpen(false);
                }}
                type="button"
              >
                <span>Products</span>
                <ChevronDownIcon
                  className={`size-3.5 transition-transform duration-200 ${
                    productOpen ? "rotate-180" : ""
                  }`}
                />
                {isProductsActive && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-montado"
                  />
                )}
              </button>

              {/* Dropdown Menu Card */}
              {productOpen && (
                <div className="absolute left-0 top-full z-50 mt-1.5 w-[380px] rounded-2xl border border-montado/12 bg-white p-2.5 shadow-[0_16px_36px_-6px_rgba(19,58,45,0.14)] animate-slide-up">
                  <div className="flex flex-col gap-1">
                    {PRODUCT_LINKS.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-montado-subtle/50 no-underline group"
                          href={item.href}
                          key={item.title}
                          onClick={() => setProductOpen(false)}
                        >
                          <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-montado/10 text-montado group-hover:bg-montado group-hover:text-cork-gold transition-colors mt-0.5">
                            <Icon className="size-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-bold text-charcoal group-hover:text-montado transition-colors">
                                {item.title}
                              </span>
                              <span className="text-[0.65rem] font-semibold text-cork-deep px-1.5 py-0.5 rounded bg-cork-light/60 shrink-0">
                                {item.badge}
                              </span>
                            </div>
                            <p className="m-0 mt-0.5 text-[0.75rem] text-charcoal-muted leading-tight line-clamp-1">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Applications Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAppOpen(true)}
              onMouseLeave={() => setAppOpen(false)}
              ref={appRef}
            >
              <button
                aria-expanded={appOpen}
                aria-haspopup="true"
                className={`relative inline-flex items-center gap-1.5 px-3.5 py-2 text-[0.92rem] font-semibold rounded-lg transition-colors cursor-pointer ${
                  isIndustriesActive || appOpen
                    ? "text-montado bg-montado-subtle/70"
                    : "text-charcoal hover:text-montado hover:bg-black/4"
                }`}
                onClick={() => {
                  setAppOpen(!appOpen);
                  setProductOpen(false);
                }}
                type="button"
              >
                <span>Applications</span>
                <ChevronDownIcon
                  className={`size-3.5 transition-transform duration-200 ${
                    appOpen ? "rotate-180" : ""
                  }`}
                />
                {isIndustriesActive && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-montado"
                  />
                )}
              </button>

              {/* Dropdown Menu Card */}
              {appOpen && (
                <div className="absolute left-0 top-full z-50 mt-1.5 w-[360px] rounded-2xl border border-montado/12 bg-white p-2.5 shadow-[0_16px_36px_-6px_rgba(19,58,45,0.14)] animate-slide-up">
                  <div className="flex flex-col gap-1">
                    {APPLICATION_LINKS.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-montado-subtle/50 no-underline group"
                          href={item.href}
                          key={item.title}
                          onClick={() => setAppOpen(false)}
                        >
                          <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-montado/10 text-montado group-hover:bg-montado group-hover:text-cork-gold transition-colors mt-0.5">
                            <Icon className="size-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-bold text-charcoal group-hover:text-montado transition-colors">
                                {item.title}
                              </span>
                              <span className="text-[0.65rem] font-semibold text-cork-deep px-1.5 py-0.5 rounded bg-cork-light/60 shrink-0">
                                {item.badge}
                              </span>
                            </div>
                            <p className="m-0 mt-0.5 text-[0.75rem] text-charcoal-muted leading-tight line-clamp-1">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Quality Link */}
            <Link
              aria-current={isQualityActive ? "page" : undefined}
              className={`relative px-3.5 py-2 text-[0.92rem] font-semibold rounded-lg transition-colors no-underline ${
                isQualityActive
                  ? "text-montado bg-montado-subtle/70"
                  : "text-charcoal hover:text-montado hover:bg-black/4"
              }`}
              href="/quality"
            >
              <span>Quality</span>
              {isQualityActive && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-montado"
                />
              )}
            </Link>

            {/* About Link */}
            <Link
              aria-current={isAboutActive ? "page" : undefined}
              className={`relative px-3.5 py-2 text-[0.92rem] font-semibold rounded-lg transition-colors no-underline ${
                isAboutActive
                  ? "text-montado bg-montado-subtle/70"
                  : "text-charcoal hover:text-montado hover:bg-black/4"
              }`}
              href="/about"
            >
              <span>About</span>
              {isAboutActive && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-montado"
                />
              )}
            </Link>

            {/* Contact Link */}
            <Link
              aria-current={isContactActive ? "page" : undefined}
              className={`relative px-3.5 py-2 text-[0.92rem] font-semibold rounded-lg transition-colors no-underline ${
                isContactActive
                  ? "text-montado bg-montado-subtle/70"
                  : "text-charcoal hover:text-montado hover:bg-black/4"
              }`}
              href="/contact"
            >
              <span>Contact</span>
              {isContactActive && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-montado"
                />
              )}
            </Link>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden items-center gap-3 lg:flex shrink-0">
            <a
              className="btn btn--secondary min-h-10 px-3.5 py-1.5 text-xs font-semibold rounded-xl"
              href={WHATSAPP_LINK}
              rel="noopener noreferrer"
              target="_blank"
            >
              <WhatsAppIcon className="size-4 text-[#25d366]" />
              <span>WhatsApp Drawing</span>
            </a>
            <Link
              className="btn btn--primary min-h-10 px-4 py-1.5 text-xs font-bold rounded-xl shadow-sm"
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
              className="grid size-10 place-items-center rounded-xl bg-[#25d366]/15 text-[#15803d]"
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
              className="grid size-10 place-items-center rounded-xl border border-charcoal/20 text-charcoal hover:bg-black/5"
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
            <div className="shell flex h-16 shrink-0 items-center justify-between border-b border-montado/12">
              <div className="flex items-center gap-2.5">
                <div className="grid size-9 place-items-center rounded-xl bg-montado text-cork-gold shadow-sm">
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
                className="grid size-10 place-items-center rounded-xl border border-charcoal/20 text-charcoal"
                onClick={() => setOpen(false)}
                ref={closeRef}
                type="button"
              >
                <XIcon className="size-5" />
              </button>
            </div>

            <nav
              aria-label="Mobile main navigation"
              className="shell flex-1 overflow-y-auto py-5"
            >
              {/* Product Group */}
              <div className="mb-5">
                <p className="m-0 mb-2 text-[0.7rem] font-bold uppercase tracking-wider text-charcoal-muted">
                  Products &amp; Gaskets
                </p>
                <div className="grid gap-1.5">
                  {PRODUCT_LINKS.slice(0, 4).map((item) => (
                    <Link
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-charcoal hover:bg-montado-subtle/50 no-underline"
                      href={item.href}
                      key={item.title}
                      onClick={() => setOpen(false)}
                    >
                      <span>{item.title}</span>
                      <span className="text-[0.68rem] text-cork-deep font-normal">{item.badge}</span>
                    </Link>
                  ))}
                  <Link
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-bold text-montado hover:bg-montado-subtle no-underline"
                    href="/products"
                    onClick={() => setOpen(false)}
                  >
                    <span>View All Specifications Matrix &rarr;</span>
                  </Link>
                </div>
              </div>

              {/* Application Group */}
              <div className="mb-5 border-t border-montado/8 pt-4">
                <p className="m-0 mb-2 text-[0.7rem] font-bold uppercase tracking-wider text-charcoal-muted">
                  Sectors &amp; Applications
                </p>
                <div className="grid gap-1.5">
                  {APPLICATION_LINKS.map((item) => (
                    <Link
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-charcoal hover:bg-montado-subtle/50 no-underline"
                      href={item.href}
                      key={item.title}
                      onClick={() => setOpen(false)}
                    >
                      <span>{item.title}</span>
                      <ArrowRightIcon className="size-3.5 opacity-40" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company & Quality */}
              <div className="mb-5 border-t border-montado/8 pt-4">
                <p className="m-0 mb-2 text-[0.7rem] font-bold uppercase tracking-wider text-charcoal-muted">
                  Company &amp; Compliance
                </p>
                <div className="grid gap-1.5">
                  <Link
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-charcoal hover:bg-montado-subtle/50 no-underline"
                    href="/quality"
                    onClick={() => setOpen(false)}
                  >
                    <span>Quality Assurance &amp; ISO 9001:2015</span>
                    <ArrowRightIcon className="size-3.5 opacity-40" />
                  </Link>
                  <Link
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-charcoal hover:bg-montado-subtle/50 no-underline"
                    href="/about"
                    onClick={() => setOpen(false)}
                  >
                    <span>About United Rubber Cork</span>
                    <ArrowRightIcon className="size-3.5 opacity-40" />
                  </Link>
                  <Link
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-charcoal hover:bg-montado-subtle/50 no-underline"
                    href="/contact"
                    onClick={() => setOpen(false)}
                  >
                    <span>Contact Works Desk</span>
                    <ArrowRightIcon className="size-3.5 opacity-40" />
                  </Link>
                </div>
              </div>

              {/* Works Location Card */}
              <div className="rounded-2xl bg-sheet p-4 border border-montado/10">
                <p className="m-0 text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
                  Manufacturing Works
                </p>
                <p className="mt-1 mb-0 text-xs font-medium text-charcoal">
                  GIDC 2nd Phase, Vapi, Gujarat — 396195, India
                </p>
                <div className="mt-2.5 flex items-center gap-2 text-xs text-montado font-semibold">
                  <ShieldCheckIcon className="size-3.5 text-cork" />
                  <span>ISO 9001:2015 &amp; IS 4253 Part II</span>
                </div>
              </div>
            </nav>

            {/* Bottom Actions */}
            <div className="shell grid shrink-0 gap-2 border-t border-montado/12 py-4 bg-white">
              <a
                className="btn btn--whatsapp w-full justify-center rounded-xl"
                href={WHATSAPP_LINK}
                rel="noopener noreferrer"
                target="_blank"
              >
                <WhatsAppIcon className="size-4" />
                <span>Send Drawing on WhatsApp</span>
              </a>

              <Link
                className="btn btn--primary w-full justify-center rounded-xl"
                href="/contact#request-a-quote"
                onClick={() => setOpen(false)}
              >
                <span>Request a Quote</span>
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
