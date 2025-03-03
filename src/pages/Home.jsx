import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_NUMBER } from '../config/constants';
import { motion } from 'framer-motion';
import { FaSearch, FaShoppingCart, FaCalendarAlt, FaTruck } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoria) => {
    navigate('/productos', { state: { selectedCategory: categoria } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-section relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Brincolinas Franco
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8"
          >
            La mejor opción para tus eventos
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => navigate('/productos')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 mr-4"
          >
            Ver Productos
          </motion.button>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos%20y%20servicios%20que%20ofrecen.`)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Contactar por WhatsApp
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <FaSearch className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gran Variedad</h3>
              <p className="text-gray-600">Amplia selección de productos para todo tipo de eventos</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <FaShoppingCart className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fácil Reserva</h3>
              <p className="text-gray-600">Proceso de reserva simple y rápido</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <FaCalendarAlt className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Disponibilidad</h3>
              <p className="text-gray-600">Reserva con anticipación para asegurar tu fecha</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <FaTruck className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Entrega Incluida</h3>
              <p className="text-gray-600">Servicio de entrega e instalación</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Categorías Populares</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="category-card cursor-pointer"
              onClick={() => handleCategoryClick('Brincolina sencilla')}
            >
              <div className="category-image brincolina-sencilla"></div>
              <h3 className="text-xl font-semibold mt-4">Brincolinas</h3>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="category-card cursor-pointer"
              onClick={() => handleCategoryClick('Mesas')}
            >
              <div className="category-image mesas"></div>
              <h3 className="text-xl font-semibold mt-4">Mesas</h3>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="category-card cursor-pointer"
              onClick={() => handleCategoryClick('Sillas')}
            >
              <div className="category-image sillas"></div>
              <h3 className="text-xl font-semibold mt-4">Sillas</h3>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="category-card cursor-pointer"
              onClick={() => handleCategoryClick('Portacool')}
            >
              <div className="category-image portacool"></div>
              <h3 className="text-xl font-semibold mt-4">Portacool</h3>
            </motion.div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;