import AttestationCard from './AttestationCard';
import attestationData  from '@/react/data/attestations.json';
import { useTranslation } from 'react-i18next';

const AttestationsSection = () => {
  const { attestations } = attestationData;
  const { t } = useTranslation();
  return (
    <div className="attestations-container">
      <h2 className="attestations-section__title">{t('recommendations.title')}</h2>
      <div className="attestations-cards-container">
        {attestations.map((attestation) => (
          <AttestationCard
            key={attestation.id}
            id={attestation.id}
            author={attestation.author}
            recipient={attestation.recipient}
            projects={attestation.projects}
            verificationAvailable={attestation.verificationAvailable}
          />
        ))}
      </div>
    </div>
  );
};

export default AttestationsSection;
