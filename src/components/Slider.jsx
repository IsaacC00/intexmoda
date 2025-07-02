import { useState, useEffect } from "react";
import ImageOne from '../assets/img/Audaces01.png'
import ImageTwo from '../assets/img/Audaces02.gif'
import ImageThree from '../assets/img/audaces13.png'
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "INTEXMODA",
    description: "Transformamos talento en resultados reales a través de educación en moda, herramientas digitales y un enfoque práctico que conecta diseño, innovación y futuro.",
    image: `${ImageOne}`,
  },
  {
    id: 2,
    title: "PROPOSITO",
    description:'Desde el año 2001, nuestro propósito es ser generadores de cambio en la industria de la moda, permitiéndonos ser testigos de la evolución de las marcas y de los sueños que conviven en cada una de ellas.', 
    image: `${ImageTwo}`,
  },
  {
    id: 3,
    title: "MISION",
    description:'Consolidar profesionales plenos, emprendedores y capaces de vestir al mundo con su talento con una formación real, vanguardista que lidere el desarrollo de la moda latinoamericana.', 
    image: `${ImageThree}`,
  },
];

const variants = {
  enter: { opacity: 0, x: -50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0 bg-cover bg-center flex items-center justify-start"
          style={{ backgroundImage: `url(${slide.image})` }}
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={{ duration: 1 }}
        >
          <div className="bg-black/50 w-full h-full flex items-center">
            <div className="text-white px-8 max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg md:text-xl text-justify">{slide.description}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default HeroSlider;