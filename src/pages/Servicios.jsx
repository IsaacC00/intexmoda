import React from 'react'
import ImageBanner from '../assets/img/audaces08.webp'
import Image from '../assets/img/audaces07.webp'
import { HeroSection } from '../components/HeroSection'
import SeccionVideo from '../components/SeccionVideo'
import MediaSeccion from '../components/MediaSeccion'
import { Link } from 'react-router-dom'
import IconosSeccion from '../components/IconosSeccion'
import IconosSeccionThree from '../components/IconosSeccionThree'
import IconosSeccionFour from '../components/IconosSeccionFour'

export const Servicios = () => {
  return (
    <>
      <HeroSection
        button='Solicita tu plan'
        classname='bg-emerald-500 hover:bg-emerald-600'
        img={`${ImageBanner}`}
        texto='Nuestros servicios están diseñados para optimizar cada etapa del proceso, asegurando eficiencia y calidad. Con herramientas avanzadas y el respaldo de tecnología de vanguardia, te brindamos el impulso necesario para destacar en el mercado. Descubre cómo podemos transformar tu visión en realidad.'
        titulo='Servicios'
      />

      <MediaSeccion
        img={`${Image}`}
        titulo='¿Sientes falta de un aliado estratégico en la formación de moda?'
        descripcion='En Intexmoda te acompañamos en cada paso de tu crecimiento profesional. Ofrecemos formación especializada en patronaje, confección y diseño, con tecnología de punta como Audaces. Ya sea que estés iniciando en el mundo de la moda o buscando llevar tu emprendimiento al siguiente nivel'
        button='SOLICITA NUESTROS SERVICIOS'
        buttonColor='bg-green-600 text-white'
      />
      <IconosSeccionThree />

      <SeccionVideo
        titulo='DUOC UC'
        videoUrl='https://audaces.com/wp-content/uploads/2022/11/Case-Audaces-2Rios.m4v'
        descripcion=' DUOC UC Mira como docentes de la carrera de Diseño de Vestuario de la Duoc UC eligieron Audaces para digitalizar el proceso de desarrollo de una colección completa.'
        button='Ver Ahora'
        link='/contacto'
      />
      <IconosSeccionFour />
      
      <section className='bg-blue-500 w-full px-8 py-20'>
        <div className='flex flex-col justify-center items-center text-center'>
          <h1 className='text-4xl text-white'>¡Formamos a quienes darán forma a la moda del mañana!</h1>
          <h1 className='text-4xl text-white'>¡No te quedes atrás!</h1>
          <Link to='/contacto' className='bg-green-600 text-white inline-block px-6 py-3 rounded mt-10' >SOLICITA TU PLAN AHORA</Link>
        </div>
      </section>
    </>
  )
}
