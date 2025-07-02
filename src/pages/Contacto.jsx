import React from 'react'
import { HeroSection } from '../components/HeroSection'
import ContactInfo from '../components/ContactInfo'
import Image from '../assets/img/contacto.jpg'
export const Contacto = () => {
  return (
    <>
      <HeroSection
        texto='¿Tienes preguntas o deseas más información? Estamos aquí para ayudarte. Contáctanos y con gusto te asesoraremos.'
        titulo='Contacto'
        img={Image}
      />
      <ContactInfo
      />
    </>
  )
}
