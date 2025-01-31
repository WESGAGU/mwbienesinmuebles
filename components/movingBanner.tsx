import React from "react";


const MovingBanner  = () => {
  return (
    <div className="w-full md:w-10/12 mx-auto overflow-hidden py-2 mb-4 ">
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-4 text-lg font-medium">
          ¡Estamos en proceso de mejora y desarrollo de la web!
        </span>
        <span className="mx-4 text-lg font-medium">
          ¡Seguiremos trabajando para implementar mejoras!
        </span>
        <span className="mx-4 text-lg font-medium">
          ¡Actualmente no contamos con muchas propiedades pero estaremos agregando más!
        </span>
      </div>
    </div>
  );
};

export default MovingBanner;