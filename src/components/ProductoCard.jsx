import React from "react";
import { Link } from "react-router-dom";

const ProductoCard = ({ imagen, titulo, descripcion, link='/' }) => {
  return (
    <div className="relative group overflow-hidden shadow-lg ">
      {/* Imagen del producto */}
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Overlay con información */}
      <div className="absolute inset-0 bg-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 text-white">
        <h3 className="text-xl font-bold">{titulo}</h3>
        <p className="text-sm my-2">{descripcion}</p>
        <Link className="font-bold text-blue-400" to={link}>Mas Información →</Link>
      </div>
    </div>
  );
};

export default ProductoCard;
