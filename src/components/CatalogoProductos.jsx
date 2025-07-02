import ProductoCard from "./ProductoCard";
import AudacesPattern from '../assets/img/AudacesPattern.webp';
import AudacesMarker from '../assets/img/AudacesMarker.jpg';
import Audaces360 from '../assets/img/Audaces360.png';
import AudacesFashionStudio from '../assets/img/AudacesFashionStudio.webp';
import AudacesJet from '../assets/img/AudacesJet.webp';
import AudacesLinea from '../assets/img/AudacesLinea.webp';

const productos = [
  {
    titulo: "Cursos de formación continua",
    descripcion: "Actualización constante en técnicas, herramientas y tendencias del sector textil y de moda.",
    imagen: AudacesMarker,
    link: "/contacto",
  },
  {
    titulo: "AUDACES (Sistemas de patronaje para corte textil)",
    descripcion: 'Software avanzado para diseño, trazo y corte digital de prendas con alta precisión.',
    imagen: Audaces360,
    link: "/contacto",

  }, {
    titulo: "Asistencia técnica especializada para empresas de confección textil",
    descripcion: "Soporte profesional para optimizar procesos, resolver fallas y mejorar la producción.",
    imagen: AudacesJet,
    link: "/contacto",
  },
  {
    titulo: "Productos textiles",
    descripcion: "Software para creación y digitalización de moldes con precisión.",
    imagen: AudacesPattern,
    link: "/contacto",
  },
];

const CatalogoProductos = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Catálogo de Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {productos.map((prod, i) => (
          <ProductoCard key={i} {...prod} />
        ))}
      </div>
    </section>
  );
};

export default CatalogoProductos;
