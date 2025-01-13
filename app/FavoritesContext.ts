import { create } from 'zustand';

export interface Product {
  id: number;
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
  addFavorite: (product: Product) => Promise<void>;
  removeFavorite: (productId: number) => Promise<void>;
  fetchFavorites: () => Promise<void>;
}

const API_URL = process.env.NODE_ENV === 'production' 
  ? process.env.STRAPI_HOST 
  : process.env.API_URL;

const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');
  return !!token;
};

export const useFavoritesStore = create<FavoritesStore>((set) => ({
  favorites: [],

  fetchFavorites: async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Usuario no autenticado');
      }

      const response = await fetch(`${API_URL}/api/users/me?populate=products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = await response.json();
      set({ favorites: userData.products || [] });
    } catch (error) {
      console.error('Error al obtener favoritos:', error);
    }
  },

  addFavorite: async (product) => {
    if (!isAuthenticated()) {
      throw new Error('Usuario no autenticado');
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Usuario no autenticado');
      }

      await fetch(`${API_URL}/api/users/me`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          products: {
            connect: [product.id],
          },
        }),
      });

      set((state) => {
        if (!state.favorites.some((fav) => fav.id === product.id)) {
          return { favorites: [...state.favorites, product] };
        }
        return state;
      });
    } catch (error) {
      console.error('Error al agregar favorito:', error);
      throw error;
    }
  },

  removeFavorite: async (productId) => {
    if (!isAuthenticated()) {
      throw new Error('Usuario no autenticado');
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Usuario no autenticado');
      }

      await fetch(`${API_URL}/api/users/me`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          products: {
            disconnect: [productId],
          },
        }),
      });

      set((state) => ({
        favorites: state.favorites.filter((product) => product.id !== productId),
      }));
    } catch (error) {
      console.error('Error al eliminar favorito:', error);
      throw error;
    }
  },
}));
