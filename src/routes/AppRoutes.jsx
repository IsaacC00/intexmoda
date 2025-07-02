import { Route, Routes } from 'react-router-dom'
import { QuienesSomos } from '../pages/QuienesSomos'
import { Servicios } from '../pages/Servicios'
import { Productos } from '../pages/Productos'
import { NuestrasSedes } from '../pages/NuestrasSedes'
import { Galeras } from '../pages/Galeras'
import { Contacto } from '../pages/Contacto'
import { Molderia } from '../pages/Molderia'

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<QuienesSomos/>} />
        <Route path='/servicios' element={<Servicios/>} />
        <Route path='/productos' element={<Productos/>} />
        <Route path='/sedes' element={<NuestrasSedes/>} />
        <Route path='/galerias' element={<Galeras/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/molderia' element={<Molderia/>} />
    </Routes>
  )
}
