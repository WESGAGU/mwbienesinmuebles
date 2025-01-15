import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navagation/navbar";
import Footer from "@/components/navagation/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MW Bienes Inmuebles - Especialistas en Propiedades en Nicaragua",
  description:
    "Descubre propiedades en Nicaragua con MW Bienes Inmuebles. Ofrecemos asesoramiento y servicio de intermediación para casas, solares y fincas.",
  keywords: [
    "propiedades Jalapa",
    "inmuebles Jalapa",
    "bienes raíces Jalapa",
    "casas en Jalapa",
    "solares en Jalapa",
    "fincas en Jalapa",
    "terreros en Jalapa",
    "terrenos",
    "Casas, casas, hogares, viviendas, propiedades, inmuebles, bienes raíces, bienes inmuebles, solares, fincas, asesoría inmobiliaria, intermediación inmobiliaria, MW Bienes Inmuebles, Propiedades en Nicaragua, casa en Nicaragua, finca en Nicaragua, solar en Nicaragua, venta de propiedades, compra de propiedades, asesor inmobiliario, intermediario inmob",
    "bienes inmuebles Nicaragua",
    "casas en venta Nicaragua",
    "solares en Nicaragua",
    "fincas en Nicaragua",
    "asesoría inmobiliaria",
    "intermediación inmobiliaria",
    "MW Bienes Inmuebles",
    "Propiedades en Nicaragua",
    "casa en Nicaragua",
    "finca en Nicaragua",
    "solar en Nicaragua",
    "venta de propiedades",
    "compra de propiedades",
    "asesor inmobiliario",
    "intermediario inmobiliario",
    "Nicaragua",
    "Managua",
    "León",
    "Granada",
    "Rivas",
    "casas en Jalapa",
    "casas en León",
    "real state Nicaragua",
    "Bienes raíces Nicaragua",
    "Nicaragua real state",
    "Nicaragua properties",
    "Propiedades, propiedades, terrenos, Terrenos",
  ],
  robots: "index, follow",
  openGraph: {
    title: "MW Bienes Inmuebles - Especialistas en Propiedades en Nicaragua",
    description:
      "Encuentra casas, solares y fincas en Nicaragua con MW Bienes Inmuebles. Ofrecemos asesoramiento experto y servicio de intermediación.",
    url: "https://mwbienesinmuebles.com",
    siteName: "MW Bienes Inmuebles",
    images: [
      {
        url: "/MW.png",
        width: 1200,
        height: 630,
        alt: "MW Bienes Inmuebles - Especialistas en Propiedades en Nicaragua",
      },
    ],
    locale: "es_NI",
    type: "website",
  },
  alternates: {
    canonical: "https://mwbienesinmuebles.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* Meta tags adicionales para iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="MW Bienes Inmuebles" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="white" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
        {/* Datos Estructurados */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "MW Bienes Inmuebles",
              url: "https://mwbienesinmuebles.com",
              description:
                "Asesoramiento sobre bienes inmuebles en Nicaragua. Casas, solares y fincas.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "Nicaragua",
              },
              image: "https://mwbienesinmuebles.com/og-image.jpg",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61567937872394",
                "https://www.instagram.com/mwbienesinmuebles",
                "https://www.tiktok.com/@mwbienesinmuebles",
              ],
              serviceType: ["Venta de propiedades", "Asesoría inmobiliaria", "Intermediación"],
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Nicaragua",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Análisis y optimización */}
        <Analytics />
        <SpeedInsights />
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Contenido */}
          <Navbar />
          <hr className="mb-14 md:mb-20" />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}