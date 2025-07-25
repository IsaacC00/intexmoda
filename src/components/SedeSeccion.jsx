import SedeCard from "./SedeCard";
import Image from "../assets/img/sedes/010.jpg"
import ImageTwo from "../assets/img/sedes/014.jpg"
import ImageThree from "../assets/img/sedes/016.jpg"
import ImageFour from "../assets/img/sedes/07.jpg"
import ImageFive from "../assets/img/sedes/08.jpg"
import ImageSeven from "../assets/img/sedes/11.jpeg"
import ImageEight from "../assets/img/sedes/13.jpg"

const sedes = [
  {
    imagen: ImageEight,
    nombre: 'Cali',
    principal: true,
    direccion: `Edificio Zaccur oficina 538 plaza de Caicedo`,
    link: '/contacto',
    tel:'+57 3216981779'
  },
  {
    imagen: ImageSeven,
    nombre: 'Pasto',
    principal: true,
    direccion: `TEMPO COWORKING Cra. 37 #19b - 35,Edificio Hito Pasto - Nariño`,
    descripcion: 'Sede principal con centro de operaciones, showroom, y espacios colaborativos para diseñadores y emprendedores.',
    link: '/contacto',
    tel:'+57 3235071392'
  },
  {
    imagen: Image,
    nombre: 'Quito',
    principal: true,
    direccion: `Río Palora OE2-50 y Av. de la Prensa.`,
    descripcion: 'Sede principal con centro de operaciones, showroom, y espacios colaborativos para diseñadores y emprendedores.',
    link: '/contacto',
    tel:'+593 990888619'
  },
  {
    imagen: ImageTwo,
    nombre: 'Atuntaqui',
    direccion: 'Río Amazonas y Pérez Muñoz, Edificio Pasteur, 2 do. piso.',
    descripcion: 'Apoyo a emprendedores textiles, patronaje digital y maquinaria moderna.',
    link: '/contacto',
    tel:'+593 990888619'
  },
  {
    imagen: ImageThree,
    nombre: 'Ambato',
    direccion: 'Francisco Flor y Bolívar, 2 do. piso, Redondel del Liceo Cevallos.',
    descripcion: 'Centro de entrenamiento industrial y asesoría para exportadores.',
    link: '/contacto',
    tel:'+593 939898048'
  },
  {
    imagen: ImageFour,
    nombre: 'Guayaquil',
    direccion: 'Universidad Casa Grande, frente al CC Albán Borja',
    descripcion: 'Conferencias, cursos y alianzas con la industria de la moda internacional.',
    link: '/contacto',
    tel:'+593 990888619'
  },
  {
    imagen: ImageFive,
    nombre: 'Cuenca',
    direccion: 'Padre Aguirre 16-50 y Héroes de Verdeloma',
    descripcion: 'Diseño de autor, moda artesanal y eventos anuales de moda.',
    link: '/contacto',
    tel:'+593 990888619'
  },
];

const SedeSeccion = (id = '') => {
  return (
    <section id={id} className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Nuestras Sedes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sedes.map((sede, idx) => (
          <SedeCard key={idx} {...sede} />
        ))}
      </div>
      
    </section>
  );
};


export default SedeSeccion