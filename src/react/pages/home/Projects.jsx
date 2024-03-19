import PropTypes from 'prop-types';
import PersonalProject from './projet-perso/PersonalProject';
import FormationProject from './projet-formation/FormationProject';
import { useTranslation } from 'react-i18next';

const Projects = ({ personalProjects, formationProjects }) => {
  const { t } = useTranslation();

  return (
    <div className="projects-container">
      <div className="personal-projects-container" data-tooltip={t('projects.countTooltip', { count: personalProjects.length })}>
        <PersonalProject 
          title={t('projects.personal.title')}
          projects={personalProjects}
        />
      </div>
      <div className="formation-projects-container" data-tooltip={t('projects.countTooltip', { count: formationProjects.length })}>
        <FormationProject 
          title={t('projects.formation.title')}
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