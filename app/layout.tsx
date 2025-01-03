import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navagation/navbar";
import Footer from "@/components/navagation/footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "M&W Bienes Inmuebles",
  description: "app que brinda servicio de asesoramiento sonbre bienes inmubles en nicargua y tambien brinda el servicio de intermediario que ayudamos a la venta de propiedades las cuales son Casas, Solares y fincas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

        <Navbar/>
        <hr className="mb-14 md:mb-20" />
        {children}
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
