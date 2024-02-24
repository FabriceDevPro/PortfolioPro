import imagesCertifFormation from '../../assets/images-certif-formation';
import PropTypes from 'prop-types'; // Importez PropTypes

const CertificationCard = ({ certification }) => {
  return (
    <div className="certification-card">
      <img src={imagesCertifFormation[certification.img]} alt={certification.name} className="certification-image" />
      <h3 className="certification-title">{certification.name}</h3>
      <a href={certification.url} target="_blank" rel="noopener noreferrer" className="certification-link">Voir la certification</a>
    </div>
  );
};

// Déclaration des propTypes pour CertificationCard
CertificationCard.propTypes = {
  certification: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default CertificationCard;
