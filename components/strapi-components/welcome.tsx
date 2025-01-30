import { getHomeInfo } from "@/lib/get-home-info";
import Image from "next/image";

export const Welcome = async () => {
  const { title, description, image } = await getHomeInfo();

  return (
    <div className="relative mx-auto rounded-2xl w-full md:w-full lg:w-10/12 h-[400px] md:[600px]  mb-10">
      {/* Imagen de fondo */}
      <Image
        src={image}
        alt="Imagen de bienvenida"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80"
        width={1920}
        height={1080}
        priority
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl" />

      {/* Contenido de texto */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-4xl text-center">
          {/* Título */}
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-white">
            {title}
          </h1>

          {/* Descripción */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
