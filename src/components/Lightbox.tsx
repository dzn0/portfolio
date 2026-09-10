"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import Image from "next/image";

export function Lightbox({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`cursor-pointer ${className ?? ""}`}
        onClick={() => setOpen(true)}
      />

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={() => setOpen(false)}
          >
            <div className="mx-4 w-full sm:max-w-3xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-end mb-3 sm:mb-6">
                <button onClick={() => setOpen(false)} className="text-foreground cursor-pointer">
                  <X size={28} />
                </button>
              </div>
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
