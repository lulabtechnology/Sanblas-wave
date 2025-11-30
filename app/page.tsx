import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Footer from "../components/Footer";

const experiencias = [
  {
    title: "Día de sol desde Panamá",
    description:
      "Salida en 4×4 desde ciudad de Panamá y visita a varias islas y piscinas naturales.",
    badge: "Full day",
    highlight: "Desde 135 USD por persona*",
  },
  {
    title: "Día de sol desde Colombia",
    description:
      "Desde Capurganá o Sapzurro directo a las islas de San Blas, sin volver a Panamá.",
    badge: "Binacional",
    highlight: "Conexión Caribe Colombia ↔ Panamá",
  },
  {
    title: "Tour 2 días / 1 noche",
    description:
      "Explora islas distintas y duerme frente al mar en cabañas típicas.",
    badge: "Escapada",
    highlight: "Perfecto para una pausa corta",
  },
  {
    title: "Tour 3 días / 2 noches",
    description:
      "Tres días entre islas, snorkel y convivencia con familias Guna.",
    badge: "Favorito",
    highlight: "Ideal para desconectar",
  },
  {
    title: "Expedición Panamá → Colombia",
    description:
      "Aventura de 4–5 días entre islas, arrecifes y comunidades hasta llegar a Capurganá.",
    badge: "Expedición",
    highlight: "Ruta Caribe inolvidable",
  },
  {
    title: "Expedición Colombia → Panamá",
    description:
      "Recorrido inverso desde Capurganá/Sapzurro hasta Guna Yala y ciudad de Panamá.",
    badge: "Expedición",
    highlight: "De Colombia al paraíso panameño",
  },
];

const diferenciales = [
  {
    title: "Operación local y aliada",
    description:
      "Equipo en Guna Yala, Ciudad de Panamá y frontera con Colombia para coordinar cada tramo.",
  },
  {
    title: "Alojamiento auténtico",
    description:
      "Cabañas familiares frente al mar que respetan la tradición y el entorno.",
  },
  {
    title: "Turismo responsable",
    description:
      "Trabajamos con comunidades Guna, generando empleo y evitando la masificación de islas.",
  },
  {
    title: "Atención cercana",
    description:
      "Te guiamos antes, durante y después del viaje por WhatsApp en español e inglés.",
  },
];

const faqs = [
  {
    q: "¿Qué incluyen los tours?",
    a: "Según el paquete: transporte, lancha, guías locales, comidas y tasas de entrada a Guna Yala.",
  },
  {
    q: "¿Cómo reservo?",
    a: "Escríbenos por WhatsApp, correo o el formulario. Confirmamos fechas, precio y abono para guardar tu espacio.",
  },
  {
    q: "¿Es un destino seguro?",
    a: "Sí. Viajamos con capitanes autorizados y embarcaciones equipadas. Coordinamos cada detalle de la ruta.",
  },
  {
    q: "¿Pueden personalizar mi viaje?",
    a: "Claro. Organizamos viajes en familia, escapadas románticas, grupos privados y expediciones mochileras.",
  },
];

const testimonios = [
  {
    name: "Andrea, Canadá",
    text: "Todo fue muy organizado. Las islas son espectaculares y entendimos mejor la cultura Guna.",
    meta: "Ruta Panamá ↔ Colombia",
  },
  {
    name: "Luca, Italia",
    text: "Un Caribe auténtico: playas vacías, gente amable y cero estrés.",
    meta: "Expedición Caribe",
  },
  {
    name: "Elena, Alemania",
    text: "San Blas Wave nos acompañó en todo momento. Nos sentimos seguros y bien cuidados.",
    meta: "Tour 3 días / 2 noches",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen page-bg pb-12">
      <Navbar />

      {/* HERO */}
      <section id="hero" className="pt-28 pb-14 lg:pt-32">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-center lg:gap-16">
          {/* Texto */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-[11px] font-semibold text-brandDeepBlue">
              <span className="h-1.5 w-1.5 rounded-full bg-brandOcean" />
              Turismo ecológico y cultural en San Blas, Panamá.
            </div>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-brandDeepBlue sm:text-4xl lg:text-5xl">
              San Blas Wave:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brandOcean via-brandTeal to-brandOcean">
                vive el Caribe Guna con calma.
              </span>
            </h1>
            <p className="max-w-xl text-sm text-slate-600 sm:text-base">
              Diseñamos viajes simples, seguros y auténticos a islas de agua
              turquesa, junto a comunidades Guna y aliados en Panamá y
              Colombia.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="#contacto" className="btn-primary">
                Cotizar mi viaje
              </Link>
              <Link
                href="https://wa.me/50765654768"
                target="_blank"
                className="btn-outline"
              >
                WhatsApp (español)
              </Link>
              <Link
                href="https://wa.me/17789918346"
                target="_blank"
                className="btn-outline"
              >
                WhatsApp (English)
              </Link>
            </div>
            <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-slate-500">
              <span>Rutas Panamá ↔ Colombia</span>
              <span className="text-slate-400">•</span>
              <span>Días de sol y tours 2–5 días</span>
              <span className="text-slate-400">•</span>
              <span>Turismo responsable en Guna Yala</span>
            </div>
          </div>

          {/* Hero slider */}
          <div className="flex-1">
            <HeroSlider />
          </div>
        </div>
      </section>

      {/* EXPERIENCIAS */}
      <section id="experiencias" className="mt-2">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-brandDeepBlue">
                Experiencias en San Blas
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Tours sencillos, bien explicados y sin letra pequeña.
              </p>
            </div>
            <p className="text-xs text-slate-500">
              Salidas desde Ciudad de Panamá, Capurganá y Sapzurro.
            </p>
          </di
