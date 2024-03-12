import useScrollToHash from "../hooks/useScrollToHash";
import legalContent from '../data/legalContent'; // Supposons que c'est le fichier pour le contenu

const LegalMentions = () => {
  useScrollToHash(100); // Utilisation du hook personnalisé pour le défilement

  return (
    <section className="legal-mentions-section" id="legal-mentions">
      {legalContent.map((section, index) => (
        <div key={index} className="legal-section">
          <h2>{section.title}</h2>
          {section.content.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>{paragraph}</p>
          ))}
        </div>
      ))}
    </section>
  );
};

export default LegalMentions;
