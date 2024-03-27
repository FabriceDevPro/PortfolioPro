import PropTypes from "prop-types";
import Modal from "react-modal";
import { FaGithub } from 'react-icons/fa6';
import { TbWorldWww } from "react-icons/tb";
import { HiLightBulb } from "react-icons/hi";
import { useTranslation } from 'react-i18next';

const FormationProjectModal = ({ isOpen, onClose, project }) => {
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Project Modal"
      ariaHideApp={false}
      className="custom-modal" // Appliquez une classe CSS personnalisée pour le style du modal
      overlayClassName="custom-overlay" // Classe CSS personnalisée pour l'arrière-plan du modal
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2>{t(`projectformation:${project.name}`)}</h2>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-image-container">
            <img src={project.img} alt={project.name} />
          </div>
          <div className="modal-project-details">
            <div className="modal-project-brief">
              <h3 className="modal-project-details-title">{t('projects.formation.theme')} :</h3>
              <p>{t(`projectformation:${project.theme}`)}</p>
            </div>
            <div className="modal-project-brief">
              <h3 className="modal-project-details-title">{t('projects.formation.mission')} :</h3>
              <p>{t(`projectformation:${project.mission}`)}</p>
            </div>            
            {project.results && (
              <div className="modal-project-brief">
                <h3 className="modal-project-details-title">{t('projects.formation.achievedResults')} :</h3>
                <p>{t(`projectformation:${project.results}`)}</p>
                </div>
            )}            
            <div className="modal-project-brief">
              <h3 className="modal-project-details-title">{t('projects.formation.evaluatedSkills')} :</h3>
              <ul>
                {project.learnings.map((learning, index) => (
                  <li key={index}><HiLightBulb /> {t(`projectformation:${learning}`)}</li>
                ))}
              </ul>
            </div>
            {project.challenges && (
              <div className="modal-project-brief">
              <h3 className="modal-project-details-title">{t('projects.formation.encounteredChallenges')} :</h3>
              <p>{t(`projectformation:${project.challenges}`)}</p>
              </div>
            )}
            {project.complement && (
              <div className="modal-project-brief">
              <h3 className="modal-project-details-title">{t('projects.formation.demoInformation')} :</h3>
              <ul>
                {project.complement.map((complement, index) => (
                  <li key={index}>{t(`projectformation:${complement}`)}</li>
                ))}
              </ul>
              </div>
            )}              
            <div className="modal-project-brief">
              <h3 className="modal-project-details-title">{t('projects.formation.usedTechnologies')} :</h3>
              <div className="modal-project-languages">
                {project.languages.map((lang) => (
                  <div key={lang.name} className="modal-language-logo">
                    <img src={lang.logo} alt={`logo_${lang.name}`} />
                    <span className="modal-language-name">{lang.altText}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <button className="project-view-button">
                <TbWorldWww className="icon button-icon" />
                {t('projects.formation.viewDemoSite')}
              </button>
            </a>
          )}
          {project.url_git && (
            <a href={project.url_git} target="_blank" rel="noopener noreferrer">
              <button className="project-view-button">
                <FaGithub className="icon button-icon" />
                {t('projects.formation.viewGitHub')}
              </button>
            </a>
          )}
          <button onClick={onClose} className="project-view-button">
          {t('projects.formation.close')}
          </button>
        </div>
      </div>
    </Modal>
  );
};

// Déclarez les prop-types pour valider les props
FormationProjectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired, 
  project: PropTypes.shape({
    name: PropTypes.string.isRequired, 
    img: PropTypes.string.isRequired, 
    theme: PropTypes.string.isRequired, 
    brief: PropTypes.string.isRequired, 
    mission: PropTypes.string.isRequired, 
    results: PropTypes.string, 
    learnings: PropTypes.arrayOf(PropTypes.string).isRequired, 
    challenges: PropTypes.string,
    complement: PropTypes.arrayOf(PropTypes.string), 
    languages: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
        altText: PropTypes.string
      })
    ).isRequired, 
    url: PropTypes.string,
    url_git: PropTypes.string, 
  }).isRequired,
};

export default FormationProjectModal;
