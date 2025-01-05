"use client";
import "@/app/styles/animations.css"; // Importa el CSS para las animaciones
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Heart, User } from "lucide-react";
import MenuNavbarMobil from "@/components/navagation/menu-navbar-mobil";
import MenuNavbarDesktop from "@/components/navagation/menu-navbar-desktop";
import Image from "next/image";
import ToggleTheme from "@/components/toggle-theme";


const Navbar = () => {
  const router = useRouter();
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true); // Detecta si está al tope de la pantalla

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setAtTop(currentScrollY === 0); // Actualiza si está al tope de la pantalla

      if (currentScrollY === 0) {
        setScrollUp(true); // Siempre muestra el navbar al tope
      } else if (currentScrollY > lastScrollY) {
        setScrollUp(false); // Oculta navbar al desplazarse hacia abajo
      } else {
        setScrollUp(true); // Muestra navbar al desplazarse hacia arriba
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        scrollUp ? "translate-y-0" : "-translate-y-full"
      } ${
        atTop
          ? "bg-transparent  py-2" // Sin fondo, con margen inferior y padding pequeño
          : "bg-white dark:bg-gray-950 shadow-md py-1" // Con fondo y sombra al desplazarse
      }`}
    >
      <div className="flex items-center justify-between px-4 mx-auto cursor-pointer sm:max-w-2xl md:max-w-6xl">
        {/* Logo y Título */}
        <div className="hidden lg:flex items-center justify-center gap-2">
          <Image
            src={"/MW.png"}
            alt="logoImage"
            width={60}
            height={60}
          />
          <h1
            className="text-sm font-semibold"
            onClick={() => router.push("/")}
          >
            Bines Inmuebles{" "}
            <span className="text-blue-700 opacity-80 text-xs">M&W</span>
          </h1>
        </div>

        {/* MENÚ DE PANTALLAS GRANDES (DESKTOP) */}
        <div className="hidden lg:flex items-center justify-between">
          <MenuNavbarDesktop />
        </div>

        {/* MENÚ DE PANTALLAS PEQUEÑAS Y MEDIANAS */}
        <div className="flex lg:hidden">
          <MenuNavbarMobil />
        </div>

        {/* ICONOS */}
        <div className="flex items-center justify-between gap-2 sm:gap-7">
          <Heart
            strokeWidth={1}
            className="cursor-pointer"
            onClick={() => router.push("/loved-products")}
          />
          <User strokeWidth={1} className="cursor-pointer" />
          <ToggleTheme />
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
