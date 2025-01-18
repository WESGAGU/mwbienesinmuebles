import { getHomeInfo } from "@/lib/get-home-info";
import Image from "next/image";

export const Welcome = async () => {
  const { title, description, image } = await getHomeInfo();

  return (
    <div className="relative w-full h-[400px] overflow-hidden mb-10">
      
      <Image
        src={image}
        alt="Imagen de bienvenida"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={600}
        priority
        
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-4xl text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-white">
            {title}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-200">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

