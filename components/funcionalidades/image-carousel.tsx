'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Maximize2, Minimize2, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[]; // Array of image URLs
  alt: string; // Alternative text for images
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Default to the first image
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePrevious = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      {/* Main Image */}
      <div className="relative aspect-[16/9] lg:aspect-[21/9] mb-4 rounded-xl overflow-hidden">
        <Image
          src={images[selectedImageIndex]}
          alt={`${alt} - Image ${selectedImageIndex + 1}`}
          fill
          className="object-cover"
        />

        {/* Navigation buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70"
          onClick={handlePrevious}
        >
          <ChevronLeft className="h-8 w-8 text-white" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70"
          onClick={handleNext}
        >
          <ChevronRight className="h-8 w-8 text-white" />
        </Button>

        {/* Button to enlarge the image */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70"
            >
              <Maximize2 className="h-4 w-4 text-white" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[100vw] max-h-[100vh] w-screen h-screen p-0 border-0">
            {/* Enlarged carousel */}
            <div className="relative w-full h-full flex flex-col bg-black">
              <div className="flex-grow flex items-center justify-center">
                <Image
                  src={images[selectedImageIndex]}
                  alt={`${alt} - Enlarged image ${selectedImageIndex + 1}`}
                  fill
                  className="object-contain"
                />

                {/* Navigation buttons for enlarged view */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-8 w-8 text-white" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-8 w-8 text-white" />
                </Button>
              </div>

              {/* Image Thumbnails */}
              <div className="absolute bottom-20 lg:bottom-5 w-full flex justify-center gap-2 py-2">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative w-20 h-20 cursor-pointer rounded-xl overflow-hidden ${
                      index === selectedImageIndex ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <Image
                      src={image}
                      alt={`${alt} - Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Close button */}
              <DialogClose className="absolute right-5 lg:right-10 bottom-48 lg:bottom-5 p-3 text-white bg-gray-800 bg-opacity-40 hover:bg-opacity-50 rounded-full">
                <Minimize2 />
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Image Thumbnails */}
      <div className="flex justify-center gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative w-20 h-20 cursor-pointer rounded-xl overflow-hidden ${
              index === selectedImageIndex ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={image}
              alt={`${alt} - Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
