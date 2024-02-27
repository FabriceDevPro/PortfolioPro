/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useScrollToHash from "../hooks/useScrollToHash";
const LegalMentions = () => {
  const location = useLocation();

  useEffect(() => {
    // Si l'URL contient un hash, on tente de faire défiler vers l'élément correspondant.
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        // Utiliser 'scrollIntoView' pour déplacer la vue vers l'élément.
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); // Les crochets indiquent que l'effet doit s'exécuter à chaque changement de 'location'.
  
    // Appel du hook avec la hauteur de l'en-tête si nécessaire.
    useScrollToHash(100); // 100px est un exemple, remplacez par la hauteur de votre en-tête fixe
  
  return (
    <section className="legal-mentions" id="legal-mentions">
      <h1>Mentions Légales</h1>

      <h2>Éditeur du Site</h2>
      <p>Nom du site web : FabWebProjects</p>
      <p>URL du site : https://fabwebprojects.fr</p>
      <p>Propriétaire : MAGNAN de BELLEVUE Fabrice</p>
      <p>Contact : magnan.fabrice@gmail.com</p>

      <h2>Hébergement</h2>
      <p>Hébergé par : Serveur NAS Synology + Domaine chez OVH </p>
      <p>Adresse : 12 rue des Violettes 31570 BOURG SAINT BERNARD</p>
      <p>Contact : magnan.fabrice@gmail.com</p>

      <h2>Propriété Intellectuelle</h2>
      <p>
        Le contenu de ce site web, y compris les projets présentés, les images, logos et textes, sont la propriété de MAGNAN de BELLEVUE Fabrice sauf mention contraire. Toute reproduction, distribution ou publication
        sans l'accord écrit préalable de MAGNAN de BELLEVUE Fabrice est interdite.
      </p>

      <h2>Crédits</h2>
      <p>Les images, photographies et ressources graphiques utilisées sur ce site sont la propriété de MAGNAN de BELLEVUE Fabrice ou utilisées avec permission des ayants droit.</p>

      <h2>Responsabilité</h2>
      <p>
        MAGNAN de BELLEVUE Fabrice ne peut être tenu pour responsable des erreurs ou omissions présentes sur le site. MAGNAN de BELLEVUE Fabrice se réserve le droit de modifier, corriger ou supprimer le contenu du site à
        tout moment sans préavis.
      </p>

      <h2>Droit Applicable</h2>
      <p>Ce site est régi par le droit français et les tribunaux français auront juridiction exclusive pour tout litige relatif à l'utilisation de ce site.</p>

      <p>Dernière mise à jour : 01/12/2023</p>
    </section>
  );
};

export default LegalMentions;
