// src/api/apiConfig.js

// Importation de la variable apiUrl à partir des variables d'environnement de Vite
const apiUrl = import.meta.env.VITE_API_URL;

// Exportation de la variable apiUrl pour la rendre accessible depuis d'autres fichiers
export { apiUrl };
