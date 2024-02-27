import certifications from '../data/certificationFormation';
import CertificationCard from './certifications/CertificationCard';

// Fonction pour regrouper les certifications par groupe
const groupCertifications = (certifications) => {
  return certifications.reduce((acc, certification) => {
    const { groupe } = certification;
    if (!acc[groupe]) {
      acc[groupe] = [];
    }
    acc[groupe].push(certification);
    return acc;
  }, {});
};

// Trier les groupes spécifiquement par "Formation" puis "Compléments"
const sortGroupedCertifications = (groupedCertifications) => {
  const formations = groupedCertifications["Formation"] ? { "Formation": groupedCertifications["Formation"] } : {};
  const complements = groupedCertifications["Compléments"] ? { "Compléments": groupedCertifications["Compléments"] } : {};

  delete groupedCertifications["Formation"];
  delete groupedCertifications["Compléments"];

  return { ...formations, ...groupedCertifications, ...complements };
};

const Certifications = () => {
  const groupedCertifications = groupCertifications(certifications);
  const sortedGroupedCertifications = sortGroupedCertifications(groupedCertifications);
  const cardsPerRow = 3; // Adaptez cette valeur à votre mise en page

  return (
    <main>
      {Object.entries(sortedGroupedCertifications).map(([groupName, certs]) => (
        <section key={groupName} className="certifications-section" id={groupName.toLowerCase()}>
          <h2 className="section-title">{`Certifications ${groupName}`}</h2>
          <div className="certifications-container">
            {certs.map((certification, index) => (
              <CertificationCard
                key={certification.id}
                certification={certification}
                style={{
                  animation: `fadeInUp 0.5s ease-out forwards`,
                  animationDelay: `${Math.floor(index / cardsPerRow) * 0.5}s`,
                  opacity: 0 // Assurez-vous que les cartes commencent invisibles pour permettre l'animation
                }}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Certifications;