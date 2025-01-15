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
  title: "MW Bienes Inmuebles | Propiedades en Nicaragua",
  description:
    "Descubre propiedades en Nicaragua con MW Bienes Inmuebles. Ofrecemos asesoramiento experto y servicio de intermediación para casas, solares, fincas y más.",
  keywords: [
    "bienes inmuebles Nicaragua",
    "casas en venta Nicaragua",
    "solares en Nicaragua",
    "fincas en Nicaragua",
    "asesoría inmobiliaria",
    "intermediación inmobiliaria",
    "MW Bienes Inmuebles",
    "prestamos accesibles",
    "propiedades en Managua",
    "inversión inmobiliaria Nicaragua",
    "compra de terrenos Nicaragua",
    "venta de casas Nicaragua",
    "alquiler de propiedades Nicaragua",
    "bienes raíces Nicaragua",
    "agente inmobiliario Nicaragua",
    "mercado inmobiliario Nicaragua",
    "desarrollo urbano Nicaragua",
    "propiedades comerciales Nicaragua",
    "asesoramiento legal inmobiliario",
    "tasación de propiedades Nicaragua"
  ],
  robots: "index, follow",
  openGraph: {
    title: "MW Bienes Inmuebles | Expertos en Propiedades en Nicaragua",
    description:
      "Encuentra casas, solares y fincas en Nicaragua con MW Bienes Inmuebles. Ofrecemos asesoramiento experto y servicio de intermediación para todas tus necesidades inmobiliarias.",
    url: "https://mwbienesinmuebles.com",
    siteName: "MW Bienes Inmuebles",
    images: [
      {
        url: "https://mwbienesinmuebles.com/MW.png",
        width: 1200,
        height: 630,
        alt: "MW Bienes Inmuebles - Propiedades en Nicaragua",
      },
    ],
    locale: "es_NI",
    type: "website",
  },
  alternates: {
    canonical: "https://mwbienesinmuebles.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "MW Bienes Inmuebles | Propiedades en Nicaragua",
    description: "Expertos en bienes inmuebles en Nicaragua. Casas, solares, fincas y más.",
    site: "@mwbienesinmuebles",
    creator: "@mwbienesinmuebles",
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
        {/* Apple Touch Icons */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />

        {/* Android Icon */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />

        {/* Standard Favicons */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href="/favicon/favicon-256x256.png"
        />

        {/* Microsoft Icons */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta
          name="msapplication-square70x70logo"
          content="/favicon/ms-icon-70x70.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="/favicon/ms-icon-150x150.png"
        />
        <meta
          name="msapplication-wide310x310logo"
          content="/favicon/ms-icon-310x310.png"
        />

        {/* Manifest */}
        <link rel="manifest" href="/favicon/manifest.json" />

        {/* Meta tags adicionales para iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="MW Bienes Inmuebles" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="white"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="black"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
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
                "Asesoramiento experto sobre bienes inmuebles en Nicaragua. Casas, solares, fincas y más.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "Nicaragua",
              },
              image: "https://mwbienesinmuebles.com/MW.png",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61567937872394",
                "https://www.instagram.com/mwbienesinmuebles",
                "https://www.tiktok.com/@mwbienesinmuebles",
              ],
              areaServed: {
                "@type": "Country",
                name: "Nicaragua"
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Asesoramiento inmobiliario"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Venta de propiedades"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Alquiler de propiedades"
                  }
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}

