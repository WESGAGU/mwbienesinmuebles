"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { FaBed, FaBath, FaCar, FaRulerCombined, FaTag, FaArrowRight } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const FilterDesktop = () => {
  const router = useRouter();
  const [category, setCategory] = useState<string[]>([]);
  const [departament, setDepartament] = useState<string[]>([]);
  const [municipality, setMunicipality] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState<number | null>(null);
  const [priceMax, setPriceMax] = useState<number | null>(null);
  const [bedrooms, setBedrooms] = useState<number | null>(null);
  const [bathrooms, setBathrooms] = useState<number | null>(null);
  const [parking, setParking] = useState<number | null>(null);
  const [size, setSize] = useState<number | null>(null);

  const handleFilter = () => {
    const queryParams = new URLSearchParams();

    // Añadir filtros a los parámetros de la URL solo si tienen un valor
    if (category.length > 0) queryParams.set("category", category.join(","));
    if (departament.length > 0) queryParams.set("departament", departament.join(","));
    if (municipality.length > 0) queryParams.set("municipality", municipality.join(","));
    if (priceMin !== null) queryParams.set("priceMin", priceMin.toString());
    if (priceMax !== null) queryParams.set("priceMax", priceMax.toString());
    if (bedrooms !== null) queryParams.set("bedrooms", bedrooms.toString());
    if (bathrooms !== null) queryParams.set("bathrooms", bathrooms.toString());
    if (parking !== null) queryParams.set("parking", parking.toString());
    if (size !== null) queryParams.set("size", size.toString());

    // Determinar la categoría para la redirección
    const categoryId = category.length > 0 ? category[0] : "casas"; // Usar la primera categoría seleccionada o un valor por defecto

    // Construir la URL final
    const url = `/categories/${categoryId}?${queryParams.toString()}`;

    // Redirigir a la página de categorías con los filtros aplicados
    router.push(url);
  };

  const handleClearFilters = () => {
    setCategory([]);
    setDepartament([]);
    setMunicipality([]);
    setPriceMin(null);
    setPriceMax(null);
    setBedrooms(null);
    setBathrooms(null);
    setParking(null);
    setSize(null);

    // Redirigir a la página de categorías sin filtros
    router.push(`/categories/casas`);
  };

  return (
    <div className="space-y-4 rounded-lg p-4 shadow-sm dark:shadow-black">
      {/* Categorías Filter */}
      <div className="border-b pb-4">
        <h3 className="font-medium mb-2 flex items-center gap-2 dark:text-white">
          Categorías
        </h3>
        <div className="space-y-2">
          {["casas", "fincas", "terrenos"].map((cat) => (
            <div key={cat} className="flex items-center space-x-2">
              <Checkbox
                id={cat}
                checked={category.includes(cat)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setCategory([...category, cat]);
                  } else {
                    setCategory(category.filter((c) => c !== cat));
                  }
                }}
              />
              <Label htmlFor={cat} className="dark:text-gray-300">
                {cat}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Departamento Filter */}
      <div className="border-b pb-4">
        <h3 className="font-medium mb-2 flex items-center gap-2 dark:text-white">
          Departamentos
        </h3>
        <div className="space-y-2">
          {["Nueva-Segovia", "Esteli", "Managua", "Leon"].map((dep) => (
            <div key={dep} className="flex items-center space-x-2">
              <Checkbox
                id={dep}
                checked={departament.includes(dep)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setDepartament([...departament, dep]);
                  } else {
                    setDepartament(departament.filter((d) => d !== dep));
                  }
                }}
              />
              <Label htmlFor={dep} className="dark:text-gray-300">
                {dep}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Municipio Filter */}
      <div className="border-b pb-4">
        <h3 className="font-medium mb-2 flex items-center gap-2 dark:text-white">
          Municipios
        </h3>
        <div className="space-y-2">
          {["Jalapa", "Ocotal", "Esteli"].map((mun) => (
            <div key={mun} className="flex items-center space-x-2">
              <Checkbox
                id={mun}
                checked={municipality.includes(mun)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setMunicipality([...municipality, mun]);
                  } else {
                    setMunicipality(municipality.filter((m) => m !== mun));
                  }
                }}
              />
              <Label htmlFor={mun} className="dark:text-gray-300">
                {mun}
              </Label>
            </div>
          ))}
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
          <div className="space-y-2 flex">
            <Input
              type="number"
              placeholder="min"
              className="border-gray-300 dark:border-gray-600 rounded-xl placeholder:text-gray-500 dark:placeholder:text-gray-400"
              value={priceMin || ""}
              onChange={(e) => setPriceMin(Number(e.target.value))}
            />
            <span className="text-muted-foreground dark:text-gray-400">
              —
            </span>
            <Input
              type="number"
              placeholder="max"
              className="border-gray-300 dark:border-gray-600 rounded-xl placeholder:text-gray-500 dark:placeholder:text-gray-400 bg-none"
              value={priceMax || ""}
              onChange={(e) => setPriceMax(Number(e.target.value))}
            />
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
        <CollapsibleContent className="pt-4 space-y-2 flex">
          <Input
            type="number"
            placeholder="Número de habitaciones"
            className="border-gray-300 dark:border-gray-600 rounded-xl placeholder:text-gray-500 dark:placeholder:text-gray-400"
            value={bedrooms || ""}
            onChange={(e) => setBedrooms(Number(e.target.value))}
          />
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
            value={size || ""}
            onChange={(e) => setSize(Number(e.target.value))}
          />
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
            value={bathrooms || ""}
            onChange={(e) => setBathrooms(Number(e.target.value))}
          />
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
            value={parking || ""}
            onChange={(e) => setParking(Number(e.target.value))}
          />
        </CollapsibleContent>
      </Collapsible>

      {/* Botón de Filtrar */}
      <Button
        variant="outline"
        size="sm"
        className="w-full rounded-xl"
        onClick={handleFilter}
      >
        Filtrar <FaArrowRight className="w-4 h-4 ml-2" />
      </Button>

      {/* Botón de Limpiar Filtros */}
      <Button
        variant="outline"
        size="sm"
        className="w-full rounded-xl mt-4"
        onClick={handleClearFilters}
      >
        Limpiar Filtros
      </Button>
    </div>
  );
};

export default FilterDesktop;