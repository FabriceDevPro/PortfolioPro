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
            <p>
              <strong>Thème :</strong> {project.theme}
            </p>            
            {/* <p>
              <strong>Brief :</strong> {project.brief}
            </p> */}
            <p>
              <strong>Mission :</strong> {project.mission}
            </p>
            {project.results && (
              <p>
                <strong>Résultats atteints :</strong> {project.results}
              </p>
            )}
            <p>
              <strong>Apprentissages clés :</strong> {project.learnings}
            </p>
            {project.challenges && (
              <p>
                <strong>Défis rencontrés :</strong> {project.challenges}
              </p>
            )}
            <div>
              <HiLightBulb  />
              <span>Idée lumineuse</span>
              </div>
            <p>
              <strong>Technologie(s) utilisée(s) :</strong>
            </p>
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
        <div className="modal-footer">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <button className="project-view-button">
            <TbWorldWww className="icon button-icon" />
              Voir le site démo</button>
          </a>
          <a href={project.url_git} target="_blank" rel="noopener noreferrer">
            <button className="project-view-button">
            <FaGithub className="icon button-icon" />
              Voir GitHub</button>
          </a>
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
