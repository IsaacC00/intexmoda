import { Link } from "react-router-dom";

const SeccionVideo = ({
  videoUrl = "",
  titulo = "",
  descripcion = "",
  button = "",
  link = "/"
}) => {
  return (
    <section className="relative h-[660px] w-full overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videoUrl} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Capa oscura para mejorar legibilidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Contenido */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="text-white max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{titulo}</h2>
            <p className="text-lg md:text-xl mb-6 text-justify">{descripcion}</p>
            <Link
              to={link}
              className="inline-block bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-300 transition"
            >
              {button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeccionVideo;
