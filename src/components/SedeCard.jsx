import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const SedeCard = ({ nombre, direccion, imagen, link ='' }) => {
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
        <div>
          <h3 className="text-xl font-bold text-blue-700 mb-2">{nombre}</h3>
          <div className="flex items-start gap-2 text-sm text-gray-600 mb-3">
            <MapPin className="w-4 h-4 text-blue-500 mt-1" />
            <p className="text-gray-700">{direccion}</p>
          </div>
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