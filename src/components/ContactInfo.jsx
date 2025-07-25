import { number } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";

const ContactInfo = () => {
  const data = [
    {
      icon: <Phone size={50} className="text-blue-600" />,
      label: "Teléfono",
      text: "+593 990888619",
    },
    {
      icon: <MapPin size={50} className="text-blue-600" />,
      label: "Ubicación",
      text: "Río Amazonas y Pérez Muñoz, Edificio Pasteur, 2 do. piso.",
    },
    {
      icon: <Mail size={50} className="text-blue-600" />,
      label: "Correo",
      text: "ceo@intexmoda.org",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-6 py-10 px-4">
      {data.map((item, index) => (
        <div key={index} className="flex flex-row gap-4 ">
          <div>{item.icon}</div>
          <div>
            <h4 className="text-lg font-semibold">{item.label}</h4>  
            <p className="text-gray-600">{item.text}</p>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
