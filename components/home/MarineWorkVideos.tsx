"use client";

import { useState } from "react";
import Image from "next/image";

const videos = [
  { id: "2iU9F3jC8GI" },
  { id: "-tur51KMbdU" },
  { id: "Z1dOSPVQeJY" },
] as const;

export default function MarineWorkVideos() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {videos.map((video, index) => {
        const isActive = activeId === video.id;
        const label = `Play PMS marine services video ${index + 1}`;

        return (
          <li key={video.id}>
            <div className="relative aspect-video overflow-hidden rounded-sm border border-pms-line bg-pms-navy">
              {isActive ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
                  title={label}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveId(video.id)}
                  className="group relative block h-full w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-label={label}
                >
                  <Image
                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute inset-0 bg-pms-navy/35" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-pms-navy shadow-sm transition-transform duration-150 motion-safe:group-hover:scale-105">
                      <PlayIcon className="h-5 w-5" />
                    </span>
                  </span>
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8.5 5.8v12.4L19 12 8.5 5.8Z" />
    </svg>
  );
}
