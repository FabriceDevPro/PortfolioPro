import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa'; // Assurez-vous que cet import est correct
import { IoIosRocket } from 'react-icons/io';
import { useContactModal } from '../../../context/ContactModal';

const DemoAccesCode = ({ demonstration, lienProjet, lienGitHub }) => {

  const { openModal } = useContactModal();
  
  const handleGitHubLinkClick = (lien, estPublic) => {
    if (estPublic) {
      window.open(lien, '_blank', 'noopener,noreferrer');
    } else {
      openModal(); // Ouverture du modal de contact
    }
  };

  return (
    <>
      <h2 className="section-title">Démonstration et accès au code :</h2>
      <p>{demonstration}</p>
      <div className="buttons">
        {lienProjet.map((projet, index) => (
          <a key={index} className="button-projet" href={projet.lien} target="_blank" rel="noopener noreferrer">
            <IoIosRocket className="icon button-icon" />
            {projet.titre}
          </a>
        ))}
        {lienGitHub.map((github, index) => (
          <button key={index} className="button-github" onClick={() => handleGitHubLinkClick(github.lien, github.estPublic)}>
            <FaGithub className="icon button-icon" />
            {github.titre}
          </button>
        ))}
      </div>
    </>
  );
};

DemoAccesCode.propTypes = {
  demonstration: PropTypes.string.isRequired,
  lienProjet: PropTypes.arrayOf(PropTypes.shape({
    titre: PropTypes.string.isRequired,
    lien: PropTypes.string.isRequired,
  })).isRequired,
  lienGitHub: PropTypes.arrayOf(PropTypes.shape({
    titre: PropTypes.string.isRequired,
    estPublic: PropTypes.bool.isRequired,
    lien: PropTypes.string,
  })).isRequired,
};

export default DemoAccesCode;
