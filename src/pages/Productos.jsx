import React from 'react'
import fondo from '../assets/img/Audaces01.png'
import ImageTwo from '../assets/img/Audaces06.png'
import { HeroSection } from '../components/HeroSection'
import MediaSeccion from '../components/MediaSeccion'
import IconosSeccionTwo from '../components/IconosSeccionTwo'
import CatalogoProductos from '../components/CatalogoProductos'
import IconosSeccion from '../components/IconosSeccion'

export const Productos = () => {
  return (
    <>
      <HeroSection
        img={fondo}
        button='Descubrir catálogo'
        classname='bg-blue-500 hover:bg-blue-600'
        texto='Audaces revoluciona la industria de la moda con tecnología innovadora. Sus soluciones optimizan el diseño, desarrollo y producción de prendas, permitiendo procesos más eficientes y creativos. Con herramientas como Audaces360, llevamos la moda a un nuevo nivel de precisión y competitividad.'
        titulo='Productos'
      />

      <MediaSeccion
        reverse
        titulo='A Nivel Nacional'
        descripcion='IntexModa es un referente nacional en innovación tecnológica para la moda, desarrollando soluciones para la industria en el sector hace más de 30 años.'
        img={`${ImageTwo}`}
        button='Encuentre una unidad'
        buttonColor='bg-white text-black text-black'
        link='/contacto'
        background='bg-gradient-to-r from-blue-600'
      />
      <CatalogoProductos />
            
      <IconosSeccion />

    </>
  )
}
