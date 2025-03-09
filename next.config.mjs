/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'mwbackend-production.up.railway.app',
              port: '',
              pathname: '/uploads/**',
          },
          {
              protocol: 'https',
              hostname: 'res.cloudinary.com', // Agregamos Cloudinary
              port: '',
              pathname: '/dctaoal6w/**', // Ajusta según tu cuenta de Cloudinary
          },
      ],
  },
};

export default nextConfig;
