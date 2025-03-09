import { getProducts } from "@/lib/get-products";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FaBed, FaBath, FaCar, FaRulerCombined } from 'react-icons/fa';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default async function RecentProducts() {
  const { products } = await getProducts({ page: 1 });

  return (
    <div className="container mx-auto py-10 w-full md:w-full lg:w-10/12">
      <h2 className="text-3xl text-center font-bold mb-8 dark:text-white">
        Productos Recientemente Agregados
      </h2>
      <Carousel className="relative">
        <CarouselContent className="flex gap-1 md:gap-4 lg:gap-1 px-1 md:px-2 lg:px-5">
          {products.map((product) => (
            <CarouselItem key={product.slug} className="sm:basis-full md:basis-1/2 lg:basis-1/2 px-2">
              <Card className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                <CardHeader className="p-0">
                  <div className="relative w-full h-60">
                    <Image
                      className="object-cover"
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                    />
                    {!product.isActive ? (
                      <div className="absolute top-5 left-2 bg-red-600 bg-opacity-95 text-white px-4 py-2">
                        Vendida
                      </div>
                    ) : (
                      <div className="absolute top-5 left-2 bg-green-600 bg-opacity-95 text-white px-4 py-2">
                        Disponible
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <Badge className="mb-3 rounded-xl bg-black text-white hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-900">
                    MW Bienes Inmuebles
                  </Badge>
                  <h2 className="font-bold text-xl mb-2 line-clamp-1 dark:text-white">
                    {product.name}
                  </h2>
                  <span className="text-2xl font-bold dark:text-white">
                    ${product.price.toLocaleString()}
                  </span>
                  <p className="text-muted-foreground dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="flex justify-center flex-wrap gap-6 mb-2">
                    <div className="flex items-center gap-2">
                      <FaBed className="w-7 h-7 text-muted-foreground dark:text-gray-400" />
                      <span className="text-lg dark:text-gray-300">
                        {product.caracteristicasCasas.Habitaciones}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaBath className="w-7 h-7 text-muted-foreground dark:text-gray-400" />
                      <span className="text-lg dark:text-gray-300">
                        {product.caracteristicasCasas.bathrooms}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCar className="w-7 h-7 text-muted-foreground dark:text-gray-400" />
                      <span className="text-lg dark:text-gray-300">
                        {product.caracteristicasCasas.Parking}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRulerCombined className="w-7 h-7 text-muted-foreground dark:text-gray-400" />
                      <span className="text-lg dark:text-gray-300">
                        {product.caracteristicasCasas.areaSize} <span className="text-gray-500 font-mono">m²</span>
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  {product.isActive && (
                    <Link
                      href={`/products/${product.slug}`}
                      className="w-full text-center px-4 py-2 bg-black dark:bg-gray-600 text-white rounded-xl dark:hover:bg-blue-600 hover:bg-blue-600 transition-colors duration-300"
                    >
                      Ver Más
                    </Link>
                  )}
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="relative top-8 mx-32 md:top-4 md:mx-40 md:mt-4">
          <CarouselPrevious className="mx-3 md:mx-2" />
          <CarouselNext className="mx-4 md:mx-2" />
        </div>
      </Carousel>
    </div>
  );
}
