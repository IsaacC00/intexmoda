import { Printer, FileText, FileEdit, FileSymlink } from "lucide-react";

const IconosSeccionFive = () => {
const iconos = [
  { icon: <Printer size={70} />, titulo: "Molde Impreso", desc: "Listo para cortar y coser." },
  { icon: <FileText size={70} />, titulo: "Archivos PDF", desc: "PDF en tamaño real, preparados para imprimir." },
  { icon: <FileEdit size={70} />, titulo: "Archivos DFX", desc: "Formato editable compatible con Illustrator, Corel Draw, Audaces, etc." },
  { icon: <FileSymlink size={70} />, titulo: "Archivos HPGL", desc: "Archivos preparados para plotters, adaptados según tus necesidades." },
];
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Formato y Entrega</h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-5">
        {iconos.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="text-[#ED237E] mb-3">{item.icon}</div>
            <h3 className="font-semibold text-xl">{item.titulo}</h3>
            <p className="text-lg text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default IconosSeccionFive;
