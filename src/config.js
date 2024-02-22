export const APP_NAME = "Mon Budget Perso";
export const APP_DEV = "Fabrice MAGNAN DE BELLEVUE";
// Définition de la variable `basename` en fonction du mode de l'environnement
const basename = import.meta.env.MODE === "production" ? "/portfolio/" : "";

// Exportation de la variable `basename` pour l'utiliser dans d'autres fichiers
export { basename };