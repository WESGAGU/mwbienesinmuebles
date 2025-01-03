/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337', // El puerto de tu servidor Strapi
        pathname: '/uploads/**', // Ruta donde se encuentran las imágenes
      },
    ],
  },
};

export default nextConfig;
