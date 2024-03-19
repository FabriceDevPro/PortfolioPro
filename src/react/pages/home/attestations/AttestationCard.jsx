import PropTypes from 'prop-types'; 

const AttestationCard = ({ author, recipient, projects, verificationAvailable }) => {
  return (
    <div className="attestation-card">
      <div className="attestation-author">
        <strong>Émis par :</strong> {author.name}, {author.position} chez {author.company}, {author.location}
      </div>
      <div className="section-divider"></div>
      <div className="attestation-recipient">
        <strong>Attribué à :</strong> {recipient.name}, {recipient.position}
      </div>
      <div className="section-divider"></div>
      {projects.map((project, index) => (
        <div key={index} className="attestation-projects">
          <div className="project-year"><strong>Année :</strong> {project.year}</div>
          <div className="project-description"><strong>Description :</strong> {project.description}</div>
          <div className="project-technologies"><strong>Technologies :</strong> {project.technologies.join(', ')}</div>
          {index < projects.length - 1 && <div className="section-divider"></div>}
        </div>
      ))}
      {verificationAvailable && (
        <div className="attestation-verification">
          <p>{`Une copie de l'attestation originale peut être fournie sur demande.`}</p>
        </div>
      )}
    </div>
  );
};

AttestationCard.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
  recipient: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
  }).isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  verificationAvailable: PropTypes.bool,
};

export default AttestationCard;