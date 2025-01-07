// stores/useFavoritesStore.ts
import { create } from 'zustand';

// Define y exporta el tipo para un producto favorito
export interface Product {
  slug: string;
  name: string;
  description: string;
  price: number;
  images: string[]; // Array de URLs de imágenes
  caracteristicasCasas: {
    Habitaciones: number;
    bathrooms: number;
    Parking: number;
    areaSize: number;
    Amueblada?: boolean;
    Patio_Trasero?: boolean;
  };
  departament?: string;
  Municipality?: string;
  address?: string;
  fecha_publicacion?: string;
  iframe_map?: string;
  videoUrl?: string;
  priceM2?: number;
}

// Define el tipo para el store de favoritos
interface FavoritesStore {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (slug: string) => void;
}

// Crea el store de Zustand
export const useFavoritesStore = create<FavoritesStore>((set) => ({
  favorites: [], // Estado inicial: lista vacía de favoritos

  // Función para agregar un producto a favoritos
  addFavorite: (product) =>
    set((state) => {
      // Evita duplicados usando "slug"
      if (!state.favorites.some((fav) => fav.slug === product.slug)) {
        return { favorites: [...state.favorites, product] };
      }
      return state;
    }),

  // Función para eliminar un producto de favoritos usando "slug"
  removeFavorite: (slug) =>
    set((state) => ({
      favorites: state.favorites.filter((product) => product.slug !== slug),
    })),
}));