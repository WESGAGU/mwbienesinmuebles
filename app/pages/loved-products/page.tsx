"use client";
import { useFavoritesStore, Product, useSyncFavorites } from "@/app/FavoritesContext";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";
import { FaBed, FaBath, FaParking, FaRulerCombined, FaExpand } from "react-icons/fa"; // Iconos para las características y el botón

export default function LovedProducts() {
  const favorites = useFavoritesStore((state) => state.favorites);
  const initializeFavorites = useFavoritesStore((state) => state.initializeFavorites);

  // Inicializa los favoritos solo en el cliente
  useEffect(() => {
    initializeFavorites();
  }, [initializeFavorites]);

  // Sincroniza los favoritos entre pestañas
  useSyncFavorites();

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Mis Propiedades Favoritas
      </h1>

      {favorites.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            No tienes propiedades favoritas aún.
          </p>
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600">
              Explorar productos
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl">
          {favorites.map((product: Product) => (
            <div
              key={product.slug}
              className="border p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700 group relative overflow-hidden"
            >
              {product.images && product.images.length > 0 && (
                <div className="relative h-48 mb-4">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {product.name}
              </h2>
              <p className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
                ${product.price.toLocaleString()}
              </p>
              <div className="flex flex-wrap gap-4 mb-4 justify-center">
                {/* Habitaciones */}
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <FaBed className="w-7 h-7" />
                  <span>{product.caracteristicasCasas.Habitaciones}</span>
                </div>
                {/* Baños */}
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <FaBath className="w-5 h-5" />
                  <span>{product.caracteristicasCasas.bathrooms}</span>
                </div>
                {/* Estacionamientos */}
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <FaParking className="w-5 h-5" />
                  <span>{product.caracteristicasCasas.Parking}</span>
                </div>
                {/* Área */}
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <FaRulerCombined className="w-5 h-5" />
                  <span>{product.caracteristicasCasas.areaSize} m²</span>
                </div>
              </div>

              {/* Botón "Ver más detalles" con icono de expansión */}
              <Link href={`/products/${product.slug}`}>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center space-x-2"
                >
                  <FaExpand className="w-4 h-4" />
                  <span>Ver más detalles</span>
                </Button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}