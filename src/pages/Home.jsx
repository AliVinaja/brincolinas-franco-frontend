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

      {/* Características */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <FaCheckCircle className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">
                Todos nuestros productos son de la más alta calidad y reciben
                mantenimiento constante.
              </p>
            </div>
            <div className="card p-6">
              <FaCheckCircle className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Entrega Puntual</h3>
              <p className="text-gray-600">
                Nos aseguramos de entregar e instalar todo a tiempo para tu evento.
              </p>
            </div>
            <div className="card p-6">
              <FaCheckCircle className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Precios Competitivos</h3>
              <p className="text-gray-600">
                Ofrecemos los mejores precios del mercado sin comprometer la
                calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ¡Haz tu fiesta inolvidable!
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Renta los mejores brincolines y mobiliario para tu evento
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/productos"
                className="btn btn-primary bg-white text-blue-600 hover:bg-gray-100"
              >
                Ver Productos
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary flex items-center"
              >
                <FaWhatsapp className="mr-2" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 50C840 40 960 20 1080 15C1200 10 1320 20 1380 25L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
