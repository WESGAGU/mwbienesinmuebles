import { create } from 'zustand';
import { useEffect } from 'react';

export interface Product {
  slug: string;
  name: string;
  description: string;
  price: number;
  images: string[];
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

interface FavoritesStore {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (slug: string) => void;
  setFavorites: (favorites: Product[]) => void;
  initializeFavorites: () => void; // Añadir esta función
}

// Función para cargar los favoritos desde localStorage (solo en el cliente)
const loadFavorites = (): Product[] => {
  if (typeof window !== 'undefined') {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }
  return [];
};

// Función para guardar los favoritos en localStorage (solo en el cliente)
const saveFavorites = (favorites: Product[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
};

export const useFavoritesStore = create<FavoritesStore>((set) => ({
  favorites: [], // Estado inicial vacío (se llenará en el cliente)

  // Función para inicializar los favoritos desde localStorage
  initializeFavorites: () => {
    set({ favorites: loadFavorites() });
  },

  addFavorite: (product) =>
    set((state) => {
      if (!state.favorites.some((fav) => fav.slug === product.slug)) {
        const newFavorites = [...state.favorites, product];
        saveFavorites(newFavorites);
        return { favorites: newFavorites };
      }
      return state;
    }),

  removeFavorite: (slug) =>
    set((state) => {
      const newFavorites = state.favorites.filter((product) => product.slug !== slug);
      saveFavorites(newFavorites);
      return { favorites: newFavorites };
    }),

  setFavorites: (favorites) => set({ favorites }),
}));

// Hook para sincronizar favoritos entre pestañas
export const useSyncFavorites = () => {
  const setFavorites = useFavoritesStore((state) => state.setFavorites);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'favorites') {
        setFavorites(event.newValue ? JSON.parse(event.newValue) : []);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [setFavorites]);
};