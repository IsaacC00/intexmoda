import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const SedeCard = ({ nombre, direccion, imagen, link = '', tel }) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition-all flex flex-col h-full">

      {/* Imagen superior */}
      {imagen && (
        <img
          src={imagen}
          alt={`Imagen de ${nombre}`}
          className="w-full h-48 object-cover"
        />
      )}

      {/* Contenido */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div className="flex flex-row items-center gap-1">
          <MapPin className="w-4 h-4 text-blue-500" />
          <h3 className="text-xl font-bold text-blue-700">{nombre}</h3>
        </div>
        <div className=" text-sm text-gray-600 mb-3">
          <p className="mb-2">{direccion}</p>
          <a href={`tel:${tel}`} className="font-bold">{tel}</a>
        </div>
        <div>
          <Link
            to={link}
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            Saber más →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SedeCard;