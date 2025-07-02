import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import ImageOne from '../assets/img/galeria/01.png'
import ImageTwo from '../assets/img/galeria/10-1.png'
import ImageThree from '../assets/img/sedes/017.jpg'

const CaruselSeccion = () => {
  const imagenes = [
    ImageOne,
    ImageTwo,
    ImageThree,  
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Carrusel de imágenes */}
      <div className="w-full h-[400px]">
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          className="h-full"
        >
          {imagenes.map((url, i) => (
            <SwiperSlide key={i}>
              <img
                src={url}
                alt={`slide-${i}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Contenido */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¡Mejora la productividad en la industria de la moda y destácate en el mercado!</h2>
        <p className="text-gray-600 mb-6 text-justify">
          Con IntexModa, tienes acceso al conocimiento teórico y práctico sobre los sistemas Audaces. Además, cuentas con todas las herramientas necesarias para impulsar tu carrera en la industria de la moda.
          
          Con Audaces Academy, tienes acceso al conocimiento teórico y práctico sobre los sistemas Audaces. Además, cuentas con todas las herramientas necesarias para impulsar tu carrera en la industria de la moda.
        </p>
        <a
          href="/galerias"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Ver Galería
        </a>
      </div>
    </section>
  );
};

export default CaruselSeccion;
