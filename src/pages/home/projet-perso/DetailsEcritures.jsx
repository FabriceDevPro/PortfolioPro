import PropTypes from 'prop-types';
import { FiFileText, FiList, FiCalendar } from 'react-icons/fi';

const iconMapping = {
  "Type de saisie": <FiFileText className="icon" />,
  "Catégories": <FiFileText className="icon" />,
  "Écritures récurrentes": <FiCalendar className="icon" />,
  "Transferts automatiques": <FiFileText className="icon" />,
  "Statut du Partage": <FiList className="icon" />,
  "Statut du Rapprochement Bancaire": <FiList className="icon" />,
  "Suivi des dépenses liés à la Santé": <FiList className="icon" />,
  "Suivi des Provisions": <FiList className="icon" />,
  "Suivi des Commandes": <FiList className="icon" />,
  // Ajoutez d'autres mappages ici selon vos besoins
};

// Fonction pour obtenir l'icône basée sur le titre
const getIconForDetail = (titre) => {
  return iconMapping[titre] || <FiFileText className="icon" />; // Utilisez FiFileText comme icône par défaut
};

const DetailsEcritures = ({ detailsEcritures }) => {
  return (
    <div className="details-ecritures-section">
      <h2 className="section-title">Détails des Ecritures :</h2>
      <div className="features-container">
        {detailsEcritures.map((detail, index) => (
          <div key={index} className="feature-card">
            {getIconForDetail(detail.titre)} {/* Utiliser la fonction getIconForDetail pour déterminer l'icône */}
            <div className="feature-text">
              <h3>{detail.titre}</h3>
              <p>{detail.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

DetailsEcritures.propTypes = {
  detailsEcritures: PropTypes.arrayOf(PropTypes.shape({
    titre: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default DetailsEcritures;
