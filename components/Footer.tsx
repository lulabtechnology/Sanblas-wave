import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800/70 bg-slate-950/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} San Blas Wave. Todos los derechos
          reservados.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-xs text-slate-400">
            Turismo cultural y sostenible en Guna Yala.
          </span>
          <div className="flex gap-3 text-xs">
            <Link href="#faq" className="hover:text-brandTurquoise">
              Preguntas frecuentes
            </Link>
            <span className="text-slate-600">•</span>
            <Link
              href="https://wa.me/50765654768"
              className="hover:text-brandTurquoise"
              target="_blank"
            >
              WhatsApp (español)
            </Link>
            <span className="text-slate-600">•</span>
            <Link
              href="https://wa.me/17789918346"
              className="hover:text-brandTurquoise"
              target="_blank"
            >
              WhatsApp (English)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
