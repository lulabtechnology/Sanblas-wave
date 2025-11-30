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
    <header className="fixed inset-x-0 top-0 z-40 border-b border-sky-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:py-4">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">
            <Image
              src="/images/logo-sanblaswave.png"
              alt="San Blas Wave Logo"
              fill
              sizes="40px"
              className="object-contain p-1.5"
            />
          </div>
          <div className="leading-tight">
            <span className="text-xs font-semibold tracking-[0.18em] text-brandDeepBlue uppercase">
              San Blas Wave
            </span>
            <p className="text-[11px] text-slate-500">
              Naturaleza · Cultura · Caribe
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm text-slate-700 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-brandOcean transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="#contacto" className="btn-primary text-xs shadow-none">
            Cotiza tu viaje
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 lg:hidden"
          aria-label="Abrir menú"
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-4 mb-3 rounded-3xl border border-sky-100 bg-white shadow-soft lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-3 text-sm text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2 hover:bg-sky-50"
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
