
import { getProduct } from '@/lib/get-products';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  FaBed,
  FaBath,
  FaCar,
  FaRulerCombined,
  FaDollarSign,
  FaPhoneAlt,
  FaWhatsapp,
  FaHeart,
} from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { handleForm } from '@/app/sendEmailAction';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ShareButton from '@/components/funcionalidades/share-button';
import ImageCarousel from '@/components/funcionalidades/image-carousel'; // Importa el nuevo componente
import FavoriteProduct from '@/components/funcionalidades/fovorite-product';

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;
  const product = await getProduct({ productId });

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const shareData = {
    title: product.name,
    text: `Mira esta propiedad: ${product.name}, ubicada en ${product.address}.`,
    url: `${process.env.STRAPI_HOST}/products/${productId}`,
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Images and Property Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Image Carousel */}
          <ImageCarousel
            images={product.images} // Pasa las imágenes del producto
            alt={product.name} // Pasa el nombre del producto como texto alternativo
          />

          {/* Property Title and Actions */}
          <div className="w-full flex justify-between">
            <h1 className="flex text-2xl md:text-3xl font-bold">
              {product.name}
            </h1>
            <div className="flex space-x-2">
            <FavoriteProduct product={product} />
              <ShareButton
                title={shareData.title}
                text={shareData.text}
                url={shareData.url}
              />
            </div>
          </div>

          {/* Property Characteristics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 transition-transform duration-300 hover:scale-105">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <FaBed className="h-6 w-6 text-primary mb-2" />
                <span className="text-sm font-medium">
                  {product.caracteristicasCasas.Habitaciones} Habitaciones
                </span>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 transition-transform duration-300 hover:scale-105">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <FaBath className="h-6 w-6 text-primary mb-2" />
                <span className="text-sm font-medium">
                  {product.caracteristicasCasas.bathrooms} Baños
                </span>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 transition-transform duration-300 hover:scale-105 col-span-2">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <FaCar className="h-6 w-6 text-primary mb-2" />
                <span className="text-sm font-medium">
                  {product.caracteristicasCasas.Parking} Estacionamientos
                </span>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900 dark:to-red-900 transition-transform duration-300 hover:scale-105">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <FaRulerCombined className="h-6 w-6 text-primary mb-2" />
                <span className="text-sm font-medium">
                  {product.caracteristicasCasas.areaSize} m²
                </span>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900 dark:to-blue-900 transition-transform duration-300 hover:scale-105">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <FaDollarSign className="h-6 w-6 text-primary mb-2" />
                <span className="text-sm font-medium">
                  {product.price.toLocaleString()}
                </span>
              </CardContent>
            </Card>
          </div>

          {/* Tabs for Details, Location, and Video Tour */}
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details" className="hover:underline">
                Detalles
              </TabsTrigger>
              <TabsTrigger value="location" className="hover:underline">
                Ubicación en el mapa
              </TabsTrigger>
              <TabsTrigger value="video" className="hover:underline">
                Video Tour
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Información Adicional
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-muted-foreground">
                        Departamento
                      </span>
                      <p className="text-gray-500">{product.departament}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">
                        Municipio
                      </span>
                      <p className="text-gray-500">{product.Municipality}</p>
                    </div>
                    <div className="text-gray-500">
                      <span className="text-sm text-muted-foreground">
                        Dirección
                      </span>
                      <p>{product.address}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">
                        Fecha de Publicación
                      </span>
                      <p className="text-gray-500">
                        {new Date(
                          product.fecha_publicacion
                        ).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">
                        Amueblada
                      </span>
                      <p className="text-gray-500">
                        {product.caracteristicasCasas.Amueblada ? "Si" : "No"}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">
                        Patio Trasero
                      </span>
                      <p className="text-gray-500">
                        {product.caracteristicasCasas.Patio_Trasero
                          ? "Si"
                          : "No"}
                      </p>
                    </div>
                    <div>
                      <span>Precio por m²</span>
                      <p className="text-gray-500">
                        ${product.priceM2?.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mt-6 mb-2">
                    Descripción
                  </h3>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="description">
                      <AccordionTrigger className="text-primary hover:no-underline">
                        Ver más
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          {product.description}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="location" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <iframe
                    src={product.iframe_map}
                    title="Direction google maps"
                    className="w-full h-96"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="video" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Video Tour de la Propiedad
                  </h3>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={product.videoUrl}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-96 rounded-xl"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column: Price and Contact Information */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardContent className="p-6 space-y-6">
              <span className="block text-3xl font-bold">
                ${product.price.toLocaleString()}
              </span>
              <div className="w-full flex justify-center relative top-5">
                <Avatar className="w-20 h-20  text-center">
                  <AvatarImage src="/MW.png" />
                  <AvatarFallback>MW</AvatarFallback>
                </Avatar>
              </div>

              <div className="text-center">
                <Badge className="ml-2">MW Bienes Inmuebles</Badge>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="#"
                  className="w-full rounded-xl flex justify-center items-center py-3 bg-blue-300 hover:bg-blue-500 text-white transition-colors duration-300"
                >
                  <FaPhoneAlt className="mr-2 h-4 w-4" /> Llamar
                </Link>
                <Link
                  href="#"
                  className="w-full rounded-xl flex justify-center items-center py-3 bg-green-400 hover:bg-green-600 text-white transition-colors duration-300"
                >
                  <FaWhatsapp className="mr-2 h-4 w-4" /> WhatsApp
                </Link>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Contacto directo</h4>
                <form action={handleForm} className="space-y-4">
                  <Input
                    type="text"
                    name="to_name"
                    placeholder="Nombre*"
                    required
                    className="rounded-xl text-gray-500"
                  />
                  <Input
                    type="email"
                    name="to_email"
                    placeholder="Correo*"
                    required
                    className="rounded-xl text-gray-500"
                  />
                  <Input
                    type="tel"
                    name="to_number"
                    placeholder="Teléfono*"
                    required
                    className="rounded-xl text-gray-500"
                  />
                  <Textarea
                    name="content"
                    placeholder="Mensaje"
                    defaultValue={`Me interesa esta propiedad: ${product.name}, contacta conmigo.`}
                    required
                    className="rounded-xl"
                  />
                  <input
                    type="hidden"
                    name="title"
                    value={`Consulta sobre ${product.name}`}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 rounded-xl"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}