import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaWpexplorer } from 'react-icons/fa';
// Importez vos images à partir du fichier externe (ajustez les chemins selon votre structure de fichiers)
import { viewLogin, viewList, viewAccount, viewCreate } from '../../../assets/images-projet-perso.js';

const PersonalProjectCard = ({ title, projects }) => {
  const navigate = useNavigate();

  const redirectToDetails = () => {
    navigate('/personal-project');
  };

  const getImagePathByTitle = (nomimage) => {
    switch (nomimage) {
      case 'view-login.webp':
        return viewLogin;
      case 'view-list.webp':
        return viewList;
      case 'view-account.webp':
        return viewAccount;
      case 'view-create.webp':
        return viewCreate;
      default:
        return null;
    }
  };

  return (
    <>
      <h2 className="section-title">{title}</h2>
      {projects.map((project, index) => {
        const imagesWithFullPath = project.images.map((image) => ({
          ...image,
          chemin: getImagePathByTitle(image.nomimage),
        }));

        const galleryImages = imagesWithFullPath.map((image, index) => ({
          original: image.chemin,
          description: image.titre,
          key: index,
        }));

        return (
          <div key={index} className="personal-project-card">
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
      })}
    </>
  );
};

PersonalProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          titre: PropTypes.string.isRequired,
          nomimage: PropTypes.string.isRequired,
        })
      ).isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PersonalProjectCard;