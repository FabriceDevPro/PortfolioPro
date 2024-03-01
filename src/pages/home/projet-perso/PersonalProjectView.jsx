import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useScrollToHash from "../../../hooks/useScrollToHash";
import { useParams } from "react-router-dom";
import projectsData from '../../../data/personalProjects';
import Fonctionalite from "./Fonctionalite";
import DetailsEcritures from "./DetailsEcritures";
import DemoAccesCode from "./DemoAccesCode";
import Chronologie from "./Chronologie";
import Description from "./Description";

const PersonalProjectView = () => {
    
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

    const { id } = useParams();
    const project = projectsData.find(p => p.id.toString() === id); // Trouvez le projet dans votre état global ou chargez-le via une API
  
    return (
      <section className="personalProject-section" id="personalProject">
        <section className="description-section">
          <Description project={project?.name} description={project?.description} />
        </section>
        <section className="chronologie-section">
          <Chronologie chronologie={project?.chronologie} />
        </section>        
        <section className="fonctionalites-section">
          <Fonctionalite fonctionnalites={project?.fonctionnalites} />
        </section>
        <section className="details-ecritures-section">
          <DetailsEcritures detailsEcritures={project?.detailsEcritures}/>
        </section>
        <section className="demo-acces-code-section">
          <DemoAccesCode 
            demonstration={project?.demonstration}
            lienProjet={project?.lienProjet}
            lienGitHub={project?.lienGitHub}
          />
        </section>
      </section>
    );
  };

  export default PersonalProjectView;