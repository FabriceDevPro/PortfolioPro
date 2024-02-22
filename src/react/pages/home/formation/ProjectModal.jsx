import PropTypes from "prop-types";
import Modal from "react-modal";
import { FaGithub } from 'react-icons/fa6';
import { IoIosRocket } from 'react-icons/io';

const ProjectModal = ({ isOpen, onClose, project }) => {
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
            <p>
              <strong>Brief :</strong> {project.brief}
            </p>
            <p>
              <strong>Mission :</strong> {project.mission}
            </p>
            <p>
              <strong>Technologie(s) utilisée(s) :</strong>
            </p>
            <div className="modal-project-languages">
              {project.languages.map((lang) => (
                <div key={lang.name} className="modal-language-logo">
                  <img src={lang.logo} alt={lang.name} />
                  <span className="modal-language-name">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <button className="project-view-button">
            <IoIosRocket className="icon button-icon" />
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
ProjectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // isOpen doit être un booléen obligatoire
  onClose: PropTypes.func.isRequired, // onClose doit être une fonction obligatoire
  project: PropTypes.shape({
    name: PropTypes.string.isRequired, // name doit être une chaîne obligatoire
    img: PropTypes.string.isRequired, // img doit être une chaîne obligatoire
    theme: PropTypes.string.isRequired, // theme doit être une chaîne obligatoire
    brief: PropTypes.string.isRequired, // brief doit être une chaîne obligatoire
    mission: PropTypes.string.isRequired, // mission doit être une chaîne obligatoire
    languages: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
      })
    ).isRequired, // languages doit être un tableau d'objets avec des propriétés spécifiées
    url: PropTypes.string.isRequired,
    url_git: PropTypes.string.isRequired, // url doit être une chaîne obligatoire
  }).isRequired,
};

export default ProjectModal;
