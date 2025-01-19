'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";

export default function QuickFilter() {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [departament, setDepartament] = useState("");
  const [municipality, setMunicipality] = useState("");

  const handleFilter = () => {
    if (!category) {
      Swal.fire({
        title: 'Necesario',
        text: 'Por favor seleccione la Categoria de la propiedad.',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      });
      return;
    }
    if (!departament) {
      Swal.fire({
        title: 'Necesario',
        text: 'No te olvides de seleccionar el Departamento 🥲.',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      });
      return;
    }
    if (!municipality) {
      Swal.fire({
        title: 'Necesario',
        text: 'Por favor selecciona el Municipio 😅 .',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    const queryParams = new URLSearchParams();
    if (departament) queryParams.set("departament", departament);
    if (municipality) queryParams.set("municipality", municipality);

    const query = queryParams.toString();
    router.push(`/categories/${category}${query ? `?${query}` : ""}`);
  };

  return (
    <div className=" h-full w-[93%]  lg:w-[85%] mx-auto  bg-slate-950 p-6 rounded-xl shadow-xl">
      {/* Gradientes radiales de fondo */}
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

      {/* Contenido del filtro */}
      <div className="">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Encuentra tu propiedad ideal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Select onValueChange={(value) => setCategory(value)}>
            <SelectTrigger className="w-full rounded-xl bg-white/10 border border-white/10 text-white">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border border-white/10 text-white">
              <SelectItem value="casas">Casas</SelectItem>
              <SelectItem value="terrenos">Terrenos</SelectItem>
              <SelectItem value="fincas">Fincas</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => setDepartament(value)}>
            <SelectTrigger className="w-full rounded-xl bg-white/10 border border-white/10 text-white">
              <SelectValue placeholder="Departamento" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border border-white/10 text-white">
              <SelectItem value="Nueva-Segovia">Nueva Segovia</SelectItem>
              <SelectItem value="Esteli">Estelí</SelectItem>
              <SelectItem value="Managua">Managua</SelectItem>
              <SelectItem value="León">León</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => setMunicipality(value)}>
            <SelectTrigger className="w-full rounded-xl bg-white/10 border border-white/10 text-white">
              <SelectValue placeholder="Municipio" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border border-white/10 text-white">
              <SelectItem value="Jalapa">Jalapa</SelectItem>
              <SelectItem value="Ocotal">Ocotal</SelectItem>
              <SelectItem value="Esteli">Estelí</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
          onClick={handleFilter}
        >
          <FaSearch className="mr-2" /> Buscar Propiedades
        </Button>
      </div>
    </div>
  );
}