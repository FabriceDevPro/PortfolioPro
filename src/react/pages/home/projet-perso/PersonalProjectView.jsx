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
import TechnologiesFloating from './TechnologiesFloating';

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
        {project?.long_description && (
          <section className="description-section">
            <Description project={project?.name} description={project?.long_description} title={"Description"} />
          </section>
        )}
        {project?.chronologie && project.chronologie.length > 0 && (
          <section className="chronologie-section">
            <Chronologie chronologie={project?.chronologie} />
          </section>
        )}
        {/* Section Contexte, si existant */}
        {project?.context && (
          <section className="description-section">
          {/* <section className="project-context"> */}
            <Description description={project?.context} title={"Contexte"} />
          </section>
        )}

        {/* Section Problématique, si existante */}
        {project?.problem && (
          <section className="description-section">
          {/* <section className="project-problem"> */}
            <Description description={project?.problem} title={"Problématique"} />
          </section>
        )}

        {/* Section Solution, si existante */}
        {project?.solution && (
          <section className="description-section">
           {/* <section className="project-solution"> */}
           <Description description={project?.solution} title={"Solution"} />
          </section>
        )}

      {/* Section Résultats, si existante */}
      {project?.results && (
        <section className="description-section">
        {/* <section className="project-results"> */}
          <Description description={project?.results} title={"Résultats"} />
        </section>
      )}

      {/* Section Technologies, si existante */}
      {project?.languages && (
        <section className="description-section">
            <h2 className="section-title">Technologies Utilisées :</h2>
           <TechnologiesFloating technologies={project.languages} />
        </section>
      )}
        {project?.fonctionnalites && project.fonctionnalites.length > 0 && (
          <section className="fonctionalites-section">
            <Fonctionalite fonctionnalites={project?.fonctionnalites} />
          </section>
        )}
        {project?.detailsEcritures && project.detailsEcritures.length > 0 && (
          <section className="details-ecritures-section">
            <DetailsEcritures detailsEcritures={project?.detailsEcritures}/>
          </section>
        )}
        {(project?.demonstration || (project?.lienProjet && project.lienProjet.length > 0) || (project?.lienGitHub && project.lienGitHub.length > 0)) && (
          <section className="demo-acces-code-section">
            <DemoAccesCode 
              demonstration={project?.demonstration}
              lienProjet={project?.lienProjet}
              lienGitHub={project?.lienGitHub}
            />
          </section>
        )}
      </section>
    );
  };
  
  export default PersonalProjectView;