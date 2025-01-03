import { getCategories } from "@/lib/get-categories";
import Link from "next/link";

export const Categories = async () => {
    const categories = await getCategories();
    console.log(categories);

    if (!categories || categories.length === 0) return null;

    return (
        <div className="flex justify-center mb-5">
            <div className="max-w-7xl w-full px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
                    All Categories
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
                    {categories.map((category, index) => (
                        <div 
                            key={index} 
                            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 lg:col-span-2"
                        >
                            <img 
                                src={category.image} 
                                alt={category.name} 
                                className="w-full h-80 object-cover rounded-t-lg"
                            />
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
