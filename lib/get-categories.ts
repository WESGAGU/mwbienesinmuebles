import { query } from "./strapi";

const { STRAPI_HOST } = process.env;

interface Cover {
  url: string;
}

interface Category {
  name: string;
  slug: string;
  description: string;
  cover: Cover;
}

interface CategoryResult {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export function getCategories(): Promise<CategoryResult[]> {
  return query("product-categories?fields[0]=name&fields[1]=slug&fields[2]=description&populate[cover][fields][0]=url")
    .then((res: { data: Category[] }) => {
      return res.data.map((category: Category) => {
        const { name, slug, description, cover } = category;
        const image = cover?.url ? `${STRAPI_HOST}${cover.url}` : '';
        return { name, slug, description, image };
      });
    });
}