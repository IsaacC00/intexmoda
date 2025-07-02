import React from 'react'
import { Link } from 'react-router-dom'

export const HeroSection = ({ 
    titulo = '', 
    texto = '', 
    button = '', 
    classname='',
    img=''
}) => {
    return (
        <section
            className="h-screen bg-cover bg-center flex items-center"
             style={{ backgroundImage: `url(${img})` }}
        >
            <div className="bg-black/50 w-full h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                    <div className="text-white max-w-xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">{titulo}</h1>
                        <p className="text-lg md:text-xl mb-6 text-justify">
                            {texto}
                        </p>
                        <Link
                            to="/contacto"
                            className={`inline-block   font-semibold px-6 py-3 rounded-md transition ${classname}`}
                        >
                            {button}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
