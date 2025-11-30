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
    a: "Trabajamos con capitanes autorizados y coordinación diari
