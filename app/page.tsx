import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Footer from "../components/Footer";

const experiencias = [
  {
    title: "Día de Sol desde Ciudad de Panamá",
    badge: "Full day",
    description:
      "4×4 + lancha hacia islas de agua turquesa. Visita 2–3 islas y piscinas naturales.",
    highlight: "Desde 135 USD por persona*",
  },
  {
    title: "Día de Sol desde Colombia",
    badge: "Binacional",
    description:
      "Salida desde Capurganá o Sapzurro directo a las islas de San Blas.",
    highlight: "Perfecto si ya estás en Colombia",
  },
  {
    title: "Tour 2 días / 1 noche",
    badge: "Escapada",
    description:
      "Una noche en cabaña frente al mar, tiempo para playa y comunidad.",
    highlight: "Atardecer en primera fila",
  },
  {
    title: "Tour 3 días / 2 noches",
    badge: "Popular",
    description:
      "Tres días para cambiar de isla, descansar y desconectarte.",
    highlight: "El favorito de muchos viajeros",
  },
  {
    title: "Expedición Panamá → Colombia",
    badge: "4–5 días",
    description:
      "Ruta Caribe en lancha entre San Blas y Capurganá/Sapzurro.",
    highlight: "Ideal para mochileros",
  },
  {
    title: "Expedición Colombia → Panamá",
    badge: "4–5 días",
    description:
      "Recorrido inverso, empezando en Colombia y llegando a Panamá.",
    highlight: "Naturaleza + cultura Guna",
  },
  {
    title: "Tours privados",
    badge: "A tu medida",
    description:
      "Para familias, parejas o grupos que quieren horarios y paradas propias.",
    highlight: "Diseñamos la ruta contigo",
  },
  {
    title: "Traslados desde Ciudad de Panamá",
    badge: "City pick-up",
    description:
      "Coordinamos transporte turístico a San Blas y otros destinos.",
    highlight: "Puerta a puerta desde tu hotel",
  },
];

const diferenciales = [
  {
    title: "Logística clara y acompañada",
    description:
      "Te guiamos desde el primer mensaje hasta tu regreso.",
  },
  {
    title: "Alojamiento auténtico",
    description:
      "Cabañas frente al mar, operadas por familias Guna.",
  },
  {
    title: "Turismo responsable",
    description:
      "Trabajo directo con comunidades y respeto al territorio.",
  },
  {
    title: "Experiencia cultural",
    description:
      "Historias, gastronomía y artesanía Guna compartidas con respeto.",
  },
  {
    title: "Equipo binacional",
    description:
      "Presencia en Panamá y Canadá, más aliados en Colombia.",
  },
];

const faqs = [
  {
    q: "¿Qué incluye un tour típico?",
    a: "Transporte, lanchas, guías locales, comidas básicas y visitas a islas según el paquete.",
  },
  {
    q: "¿Cómo reservo?",
    a: "Nos escribes por WhatsApp, definimos fechas y paquete, y confirmas con un abono.",
  },
  {
    q: "¿Es seguro viajar a San Blas?",
    a: "Trabajamos con capitanes autorizados y coordinación diaria de rutas.",
  },
  {
    q: "¿Qué debo llevar?",
    a: "Ropa ligera, traje de baño, toalla, protector solar, repelente y efectivo.",
  },
  {
    q: "¿Pueden ajustar el viaje a mi grupo?",
    a: "Sí. Hacemos itinerarios privados para familias, parejas o grupos.",
  },
];

