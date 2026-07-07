"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

export type Slide = {
  kicker: string;
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  external?: boolean;
  image: string;
  alt: string;
};

// Full-width hero slider. Slide 1 carries the page's single visible H1;
// the remaining slides use a styled <div> so there is only one H1 per page.
export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(id);
  }, [paused, count]);

  return (
    <section
      className="relative overflow-hidden bg-charcoal"
      aria-roledescription="carousel"
      aria-label="Featured services"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[440px] sm:h-[520px]">
        {slides.map((slide, i) => {
          const active = i === index;
          const Heading = i === 0 ? "h1" : "div";
          return (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={!active}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.image}
                alt={slide.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col items-start justify-center px-5 [text-shadow:0_2px_12px_rgba(0,0,0,0.6)] sm:px-6">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                  {slide.kicker}
                </p>
                <Heading className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
                  {slide.heading}
                </Heading>
                <Link
                  href={slide.ctaHref}
                  className="btn mt-8"
                  {...(slide.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {slide.ctaLabel}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-brand-red"
      >
        <span aria-hidden>‹</span>
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-brand-red"
      >
        <span aria-hidden>›</span>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2.5 w-2.5 rounded-full ${
              i === index ? "bg-brand-red" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
