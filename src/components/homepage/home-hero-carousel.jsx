"use client";

import Image from "next/image";
import { useState } from "react";

// Replace these entries with your own photographs when they are ready.
// Drop new files into public/images/carousel and update the src and alt text.
const SLIDES = [
  {
    src: "/images/carousel/slider.jpg",
    alt: "Rubberised cork sheet with a cut gasket form resting on it.",
  },
  {
    src: "/images/carousel/slider2.jpg",
    alt: "Cork sheet and strip samples laid out on a work surface.",
  },
  {
    src: "/images/carousel/slider3.jpg",
    alt: "Cork gaskets cut to a customer drawing.",
  },
  {
    src: "/images/carousel/slider4.jpg",
    alt: "Cork tiles and decorative cork samples.",
  },
];

const CAPTION =
  "Rubberised cork sheet and a cut gasket form. Not to scale.";

export default function HomeHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = SLIDES.length;

  function showSlide(index) {
    setActiveIndex((index + slideCount) % slideCount);
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showSlide(activeIndex + 1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showSlide(activeIndex - 1);
    }
  }

  return (
    <div
      aria-label="Product photographs"
      aria-roledescription="carousel"
      className="overflow-hidden rounded-xl bg-montado p-3 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber sm:p-4 lg:p-5"
      onKeyDown={handleKeyDown}
      role="region"
      tabIndex={0}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-montado sm:aspect-[3/2]">
        {SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              aria-hidden={!isActive}
              aria-label={`${index + 1} of ${slideCount}`}
              aria-roledescription="slide"
              className={`absolute inset-0 transition-opacity duration-700 ease-out motion-reduce:transition-none ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
              key={slide.src}
              role="group"
            >
              <Image
                alt={slide.alt}
                className="object-cover"
                fill
                preload={index === 0}
                sizes="(min-width: 1240px) 1160px, 100vw"
                src={slide.src}
              />
            </div>
          );
        })}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-montado/40 mix-blend-multiply"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-tr from-montado/50 via-transparent to-transparent"
        />

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 bg-linear-to-t from-montado/95 via-montado/65 to-transparent p-4 pt-20 sm:flex-row sm:items-end sm:justify-between sm:gap-4 sm:p-6">
          <p className="m-0 max-w-[42ch] text-sm leading-snug text-paper">
            {CAPTION}
          </p>
          <div
            aria-label="Choose a photograph"
            className="flex items-center gap-1 self-end sm:self-auto"
            role="group"
          >
            {SLIDES.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  aria-current={isActive ? "true" : undefined}
                  aria-label={`Show photograph ${index + 1} of ${slideCount}`}
                  className="group flex h-6 w-6 items-center justify-center rounded-full focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-amber"
                  key={slide.src}
                  onClick={() => showSlide(index)}
                  type="button"
                >
                  <span
                    aria-hidden="true"
                    className={`block h-2.5 w-2.5 rounded-full border border-paper transition-colors motion-reduce:transition-none ${
                      isActive
                        ? "bg-amber"
                        : "bg-montado/50 group-hover:bg-paper"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <p aria-live="polite" className="sr-only">
        Photograph {activeIndex + 1} of {slideCount}
      </p>
    </div>
  );
}
