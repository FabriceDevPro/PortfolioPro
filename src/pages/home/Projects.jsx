import PropTypes from 'prop-types';
import PersonalProject from './projet-perso/PersonalProject';
import FormationProject from './projet-formation/FormationProject';

const Projects = ({ personalProjects, formationProjects }) => {
  return (
    <div className="projects-container">
      <div className="personal-projects-container" data-tooltip={`Nombre de projets réalisés : ${personalProjects.length}`}>
        <PersonalProject 
          title="Mes projets personnels"
          projects={personalProjects}
        />
      </div>
      <div className="formation-projects-container" data-tooltip={`Nombre de projets réalisés : ${formationProjects.length}`}>
        <FormationProject 
          title="Mes projets de formation"
          projects={formationProjects}
        />
      </div>            
    </div>
  );
};

Projects.propTypes = {
  personalProjects: PropTypes.array.isRequired,
  formationProjects: PropTypes.array.isRequired
};

export default Projects;