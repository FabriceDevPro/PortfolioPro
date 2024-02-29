import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa'; // Assurez-vous que cet import est correct
import { IoIosRocket } from 'react-icons/io';

const DemoAccesCode = ({ demonstration, lienProjet, lienGitHub }) => {
  return (
    <div className="demo-acces-code-section">
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
          <a key={index} className="button-github" href={github.lien} target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon button-icon" />
            {github.titre}
          </a>
        ))}
      </div>
    </div>
  );
};

DemoAccesCode.propTypes = {
  demonstration: PropTypes.string,
  lienProjet: PropTypes.arrayOf(PropTypes.shape({
    titre: PropTypes.string.isRequired,
    lien: PropTypes.string.isRequired,
  })),
  lienGitHub: PropTypes.arrayOf(PropTypes.shape({
    titre: PropTypes.string.isRequired,
    lien: PropTypes.string.isRequired,
  })),
};

export default DemoAccesCode;
