"use client";
import { useFavoritesStore, Product } from "@/app/FavoritesContext"; 
import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";


interface FavoriteProductProps {
  product: Product; // Usa el tipo Product importado
}

export default function FavoriteProduct({ product }: FavoriteProductProps) {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const isFavorite = favorites.some((fav) => fav.slug === product.slug);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(product.slug);
    } else {
      addFavorite(product);
    }
  };

  return (
    <Button variant="outline" size="icon" onClick={handleFavoriteClick}>
      <FaHeart className={`h-4 w-4 ${isFavorite ? "text-red-500" : ""}`} />
    </Button>
  );
}