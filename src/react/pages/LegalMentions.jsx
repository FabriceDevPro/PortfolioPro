import useScrollToHash from "@/react/hooks/useScrollToHash";
import legalContent from '@/react/data/legalContent'; // Supposons que c'est le fichier pour le contenu
import { useTranslation } from 'react-i18next';

// export default LegalMentions;
const LegalMentions = () => {
  useScrollToHash(100); // Utilisation du hook personnalisé pour le défilement
  const { t, i18n } = useTranslation();
  // Déterminez si la langue actuellement active est l'anglais.
  const isEnglish = i18n.language.startsWith('en');
  
  // Si la langue est l'anglais, utilisez les traductions de i18next,
  // sinon, utilisez le contenu importé de legalContent.
  const contentToDisplay = isEnglish
    ? t('contact.legalMentions', { returnObjects: true })
    : legalContent;

  return (
    <section className="legal-mentions-section" id="legal-mentions">
      {contentToDisplay.map((section, index) => (
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