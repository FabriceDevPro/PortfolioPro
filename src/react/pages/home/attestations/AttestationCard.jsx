import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'; 

const AttestationCard = ({author, recipient, projects, verificationAvailable }) => {
  const { t } = useTranslation('attestations');

  return (
    <div className="attestation-card">
      <div className="attestation-author">
        <strong>{t('issuedByTitle')} :</strong> {author.name}, {t(author.position)} {t('companyPreposition')} {author.company}, {author.location}
      </div>
      <div className="section-divider"></div>
      <div className="attestation-recipient">
        <strong>{t('assignedToTitle')} :</strong> {recipient.name}, {t(recipient.position)}        
      </div>
      <div className="section-divider"></div>
      {projects.map((project, index) => (
        <div key={index} className="attestation-projects">
          <div className="project-year"><strong>{t('yearsTitle')} :</strong> {project.year}</div>
          <div className="project-description"><strong>{t('descriptionTitle')} :</strong> {t(project.description)}</div>
          <div className="project-technologies"><strong>{t('technologiesTitle')} :</strong> {project.technologies.join(', ')}</div>
          {index < projects.length - 1 && <div className="section-divider"></div>}
        </div>
      ))}
      {verificationAvailable && (
        <div className="attestation-verification">
          <p>{t('verificationAvailable')}</p>
        </div>
      )}
    </div>
  );
};

AttestationCard.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired, // Ce sont des clés de traduction maintenant
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  recipient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired, // Ce sont des clés de traduction maintenant
  }).isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired, // Ce sont des clés de traduction maintenant
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired
  })).isRequired,
  verificationAvailable: PropTypes.string,
};

export default AttestationCard;
