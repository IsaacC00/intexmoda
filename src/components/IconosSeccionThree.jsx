import {
  LayoutTemplate ,
  Printer ,
  GalleryHorizontal,
} from "lucide-react";

const IconosSeccionThree = () => {
  const iconos = [
    { icon: <LayoutTemplate  size={70} />, titulo: "Desarrollo de Mordería Digital", desc: "Creación precisa de patrones digitales para prendas, listos para producción industrial." },
    { icon: <Printer  size={70} />, titulo: "Impresión de Trazos", desc: "Impresión de trazos optimizados para corte y confección, con escala y precisión profesional."},
    { icon: <GalleryHorizontal  size={70} />, titulo: "Desarrollo de colecciones de Moda", desc:'Diseño y planificación de colecciones de moda según tendencias y estilos personalizados.' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Servicios de:</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-5">
        {iconos.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="text-blue-600 mb-3">{item.icon}</div>
            <h3 className="font-semibold text-xl">{item.titulo}</h3>
            <p className="text-lg text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default IconosSeccionThree;
