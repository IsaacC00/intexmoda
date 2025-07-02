import {
  BookText,
  Brain,
  FolderCode,
} from "lucide-react";
import { Link } from "react-router-dom";

const IconosSeccionTwo = () => {
  const iconos = [
    { icon: <BookText size={70} />, titulo: "Cursos", desc: "Los cursos están diseñados para proporcionar conocimientos detallados sobre los sistemas Audaces, con módulos estructurados. Las clases están grabadas con instructores y profesionales destacados en el campo para profundizar tu aprendizaje." },
    { icon: <Brain size={70} />, titulo: "Entrenamientos", desc: "Los entrenamientos se centran en prácticas y habilidades específicas, proporcionando una experiencia completa con las herramientas de Audaces. En ellos, descubrirás todo lo que necesitas para empezar a usar Audaces360 y obtener resultados." },
    { icon: <FolderCode size={70} />, titulo: "Software", desc: "Audaces es un software para moda que optimiza el diseño y la confección de prendas, permitiendo trabajar más rápido, con mayor precisión y menos desperdicio de tela. Facilita el escalado de tallas, reduce errores y mejora la productividad en todo el proceso." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Ventajas de elegir IntexModa como distribuidor Audaces</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-5">
        {iconos.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="text-blue-600 mb-3">{item.icon}</div>
            <h3 className="font-semibold text-lg">{item.titulo}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default IconosSeccionTwo;
