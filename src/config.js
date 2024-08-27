export const APP_NAME = "FabWebProjects";
export const APP_DEV = "Fabrice MAGNAN DE BELLEVUE";
// Définition de la variable `basename` en fonction du mode de l'environnement
const basename = import.meta.env.VITE_BASE_PATH || '/';

// Exportation de la variable `basename` pour l'utiliser dans d'autres fichiers
export { basename };

// Importe package.json
import packageJson from '../package.json'; // Ajuste le chemin relatif
// Exporte la version (et tout autre config que tu juges nécessaire)
export const Config = {
  version: packageJson.version,
  releaseDate: packageJson.releaseDate,
};