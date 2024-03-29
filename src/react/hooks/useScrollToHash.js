// hooks/useScrollToHash.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToHash = (offsetHeight = 0) => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      // Assurez-vous que l'élément est rendu avant de tenter de défiler vers celui-ci
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - offsetHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 0); // Le délai de 0 ms permet de passer à la fin de la file d'événements
    }
  }, [location, offsetHeight]); // Déclenchez l'effet sur le changement de l'emplacement
};

export default useScrollToHash;
