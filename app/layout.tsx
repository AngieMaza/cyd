import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400","500","600","700","800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pintureria CYD",
  description: "Pintureria CYD es una tienda de pinturas y accesorios de pintura ubicada en Constituyentes 1911 (Pacheco - Buenos Aires). Ofrecemos una amplia gama de productos y asesoramiento en pinturas. Aceptamos tarjetas de crédito y débito con cuotas sin interés. Teléfono: 011 2504-9785. Punto de venta exclusivo de Einhell y KWB.",
  keywords: [
    "Pintureria CYD",
    "Accesorios de pintura",
    "Asesoramiento en pinturas",
    "Barnices",
    "Brochas y rodillos",
    "Catálogo de pinturas",
    "Cintas de pintor",
    "Colorantes para pintura",
    "Colores de pintura",
    "Consejos de pintura",
    "Decoración con pintura",
    "Impermeabilizantes",
    "Lijas",
    "Marcas de pintura",
    "Masillas",
    "Mejores pinturas",
    "Pintura acrílica",
    "Pintura al agua",
    "Pintura antihumedad",
    "Pintura automotriz",
    "Pintura de alta cobertura",
    "Pintura decorativa",
    "Pintura ecológica",
    "Pintura esmalte",
    "Pintura epoxi",
    "Pintura impermeabilizante",
    "Pintura industrial",
    "Pintura latex",
    "Pintura lavable",
    "Pintura para exteriores resistentes",
    "Pintura para exteriores",
    "Pintura para interiores",
    "Pintura para madera",
    "Pintura para metal",
    "Pintura para muebles",
    "Pintura para pisos",
    "Pintura para techos",
    "Pintura profesional",
    "Pintura sintética",
    "Pinturería",
    "Proyectos de pintura",
    "Proyectos de renovación",
    "Productos de pintura",
    "Productos para pintores",
    "Servicio de mezcla de colores",
    "Tienda de pinturas",
    "Tienda de pinturas online",
    "Venta de pinturas",
    "Pinturas económicas",
    "Pinturas premium",
  ],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
