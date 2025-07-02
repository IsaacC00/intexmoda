import React from 'react'
import { HeroSection } from '../components/HeroSection'
import MediaSeccion from '../components/MediaSeccion'
import IconosSeccionFive from '../components/IconosSeccionFive'
import Image from '../assets/img/MOLDERIA.webp'
import ImageTwo from '../assets/img/model.png'

export const Molderia = () => {
  return (
    <>
      <HeroSection
        titulo="Servicio de Moldería"
        texto="Diseñamos y creamos moldes personalizados para tus producciones. Aumenta la eficiencia y la calidad de tus productos con nuestra experiencia en moldería."
        button="Solicitar Servicio"
        classname='bg-[#ED237E]'
        img={`${Image}`}
      />

      <MediaSeccion
        reverse
        titulo='Que Incluye El Servicio'
        descripcion='Al contratar el servicio de moldería, recibirás:\n- La curva completa de tallas (hasta 8 tallas), ya sean de adulto o infantil, según tus necesidades.\n- La ficha técnica del producto, con toda la información relevante para llevar a la confección tus diseños de forma adecuada y sin errores.'
        background='bg-gradient-to-r from-black text-white'
        img={`${ImageTwo}`}
      />

      <IconosSeccionFive />

    </>
  )
}
