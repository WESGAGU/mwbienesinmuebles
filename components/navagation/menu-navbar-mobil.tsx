"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X} from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const MenuNavbarMobil = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Sheet onOpenChange={(open) => setIsOpen(open)}>
        <SheetTrigger asChild>
          <button className="p-2 focus:outline-none">
            {isOpen ? (
              <X size={24} className="text-primary" />
            ) : (
              <Menu size={24} className="text-primary" />
            )}
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          {/* Encabezado con imagen y título */}
          <div className="flex flex-col items-center mt-4">
            <Image
              src="/MW.png"
              alt="LogoImage"
              width={100}
              height={100}
            />
            <h1 className="text-xl font-bold text-primary">
              Bines Inmuebles
              <span className="block text-center">M&W</span>
            </h1>
          </div>

          {/* Menú de navegación con Accordion */}
          <nav className="flex flex-col space-y-4 mt-8">
            <Link
              href="/"
              className="text-lg font-medium hover:text-primary relative hover:underline"
              onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
            >
              Inicio
            </Link>

            {/* Sección de Prestamos */}
            {/* <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="loans">
                <AccordionTrigger className="text-lg font-medium text-left hover:text-primary">
                  Servicios
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/pages/service-prestamos"
                      className="block text-base text-muted-foreground hover:text-primary relative hover:underline"
                      onClick={() => setIsOpen(false)}
                    >
                      Prestamos
                    </Link>
                    <Link
                      href="/pages/service-asesoramientos"
                      className="block text-base text-muted-foreground hover:text-primary relative hover:underline"
                      onClick={() => setIsOpen(false)}
                    >
                      Asesoramientos
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion> */}

            <Link
              href="/pages/service-prestamos"
              className="text-lg font-medium hover:text-primary relative hover:underline"
              onClick={() => setIsOpen(false)}
            >
              prestamos
            </Link>

            {/* Sección de Propiedades */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="properties">
                <AccordionTrigger className="text-lg font-medium text-left hover:text-primary">
                  Propiedades
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/categories/casas"
                      className="block text-base text-muted-foreground hover:text-primary relative hover:underline"
                      onClick={() => setIsOpen(false)}
                    >
                      Casas
                    </Link>
                    <Link
                      href="/categories/solares"
                      className="block text-base text-muted-foreground hover:text-primary relative hover:underline"
                      onClick={() => setIsOpen(false)}
                    >
                      Solares
                    </Link>
                    <Link
                      href="/categories/fincas"
                      className="block text-base text-muted-foreground hover:text-primary relative hover:underline"
                      onClick={() => setIsOpen(false)}
                    >
                      Fincas
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Link
              href="/pages/about"
              className="text-lg font-medium hover:text-primary relative hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/pages/contact"
              className="text-lg font-medium hover:text-primary relative hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuNavbarMobil;
