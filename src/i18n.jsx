import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // Charge les traductions via HTTP ou fichiers
  .use(HttpBackend)
  // Détecte la langue de l'utilisateur
  .use(LanguageDetector)
  // Initialisation de react-i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr', // Langue de secours
    debug: true, // Utile pour le développement
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    },
    backend: {
      // Chemin vers vos fichiers de traduction
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false, // Échappe les valeurs pour React déjà par défaut
    },
  });

export default i18n;
