// app/category/[categoryId]/page.tsx
import { getProducts } from "@/lib/get-products";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Pagination } from "@/components/funcionalidades/pagination"; // Importa el componente de paginación
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { FaBed, FaBath, FaCar, FaRulerCombined, FaTag, FaArrowRight, FaFilter } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export default async function CategoryPage(
  { params, searchParams }: { params: { categoryId: string }, searchParams: { page?: string } }
) {
  const { categoryId } = params;
  const currentPage = parseInt(searchParams.page || "1", 10);
  const { pagination, products } = await getProducts({ categoryId, page: currentPage });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center font-bold mb-8 dark:text-white">
        Propiedades de la categoría {categoryId}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Botón para abrir el Drawer en móviles */}
        <div className="lg:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                className="w-full flex justify-start mb-4 border-none bg-none"
              >
                <FaFilter className="text-3xl size-20" />
                Filtrar
              </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[50vh] overflow-hidden bg-white dark:bg-gray-90">
              <div className="p-4 overflow-y-auto">
                {/* Contenido de los filtros */}
                <div className="space-y-4">
                  {/* Categorías Filter */}
                  <div className="border-b pb-4">
                    <h3 className="font-medium mb-2 flex items-center gap-2 dark:text-white">
                      Categorías
                    </h3>
                    <div className="space-y-2">
                      {["Casas", "Fincas", "Terrenos"].map((category) => (
                        <div
                          key={category}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox id={category} />
                          <Label
                            htmlFor={category}
                            className="dark:text-gray-300"
                          >
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* departament Filter */}
                  <div className="border-b pb-4">
                    <h3 className="font-medium mb-2 flex items-center gap-2 dark:text-white">
                      Departamentos
                    </h3>
                    <div className="space-y-2">
                      {["Nueva Segovia", "Esteli", "Managua", "León"].map(
                        (departament) => (
                          <div
                            key={departament}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox id={departament} />
                            <Label
                              htmlFor={departament}
                              className="dark:text-gray-300"
                            >
                              {departament}
                            </Label>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* municipality Filter */}
                  <div className="border-b pb-4">
                    <h3 className="font-medium mb-2 flex items-center gap-2 dark:text-white">
                      Municipios
                    </h3>
                    <div className="space-y-2">
                      {["Jalapa", "Ocotal", "Esteli", "Jicaro"].map(
                        (municipality) => (
                          <div
                            key={municipality}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox id={municipality} />
                            <Label
                              htmlFor={municipality}
                              className="dark:text-gray-300"
                            >
                              {municipality}
                            </Label>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Precio Filter */}
                  <Collapsible className="border-b pb-4">
                    <CollapsibleTrigger className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <FaTag className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium dark:text-white">
                          Precio
                        </span>
                      </div>
                      <IoIosArrowDown className="w-4 h-4 text-muted-foreground transition-transform duration-200 transform group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4 space-y-4">
                      <Select defaultValue="CS">
                        <SelectTrigger className="bg-gray-100 dark:bg-gray-700 border-0 rounded-md">
                          <SelectValue placeholder="Moneda" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CS">C$</SelectItem>
                          <SelectItem value="USD">USD</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Input
                            type="number"
                            placeholder="min"
                            className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 dark:placeholder-gray-500"
                          />
                          <span className="text-muted-foreground dark:text-gray-400">
                            —
                          </span>
                          <Input
                            type="number"
                            placeholder="max"
                            className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 dark:placeholder-gray-500"
                          />
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full rounded-md"
                        >
                          Filtrar <FaArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Habitaciones Filter */}
                  <Collapsible className="border-b pb-4">
                    <CollapsibleTrigger className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <FaBed className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium dark:text-white">
                          Habitaciones
                        </span>
                      </div>
                      <IoIosArrowDown className="w-4 h-4 text-muted-foreground transition-transform duration-200 transform group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4 space-y-2">
                      <Input
                        type="number"
                        placeholder="Número de habitaciones"
                        className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 dark:placeholder-gray-500"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full rounded-md"
                      >
                        Filtrar <FaArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Tamaño Filter */}
                  <Collapsible className="border-b pb-4">
                    <CollapsibleTrigger className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <FaRulerCombined className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium dark:text-white">
                          Tamaño m²
                        </span>
                      </div>
                      <IoIosArrowDown className="w-4 h-4 text-muted-foreground transition-transform duration-200 transform group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4 space-y-2 flex">
                      <Input
                        type="number"
                        placeholder="Tamaño en metros cuadrados"
                        className="border-gray-300 dark:border-gray-600 rounded-xl placeholder:text-gray-500 dark:placeholder:text-gray-400"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="relative bottom-2 border-none"
                      >
                        <FaArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Baños Filter */}
                  <Collapsible className="border-b pb-4">
                    <CollapsibleTrigger className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <FaBath className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium dark:text-white">Baños</span>
                      </div>
                      <IoIosArrowDown className="w-4 h-4 text-muted-foreground transition-transform duration-200 transform group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4 space-y-2 flex">
                      <Input
                        type="number"
                        placeholder="Número de baños"
                        className="border-gray-300 dark:border-gray-600 rounded-xl placeholder:text-gray-500 dark:placeholder:text-gray-400"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="relative bottom-2 border-none"
                      >
                        <FaArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Parking Filter */}
                  <Collapsible className="border-b pb-4">
                    <CollapsibleTrigger className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <FaCar className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium dark:text-white">Parking</span>
                      </div>
                      <IoIosArrowDown className="w-4 h-4 text-muted-foreground transition-transform duration-200 transform group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4 space-y-2 flex">
                      <Input
                        type="number"
                        placeholder="Espacios de parking"
                        className="border-gray-300 dark:border-gray-600 rounded-xl placeholder:text-gray-500 dark:placeholder:text-gray-400"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="relative bottom-2 border-none"
                      >
                        <FaArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CollapsibleContent>
                  </Collapsible>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full rounded-xl"
                  >
                    Filtrar <FaArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Columna de Filtros (visible en pantallas grandes) */}
        <div className="hidden lg:block lg:col-span-1 shadow-xl">
          <div className="space-y-4 rounded-lg p-4 shadow-sm dark:shadow-black">
            {/* Categorías Filter */}
            <div className="border-b pb-4">
              <h3 className="font-medium mb-2 flex items-center gap-2 dark:text-white">
                Categorías
              </h3>
              <div className="space-y-2">
                {["Casas", "Fincas", "Terrenos"].map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox id={category} />
                    <Label htmlFor={category} className="dark:text-gray-300">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* departament Filter */}
            <div className="border-b pb-4">
              <h3 className="font-medium mb-2 flex items-center gap-2 dark:text-white">
                Departamentos
              </h3>
              <div className="space-y-2">
                {["Nueva Segovia", "Esteli", "Managua", "León"].map(
                  (departament) => (
                    <div
                      key={departament}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox id={departament} />
                      <Label
                        htmlFor={departament}
                        className="dark:text-gray-300"
                      >
                        {departament}
                      </Label>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* municipality Filter */}
            <div className="border-b pb-4">
              <h3 className="font-medium mb-2 flex items-center gap-2 dark:text-white">
                Municipios
              </h3>
              <div className="space-y-2">
                {["Jalapa", "Ocotal", "Esteli", "Jicaro"].map(
                  (municipality) => (
                    <div
                      key={municipality}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox id={municipality} />
                      <Label
                        htmlFor={municipality}
                        className="dark:text-gray-300"
                      >
                        {municipality}
                      </Label>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Precio Filter */}
            <Collapsible className="border-b pb-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <FaTag className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium dark:text-white">Precio</span>
                </div>
                <IoIosArrowDown className="w-4 h-4 text-muted-foreground transition-transform duration-200 transform group-data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 space-y-4">
                <Select defaultValue="CS">
                  <SelectTrigger className="bg-gray-100 dark:bg-gray-700 border-0 rounded-md">
                    <SelectValue placeholder="Moneda" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CS">C$</SelectItem>
                    <SelectItem value="USD">USD</SelectItem>
                  </SelectContent>
                </Select>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder="min"
                      className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 dark:placeholder-gray-500"
                    />
                    <span className="text-muted-foreground dark:text-gray-400">
                      —
                    </span>
                    <Input
                      type="number"
                      placeholder="max"
                      className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 dark:placeholder-gray-500"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full rounded-md"
                  >
                    Filtrar <FaArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Habitaciones Filter */}
            <Collapsible className="border-b pb-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <FaBed className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium dark:text-white">
                    Habitaciones
                  </span>
                </div>
                <IoIosArrowDown className="w-4 h-4 text-muted-foreground transition-transform duration-200 transform group-data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 space-y-2">
                <Input
                  type="number"
                  placeholder="Número de habitaciones"
                  className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 dark:placeholder-gray-500"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-md"
                >
                  Filtrar <FaArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CollapsibleContent>
            </Collapsible>

            {/* Tamaño Filter */}
            <Collapsible className="border-b pb-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <FaRulerCombined className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium dark:text-white">
                    Tamaño m²
                  </span>
                </div>
                <IoIosArrowDown className="w-4 h-4 text-muted-foreground transition-transform duration-200 transform group-data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 space-y-2 flex">
                <Input
                  type="number"
                  placeholder="Tamaño en metros cuadrados"
                  className="border-gray-300 dark:border-gray-600 rounded-xl placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="relative bottom-2 border-none"
                >
                  <FaArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CollapsibleContent>
            </Collapsible>

            {/* Baños Filter */}
            <Collapsible className="border-b pb-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <FaBath className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium dark:text-white">Baños</span>
                </div>
                <IoIosArrowDown className="w-4 h-4 text-muted-foreground transition-transform duration-200 transform group-data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 space-y-2 flex">
                <Input
                  type="number"
                  placeholder="Número de baños"
                  className="border-gray-300 dark:border-gray-600 rounded-xl placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="relative bottom-2 border-none"
                >
                  <FaArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CollapsibleContent>
            </Collapsible>

            {/* Parking Filter */}
            <Collapsible className="border-b pb-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <FaCar className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium dark:text-white">Parking</span>
                </div>
                <IoIosArrowDown className="w-4 h-4 text-muted-foreground transition-transform duration-200 transform group-data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 space-y-2 flex">
                <Input
                  type="number"
                  placeholder="Espacios de parking"
                  className="border-gray-300 dark:border-gray-600 rounded-xl placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="relative bottom-2 border-none"
                >
                  <FaArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CollapsibleContent>
            </Collapsible>
            <Button variant="outline" size="sm" className="w-full rounded-xl">
              Filtrar <FaArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
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
                  <div className="relative">
                    <img
                      className="w-full h-60 object-cover"
                      src={product.image}
                      alt={product.name}
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
                  {product.isActive && ( // Solo muestra el botón si isActive es true
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