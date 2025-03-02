import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard.jsx';
import { FaSearch } from 'react-icons/fa';

const Marketplace = () => {
  const location = useLocation();
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [filtros, setFiltros] = useState({
    categoria: location.state?.selectedCategory || '',
    busqueda: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoading(true);
        const [productosRes, categoriasRes] = await Promise.all([
          fetch(`${process.env.REACT_APP_API_URL}/api/productos`),
          fetch(`${process.env.REACT_APP_API_URL}/api/categorias`)
        ]);

        if (!productosRes.ok || !categoriasRes.ok) {
          throw new Error('Error al cargar los datos');
        }

        const productosData = await productosRes.json();
        const categoriasData = await categoriasRes.json();

        setProductos(productosData);
        setCategorias(categoriasData);
        setError(null);
      } catch (error) {
        console.error('Error al cargar datos:', error);
        setError('Error al cargar los productos. Por favor, intenta más tarde.');
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, []);

  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filtrarProductos = () => {
    return productos.filter(producto => {
      // Filtro por categoría
      if (filtros.categoria && producto.categoria?.nombre !== filtros.categoria) {
        return false;
      }
      
      // Filtro por búsqueda
      if (filtros.busqueda) {
        const busquedaLower = filtros.busqueda.toLowerCase();
        const coincide = 
          producto.nombre.toLowerCase().includes(busquedaLower) ||
          producto.descripcion.toLowerCase().includes(busquedaLower) ||
          producto.categoria?.nombre.toLowerCase().includes(busquedaLower);
        if (!coincide) return false;
      }
      
      return true;
    });
  };

  const productosFiltrados = filtrarProductos();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl text-red-600">{error}</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Barra de búsqueda y filtros */}
      <div className="mb-8">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              name="busqueda"
              value={filtros.busqueda}
              onChange={handleFiltroChange}
              placeholder="Buscar productos..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <select
            name="categoria"
            value={filtros.categoria}
            onChange={handleFiltroChange}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
          >
            <option value="">Todas las categorías</option>
            {categorias.map(categoria => (
              <option key={categoria.id} value={categoria.nombre}>
                {categoria.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productosFiltrados.map(producto => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>

      {/* Mensaje cuando no hay productos */}
      {productosFiltrados.length === 0 && (
        <div className="text-center py-10">
          <h2 className="text-2xl text-gray-600">No se encontraron productos</h2>
        </div>
      )}
    </div>
  );
};

export default Marketplace;