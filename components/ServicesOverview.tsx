"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Building, DollarSign, Calculator, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";

const ServicesOverview = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Título principal */}
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
        Nuestros Servicios
      </h1>

      {/* Contenedor flex para las dos cards */}
      <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Card de Asesoramiento Inmobiliario */}
        <div className="flex-1 relative bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-3xl">
          {/* Imagen de fondo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/asesoramiento.webp" // Ruta a tu imagen de asesoramiento
              alt="Asesoramiento Inmobiliario"
              fill
              className="object-cover opacity-20"
            />
          </div>
          {/* Contenido */}
          <div className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <Home className="w-8 h-8 mr-2" />
                Asesoramiento Inmobiliario
              </h2>
              <p className="mb-6 text-lg">
                Te ayudamos a encontrar la propiedad perfecta o a vender tu inmueble al mejor precio.
              </p>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
                  <h3 className="font-semibold text-xl flex items-center">
                    <Building className="w-6 h-6 mr-2" />
                    Compra y Venta
                  </h3>
                  <p className="text-sm mt-2">
                    Encuentra tu hogar ideal o maximiza el valor de tu propiedad.
                  </p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
                  <h3 className="font-semibold text-xl flex items-center">
                    <Phone className="w-6 h-6 mr-2" />
                    Soporte Personalizado
                  </h3>
                  <p className="text-sm mt-2">
                    Estamos disponibles para resolver todas tus dudas.
                  </p>
                </div>
              </div>
            </div>
            <Link href="/pages/service-asesoramientos" className="mt-6">
              <Button className="w-full bg-white text-purple-600 hover:bg-purple-100 font-semibold text-lg py-3">
                Ver más detalles <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Card de Préstamos */}
        <div className="flex-1 relative bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-3xl">
          {/* Imagen de fondo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/prestamo.webp" // Ruta a tu imagen de préstamos
              alt="Préstamos Inmobiliarios"
              fill
              className="object-cover opacity-20"
            />
          </div>
          {/* Contenido */}
          <div className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <DollarSign className="w-8 h-8 mr-2" />
                Préstamos Inmobiliarios
              </h2>
              <p className="mb-6 text-lg">
                Ofrecemos soluciones financieras adaptadas a tus necesidades, con tasas competitivas y plazos flexibles.
              </p>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
                  <h3 className="font-semibold text-xl flex items-center">
                    <Calculator className="w-6 h-6 mr-2" />
                    Calculadora de Préstamos
                  </h3>
                  <p className="text-sm mt-2">
                    Calcula tu pago mensual y el interés total de tu préstamo.
                  </p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
                  <h3 className="font-semibold text-xl flex items-center">
                    <Phone className="w-6 h-6 mr-2" />
                    Contacto Rápido
                  </h3>
                  <p className="text-sm mt-2">
                    Contáctanos para obtener más información o solicitar un préstamo.
                  </p>
                </div>
              </div>
            </div>
            <Link href="/pages/service-prestamos" className="mt-6">
              <Button className="w-full bg-white text-green-600 hover:bg-green-100 font-semibold text-lg py-3">
                Ver más detalles <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;