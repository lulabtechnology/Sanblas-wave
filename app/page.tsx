import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Footer from "../components/Footer";

const experiencias = [
  {
    title: "Día de sol desde Panamá",
    description:
      "Salida en 4×4 desde ciudad de Panamá y visita a islas y piscinas naturales.",
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
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experiencias.map((exp) => (
              <article key={exp.title} className="glass-card p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-brandDeepBlue border border-sky-200">
                    {exp.badge}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-brandDeepBlue">
                  {exp.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {exp.description}
                </p>
                <p className="mt-3 text-xs font-medium text-brandOrange">
                  {exp.highlight}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-slate-500">
            *Precios referenciales. Podemos ajustar según temporada y tamaño de
            grupo.
          </p>
        </div>
      </section>

      {/* DIFERENCIALES */}
      <section id="diferenciales" className="mt-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-[1.1fr,1fr] md:items-center">
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold text-brandDeepBlue">
                ¿Por qué viajar con San Blas Wave?
              </h2>
              <p className="text-sm text-slate-600">
                No hacemos viajes masivos. Preferimos grupos pequeños, rutas
                claras y una relación cercana con cada viajero.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {diferenciales.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white border border-sky-100 p-4"
                  >
                    <h3 className="text-sm font-semibold text-brandDeepBlue">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-64 md:h-72">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brandSoftBlue via-brandSand to-transparent blur-xl" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-soft">
                <Image
                  src="/images/gallery-beach-wide.jpg"
                  alt="Playa en San Blas con palmeras y mar turquesa"
                  fill
                  sizes="(max-width:768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white drop-shadow">
                  <p className="font-semibold text-brandSand">
                    “San Blas es un lugar para bajar el ritmo, escuchar el mar
                    y apoyar a comunidades que cuidan su territorio.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="mt-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-brandDeepBlue">
                Un vistazo a tu viaje
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Islas, comunidades y momentos que suelen repetir nuestros
                viajeros.
              </p>
            </div>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            <div className="relative h-52 overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-soft md:col-span-2">
              <Image
                src="/images/gallery-community.jpg"
                alt="Comunidad Guna y muelle"
                fill
                sizes="(max-width:768px) 100vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="relative h-52 overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-soft">
              <Image
                src="/images/gallery-boat-family.jpg"
                alt="Familia en lancha en San Blas"
                fill
                sizes="(max-width:768px) 100vw, 250px"
                className="object-cover"
              />
            </div>
            <div className="relative h-52 overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-soft">
              <Image
                src="/images/gallery-kids-boat.jpg"
                alt="Niños disfrutando del mar en lancha"
                fill
                sizes="(max-width:768px) 100vw, 250px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="mt-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-brandDeepBlue">
                Lo que dicen quienes ya vinieron
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Historias reales de viajeros que confiaron su viaje a San Blas
                Wave.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {testimonios.map((t) => (
              <article key={t.name} className="glass-card flex flex-col p-5">
                <p className="text-sm text-slate-700">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 text-xs text-slate-600">
                  <p className="font-semibold text-brandDeepBlue">{t.name}</p>
                  <p className="text-[11px] text-slate-500">{t.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-brandDeepBlue">
            Preguntas frecuentes
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Respuestas rápidas antes de reservar. Si te queda alguna duda,
            escríbenos por WhatsApp.
          </p>
          <div className="mt-6 space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-sky-100 bg-white px-4 py-3"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-3 text-sm font-semibold text-brandDeepBlue">
                  <span>{item.q}</span>
                  <span className="text-brandOcean group-open:hidden">+</span>
                  <span className="hidden text-brandOcean group-open:inline">
                    −
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mt-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
            <div className="glass-card p-6 md:p-7">
              <h2 className="text-2xl font-semibold text-brandDeepBlue">
                Tu viaje a San Blas empieza aquí
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Cuéntanos fechas tentativas, número de personas y tipo de tour
                que tienes en mente.
              </p>
              <form className="mt-6 space-y-4 text-sm" action="#" method="post">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs text-slate-600">
                      Nombre completo
                    </label>
                    <input
                      name="nombre"
                      type="text"
                      required
                      className="w-full rounded-xl border border-sky-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brandOcean"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-slate-600">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-sky-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brandOcean"
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs text-slate-600">
                      WhatsApp
                    </label>
                    <input
                      name="whatsapp"
                      type="text"
                      className="w-full rounded-xl border border-sky-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brandOcean"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-slate-600">
                      País de origen
                    </label>
                    <input
                      name="pais"
                      type="text"
                      className="w-full rounded-xl border border-sky-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brandOcean"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-xs text-slate-600">
                    ¿Qué tipo de experiencia buscas?
                  </label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    placeholder="Día de sol, tour 3 días / 2 noches, expedición Panamá → Colombia, tour privado, etc."
                    className="w-full rounded-xl border border-sky-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brandOcean"
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
                    Enviar mensaje por WhatsApp
                  </Link>
                </div>
              </form>
            </div>

            <div className="space-y-5 text-sm">
              <div className="glass-card p-5">
                <h3 className="text-base font-semibold text-brandDeepBlue">
                  Datos de contacto
                </h3>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  <p>
                    <span className="font-semibold">WhatsApp Canadá (EN):</span>{" "}
                    +1 (778) 991-8346
                  </p>
                  <p>
                    <span className="font-semibold">WhatsApp Panamá (ES):</span>{" "}
                    +507 6565-4768
                  </p>
                  <p>
                    <span className="font-semibold">Emails:</span>
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

              <div className="rounded-3xl border border-sky-100 bg-white/95 p-5">
                <h3 className="text-base font-semibold text-brandDeepBlue">
                  Síguenos en redes
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Comparte tu experiencia con el hashtag{" "}
                  <span className="font-semibold text-brandOcean">
                    #SanBlasWave
                  </span>
                  .
                </p>
                <ul className="mt-3 space-y-1 text-sm text-brandDeepBlue">
                  <li>Instagram: @sanblas_wave</li>
                  <li>Facebook: San Blas Wave</li>
                  <li>TikTok · YouTube: próximamente</li>
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
