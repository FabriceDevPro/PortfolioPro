import { FaInfoCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const FormationProjectCard = ({ project, onOpenModal }) => (
  <div className="formation-projects-card">
    <div className="project-image-container">
      <img src={project.imgcard} alt={`Aperçu de ${project.name}`} className="project-image" />
    </div>
    <div className="project-content">
      <h2 className="project-title">{project.name}</h2>
      <p className="project-brief">{project.brief}</p>
      <div className="project-languages">
        {project.languages.map((lang, index) => (
          <img key={index} src={lang.logo} alt={`logo_${lang.name}`} className="language-logo" />
        ))}
      </div>
      <button onClick={() => onOpenModal(project)} className="project-view-button">
        <FaInfoCircle  className="icon button-icon" />
        Voir Plus
      </button>
    </div>
  </div>
);

FormationProjectCard.propTypes = {
  project: PropTypes.shape({
    imgcard: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    brief: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        logo: PropTypes.string // Notez que logo n'est pas marqué comme 'isRequired'
      })
    ).isRequired,
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default FormationProjectCard;
