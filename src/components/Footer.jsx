import React, { useState } from 'react'

export const Footer = () => {
  const [modal, setModal] = useState(null) // 'legal' o 'privacidad'

  const handleClose = () => setModal(null)

  return (
    <>
      <footer className="bg-blue-600 text-white py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center flex-col sm:flex-row text-center sm:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} IntexModa. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <button
              onClick={() => setModal('legal')}
              className="hover:text-zinc-300 text-sm"
            >
              Aviso legal
            </button>
            <button
              onClick={() => setModal('privacidad')}
              className="hover:text-zinc-300 text-sm"
            >
              Privacidad
            </button>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg max-w-md w-full mx-4 shadow-lg relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-3 text-xl text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">
              {modal === 'legal' ? 'Aviso Legal' : 'Política de Privacidad'}
            </h2>
            <p className="text-sm">
              {modal === 'legal' ? (
                <>
                  Este sitio web es propiedad de IntexModa. Toda la información contenida en él tiene fines informativos. El uso de este sitio implica la aceptación de nuestras condiciones de uso. Nos reservamos el derecho de modificar cualquier contenido sin previo aviso.
                </>
              ) : (
                <>
                  En IntexModa nos tomamos la privacidad en serio. Los datos personales que se recopilen serán tratados de forma confidencial y utilizados únicamente para fines internos y de comunicación. No compartimos información con terceros sin consentimiento.
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
