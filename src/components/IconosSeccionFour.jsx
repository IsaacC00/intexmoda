import {
  PenTool  ,
  Palette  ,
  Settings2 ,
  Briefcase 
} from "lucide-react";

const IconosSeccionFour = () => {
  const iconos = [
    { icon: <PenTool   size={70} />, titulo: "Patronaje Digital", desc: "Formación en el uso de software especializado para crear moldes digitales con precisión profesional." },
    { icon: <Palette   size={70} />, titulo: "Diseño y Gestión de Moda", desc: "Capacitación integral en el desarrollo creativo y estratégico de marcas y colecciones de moda."},
    { icon: <Settings2   size={70} />, titulo: "Mantenimiento de Máquinas de Confección", desc:'Enseñanza técnica para el diagnóstico, reparación y mantenimiento de maquinaria textil.' },
    { icon: <Briefcase   size={70} />, titulo: "Jefes de Producción", desc:'Formación para liderar procesos productivos, optimizar tiempos y gestionar equipos de trabajo en confección.' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Capacitación en:</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
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

export default IconosSeccionFour;
