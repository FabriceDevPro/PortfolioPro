import PropTypes from 'prop-types';
import PersonalProject from './projet-perso/PersonalProject';
import FormationProject from './projet-formation/FormationProject';
import { useTranslation } from 'react-i18next';
import { FaFilter } from 'react-icons/fa';

const Projects = ({ personalProjects, formationProjects,isFiltered,activeSkill,onFilterReset  }) => {
  const { t } = useTranslation();

return (
    <>
     {isFiltered && (
        <>
          <div className="filter-message">
            {t('projects.filterMessage', { skill: activeSkill })}          
          <FaFilter 
            className="projects-section__filter-reset" 
            onClick={onFilterReset} 
            title={t('skills.resetFilter')}
          />
          </div>
        </>
      )}
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
    </>
  );
};

Projects.propTypes = {
  personalProjects: PropTypes.array.isRequired,
  formationProjects: PropTypes.array.isRequired,
  isFiltered: PropTypes.bool,
  activeSkill: PropTypes.string,
  onFilterReset: PropTypes.func,
};
Projects.defaultProps = {
  isFiltered: false,
  activeSkill: '',
  onFilterReset: () => {},
};
export default Projects;