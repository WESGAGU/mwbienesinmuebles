import { query } from "./strapi";

const { STRAPI_HOST } = process.env;

interface Cover {
  url: string;
}

interface Category {
  name: string;
  slug: string;
  description: string;
  cover?: Cover;
}

interface CategoryResult {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export async function getCategories(): Promise<CategoryResult[]> {
  try {
    const res: { data: Category[] } = await query(
      "product-categories?fields[0]=name&fields[1]=slug&fields[2]=description&populate[cover][fields][0]=url"
    );

    return res.data.map((category) => {
      const { name, slug, description, cover } = category;

      // Verifica si la URL ya es absoluta, si no, la concatena con STRAPI_HOST
      const image = cover?.url
        ? cover.url.startsWith("http")
          ? cover.url
          : `${STRAPI_HOST}${cover.url}`
        : "";

      return { name, slug, description, image };
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
