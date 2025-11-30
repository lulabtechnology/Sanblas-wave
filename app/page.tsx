import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Footer from "../components/Footer";

const experiencias = [
  {
    title: "Día de Sol desde Panamá → San Blas",
    description:
      "Salida en 4×4 desde Ciudad de Panamá hasta Cartí y lancha a las islas. Incluye visitas a 2–3 islas, piscinas naturales y cápsula cultural Guna.",
    badge: "Full day",
    highlight: "Desde 135 USD por persona*",
  },
  {
    title: "Día de Sol desde Colombia → San Blas",
    description:
      "Desde Capurganá o Sapzurro en lancha hacia las islas de San Blas. Ideal para quienes ya están en Colombia y quieren vivir el paraíso sin regresar a Panamá primero.",
    badge: "Binacional",
    highlight: "Ruta Caribe Colombia ↔ Panamá",
  },
  {
    title: "Tour 2 días / 1 noche",
    description:
      "Explora varias islas, nada en aguas turquesas y duerme en una cabaña típica frente al mar operada por familias Guna.",
    badge: "Escapada corta",
    highlight: "Atardeceres frente al mar",
  },
  {
    title: "Tour 3 días / 2 noches",
    description:
      "Vive San Blas a ritmo caribeño: islas diferentes cada día, experiencias culturales y gastronomía local.",
    badge: "Favorito",
    highlight: "Ideal para desconectarse",
  },
  {
    title: "Expedición Panamá → Colombia (4–5 días)",
    description:
      "Aventura especial para mochileros: varias islas, snorkel, playas vírgenes y llegada a Capurganá o Sapzurro.",
    badge: "Expedición",
    highlight: "Ruta de frontera Caribe",
  },
  {
    title: "Expedición Colombia → Panamá (4–5 días)",
    description:
      "Recorrido inverso desde Capurganá/Sapzurro hacia San Blas y Panamá. Experiencia profunda con comunidades Guna.",
    badge: "Expedición",
    highlight: "Cultura + naturaleza",
  },
  {
    title: "Tours privados",
    description:
      "Experiencia exclusiva para familias, parejas o grupos VIP. Horarios flexibles, guía dedicado y lancha privada.",
    badge: "Privado",
    highlight: "Diseñamos tu propia ruta",
  },
  {
    title: "Transporte y tours desde Ciudad de Panamá",
    description:
      "Gracias al Aviso de Operación en la capital, también organizamos traslados turísticos hacia San Blas, Portobelo, Colón y otros destinos.",
    badge: "City pick-up",
    highlight: "Puerta a puerta desde tu hotel",
  },
];

const diferenciales = [
  {
    title: "Transporte propio y coordinado",
    description:
      "Operamos con lanchas y vehículos 4×4 aliados, autorizados y coordinados por nuestro equipo local en Guna Yala y Ciudad de Panamá.",
  },
  {
    title: "Alojamiento auténtico",
    description:
      "Cabañas propias y familiares frente al mar, con opciones estándar y premium que combinan comodidad y tradición Guna.",
  },
  {
    title: "Turismo responsable y comunitario",
    description:
      "Trabajamos directamente con comunidades Guna, generando empleo digno, apoyando iniciativas culturales y evitando la sobrecarga de islas.",
  },
  {
    title: "Experiencias culturales reales",
    description:
      "Talleres de artesanía, cocina local, historia de la Revolución Guna, festivales como la Semana Cultural de Armila y mucho más.",
  },
  {
    title: "Atención personalizada",
    description:
      "Te acompañamos desde el primer mensaje por WhatsApp hasta tu regreso, con comunicación clara, itinerarios explicados y soporte en español e inglés.",
  },
];