const testimonios = [
  {
    name: "Andrea, Canadá",
    text: "Todo estuvo muy organizado. Nos sentimos seguros y bien acompañados.",
    meta: "Ruta Panamá ↔ Colombia",
  },
  {
    name: "Luca, Italia",
    text: "Islas hermosas y contacto real con la cultura Guna.",
    meta: "Expedición Caribe",
  },
  {
    name: "Elena, Alemania",
    text: "La Semana Cultural de Armila fue una experiencia única.",
    meta: "Turismo cultural",
  },
  {
    name: "Michael, EE. UU.",
    text: "Playas tranquilas, buena comida y un equipo muy atento.",
    meta: "Día de Sol + comunidad",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen pb-12">
      <Navbar />

      {/* HERO */}
      <section
        id="hero"
        className="relative overflow-hidden pt-24 pb-12 lg:pt-28"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-center lg:gap-16">
          {/* Texto */}
          <div className="relative z-10 flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-brandTurquoise/50 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold text-brandTurquoise/90">
              <span className="h-1.5 w-1.5 rounded-full bg-brandTurquoise" />
              Turismo ecológico y cultural en Guna Yala
            </div>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-[2.7rem]">
              San Blas Wave:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brandTurquoise via-brandSky to-brandOrange">
                tu forma tranquila de conocer San Blas.
              </span>
            </h1>
            <p className="max-w-xl text-sm text-slate-200/90 sm:text-[15px]">
              Diseñamos experiencias limpias y simples: islas de agua turquesa,
              cultura Guna y logística clara, sin diseños recargados ni sorpresas.
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
          </div>

          {/* Hero 3D slider */}
          <div className="flex-1">
            <HeroSlider />
          </div>
        </div>
      </section>

      {/* EXPERIENCIAS */}
      <section id="experiencias" className="pt-2">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50">
                Experiencias en San Blas
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-slate-300">
                Rutas simples, claras y pensadas para disfrutar el mar y la cultura Guna.
              </p>
            </div>
            <div className="text-xs text-slate-400">
              Operación binacional Panamá · Colombia.
            </div>
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experiencias.map((exp) => (
              <article key={exp.title} className="glass-card p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-semibold text-brandTurquoise border border-brandTurquoise/50">
                    {exp.badge}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-slate-50">
                  {exp.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {exp.description}
                </p>
                <p className="mt-3 text-xs font-medium text-brandGold">
                  {exp.highlight}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-slate-400">
            *Precios referenciales, sujetos a temporada y disponibilidad.
          </p>
        </div>
      </section>

      {/* DIFERENCIALES */}
      <section id="diferenciales" className="mt-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="glass-card grid gap-8 px-6 py-7 md:grid-cols-[1.1fr,1fr] md:px-8 md:py-9">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-50">
                Un estilo de viaje simple y cuidadoso
              </h2>
              <p className="text-sm text-slate-300">
                Nada de textos eternos ni banners agresivos. Solo información clara,
                diseño limpio y un equipo cercano.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {diferenciales.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-slate-950/70 p-4 border border-slate-700/70"
                  >
                    <h3 className="text-sm font-semibold text-slate-50">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[240px] md:h-auto">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brandTurquoise/30 via-brandSky/20 to-transparent blur-xl" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/80">
                <Image
                  src="/images/gallery-beach-wide.jpg"
                  alt="Playa en San Blas"
                  fill
                  sizes="(max-width:768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 space-y-1 text-xs text-slate-200">
                  <p className="font-semibold text-brandGold">
                    Agua clara, arena suave y selva al fondo.
                  </p>
                  <p className="text-[11px] text-slate-300">
                    Así se sienten los días tranquilos con San Blas Wave.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="mt-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50">
                Un vistazo rápido a San Blas
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Muelle, comunidad, lanchas y playas en pocas imágenes.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="relative h-52 overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/80 md:col-span-2">
              <Image
                src="/images/gallery-community.jpg"
                alt="Comunidad Guna y muelle"
                fill
                sizes="(max-width:768px) 100vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="relative h-52 overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/80">
              <Image
                src="/images/gallery-boat-family.jpg"
                alt="Familia en lancha"
                fill
                sizes="(max-width:768px) 100vw, 250px"
                className="object-cover"
              />
            </div>
            <div className="relative h-52 overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/80">
              <Image
                src="/images/gallery-kids-boat.jpg"
                alt="Niños en lancha"
                fill
                sizes="(max-width:768px) 100vw, 250px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="mt-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50">
                Personas que ya viajaron con nosotros
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Comentarios cortos y reales de viajeros de distintos países.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {testimonios.map((t) => (
              <article
                key={t.name}
                className="glass-card flex flex-col justify-between p-5"
              >
                <p className="text-sm text-slate-200">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 text-xs text-slate-300">
                  <p className="font-semibold text-brandGold">{t.name}</p>
                  <p className="text-[11px] text-slate-400">{t.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Preguntas frecuentes
          </h2>
          <p className="mt-1 text-sm text-slate-300">
            Respuestas cortas para dudas comunes.
          </p>
          <div className="mt-6 space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-700/70 bg-slate-950/70 px-4 py-3"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-3 text-sm font-semibold text-slate-100">
                  <span>{item.q}</span>
                  <span className="text-brandTurquoise">+</span>
                </summary>
                <p className="mt-2 text-sm text-slate-300">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mt-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
            <div className="glass-card p-6 md:p-7">
              <h2 className="text-2xl font-semibold text-slate-50">
                Empecemos a planear tu viaje
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Cuéntanos fechas, cantidad de personas y tipo de experiencia.
              </p>
              <form
                className="mt-6 space-y-4 text-sm"
                action="#"
                method="post"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs text-slate-300">
                      Nombre completo
                    </label>
                    <input
                      name="nombre"
                      type="text"
                      required
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-brandTurquoise"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-slate-300">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-brandTurquoise"
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs text-slate-300">
                      WhatsApp
                    </label>
                    <input
                      name="whatsapp"
                      type="text"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-brandTurquoise"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-slate-300">
                      País de origen
                    </label>
                    <input
                      name="pais"
                      type="text"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-brandTurquoise"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-xs text-slate-300">
                    ¿Qué tipo de experiencia buscas?
                  </label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    placeholder="Día de sol, tour 3 días, expedición, privado, etc."
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-brandTurquoise"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button type="submit" className="btn-primary">
                    Enviar formulario
                  </button>
                  <Link
                    href="https://wa.me/50765654768"
                    target="_blank"
                    className="btn-outline"
                  >
                    Escribir por WhatsApp
                  </Link>
                </div>
              </form>
            </div>

            <div className="space-y-5 text-sm">
              <div className="glass-card p-5">
                <h3 className="text-base font-semibold text-slate-50">
                  Datos de contacto
                </h3>
                <div className="mt-3 space-y-2 text-sm text-slate-300">
                  <p>
                    <span className="font-semibold text-slate-100">
                      WhatsApp Canadá (EN):
                    </span>{" "}
                    +1 (778) 991-8346
                  </p>
                  <p>
                    <span className="font-semibold text-slate-100">
                      WhatsApp Panamá (ES):
                    </span>{" "}
                    +507 6565-4768
                  </p>
                  <p>
                    <span className="font-semibold text-slate-100">
                      Correos:
                    </span>
                    <br />
                    info@sanblaswave.com
                    <br />
                    booking@sanblaswave.com
                    <br />
                    harold.echeverri@sanblaswave.com
                    <br />
                    renilio.crespo@sanblaswave.com
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-700/70 bg-slate-950/70 p-5">
                <h3 className="text-base font-semibold text-slate-50">
                  Redes sociales
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Etiqueta tu experiencia con{" "}
                  <span className="font-semibold text-brandTurquoise">
                    #SanBlasWave
                  </span>
                  .
                </p>
                <ul className="mt-3 space-y-1 text-sm text-brandTurquoise">
                  <li>Instagram: @sanblas_wave</li>
                  <li>Facebook: San Blas Wave</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
