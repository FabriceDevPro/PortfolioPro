import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaWpexplorer } from 'react-icons/fa';
import images_projet_perso from '../../../assets/images-projet-perso';

const PersonalProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const redirectToDetails = () => {
    navigate(`/personal-project/${project.id}`);
  };

  const galleryImages = project.images.map((image) => ({
    original: images_projet_perso[image.nomimage], // Utilisez l'objet d'images pour récupérer chaque image
    description: image.titre,
  }));

  return (
    <div className="personal-project-card">
      <h2 className="personal-project-title">{project.name}</h2>
      <Gallery items={galleryImages} />
      <div className="personal-project-content">
        <p className="personal-project-brief">{project.description}</p>
        <button className="project-view-button" onClick={redirectToDetails}>
          <FaWpexplorer className="icon button-icon" />
          Explorer le Projet
        </button>
      </div>
    </div>
  );
};

PersonalProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        titre: PropTypes.string.isRequired,
        nomimage: PropTypes.string.isRequired,
      })
    ).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PersonalProjectCard;
