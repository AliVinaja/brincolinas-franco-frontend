const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getFirebaseConfig = async () => {
  try {
    const response = await fetch(`${API_URL}/auth/firebase-config`);
    if (!response.ok) throw new Error('Error al obtener la configuración de Firebase');
    return response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getMapsApiKey = async () => {
  try {
    const response = await fetch(`${API_URL}/auth/maps-key`);
    if (!response.ok) throw new Error('Error al obtener la API key de Google Maps');
    const data = await response.json();
    return data.key;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
