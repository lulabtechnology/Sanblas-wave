"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Islas de agua turquesa",
    subtitle: "Playas tranquilas, arena clara y palmeras por todos lados.",
    image: "/images/hero-beach-1.jpg",
    tag: "Día de sol",
  },
  {
    id: 2,
    title: "Lanchas seguras y capitanes Guna",
    subtitle: "Traslado coordinado desde tierra hasta las islas.",
    image: "/images/hero-boat-friends.jpg",
    tag: "Experiencia local",
  },
  {
    id: 3,
    title: "Aventura para toda la familia",
    subtitle: "Niños y adultos disfrutando San Blas a su ritmo.",
    image: "/images/hero-boat-kids.jpg",
    tag: "Family friendly",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % slides.length),
      5200
    );
    return () => clearInterval(id);
  }, []);

  const goTo = (index: number) => setActive(index);

  return (
    <div className="relative mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl">
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.35),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(56,189,248,0.35),_transparent_55%)] opacity-80" />

      <div
        className="relative h-[330px] sm:h-[360px] md:h-[400px] w-full overflow-visible rounded-[30px] bg-slate-950/70 border border-slate-700/70 shadow-soft px-2 py-5 sm:px-5"
        style={{ perspective: "1300px" }}
      >
        <div className="relative h-full w-full [transform-style:preserve-3d]">
          {slides.map((slide, index) => {
            let relative = index - active;
            const total = slides.length;

            if (relative > total / 2) relative -= total;
            if (relative < -total / 2) relative += total;
            if (relative < -2 || relative > 2) return null;

            const translateX = relative * 210;
            const rotateY = relative * -26;
            const translateZ = 120 - Math.abs(relative) * 100;
            const scale = relative === 0 ? 1 : 0.9;
            const opacity = relative === 0 ? 1 : 0.8;

            return (
              <article
                key={slide.id}
                className="absolute left-1/2 top-1/2 w-[82%] sm:w-[76%] md:w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[24px] border border-slate-700/80 bg-slate-900/80 shadow-soft overflow-hidden transition-all duration-700"
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex: 10 - Math.abs(relative),
                }}
              >
                <div className="relative h-48 w-full sm:h-52">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="(max-width:768px) 320px, 480px"
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-semibold text-brandTurquoise border border-brandTurquoise/60">
                    {slide.tag}
                  </span>
                </div>
                <div className="space-y-1 px-5 pb-4 pt-3">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {slide.title}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {slide.subtitle}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Dots */}
        <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === active
                  ? "w-7 bg-gradient-to-r from-brandTurquoise to-brandSky"
                  : "w-2 bg-slate-500/60"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
