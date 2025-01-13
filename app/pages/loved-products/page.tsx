'use client';

import { useFavoritesStore, Product } from "@/app/FavoritesContext"; 
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';  // Asegúrate de importar esto

const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');
  return !!token;
};

export default function LovedProducts() {
  const router = useRouter();
  const favorites = useFavoritesStore((state) => state.favorites);
  const fetchFavorites = useFavoritesStore((state) => state.fetchFavorites);

  useEffect(() => {
    if (!isAuthenticated()) {
      toast.error('Debes iniciar sesión para ver tus favoritos.');
      router.push('/register');
    } else {
      fetchFavorites();
    }
  }, [router, fetchFavorites]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-2xl font-bold mb-8">Mis Propiedades Favoritas</h1>

      {favorites.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 mb-4">No tienes propiedades favoritas aún.</p>
          <Link href="/">
            <Button>Explorar productos</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((product: Product) => (
            <div
              key={product.slug}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {product.images?.length > 0 && (
                <div className="relative h-48 mb-4">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}

              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-500 mb-4">{product.description}</p>
              <p className="text-lg font-bold mb-4">${product.price.toLocaleString()}</p>

              <div className="mb-4">
                <p className="text-sm text-gray-600">Habitaciones: {product.caracteristicasCasas.Habitaciones}</p>
                <p className="text-sm text-gray-600">Baños: {product.caracteristicasCasas.bathrooms}</p>
                <p className="text-sm text-gray-600">Estacionamientos: {product.caracteristicasCasas.Parking}</p>
                <p className="text-sm text-gray-600">Área: {product.caracteristicasCasas.areaSize} m²</p>
              </div>

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
