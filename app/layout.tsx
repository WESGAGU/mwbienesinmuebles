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
  title: "M&W Bienes Inmuebles",
  description:
    "Descubre las mejores propiedades en Nicaragua con M&W Bienes Inmuebles. Ofrecemos asesoramiento y servicio de intermediación para casas, solares y fincas.",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  themeColor: "#ffffff",
  openGraph: {
    title: "MW Bienes Inmuebles",
    description:
      "Encuentra casas, solares y fincas en Nicaragua con M&W Bienes Inmuebles. Ofrecemos asesoramiento experto y servicio de intermediación.",
    url: "https://mwbienesinmuebles.com",
    siteName: "M&W Bienes Inmuebles",
    images: [
      {
        url: "/MW.png",
        width: 1200,
        height: 630,
        alt: "MW Bienes Inmuebles",
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
                "https://https://www.facebook.com/profile.php?id=61567937872394",
                "https://www.instagram.com/mwbienesinmuebles",
                "https://www.tiktok.com/@mwbienesinmuebles",
              ],
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
