'use client';

import { useFavoritesStore, Product } from "@/app/FavoritesContext"; 
import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface FavoriteProductProps {
  product: Product;
}

const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');
  return !!token;
};

export default function FavoriteProduct({ product }: FavoriteProductProps) {
  const router = useRouter();
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const isFavorite = favorites.some((fav) => fav.id === product.id);

  const handleFavoriteClick = async () => {
    if (!isAuthenticated()) {
      toast.error('Debes registrarte para guardar propiedades en favoritos.');
      router.push('/register');  // Redirigir al registro si no está autenticado
      return;
    }

    try {
      if (isFavorite) {
        await removeFavorite(product.id);
        toast.success('Propiedad eliminada de favoritos.');
      } else {
        await addFavorite(product);
        toast.success('Propiedad agregada a favoritos.');
      }
    } catch (error) {
      console.error('Error al manejar favoritos:', error);
      toast.error('Ocurrió un error. Inténtalo de nuevo.');
    }
  };

  return (
    <Button variant="outline" size="icon" onClick={handleFavoriteClick}>
      <FaHeart className={`h-4 w-4 ${isFavorite ? "text-red-500" : ""}`} />
    </Button>
  );
}
