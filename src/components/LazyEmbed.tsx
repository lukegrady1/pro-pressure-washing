"use client";

import { useState } from "react";

// Click-to-load YouTube facade — no iframe until the user interacts (perf/CWV).
export function LazyYouTube({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const [play, setPlay] = useState(false);
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-md bg-black">
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlay(true)}
          className="group absolute inset-0 flex items-center justify-center"
          aria-label={`Play video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-red text-white shadow-lg transition group-hover:scale-110">
            <span aria-hidden className="ml-1 text-2xl">▶</span>
          </span>
        </button>
      )}
    </div>
  );
}

// Click-to-load Google Map facade. Pass `embedSrc` for a specific Google
// Business Profile embed, otherwise falls back to a query-based map.
export function LazyMap({
  query,
  embedSrc,
}: {
  query: string;
  embedSrc?: string;
}) {
  // A specific Business Profile embed loads immediately; the generic query
  // map keeps its click-to-load facade for performance.
  const [load, setLoad] = useState(Boolean(embedSrc));
  const src =
    embedSrc ??
    `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  return (
    <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl bg-neutral-200 shadow-card ring-1 ring-black/5">
      {load ? (
        <iframe
          src={src}
          title={`Map of ${query}`}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoad(true)}
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-neutral-100 text-heading hover:bg-neutral-200"
          aria-label={`Load map of ${query}`}
        >
          <span className="text-lg font-bold">📍 View Map</span>
          <span className="text-sm text-body-muted">{query}</span>
        </button>
      )}
    </div>
  );
}
