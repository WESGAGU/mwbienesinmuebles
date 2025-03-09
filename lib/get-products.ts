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

type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

// Obtener productos con filtros y paginación
export async function getProducts({
  categoryId,
  departament,
  municipality,
  page = 1,
}: {
  categoryId?: string;
  departament?: string;
  municipality?: string;
  page?: number;
}) {
  try {
    const filters = [];

    if (categoryId) filters.push(`filters[product_category][slug][$eq]=${categoryId}`);
    if (departament) filters.push(`filters[departament][$eq]=${departament}`);
    if (municipality) filters.push(`filters[Municipality][$eq]=${municipality}`);

    const queryString = `products?fields[0]=name&fields[1]=slug&fields[2]=isActive&fields[3]=price&fields[4]=description&fields[5]=departament&fields[6]=Municipality&fields[7]=address&fields[8]=fecha_publicacion&fields[9]=iframe_map&populate[caracteristicasCasas]=*&populate[images][fields][0]=url&${filters.join(
      "&"
    )}&pagination[page]=${page}&pagination[pageSize]=10`;

    const res: { data: Product[]; meta: { pagination: Pagination } } = await query(queryString);

    const products = res.data.map((product) => {
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

      // Manejo seguro de imágenes
      const imageUrl = images?.length > 0 && images[0]?.url
        ? images[0].url.startsWith("http")
          ? images[0].url
          : `${STRAPI_HOST}${images[0].url}`
        : "";

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
        image: imageUrl,
        caracteristicasCasas,
      };
    });

    return { products, pagination: res.meta.pagination };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [], pagination: { page: 1, pageSize: 10, pageCount: 0, total: 0 } };
  }
}

// Obtener un solo producto por ID
export async function getProduct({ productId }: { productId: string }) {
  try {
    const res: { data: Product[] } = await query(
      `products?filters[slug][$eq]=${productId}&populate[caracteristicasCasas]=*&populate[images][fields][0]=url`
    );

    if (res.data.length === 0) return null;

    const product: Product = res.data[0];
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
      priceM2,
      images,
      caracteristicasCasas,
    } = product;

    // Manejo seguro de imágenes
    const imageUrls = images?.map((img) =>
      img.url.startsWith("http") ? img.url : `${STRAPI_HOST}${img.url}`
    ) || [];

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
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}:`, error);
    return null;
  }
}