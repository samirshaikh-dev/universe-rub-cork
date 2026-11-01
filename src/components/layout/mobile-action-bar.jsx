"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { COMPANY_PHONES, WHATSAPP_LINK } from "../../config/site";

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="18"
    >
      <path d="M6.5 3.5h3l1.5 4.5-2.25 1.5a12 12 0 0 0 5.75 5.75l1.5-2.25 4.5 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="18"
    >
      <path d="M20 11.5a7.5 7.5 0 0 1-10.9 6.7L4.5 19.5l1.3-4.4A7.5 7.5 0 1 1 20 11.5Z" />
      <path d="M9 10.5h6M9 13.5h4" />
    </svg>
  );
}

export default function MobileActionBar() {
  const [scrolled, setScrolled] = useState(false);
  const [formInView, setFormInView] = useState(false);

  useEffect(() => {
    let frame = 0;

    function onScroll() {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > window.innerHeight * 0.6);
        frame = 0;
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const form = document.getElementById("request-a-quote");
    if (!form) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setFormInView(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px" }
    );

    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  const visible = scrolled && !formInView;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-montado/20 bg-paper transition-transform duration-[240ms] ease-standard lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="grid grid-cols-[1fr_1fr_1.4fr]">
        <a
          className="flex min-h-14 items-center justify-center gap-2 border-r border-montado/15 font-semibold text-montado"
          href={`tel:${COMPANY_PHONES[0].href}`}
          tabIndex={visible ? undefined : -1}
        >
          <PhoneIcon />
          Call
        </a>
        <a
          className="flex min-h-14 items-center justify-center gap-2 border-r border-montado/15 font-semibold text-montado"
          href={WHATSAPP_LINK}
          rel="noopener noreferrer"
          tabIndex={visible ? undefined : -1}
          target="_blank"
        >
          <ChatIcon />
          WhatsApp
        </a>
        <Link
          className="flex min-h-14 items-center justify-center bg-amber px-3 text-center font-semibold text-charcoal"
          href="/contact#request-a-quote"
          tabIndex={visible ? undefined : -1}
        >
          Request a quote
        </Link>
      </div>
    </div>
  );
}
