import { useParams } from "react-router-dom";
import projectsData from '../../../data/personalProjects';
import Fonctionalite from "./Fonctionalite";
import DetailsEcritures from "./DetailsEcritures";
import DemoAccesCode from "./DemoAccesCode";
const PersonalProjectView = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id.toString() === id); // Trouvez le projet dans votre état global ou chargez-le via une API
  
    return (
      <>
        <h1>{project?.name}</h1>
        {/* Affichez d'autres détails du projet ici */}
        <Fonctionalite fonctionnalites={project?.fonctionnalites} />
        {/* Assurez-vous de passer les props nécessaires à Fonctionalite ou à d'autres composants */}
        <DetailsEcritures detailsEcritures={project?.detailsEcritures}/>
        {/* Assurez-vous de passer les props nécessaires à Fonctionalite ou à d'autres composants */}
        <DemoAccesCode 
          demonstration={project?.demonstration}
          lienProjet={project?.lienProjet}
          lienGitHub={project?.lienGitHub}
        />
      </>
    );
  };

  export default PersonalProjectView;