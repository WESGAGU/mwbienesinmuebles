import React from 'react'
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-500 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
             <Image
                src="/MW.png"
                alt="Imagen de propiedad"
                width={80}
                height={80}
              />
            <h3 className="text-2xl font-bold">MW Bienes Inmuebles</h3>
            <p className="text-sm">Creando soluciones innovadoras para un futuro mejor.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-200 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-pink-200 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-pink-200 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4 mt-0 md:mt-24">
            <h3 className="text-xl font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-pink-200 transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-pink-200 transition-colors">Servicios</a></li>
              <li><a href="/pages/about" className="hover:text-pink-200 transition-colors">Sobre Nosotros</a></li>
              <li><a href="/pages/contact" className="hover:text-pink-200 transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div className="space-y-4  mt-0 md:mt-24">
            <h3 className="text-xl font-semibold">Contacto</h3>
            <p className="flex items-center">
              <Mail className="mr-2" size={18} />
              mwbienesinmuebles@gmail.com
            </p>
            <p>Sector #8 Jalapa, Nueva Segovia</p>
          </div>
          
          <div className="space-y-4  mt-0 md:mt-24">
            <h3 className="text-xl font-semibold">Suscríbete</h3>
            <p className="text-sm">Recibe nuestras últimas noticias y ofertas.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="bg-white/20 border-white/30 text-white placeholder-white/60"
              />
              <Button type="submit" variant="secondary" className="whitespace-nowrap">
                Suscribirse
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; 2024 MW Bienes Inmuebles. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

