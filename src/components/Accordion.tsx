"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/Icons";

export type AccordionItem = { q: string; a: string };

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-neutral-200 rounded-md border border-neutral-200">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-base font-bold text-heading hover:text-brand-red"
              >
                {item.q}
                <ChevronDownIcon
                  width={18}
                  height={18}
                  className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed">{item.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
