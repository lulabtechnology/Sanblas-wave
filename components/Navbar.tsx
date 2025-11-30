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
      <div className="border-b border-brandSoftBlue/80 bg-gradient-to-b from-white/96 via-white/94 to-brandSoftBlue/80 backdrop-blur-xl shadow-[0_6px_18px_rgba(15,23,42,0.06)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:py-4">
          {/* Logo + nombre */}
          <Link href="#hero" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-brandSoftBlue bg-white">
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
                Guna Yala · Panamá
              </p>
            </div>
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden items-center gap-7 text-sm text-slate-700 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative pb-1 hover:text-brandTeal transition-colors"
              >
                <span>{link.label}</span>
                <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px] origin-center scale-x-0 bg-gradient-to-r from-brandTeal via-brandOcean to-brandOrange transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            ))}
            <Link href="#contacto" className="btn-primary text-xs shadow-none">
              Cotizar viaje
            </Link>
          </nav>

          {/* Botón menú móvil */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-full border border-brandSoftBlue bg-white px-3 py-1.5 text-sm text-brandDeepBlue lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="mx-4 mt-2 rounded-3xl border border-brandSoftBlue bg-white shadow-soft lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-3 text-sm text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2 hover:bg-brandSoftBlue/70"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 btn-primary text-xs justify-center"
            >
              Cotizar viaje
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
