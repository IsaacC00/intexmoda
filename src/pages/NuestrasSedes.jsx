import React from 'react'
import Image from '../assets/img/audaces12.jpg'
import ImageSedes from '../assets/img/audaces09.webp'
import { HeroSection } from '../components/HeroSection'
import MediaSeccion from '../components/MediaSeccion'
import { Link } from 'react-router-dom'
import SedesSeccion from '../components/SedeSeccion'

export const NuestrasSedes = () => {

  return (
    <>
      <HeroSection
        button='Ubica una sede'
        classname='bg-blue-500 hover:bg-blue-600'
        texto='Contamos con sedes en Atuntaqui, Quito, Ambato, Cuenca, Guayaquil, Pasto y Cali. Reflejo de nuestro compromiso con la formación en moda y el uso de tecnología Audaces. En cada ubicación ofrecemos calidad, innovación y cercanía para impulsar el talento local.'
        titulo='Nuestras Sedes'
        img={`${ImageSedes}`}
      />
      <MediaSeccion
        img={`${Image}`}
        titulo='Impulsamos la Transformación de la Moda !'
        descripcion='Nuestro equipo de colaboradores trabaja por el fortalecimiento del Sistema Moda, ofreciendo soluciones que vibran con el conocimiento, siendo esta la esencia e inspiración para transformar negocios y personas de manera competitiva y sostenible, según los contextos cambiantes y las necesidades del mercado.'
        button='SUSCRÍBETE AHORA'
        buttonColor='bg-green-500 text-white'
        link='/contacto'
      />

      <SedesSeccion/>

      <section className='bg-blue-500 w-full px-8 py-20'>
        <div className='flex flex-col justify-center items-center text-center'>
          <h1 className='text-4xl text-white'>¡El futuro de la moda se diseña en nuestras instituciones!</h1>
          <h1 className='text-4xl text-white'>¡No te quedes atrás!</h1>
          <Link to='' className='bg-green-600 text-white inline-block px-6 py-3 rounded mt-10' >SOLICITA TU PLAN EDUCACIONAL</Link>
        </div>
      </section>
    </>
  )
}
