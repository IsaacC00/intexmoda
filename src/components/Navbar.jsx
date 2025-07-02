import { useState } from 'react'
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import Logo from '../assets/img/4.png';

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleCloseMenu = () => setIsOpen(false);

  return (
    <>
      <nav className=" shadow-md sticky w-full z-50 bg-[#2B7EFE] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link className='' to='/'>
            <img src={Logo} className='h-8 w-full' />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden ml-8 md:flex space-x-8 text-white font-medium uppercase">
              <li><Link to='/' className="hover:text-blue-400">Quienes Somos</Link></li>
              <li><Link to='/sedes' className="hover:text-blue-400">Nuestras Sedes</Link></li>
              <li><Link to='/productos' className="hover:text-blue-400">Productos</Link></li>
              <li><Link to='/molderia' className="hover:text-blue-400">Molderia</Link></li>
              <li><Link to='/servicios' className="hover:text-blue-400">Servicios</Link></li>
              <li><Link to='/contacto' className="hover:text-blue-400">Contacto</Link></li>
              <li><Link to='/galerias' className="hover:text-blue-400">Galerias</Link></li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button className="text-white" onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#2B7EFE] px-4 pt-2 pb-4 space-y-2 shadow-md">
              <li><Link onClick={handleCloseMenu} to='/' className="block text-gray-300 hover:text-white">Quienes Somos</Link></li>
              <li><Link onClick={handleCloseMenu} to='/sedes' className="block text-gray-300 hover:text-white">Nuestras Sedes</Link></li>
              <li><Link onClick={handleCloseMenu} to='/productos' className="block text-gray-300 hover:text-white">Productos</Link></li>
              <li><Link onClick={handleCloseMenu} to='/molderia' className="block text-gray-300 hover:text-white">Molderia</Link></li>
              <li><Link onClick={handleCloseMenu} to='/servicios' className="block text-gray-300 hover:text-white">Servicios</Link></li>
              <li><Link onClick={handleCloseMenu} to='/contacto' className="block text-gray-300 hover:text-white">Contacto</Link></li>
              <li><Link onClick={handleCloseMenu} to='/galerias' className="block text-gray-300 hover:text-white">Galerias</Link></li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
