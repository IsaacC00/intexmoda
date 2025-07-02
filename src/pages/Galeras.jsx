import React from 'react'
import ImageOne from '../assets/img/galeria/01.png'
import ImageTwo from '../assets/img/galeria/10-1.png'
import ImageThree from '../assets/img/galeria/03.png'
import ImageFour from '../assets/img/galeria/04.jpg'
import ImageFive from '../assets/img/galeria/05.jpg'
import ImageSix from '../assets/img/galeria/06.jpg'
import ImageSeven from '../assets/img/galeria/07.jpg'
import ImageEight from '../assets/img/galeria/08.jpg'
import ImageNine from '../assets/img/galeria/09.jpg'
import ImageTen from '../assets/img/galeria/10.jpg'
import ImageEleven from '../assets/img/galeria/11.jpg'
import ImageTwelve from '../assets/img/galeria/12.jpg'
import ImageThirdteen from '../assets/img/galeria/13.jpg'

export const Galeras = () => {
  const imagenes = new Array(
    ImageOne,
    ImageTwo,
    ImageThree,
    ImageFour,
    ImageFive,
    ImageSix,
    ImageSeven,
    ImageEight,
    ImageNine,
    ImageTen,
    ImageEleven,
    ImageTwelve,
    ImageThirdteen,

  )

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Galería IntexModa</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {imagenes.map((url, index) => {
          // Solo aplicar columnas/filas especiales en pantallas grandes
          const vertical = index === 5 ? 'md:row-span-2' : ''
          const horizontal = index === 9 ? 'md:col-span-2' : ''

          return (
            <div
              key={index}
              className={`overflow-hidden rounded-lg ${vertical} ${horizontal}`}
            >
              <img
                src={url}
                alt={`img-${index}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
