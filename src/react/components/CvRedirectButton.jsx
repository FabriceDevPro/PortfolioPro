import { FaRegFilePdf } from "react-icons/fa";

const CvRedirectButton = () => {
  const handleRedirect = () => {
    // Définissez l'URL du CV
    const url = 'https://my-resume.fabwebprojects.fr';

    // Ouvrez l'URL dans un nouvel onglet
    window.open(url, '_blank');
  };

  return (
    <div className="cv-redirect">
      <button className="project-view-button" onClick={handleRedirect}>
        <FaRegFilePdf className="icon button-icon" />
        Voir le CV {/* Texte du bouton */}
      </button>
    </div>
  );
};

export default CvRedirectButton;
