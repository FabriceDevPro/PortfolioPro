import PropTypes from 'prop-types';
import { FiFileText, FiList, FiCalendar } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

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
  const { t,i18n } = useTranslation();
  const badgeClass = i18n.language === 'en' ? 'badge-en' : 'badge-fr';
  return (
    <>
      <h2 className="section-title">{t('projects.personal.writingDetails')} :</h2>
      <div className="features-container">
        {detailsEcritures.map((detail, index) => (
          <div key={index} className="feature-card">
            {detail.badge && (
              <div className={`badge ${badgeClass}`}>{t(`projectpersonal:${detail.badge}`)}</div>
            )}
            {getIconForDetail(detail.titre)}
            <div className="feature-text">
              <h3>{t(`projectpersonal:${detail.titre}`)}</h3>
              <p>{t(`projectpersonal:${detail.description}`)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

DetailsEcritures.propTypes = {
  detailsEcritures: PropTypes.arrayOf(PropTypes.shape({
    titre: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default DetailsEcritures;
