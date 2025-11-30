import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San Blas Wave | Explora San Blas: Naturaleza, Tradición y Paraíso",
  description:
    "San Blas Wave ofrece experiencias turísticas auténticas en San Blas (Guna Yala): tours, hospedajes, expediciones Panamá ↔ Colombia y turismo cultural responsable.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="page-bg min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
