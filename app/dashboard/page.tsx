'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { useFavoritesStore } from '@/app/FavoritesContext';

export default function DashboardPage() {
  const router = useRouter();
  const { favorites, fetchFavorites } = useFavoritesStore();

  // Obtener las propiedades favoritas al cargar la página
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login'); // Redirigir al login si no está autenticado
    } else {
      fetchFavorites(); // Obtener las propiedades favoritas
    }
  }, [router, fetchFavorites]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {product.images && product.images.length > 0 && (
                  <div className="relative h-48 mb-4">
                    <img
                      src={product.images[0]} // Muestra la primera imagen
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                )}
                <p className="text-lg font-bold mb-4">
                  ${product.price.toLocaleString()}
                </p>
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
              </CardContent>
              <CardFooter>
                <Button className="w-full">Ver detalles</Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p>No tienes propiedades favoritas.</p>
        )}
      </div>
      <Button className="mt-6" onClick={() => router.push('/')}>
        Buscar más propiedades
      </Button>
    </div>
  );
}