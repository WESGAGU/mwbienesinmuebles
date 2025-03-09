import { query } from "./strapi";

const { STRAPI_HOST } = process.env;

export function getHomeInfo() {
  return query("home?populate=cover")
    .then(res => {
      const { title, description, cover } = res.data;
      
      // Verifica si la URL ya es absoluta
      const image = cover.url.startsWith("http") ? cover.url : `${STRAPI_HOST}${cover.url}`;

      return { title, description, image };
    });
}

