/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mwbackend.onrender.com',
        port: '', // El puerto de tu servidor Strapi
        pathname: '/uploads/**', // Ruta donde se encuentran las imágenes
      },
    ],
  },
};

export default nextConfig;
