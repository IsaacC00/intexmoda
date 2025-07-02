import React from 'react'
import Image from '../assets/img/Audaces04.webp'
import ImageTwo from '../assets/img/Audaces11.jpg'
import HeroSlider from '../components/Slider'
import MediaSeccion from '../components/MediaSeccion'
import SeccionVideo from '../components/SeccionVideo'
import CaruselSeccion from '../components/CaruselSeccion'

export const QuienesSomos = () => {
  return (
    <>
      <HeroSlider />
      
      <MediaSeccion
        background='bg-blue-500'
        titulo='IntexModa'
        descripcion='Intexmoda es una organización apasionada por crear estrategias innovadoras que promuevan el crecimiento y desarrollo de la Industria de la Confección.'
        button='Hable con un consultor'
        buttonColor='bg-green-600 text-white'
        img={`${Image}`}
        link='/contacto'
      />

      <SeccionVideo
        videoUrl='https://audaces.com/wp-content/uploads/2022/11/Case-Audaces-2Rios.m4v'
        titulo='Historias de Éxito'
        descripcion='Conoce cómo la tecnología impulsó sueños sin reemplazar lo más valioso: la creatividad, el esfuerzo y la pasión de cada persona.'
        button='Saber Más'
        link='/contacto'
      />

      <CaruselSeccion />

      <MediaSeccion
        reverse
        img={`${ImageTwo}`}
        titulo='IntexModa y Audaces Academy'
        button='Saber Más'
        buttonColor='bg-green-500 text-white'
        link='/contacto'
        descripcion='IntexModa, como aliado en formación y tecnología para la moda, impulsa el acceso a Audaces Academy, la plataforma de educación en línea que ofrece cursos y entrenamientos sobre los sistemas Audaces. Esta colaboración brinda actualización constante y conocimientos esenciales para quienes buscan destacar en la industria de la moda.'/>

    </>
  )
}
