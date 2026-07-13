"use client";

import { useState } from "react";
import { testimonials as defaultTestimonials, type Testimonial } from "@/data/testimonials";
import { SectionHeading } from "@/components/Section";

export default function Testimonials({
  items = defaultTestimonials,
}: {
  items?: Testimonial[];
}) {
  const [index, setIndex] = useState(0);
  const count = items.length;
  const move = (dir: number) => setIndex((i) => (i + dir + count) % count);
  const current = items[index];

  return (
    <div className="bg-neutral-100 py-16">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-6">
        <SectionHeading title="Client Testimonials" />
        <figure className="relative rounded-2xl bg-white px-7 py-9 text-center shadow-card sm:px-12 sm:py-11">
          <span
            aria-hidden
            className="pointer-events-none absolute left-5 top-2 select-none font-[family-name:var(--font-heading)] text-7xl leading-none text-brand-red/15 sm:left-8 sm:text-8xl"
          >
            &ldquo;
          </span>
          <blockquote className="relative text-lg italic leading-relaxed text-heading">
            “{current.quote}”
          </blockquote>
          <figcaption className="mt-5 font-bold text-brand-red">
            {current.name}
            <span className="font-normal text-body-muted"> — {current.location}</span>
          </figcaption>
        </figure>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-heading hover:border-brand-red hover:text-brand-red"
          >
            <span aria-hidden>‹</span>
          </button>
          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Testimonial ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 w-2.5 rounded-full ${
                  i === index ? "bg-brand-red" : "bg-neutral-300"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-heading hover:border-brand-red hover:text-brand-red"
          >
            <span aria-hidden>›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
