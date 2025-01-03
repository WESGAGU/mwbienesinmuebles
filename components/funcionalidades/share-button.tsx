"use client";

import { FaShare } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function ShareButton({ title, text, url }: { title: string; text: string; url: string }) {
  const handleShare = async () => {
    const shareData = { title, text, url };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Contenido compartido con éxito");
      } catch (error) {
        console.error("Error al compartir:", error);
      }
    } else {
      // Alternativa para escritorio
      const fallbackText = `${text}\n\n${url}`;
      navigator.clipboard
        .writeText(fallbackText)
        .then(() => {
          alert("El enlace ha sido copiado al portapapeles.");
        })
        .catch((err) => {
          console.error("Error al copiar al portapapeles:", err);
        });
    }
  };

  return (
    <Button variant="outline" size="icon" onClick={handleShare}>
      <FaShare className="h-4 w-4" />
    </Button>
  );
}
