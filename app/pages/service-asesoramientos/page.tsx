"use client";

import { handleForm } from "@/app/sendEmailAction";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Home,
  Phone,
  Mail,
  Building,
  ArrowRight,
  HelpCircle,
  Briefcase,
  Target,
} from "lucide-react";
import Link from "next/link";

const AsesoramientoComponent = () => {
  const servicios = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Compra de Propiedades",
      description:
        "Te guiamos en el proceso de encontrar y adquirir tu hogar ideal.",
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Venta de Inmuebles",
      description:
        "Maximiza el valor de tu propiedad con nuestra estrategia de venta.",
    },
  ];

  const infoCards = [
    {
      icon: <HelpCircle className="w-8 h-8 text-blue-500" />,
      title: "¿Qué es el Asesoramiento Inmobiliario?",
      content:
        "El asesoramiento inmobiliario es un servicio profesional que te guía en todas las etapas de compra, venta o gestión de propiedades. Nuestros expertos te proporcionan información valiosa sobre el mercado, aspectos legales y financieros para que tomes las mejores decisiones inmobiliarias.",
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "¿Cómo te podemos ayudar?",
      content:
        "Nuestro equipo de asesores inmobiliarios puede ayudarte a encontrar la propiedad perfecta que se ajuste a tus necesidades y presupuesto, negociar el mejor precio, gestionar toda la documentación necesaria, y brindarte apoyo en cada paso del proceso de compra o venta de tu inmueble.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-purple-500" />,
      title: "¿Cómo trabaja un Asesor Inmobiliario?",
      content:
        "Un asesor inmobiliario trabaja estrechamente contigo para entender tus necesidades y objetivos. Realiza investigaciones de mercado, organiza visitas a propiedades, negocia en tu nombre, y te guía a través de los aspectos legales y financieros. Su objetivo es hacer que tu experiencia inmobiliaria sea lo más fácil y exitosa posible.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tarjeta principal */}
      <Card className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold text-center">
            Asesoramiento Inmobiliario M&W
          </CardTitle>
          <CardDescription className="text-center text-gray-100">
            Expertos en bienes raíces a tu servicio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-sm md:text-base">
            En M&W Bienes Inmuebles, ofrecemos asesoramiento profesional para
            todas tus necesidades inmobiliarias. Ya sea que estés buscando
            comprar o vender, nuestro equipo está aquí para guiarte
            en cada paso del camino.
          </p>
        </CardContent>
      </Card>

      {/* Tarjetas de información */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {infoCards.map((card, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900 dark:to-teal-800 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <CardHeader>
              <CardTitle className="flex items-center text-emerald-700 dark:text-emerald-300">
                {card.icon}
                <span className="ml-2">{card.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-emerald-800 dark:text-emerald-200">
                {card.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Grid de la seccion de contacto y card de servicios */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Formulario de contacto */}
        <Card className="col-span-1 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900 dark:to-emerald-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green-700 dark:text-green-300">
              Envíanos un mensaje
            </CardTitle>
            <CardDescription className="text-green-600 dark:text-green-400">
              Completa el formulario y nos pondremos en contacto contigo pronto.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={handleForm} method="POST" className="space-y-4 w-full">
              <Input
                type="text"
                name="title"
                placeholder="Asunto"
                className="bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 border-green-300 dark:border-green-700"
              />
              <Input
                type="text"
                name="to_name"
                placeholder="Nombre"
                className="bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 border-green-300 dark:border-green-700"
              />
              <Input
                type="text"
                name="to_number"
                placeholder="Número de teléfono"
                className="bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 border-green-300 dark:border-green-700"
              />
              <Input
                type="email"
                name="to_email"
                placeholder="Correo electrónico"
                className="bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 border-green-300 dark:border-green-700"
              />
              <Textarea
                name="content"
                placeholder="Mensaje"
                rows={4}
                className="bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 border-green-300 dark:border-green-700"
              />
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Enviar mensaje
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* contenedor de las cards de servicios y card de contacto */}
        <div className="col-span-1">
          {/* Cards de servicios */}
          <div className="space-y-6">
            {servicios.map((servicio, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-800 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700 dark:text-blue-300">
                    {servicio.icon}
                    <span className="ml-2">{servicio.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-800 dark:text-blue-200">
                    {servicio.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* card de contacto */}
          <div className="mt-6">
            <Card className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white transition-all duration-300 hover:shadow-lg hover:scale-105 p-5">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Más Formas de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Descubre más opciones para ponerte en contacto con nosotros.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/pages/contact">
                  <Button className="w-full bg-white text-pink-500 hover:bg-pink-100 p-5 rounded-xl">
                    Ir a Contacto
                    <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsesoramientoComponent;