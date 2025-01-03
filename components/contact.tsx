"use client";
import { handleForm } from "../app/sendEmailAction";
import React, { useState, useEffect } from "react";
import { MdEmail, MdPhone, MdAccessTime } from "react-icons/md"; // Íconos de Material Design
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Íconos de FontAwesome
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";


export default function ContactComponent() {
  const [text1, setText1] = useState("");
  const fullText1 = "Lunes a Sábados de 8AM a 6PM.";

  useEffect(() => {
    let index = 0;
    const timer1 = setInterval(() => {
      setText1(fullText1.slice(0, index));
      index++;
      if (index > fullText1.length) {
        clearInterval(timer1);
        index = 0;
      }
    }, 120);

    return () => clearInterval(timer1);
  }, []);


  return (
    <div className="container mx-auto px-4 py-8">
      {/* Sección de encabezado */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Conéctate con MW Bienes Inmuebles
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Tu hogar ideal está a solo un mensaje de distancia.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 ">
        {/* Tarjeta de Información de Contacto */}
        <Card className="col-span-1 w-full bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900 dark:to-cyan-800 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-700 dark:text-blue-300">
              Información de Contacto
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center">
              <MdEmail className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
              <p className="text-gray-800 dark:text-gray-200">
                MWbienesinmuebles@gmail.com
              </p>
            </div>
            <div className="flex items-center">
              <MdPhone className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
              <Link href="tel:+5058443392" className="text-gray-800 dark:text-gray-200 hover:text-blue-600">
                +505 84433992
              </Link>
            </div>
            <div className="flex items-center">
              <MdPhone className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
              <Link href="tel:+5057255784" className="text-gray-800 dark:text-gray-200 hover:text-blue-600">
                +505 57255784
              </Link>
            </div>

            {/* WhatsApp */}
            <div>
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-4">
                Chatea con nosotros
              </h3>
              <Link
                href="https://wa.me/50557255784"
                className="flex items-center justify-center bg-green-500 text-white rounded-lg py-3 px-6 hover:bg-green-600 transition-colors"
                target="_blank"
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                Enviar mensaje por WhatsApp
              </Link>
            </div>

            {/* Horario de atención */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-4">
                Horario de Atención
              </h3>
              <div className="flex items-center">
                <MdAccessTime className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
                <p className="text-gray-800 dark:text-gray-200">{text1}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Formulario de Contacto */}
        <Card className="w-full col-span-1 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-900 dark:to-indigo-800 p-6 ">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-700 dark:text-purple-300">
              Envíanos un Mensaje
            </CardTitle>
            <CardDescription className="text-purple-600 dark:text-purple-400">
              Completa el formulario y nos pondremos en contacto contigo pronto.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={handleForm} method="POST" className="space-y-6">
              <Input
                type="text"
                name="title"
                placeholder="Asunto"
                className="bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 border-purple-300 dark:border-purple-700"
              />
              <Input
                type="text"
                name="to_name"
                placeholder="Nombre"
                className="bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 border-purple-300 dark:border-purple-700"
              />
              <Input
                type="text"
                name="to_number"
                placeholder="Número de teléfono"
                className="bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 border-purple-300 dark:border-purple-700"
              />
              <Input
                type="email"
                name="to_email"
                placeholder="Correo electrónico"
                className="bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 border-purple-300 dark:border-purple-700"
              />
              <Textarea
                name="content"
                placeholder="Mensaje"
                rows={5}
                className="bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 border-purple-300 dark:border-purple-700"
              />
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Redes Sociales */}
        <Card className="col-span-full bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900 dark:to-rose-800 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-pink-700 dark:text-pink-300 text-center">
              Síguenos en Redes Sociales
            </CardTitle>
            <CardDescription className="text-pink-600 dark:text-pink-400 text-center">
              Mantente al día con nuestras últimas propiedades y novedades.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center space-x-6">
              <Link
                href=""
                className="bg-blue-600 text-white rounded-lg p-4 hover:bg-blue-700 transition-colors"
              >
                <FaFacebook className="w-8 h-8" />
              </Link>
              <Link
                href=""
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg p-4 hover:opacity-80 transition-opacity"
              >
                <FaInstagram className="w-8 h-8" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

