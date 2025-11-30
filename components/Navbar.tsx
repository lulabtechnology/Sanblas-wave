"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#hero", label: "Inicio" },
  { href: "#experiencias", label: "Experiencias" },
  { href: "#diferenciales", label: "Por qué nosotros" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:py-5">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-brandTurquoise/60 bg-slate-900/80">
            <Image
              src="/images/logo-sanblaswave.png"
              alt="San Blas Wave Logo"
              fill
              sizes="40px"
              className="object-contain p-1"
            />
          </div>
          <div className="leading-tight">
            <span className="text-sm font-semibold tracking-[0.2em] text-brandTurquoise uppercase">
              San Blas Wave
            </span>
            <p className="text-xs text-slate-300">
              Naturaleza · Tradición · Paraíso
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm text-slate-200 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-brandTurquoise transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="btn-primary text-xs shadow-none hover:-translate-y-0"
          >
            Cotiza tu viaje
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 p-2 text-slate-200 lg:hidden"
          aria-label="Abrir menú"
        >
          <span className="material-symbols-outlined text-2xl">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-4 mt-1 rounded-3xl border border-slate-800 bg-slate-950/95 px-4 py-3 shadow-soft lg:hidden">
          <nav className="flex flex-col gap-2 text-sm text-slate-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2 hover:bg-slate-900/70"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 btn-primary text-xs justify-center"
            >
              Cotiza tu viaje
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
