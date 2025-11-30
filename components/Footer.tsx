import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-sky-100 bg-white/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} San Blas Wave. Todos los derechos
          reservados.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <span className="text-slate-500">
            Turismo cultural y responsable en Guna Yala.
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="#faq" className="hover:text-brandOcean">
              Preguntas frecuentes
            </Link>
            <span className="text-slate-400">•</span>
            <Link
              href="https://wa.me/50765654768"
              className="hover:text-brandOcean"
              target="_blank"
            >
              WhatsApp (ES)
            </Link>
            <span className="text-slate-400">•</span>
            <Link
              href="https://wa.me/17789918346"
              className="hover:text-brandOcean"
              target="_blank"
            >
              WhatsApp (EN)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
