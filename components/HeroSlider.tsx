"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Islas de agua turquesa",
    subtitle: "Playas tranquilas, arena suave y mar cristalino.",
    image: "/images/hero-beach-1.jpg",
    tag: "Día de sol",
  },
  {
    id: 2,
    title: "Lanchas seguras y cómodas",
    subtitle: "Traslados coordinados con capitanes locales.",
    image: "/images/hero-boat-friends.jpg",
    tag: "Traslados + tours",
  },
  {
    id: 3,
    title: "Aventura en familia",
    subtitle: "Niños, parejas y amigos disfrutando juntos.",
    image: "/images/hero-boat-kids.jpg",
    tag: "Family friendly",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % slides.length),
      5500
    );
    return () => clearInterval(id);
  }, []);

  const goTo = (index: number) => setActive(index);

  return (
    <div className="relative w-full max-w-xl">
      <div className="glass-card overflow-hidden">
        <div className="relative h-64 w-full sm:h-72">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="(max-width:768px) 100vw, 480px"
                className="object-cover"
                priority={index === 0}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
              <div className="absolute left-4 right-4 bottom-4 space-y-1 text-sm text-white drop-shadow">
                <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-brandDeepBlue">
                  {slide.tag}
                </span>
                <h3 className="text-base font-semibold">{slide.title}</h3>
                <p className="text-xs text-slate-100">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === active ? "w-6 bg-brandOcean" : "w-2 bg-sky-300"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
