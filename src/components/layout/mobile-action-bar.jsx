"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { COMPANY_PHONES, WHATSAPP_LINK } from "../../config/site";
import { PhoneIcon, WhatsAppIcon, FileTextIcon } from "../ui/icons";

export default function MobileActionBar() {
  const [scrolled, setScrolled] = useState(false);
  const [formInView, setFormInView] = useState(false);

  useEffect(() => {
    let frame = 0;

    function onScroll() {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > window.innerHeight * 0.4);
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
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-montado/15 bg-white/95 backdrop-blur-md shadow-lg transition-transform duration-300 ease-out lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="grid grid-cols-[1fr_1.1fr_1.4fr] divide-x divide-montado/10">
        <a
          aria-label="Call sales office"
          className="flex min-h-14 flex-col items-center justify-center gap-1 font-semibold text-charcoal hover:bg-black/5"
          href={`tel:${COMPANY_PHONES[0].href}`}
          tabIndex={visible ? undefined : -1}
        >
          <PhoneIcon className="size-4 text-montado" />
          <span className="text-xs">Call</span>
        </a>

        <a
          aria-label="Send drawing via WhatsApp"
          className="flex min-h-14 flex-col items-center justify-center gap-1 font-semibold text-[#15803d] hover:bg-black/5"
          href={WHATSAPP_LINK}
          rel="noopener noreferrer"
          tabIndex={visible ? undefined : -1}
          target="_blank"
        >
          <WhatsAppIcon className="size-4" />
          <span className="text-xs">WhatsApp</span>
        </a>

        <Link
          className="flex min-h-14 flex-col items-center justify-center gap-1 bg-montado text-white font-semibold hover:bg-montado-vibrant"
          href="/contact#request-a-quote"
          tabIndex={visible ? undefined : -1}
        >
          <FileTextIcon className="size-4 text-cork-gold" />
          <span className="text-xs">Get Quote</span>
        </Link>
      </div>
    </div>
  );
}
