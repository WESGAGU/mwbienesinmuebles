import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, DollarSign, Users, Building, Briefcase, BarChartIcon as ChartBar, Facebook, Instagram, BookOpen, Target, Rocket, ArrowRight, LandPlot, Factory, MessageCircleMore, CircleHelp } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Definicion de el SEO para la página "about"
export const metadata = {
  title: "Sobre MW Bienes Inmuebles",
  description: "Somos MW Bienes Inmuebles, una agencia joven y comprometida con ayudarte a encontrar el hogar o propiedad ideal en Nicaragua. Conoce nuestra historia, misión y visión.",
  canonical: "https://mwbienesinmuebles.com/pages/about",
  openGraph: {
    url: "https://mwbienesinmuebles.com/pages/about",
    title: "Sobre MW Bienes Inmuebles",
    description: "Somos M&W Bienes Inmuebles, una agencia joven y comprometida con ayudarte a encontrar el hogar o propiedad ideal en Nicaragua. Conoce nuestra historia, misión y visión.",
    images: [
      {
        url: "https://mwbienesinmuebles.com/MW.png", 
        alt: "Imagen de MW Bienes Inmuebles",
      },
    ],
  },
};

const AboutComponent = () => {
  return (
    <>   
      {/* JSON-LD para Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'MW Bienes Inmuebles',
            url: 'https://mwbienesinmuebles.com',
            logo: 'https://mwbienesinmuebles.com/MW.png', 
            description: 'Somos una agencia joven y comprometida con ayudarte a encontrar el hogar o propiedad ideal en Nicaragua.',
            foundingDate: '2024-12-20', // Fecha de fundación
            founders: [
              {
                '@type': 'Person',
                name: 'Mike Bellorín',
                jobTitle: 'Fundador',
                sameAs: [
                  'https://www.instagram.com/mikebl_03/', // Enlace de Instagram de Mike
                  'https://www.facebook.com/mike.b.lanuza', // Enlace de Facebook de Mike
                ],
              },
              {
                '@type': 'Person',
                name: 'Wesling García',
                jobTitle: 'Fundador',
                sameAs: [
                  'https://www.instagram.com/garciawes12', // Enlace de Instagram de Wesling
                  'https://www.facebook.com/wes.garcia.336', // Enlace de Facebook de Wesling
                ],
              },
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+505-8443-3992', // Número de teléfono de MW 
              contactType: 'Atención al cliente',
              email: 'mwbienesinmuebles@gmail.com', // Correo electrónico
              areaServed: 'Nicaragua',
            },
            sameAs: [
              'https://www.facebook.com/profile.php?id=61567937872394', // enlace de Facebook
              '#', //  enlace de Instagram
            ],
          }),
        }}
      />

      {/* Contenido de la página */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text dark:from-white dark:to-blue-200">
          Sobre M&W Bienes Inmuebles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Primera fila: Historia, Misión, Visión, Mike */}
          <Card className="col-span-1 bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900 dark:to-teal-800 border-0 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-emerald-700 dark:text-emerald-300">
                <BookOpen className="mr-2" />
                Nuestra Historia
              </CardTitle>
            </CardHeader>
            <CardContent className="text-emerald-800 dark:text-emerald-200">
              <p>
                MW Bienes Inmuebles nace de la pasión por los bienes raíces de Mike Bellorin y Wesling Garcia,
                dos ingenieros que desean revolucionar la manera de ofrecer un inmueble a las personas y mejorar su experiencia ofreciéndoles una plataforma donde puedan tener tanto un servicio de asesoramiento, como visualizar propiedades desde la comodidad de su hogar de manera sencilla y precisa.
              </p>
            </CardContent>
          </Card>

          {/* Card de Misión */}
          <Card className="col-span-1 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-800 border-0 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700 dark:text-blue-300">
                <Target className="mr-2" />
                Nuestra Misión
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-800 dark:text-blue-200">
              <p>
                Ser el puente perfecto entre vendedores y compradores, ofreciendo un excelente servicio de asesoramiento y promociones de propiedades para hacer realidad el sueño de tener un inmueble propio.
              </p>
            </CardContent>
          </Card>

          {/* Card de Visión */}
          <Card className="col-span-1 bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900 dark:to-violet-800 border-0 hover:shadow-lg hover:scale-105 transition-transform duration-300 md:h-[200px] lg:h-auto">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-700 dark:text-purple-300">
                <Rocket className="mr-2" />
                Nuestra Visión
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-800 dark:text-purple-200">
              <p>
                Transformar la industria inmobiliaria mediante la innovación tecnológica y un servicio
                personalizado, siendo líderes en Nicaragua.
              </p>
            </CardContent>
          </Card>

          {/* Card de Fundador Mike */}
          <Card className="col-span-1 row-span-1 bg-gradient-to-br from-cyan-50 to-sky-100 dark:from-cyan-900 dark:to-sky-800 border-0 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-center text-cyan-700 dark:text-cyan-300">Fundador</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src="/perfilmike.webp" alt="Mike Bellorín" />
                <AvatarFallback>ML</AvatarFallback>
              </Avatar>
              <p className="text-center font-bold text-cyan-700 dark:text-cyan-300">Mike Bellorín</p>
              <p className="text-center mb-4 text-cyan-800 dark:text-cyan-200">
                Ingeniero Civil apasionado por el desarrollo inmobiliario. Aporta el asesoramiento adecuado para elegir la mejor opción en tu interés inmobiliario.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/mike.b.lanuza" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" target='_blank'>
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/mikebl_03?fbclid=IwY2xjawHpHvRleHRuA2FlbQIxMAABHeaBg7qUdcjYQpHuBoOBX5Fp3XdpfI-cpdavB990BQL62LPU7R3ED7W9FA_aem_cMaP-vo92nznFQ88VIO-vw" className="text-pink-600 hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-300" target='_blank'>
                  <Instagram size={20} />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Segunda fila: Servicios y Wesling */}

          {/* Card de Venta de Propiedades */}
          <Card className="col-span-1 md:col-span-1 md:row-span-3 lg:col-span-1 lg:row-span-1 bg-gradient-to-br from-rose-50 to-pink-100 dark:from-rose-900 dark:to-pink-800 border-0 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-rose-700 dark:text-rose-300">
                <Home className="mr-2" size={18} />
                Venta de Propiedades
              </CardTitle>
            </CardHeader>
            <CardContent className="text-rose-800 dark:text-rose-200">
              <p>Ofrecemos una amplia gama de propiedades para satisfacer las necesidades de cada cliente.</p>
              <div className="flex space-x-4 mt-4">
                <a href="/categories/casas" className="flex items-center text-rose-700 dark:text-rose-300 hover:underline">
                  <Home className="mr-2" />
                  Casas
                </a>
                <a href="/categories/terrenos" className="flex items-center text-rose-700 dark:text-rose-300 hover:underline">
                  <LandPlot className="mr-2" />
                  Terrenos
                </a>
                <a href="/categories/fincas" className="flex items-center text-rose-700 dark:text-rose-300 hover:underline">
                  <Factory className="mr-2" />
                  Fincas
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Card de Préstamos Inmobiliarios */}
          <Card className="col-span-1 md:col-span-1 md:row-span-3 lg:col-span-1 lg:row-span-1 bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-900 dark:to-yellow-800 border-0 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-amber-700 dark:text-amber-300">
                <DollarSign className="mr-2" size={18} />
                Préstamos Personales
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-800 dark:text-amber-200">
              <p>Te ayudamos financieramente, con preceso de pretamo rapidos.</p>
              <a href="/pages/service-prestamos" className="flex items-center text-amber-700 dark:text-amber-300 hover:underline mt-4">
                Ver más <ArrowRight className="ml-2" />
              </a>
            </CardContent>
          </Card>

          {/* Card de Fundador Wesling García */}
          <Card className="col-span-1 row-span-2 lg:col-start-4 lg:row-2 bg-gradient-to-br from-teal-50 to-emerald-100 dark:from-teal-900 dark:to-emerald-800 border-0 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-center text-teal-700 dark:text-teal-300">Fundador</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src="/perfilwes.webp" alt="Wesling García" />
                <AvatarFallback>WG</AvatarFallback>
              </Avatar>
              <p className="text-center font-bold text-teal-700 dark:text-teal-300">Wesling García</p>
              <p className="text-center mb-4 text-teal-800 dark:text-teal-200">
                Ingeniero de Sistemas con visión innovadora. Integra tecnología en nuestros procesos.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/wes.garcia.336/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" target='_blank'>
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/garciawes12?fbclid=IwZXh0bgNhZW0CMTAAAR3ho63he15DcYV_lTGYjyn5Jx66TPnPdkKHJJl5HfTnpTkShHfoQuHDz-o_aem_8zw2G_Hiz5Yqtm3m47WbQQ" className="text-pink-600 hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-300" target='_blank'>
                  <Instagram size={20} />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Card de Asesoramiento Personalizado */}
          <Card className="col-span-1 md:col-span-1 md:row-span-4 lg:col-span-1 lg:row-span-1 lg:col-start-3 lg:row-start-2 bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-900 dark:to-purple-800 border-0 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-violet-700 dark:text-violet-300">
                <Users className="mr-2" size={18} />
                Asesoramiento Personalizado
              </CardTitle>
            </CardHeader>
            <CardContent className="text-violet-800 dark:text-violet-200">
              <p>Te guiamos en cada paso del proceso de compra o venta de tu propiedad.</p>
              <a href="/pages/service-asesoramientos" className="flex items-center text-violet-700 dark:text-violet-300 hover:underline mt-4">
                Ver más <ArrowRight className="ml-2" />
              </a>
            </CardContent>
          </Card>

          {/* Card de Contacto Directo */}
          <Card className="col-span-1 md:col-span-1 md:row-span-5 lg:col-span-1 lg:row-span-1 bg-gradient-to-br from-sky-50 to-blue-100 dark:from-sky-900 dark:to-blue-800 border-0 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-sky-700 dark:text-sky-300">
              <FaWhatsapp className="mr-2" size={18}  />
                Contacto Directo
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sky-800 dark:text-sky-200">
              <p>Estamos siempre disponibles para atender tus consultas y brindarte la mejor atención.</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://wa.me/50584433992" className="bg-green-500 text-white px-4 py-2 rounded-xl flex items-center" target='_blank'>
                  <MessageCircleMore className="mr-2" />
                  Wes
                </a>
                <a href="https://wa.me/50557255784" className="bg-green-500 text-white px-4 py-2 rounded-xl flex items-center" target='_blank'>
                  <MessageCircleMore className="mr-2" />
                  Mike
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Card de Ubicación */}
          <Card className="col-span-1 md:col-span-1 md:row-span-5 lg:col-span-2 lg:row-span-1 lg:col-start-2 bg-gradient-to-br from-sky-50 to-blue-100 dark:from-sky-900 dark:to-blue-800 border-0 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-sky-700 dark:text-sky-300">
                <CircleHelp className="mr-2" size={18} />
                ¿De dónde somos?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sky-800 dark:text-sky-200">
              <p>Estamos ubicados en Jalapa, en el departamento de Nueva Segovia en Nicaragua. Actualmente no contamos con una sede física.</p>
            </CardContent>
          </Card>

          {/* Cuarta fila: Impacto */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-4 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 border-0 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text dark:from-indigo-200 dark:to-purple-200">
                Nuestro Impacto
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <Building size={32} className="mb-2 text-indigo-600 dark:text-indigo-400" />
                <p className="text-xl font-bold text-indigo-700 dark:text-indigo-300">5+</p>
                <p className="text-sm text-indigo-600 dark:text-indigo-400">Propiedades Vendidas</p>
              </div>
              <div className="flex flex-col items-center">
                <Users size={32} className="mb-2 text-purple-600 dark:text-purple-400" />
                <p className="text-xl font-bold text-purple-700 dark:text-purple-300">20+</p>
                <p className="text-sm text-purple-600 dark:text-purple-400">Clientes Satisfechos</p>
              </div>
              <div className="flex flex-col items-center">
                <Briefcase size={32} className="mb-2 text-violet-600 dark:text-violet-400" />
                <p className="text-xl font-bold text-violet-700 dark:text-violet-300">5+</p>
                <p className="text-sm text-violet-600 dark:text-violet-400 text-nowrap">En Préstamos Gestionados</p>
              </div>
              <div className="flex flex-col items-center">
                <ChartBar size={32} className="mb-2 text-pink-600 dark:text-pink-400" />
                <p className="text-xl font-bold text-pink-700 dark:text-pink-300">98%</p>
                <p className="text-sm text-pink-600 dark:text-pink-400">Tasa de Éxito</p>
              </div>
            </CardContent>
          </Card>

          {/* Quinta fila: Valores */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-4 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900 dark:via-teal-900 dark:to-cyan-900 border-0 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent bg-clip-text dark:from-indigo-200 dark:to-purple-200">
                Nuestros Valores
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-800 dark:to-teal-800 text-emerald-700 dark:text-emerald-200 text-sm py-1 px-3 rounded-l-xl">
                Integridad
              </Badge>
              <Badge variant="secondary" className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-800 dark:to-cyan-800 text-teal-700 dark:text-teal-200 text-sm py-1 px-3">
                Innovación
              </Badge>
              <Badge variant="secondary" className="bg-gradient-to-r from-cyan-100 to-sky-100 dark:from-cyan-800 dark:to-sky-800 text-cyan-700 dark:text-cyan-200 text-sm py-1 px-3">
                Excelencia
              </Badge>
              <Badge variant="secondary" className="bg-gradient-to-r from-sky-100 to-blue-100 dark:from-sky-800 dark:to-blue-800 text-sky-700 dark:text-sky-200 text-sm py-1 px-3">
                Compromiso
              </Badge>
              <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-800 dark:to-indigo-800 text-blue-700 dark:text-blue-200 text-sm py-1 px-3 rounded-r-xl">
                Transparencia
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;