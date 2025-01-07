"use client"; 
import { useFavoritesStore, Product } from "@/app/FavoritesContext"; // Importa el store y el tipo
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LovedProducts() {
  // Obtén la lista de favoritos del store de Zustand
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-2xl font-bold mb-8">Mis Propiedades Favoritas</h1>

      {/* Si no hay favoritos, muestra un mensaje */}
      {favorites.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 mb-4">No tienes propiedades favoritas aún.</p>
          <Link href="/">
            <Button>Explorar productos</Button>
          </Link>
        </div>
      ) : (
        // Si hay favoritos, muestra la lista
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((product: Product) => (
            <div
              key={product.slug} // Usa "slug" como clave única
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Mostrar la imagen del producto */}
              {product.images && product.images.length > 0 && (
                <div className="relative h-48 mb-4">
                  <Image
                    src={product.images[0]} // Muestra la primera imagen
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}

              {/* Nombre del producto */}
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>

              {/* Descripción del producto */}
              <p className="text-gray-500 mb-4">{product.description}</p>

              {/* Precio del producto */}
              <p className="text-lg font-bold mb-4">
                ${product.price.toLocaleString()}
              </p>

              {/* Características del producto */}
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  Habitaciones: {product.caracteristicasCasas.Habitaciones}
                </p>
                <p className="text-sm text-gray-600">
                  Baños: {product.caracteristicasCasas.bathrooms}
                </p>
                <p className="text-sm text-gray-600">
                  Estacionamientos: {product.caracteristicasCasas.Parking}
                </p>
                <p className="text-sm text-gray-600">
                  Área: {product.caracteristicasCasas.areaSize} m²
                </p>
              </div>

              {/* Botón para ver detalles */}
              <Link href={`/products/${product.slug}`}>
                <Button className="w-full">Ver detalles</Button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}