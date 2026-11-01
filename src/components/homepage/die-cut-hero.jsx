"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { MEDIA } from "../../data/media";

/**
 * The die-cut hero.
 *
 * A macro sheet of cork covers the panel. A gasket-shaped piece is punched out
 * of that sheet; behind it sits a photograph of finished gaskets. On first
 * visit the piece lifts away once (600 ms) and leaves the panel still. Repeat
 * visits in the same session, reduced-motion users and save-data connections
 * get the finished state with no movement.
 */
export default function DieCutHero() {
  const plateRef = useRef(null);

  useEffect(() => {
    const plate = plateRef.current;
    if (!plate) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || navigator.connection?.saveData) {
      plate.dataset.reveal = "done";
      return;
    }

    if (window.sessionStorage.getItem("urc:hero-reveal") === "seen") {
      plate.dataset.reveal = "done";
      return;
    }

    plate.dataset.reveal = "run";
    window.sessionStorage.setItem("urc:hero-reveal", "seen");
  }, []);

  return (
    <div className="hero-plate" data-reveal="idle" ref={plateRef}>
      <svg
        aria-hidden="true"
        className="absolute size-0"
        focusable="false"
        height="0"
        width="0"
      >
        <defs>
          {/* The punched-out sheet: everything except the gasket silhouette. */}
          <clipPath clipPathUnits="objectBoundingBox" id="gasket-hole">
            <path
              clipRule="evenodd"
              d="M0 0H1V1H0Z M0.07 0.11H0.93V0.89H0.07Z"
            />
          </clipPath>
          {/* The piece that lifts out: a rectangular gasket frame. */}
          <clipPath clipPathUnits="objectBoundingBox" id="gasket-ring">
            <path
              clipRule="evenodd"
              d="M0.07 0.11H0.93V0.89H0.07Z M0.31 0.44H0.69V0.56H0.31Z"
            />
          </clipPath>
        </defs>
      </svg>

      <Image
        alt={MEDIA.gaskets.alt}
        className="hero-plate__photo"
        fill
        sizes="(min-width: 1024px) 560px, 100vw"
        src={MEDIA.gaskets.src}
      />

      <div className="hero-plate__sheet" aria-hidden="true">
        <Image
          alt=""
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          src={MEDIA.corkSheet.src}
        />
      </div>

      <div className="hero-plate__piece" aria-hidden="true">
        <Image
          alt=""
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          src={MEDIA.corkSheet.src}
        />
      </div>

      <p className="spec-num absolute bottom-0 left-0 z-10 m-0 bg-paper/95 px-3 py-2 text-xs text-charcoal">
        Gasket form, cut from rubberised cork sheet
      </p>
    </div>
  );
}
