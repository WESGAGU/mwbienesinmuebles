import { getProducts } from "@/lib/get-products";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Pagination } from "@/components/funcionalidades/pagination";
import { FaBed, FaBath, FaCar, FaRulerCombined } from 'react-icons/fa';
import FilterMobile from "@/components/funcionalidades/filter-mobile";
import FilterDesktop from "@/components/funcionalidades/filter-desktop";
import Image from 'next/image'; // Importa el componente Image de next/image

export default async function CategoryPage(
  { params, searchParams }: { 
    params: { categoryId: string }, 
    searchParams: { 
      page?: string; 
      departament?: string; 
      municipality?: string; 
    } 
  }
) {
  const { categoryId } = params;
  const currentPage = parseInt(searchParams.page || "1", 10);
  const departament = searchParams.departament;
  const municipality = searchParams.municipality;

  // Obtener productos con los filtros aplicados
  const { pagination, products } = await getProducts({
    categoryId,
    departament,
    municipality,
    page: currentPage,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-center font-bold mb-8 dark:text-white">
        Propiedades de la categoría {categoryId}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Botón para abrir el Drawer en móviles */}
        <div className="lg:hidden">
          <FilterMobile />
        </div>

        {/* Columna de Filtros (visible en pantallas grandes) */}
        <div className="hidden lg:block lg:col-span-1 shadow-xl">
          <FilterDesktop />
        </div>

        {/* Columna de Productos */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card
                key={product.slug}
                className="overflow-hidden dark:bg-gray-800 dark:border-gray-700"
              >
                <CardHeader className="p-0">
                  <div className="relative w-full h-60">
                    <Image
                      className="object-cover"
                      src={product.image}
                      alt={product.name}
                      layout="fill" // Usa layout fill para que la imagen ocupe todo el contenedor
                      objectFit="cover" // Ajusta la imagen para que cubra el contenedor
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
                        {product.caracteristicasCasas.areaSize}{" "}
                        <span className="text-gray-500 font-mono">m²</span>
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
                      Ver Mas
                    </Link>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Paginación */}
          <Pagination
            currentPage={currentPage}
            totalPages={pagination.pageCount}
            categoryId={categoryId}
          />
        </div>
      </div>
    </div>
  );
}