const faqs = [
  {
    q: "¿Qué está incluido en los tours?",
    a: "Según el paquete, incluye transporte 4×4 y lancha, guías locales, comidas típicas, tasas de entrada y actividades culturales y recreativas en las islas.",
  },
  {
    q: "¿Cómo hago una reserva?",
    a: "Puedes escribirnos por WhatsApp, correo o el formulario de contacto. Te enviamos la propuesta, confirmamos fechas y formas de pago. La reserva queda confirmada con tu abono.",
  },
  {
    q: "¿Es seguro viajar a San Blas?",
    a: "Sí. Trabajamos con capitanes certificados, embarcaciones equipadas y coordinamos cada tramo del viaje para tu tranquilidad.",
  },
  {
    q: "¿Qué debo llevar?",
    a: "Ropa ligera, traje de baño, toalla, protector solar, repelente, sombrero, sandalias y efectivo para gastos personales y artesanías.",
  },
  {
    q: "¿Pueden personalizar el tour?",
    a: "Claro. Diseñamos experiencias privadas y adaptadas: fotografía, viajes en familia, escapadas románticas o grupos de amigos.",
  },
];

const testimonios = [
  {
    name: "Andrea, Canadá",
    text: "Nuestro viaje fue increíble. La comida deliciosa, aprendimos mucho de la cultura Guna y todo fue organizado a la perfección.",
    meta: "Ruta Panamá ↔ Colombia",
  },
  {
    name: "Luca, Italia",
    text: "Fue una aventura mágica: experiencias únicas, gente maravillosa y detalles como la mola artesanal que guardaremos para siempre.",
    meta: "Expedición Caribe",
  },
  {
    name: "Elena, Alemania",
    text: "Durante la Semana Cultural de Armila vivimos algo único: danzas, gastronomía y tradición Guna acompañadas de una gran organización.",
    meta: "Semana Cultural de Armila",
  },
  {
    name: "Michael, EE. UU.",
    text: "San Blas es un paraíso natural. Nadamos en aguas cristalinas, vimos arrecifes y entendimos cómo los Guna cuidan su entorno.",
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
        className="relative overflow-hidden pt-28 pb-14 lg:pt-32"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-center lg:gap-16">
          {/* Texto */}
          <div className="relative z-10 flex-1 space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-brandTurquoise/50 bg-slate-900/80 px-3 py-1 text-[11px] font-semibold text-brandTurquoise/90">
              <span className="h-1.5 w-1.5 rounded-full bg-brandTurquoise" />
              Explora San Blas: Naturaleza, Tradición y Paraíso
            </div>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              San Blas Wave:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brandOrange via-brandGold to-brandTurquoise">
                donde cada ola es una historia.
              </span>
            </h1>
            <p className="max-w-xl text-sm text-slate-200/90 sm:text-base">
              Agencia turística ecológica y cultural en Guna Yala, Panamá.
              Diseñamos experiencias auténticas en islas paradisíacas, con
              transporte propio, convivencia con comunidades Guna y rutas
              binacionales Panamá ↔ Colombia.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="#contacto" className="btn-primary">
                Cotiza tu viaje a San Blas
              </Link>
              <Link
                href="https://wa.me/50765654768"
                target="_blank"
                className="btn-outline"
              >
                Hablar por WhatsApp (español)
              </Link>
              <Link
                href="https://wa.me/17789918346"
                target="_blank"
                className="btn-outline"
              >
                WhatsApp (English)
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-300/90">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brandGold" />
                Rutas Panamá ↔ Colombia · Día de Sol · Tours 2–5 días
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brandTurquoise" />
                Turismo responsable que apoya directamente a comunidades Guna
              </div>
            </div>
          </div>

          {/* Hero 3D slider */}
          <div className="flex-1">
            <HeroSlider />
          </div>
        </div>
      </section>

      {/* EXPERIENCIAS */}
      <section id="experiencias" className="mt-4 pt-4">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50">
                Experiencias y rutas en San Blas
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">
                Desde días de sol hasta expediciones de varios días entre
                Panamá y Colombia. Elige el ritmo de tu aventura y nosotros nos
                encargamos de la logística, el transporte y la experiencia
                cultural.
              </p>
            </div>
            <div className="text-xs text-slate-400">
              Operación binacional con aliados en Capurganá y Guna Yala.
            </div>
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experiencias.map((exp) => (
              <article key={exp.title} className="glass-card p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold text-brandTurquoise border border-brandTurquoise/50">
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
            *Precios referenciales, sujetos a cambios según temporada y
            disponibilidad.
          </p>
        </div>
      </section>

      {/* BLOQUE DIFERENCIALES */}
      <section id="diferenciales" className="mt-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="glass-card grid gap-8 px-6 py-7 md:grid-cols-[1.1fr,1fr] md:px-8 md:py-9">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-50">
                ¿Por qué viajar con San Blas Wave?
              </h2>
              <p className="text-sm text-slate-300">
                No buscamos ser los más baratos; buscamos ser los más
                coherentes. Conectamos a los viajeros con la naturaleza y la
                cultura Guna mediante un turismo responsable, organizado y
                transparente.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {diferenciales.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-slate-950/70 p-4 border border-slate-700/70">
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

            <div className="relative h-[260px] md:h-auto">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brandTurquoise/30 via-brandOrange/20 to-transparent blur-xl" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/80">
                <Image
                  src="/images/gallery-beach-wide.jpg"
                  alt="Playa paradisíaca en San Blas"
                  fill
                  sizes="(max-width:768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 space-y-1 text-xs text-slate-200">
                  <p className="font-semibold text-brandGold">
                    “Cada isla guarda una historia distinta: el primer día
                    llegas, el segundo te conectas y el tercero te enamoras.”
                  </p>
                  <p className="text-[11px] text-slate-300">
                    Turismo cultural y sostenible junto a comunidades Guna en
                    Guna Yala.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA SIMPLE */}
      <section className="mt-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50">
                Un vistazo a tu próxima aventura
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Islas de arena blanca, comunidades Guna, lanchas seguras y
                sonrisas que llegan desde Canadá, Europa y toda Latinoamérica.
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
                alt="Familia disfrutando en lancha"
                fill
                sizes="(max-width:768px) 100vw, 250px"
                className="object-cover"
              />
            </div>
            <div className="relative h-52 overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/80">
              <Image
                src="/images/gallery-kids-boat.jpg"
                alt="Niños disfrutando de San Blas en lancha"
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
              <h2 className="text-2xl font-semibold text-slate-50">
                Viajeros que ya vivieron San Blas Wave
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Experiencias desde Canadá, Europa y Latinoamérica que validan
                nuestro enfoque cultural, humano y organizado.
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
      <section id="faq" className="mt-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Preguntas frecuentes
          </h2>
          <p className="mt-1 text-sm text-slate-300">
            Respuestas rápidas antes de reservar. Si aún tienes dudas, nuestro
            equipo está a un WhatsApp de distancia.
          </p>
          <div className="mt-6 space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-700/70 bg-slate-950/70 px-4 py-3"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-3 text-sm font-semibold text-slate-100">
                  <span>{item.q}</span>
                  <span className="text-brandTurquoise">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-300">{item.a}</p>
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
              <h2 className="text-2xl font-semibold text-slate-50">
                Tu aventura en San Blas comienza aquí
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Cuéntanos qué tipo de experiencia buscas (familia, amigos,
                pareja, mochileros, expedición Panamá ↔ Colombia) y te
                responderemos con una propuesta personalizada.
              </p>
              <form
                className="mt-6 space-y-4 text-sm"
                // Reemplaza la acción por tu servicio de formularios favorito
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
                    placeholder="Día de sol, tour 3 días / 2 noches, expedición Panamá → Colombia, tour privado, etc."
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-brandTurquoise"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button type="submit" className="btn-primary">
                    Enviar mensaje
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
                <h3 className="text-base font-semibold text-slate-50">
                  Datos de contacto
                </h3>
                <div className="mt-3 space-y-2 text-sm text-slate-300">
                  <p>
                    <span className="font-semibold text-slate-100">
                      Teléfono / WhatsApp Canadá (EN):
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
                  También estamos en redes
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Comparte tu historia con el hashtag{" "}
                  <span className="font-semibold text-brandTurquoise">
                    #SanBlasWave
                  </span>{" "}
                  y ayúdanos a inspirar a más viajeros responsables.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-brandTurquoise">
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
