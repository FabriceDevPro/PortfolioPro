import PropTypes from 'prop-types';
import { CiBank, CiShare2 } from 'react-icons/ci';
import { TbLockShare } from 'react-icons/tb';
import { FiBookOpen } from 'react-icons/fi';
import { GrValidate } from 'react-icons/gr';
import { FaLock } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const iconMapping = {
  "Gestion de comptes bancaires personnels": <CiBank className="icon" />,
  "Saisies d'écritures comptables": <FiBookOpen className="icon" />,
  "Partage des écritures": <CiShare2 className="icon" />,
  "Compte Joint": <TbLockShare className="icon" />,
  "Validation des écritures": <FaLock className="icon" />,
  "Clôture de l'Exercice Comptable": <GrValidate className="icon" /> // Assurez-vous que ce titre correspond à l'un de vos objets de fonctionnalité
};

const Fonctionalite = ({ fonctionnalites }) => {
  const { t,i18n } = useTranslation();
  const badgeClass = i18n.language === 'en' ? 'badge-en' : 'badge-fr';
  return (    
    <>
      <h2 className="section-title">{t('projects.personal.mainFeatures')} :</h2>
      <div className="features-container">
        {fonctionnalites.map((fonctionnalite, index) => (
          <div key={index} className="feature-card">
            {fonctionnalite.badge && (
              <div className={`badge ${badgeClass}`}>{t(`projectpersonal:${fonctionnalite.badge}`)}</div>
            )}
            {iconMapping[fonctionnalite.titre] || <CiBank className="icon" />} {/* Fallback Icon */}
            <div className="feature-text">
              <h3>{t(`projectpersonal:${fonctionnalite.titre}`)}</h3>
              <p>{t(`projectpersonal:${fonctionnalite.description}`)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Fonctionalite.propTypes = {
  fonctionnalites: PropTypes.arrayOf(PropTypes.shape({
    titre: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    badge: PropTypes.string, // `badge` est optionnel
  })).isRequired,
};

export default Fonctionalite;
