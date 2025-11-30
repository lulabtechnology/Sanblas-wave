"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/images/hero-beach-1.jpg",
    alt: "Playa de arena blanca y palmeras en San Blas",
    label: "Playas vírgenes",
  },
  {
    id: 2,
    image: "/images/hero-boat-friends.jpg",
    alt: "Grupo de amigos disfrutando en lancha en San Blas",
    label: "Lanchas seguras",
  },
  {
    id: 3,
    image: "/images/hero-boat-kids.jpg",
    alt: "Niños disfrutando del mar en lancha",
    label: "Aventura en familia",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // Cambio automático de fondo
  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={i === 0}
          />
          {/* Degradado para que el texto se lea bien */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/10" />
        </div>
      ))}

      {/* Pills en la esquina inferior derecha */}
      <div className="absolute bottom-4 right-4 flex flex-wrap justify-end gap-2 text-[11px]">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setIndex(i)}
            className={`rounded-full border px-3 py-1 backdrop-blur-sm transition-all ${
              i === index
                ? "border-white bg-white/90 text-brandDeepBlue"
                : "border-white/50 bg-black/30 text-slate-100"
            }`}
          >
            {slide.label}
          </button>
        ))}
      </div>
    </div>
  );
}
