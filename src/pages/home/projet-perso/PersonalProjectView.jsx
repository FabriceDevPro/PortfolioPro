import { useParams } from "react-router-dom";
import projectsData from '../../../data/personalProjects';
import Fonctionalite from "./Fonctionalite";
import DetailsEcritures from "./DetailsEcritures";
import DemoAccesCode from "./DemoAccesCode";
import Chronologie from "./Chronologie";
import Description from "./Description";

const PersonalProjectView = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id.toString() === id); // Trouvez le projet dans votre état global ou chargez-le via une API
  
    return (
      <>
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
      </>
    );
  };

  export default PersonalProjectView;