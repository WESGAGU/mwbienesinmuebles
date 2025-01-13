// components/Navbar.tsx
"use client";
import "@/app/styles/animations.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Heart, User } from "lucide-react";
import MenuNavbarMobil from "@/components/navagation/menu-navbar-mobil";
import MenuNavbarDesktop from "@/components/navagation/menu-navbar-desktop";
import Image from "next/image";
import ToggleTheme from "@/components/toggle-theme";
import { useFavoritesStore } from "@/app/FavoritesContext"; // Importa el store de favoritos

const Navbar = () => {
  const router = useRouter();
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);

  // Obtén la lista de favoritos del store
  const favorites = useFavoritesStore((state) => state.favorites);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setAtTop(currentScrollY === 0);

      if (currentScrollY === 0) {
        setScrollUp(true);
      } else if (currentScrollY > lastScrollY) {
        setScrollUp(false);
      } else {
        setScrollUp(true);
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
          ? "bg-transparent py-2"
          : "bg-white dark:bg-gray-950 shadow-md py-1"
      }`}
    >
      <div className="flex items-center justify-between px-4 mx-auto cursor-pointer sm:max-w-2xl md:max-w-6xl">
        {/* Logo y Título */}
        <div className="hidden lg:flex items-center justify-center gap-2">
          <Image src={"/MW.png"} alt="logoImage" width={60} height={60} />
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
          <div className="relative">
            <Heart
              strokeWidth={1}
              className="cursor-pointer"
              onClick={() => router.push("/pages/loved-products")} // Redirige a la página de favoritos
            />
            {/* Muestra la cantidad de favoritos */}
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {favorites.length}
              </span>
            )}
          </div>

          <User strokeWidth={1} className="cursor-pointer" onClick={() => router.push("/login")}/>
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
};

export default Navbar;