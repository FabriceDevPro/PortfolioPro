import PropTypes from "prop-types";
import Modal from "react-modal";
import { FaGithub } from 'react-icons/fa6';
import { TbWorldWww } from "react-icons/tb";
import { HiLightBulb } from "react-icons/hi";
const FormationProjectModal = ({ isOpen, onClose, project }) => {
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
          <h2>{project.name}</h2>
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
              <h3 className="modal-project-details-title">Thème :</h3>
              <p>{project.theme}</p>
            </div>
            <div className="modal-project-brief">
              <h3 className="modal-project-details-title">Mission :</h3>
              <p>{project.mission}</p>
            </div>            
            {project.results && (
              <div className="modal-project-brief">
                <h3 className="modal-project-details-title">Résultats atteints :</h3>
                <p>{project.results}</p>
                </div>
            )}            
            <div className="modal-project-brief">
              <h3 className="modal-project-details-title">Compétences évaluées :</h3>
              <ul>
                {project.learnings.map((learning, index) => (
                  <li key={index}><HiLightBulb /> {learning}</li>
                ))}
              </ul>
            </div>            
            {project.challenges && (
              <div className="modal-project-brief">
              <h3 className="modal-project-details-title">Défis rencontrés :</h3>
              <p>{project.challenges}</p>
              </div>
            )}            
            <div className="modal-project-brief">
              <h3 className="modal-project-details-title">Technologie(s) utilisée(s) :</h3>
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
                Voir le site démo
              </button>
            </a>
          )}
          {project.url_git && (
            <a href={project.url_git} target="_blank" rel="noopener noreferrer">
              <button className="project-view-button">
                <FaGithub className="icon button-icon" />
                Voir GitHub
              </button>
            </a>
          )}
          <button onClick={onClose} className="project-view-button">
            Fermer
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
    learnings: PropTypes.string.isRequired, 
    challenges: PropTypes.string, 
    languages: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
      })
    ).isRequired, 
    url: PropTypes.string.isRequired, 
    url_git: PropTypes.string.isRequired, 
  }).isRequired,
};

export default FormationProjectModal;
