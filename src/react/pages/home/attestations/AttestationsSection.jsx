import AttestationCard from './AttestationCard';
import attestationData  from '@/react/data/attestations.json';

const AttestationsSection = () => {
  const { attestations } = attestationData;

  return (
    <div className="attestations-container">
      <h2 className="attestations-section__title">Attestations et Recommandations</h2>
      <div className="attestations-cards-container">
        {attestations.map((attestation) => (
          <AttestationCard
            key={attestation.id}
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
