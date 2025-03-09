import { getCategories } from "@/lib/get-categories";
import Link from "next/link";
import Image from 'next/image'; // Importa el componente Image de next/image

export const Categories = async () => {
    const categories = await getCategories();
    console.log(categories);

    if (!categories || categories.length === 0) return null;

    return (
        <div className="flex justify-center mb-5">
            <div className="w-96 md:w-full lg:w-10/12 px-0 lg:px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
                    Todas las Categorias
                </h2>

                <div className="grid grid-cols-1  md:grid-cols-6 gap-6 ">
                    {categories.map((category, index) => (
                        <div 
                            key={index} 
                            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 col-span-2 "
                        >
                            <div className="relative w-full h-80">
                                <Image 
                                    src={category.image} 
                                    alt={category.name} 
                                    layout="fill" // Usa layout fill para que la imagen ocupe todo el contenedor
                                    objectFit="cover" // Ajusta la imagen para que cubra el contenedor
                                    className="rounded-t-lg"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    {category.name}
                                </h2>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                    {category.description}
                                </p>
                                <Link 
                                    href={`categories/${category.slug}`} 
                                    className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                                >
                                    Ver Mas
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};