import { Link } from "react-router-dom";

const MediaSeccion = ({
  img = "",
  titulo = "",
  background='',
  descripcion = "",
  button = "",
  buttonColor = "",
  link = "/",
  reverse = false, // opcional: para invertir orden
}) => {
  return (
    <section className={`w-full py-12 ${background}`}>
      <div className={`max-w-7xl mx-auto flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}>
        {/* Imagen */}
        <div className="w-full md:w-1/2 h-64 md:h-auto items-center justify-center">
          <img
            src={img}
            alt={titulo}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Contenido */}
        <div className="w-full md:w-1/2 flex items-center p-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{titulo}</h2>
            <p className="text-lg mb-6 text-justify">{descripcion}</p>
            <Link
              to={link}
              className={` ${buttonColor} inline-block px-6 py-3 rounded transition`}
            >
              {button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSeccion;