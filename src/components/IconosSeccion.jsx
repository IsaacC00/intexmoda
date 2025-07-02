import {
  PenTool,
  Cog,
  Factory,
  Briefcase,
  Megaphone,
  Palette,
  Layers,
  Paintbrush,
  Drill,
  BarChart
} from "lucide-react";
import { Link } from "react-router-dom";

const IconosSeccion = () => {
  const iconos = [
    { icon: <PenTool size={50} />, titulo: "Curso de Patronaje Industrial Digital con Audaces" },
    { icon: <Cog size={50} />, titulo: "Curso de Mecánicos de Máquinas de Confección Industrial" },
    { icon: <Factory size={50} />, titulo: "Curso de Ingeniería de la Confección Industrial" },
    { icon: <Briefcase size={50} />, titulo: "Curso de Jefe de Producción de Confección Textil" },
    { icon: <Megaphone size={50} />, titulo: "Curso de Marketing y Comunicación de Moda" },
    { icon: <Palette size={50} />, titulo: "Curso de Diseño y Gestión de Moda" },
    { icon: <Layers size={50} />, titulo: "Diseño y Montaje de Colecciones de Moda" },
    { icon: <Paintbrush size={50} />, titulo: "Técnicas de Ilustración de Moda (manual y digital)" },
    { icon: <Drill size={50} />, titulo: "Manejo de Máquinas de Confección Industrial" },
    { icon: <BarChart size={50} />, titulo: "Lean Manufacturing en la Confección" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 capitalize">
        te formamos para actualizarte y fortalecer tus habilidades y conocimientos profesionales...
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 mb-12">
        {iconos.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="text-blue-600 mb-3">{item.icon}</div>
            <h3 className="font-semibold text-lg">{item.titulo}</h3>
          </div>
        ))}
      </div>

      <Link
        to="/contacto"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        Más información
      </Link>
    </section>
  );
};

export default IconosSeccion;
