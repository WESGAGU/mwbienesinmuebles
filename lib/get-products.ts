import { query } from "./strapi";

const { STRAPI_HOST } = process.env;

// Definir tipos
type Product = {
  name: string;
  slug: string;
  isActive: boolean;
  price: number;
  description: string;
  departament: string;
  Municipality: string;
  address: string;
  fecha_publicacion: string;
  iframe_map: string;
  images: { url: string }[];
  caracteristicasCasas: {
    Habitaciones: number;
    bathrooms: number;
    Parking: number;
    areaSize: number;
    Amueblada?: boolean;
    Patio_Trasero?: boolean;
  };
  videoUrl?: string;
  priceM2?: number;
};

type Image = {
  url: string;
};

// Definir tipo para la paginación
type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

// Función para obtener todos los productos de una categoría
export function getProducts({ categoryId }: { categoryId: string }) {
  return query(
    `products?fields[0]=name&fields[1]=slug&fields[2]=isActive&fields[3]=price&fields[4]=description&fields[5]=departament&fields[6]=Municipality&fields[7]=address&fields[8]=fecha_publicacion&fields[9]=iframe_map&populate[caracteristicasCasas]=*&populate[images][fields][0]=url&filters[product_category][slug][$contains]=${categoryId}`
  ).then((res: { data: Product[]; meta: { pagination: Pagination } }) => {
    const { data, meta } = res;
    const products = data.map((product: Product) => {
      const {
        name,
        slug,
        isActive,
        price,
        description,
        departament,
        Municipality,
        address,
        fecha_publicacion,
        iframe_map,
        images,
        caracteristicasCasas,
      } = product;

      const image = `${STRAPI_HOST}${images[0].url}`;
      return {
        name,
        slug,
        isActive,
        price,
        description,
        departament,
        Municipality,
        address,
        fecha_publicacion,
        iframe_map,
        image,
        caracteristicasCasas,
      };
    });

    return { products, pagination: meta.pagination };
  });
}

// Función para obtener un solo producto por su slug o ID
export function getProduct({ productId }: { productId: string }) {
  return query(
    `products?filters[slug][$eq]=${productId}&populate[caracteristicasCasas]=*&populate[images][fields][0]=url`
  ).then((res: { data: Product[] }) => {
    const { data } = res;
    if (data.length === 0) return null;

    const product: Product = data[0];
    const {
      name,
      slug,
      isActive,
      price,
      description,
      departament,
      Municipality,
      address,
      fecha_publicacion,
      iframe_map,
      videoUrl,
      images,
      priceM2,
      caracteristicasCasas,
    } = product;

    // Crear un array con todas las URLs de las imágenes
    const imageUrls = images.map((img: Image) => `${STRAPI_HOST}${img.url}`);

    return {
      name,
      slug,
      isActive,
      price,
      description,
      departament,
      Municipality,
      address,
      fecha_publicacion,
      iframe_map,
      videoUrl,
      priceM2,
      images: imageUrls,
      caracteristicasCasas,
    };
  });
}